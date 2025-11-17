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

    # Ars Electronica / Digital Art Festivals
    "cheesetalk1997",  # Yuqian Sun (CheeseTalk) - AI researcher
    "ibl3d",  # Iñigo Bilbao

    # Fakewhale / NFT curated
    "danctrl",  # Danilo Xhema
    "etozzheques",  # etozheques
    "negar_sepehr_nft",  # Negar Sepehr

    # Expanded.art / Digital Architecture
    "manuelrossner",  # Manuel Rossner

    # Curators / Researchers / Writers (niche, under 20K)
    "elegantcollisions",  # Romi Ron Morrison - Black computational thought
    "charstiles",  # Char Stiles - MIT Media Lab, live coding
    "davidquilesguillo",  # David Quiles Guilló - Wrong Biennale founder

    # Expanded.art roster (niche, strong style)
    "peterburr",  # Peter Burr - 6,565 followers - Whitney, MoMA, Guggenheim
    "aurecevettier",  # aurèce vettier - Vera Molnár collaborator, Lyon museum
    "heliosantossz",  # Helio Santos - 4,507 followers - AI + robotic oil painting
    "wonderkatzi",  # Sasha Katz - 16K followers - Sotheby's, Burberry, Gucci
    "0xstc",  # Agoston Nagy - 465 followers - ULTRA NICHE! MIT, ZKM, Mutek
    "schwittlick",  # Marcel Schwittlick - 2,735 followers - plotter art, algorithms, Berlin
    "lovidlovid",  # LoVid (Tali Hinkis + Kyle Lapidus) - 6,717 followers - Rhizome, Art Blocks
    "annacarreras.art",  # Anna Carreras - 631 followers - ULTRA NICHE! Cannes Golden Lion, Barcelona
    "ognyveli",  # Iskra Velitchkova - 3,972 followers - Bulgarian, Forbes, BBVA awards, Madrid
    "aaron_penne",  # Aaron Penne - 11K followers - Lumen Prize, Art Blocks Director
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

    # Ars Electronica / Digital Art Festivals
    "cheesetalk1997": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/cheesetalk1997/",
            "website": "https://fakecheese.me"
        },
        "categories": ["AI research", "RCA PhD", "Ars Electronica 2025", "Lumen Prize", "conversational AI"]
    },
    "ibl3d": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/ibl3d/",
            "website": "https://www.ibl3d.com"
        },
        "categories": ["3D", "photogrammetry", "Ars Electronica", "Transmediale", "Spanish artist"]
    },

    # Fakewhale / NFT curated
    "danctrl": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/danctrl/",
            "website": "https://foundation.app/@danctrl"
        },
        "categories": ["digital painting", "traditional painting", "Italian artist", "Rome-based"]
    },
    "etozzheques": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/etozzheques/"
        },
        "categories": ["melancholic AI art", "exhibited NY/LA/Tokyo/Rome", "surrealism"]
    },
    "negar_sepehr_nft": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/negar_sepehr_nft/"
        },
        "categories": ["Iranian artist", "AI art", "NFTNYC Times Square", "focus on minorities", "Tehran"]
    },

    # Expanded.art / Digital Architecture
    "manuelrossner": {
        "followers": {"instagram": 6102},
        "links": {
            "instagram": "https://www.instagram.com/manuelrossner/",
            "website": "https://www.manuelrossner.com"
        },
        "categories": ["digital architecture", "virtual worlds", "Berlin-based", "Hamburger Kunsthalle collection"]
    },

    # Curators / Researchers / Writers (niche, under 20K)
    "elegantcollisions": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/elegantcollisions/",
            "website": "https://elegantcollisions.com"
        },
        "categories": ["Black computational thought", "UCLA DMA", "researcher", "Transmediale", "The Kitchen NYC"]
    },
    "charstiles": {
        "followers": {"instagram": 22000},
        "links": {
            "instagram": "https://www.instagram.com/charstiles/",
            "website": "https://charstiles.com"
        },
        "categories": ["live coding", "shader programming", "MIT Media Lab", "Future Sketches", "computational artist"]
    },
    "davidquilesguillo": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/davidquilesguillo/"
        },
        "categories": ["curator", "Wrong Biennale founder", "digital art curator", "Spain-based", "independent"]
    },

    # Expanded.art roster (niche, strong style)
    "peterburr": {
        "followers": {"instagram": 6565},
        "links": {
            "instagram": "https://www.instagram.com/peterburr/",
            "website": "https://peterburr.org"
        },
        "categories": ["generative art", "video game aesthetics", "Whitney Museum", "MoMA", "Guggenheim Fellowship", "Brooklyn"]
    },
    "aurecevettier": {
        "followers": {"instagram": 0},  # need count
        "links": {
            "instagram": "https://www.instagram.com/aurecevettier/",
            "website": "https://www.aurecevettier.com"
        },
        "categories": ["generative art", "AI art", "Vera Molnár collaborator", "French artist", "bronze sculpture", "tapestry", "oil painting"]
    },
    "heliosantossz": {
        "followers": {"instagram": 4507},
        "links": {
            "instagram": "https://www.instagram.com/heliosantossz/",
            "website": "https://heliosantos.org"
        },
        "categories": ["AI art", "robotic painting", "oil painting", "Mexican artist", "landscape", "machine learning"]
    },
    "wonderkatzi": {
        "followers": {"instagram": 16000},
        "links": {
            "instagram": "https://www.instagram.com/wonderkatzi/",
            "website": "https://sashakatz.com"
        },
        "categories": ["3D art", "AI art", "Sotheby's", "Burberry collab", "Gucci collab", "female sensuality", "Paris-based"]
    },
    "0xstc": {
        "followers": {"instagram": 465},
        "links": {
            "instagram": "https://www.instagram.com/0xstc/",
            "website": "https://stc.github.io"
        },
        "categories": ["algorithmic art", "generative art", "MIT", "ZKM Karlsruhe", "Mutek Festival", "Binaura collective", "Budapest"]
    },
    "schwittlick": {
        "followers": {"instagram": 2735},
        "links": {
            "instagram": "https://www.instagram.com/schwittlick/",
            "website": "https://schwittlick.net"
        },
        "categories": ["plotter art", "algorithmic art", "drawing machines", "Berlin-based", "computer science + art", "generative"]
    },
    "lovidlovid": {
        "followers": {"instagram": 6717},
        "links": {
            "instagram": "https://www.instagram.com/lovidlovid/",
            "website": "https://www.lovid.org"
        },
        "categories": ["artist duo", "Tali Hinkis + Kyle Lapidus", "generative art", "fabric work", "stained glass", "Rhizome", "Art Blocks", "NYC"]
    },
    "annacarreras.art": {
        "followers": {"instagram": 631},
        "links": {
            "instagram": "https://www.instagram.com/annacarreras.art/",
            "website": "https://www.annacarreras.com"
        },
        "categories": ["generative art", "creative coding", "Cannes Golden Lion 2010", "Google DevArt Award", "Barcelona", "interactive", "PhD researcher"]
    },
    "ognyveli": {
        "followers": {"instagram": 3972},
        "links": {
            "instagram": "https://www.instagram.com/ognyveli/",
            "website": "https://iskraovelitchkova.com"
        },
        "categories": ["generative art", "Bulgarian artist", "Forbes featured", "BBVA Innova awards", "Madrid-based", "Art Blocks", "mixed media"]
    },
    "aaron_penne": {
        "followers": {"instagram": 11000},
        "links": {
            "instagram": "https://www.instagram.com/aaron_penne/",
            "website": "https://www.aaronpenne.io"
        },
        "categories": ["generative art", "creative coding", "Lumen Prize 2022", "Art Blocks Director", "Seattle", "engineer + artist"]
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
