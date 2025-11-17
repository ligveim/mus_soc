#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Visual Artists Data Collection
Collecting niche visual artists, photographers, fashion creators, and AI artists
Target: under 20K followers, unique style, AI-focused when possible
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

# Similar artists found through research
similar_artists = [
    # AI Artists - Very Niche (under 2K)
    "machatter_ai",
    "dribnet",
    "ai.rdeck",
    "cybercollectorx",
    "midjourney.man",
    "divinecassai",
    "ross.good.win",

    # AI Artists - Niche (2K-20K)
    "robomar.ai.art",
    "oziiiai",
    "the.ai.art.magazine",

    # To be researched further
    # 3D/Blender artists
    # Cyberpunk photographers
    # Fashion/AI fusion
    # Glitch art
    # Post-internet art
]

# Collected data
collected_data = {
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
    "robomar.ai.art": {
        "followers": {"instagram": 14000},
        "links": {
            "instagram": "https://www.instagram.com/robomar.ai.art/"
        },
        "categories": ["AI art", "visual curator"]
    },
    "oziiiai": {
        "followers": {"instagram": 19000},
        "links": {
            "instagram": "https://www.instagram.com/oziiiai/"
        },
        "categories": ["AI art", "imaginative visuals"]
    },
    "the.ai.art.magazine": {
        "followers": {"instagram": 11000},
        "links": {
            "instagram": "https://www.instagram.com/the.ai.art.magazine/"
        },
        "categories": ["AI art", "magazine"]
    },
    "machatter_ai": {
        "followers": {"instagram": 1100},
        "links": {
            "instagram": "https://www.instagram.com/machatter_ai/"
        },
        "categories": ["AI art", "Midjourney", "Stable Diffusion"]
    },
    "dribnet": {
        "followers": {"instagram": 949},
        "links": {
            "instagram": "https://www.instagram.com/dribnet/"
        },
        "categories": ["machine perception", "AI art"]
    },
    "ai.rdeck": {
        "followers": {"instagram": 536},
        "links": {
            "instagram": "https://www.instagram.com/ai.rdeck/"
        },
        "categories": ["AI art", "generative images", "DALL-E", "Midjourney"]
    },
    "cybercollectorx": {
        "followers": {"instagram": 176},
        "links": {
            "instagram": "https://www.instagram.com/cybercollectorx/"
        },
        "categories": ["visual experiences", "AI art"]
    },
    "midjourney.man": {
        "followers": {"instagram": 33},
        "links": {
            "instagram": "https://www.instagram.com/midjourney.man/"
        },
        "categories": ["AI art", "Midjourney"]
    },
    "divinecassai": {
        "followers": {"instagram": 950},
        "links": {
            "instagram": "https://www.instagram.com/divinecassai/"
        },
        "categories": ["AI art", "NightCafe Studio"]
    },
    "ross.good.win": {
        "followers": {"instagram": 1900},
        "links": {
            "instagram": "https://www.instagram.com/ross.good.win/"
        },
        "categories": ["data poet", "AI art"]
    }
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

    with open("visual_artists_data_generated.js", "w", encoding="utf-8") as f:
        f.write(js_data)

    print(f"✓ Created visual_artists_data_generated.js")
    print(f"✓ Total artists: {len(starting_artists) + len(similar_artists)}")
    print(f"  - Starting: {len(starting_artists)}")
    print(f"  - Similar: {len(similar_artists)}")
    print(f"  - With data: {len(collected_data)}")
