#!/usr/bin/env python3
"""
Скрипт для сбора данных об артистах и конвертации в JavaScript формат
"""
import json
import re

# Оригинальные артисты из списка
original_artists = [
    "Monker178", "Mayo", "Blithe Field", "CFCF", "argo nuff", "Eterna", "koronba",
    "Infinity Frequencies", "Boards of Canada", "Rory in early 20s", "Vegyn",
    "Forma Norte", "Leon Vynehall", "optic core", "shamana", "Maebi", "Instupendo",
    "Grouper", "Oneohtrix Point Never", "Loukeman", "Ricky Eat Acid",
    "Machine Girl", "Deathbrain", "African-American Sound", "Casino Versus Japan",
    "Tim Hecker", "Susumu Yokota", "Two Lone Swordsmen", "ilydima",
    "Hype Williams", "Father2006", "ooxygen", "dreamcorp.", "Flaer",
    "Shuta Yasukochi", "sugar plant", "Harpsichord Canvas", "US Golf 95",
    "SSIEGE", "pathetic240px", "untitled (halo)", "Retail Drugs", "Damage Cloud",
    "SPXRXT", "draaq me", "Detente", "Eterna", "Ssaliva", "The Dead Texan",
    "Bogdan Raczynski", "Crystal Castles", "Chihei Hatakeyama", "7038634357",
    "Jeremiah Chiu", "Hooky", "yeahsokaye", "General Translator",
    "Ricky Eat Acid", "Chanel Beads", "Hype Williams", "Downhill2k01",
    "Hainbach", "Jeremy Blake", "Patricia Wolf", "Martyna Basta", "Dean Blunt",
    "yes/and", "Geller", "Nikolaienko", "Arthur Mine", "Crim3s", "Death Hags",
    "Haruhisa Tanaka", "River Tiber", "No Love In The House Of Gold",
    "Other Nothing", "TheExorcist", "Casino Versus Japan", "Actress", "Locust",
    "Slow Attack Ensemble", "Grimes", "Kirk Barley", "Funki Porcini",
    "Astrid Sonne", "Maebi", "Iwakura", "Khotin", "Fools", "Infinity Frequencies",
    "d2s1", "shamana", "Leliel", "The Koreatown Oddity", "Oval", "Trashiii",
    "Two Lone Swordsmen", "$quib", "audry", "Machine Girl", "Xori",
    "Boards of Canada", "Imagine Drowning", "dreamcorp", "Argo Nuff"
]

# Похожие артисты найденные через Last.fm
similar_artists = [
    "Elysia Crampton", "Tujiko Noriko", "Triad God", "Jonatan Leandoer96",
    "Teen Daze", "Lusine", "George Clanton", "Ilkae", "PilotRedSun",
    "Rei Harakami", "Osamu Sato", "Meitei", "Subete Anata no Sei Desu",
    "Sewerslvt", "usedcvnt", "DJ Kuroneko", "Sink Saiko", "Xxtarlit⚸",
    "ZenithLights", "骨架的", "CYBEREALITYライフ", "desert sand feels warm at night",
    "t e l e p a t h テレパシー能力者", "INTERNET CLUB", "Nedaj", "TOKYOPILL",
    "BLKSMIITH", "Heatace", "Eden FM", "Bakground", "Akiba", "Ftlframe",
    "SAGEISKAMI", "Lomaji", "a l e x", "tomcbumpz", "weird inside",
    "Ajmw", "Harris Cole", "fujitive", "killedmyself", "In Love With a Ghost",
    "City Girl", "Elijah Who", "Vague003", "Laxcity", "Cult Member",
    "Delroy Edwards", "Acidgvrl", "Cynthoni", "vmrrobotic", "Aeriu Ika",
    "Robinson's Village", "Sangam", "Windows 96", "Equip", "VAPERROR",
    "Diskette Park", "FM Skyline", "vcr-classique", "회사AUTO", "Balents",
    "Donor Lens", "architecture in tokyo", "Wolfenstein OS X", "Stive Morgan",
    "Organ Tapes", "Malibu", "Bo Khat Eternal Troof Family Band", "Erik Aharzoth",
    "RATBOWL", "timesgone", "leverfall", "Violent Mercenary", "Captain Crocodile",
    "Sulie", "Kaikobad", "Pearling", "yawning portal", "Adolf Nomura",
    "Bochum Welt", "Pizza Hotline", "Untold Want", "DAZEGXD", "Zavoloka",
    "Wojciech Rusin", "Peel Dream Magazine", "Isabel's Dream", "Florence Sinclair",
    "The Veldt", "Acopia", "Deux Filles", "Josiah Steinbrick", "Leya",
    "nahdoitagain", "Jabu", "Maria Somerville"
]

# Удаляем дубликаты из оригинального списка
original_artists = list(dict.fromkeys(original_artists))

