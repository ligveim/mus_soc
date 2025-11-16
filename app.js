let currentSort = 'followers-asc';
let filteredArtists = [...artistsData];

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    updateStats();
    renderArtists();

    // Поиск
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filteredArtists = artistsData.filter(artist =>
            artist.name.toLowerCase().includes(query)
        );
        renderArtists();
        updateStats();
    });
});

// Обновление статистики
function updateStats() {
    const total = filteredArtists.length;
    const withSocials = filteredArtists.filter(a => Object.keys(a.links).length > 0).length;
    const withFollowers = filteredArtists.filter(a =>
        Object.values(a.followers).some(f => f !== null && f !== undefined)
    ).length;

    document.getElementById('stats').innerHTML = `
        Всего артистов: ${total} |
        С социальными сетями: ${withSocials} |
        С данными о подписчиках: ${withFollowers}
    `;
}

// Сортировка
function sortArtists(type) {
    currentSort = type;

    // Обновление активной кнопки
    document.querySelectorAll('.sort-buttons button').forEach(btn => {
        btn.classList.remove('active');
    });

    if (type === 'name') {
        document.getElementById('sortName').classList.add('active');
        filteredArtists.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === 'followers-asc') {
        document.getElementById('sortFollowersAsc').classList.add('active');
        filteredArtists.sort((a, b) => {
            const aMax = Math.max(...Object.values(a.followers).filter(f => f !== null && f !== undefined), 0);
            const bMax = Math.max(...Object.values(b.followers).filter(f => f !== null && f !== undefined), 0);
            return aMax - bMax;
        });
    } else if (type === 'followers-desc') {
        document.getElementById('sortFollowersDesc').classList.add('active');
        filteredArtists.sort((a, b) => {
            const aMax = Math.max(...Object.values(a.followers).filter(f => f !== null && f !== undefined), 0);
            const bMax = Math.max(...Object.values(b.followers).filter(f => f !== null && f !== undefined), 0);
            return bMax - aMax;
        });
    }

    renderArtists();
}

// Форматирование числа подписчиков
function formatFollowers(num) {
    if (!num) return 'N/A';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}

// Получение максимального количества подписчиков
function getMaxFollowers(artist) {
    const followers = Object.values(artist.followers).filter(f => f !== null && f !== undefined);
    return followers.length > 0 ? Math.max(...followers) : 0;
}

// Рендеринг артистов
function renderArtists() {
    const grid = document.getElementById('artistsGrid');

    if (filteredArtists.length === 0) {
        grid.innerHTML = '<div class="loading">Артисты не найдены</div>';
        return;
    }

    grid.innerHTML = filteredArtists.map(artist => {
        const maxFollowers = getMaxFollowers(artist);
        const hasData = Object.keys(artist.links).length > 0 || maxFollowers > 0;

        return `
            <div class="artist-card">
                <div class="artist-name">${artist.name}</div>

                ${artist.tags && artist.tags.length > 0 ?
                    artist.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')
                    : ''}

                <div class="artist-stats">
                    ${artist.followers.instagram ? `
                        <div class="stat-item">
                            <span class="stat-label">Instagram</span>
                            <span class="stat-value">${formatFollowers(artist.followers.instagram)}</span>
                        </div>
                    ` : ''}

                    ${artist.followers.spotify ? `
                        <div class="stat-item">
                            <span class="stat-label">Spotify</span>
                            <span class="stat-value">${formatFollowers(artist.followers.spotify)} слушателей</span>
                        </div>
                    ` : ''}

                    ${artist.followers.lastfm ? `
                        <div class="stat-item">
                            <span class="stat-label">Last.fm</span>
                            <span class="stat-value">${formatFollowers(artist.followers.lastfm)} слушателей</span>
                        </div>
                    ` : ''}

                    ${!hasData ? '<div class="no-data">Данные собираются...</div>' : ''}
                </div>

                ${Object.keys(artist.links).length > 0 ? `
                    <div class="social-links">
                        ${artist.links.instagram ? `
                            <a href="${artist.links.instagram}" target="_blank" class="social-link">Instagram</a>
                        ` : ''}
                        ${artist.links.spotify ? `
                            <a href="${artist.links.spotify}" target="_blank" class="social-link">Spotify</a>
                        ` : ''}
                        ${artist.links.tiktok ? `
                            <a href="${artist.links.tiktok}" target="_blank" class="social-link">TikTok</a>
                        ` : ''}
                        ${artist.links.twitter ? `
                            <a href="${artist.links.twitter}" target="_blank" class="social-link">Twitter</a>
                        ` : ''}
                        ${artist.links.bandcamp ? `
                            <a href="${artist.links.bandcamp}" target="_blank" class="social-link">Bandcamp</a>
                        ` : ''}
                        ${artist.links.soundcloud ? `
                            <a href="${artist.links.soundcloud}" target="_blank" class="social-link">SoundCloud</a>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        `;
    }).join('');
}
