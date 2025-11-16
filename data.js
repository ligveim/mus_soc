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
        followers: {"spotify": 35400},
        links: {"spotify": "https://open.spotify.com/artist/4effiSDHnV1sU1FaLSWIRS", "bandcamp": "https://blithefield.bandcamp.com/"},
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
        links: {"instagram": "https://www.instagram.com/argonuff/", "spotify": "https://open.spotify.com/artist/15G1LspLruN9ZMpYgSGGLq"},
        source: "original"
    },
    {
        name: "Eterna",
        followers: {"spotify": 32500},
        links: {"spotify": "https://open.spotify.com/artist/7ekeXKGdf5os6oYTZgKTQP"},
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
        links: {"spotify": "https://open.spotify.com/artist/6XcJCz7dqlBOyZ0b57SyQp", "bandcamp": "https://computer-gaze.bandcamp.com/"},
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
        links: {"instagram": "https://www.instagram.com/rorynearly20s/", "spotify": "https://open.spotify.com/artist/2E701AAAlg7LthbISEZv0N", "bandcamp": "https://rorynearly20s.bandcamp.com/"},
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
        links: {"spotify": "https://open.spotify.com/artist/1GUci0loUu7Ysy2YkLLick", "soundcloud": "https://soundcloud.com/formanorte"},
        source: "original"
    },
    {
        name: "Leon Vynehall",
        followers: {"instagram": 62000, "spotify": 406400},
        links: {"instagram": "https://www.instagram.com/vynehall/", "spotify": "https://open.spotify.com/artist/2o7L9DNcmzocYll1o0GGTU", "soundcloud": "https://soundcloud.com/vynehall", "bandcamp": "https://leonvynehall.bandcamp.com/"},
        source: "original"
    },
    {
        name: "optic core",
        followers: {"instagram": 3870, "spotify": 90000},
        links: {"instagram": "https://www.instagram.com/optic__core/", "spotify": "https://open.spotify.com/artist/2iyLphVMYwRzaMn9hwHqDf", "soundcloud": "https://soundcloud.com/optic_core", "bandcamp": "https://opticcore.bandcamp.com/"},
        source: "original"
    },
    {
        name: "shamana",
        followers: {"instagram": 6310, "spotify": 281900},
        links: {"instagram": "https://www.instagram.com/shamanabeats/", "spotify": "https://open.spotify.com/artist/79idWEjZLtkCkJ37uHo7Av", "soundcloud": "https://soundcloud.com/SHAMANABEATS"},
        source: "original"
    },
    {
        name: "Maebi",
        followers: {"instagram": 1191, "spotify": 582900},
        links: {"instagram": "https://www.instagram.com/maebimusic/", "spotify": "https://open.spotify.com/artist/6tVxgFV9M1sqlTWUnQOhlu", "soundcloud": "https://soundcloud.com/maeb-i", "bandcamp": "https://maebi.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Instupendo",
        followers: {"instagram": 28000, "spotify": 2200000},
        links: {"instagram": "https://www.instagram.com/instupendo/", "spotify": "https://open.spotify.com/artist/3ctnkEZGtVBTxS7IMin8nC", "bandcamp": "https://instupendo.bandcamp.com/", "twitter": "https://x.com/instupendo"},
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
        followers: {"instagram": 18000, "spotify": 88500},
        links: {"instagram": "https://www.instagram.com/rickyeatacidx/", "spotify": "https://open.spotify.com/artist/4BO8wK4OAaFsi6PSzs366S", "soundcloud": "https://soundcloud.com/rickyeatacid", "twitter": "https://x.com/rickyeatacid"},
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
        followers: {"instagram": 4625, "spotify": 86700},
        links: {"instagram": "https://www.instagram.com/deathbrains/", "spotify": "https://open.spotify.com/artist/0xR08Dp7M1PF7XbISrKwbW", "soundcloud": "https://soundcloud.com/deathbrainofficial", "twitter": "https://x.com/deathbrainz", "bandcamp": "https://deathbrain.bandcamp.com/"},
        source: "original"
    },
    {
        name: "African-American Sound",
        followers: {"instagram": 29000, "spotify": 21000},
        links: {"instagram": "https://www.instagram.com/citiesaviv/", "spotify": "https://open.spotify.com/artist/3tzzHTt8wbTTdfOcf8amgz", "bandcamp": "https://africanamericansoundrecordings.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Casino Versus Japan",
        followers: {"spotify": 90800},
        links: {"spotify": "https://open.spotify.com/artist/5xMtVcziLHpIwD9iNWPOM6", "bandcamp": "https://attacknine.bandcamp.com/album/live-at-le-poisson-rouge"},
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
        followers: {"instagram": 1965, "spotify": 318400},
        links: {"instagram": "https://www.instagram.com/susumuyokotaofficial/", "spotify": "https://open.spotify.com/artist/3ND5NWoKzlelYDDyWqSQpQ", "soundcloud": "https://soundcloud.com/susumuyokotaofficial"},
        source: "original"
    },
    {
        name: "Two Lone Swordsmen",
        followers: {"spotify": 46100},
        links: {"spotify": "https://open.spotify.com/artist/33Ztukerf3He8FeKk5acn8", "soundcloud": "https://m.soundcloud.com/twoloneswordsmen"},
        source: "original"
    },
    {
        name: "ilydima",
        followers: {"spotify": 19900},
        links: {"spotify": "https://open.spotify.com/artist/0jfM46ZkOFpk5EkXWEhTC5"},
        source: "original"
    },
    {
        name: "Hype Williams",
        followers: {"spotify": 62500},
        links: {"spotify": "https://open.spotify.com/artist/3SMaI6j8ObewCWPQFwfvui"},
        source: "original"
    },
    {
        name: "Father2006",
        followers: {},
        links: {"spotify": "https://open.spotify.com/artist/27yhOwnmWiOJf474zGblS4", "soundcloud": "https://soundcloud.com/father2006", "bandcamp": "https://father2006.bandcamp.com/", "twitter": "https://twitter.com/father2006_", "website": "https://father.2006.kr/"},
        source: "original"
    },
    {
        name: "ooxygen",
        followers: {"spotify": 65200},
        links: {"spotify": "https://open.spotify.com/artist/1TprUqL4zLntYtStJgUV6p"},
        source: "original"
    },
    {
        name: "dreamcorp.",
        followers: {},
        links: {"instagram": "https://www.instagram.com/dreamcorphomevideo/", "spotify": "https://open.spotify.com/artist/0UIto5RF21KnI9X46G0Lau", "soundcloud": "https://soundcloud.com/dreamcorphomevideo", "bandcamp": "https://dreamcorphomevideo.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Flaer",
        followers: {"instagram": 3092, "spotify": 52000},
        links: {"instagram": "https://www.instagram.com/flaer___/", "spotify": "https://open.spotify.com/artist/0PiMvUJDkqg4AAfl8CP1Di", "soundcloud": "https://soundcloud.com/flaermusic"},
        source: "original"
    },
    {
        name: "Shuta Yasukochi",
        followers: {},
        links: {"spotify": "https://open.spotify.com/artist/68GryM5mhDPrhRzMohl3Ui", "bandcamp": "https://shutayasukochi.bandcamp.com/", "soundcloud": "https://soundcloud.com/shuta-yasukochi"},
        source: "original"
    },
    {
        name: "sugar plant",
        followers: {"spotify": 68100},
        links: {"spotify": "https://open.spotify.com/artist/0KrBZKq6kpcv9N0vBesN8o", "bandcamp": "https://sugarplant.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Harpsichord Canvas",
        followers: {},
        links: {"bandcamp": "https://harpsichordcanvas.bandcamp.com/", "soundcloud": "https://soundcloud.com/harpsichordcanvas"},
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
        followers: {"spotify": 55900},
        links: {"spotify": "https://open.spotify.com/artist/4m4ywwSd3EtlfquQLUHnyW"},
        source: "original"
    },
    {
        name: "pathetic240px",
        followers: {"instagram": 12000, "spotify": 970600},
        links: {"instagram": "https://www.instagram.com/pathetic240px/", "spotify": "https://open.spotify.com/artist/6s6HhNePAkax0mfTK1O57K", "bandcamp": "https://pathetic240px.bandcamp.com/", "soundcloud": "https://soundcloud.com/pathetic240px"},
        source: "original"
    },
    {
        name: "untitled (halo)",
        followers: {"instagram": 12000, "spotify": 62700},
        links: {"instagram": "https://www.instagram.com/untitledhalo/", "spotify": "https://open.spotify.com/artist/3r9Q5Yy2TA8QG4CtJlvhIn"},
        source: "original"
    },
    {
        name: "Retail Drugs",
        followers: {"spotify": 17600},
        links: {"instagram": "https://www.instagram.com/retaildrugsnyc/", "spotify": "https://open.spotify.com/artist/20E1xPsDShhr1qcVPStW3v", "bandcamp": "https://retaildrugs.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Damage Cloud",
        followers: {},
        links: {"bandcamp": "https://damagecloud.bandcamp.com/"},
        source: "original"
    },
    {
        name: "SPXRXT",
        followers: {"instagram": 190, "spotify": 51000},
        links: {"instagram": "https://www.instagram.com/spxrxt.nxnx/", "spotify": "https://open.spotify.com/artist/5pTlqH0gyhoF6ctINfS8cS", "bandcamp": "https://spxrxt.bandcamp.com/", "soundcloud": "https://soundcloud.com/spxrxt"},
        source: "original"
    },
    {
        name: "draaq me",
        followers: {"spotify": 60300},
        links: {"spotify": "https://open.spotify.com/artist/3c78RGXMpRW2lwP8NQeUQ2"},
        source: "original"
    },
    {
        name: "Detente",
        followers: {"spotify": 16400},
        links: {"spotify": "https://open.spotify.com/artist/27EWfb0OYnPNxWql0eNb4X"},
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
        followers: {"spotify": 36500},
        links: {"spotify": "https://open.spotify.com/artist/0sf2u7qJQLxkZjon6FsvJT", "bandcamp": "https://starsofthelid.bandcamp.com/album/the-dead-texan"},
        source: "original"
    },
    {
        name: "Bogdan Raczynski",
        followers: {"instagram": 16000, "spotify": 30300},
        links: {"instagram": "https://www.instagram.com/bogdanraczynski/", "spotify": "https://open.spotify.com/artist/2bYCvT1nqpbbspU5DZG5nA", "soundcloud": "https://m.soundcloud.com/bogdanraczynski", "website": "https://bogdanraczynski.com/"},
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
        followers: {"spotify": 190300},
        links: {"spotify": "https://open.spotify.com/artist/4G1ZsxfEEztbE1VcnNInPg"},
        source: "original"
    },
    {
        name: "7038634357",
        followers: {"instagram": 13000},
        links: {"instagram": "https://www.instagram.com/neo_lapse/", "spotify": "https://open.spotify.com/artist/2k55GlZ4XckJwuYEQ4HJAO", "bandcamp": "https://7-0-3.bandcamp.com/", "soundcloud": "https://soundcloud.com/neo_petal"},
        source: "original"
    },
    {
        name: "Jeremiah Chiu",
        followers: {"instagram": 12000, "spotify": 74400},
        links: {"instagram": "https://www.instagram.com/jeremiahchiu/", "spotify": "https://open.spotify.com/artist/1RpHbIW5eeEBs693nyrhSa", "bandcamp": "https://jeremiahchiu.bandcamp.com/", "website": "https://www.jeremiahchiu.com/"},
        source: "original"
    },
    {
        name: "Hooky",
        followers: {"instagram": 5164, "spotify": 13},
        links: {"instagram": "https://www.instagram.com/h0o0ky/", "spotify": "https://open.spotify.com/artist/1JtMqJjABFQTQWUNml1pek", "soundcloud": "https://soundcloud.com/h0o0ky", "bandcamp": "https://hoooky.bandcamp.com/"},
        source: "original"
    },
    {
        name: "yeahsokaye",
        followers: {"spotify": 29400},
        links: {"instagram": "https://www.instagram.com/yeahsokaye/", "spotify": "https://open.spotify.com/artist/0sOyXDeIf71c8M7gEGpxMG", "soundcloud": "https://soundcloud.com/yeahsokaye"},
        source: "original"
    },
    {
        name: "General Translator",
        followers: {},
        links: {"spotify": "https://open.spotify.com/artist/0m45Nc8OUBVWMrNIbrEx7H", "bandcamp": "https://vsjrp.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Chanel Beads",
        followers: {"instagram": 37000, "spotify": 384100},
        links: {"instagram": "https://www.instagram.com/chanel_beads/", "spotify": "https://open.spotify.com/artist/3x11XrMEnyP18hv73pmKRL"},
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
        followers: {"instagram": 114000, "spotify": 60300},
        links: {"instagram": "https://www.instagram.com/hainbach101/", "spotify": "https://open.spotify.com/artist/3FlXXv8lfSt3ZWk9epMxe7"},
        source: "original"
    },
    {
        name: "Jeremy Blake",
        followers: {"instagram": 11000, "spotify": 634},
        links: {"instagram": "https://www.instagram.com/jjbbllkk/", "spotify": "https://open.spotify.com/artist/1FnFDLE1iq1L5Md8tm1cXO", "soundcloud": "https://soundcloud.com/jeremyblake", "bandcamp": "https://soundvision.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Patricia Wolf",
        followers: {"instagram": 9117, "spotify": 75000},
        links: {"instagram": "https://www.instagram.com/patriciawolf_music/", "spotify": "https://open.spotify.com/artist/5U2PKpLxoEwfOnPAwzPt5T", "soundcloud": "https://soundcloud.com/patriciawolf_music", "bandcamp": "https://patriciawolf.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Martyna Basta",
        followers: {"instagram": 5557, "spotify": 4500},
        links: {"instagram": "https://www.instagram.com/martynkabasta/", "spotify": "https://open.spotify.com/artist/0vRyt5xtZZ8cve0YTSxNIw", "bandcamp": "https://martynabasta.bandcamp.com/", "soundcloud": "https://soundcloud.com/martyna-basta", "website": "https://www.martynabasta.com/"},
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
        followers: {"instagram": 706, "spotify": 43000},
        links: {"instagram": "https://www.instagram.com/yes____and/", "spotify": "https://open.spotify.com/artist/7IxiRbidPWbGcs1K14lf98"},
        source: "original"
    },
    {
        name: "Geller",
        followers: {"instagram": 25000, "spotify": 73000},
        links: {"instagram": "https://www.instagram.com/gellermusic/", "spotify": "https://open.spotify.com/artist/6OgMBOUaAfkEfWkEfWkXpbL", "website": "https://www.gellermusic.com/"},
        source: "original"
    },
    {
        name: "Nikolaienko",
        followers: {},
        links: {"soundcloud": "https://soundcloud.com/nikolaienko", "website": "https://dmytronikolaienko.com/"},
        source: "original"
    },
    {
        name: "Arthur Mine",
        followers: {"spotify": 1300},
        links: {"spotify": "https://open.spotify.com/artist/6dtoiMrxTN33pqX8SWewie"},
        source: "original"
    },
    {
        name: "Crim3s",
        followers: {"instagram": 27000, "spotify": 363400},
        links: {"instagram": "https://www.instagram.com/crim3s/", "spotify": "https://open.spotify.com/artist/1ARDx2oCR7sJEjbnHsbbRU"},
        source: "original"
    },
    {
        name: "Death Hags",
        followers: {"spotify": 15600},
        links: {"instagram": "https://www.instagram.com/death_hags/", "spotify": "https://open.spotify.com/artist/0PulgZlDMcE2B1AQD4kITo", "bandcamp": "https://deathhags.bandcamp.com/", "soundcloud": "https://soundcloud.com/death_hags"},
        source: "original"
    },
    {
        name: "Haruhisa Tanaka",
        followers: {"spotify": 126700},
        links: {"spotify": "https://open.spotify.com/artist/4ZTlbJ3KHGs7wuvdtouuIw", "bandcamp": "https://teinei.bandcamp.com/album/nayuta"},
        source: "original"
    },
    {
        name: "River Tiber",
        followers: {"instagram": 22000, "spotify": 978700},
        links: {"instagram": "https://www.instagram.com/rivertiber/", "spotify": "https://open.spotify.com/artist/1FHDMgGdmIP4IsoFkAwbS0", "soundcloud": "https://soundcloud.com/rivertiber", "twitter": "https://twitter.com/rivertiber"},
        source: "original"
    },
    {
        name: "No Love In The House Of Gold",
        followers: {"spotify": 190000},
        links: {"instagram": "https://www.instagram.com/noloveinthehouseofgold/", "spotify": "https://open.spotify.com/artist/5gqzWJS2sbYm3zoKFsC38L"},
        source: "original"
    },
    {
        name: "Other Nothing",
        followers: {"spotify": 656100},
        links: {"instagram": "https://www.instagram.com/othernoth/", "spotify": "https://open.spotify.com/artist/4DXOz58gkpdeCcsW4Xjxgd", "website": "https://www.othernothing.com/"},
        source: "original"
    },
    {
        name: "TheExorcist",
        followers: {"spotify": 1},
        links: {"spotify": "https://open.spotify.com/artist/2ywNboibMviT63ZfqNu7wz", "bandcamp": "https://theexorcistgbg.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Actress",
        followers: {},
        links: {"instagram": "https://www.instagram.com/__a__c__t__r__e__s__s__/", "spotify": "https://open.spotify.com/artist/6XyY86QOPPrYVGvF9ch6wz", "bandcamp": "https://actress.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Locust",
        followers: {"spotify": 3000},
        links: {"spotify": "https://open.spotify.com/artist/5kytvmQqoeunOLa2LtIt1N", "bandcamp": "https://markvanhoen.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Slow Attack Ensemble",
        followers: {"instagram": 2078},
        links: {"instagram": "https://www.instagram.com/slowattackensemble/", "spotify": "https://open.spotify.com/artist/1YsM3PBHRzAPjdDhj5d6As", "soundcloud": "https://soundcloud.com/slowattackensemble"},
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
        followers: {"spotify": 7800},
        links: {"spotify": "https://open.spotify.com/artist/35yKqbBahxH38GhRc0vFrg", "bandcamp": "https://kirkbarley.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Funki Porcini",
        followers: {"spotify": 156900},
        links: {"spotify": "https://open.spotify.com/artist/2RNUVT2Tl938bULcNzDRNw", "bandcamp": "https://funkiporcini.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Astrid Sonne",
        followers: {"instagram": 28000, "spotify": 170800},
        links: {"instagram": "https://www.instagram.com/astridsonne_/", "spotify": "https://open.spotify.com/artist/7qiyPneI60DzZmxVxC7689", "soundcloud": "https://m.soundcloud.com/a_sonne"},
        source: "original"
    },
    {
        name: "Iwakura",
        followers: {"instagram": 67, "spotify": 227400},
        links: {"instagram": "https://www.instagram.com/lain_iwakura_official/", "spotify": "https://open.spotify.com/artist/1D9SrXAj9dz5sbqB12W1uv", "soundcloud": "https://soundcloud.com/iwakuraa"},
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
        followers: {"instagram": 12000, "spotify": 350100},
        links: {"instagram": "https://www.instagram.com/foolmusic/", "spotify": "https://open.spotify.com/artist/1ldNdtZX38LAsOk0ciLvb2"},
        source: "original"
    },
    {
        name: "d2s1",
        followers: {"instagram": 567},
        links: {"instagram": "https://www.instagram.com/_d2s1_/", "spotify": "https://open.spotify.com/artist/0l6f9cXGE0K2QbcK1ZBgCY", "soundcloud": "https://soundcloud.com/d2s1_music"},
        source: "original"
    },
    {
        name: "Leliel",
        followers: {"spotify": 117},
        links: {"spotify": "https://open.spotify.com/artist/5byrsGoCAhVfZ2gTUbv89L"},
        source: "original"
    },
    {
        name: "The Koreatown Oddity",
        followers: {"instagram": 20000, "spotify": 87900},
        links: {"instagram": "https://www.instagram.com/ktownodd/", "spotify": "https://open.spotify.com/artist/5p2gVFoALyOtm13Fv5TjgQ", "soundcloud": "https://soundcloud.com/the-koreatown-oddity", "twitter": "https://twitter.com/koreatownoddity"},
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
        followers: {"spotify": 2300},
        links: {"spotify": "https://open.spotify.com/artist/2bvw5ZYK1LmNAikReUhJOc"},
        source: "original"
    },
    {
        name: "audry",
        followers: {"instagram": 2383, "spotify": 532},
        links: {"instagram": "https://www.instagram.com/audrymusicartist/", "spotify": "https://open.spotify.com/artist/5oivZbKE0eyzr1CELOQUZG"},
        source: "original"
    },
    {
        name: "Xori",
        followers: {"spotify": 318},
        links: {"spotify": "https://open.spotify.com/artist/5e4BMUzdxvt2bedcoBKrjv", "bandcamp": "https://xori.bandcamp.com/", "soundcloud": "https://soundcloud.com/x0ri"},
        source: "original"
    },
    {
        name: "Imagine Drowning",
        followers: {"spotify": 44900},
        links: {"spotify": "https://open.spotify.com/artist/00Z6TAeTxPFq45NrCtj7M9"},
        source: "original"
    },
    {
        name: "dreamcorp",
        followers: {},
        links: {"instagram": "https://www.instagram.com/dreamcorphomevideo/", "spotify": "https://open.spotify.com/artist/0UIto5RF21KnI9X46G0Lau", "soundcloud": "https://soundcloud.com/dreamcorphomevideo", "bandcamp": "https://dreamcorphomevideo.bandcamp.com/"},
        source: "original"
    },
    {
        name: "Argo Nuff",
        followers: {},
        links: {"instagram": "https://www.instagram.com/argonuff/", "spotify": "https://open.spotify.com/artist/15G1LspLruN9ZMpYgSGGLq"},
        source: "original"
    },
    {
        name: "Elysia Crampton",
        followers: {"spotify": 0},
        links: {"spotify": "https://open.spotify.com/artist/75v4Rn3SqXn6dmq2PFrRgN", "soundcloud": "https://soundcloud.com/eande"},
        source: "similar"
    },
    {
        name: "Tujiko Noriko",
        followers: {"instagram": 2343, "spotify": 26300},
        links: {"instagram": "https://www.instagram.com/koyama_tujiko/", "spotify": "https://open.spotify.com/artist/7n9eKttEekbKaDErD29u7l", "website": "https://tujikonoriko.com/"},
        source: "similar"
    },
    {
        name: "Triad God",
        followers: {},
        links: {"spotify": "https://open.spotify.com/artist/25U9EIeQHwCfEbygMdm08y", "soundcloud": "https://soundcloud.com/triadgod", "bandcamp": "https://prestorecords.bandcamp.com/album/triad"},
        source: "similar"
    },
    {
        name: "Jonatan Leandoer96",
        followers: {"spotify": 226700},
        links: {"spotify": "https://open.spotify.com/artist/5tPS5f7Gu3SaJQusdkehtE"},
        source: "similar"
    },
    {
        name: "Teen Daze",
        followers: {"spotify": 102700},
        links: {"spotify": "https://open.spotify.com/artist/2GE6MAdyGzeXpY9TwIYd3l", "bandcamp": "https://teendaze.bandcamp.com/"},
        source: "similar"
    },
    {
        name: "Lusine",
        followers: {"instagram": 4255},
        links: {"instagram": "https://www.instagram.com/lusine_music/", "spotify": "https://open.spotify.com/artist/2fMe9lZs5HGGOwh8cMSIub", "soundcloud": "https://soundcloud.com/lusine-official", "website": "http://lusineweb.com/"},
        source: "similar"
    },
    {
        name: "George Clanton",
        followers: {"instagram": 91000, "spotify": 1400000},
        links: {"instagram": "https://www.instagram.com/georgeclanton/", "spotify": "https://open.spotify.com/artist/1G5v3lpMz7TeoW0yGpRQHr", "bandcamp": "https://georgeclanton.bandcamp.com/"},
        source: "similar"
    },
    {
        name: "Ilkae",
        followers: {},
        links: {"spotify": "https://open.spotify.com/artist/3syDQTaZptGpu5iyYJxLnl", "bandcamp": "https://ilkae.bandcamp.com/"},
        source: "similar"
    },
    {
        name: "PilotRedSun",
        followers: {"spotify": 21000},
        links: {"spotify": "https://open.spotify.com/artist/5hxE1UR58Ku5MUdJxVGc0e"},
        source: "similar"
    },
    {
        name: "Rei Harakami",
        followers: {"spotify": 57600},
        links: {"spotify": "https://open.spotify.com/artist/1orPVlRmIYWQ2KkJcMjjnB"},
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
