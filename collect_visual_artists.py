#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Visual Artists Data Collection
Niche visual artists with exhibitions, musician collaborations, biennale participation
Quality > Generic AI prompters
"""

import json

# Starting artists from user
starting_artists = [
    "transhive",
    "plastekpet",
    "0nastiia",
    "byunveil",
    "loved_orleer"
]

# Quality artists - exhibitions/collaborations/credentials
similar_artists = [
    # Biennale / Major exhibitions
    "crosslucid",
    "sahejrahal",
    "zheng__mahler",
    "newgenderwhodis",  # Bhenji Ra
    "yehwan.yen.song",
    "luh2203",  # Lucile Olympe Haute
    "lou_cantor",
    "moritz.jekat",
    "irina.spicaka",

    # Fellowship.xyz / Curated platforms
    "panaviscope",

    # Net art / Rhizome
    "petra_cortright",

    # Music collaborators
    "naetboyce",  # Nate Boyce - OPN
    "claire_barrow",  # Bladee/Drain Gang

    # Glitch art pioneers
    "letsglitchit",  # Dawnia Darkstone
    "empress_trash",
    "_menkman",  # Rosa Menkman

    # Museum-collected
    "taborrobak",  # Tabor Robak - MoMA, Whitney, Met

    # Digital fashion
    "anastasia_sternad",

    # Fashion/Surrealism/Conceptual (NEW - QUALITY TIER)
    "charlieengman",  # Charlie Engman
    "bagdelete",  # noper
    "rheadillon",  # Rhea Dillon
    "dozie.kanu",  # Dozie Kanu
    "frankdorrey",  # Frank Dorrey
    "mishameghna",  # Misha Meghna
    "ottilielandmark",  # Ottilie Landmark

    # Frieze/Art Basel Featured
    "evagold.jpg",  # Eva Gold
    "benediktebjerre",  # Benedikte Bjerre - ULTRA NICHE (172 followers!)
    "luyangasia",  # Lu Yang
]

# Collected data
collected_data = {
    # Starting artists
    "plastekpet": {
        "followers": {"instagram": 57000},
        "links": {
            "instagram": "https://www.instagram.com/plastekpet/"
        },
        "categories": ["digital art", "visual art"]
    },
    "loved_orleer": {
        "followers": {"instagram": 28000},
        "links": {
            "instagram": "https://www.instagram.com/loved_orleer/",
            "twitter": "https://x.com/loved_orleer"
        },
        "categories": ["visual art", "digital"]
    },

    # Biennale participants
    "crosslucid": {
        "followers": {"instagram": 11000},
        "links": {
            "instagram": "https://www.instagram.com/crosslucid/",
            "website": "https://crosslucid.com"
        },
        "categories": ["AI art", "collective", "queer futures", "Wrong Biennale"]
    },
    "sahejrahal": {
        "followers": {"instagram": 7112},
        "links": {
            "instagram": "https://www.instagram.com/sahejrahal/",
            "website": "https://www.sahejrahal.com"
        },
        "categories": ["mythology", "AI simulation", "Liverpool Biennial"]
    },
    "zheng__mahler": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/zheng__mahler/",
            "website": "https://www.zhengmahler.world"
        },
        "categories": ["more-than-human", "Helsinki Biennial", "Shanghai Biennial"]
    },
    "newgenderwhodis": {
        "followers": {"instagram": 26000},
        "links": {
            "instagram": "https://www.instagram.com/newgenderwhodis/"
        },
        "categories": ["trans narratives", "performance", "Sydney Biennial", "transmediale"]
    },
    "yehwan.yen.song": {
        "followers": {"instagram": 39000},
        "links": {
            "instagram": "https://www.instagram.com/yehwan.yen.song/",
            "website": "https://yhsong.com"
        },
        "categories": ["web art", "anti-friendly design", "Helsinki Biennial"]
    },
    "luh2203": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/luh2203/",
            "website": "https://lucilehaute.fr"
        },
        "categories": ["Cyberwitches Manifesto", "spirituality", "technology"]
    },
    "lou_cantor": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/lou_cantor/",
            "website": "https://www.loucantor.com"
        },
        "categories": ["collective", "AI liberation", "Berlin Biennal"]
    },
    "moritz.jekat": {
        "followers": {"instagram": 1321},
        "links": {
            "instagram": "https://www.instagram.com/moritz.jekat/",
            "website": "https://moritzjekat.de"
        },
        "categories": ["CGI", "sculpture", "installation"]
    },
    "irina.spicaka": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/irina.spicaka/",
            "website": "https://spicaka.info"
        },
        "categories": ["audiovisual", "interactive", "transmediale"]
    },

    # Fellowship.xyz curated
    "panaviscope": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/panaviscope/",
            "website": "https://daily.xyz/artist/panaviscope"
        },
        "categories": ["AI video", "Sora", "music", "fellowship.xyz"]
    },
    "0nastiia": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/0nastiia/",
            "website": "https://fellowship.xyz/artist/0nastiia"
        },
        "categories": ["photographer", "fellowship.xyz"]
    },

    # Net art
    "petra_cortright": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/petra_cortright/",
            "website": "https://www.petracortright.com"
        },
        "categories": ["net art", "Rhizome", "Post-Internet"]
    },

    # Music collaborators
    "naetboyce": {
        "followers": {"instagram": 12000},
        "links": {
            "instagram": "https://www.instagram.com/naetboyce/"
        },
        "categories": ["OPN collaborator", "moving image", "MoMA"]
    },
    "claire_barrow": {
        "followers": {"instagram": 71000},
        "links": {
            "instagram": "https://www.instagram.com/claire_barrow/",
            "website": "https://clairebarrow.com"
        },
        "categories": ["Bladee", "Drain Gang", "painting", "fashion"]
    },

    # Glitch art
    "letsglitchit": {
        "followers": {"instagram": 2300},
        "links": {
            "instagram": "https://www.instagram.com/letsglitchit/",
            "website": "https://letsglitchit.art"
        },
        "categories": ["glitch art", "circuit bending", "Sotheby's", "Christie's"]
    },
    "empress_trash": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/empress_trash/",
            "website": "https://empresstrash.com"
        },
        "categories": ["glitch aesthetics", "AI art", "Miami Art Basel"]
    },
    "_menkman": {
        "followers": {"instagram": 8347},
        "links": {
            "instagram": "https://www.instagram.com/_menkman/"
        },
        "categories": ["glitch theory", "Glitch Studies Manifesto", "media archaeology"]
    },

    # Museum-collected
    "taborrobak": {
        "followers": {"instagram": 4710},
        "links": {
            "instagram": "https://www.instagram.com/taborrobak/",
            "website": "https://www.taborrobak.com"
        },
        "categories": ["new media", "MoMA", "Whitney", "Met"]
    },

    # Digital fashion
    "anastasia_sternad": {
        "followers": {"instagram": 1162},
        "links": {
            "instagram": "https://www.instagram.com/anastasia_sternad/"
        },
        "categories": ["digital fashion", "CLO3D", "3D design"]
    },

    # Fashion/Surrealism/Conceptual (NEW - QUALITY TIER)
    "charlieengman": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/charlieengman/"
        },
        "categories": ["fashion photography", "surrealism", "maternal imagery", "Dazed 100"]
    },
    "bagdelete": {
        "followers": {"instagram": 80000},
        "links": {
            "instagram": "https://www.instagram.com/bagdelete/",
            "website": "https://noper.xyz"
        },
        "categories": ["AI art", "conceptual", "artificial explorer"]
    },
    "rheadillon": {
        "followers": {"instagram": 16000},
        "links": {
            "instagram": "https://www.instagram.com/rheadillon/"
        },
        "categories": ["interdisciplinary", "queer", "visceral sculptures", "Black expressionism", "Sotheby's"]
    },
    "dozie.kanu": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/dozie.kanu/"
        },
        "categories": ["sculpture", "found objects", "Studio Museum Harlem"]
    },
    "frankdorrey": {
        "followers": {"instagram": 35000},
        "links": {
            "instagram": "https://www.instagram.com/frankdorrey/"
        },
        "categories": ["digital collage", "surrealism", "Black narratives", "Steve Lacy collab"]
    },
    "mishameghna": {
        "followers": {"instagram": 12000},
        "links": {
            "instagram": "https://www.instagram.com/mishameghna/"
        },
        "categories": ["fashion photography", "cosmic aesthetics", "color", "Hypebae"]
    },
    "ottilielandmark": {
        "followers": {"instagram": 9000},
        "links": {
            "instagram": "https://www.instagram.com/ottilielandmark/"
        },
        "categories": ["queer photography", "fashion", "identity", "CSM graduate"]
    },

    # Frieze/Art Basel Featured
    "evagold.jpg": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/evagold.jpg/"
        },
        "categories": ["sculpture", "moving image", "queer", "cinematic", "Frieze London 2024"]
    },
    "benediktebjerre": {
        "followers": {"instagram": 172},
        "links": {
            "instagram": "https://www.instagram.com/benediktebjerre/"
        },
        "categories": ["sculpture", "installation", "climate collapse", "Frieze London 2024"]
    },
    "luyangasia": {
        "followers": {"instagram": 30000},
        "links": {
            "instagram": "https://www.instagram.com/luyangasia/"
        },
        "categories": ["animation", "video art", "digital", "Frieze Seoul 2024", "Deutsche Bank Artist of Year"]
    },
}

def generate_js_data():
    """Generate JavaScript file for visual artists website"""
    js_code = "// Visual Artists Data\nconst visualArtistsData = [\n"

    # Add starting artists
    for artist in starting_artists:
        data = collected_data.get(artist, {})
        followers = data.get("followers", {})
        links = data.get("links", {})
        categories = data.get("categories", [])

        js_code += f"    {{\n"
        js_code += f"        name: \"{artist}\",\n"
        js_code += f"        followers: {json.dumps(followers)},\n"
        js_code += f"        links: {json.dumps(links)},\n"
        js_code += f"        categories: {json.dumps(categories)},\n"
        js_code += f"        source: \"starting\"\n"
        js_code += f"    }},\n"

    # Add similar artists
    for artist in similar_artists:
        data = collected_data.get(artist, {})
        followers = data.get("followers", {})
        links = data.get("links", {})
        categories = data.get("categories", [])

        js_code += f"    {{\n"
        js_code += f"        name: \"{artist}\",\n"
        js_code += f"        followers: {json.dumps(followers)},\n"
        js_code += f"        links: {json.dumps(links)},\n"
        js_code += f"        categories: {json.dumps(categories)},\n"
        js_code += f"        source: \"similar\"\n"
        js_code += f"    }},\n"

    js_code += "];\n"
    return js_code

if __name__ == "__main__":
    # Generate JavaScript file
    js_data = generate_js_data()

    with open("visual_artists_data.js", "w", encoding="utf-8") as f:
        f.write(js_data)

    print(f"✓ Created visual_artists_data.js")
    print(f"✓ Total artists: {len(starting_artists) + len(similar_artists)}")
    print(f"  - Starting: {len(starting_artists)}")
    print(f"  - Similar: {len(similar_artists)}")
    print(f"  - With data: {len(collected_data)}")
