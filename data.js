// Данные об артистах
const artistsData = [
    {
        name: "Monker178",
        followers: {"instagram": 2592},
        links: {"instagram": "https://www.instagram.com/monker178/", "spotify": "https://open.spotify.com/artist/0mfh3axTPkPhaKfnubdqN5", "bandcamp": "https://monker178.bandcamp.com/", "soundcloud": "https://soundcloud.com/monker178"},
        tags: ["ambient", "trance", "sound collage"],
        source: "original"
    },
    {
        name: "Mayo",
        followers: {"spotify": 582900},
        links: {"spotify": "https://open.spotify.com/artist/6tVxgFV9M1sqlTWUnQOhlu"},
        tags: ["breakcore", "downtempo", "electronic"],
        source: "original"
    },
    {
        name: "Blithe Field",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "CFCF",
        followers: {"spotify": 73900},
        links: {"spotify": "https://open.spotify.com/artist/73IRHBhotETMmgvRCEyTCS"},
        tags: ["electronic", "synthpop"],
        source: "original"
    },
    {
        name: "argo nuff",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Eterna",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "koronba",
        followers: {"spotify": 90100},
        links: {"spotify": "https://open.spotify.com/artist/4HAJ2da9qjbfCHDdEnsVz"},
        tags: ["ambient", "IDM", "glitch"],
        source: "original"
    },
    {
        name: "Infinity Frequencies",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Boards of Canada",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Rory in early 20s",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Vegyn",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Forma Norte",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Leon Vynehall",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "optic core",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "shamana",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Maebi",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Instupendo",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Grouper",
        followers: {"instagram": 70000, "spotify": 2000000},
        links: {"instagram": "https://www.instagram.com/grouperepuorg/", "spotify": "https://open.spotify.com/artist/31uyAcnY0kjjKKIQZMKX4i"},
        tags: ["ambient", "drone", "experimental"],
        source: "original"
    },
    {
        name: "Oneohtrix Point Never",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Loukeman",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Ricky Eat Acid",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Machine Girl",
        followers: {"instagram": 244000},
        links: {"instagram": "https://www.instagram.com/machin3gir1/", "linktree": "https://linktr.ee/machin3gir1"},
        tags: ["breakcore", "footwork", "electronic"],
        source: "original"
    },
    {
        name: "Deathbrain",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "African-American Sound",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Casino Versus Japan",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Tim Hecker",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Susumu Yokota",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Two Lone Swordsmen",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "ilydima",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Hype Williams",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Father2006",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "ooxygen",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "dreamcorp.",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Flaer",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Shuta Yasukochi",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "sugar plant",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Harpsichord Canvas",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "US Golf 95",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "SSIEGE",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "pathetic240px",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "untitled (halo)",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Retail Drugs",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Damage Cloud",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "SPXRXT",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "draaq me",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Detente",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Ssaliva",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "The Dead Texan",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Bogdan Raczynski",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Crystal Castles",
        followers: {"instagram": 462000, "spotify": 7900000},
        links: {"instagram": "https://www.instagram.com/crystalcastles/", "spotify": "https://open.spotify.com/artist/7K3zpFXBvPcvzhj7zlGJdO"},
        tags: ["electronic", "indie", "experimental"],
        source: "original"
    },
    {
        name: "Chihei Hatakeyama",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "7038634357",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Jeremiah Chiu",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Hooky",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "yeahsokaye",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "General Translator",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Chanel Beads",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Downhill2k01",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Hainbach",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Jeremy Blake",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Patricia Wolf",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Martyna Basta",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Dean Blunt",
        followers: {"spotify": 2400000},
        links: {"spotify": "https://open.spotify.com/artist/5CFSYjc0PAiQvndFjafabk"},
        tags: ["experimental", "ambient", "electronic"],
        source: "original"
    },
    {
        name: "yes/and",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Geller",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Nikolaienko",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Arthur Mine",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Crim3s",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Death Hags",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Haruhisa Tanaka",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "River Tiber",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "No Love In The House Of Gold",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Other Nothing",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "TheExorcist",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Actress",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Locust",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Slow Attack Ensemble",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Grimes",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Kirk Barley",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Funki Porcini",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Astrid Sonne",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Iwakura",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Khotin",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Fools",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "d2s1",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Leliel",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "The Koreatown Oddity",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Oval",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Trashiii",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "$quib",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "audry",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Xori",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Imagine Drowning",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "dreamcorp",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Argo Nuff",
        followers: {},
        links: {},
        tags: [],
        source: "original"
    },
    {
        name: "Elysia Crampton",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Tujiko Noriko",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Triad God",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Jonatan Leandoer96",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Teen Daze",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Lusine",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "George Clanton",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Ilkae",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "PilotRedSun",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Rei Harakami",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Osamu Sato",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Meitei",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Subete Anata no Sei Desu",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Sewerslvt",
        followers: {"spotify": 458400},
        links: {"spotify": "https://open.spotify.com/artist/30F64wQIHvLiFTGaNZ73nU"},
        tags: ["breakcore", "drum and bass", "atmospheric"],
        source: "similar"
    },
    {
        name: "usedcvnt",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "DJ Kuroneko",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Sink Saiko",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Xxtarlit⚸",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "ZenithLights",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "骨架的",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "CYBEREALITYライフ",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "desert sand feels warm at night",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "t e l e p a t h テレパシー能力者",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "INTERNET CLUB",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Nedaj",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "TOKYOPILL",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "BLKSMIITH",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Heatace",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Eden FM",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Bakground",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Akiba",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Ftlframe",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "SAGEISKAMI",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Lomaji",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "a l e x",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "tomcbumpz",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "weird inside",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Ajmw",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Harris Cole",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "fujitive",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "killedmyself",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "In Love With a Ghost",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "City Girl",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Elijah Who",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Vague003",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Laxcity",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Cult Member",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Delroy Edwards",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Acidgvrl",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Cynthoni",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "vmrrobotic",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Aeriu Ika",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Robinson's Village",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Sangam",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Windows 96",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Equip",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "VAPERROR",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Diskette Park",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "FM Skyline",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "vcr-classique",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "회사AUTO",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Balents",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Donor Lens",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "architecture in tokyo",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Wolfenstein OS X",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Stive Morgan",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Organ Tapes",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Malibu",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Bo Khat Eternal Troof Family Band",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Erik Aharzoth",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "RATBOWL",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "timesgone",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "leverfall",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Violent Mercenary",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Captain Crocodile",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Sulie",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Kaikobad",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Pearling",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "yawning portal",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Adolf Nomura",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Bochum Welt",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Pizza Hotline",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Untold Want",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "DAZEGXD",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Zavoloka",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Wojciech Rusin",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Peel Dream Magazine",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Isabel's Dream",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Florence Sinclair",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "The Veldt",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Acopia",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Deux Filles",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Josiah Steinbrick",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Leya",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "nahdoitagain",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Jabu",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
    {
        name: "Maria Somerville",
        followers: {},
        links: {},
        tags: [],
        source: "similar"
    },
];
