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
    },
    "Vegyn": {
        "followers": {"instagram": 107000, "spotify": 1100000},
        "links": {
            "instagram": "https://www.instagram.com/vegynvegyn/",
            "spotify": "https://open.spotify.com/artist/5iUnvXddCpOrbWKm7QMr6o",
            "soundcloud": "https://soundcloud.com/vegyn",
            "twitter": "https://twitter.com/vegynvegyn"
        }
    },
    "Leon Vynehall": {
        "followers": {"instagram": 62000, "spotify": 406400},
        "links": {
            "instagram": "https://www.instagram.com/vynehall/",
            "spotify": "https://open.spotify.com/artist/2o7L9DNcmzocYll1o0GGTU",
            "bandcamp": "https://leonvynehall.bandcamp.com/"
        }
    },
    "Instupendo": {
        "followers": {"spotify": 2200000},
        "links": {
            "spotify": "https://open.spotify.com/artist/3ctnkEZGtVBTxS7IMin8nC",
            "bandcamp": "https://instupendo.bandcamp.com/",
            "twitter": "https://x.com/instupendo"
        }
    },
    "Khotin": {
        "followers": {"spotify": 46100},
        "links": {
            "spotify": "https://open.spotify.com/artist/0q2WkTHTEczNf8wNq6MBRk",
            "soundcloud": "https://soundcloud.com/khotin",
            "website": "https://khotin.ca/"
        }
    },
    "Oval": {
        "followers": {"instagram": 2634, "spotify": 11998, "twitter": 1465},
        "links": {
            "instagram": "https://www.instagram.com/markuspopp_oval/",
            "spotify": "https://open.spotify.com/artist/1Yti3CsDazWVjNMXBHx1Af",
            "twitter": "https://x.com/markuspopp_oval",
            "bandcamp": "https://oval.bandcamp.com/"
        }
    },
    "Rory in early 20s": {
        "followers": {"spotify": 504300},
        "links": {
            "instagram": "https://www.instagram.com/rorynearly20s/",
            "spotify": "https://open.spotify.com/artist/2E701AAAlg7LthbISEZv0N",
            "soundcloud": "https://soundcloud.com/rorynearly20s",
            "bandcamp": "https://rorynearly20s.bandcamp.com/",
            "twitter": "https://x.com/rorynearly20s"
        }
    },
    "Trashiii": {
        "followers": {"spotify": 201800},
        "links": {
            "spotify": "https://open.spotify.com/artist/6txVXvr3AUo8DwygF77cah"
        }
    },
    "Ssaliva": {
        "followers": {"instagram": 20000, "spotify": 26800},
        "links": {
            "instagram": "https://www.instagram.com/_ssaliva/",
            "spotify": "https://open.spotify.com/artist/3pPIWa19bNbZaA4xNt81HB",
            "bandcamp": "https://leavingrecords.bandcamp.com/album/ssaliva-pantani"
        }
    },
    "Downhill2k01": {
        "followers": {},
        "links": {
            "spotify": "https://open.spotify.com/artist/0xBBjvYwXtW0k90kDx9JLs",
            "soundcloud": "https://soundcloud.com/tags/downhill2k01"
        }
    },
    "US Golf 95": {
        "followers": {},
        "links": {
            "spotify": "https://open.spotify.com/artist/5CnHY3fEGCye9RQH7gVvox",
            "bandcamp": "https://usgolf95.bandcamp.com/"
        }
    },
    "Infinity Frequencies": {
        "followers": {"spotify": 342400},
        "links": {
            "spotify": "https://open.spotify.com/artist/6XcJCz7dqlBOyZ0b57SyQp",
            "bandcamp": "https://computer-gaze.bandcamp.com"
        }
    },
    "Loukeman": {
        "followers": {"instagram": 24000, "spotify": 325600},
        "links": {
            "instagram": "https://www.instagram.com/loukeman/",
            "spotify": "https://open.spotify.com/artist/10JL2s5aUztzFyURrFrxtL",
            "soundcloud": "https://soundcloud.com/loukeman",
            "website": "https://loukeman.com/"
        }
    },
    "Forma Norte": {
        "followers": {"spotify": 76200},
        "links": {
            "spotify": "https://open.spotify.com/artist/1GUci0loUu7Ysy2YkLLick"
        }
    },
    "Hainbach": {
        "followers": {"instagram": 114000, "spotify": 60300},
        "links": {
            "instagram": "https://www.instagram.com/hainbach101/",
            "spotify": "https://open.spotify.com/artist/3FlXXv8lfSt3ZWk9epMxe7"
        }
    },
    "Nikolaienko": {
        "followers": {},
        "links": {
            "soundcloud": "https://soundcloud.com/nikolaienko",
            "website": "https://dmytronikolaienko.com/"
        }
    },
    "Astrid Sonne": {
        "followers": {"instagram": 28000, "spotify": 170800},
        "links": {
            "instagram": "https://www.instagram.com/astridsonne_/",
            "spotify": "https://open.spotify.com/artist/7qiyPneI60DzZmxVxC7689",
            "soundcloud": "https://m.soundcloud.com/a_sonne"
        }
    },
    "Chanel Beads": {
        "followers": {"instagram": 37000, "spotify": 384100},
        "links": {
            "instagram": "https://www.instagram.com/chanel_beads/",
            "spotify": "https://open.spotify.com/artist/3x11XrMEnyP18hv73pmKRL"
        }
    },
    "Susumu Yokota": {
        "followers": {"instagram": 1965, "spotify": 318400},
        "links": {
            "instagram": "https://www.instagram.com/susumuyokotaofficial/",
            "spotify": "https://open.spotify.com/artist/3ND5NWoKzlelYDDyWqSQpQ",
            "soundcloud": "https://soundcloud.com/susumuyokotaofficial"
        }
    },
    "Two Lone Swordsmen": {
        "followers": {"spotify": 46100},
        "links": {
            "spotify": "https://open.spotify.com/artist/33Ztukerf3He8FeKk5acn8",
            "soundcloud": "https://m.soundcloud.com/twoloneswordsmen"
        }
    },
    "Casino Versus Japan": {
        "followers": {"spotify": 90800},
        "links": {
            "spotify": "https://open.spotify.com/artist/5xMtVcziLHpIwD9iNWPOM6",
            "bandcamp": "https://attacknine.bandcamp.com/album/live-at-le-poisson-rouge"
        }
    },
    "Ricky Eat Acid": {
        "followers": {"instagram": 18000, "spotify": 88500},
        "links": {
            "instagram": "https://www.instagram.com/rickyeatacidx/",
            "spotify": "https://open.spotify.com/artist/4BO8wK4OAaFsi6PSzs366S",
            "soundcloud": "https://soundcloud.com/rickyeatacid",
            "twitter": "https://x.com/rickyeatacid"
        }
    },
    "Hype Williams": {
        "followers": {"spotify": 62500},
        "links": {
            "spotify": "https://open.spotify.com/artist/3SMaI6j8ObewCWPQFwfvui"
        }
    },
    "Bogdan Raczynski": {
        "followers": {"instagram": 16000, "spotify": 30300},
        "links": {
            "instagram": "https://www.instagram.com/bogdanraczynski/",
            "spotify": "https://open.spotify.com/artist/2bYCvT1nqpbbspU5DZG5nA",
            "soundcloud": "https://m.soundcloud.com/bogdanraczynski",
            "website": "https://bogdanraczynski.com/"
        }
    },
    "optic core": {
        "followers": {"instagram": 3870, "spotify": 90000},
        "links": {
            "instagram": "https://www.instagram.com/optic__core/",
            "spotify": "https://open.spotify.com/artist/2iyLphVMYwRzaMn9hwHqDf",
            "soundcloud": "https://soundcloud.com/optic_core",
            "bandcamp": "https://opticcore.bandcamp.com/"
        }
    },
    "shamana": {
        "followers": {"instagram": 6310, "spotify": 281900},
        "links": {
            "instagram": "https://www.instagram.com/shamanabeats/",
            "spotify": "https://open.spotify.com/artist/79idWEjZLtkCkJ37uHo7Av",
            "soundcloud": "https://soundcloud.com/SHAMANABEATS"
        }
    },
    "Maebi": {
        "followers": {"instagram": 1191, "spotify": 582900},
        "links": {
            "instagram": "https://www.instagram.com/maebimusic/",
            "spotify": "https://open.spotify.com/artist/6tVxgFV9M1sqlTWUnQOhlu",
            "soundcloud": "https://soundcloud.com/maeb-i",
            "bandcamp": "https://maebi.bandcamp.com/"
        }
    },
    "Deathbrain": {
        "followers": {"instagram": 4625, "spotify": 86700},
        "links": {
            "instagram": "https://www.instagram.com/deathbrains/",
            "spotify": "https://open.spotify.com/artist/0xR08Dp7M1PF7XbISrKwbW",
            "soundcloud": "https://soundcloud.com/deathbrainofficial",
            "twitter": "https://x.com/deathbrainz",
            "bandcamp": "https://deathbrain.bandcamp.com/"
        }
    },
    "ilydima": {
        "followers": {"spotify": 19900},
        "links": {
            "spotify": "https://open.spotify.com/artist/0jfM46ZkOFpk5EkXWEhTC5"
        }
    },
    "Instupendo": {
        "followers": {"instagram": 28000, "spotify": 2200000},
        "links": {
            "instagram": "https://www.instagram.com/instupendo/",
            "spotify": "https://open.spotify.com/artist/3ctnkEZGtVBTxS7IMin8nC",
            "bandcamp": "https://instupendo.bandcamp.com/",
            "twitter": "https://x.com/instupendo"
        }
    },
    "Loukeman": {
        "followers": {"instagram": 24000, "spotify": 325600},
        "links": {
            "instagram": "https://www.instagram.com/loukeman/",
            "spotify": "https://open.spotify.com/artist/10JL2s5aUztzFyURrFrxtL",
            "soundcloud": "https://soundcloud.com/loukeman",
            "website": "https://loukeman.com/"
        }
    },
    "Father2006": {
        "followers": {},
        "links": {
            "spotify": "https://open.spotify.com/artist/27yhOwnmWiOJf474zGblS4",
            "soundcloud": "https://soundcloud.com/father2006",
            "bandcamp": "https://father2006.bandcamp.com/",
            "twitter": "https://twitter.com/father2006_",
            "website": "https://father.2006.kr/"
        }
    },
    "ooxygen": {
        "followers": {"spotify": 65200},
        "links": {
            "spotify": "https://open.spotify.com/artist/1TprUqL4zLntYtStJgUV6p"
        }
    },
    "dreamcorp.": {
        "followers": {},
        "links": {
            "instagram": "https://www.instagram.com/dreamcorphomevideo/",
            "spotify": "https://open.spotify.com/artist/0UIto5RF21KnI9X46G0Lau",
            "soundcloud": "https://soundcloud.com/dreamcorphomevideo",
            "bandcamp": "https://dreamcorphomevideo.bandcamp.com/"
        }
    },
    "Blithe Field": {
        "followers": {"spotify": 35400},
        "links": {
            "spotify": "https://open.spotify.com/artist/4effiSDHnV1sU1FaLSWIRS",
            "bandcamp": "https://blithefield.bandcamp.com/"
        }
    },
    "Rory in early 20s": {
        "followers": {"spotify": 504300},
        "links": {
            "instagram": "https://www.instagram.com/rorynearly20s/",
            "spotify": "https://open.spotify.com/artist/2E701AAAlg7LthbISEZv0N",
            "bandcamp": "https://rorynearly20s.bandcamp.com/"
        }
    },
    "Forma Norte": {
        "followers": {"spotify": 76200},
        "links": {
            "spotify": "https://open.spotify.com/artist/1GUci0loUu7Ysy2YkLLick",
            "soundcloud": "https://soundcloud.com/formanorte"
        }
    },
    "Leon Vynehall": {
        "followers": {"instagram": 62000, "spotify": 406400},
        "links": {
            "instagram": "https://www.instagram.com/vynehall/",
            "spotify": "https://open.spotify.com/artist/2o7L9DNcmzocYll1o0GGTU",
            "soundcloud": "https://soundcloud.com/vynehall",
            "bandcamp": "https://leonvynehall.bandcamp.com/"
        }
    },
    "Infinity Frequencies": {
        "followers": {"spotify": 342400},
        "links": {
            "spotify": "https://open.spotify.com/artist/6XcJCz7dqlBOyZ0b57SyQp",
            "bandcamp": "https://computer-gaze.bandcamp.com/"
        }
    },
    "Jeremiah Chiu": {
        "followers": {"instagram": 12000, "spotify": 74400},
        "links": {
            "instagram": "https://www.instagram.com/jeremiahchiu/",
            "spotify": "https://open.spotify.com/artist/1RpHbIW5eeEBs693nyrhSa",
            "bandcamp": "https://jeremiahchiu.bandcamp.com/",
            "website": "https://www.jeremiahchiu.com/"
        }
    },
    "Hooky": {
        "followers": {"instagram": 5164, "spotify": 13},
        "links": {
            "instagram": "https://www.instagram.com/h0o0ky/",
            "spotify": "https://open.spotify.com/artist/1JtMqJjABFQTQWUNml1pek",
            "soundcloud": "https://soundcloud.com/h0o0ky",
            "bandcamp": "https://hoooky.bandcamp.com/"
        }
    },
    "Chihei Hatakeyama": {
        "followers": {"spotify": 190300},
        "links": {
            "spotify": "https://open.spotify.com/artist/4G1ZsxfEEztbE1VcnNInPg"
        }
    },
    "The Dead Texan": {
        "followers": {"spotify": 36500},
        "links": {
            "spotify": "https://open.spotify.com/artist/0sf2u7qJQLxkZjon6FsvJT",
            "bandcamp": "https://starsofthelid.bandcamp.com/album/the-dead-texan"
        }
    },
    "sugar plant": {
        "followers": {"spotify": 68100},
        "links": {
            "spotify": "https://open.spotify.com/artist/0KrBZKq6kpcv9N0vBesN8o",
            "bandcamp": "https://sugarplant.bandcamp.com/"
        }
    },
    "Harpsichord Canvas": {
        "followers": {},
        "links": {
            "bandcamp": "https://harpsichordcanvas.bandcamp.com/",
            "soundcloud": "https://soundcloud.com/harpsichordcanvas"
        }
    },
    "SSIEGE": {
        "followers": {"spotify": 55900},
        "links": {
            "spotify": "https://open.spotify.com/artist/4m4ywwSd3EtlfquQLUHnyW"
        }
    },
    "pathetic240px": {
        "followers": {"instagram": 12000, "spotify": 970600},
        "links": {
            "instagram": "https://www.instagram.com/pathetic240px/",
            "spotify": "https://open.spotify.com/artist/6s6HhNePAkax0mfTK1O57K",
            "bandcamp": "https://pathetic240px.bandcamp.com/",
            "soundcloud": "https://soundcloud.com/pathetic240px"
        }
    },
    "untitled (halo)": {
        "followers": {"instagram": 12000, "spotify": 62700},
        "links": {
            "instagram": "https://www.instagram.com/untitledhalo/",
            "spotify": "https://open.spotify.com/artist/3r9Q5Yy2TA8QG4CtJlvhIn"
        }
    },
    "Retail Drugs": {
        "followers": {"spotify": 17600},
        "links": {
            "instagram": "https://www.instagram.com/retaildrugsnyc/",
            "spotify": "https://open.spotify.com/artist/20E1xPsDShhr1qcVPStW3v",
            "bandcamp": "https://retaildrugs.bandcamp.com/"
        }
    },
    "argo nuff": {
        "followers": {},
        "links": {
            "instagram": "https://www.instagram.com/argonuff/",
            "spotify": "https://open.spotify.com/artist/15G1LspLruN9ZMpYgSGGLq"
        }
    },
    "Eterna": {
        "followers": {"spotify": 32500},
        "links": {
            "spotify": "https://open.spotify.com/artist/7ekeXKGdf5os6oYTZgKTQP"
        }
    },
    "African-American Sound": {
        "followers": {"instagram": 29000, "spotify": 21000},
        "links": {
            "instagram": "https://www.instagram.com/citiesaviv/",
            "spotify": "https://open.spotify.com/artist/3tzzHTt8wbTTdfOcf8amgz",
            "bandcamp": "https://africanamericansoundrecordings.bandcamp.com/"
        }
    },
    "Flaer": {
        "followers": {"instagram": 3092, "spotify": 52000},
        "links": {
            "instagram": "https://www.instagram.com/flaer___/",
            "spotify": "https://open.spotify.com/artist/0PiMvUJDkqg4AAfl8CP1Di",
            "soundcloud": "https://soundcloud.com/flaermusic"
        }
    },
    "Shuta Yasukochi": {
        "followers": {},
        "links": {
            "spotify": "https://open.spotify.com/artist/68GryM5mhDPrhRzMohl3Ui",
            "bandcamp": "https://shutayasukochi.bandcamp.com/",
            "soundcloud": "https://soundcloud.com/shuta-yasukochi"
        }
    },
    "Damage Cloud": {
        "followers": {},
        "links": {
            "bandcamp": "https://damagecloud.bandcamp.com/"
        }
    },
    "SPXRXT": {
        "followers": {"instagram": 190, "spotify": 51000},
        "links": {
            "instagram": "https://www.instagram.com/spxrxt.nxnx/",
            "spotify": "https://open.spotify.com/artist/5pTlqH0gyhoF6ctINfS8cS",
            "bandcamp": "https://spxrxt.bandcamp.com/",
            "soundcloud": "https://soundcloud.com/spxrxt"
        }
    },
    "draaq me": {
        "followers": {"spotify": 60300},
        "links": {
            "spotify": "https://open.spotify.com/artist/3c78RGXMpRW2lwP8NQeUQ2"
        }
    },
    "Detente": {
        "followers": {"spotify": 16400},
        "links": {
            "spotify": "https://open.spotify.com/artist/27EWfb0OYnPNxWql0eNb4X"
        }
    },
    "yeahsokaye": {
        "followers": {"spotify": 29400},
        "links": {
            "instagram": "https://www.instagram.com/yeahsokaye/",
            "spotify": "https://open.spotify.com/artist/0sOyXDeIf71c8M7gEGpxMG",
            "soundcloud": "https://soundcloud.com/yeahsokaye"
        }
    },
    "General Translator": {
        "followers": {},
        "links": {
            "spotify": "https://open.spotify.com/artist/0m45Nc8OUBVWMrNIbrEx7H",
            "bandcamp": "https://vsjrp.bandcamp.com/"
        }
    },
    "Jeremy Blake": {
        "followers": {"instagram": 11000, "spotify": 634},
        "links": {
            "instagram": "https://www.instagram.com/jjbbllkk/",
            "spotify": "https://open.spotify.com/artist/1FnFDLE1iq1L5Md8tm1cXO",
            "soundcloud": "https://soundcloud.com/jeremyblake",
            "bandcamp": "https://soundvision.bandcamp.com/"
        }
    },
    "Patricia Wolf": {
        "followers": {"instagram": 9117, "spotify": 75000},
        "links": {
            "instagram": "https://www.instagram.com/patriciawolf_music/",
            "spotify": "https://open.spotify.com/artist/5U2PKpLxoEwfOnPAwzPt5T",
            "soundcloud": "https://soundcloud.com/patriciawolf_music",
            "bandcamp": "https://patriciawolf.bandcamp.com/"
        }
    },
    "Chanel Beads": {
        "followers": {"instagram": 37000, "spotify": 384100},
        "links": {
            "instagram": "https://www.instagram.com/chanel_beads/",
            "spotify": "https://open.spotify.com/artist/3x11XrMEnyP18hv73pmKRL"
        }
    },
    "Martyna Basta": {
        "followers": {"instagram": 5557, "spotify": 4500},
        "links": {
            "instagram": "https://www.instagram.com/martynkabasta/",
            "spotify": "https://open.spotify.com/artist/0vRyt5xtZZ8cve0YTSxNIw",
            "bandcamp": "https://martynabasta.bandcamp.com/",
            "soundcloud": "https://soundcloud.com/martyna-basta",
            "website": "https://www.martynabasta.com/"
        }
    },
    "yes/and": {
        "followers": {"instagram": 706, "spotify": 43000},
        "links": {
            "instagram": "https://www.instagram.com/yes____and/",
            "spotify": "https://open.spotify.com/artist/7IxiRbidPWbGcs1K14lf98"
        }
    },
    "Geller": {
        "followers": {"instagram": 25000, "spotify": 73000},
        "links": {
            "instagram": "https://www.instagram.com/gellermusic/",
            "spotify": "https://open.spotify.com/artist/6OgMBOUaAfkEfWkEfWkXpbL",
            "website": "https://www.gellermusic.com/"
        }
    },
    "Arthur Mine": {
        "followers": {"spotify": 1300},
        "links": {
            "spotify": "https://open.spotify.com/artist/6dtoiMrxTN33pqX8SWewie"
        }
    },
    "Crim3s": {
        "followers": {"instagram": 27000, "spotify": 363400},
        "links": {
            "instagram": "https://www.instagram.com/crim3s/",
            "spotify": "https://open.spotify.com/artist/1ARDx2oCR7sJEjbnHsbbRU"
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