# Собранные данные
collected_data = {
    "Monker178": {
        "followers": {"instagram": 2592},
        "links": {
            "instagram": "https://www.instagram.com/monker178/",
            "spotify": "https://open.spotify.com/artist/0mfh3axTPkPhaKfnubdqN5",
            "bandcamp": "https://monker178.bandcamp.com/",
            "soundcloud": "https://soundcloud.com/monker178"
        }
    },
    "Mayo": {
        "followers": {"spotify": 582900},
        "links": {"spotify": "https://open.spotify.com/artist/6tVxgFV9M1sqlTWUnQOhlu"}
    },
    "CFCF": {
        "followers": {"spotify": 73900},
        "links": {"spotify": "https://open.spotify.com/artist/73IRHBhotETMmgvRCEyTCS"}
    },
    "koronba": {
        "followers": {"spotify": 90100},
        "links": {"spotify": "https://open.spotify.com/artist/4HAJ2da9qjbfCHDdEnsVz"}
    },
    "Grouper": {
        "followers": {"instagram": 70000, "spotify": 2000000},
        "links": {
            "instagram": "https://www.instagram.com/grouperepuorg/",
            "spotify": "https://open.spotify.com/artist/31uyAcnY0kjjKKIQZMKX4i"
        }
    },
    "Machine Girl": {
        "followers": {"instagram": 244000},
        "links": {
            "instagram": "https://www.instagram.com/machin3gir1/",
            "linktree": "https://linktr.ee/machin3gir1"
        }
    },
    "Sewerslvt": {
        "followers": {"spotify": 458400},
        "links": {"spotify": "https://open.spotify.com/artist/30F64wQIHvLiFTGaNZ73nU"}
    },
    "Dean Blunt": {
        "followers": {"spotify": 2400000},
        "links": {"spotify": "https://open.spotify.com/artist/5CFSYjc0PAiQvndFjafabk"}
    },
    "Crystal Castles": {
        "followers": {"instagram": 462000, "spotify": 7900000},
        "links": {
            "instagram": "https://www.instagram.com/crystalcastles/",
            "spotify": "https://open.spotify.com/artist/7K3zpFXBvPcvzhj7zlGJdO"
        }
    },
    "Boards of Canada": {
        "followers": {"spotify": 818400},
        "links": {
            "spotify": "https://open.spotify.com/artist/2VAvhf61GgLYmC6C8anyX1",
            "facebook": "https://www.facebook.com/boardsofcanada/"
        }
    },
    "Oneohtrix Point Never": {
        "followers": {},
        "links": {
            "spotify": "https://open.spotify.com/artist/2wPDbhaGXCqROrVmwDdCrK",
            "twitter": "https://twitter.com/0PN",
            "linktree": "https://linktr.ee/oneohtrixpointnever"
        }
    },
    "Grimes": {
        "followers": {"instagram": 2000000, "tiktok": 860000, "spotify": 7700000},
        "links": {
            "instagram": "https://www.instagram.com/grimes/",
            "tiktok": "https://www.tiktok.com/@grimes",
            "spotify": "https://open.spotify.com/artist/053q0ukIDRgzwTr4vNSwab",
            "twitter": "https://x.com/grimezsz"
        }
    },
    "Tim Hecker": {
        "followers": {"instagram": 42000, "spotify": 123900},
        "links": {
            "instagram": "https://www.instagram.com/sunblindstudios/",
            "spotify": "https://open.spotify.com/artist/1qiwaJwjKod5WhcYZ76O1B",
            "twitter": "https://twitter.com/tim_hecker"
        }
    }
}

# Генерация JavaScript кода
def generate_js_data():
    js_code = "// Данные об артистах\nconst artistsData = [\n"

    # Добавляем оригинальных артистов
    for artist in original_artists:
        data = collected_data.get(artist, {})
        followers = data.get("followers", {})
        links = data.get("links", {})

        js_code += f"    {{\n"
        js_code += f"        name: \"{artist}\",\n"
        js_code += f"        followers: {json.dumps(followers)},\n"
        js_code += f"        links: {json.dumps(links)},\n"
        js_code += f"        source: \"original\"\n"
        js_code += f"    }},\n"

    # Добавляем похожих артистов
    for artist in similar_artists:
        data = collected_data.get(artist, {})
        followers = data.get("followers", {})
        links = data.get("links", {})

        js_code += f"    {{\n"
        js_code += f"        name: \"{artist}\",\n"
        js_code += f"        followers: {json.dumps(followers)},\n"
        js_code += f"        links: {json.dumps(links)},\n"
        js_code += f"        source: \"similar\"\n"
        js_code += f"    }},\n"

    js_code += "];\n"
    return js_code

if __name__ == "__main__":
    # Генерируем JavaScript файл
    js_data = generate_js_data()

    with open("data_generated.js", "w", encoding="utf-8") as f:
        f.write(js_data)

    print(f"✓ Создан файл data_generated.js")
    print(f"✓ Всего артистов: {len(original_artists) + len(similar_artists)}")
    print(f"  - Оригинальных: {len(original_artists)}")
    print(f"  - Похожих: {len(similar_artists)}")
    print(f"  - С данными: {len(collected_data)}")
