// Данные об артистах
const artistsData = [
    {
        name: "Monker178",
        followers: {"instagram": 2592},
        links: {"instagram": "https://www.instagram.com/monker178/", "spotify": "https://open.spotify.com/artist/0mfh3axTPkPhaKfnubdqN5", "bandcamp": "https://monker178.bandcamp.com/", "soundcloud": "https://soundcloud.com/monker178"},
        source: "original"
    },
    {
        name: "Mayo",
        followers: {"spotify": 582900},
        links: {"spotify": "https://open.spotify.com/artist/6tVxgFV9M1sqlTWUnQOhlu"},
        source: "original"
    },
    {
        name: "Blithe Field",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "CFCF",
        followers: {"spotify": 73900},
        links: {"spotify": "https://open.spotify.com/artist/73IRHBhotETMmgvRCEyTCS"},
        source: "original"
    },
    {
        name: "argo nuff",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Eterna",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "koronba",
        followers: {"spotify": 90100},
        links: {"spotify": "https://open.spotify.com/artist/4HAJ2da9qjbfCHDdEnsVz"},
        source: "original"
    },
    {
        name: "Infinity Frequencies",
        followers: {"spotify": 342400},
        links: {"spotify": "https://open.spotify.com/artist/6XcJCz7dqlBOyZ0b57SyQp", "bandcamp": "https://computer-gaze.bandcamp.com"},
        source: "original"
    },
    {
        name: "Boards of Canada",
        followers: {"spotify": 818400},
        links: {"spotify": "https://open.spotify.com/artist/2VAvhf61GgLYmC6C8anyX1", "facebook": "https://www.facebook.com/boardsofcanada/"},
        source: "original"
    },
    {
        name: "Rory in early 20s",
        followers: {"spotify": 504300},
        links: {"instagram": "https://www.instagram.com/rorynearly20s/", "spotify": "https://open.spotify.com/artist/2E701AAAlg7LthbISEZv0N", "soundcloud": "https://soundcloud.com/rorynearly20s", "bandcamp": "https://rorynearly20s.bandcamp.com/", "twitter": "https://x.com/rorynearly20s"},
        source: "original"
    },
    {
        name: "Vegyn",
        followers: {"instagram": 107000, "spotify": 1100000},
        links: {"instagram": "https://www.instagram.com/vegynvegyn/", "spotify": "https://open.spotify.com/artist/5iUnvXddCpOrbWKm7QMr6o", "soundcloud": "https://soundcloud.com/vegyn", "twitter": "https://twitter.com/vegynvegyn"},
        source: "original"
    },
    {
        name: "Forma Norte",
        followers: {"spotify": 76200},
        links: {"spotify": "https://open.spotify.com/artist/1GUci0loUu7Ysy2YkLLick"},
        source: "original"
    },
    {
        name: "Leon Vynehall",
        followers: {"instagram": 62000, "spotify": 406400},
        links: {"instagram": "https://www.instagram.com/vynehall/", "spotify": "https://open.spotify.com/artist/2o7L9DNcmzocYll1o0GGTU", "bandcamp": "https://leonvynehall.bandcamp.com/"},
        source: "original"
    },
    {
        name: "optic core",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "shamana",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Maebi",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Instupendo",
        followers: {"spotify": 2200000},
        links: {"spotify": "https://open.spotify.com/artist/3ctnkEZGtVBTxS7IMin8nC", "bandcamp": "https://instupendo.bandcamp.com/", "twitter": "https://x.com/instupendo"},
        source: "original"
    },
    {
        name: "Grouper",
        followers: {"instagram": 70000, "spotify": 2000000},
        links: {"instagram": "https://www.instagram.com/grouperepuorg/", "spotify": "https://open.spotify.com/artist/31uyAcnY0kjjKKIQZMKX4i"},
        source: "original"
    },
    {
        name: "Oneohtrix Point Never",
        followers: {},
        links: {"spotify": "https://open.spotify.com/artist/2wPDbhaGXCqROrVmwDdCrK", "twitter": "https://twitter.com/0PN", "linktree": "https://linktr.ee/oneohtrixpointnever"},
        source: "original"
    },
    {
        name: "Loukeman",
        followers: {"instagram": 24000, "spotify": 325600},
        links: {"instagram": "https://www.instagram.com/loukeman/", "spotify": "https://open.spotify.com/artist/10JL2s5aUztzFyURrFrxtL", "soundcloud": "https://soundcloud.com/loukeman", "website": "https://loukeman.com/"},
        source: "original"
    },
    {
        name: "Ricky Eat Acid",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Machine Girl",
        followers: {"instagram": 244000},
        links: {"instagram": "https://www.instagram.com/machin3gir1/", "linktree": "https://linktr.ee/machin3gir1"},
        source: "original"
    },
    {
        name: "Deathbrain",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "African-American Sound",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Casino Versus Japan",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Tim Hecker",
        followers: {"instagram": 42000, "spotify": 123900},
        links: {"instagram": "https://www.instagram.com/sunblindstudios/", "spotify": "https://open.spotify.com/artist/1qiwaJwjKod5WhcYZ76O1B", "twitter": "https://twitter.com/tim_hecker"},
        source: "original"
    },
    {
        name: "Susumu Yokota",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Two Lone Swordsmen",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "ilydima",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Hype Williams",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Father2006",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "ooxygen",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "dreamcorp.",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Flaer",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Shuta Yasukochi",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "sugar plant",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Harpsichord Canvas",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "US Golf 95",
        followers: {},
        links: {"spotify": "https://open.spotify.com/artist/5CnHY3fEGCye9RQH7gVvox", "bandcamp": "https://usgolf95.bandcamp.com/"},
        source: "original"
    },
    {
        name: "SSIEGE",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "pathetic240px",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "untitled (halo)",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Retail Drugs",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Damage Cloud",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "SPXRXT",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "draaq me",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Detente",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Ssaliva",
        followers: {"instagram": 20000, "spotify": 26800},
        links: {"instagram": "https://www.instagram.com/_ssaliva/", "spotify": "https://open.spotify.com/artist/3pPIWa19bNbZaA4xNt81HB", "bandcamp": "https://leavingrecords.bandcamp.com/album/ssaliva-pantani"},
        source: "original"
    },
    {
        name: "The Dead Texan",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Bogdan Raczynski",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Crystal Castles",
        followers: {"instagram": 462000, "spotify": 7900000},
        links: {"instagram": "https://www.instagram.com/crystalcastles/", "spotify": "https://open.spotify.com/artist/7K3zpFXBvPcvzhj7zlGJdO"},
        source: "original"
    },
    {
        name: "Chihei Hatakeyama",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "7038634357",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Jeremiah Chiu",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Hooky",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "yeahsokaye",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "General Translator",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Chanel Beads",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Downhill2k01",
        followers: {},
        links: {"spotify": "https://open.spotify.com/artist/0xBBjvYwXtW0k90kDx9JLs", "soundcloud": "https://soundcloud.com/tags/downhill2k01"},
        source: "original"
    },
    {
        name: "Hainbach",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Jeremy Blake",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Patricia Wolf",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Martyna Basta",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Dean Blunt",
        followers: {"spotify": 2400000},
        links: {"spotify": "https://open.spotify.com/artist/5CFSYjc0PAiQvndFjafabk"},
        source: "original"
    },
    {
        name: "yes/and",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Geller",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Nikolaienko",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Arthur Mine",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Crim3s",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Death Hags",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Haruhisa Tanaka",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "River Tiber",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "No Love In The House Of Gold",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Other Nothing",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "TheExorcist",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Actress",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Locust",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Slow Attack Ensemble",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Grimes",
        followers: {"instagram": 2000000, "tiktok": 860000, "spotify": 7700000},
        links: {"instagram": "https://www.instagram.com/grimes/", "tiktok": "https://www.tiktok.com/@grimes", "spotify": "https://open.spotify.com/artist/053q0ukIDRgzwTr4vNSwab", "twitter": "https://x.com/grimezsz"},
        source: "original"
    },
    {
        name: "Kirk Barley",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Funki Porcini",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Astrid Sonne",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Iwakura",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Khotin",
        followers: {"spotify": 46100},
        links: {"spotify": "https://open.spotify.com/artist/0q2WkTHTEczNf8wNq6MBRk", "soundcloud": "https://soundcloud.com/khotin", "website": "https://khotin.ca/"},
        source: "original"
    },
    {
        name: "Fools",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "d2s1",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Leliel",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "The Koreatown Oddity",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Oval",
        followers: {"instagram": 2634, "spotify": 11998, "twitter": 1465},
        links: {"instagram": "https://www.instagram.com/markuspopp_oval/", "spotify": "https://open.spotify.com/artist/1Yti3CsDazWVjNMXBHx1Af", "twitter": "https://x.com/markuspopp_oval", "bandcamp": "https://oval.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Trashiii",
        followers: {"spotify": 201800},
        links: {"spotify": "https://open.spotify.com/artist/6txVXvr3AUo8DwygF77cah"},
        source: "original"
    },
    {
        name: "$quib",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "audry",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Xori",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Imagine Drowning",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "dreamcorp",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Argo Nuff",
        followers: {},
        links: {},
        source: "original"
    },
    {
        name: "Elysia Crampton",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Tujiko Noriko",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Triad God",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Jonatan Leandoer96",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Teen Daze",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Lusine",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "George Clanton",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Ilkae",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "PilotRedSun",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Rei Harakami",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Osamu Sato",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Meitei",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Subete Anata no Sei Desu",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Sewerslvt",
        followers: {"spotify": 458400},
        links: {"spotify": "https://open.spotify.com/artist/30F64wQIHvLiFTGaNZ73nU"},
        source: "similar"
    },
    {
        name: "usedcvnt",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "DJ Kuroneko",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Sink Saiko",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Xxtarlit⚸",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "ZenithLights",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "骨架的",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "CYBEREALITYライフ",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "desert sand feels warm at night",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "t e l e p a t h テレパシー能力者",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "INTERNET CLUB",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Nedaj",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "TOKYOPILL",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "BLKSMIITH",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Heatace",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Eden FM",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Bakground",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Akiba",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Ftlframe",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "SAGEISKAMI",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Lomaji",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "a l e x",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "tomcbumpz",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "weird inside",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Ajmw",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Harris Cole",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "fujitive",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "killedmyself",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "In Love With a Ghost",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "City Girl",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Elijah Who",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Vague003",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Laxcity",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Cult Member",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Delroy Edwards",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Acidgvrl",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Cynthoni",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "vmrrobotic",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Aeriu Ika",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Robinson's Village",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Sangam",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Windows 96",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Equip",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "VAPERROR",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Diskette Park",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "FM Skyline",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "vcr-classique",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "회사AUTO",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Balents",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Donor Lens",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "architecture in tokyo",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Wolfenstein OS X",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Stive Morgan",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Organ Tapes",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Malibu",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Bo Khat Eternal Troof Family Band",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Erik Aharzoth",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "RATBOWL",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "timesgone",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "leverfall",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Violent Mercenary",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Captain Crocodile",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Sulie",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Kaikobad",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Pearling",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "yawning portal",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Adolf Nomura",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Bochum Welt",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Pizza Hotline",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Untold Want",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "DAZEGXD",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Zavoloka",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Wojciech Rusin",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Peel Dream Magazine",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Isabel's Dream",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Florence Sinclair",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "The Veldt",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Acopia",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Deux Filles",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Josiah Steinbrick",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Leya",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "nahdoitagain",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Jabu",
        followers: {},
        links: {},
        source: "similar"
    },
    {
        name: "Maria Somerville",
        followers: {},
        links: {},
        source: "similar"
    },
];
