// Visual Artists App - Search, Sort, Display

let currentSortType = 'followers-asc';
let currentSearchQuery = '';

// Get maximum followers from all platforms
function getMaxFollowers(artist) {
    const followers = artist.followers || {};
    const values = Object.values(followers).filter(v => v > 0);
    return values.length > 0 ? Math.max(...values) : 0;
}

// Format follower count
function formatFollowers(count) {
    if (count === 0) return 'N/A';
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
}

// Render artist card
function renderArtistCard(artist) {
    const card = document.createElement('div');
    card.className = 'artist-card';

    const maxFollowers = getMaxFollowers(artist);

    // Artist name
    const nameEl = document.createElement('div');
    nameEl.className = 'artist-name';
    nameEl.textContent = artist.name;
    card.appendChild(nameEl);

    // Followers info
    const followersEl = document.createElement('div');
    followersEl.className = 'artist-followers';

    if (artist.followers && Object.keys(artist.followers).length > 0) {
        const platforms = [];
        if (artist.followers.instagram) {
            platforms.push(`<span class="platform">📷 IG: <span class="count">${formatFollowers(artist.followers.instagram)}</span></span>`);
        }
        if (artist.followers.twitter) {
            platforms.push(`<span class="platform">🐦 Twitter: <span class="count">${formatFollowers(artist.followers.twitter)}</span></span>`);
        }
        if (artist.followers.spotify) {
            platforms.push(`<span class="platform">🎵 Spotify: <span class="count">${formatFollowers(artist.followers.spotify)}</span></span>`);
        }
        if (artist.followers.tiktok) {
            platforms.push(`<span class="platform">📱 TikTok: <span class="count">${formatFollowers(artist.followers.tiktok)}</span></span>`);
        }
        followersEl.innerHTML = platforms.join('');
    } else {
        followersEl.textContent = 'Followers data pending';
        followersEl.style.opacity = '0.5';
    }
    card.appendChild(followersEl);

    // Categories
    if (artist.categories && artist.categories.length > 0) {
        const categoriesEl = document.createElement('div');
        categoriesEl.className = 'artist-categories';

        artist.categories.forEach(category => {
            const tag = document.createElement('span');
            tag.className = 'category-tag';
            tag.textContent = category;
            categoriesEl.appendChild(tag);
        });

        card.appendChild(categoriesEl);
    }

    // Social links
    const linksEl = document.createElement('div');
    linksEl.className = 'artist-links';

    if (artist.links) {
        if (artist.links.instagram) {
            const link = document.createElement('a');
            link.href = artist.links.instagram;
            link.target = '_blank';
            link.className = 'social-link instagram';
            link.textContent = 'Instagram';
            linksEl.appendChild(link);
        }
        if (artist.links.twitter) {
            const link = document.createElement('a');
            link.href = artist.links.twitter;
            link.target = '_blank';
            link.className = 'social-link twitter';
            link.textContent = 'Twitter';
            linksEl.appendChild(link);
        }
        if (artist.links.website) {
            const link = document.createElement('a');
            link.href = artist.links.website;
            link.target = '_blank';
            link.className = 'social-link website';
            link.textContent = 'Website';
            linksEl.appendChild(link);
        }
        if (artist.links.bandcamp) {
            const link = document.createElement('a');
            link.href = artist.links.bandcamp;
            link.target = '_blank';
            link.className = 'social-link';
            link.textContent = 'Bandcamp';
            linksEl.appendChild(link);
        }
        if (artist.links.linktree) {
            const link = document.createElement('a');
            link.href = artist.links.linktree;
            link.target = '_blank';
            link.className = 'social-link';
            link.textContent = 'Linktree';
            linksEl.appendChild(link);
        }
    }

    card.appendChild(linksEl);
    return card;
}

// Filter and sort artists
function filterAndSortArtists() {
    let filteredArtists = [...visualArtistsData];

    // Apply search filter
    if (currentSearchQuery) {
        filteredArtists = filteredArtists.filter(artist => {
            const searchLower = currentSearchQuery.toLowerCase();
            const nameMatch = artist.name.toLowerCase().includes(searchLower);
            const categoriesMatch = artist.categories &&
                artist.categories.some(cat => cat.toLowerCase().includes(searchLower));
            return nameMatch || categoriesMatch;
        });
    }

    // Apply sorting
    if (currentSortType === 'name') {
        filteredArtists.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSortType === 'followers-asc') {
        filteredArtists.sort((a, b) => {
            const aMax = getMaxFollowers(a);
            const bMax = getMaxFollowers(b);

            // Artists without data go to end
            if (aMax === 0 && bMax === 0) return 0;
            if (aMax === 0) return 1;
            if (bMax === 0) return -1;

            return aMax - bMax;
        });
    } else if (currentSortType === 'followers-desc') {
        filteredArtists.sort((a, b) => {
            const aMax = getMaxFollowers(a);
            const bMax = getMaxFollowers(b);

            // Artists without data go to end
            if (aMax === 0 && bMax === 0) return 0;
            if (aMax === 0) return 1;
            if (bMax === 0) return -1;

            return bMax - aMax;
        });
    }

    return filteredArtists;
}

// Render all artists
function renderArtists() {
    const grid = document.getElementById('artistsGrid');
    grid.innerHTML = '';

    const filteredArtists = filterAndSortArtists();

    filteredArtists.forEach(artist => {
        const card = renderArtistCard(artist);
        grid.appendChild(card);
    });

    // Update stats
    const statsEl = document.getElementById('stats');
    const artistsWithData = visualArtistsData.filter(a => getMaxFollowers(a) > 0).length;
    statsEl.textContent = `Showing ${filteredArtists.length} of ${visualArtistsData.length} artists • ${artistsWithData} with follower data`;
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', (e) => {
    currentSearchQuery = e.target.value;
    renderArtists();
});

document.getElementById('sortName').addEventListener('click', () => {
    currentSortType = 'name';
    document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('sortName').classList.add('active');
    renderArtists();
});

document.getElementById('sortFollowersAsc').addEventListener('click', () => {
    currentSortType = 'followers-asc';
    document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('sortFollowersAsc').classList.add('active');
    renderArtists();
});

document.getElementById('sortFollowersDesc').addEventListener('click', () => {
    currentSortType = 'followers-desc';
    document.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('sortFollowersDesc').classList.add('active');
    renderArtists();
});

// Initial render
renderArtists();
