// Visual Artists Data
const visualArtistsData = [
    {
        name: "transhive",
        followers: {},
        links: {},
        categories: [],
        source: "starting"
    },
    {
        name: "plastekpet",
        followers: {"instagram": 57000},
        links: {"instagram": "https://www.instagram.com/plastekpet/"},
        categories: ["digital art", "visual art"],
        source: "starting"
    },
    {
        name: "0nastiia",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/0nastiia/", "website": "https://fellowship.xyz/artist/0nastiia"},
        categories: ["photographer", "fellowship.xyz"],
        source: "starting"
    },
    {
        name: "byunveil",
        followers: {},
        links: {},
        categories: [],
        source: "starting"
    },
    {
        name: "loved_orleer",
        followers: {"instagram": 28000},
        links: {"instagram": "https://www.instagram.com/loved_orleer/", "twitter": "https://x.com/loved_orleer"},
        categories: ["visual art", "digital"],
        source: "starting"
    },
    {
        name: "crosslucid",
        followers: {"instagram": 11000},
        links: {"instagram": "https://www.instagram.com/crosslucid/", "website": "https://crosslucid.com"},
        categories: ["AI art", "collective", "queer futures", "Wrong Biennale"],
        source: "similar"
    },
    {
        name: "sahejrahal",
        followers: {"instagram": 7112},
        links: {"instagram": "https://www.instagram.com/sahejrahal/", "website": "https://www.sahejrahal.com"},
        categories: ["mythology", "AI simulation", "Liverpool Biennial"],
        source: "similar"
    },
    {
        name: "zheng__mahler",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/zheng__mahler/", "website": "https://www.zhengmahler.world"},
        categories: ["more-than-human", "Helsinki Biennial", "Shanghai Biennial"],
        source: "similar"
    },
    {
        name: "newgenderwhodis",
        followers: {"instagram": 26000},
        links: {"instagram": "https://www.instagram.com/newgenderwhodis/"},
        categories: ["trans narratives", "performance", "Sydney Biennial", "transmediale"],
        source: "similar"
    },
    {
        name: "yehwan.yen.song",
        followers: {"instagram": 39000},
        links: {"instagram": "https://www.instagram.com/yehwan.yen.song/", "website": "https://yhsong.com"},
        categories: ["web art", "anti-friendly design", "Helsinki Biennial"],
        source: "similar"
    },
    {
        name: "luh2203",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/luh2203/", "website": "https://lucilehaute.fr"},
        categories: ["Cyberwitches Manifesto", "spirituality", "technology"],
        source: "similar"
    },
    {
        name: "lou_cantor",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/lou_cantor/", "website": "https://www.loucantor.com"},
        categories: ["collective", "AI liberation", "Berlin Biennal"],
        source: "similar"
    },
    {
        name: "moritz.jekat",
        followers: {"instagram": 1321},
        links: {"instagram": "https://www.instagram.com/moritz.jekat/", "website": "https://moritzjekat.de"},
        categories: ["CGI", "sculpture", "installation"],
        source: "similar"
    },
    {
        name: "irina.spicaka",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/irina.spicaka/", "website": "https://spicaka.info"},
        categories: ["audiovisual", "interactive", "transmediale"],
        source: "similar"
    },
    {
        name: "panaviscope",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/panaviscope/", "website": "https://daily.xyz/artist/panaviscope"},
        categories: ["AI video", "Sora", "music", "fellowship.xyz"],
        source: "similar"
    },
    {
        name: "petra_cortright",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/petra_cortright/", "website": "https://www.petracortright.com"},
        categories: ["net art", "Rhizome", "Post-Internet"],
        source: "similar"
    },
    {
        name: "naetboyce",
        followers: {"instagram": 12000},
        links: {"instagram": "https://www.instagram.com/naetboyce/"},
        categories: ["OPN collaborator", "moving image", "MoMA"],
        source: "similar"
    },
    {
        name: "claire_barrow",
        followers: {"instagram": 71000},
        links: {"instagram": "https://www.instagram.com/claire_barrow/", "website": "https://clairebarrow.com"},
        categories: ["Bladee", "Drain Gang", "painting", "fashion"],
        source: "similar"
    },
    {
        name: "letsglitchit",
        followers: {"instagram": 2300},
        links: {"instagram": "https://www.instagram.com/letsglitchit/", "website": "https://letsglitchit.art"},
        categories: ["glitch art", "circuit bending", "Sotheby's", "Christie's"],
        source: "similar"
    },
    {
        name: "empress_trash",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/empress_trash/", "website": "https://empresstrash.com"},
        categories: ["glitch aesthetics", "AI art", "Miami Art Basel"],
        source: "similar"
    },
    {
        name: "_menkman",
        followers: {"instagram": 8347},
        links: {"instagram": "https://www.instagram.com/_menkman/"},
        categories: ["glitch theory", "Glitch Studies Manifesto", "media archaeology"],
        source: "similar"
    },
    {
        name: "taborrobak",
        followers: {"instagram": 4710},
        links: {"instagram": "https://www.instagram.com/taborrobak/", "website": "https://www.taborrobak.com"},
        categories: ["new media", "MoMA", "Whitney", "Met"],
        source: "similar"
    },
    {
        name: "anastasia_sternad",
        followers: {"instagram": 1162},
        links: {"instagram": "https://www.instagram.com/anastasia_sternad/"},
        categories: ["digital fashion", "CLO3D", "3D design"],
        source: "similar"
    },
    {
        name: "charlieengman",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/charlieengman/"},
        categories: ["fashion photography", "surrealism", "maternal imagery", "Dazed 100"],
        source: "similar"
    },
    {
        name: "bagdelete",
        followers: {"instagram": 80000},
        links: {"instagram": "https://www.instagram.com/bagdelete/", "website": "https://noper.xyz"},
        categories: ["AI art", "conceptual", "artificial explorer"],
        source: "similar"
    },
    {
        name: "rheadillon",
        followers: {"instagram": 16000},
        links: {"instagram": "https://www.instagram.com/rheadillon/"},
        categories: ["interdisciplinary", "queer", "visceral sculptures", "Black expressionism", "Sotheby's"],
        source: "similar"
    },
    {
        name: "dozie.kanu",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/dozie.kanu/"},
        categories: ["sculpture", "found objects", "Studio Museum Harlem"],
        source: "similar"
    },
    {
        name: "frankdorrey",
        followers: {"instagram": 35000},
        links: {"instagram": "https://www.instagram.com/frankdorrey/"},
        categories: ["digital collage", "surrealism", "Black narratives", "Steve Lacy collab"],
        source: "similar"
    },
    {
        name: "mishameghna",
        followers: {"instagram": 12000},
        links: {"instagram": "https://www.instagram.com/mishameghna/"},
        categories: ["fashion photography", "cosmic aesthetics", "color", "Hypebae"],
        source: "similar"
    },
    {
        name: "ottilielandmark",
        followers: {"instagram": 9000},
        links: {"instagram": "https://www.instagram.com/ottilielandmark/"},
        categories: ["queer photography", "fashion", "identity", "CSM graduate"],
        source: "similar"
    },
    {
        name: "evagold.jpg",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/evagold.jpg/"},
        categories: ["sculpture", "moving image", "queer", "cinematic", "Frieze London 2024"],
        source: "similar"
    },
    {
        name: "benediktebjerre",
        followers: {"instagram": 172},
        links: {"instagram": "https://www.instagram.com/benediktebjerre/"},
        categories: ["sculpture", "installation", "climate collapse", "Frieze London 2024"],
        source: "similar"
    },
    {
        name: "luyangasia",
        followers: {"instagram": 30000},
        links: {"instagram": "https://www.instagram.com/luyangasia/"},
        categories: ["animation", "video art", "digital", "Frieze Seoul 2024", "Deutsche Bank Artist of Year"],
        source: "similar"
    },
    {
        name: "cheesetalk1997",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/cheesetalk1997/", "website": "https://fakecheese.me"},
        categories: ["AI research", "RCA PhD", "Ars Electronica 2025", "Lumen Prize", "conversational AI"],
        source: "similar"
    },
    {
        name: "ibl3d",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/ibl3d/", "website": "https://www.ibl3d.com"},
        categories: ["3D", "photogrammetry", "Ars Electronica", "Transmediale", "Spanish artist"],
        source: "similar"
    },
    {
        name: "danctrl",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/danctrl/", "website": "https://foundation.app/@danctrl"},
        categories: ["digital painting", "traditional painting", "Italian artist", "Rome-based"],
        source: "similar"
    },
    {
        name: "etozzheques",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/etozzheques/"},
        categories: ["melancholic AI art", "exhibited NY/LA/Tokyo/Rome", "surrealism"],
        source: "similar"
    },
    {
        name: "negar_sepehr_nft",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/negar_sepehr_nft/"},
        categories: ["Iranian artist", "AI art", "NFTNYC Times Square", "focus on minorities", "Tehran"],
        source: "similar"
    },
    {
        name: "manuelrossner",
        followers: {"instagram": 6102},
        links: {"instagram": "https://www.instagram.com/manuelrossner/", "website": "https://www.manuelrossner.com"},
        categories: ["digital architecture", "virtual worlds", "Berlin-based", "Hamburger Kunsthalle collection"],
        source: "similar"
    },
    {
        name: "elegantcollisions",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/elegantcollisions/", "website": "https://elegantcollisions.com"},
        categories: ["Black computational thought", "UCLA DMA", "researcher", "Transmediale", "The Kitchen NYC"],
        source: "similar"
    },
    {
        name: "charstiles",
        followers: {"instagram": 22000},
        links: {"instagram": "https://www.instagram.com/charstiles/", "website": "https://charstiles.com"},
        categories: ["live coding", "shader programming", "MIT Media Lab", "Future Sketches", "computational artist"],
        source: "similar"
    },
    {
        name: "davidquilesguillo",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/davidquilesguillo/"},
        categories: ["curator", "Wrong Biennale founder", "digital art curator", "Spain-based", "independent"],
        source: "similar"
    },
    {
        name: "peterburr",
        followers: {"instagram": 6565},
        links: {"instagram": "https://www.instagram.com/peterburr/", "website": "https://peterburr.org"},
        categories: ["generative art", "video game aesthetics", "Whitney Museum", "MoMA", "Guggenheim Fellowship", "Brooklyn"],
        source: "similar"
    },
    {
        name: "aurecevettier",
        followers: {"instagram": 0},
        links: {"instagram": "https://www.instagram.com/aurecevettier/", "website": "https://www.aurecevettier.com"},
        categories: ["generative art", "AI art", "Vera Moln\u00e1r collaborator", "French artist", "bronze sculpture", "tapestry", "oil painting"],
        source: "similar"
    },
    {
        name: "heliosantossz",
        followers: {"instagram": 4507},
        links: {"instagram": "https://www.instagram.com/heliosantossz/", "website": "https://heliosantos.org"},
        categories: ["AI art", "robotic painting", "oil painting", "Mexican artist", "landscape", "machine learning"],
        source: "similar"
    },
    {
        name: "wonderkatzi",
        followers: {"instagram": 16000},
        links: {"instagram": "https://www.instagram.com/wonderkatzi/", "website": "https://sashakatz.com"},
        categories: ["3D art", "AI art", "Sotheby's", "Burberry collab", "Gucci collab", "female sensuality", "Paris-based"],
        source: "similar"
    },
    {
        name: "0xstc",
        followers: {"instagram": 465},
        links: {"instagram": "https://www.instagram.com/0xstc/", "website": "https://stc.github.io"},
        categories: ["algorithmic art", "generative art", "MIT", "ZKM Karlsruhe", "Mutek Festival", "Binaura collective", "Budapest"],
        source: "similar"
    },
    {
        name: "schwittlick",
        followers: {"instagram": 2735},
        links: {"instagram": "https://www.instagram.com/schwittlick/", "website": "https://schwittlick.net"},
        categories: ["plotter art", "algorithmic art", "drawing machines", "Berlin-based", "computer science + art", "generative"],
        source: "similar"
    },
    {
        name: "lovidlovid",
        followers: {"instagram": 6717},
        links: {"instagram": "https://www.instagram.com/lovidlovid/", "website": "https://www.lovid.org"},
        categories: ["artist duo", "Tali Hinkis + Kyle Lapidus", "generative art", "fabric work", "stained glass", "Rhizome", "Art Blocks", "NYC"],
        source: "similar"
    },
    {
        name: "annacarreras.art",
        followers: {"instagram": 631},
        links: {"instagram": "https://www.instagram.com/annacarreras.art/", "website": "https://www.annacarreras.com"},
        categories: ["generative art", "creative coding", "Cannes Golden Lion 2010", "Google DevArt Award", "Barcelona", "interactive", "PhD researcher"],
        source: "similar"
    },
    {
        name: "ognyveli",
        followers: {"instagram": 3972},
        links: {"instagram": "https://www.instagram.com/ognyveli/", "website": "https://iskraovelitchkova.com"},
        categories: ["generative art", "Bulgarian artist", "Forbes featured", "BBVA Innova awards", "Madrid-based", "Art Blocks", "mixed media"],
        source: "similar"
    },
    {
        name: "aaron_penne",
        followers: {"instagram": 11000},
        links: {"instagram": "https://www.instagram.com/aaron_penne/", "website": "https://www.aaronpenne.io"},
        categories: ["generative art", "creative coding", "Lumen Prize 2022", "Art Blocks Director", "Seattle", "engineer + artist"],
        source: "similar"
    },
];
