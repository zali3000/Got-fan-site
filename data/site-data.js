/* Westeros archive data. Kept separate from application logic so content can be edited without touching UI behavior. */

const CITY_CARD_DATA = {
  "got": {
    "cities": [
      {
        "id": "city-king-s-landing",
        "name": "King's Landing",
        "image": "../assets/images/cities/got/kingslanding.webp",
        "description": "Seven hills, one throne, and a smell that visitors never stop mentioning. The capital where every plot in the realm eventually comes to collect its debts."
      },
      {
        "id": "city-winterfell",
        "name": "Winterfell",
        "image": "../assets/images/cities/got/winterfell.webp",
        "description": "Warmed from below by hot springs and warmed from within by stubbornness. The North's oldest seat has outlasted kings, sieges, and at least one wedding it should never have hosted."
      },
      {
        "id": "city-braavos",
        "name": "Braavos",
        "image": "../assets/images/cities/got/braavos.webp",
        "description": "A city of canals founded by escaped slaves, guarded by a bronze titan, and quietly run by a guild that will kill you for the right price and the right god."
      },
      {
        "id": "city-dragonstone",
        "name": "Dragonstone",
        "image": "../assets/images/cities/got/dragonstone.webp",
        "description": "Black volcanic stone, gargoyles that seem to watch the sea a little too closely, and the ancestral seat of the only family that ever needed a landing pad."
      },
      {
        "id": "city-highgarden",
        "name": "Highgarden",
        "image": "../assets/images/cities/got/highgarden.webp",
        "description": "Terraces, orchards, and more flowers than any war-torn continent has a right to. The Reach's capital looks soft right up until it isn't."
      },
      {
        "id": "city-castle-black",
        "name": "Castle Black",
        "image": "../assets/images/cities/got/castleblack.webp",
        "description": "Home of the Night's Watch, sitting under seven hundred feet of ice with one very large elevator and a job nobody particularly wants."
      },
      {
        "id": "city-meereen",
        "name": "Meereen",
        "image": "../assets/images/cities/got/meereen.webp",
        "description": "A pyramid city in Slaver's Bay that briefly became a foreign queen's accidental capital while she figured out how to actually govern something."
      },
      {
        "id": "city-sunspear",
        "name": "Sunspear",
        "image": "../assets/images/cities/got/sunspear.webp",
        "description": "Dorne's capital, built for heat rather than defense — because the desert around it already does most of the defending."
      },
      {
        "id": "city-riverrun",
        "name": "Riverrun",
        "region": "The Riverlands",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "The ancestral seat of House Tully, positioned where the Tumblestone meets the Red Fork."
      },
      {
        "id": "city-harrenhal",
        "name": "Harrenhal",
        "region": "The Riverlands",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A colossal ruined castle whose size and strategic position make it a prize in wars across the Riverlands."
      },
      {
        "id": "city-the-eyrie",
        "name": "The Eyrie",
        "region": "The Vale",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "The mountain stronghold of House Arryn, reached through the dangerous Mountains of the Moon."
      },
      {
        "id": "city-lannisport",
        "name": "Lannisport",
        "region": "The Westerlands",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A wealthy western port beneath Casterly Rock and one of the great commercial cities of Westeros."
      },
      {
        "id": "city-oldtown",
        "name": "Oldtown",
        "region": "The Reach",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "One of Westeros’s oldest cities, home to the Citadel and the Hightower."
      },
      {
        "id": "city-storm-s-end",
        "name": "Storm's End",
        "region": "The Stormlands",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "The ancient Baratheon stronghold on the eastern coast, famous for its massive walls and stormy seas."
      },
      {
        "id": "city-duskendale",
        "name": "Duskendale",
        "region": "The Crownlands",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "An old Crownlands port that becomes important during several royal conflicts."
      },
      {
        "id": "city-driftmark",
        "name": "Driftmark",
        "region": "Blackwater Bay",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "The island seat of House Velaryon and a center of naval power."
      },
      {
        "id": "city-pentos",
        "name": "Pentos",
        "region": "Free Cities",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A wealthy Free City on the western edge of Essos with strong trading connections to Westeros."
      },
      {
        "id": "city-myr",
        "name": "Myr",
        "region": "Free Cities",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A Free City known for craftsmanship, textiles, lenses and intricate goods."
      },
      {
        "id": "city-tyrosh",
        "name": "Tyrosh",
        "region": "Free Cities",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A fortified Free City famous for trade, dyes and its position near the disputed Stepstones."
      },
      {
        "id": "city-lys",
        "name": "Lys",
        "region": "Free Cities",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A wealthy island Free City famed for perfumes, pleasure houses and maritime trade."
      },
      {
        "id": "city-volantis",
        "name": "Volantis",
        "region": "Free Cities",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "An ancient city on the Rhoyne whose huge walls and old Valyrian traditions make it one of Essos’s great powers."
      },
      {
        "id": "city-qohor",
        "name": "Qohor",
        "region": "Free Cities",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A forest city famous for its smiths, blacksmithing traditions and the Unsullied defense of its walls."
      },
      {
        "id": "city-norvos",
        "name": "Norvos",
        "region": "Free Cities",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A religious Free City inland from the eastern coast, known for its bells and bearded priests."
      },
      {
        "id": "city-lorath",
        "name": "Lorath",
        "region": "Free Cities",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A remote Free City of islands and labyrinthine waterways in the north of Essos."
      },
      {
        "id": "city-astapor",
        "name": "Astapor",
        "region": "Slaver’s Bay",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A former slave city known for its Unsullied soldiers and the red brick buildings of Slaver’s Bay."
      },
      {
        "id": "city-yunkai",
        "name": "Yunkai",
        "region": "Slaver’s Bay",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A yellow city of Slaver’s Bay whose wealth was built on slavery and trade."
      },
      {
        "id": "city-qarth",
        "name": "Qarth",
        "region": "Jade Sea",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A wealthy gateway city between the Red Waste and the Jade Sea, known for merchants and powerful trading families."
      },
      {
        "id": "city-vaes-dothrak",
        "name": "Vaes Dothrak",
        "region": "Dothraki Sea",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "The sacred city of the Dothraki, situated beneath the Mother of Mountains."
      },
      {
        "id": "city-mantarys",
        "name": "Mantarys",
        "region": "Slaver’s Bay",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A feared city west of the ruins of Old Ghis, associated with strange stories and the devastation of war."
      },
      {
        "id": "city-vaes-tolorro",
        "name": "Vaes Tolorro",
        "region": "Red Waste",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A ruined city encountered during the dangerous journey across the Red Waste."
      },
      {
        "id": "city-hesh",
        "name": "Hesh",
        "region": "Yi Ti",
        "image": "../assets/images/cities/got/featured-city.webp",
        "description": "A major city in the distant lands east of the Bone Mountains."
      }
    ]
  },
  "hotd": {
    "cities": [
      {
        "id": "city-king-s-landing",
        "name": "King’s Landing",
        "image": "../assets/images/cities/hotd/kingslanding.webp",
        "description": "The capital and seat of the Iron Throne."
      },
      {
        "id": "city-dragonstone",
        "name": "Dragonstone",
        "image": "../assets/images/cities/hotd/dragonstone.webp",
        "description": "The ancestral Targaryen stronghold rising from the sea."
      },
      {
        "id": "city-driftmark",
        "name": "Driftmark",
        "image": "../assets/images/cities/hotd/driftmark.webp",
        "description": "The island seat of House Velaryon and its powerful fleet."
      },
      {
        "id": "city-oldtown",
        "name": "Oldtown",
        "image": "../assets/images/cities/hotd/oldtown.webp",
        "description": "A center of learning, faith and political influence."
      },
      {
        "id": "city-harrenhal",
        "name": "Harrenhal",
        "image": "../assets/images/cities/hotd/harrenhal.webp",
        "description": "A vast ruined castle whose history hangs over the Dance."
      },
      {
        "id": "city-storm-s-end",
        "name": "Storm’s End",
        "image": "../assets/images/cities/hotd/storms-end.webp",
        "description": "A fortress where royal claims collide with ancient loyalties."
      },
      {
        "id": "city-gulltown",
        "name": "Gulltown",
        "region": "The Vale",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "The principal port of the Vale and the major city nearest the Arryn stronghold."
      },
      {
        "id": "city-white-harbor",
        "name": "White Harbor",
        "region": "The North",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "The largest city and busiest port in the North, ruled by House Manderly."
      },
      {
        "id": "city-winterfell",
        "name": "Winterfell",
        "region": "The North",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "The ancient Stark seat and political center of the North."
      },
      {
        "id": "city-riverrun",
        "name": "Riverrun",
        "region": "The Riverlands",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "The Tully seat at the meeting of the Tumblestone and Red Fork."
      },
      {
        "id": "city-the-eyrie",
        "name": "The Eyrie",
        "region": "The Vale",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "The high mountain seat of House Arryn in the Mountains of the Moon."
      },
      {
        "id": "city-lannisport",
        "name": "Lannisport",
        "region": "The Westerlands",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "A wealthy port city beneath Casterly Rock and an important western trading center."
      },
      {
        "id": "city-highgarden",
        "name": "Highgarden",
        "region": "The Reach",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "The Tyrell seat and one of the richest and most fertile centers of the Reach."
      },
      {
        "id": "city-storm-s-end",
        "name": "Storm's End",
        "region": "The Stormlands",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "The formidable Baratheon stronghold overlooking Shipbreaker Bay."
      },
      {
        "id": "city-sunspear",
        "name": "Sunspear",
        "region": "Dorne",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "The seat of House Martell and the political center of Dorne."
      },
      {
        "id": "city-braavos",
        "name": "Braavos",
        "region": "Free Cities",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "A powerful Free City of canals and islands, important to trade and international finance."
      },
      {
        "id": "city-pentos",
        "name": "Pentos",
        "region": "Free Cities",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "A wealthy Free City across the Narrow Sea with longstanding trade ties to Westeros."
      },
      {
        "id": "city-myr",
        "name": "Myr",
        "region": "Free Cities",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "A Free City known for skilled craftsmen, textiles and fine lenses."
      },
      {
        "id": "city-tyrosh",
        "name": "Tyrosh",
        "region": "Free Cities",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "A Free City near the Stepstones with a strong maritime trading tradition."
      },
      {
        "id": "city-lys",
        "name": "Lys",
        "region": "Free Cities",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "An island Free City famed for perfumes, pleasure houses and commerce."
      },
      {
        "id": "city-volantis",
        "name": "Volantis",
        "region": "Free Cities",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "An ancient Valyrian city on the Rhoyne and one of the most powerful Free Cities."
      },
      {
        "id": "city-qohor",
        "name": "Qohor",
        "region": "Free Cities",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "A forest city famous for its smiths and the defense of its gates by Unsullied soldiers."
      },
      {
        "id": "city-norvos",
        "name": "Norvos",
        "region": "Free Cities",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "An inland Free City known for its bells and religious traditions."
      },
      {
        "id": "city-lorath",
        "name": "Lorath",
        "region": "Free Cities",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "A remote northern Free City spread among islands and narrow waterways."
      },
      {
        "id": "city-astapor",
        "name": "Astapor",
        "region": "Slaver’s Bay",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "A great slave city of Slaver’s Bay and the traditional home of the Unsullied."
      },
      {
        "id": "city-yunkai",
        "name": "Yunkai",
        "region": "Slaver’s Bay",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "A yellow-brick slave city whose wealth came from trade and slavery."
      },
      {
        "id": "city-meereen",
        "name": "Meereen",
        "region": "Slaver’s Bay",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "The largest of the great slave cities and a major center of power in Slaver’s Bay."
      },
      {
        "id": "city-qarth",
        "name": "Qarth",
        "region": "Jade Sea",
        "image": "../assets/images/cities/hotd/featured-city.webp",
        "description": "A wealthy eastern gateway city between the Red Waste and the Jade Sea."
      }
    ]
  }
};



const HOUSE_CARD_DATA={
  "got": [
    {
      "id": "stark",
      "category": "north",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-stark.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Stark\" decoding=\"async\" height=\"335\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"597\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M50 10 L70 40 L60 45 L75 65 L60 65 L60 90 L40 90 L40 65 L25 65 L40 45 L30 40 Z\" fill=\"currentColor\">\n</path>\n</svg>\n<h3>\n       House Stark\n      </h3>\n<p class=\"motto\">\n       \"Winter is Coming\"\n      </p>\n<p class=\"region\">\n       The North\n      </p>\n<p class=\"lore\">\n       Rulers of the North for thousands of years, the Starks measure loyalty in blood and cold in centuries. Their sigil, a running direwolf, marks a family that keeps its word even when keeping it costs everything — and it usually does.\n      </p>\n<span class=\"seat\">\n       Seat: Winterfell\n      </span>\n</div>\n"
    },
    {
      "id": "lannister",
      "category": "westerlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-lannister.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Lannister\" decoding=\"async\" height=\"414\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"738\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<circle cx=\"50\" cy=\"45\" fill=\"none\" r=\"22\" stroke=\"currentColor\" stroke-width=\"4\">\n</circle>\n<path d=\"M50 20 L54 35 L50 30 L46 35 Z\" fill=\"currentColor\">\n</path>\n<path d=\"M35 45 L20 45 M65 45 L80 45 M50 67 L50 82\" stroke=\"currentColor\" stroke-width=\"4\">\n</path>\n</svg>\n<h3>\n       House Lannister\n      </h3>\n<p class=\"motto\">\n       \"Hear Me Roar\"\n      </p>\n<p class=\"region\">\n       The Westerlands\n      </p>\n<p class=\"lore\">\n       The richest family in the Seven Kingdoms, and rarely shy about reminding you. Gold from Casterly Rock bought them armies, marriages, and the throne itself — though never quite the loyalty that gold can't purchase.\n      </p>\n<span class=\"seat\">\n       Seat: Casterly Rock\n      </span>\n</div>\n"
    },
    {
      "id": "targaryen",
      "category": "crownlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-targaryen.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Targaryen\" decoding=\"async\" height=\"336\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"595\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M50 15 C30 25, 20 45, 25 65 C35 55, 45 55, 50 65 C55 55, 65 55, 75 65 C80 45, 70 25, 50 15 Z\" fill=\"currentColor\">\n</path>\n</svg>\n<h3>\n       House Targaryen\n      </h3>\n<p class=\"motto\">\n       \"Fire and Blood\"\n      </p>\n<p class=\"region\">\n       Dragonstone (originally)\n      </p>\n<p class=\"lore\">\n       The only family that ever tamed a dragon and rode it into history. They united a continent by burning parts of it first, then ruled for three hundred years before losing the one thing dragons can't fix: everyone's patience.\n      </p>\n<span class=\"seat\">\n       Seat: Dragonstone / King's Landing\n      </span>\n</div>\n"
    },
    {
      "id": "baratheon",
      "category": "stormlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-baratheon.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Baratheon\" decoding=\"async\" height=\"414\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"738\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M50 20 L60 40 L80 42 L64 55 L70 75 L50 63 L30 75 L36 55 L20 42 L40 40 Z\" fill=\"currentColor\">\n</path>\n</svg>\n<h3>\n       House Baratheon\n      </h3>\n<p class=\"motto\">\n       \"Ours is the Fury\"\n      </p>\n<p class=\"region\">\n       The Stormlands\n      </p>\n<p class=\"lore\">\n       Forged in rebellion, the Baratheons took the throne with a war hammer and kept it with a great deal of wine. A house of storm lords who were never quite as comfortable sitting still as they were charging forward.\n      </p>\n<span class=\"seat\">\n       Seat: Storm's End\n      </span>\n</div>\n"
    },
    {
      "id": "greyjoy",
      "category": "iron-islands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-greyjoy.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Greyjoy\" decoding=\"async\" height=\"413\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"736\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M30 30 Q50 15 70 30 L65 60 Q50 75 35 60 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\">\n</path>\n<path d=\"M50 40 L50 65 M40 50 L60 50\" stroke=\"currentColor\" stroke-width=\"4\">\n</path>\n</svg>\n<h3>\n       House Greyjoy\n      </h3>\n<p class=\"motto\">\n       \"We Do Not Sow\"\n      </p>\n<p class=\"region\">\n       The Iron Islands\n      </p>\n<p class=\"lore\">\n       Iron Islanders who never trusted the mainland's idea of ownership — why grow something when you can take it by longship? Salt, drowned gods, and old grudges keep this house afloat, sometimes barely.\n      </p>\n<span class=\"seat\">\n       Seat: Pyke\n      </span>\n</div>\n"
    },
    {
      "id": "tyrell",
      "category": "reach",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-tyrell.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Tyrell\" decoding=\"async\" height=\"336\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"595\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<circle cx=\"50\" cy=\"55\" fill=\"currentColor\" r=\"10\">\n</circle>\n<path d=\"M50 55 L50 30 M50 55 L30 65 M50 55 L70 65 M50 55 L35 40 M50 55 L65 40\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\">\n</path>\n</svg>\n<h3>\n       House Tyrell\n      </h3>\n<p class=\"motto\">\n       \"Growing Strong\"\n      </p>\n<p class=\"region\">\n       The Reach\n      </p>\n<p class=\"lore\">\n       Highgarden's rulers understood something the sword-houses often forgot: you can win a lot of wars with grain, gold, and a well-placed marriage. Their patience outlasted several kings, right up until it didn't.\n      </p>\n<span class=\"seat\">\n       Seat: Highgarden\n      </span>\n</div>\n"
    },
    {
      "id": "martell",
      "category": "dorne",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-martell.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Martell\" decoding=\"async\" height=\"336\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"595\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<circle cx=\"50\" cy=\"50\" fill=\"none\" r=\"28\" stroke=\"currentColor\" stroke-width=\"4\">\n</circle>\n<path d=\"M32 50 L68 50 M50 32 L50 68\" stroke=\"currentColor\" stroke-width=\"4\">\n</path>\n</svg>\n<h3>\n       House Martell\n      </h3>\n<p class=\"motto\">\n       \"Unbowed, Unbent, Unbroken\"\n      </p>\n<p class=\"region\">\n       Dorne\n      </p>\n<p class=\"lore\">\n       The one kingdom that was never conquered by fire or by force — Dorne married its way out of a Targaryen invasion instead. Sun, spears, and a very long memory for old wrongs.\n      </p>\n<span class=\"seat\">\n       Seat: Sunspear\n      </span>\n</div>\n"
    },
    {
      "id": "arryn",
      "category": "vale",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-arryn.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Arryn\" decoding=\"async\" height=\"414\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"738\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M25 60 L50 20 L75 60 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"4\">\n</path>\n<circle cx=\"50\" cy=\"45\" fill=\"currentColor\" r=\"6\">\n</circle>\n</svg>\n<h3>\n       House Arryn\n      </h3>\n<p class=\"motto\">\n       \"As High as Honor\"\n      </p>\n<p class=\"region\">\n       The Vale\n      </p>\n<p class=\"lore\">\n       Tucked behind a mountain range so brutal that armies simply stopped trying, the Vale sat out most of the realm's wars by the simple trick of being extremely hard to reach.\n      </p>\n<span class=\"seat\">\n       Seat: The Eyrie\n      </span>\n</div>\n"
    },
    {
      "id": "tully",
      "category": "riverlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-tully.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Tully\" decoding=\"async\" height=\"335\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"597\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M20 45 Q50 25 80 45 Q50 40 20 45 Z\" fill=\"currentColor\">\n</path>\n<path d=\"M20 55 Q50 35 80 55 Q50 50 20 55 Z\" fill=\"currentColor\" opacity=\"0.6\">\n</path>\n</svg>\n<h3>\n       House Tully\n      </h3>\n<p class=\"motto\">\n       \"Family, Duty, Honor\"\n      </p>\n<p class=\"region\">\n       The Riverlands\n      </p>\n<p class=\"lore\">\n       Riverlords sitting at the crossroads of every war that ever passed through Westeros — which meant they bled for practically everyone else's ambitions, over and over again.\n      </p>\n<span class=\"seat\">\n       Seat: Riverrun\n      </span>\n</div>\n"
    },
    {
      "id": "bolton",
      "category": "north",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-bolton.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Bolton\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Bolton</h3><p class=\"motto\">\"Our Blades Are Sharp\"</p><p class=\"region\">The North</p><p class=\"lore\">An ancient northern house whose history is marked by rivalry with the Starks. The Boltons are feared for their ruthless reputation and their pursuit of power in the North.</p><span class=\"seat\">Seat: The Dreadfort</span></div>"
    },
    {
      "id": "mormont",
      "category": "north",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-mormont.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Mormont\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Mormont</h3><p class=\"motto\">\"Here We Stand\"</p><p class=\"region\">The North</p><p class=\"lore\">The Mormonts of Bear Island are a small but fiercely independent northern house. Their strength comes from loyalty, resilience and a willingness to defend their home against overwhelming odds.</p><span class=\"seat\">Seat: Bear Island</span></div>"
    },
    {
      "id": "karstark",
      "category": "north",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-karstark.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Karstark\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Karstark</h3><p class=\"motto\">\"The Sun of Winter\"</p><p class=\"region\">The North</p><p class=\"lore\">A powerful northern branch descended from the Starks. The Karstarks become important during Robb Stark’s campaign and are drawn into the difficult choices that divide the northern cause.</p><span class=\"seat\">Seat: Karhold</span></div>"
    },
    {
      "id": "frey",
      "category": "riverlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-frey.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Frey\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Frey</h3><p class=\"motto\">\"We Stand Together\"</p><p class=\"region\">The Riverlands</p><p class=\"lore\">House Frey controls the strategic crossing at the Twins and uses marriages and alliances to expand its influence. Their position makes them a crucial political player during the wars of the Five Kings.</p><span class=\"seat\">Seat: The Twins</span></div>"
    },
    {
      "id": "blackwood",
      "category": "riverlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-blackwood.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Blackwood\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Blackwood</h3><p class=\"motto\">\"A Rising Tide\"</p><p class=\"region\">The Riverlands</p><p class=\"lore\">One of the oldest houses of the Riverlands, the Blackwoods are known for their long feud with House Bracken and their enduring loyalty to their chosen allies.</p><span class=\"seat\">Seat: Raventree Hall</span></div>"
    },
    {
      "id": "bracken",
      "category": "riverlands",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-bracken.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Bracken\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Bracken</h3><p class=\"motto\">\"No Foe May Pass\"</p><p class=\"region\">The Riverlands</p><p class=\"lore\">An ancient Riverlands house and traditional rival of the Blackwoods. The Brackens have survived centuries of conflict by defending their lands and pursuing their own interests.</p><span class=\"seat\">Seat: Stone Hedge</span></div>"
    },
    {
      "id": "royce",
      "category": "vale",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-royce.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Royce\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Royce</h3><p class=\"motto\">\"We Remember\"</p><p class=\"region\">The Vale</p><p class=\"lore\">A prominent house of the Vale with a long history of service and independence. The Royces remain influential through their lands, warriors and close ties to the politics of the Vale.</p><span class=\"seat\">Seat: Runestone</span></div>"
    },
    {
      "id": "dayne",
      "category": "dorne",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-dayne.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Dayne\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Dayne</h3><p class=\"motto\">\"None\"</p><p class=\"region\">Dorne</p><p class=\"lore\">A famous Dornish house whose ancestral sword Dawn and legendary warriors give it a distinctive place in Westerosi history. Starfall stands on the Torrentine in western Dorne.</p><span class=\"seat\">Seat: Starfall</span></div>"
    },
    {
      "id": "tarly",
      "category": "reach",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-tarly.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Tarly\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Tarly</h3><p class=\"motto\">\"First in Battle\"</p><p class=\"region\">The Reach</p><p class=\"lore\">A powerful Reach house known for its military tradition. The Tarlys value discipline and martial skill and hold lands around Horn Hill in the Reach.</p><span class=\"seat\">Seat: Horn Hill</span></div>"
    },
    {
      "id": "hightower",
      "category": "reach",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-hightower.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Hightower\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Hightower</h3><p class=\"motto\">\"We Light the Way\"</p><p class=\"region\">The Reach</p><p class=\"lore\">One of the richest and most influential houses of the Reach, the Hightowers rule from Oldtown and wield influence through trade, learning, wealth and royal connections.</p><span class=\"seat\">Seat: Oldtown</span></div>"
    },
    {
      "id": "florent",
      "category": "reach",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-florent.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Florent\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Florent</h3><p class=\"motto\">\"Ever Vigilant\"</p><p class=\"region\">The Reach</p><p class=\"lore\">A noble Reach house with extensive family connections. The Florents become involved in the struggle for the Iron Throne through their alliances and marriages.</p><span class=\"seat\">Seat: Brightwater Keep</span></div>"
    },
    {
      "id": "reed",
      "category": "north",
      "faction": "",
      "image": "../assets/images/houses/got/got-house-reed.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Reed\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Reed</h3><p class=\"motto\">\"We Remember\"</p><p class=\"region\">The North</p><p class=\"lore\">The crannogmen of the Neck are led by House Reed, a small but strategically important family whose knowledge of the marshes makes them valuable allies to the Starks.</p><span class=\"seat\">Seat: Greywater Watch</span></div>"
    }
  ],
  "hotd": [
    {
      "id": "targaryen",
      "category": "",
      "faction": "split",
      "image": "../assets/images/houses/hotd/hotd-house-targaryen.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Targaryen\" decoding=\"async\" height=\"335\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"597\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M50 15 C30 25, 20 45, 25 65 C35 55, 45 55, 50 65 C55 55, 65 55, 75 65 C80 45, 70 25, 50 15 Z\" fill=\"currentColor\">\n</path>\n</svg>\n<h3>\n       House Targaryen\n      </h3>\n<p class=\"motto\">\n       \"Fire and Blood\" — on both sides now\n      </p>\n<p class=\"region\">\n       Dragonstone / King's Landing\n      </p>\n<p class=\"lore\">\n       The only house in this war, technically fighting itself. Rhaenyra's line rides for the black; Aegon, Aemond, and Alicent's children ride for the green. Same name, same dragonblood, same coat of arms — pointed at each other.\n      </p>\n<span class=\"seat\">\n       Seat: Dragonstone (Black) / King's Landing (Green)\n      </span>\n</div>\n"
    },
    {
      "id": "hightower",
      "category": "",
      "faction": "green",
      "image": "../assets/images/houses/hotd/hotd-house-hightower.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Hightower\" decoding=\"async\" height=\"324\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"617\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<rect fill=\"currentColor\" height=\"55\" width=\"16\" x=\"42\" y=\"15\">\n</rect>\n<path d=\"M30 70 L70 70 L60 90 L40 90 Z\" fill=\"currentColor\">\n</path>\n</svg>\n<h3>\n       House Hightower\n      </h3>\n<p class=\"motto\">\n       \"We Light the Way\"\n      </p>\n<p class=\"region\">\n       The Reach\n      </p>\n<p class=\"lore\">\n       Guardians of Oldtown and its great lighthouse, the Hightowers back their own — Alicent and, by extension, Aegon — from the very first council meeting after Viserys's death, before most of the realm even knows there's a war coming.\n      </p>\n<span class=\"seat\">\n       Seat: The Hightower, Oldtown\n      </span>\n</div>\n"
    },
    {
      "id": "velaryon",
      "category": "",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-velaryon.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Velaryon\" decoding=\"async\" height=\"280\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"500\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M20 45 Q50 20 80 45 Q50 38 20 45 Z\" fill=\"currentColor\">\n</path>\n<path d=\"M20 58 Q50 33 80 58 Q50 51 20 58 Z\" fill=\"currentColor\" opacity=\"0.6\">\n</path>\n</svg>\n<h3>\n       House Velaryon\n      </h3>\n<p class=\"motto\">\n       \"The Old, the True, the Brave\"\n      </p>\n<p class=\"region\">\n       Driftmark\n      </p>\n<p class=\"lore\">\n       The realm's greatest naval power, married into the Targaryen line and firmly loyal to Rhaenyra. Their fleet — and their fortune — become one of Team Black's biggest advantages, and one of its costliest losses.\n      </p>\n<span class=\"seat\">\n       Seat: High Tide, Driftmark\n      </span>\n</div>\n"
    },
    {
      "id": "strong",
      "category": "",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-strong.webp",
      "innerHTML": "\n<div class=\"house-card-inner tilt-card-inner\">\n<div class=\"house-photo image-slot\">\n<img alt=\"House Strong\" decoding=\"async\" height=\"432\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"708\"/>\n</div>\n<svg class=\"sigil\" viewbox=\"0 0 100 100\">\n<path d=\"M50 15 L60 45 L90 45 L65 62 L75 90 L50 72 L25 90 L35 62 L10 45 L40 45 Z\" fill=\"currentColor\">\n</path>\n</svg>\n<h3>\n       House Strong\n      </h3>\n<p class=\"motto\">\n       Loyal to the crown they served\n      </p>\n<p class=\"region\">\n       The Riverlands\n      </p>\n<p class=\"lore\">\n       A smaller house whose fate becomes tangled directly in the royal succession — their name follows Rhaenyra's own children through a controversy that Team Green never lets anyone forget.\n      </p>\n<span class=\"seat\">\n       Seat: Harrenhal\n      </span>\n</div>\n"
    },
    {
      "id": "stark",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-stark.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Stark\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Stark</h3><p class=\"motto\">\"Winter is Coming\"</p><p class=\"region\">The North</p><p class=\"lore\">House Stark is an ancient northern dynasty. During the Dance, the Starks eventually commit northern strength to the cause of Rhaenyra Targaryen.</p><span class=\"seat\">Seat: Winterfell</span></div>"
    },
    {
      "id": "arryn",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-arryn.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Arryn\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Arryn</h3><p class=\"motto\">\"As High as Honor\"</p><p class=\"region\">The Vale</p><p class=\"lore\">House Arryn rules the Vale and is connected to the Targaryen succession through family ties. The Vale becomes an important source of support for Rhaenyra.</p><span class=\"seat\">Seat: The Eyrie</span></div>"
    },
    {
      "id": "baratheon",
      "category": "green",
      "faction": "green",
      "image": "../assets/images/houses/hotd/hotd-house-baratheon.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Baratheon\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Baratheon</h3><p class=\"motto\">\"Ours is the Fury\"</p><p class=\"region\">The Stormlands</p><p class=\"lore\">House Baratheon controls the Stormlands. Its support becomes strategically important during the succession crisis because the great houses of the realm are forced to choose between competing claims.</p><span class=\"seat\">Seat: Storm’s End</span></div>"
    },
    {
      "id": "blackwood",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-blackwood.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Blackwood\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Blackwood</h3><p class=\"motto\">\"A Rising Tide\"</p><p class=\"region\">The Riverlands</p><p class=\"lore\">House Blackwood is one of the ancient Riverlands families and supports Rhaenyra. Its longstanding feud with House Bracken adds another layer to the regional conflict.</p><span class=\"seat\">Seat: Raventree Hall</span></div>"
    },
    {
      "id": "bracken",
      "category": "green",
      "faction": "green",
      "image": "../assets/images/houses/hotd/hotd-house-bracken.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Bracken\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Bracken</h3><p class=\"motto\">\"No Foe May Pass\"</p><p class=\"region\">The Riverlands</p><p class=\"lore\">House Bracken is the traditional rival of the Blackwoods. During the Dance, the Brackens support the Green cause while their old enemies support Rhaenyra.</p><span class=\"seat\">Seat: Stone Hedge</span></div>"
    },
    {
      "id": "celtigar",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-celtigar.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Celtigar\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Celtigar</h3><p class=\"motto\">\"None\"</p><p class=\"region\">The Crownlands</p><p class=\"lore\">House Celtigar is an old Valyrian house of the Crownlands. Its location and heritage connect it to the wider network of families surrounding Dragonstone and the Targaryen royal line.</p><span class=\"seat\">Seat: Claw Isle</span></div>"
    },
    {
      "id": "beesbury",
      "category": "green",
      "faction": "green",
      "image": "../assets/images/houses/hotd/hotd-house-beesbury.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Beesbury\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Beesbury</h3><p class=\"motto\">\"Beware Our Sting\"</p><p class=\"region\">The Reach</p><p class=\"lore\">A Reach house whose lord serves on the royal council. House Beesbury becomes involved in the succession crisis at the very moment the realm is deciding who should inherit the throne.</p><span class=\"seat\">Seat: Honeyholt</span></div>"
    },
    {
      "id": "mooton",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-mooton.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Mooton\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Mooton</h3><p class=\"motto\">\"Wisdom and Courage\"</p><p class=\"region\">The Riverlands</p><p class=\"lore\">House Mooton is a prominent Riverlands family based at Maidenpool. Its position makes it relevant to the shifting military and political alliances during the Dance.</p><span class=\"seat\">Seat: Maidenpool</span></div>"
    },
    {
      "id": "cole",
      "category": "green",
      "faction": "green",
      "image": "../assets/images/houses/hotd/hotd-house-cole.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Cole\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Cole</h3><p class=\"motto\">\"First in Battle\"</p><p class=\"region\">The Crownlands</p><p class=\"lore\">House Cole is a lesser Crownlands house whose most famous member, Criston Cole, rises to become a major military and political figure during the succession crisis.</p><span class=\"seat\">Seat: Stone Hedge</span></div>"
    },
    {
      "id": "westerling",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-westerling.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Westerling\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Westerling</h3><p class=\"motto\">\"Honor, Not Honours\"</p><p class=\"region\">The Westerlands</p><p class=\"lore\">House Westerling is an old Westerlands house. Its members serve the crown and become connected to the broader network of noble families surrounding the Targaryen succession.</p><span class=\"seat\">Seat: The Crag</span></div>"
    },
    {
      "id": "massey",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-massey.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Massey\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Massey</h3><p class=\"motto\">\"None\"</p><p class=\"region\">The Crownlands</p><p class=\"lore\">House Massey is a Crownlands house with lands close to Dragonstone. Its position makes its loyalty valuable to the Black faction during the Dance.</p><span class=\"seat\">Seat: Stonedance</span></div>"
    },
    {
      "id": "darklyn",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-darklyn.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Darklyn\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Darklyn</h3><p class=\"motto\">\"None\"</p><p class=\"region\">The Crownlands</p><p class=\"lore\">House Darklyn is an ancient Crownlands family based at Duskendale. Its history is tied closely to the crown and the politics of the lands around King’s Landing.</p><span class=\"seat\">Seat: Duskendale</span></div>"
    },
    {
      "id": "royce",
      "category": "black",
      "faction": "black",
      "image": "../assets/images/houses/hotd/hotd-house-royce.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Royce\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Royce</h3><p class=\"motto\">\"We Remember\"</p><p class=\"region\">The Vale</p><p class=\"lore\">House Royce is one of the Vale’s most prominent families. Its military strength and ancient lineage make it an important component of the Vale’s support for Rhaenyra.</p><span class=\"seat\">Seat: Runestone</span></div>"
    },
    {
      "id": "swann",
      "category": "green",
      "faction": "green",
      "image": "../assets/images/houses/hotd/hotd-house-swann.webp",
      "innerHTML": "<div class=\"house-card-inner tilt-card-inner\"><div class=\"house-photo image-slot\"><img alt=\"House Swann\" decoding=\"async\" height=\"675\" loading=\"lazy\" src=\"__HOUSE_IMAGE__\" width=\"1200\"/></div><svg class=\"sigil\" viewbox=\"0 0 100 100\"><path d=\"M50 15 L60 40 L85 45 L65 60 L72 85 L50 70 L28 85 L35 60 L15 45 L40 40 Z\" fill=\"currentColor\"></path></svg><h3>House Swann</h3><p class=\"motto\">\"None\"</p><p class=\"region\">The Stormlands</p><p class=\"lore\">House Swann is a notable Stormlands house. Its position in the southern realm places it within the network of noble families whose loyalties matter during the civil war.</p><span class=\"seat\">Seat: Stonehelm</span></div>"
    }
  ]
};


const CHARACTER_CARD_DATA = {
  "got": [
    {
      "id": "character-jon-snow",
      "category": "stark",
      "faction": null,
      "name": "Jon Snow",
      "role": "The King in the North",
      "backRole": "The King in the North",
      "description": "A reluctant leader whose identity reshapes the struggle for the Iron Throne and the war against the dead.",
      "image": "../assets/images/characters/got/jon-snow.webp",
      "alt": "Jon Snow",
      "width": "376",
      "height": "531",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-daenerys-targaryen",
      "category": "targaryen",
      "faction": null,
      "name": "Daenerys Targaryen",
      "role": "Mother of Dragons",
      "backRole": "Mother of Dragons",
      "description": "The last Targaryen claimant rises across the Narrow Sea with three dragons and an army of followers.",
      "image": "../assets/images/characters/got/daenerys-targaryen.webp",
      "alt": "Daenerys Targaryen",
      "width": "367",
      "height": "544",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-tyrion-lannister",
      "category": "lannister",
      "faction": null,
      "name": "Tyrion Lannister",
      "role": "The Hand of the Queen",
      "backRole": "The Hand of the Queen",
      "description": "A sharp-minded Lannister who survives court politics through wit, strategy and an inconvenient honesty.",
      "image": "../assets/images/characters/got/tyrion-lannister.webp",
      "alt": "Tyrion Lannister",
      "width": "375",
      "height": "533",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-arya-stark",
      "category": "stark",
      "faction": null,
      "name": "Arya Stark",
      "role": "No One",
      "backRole": "No One",
      "description": "A Stark daughter who turns survival into a craft and returns to Westeros with a very long list.",
      "image": "../assets/images/characters/got/arya-stark.webp",
      "alt": "Arya Stark",
      "width": "738",
      "height": "414",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-sansa-stark",
      "category": "stark",
      "faction": null,
      "name": "Sansa Stark",
      "role": "Lady of Winterfell",
      "backRole": "Lady of Winterfell",
      "description": "A survivor of the capital who learns to read power, protect the North and rule on her own terms.",
      "image": "../assets/images/characters/got/sansa-stark.webp",
      "alt": "Sansa Stark",
      "width": "423",
      "height": "472",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-cersei-lannister",
      "category": "lannister",
      "faction": null,
      "name": "Cersei Lannister",
      "role": "Queen of the Seven Kingdoms",
      "backRole": "Queen of the Seven Kingdoms",
      "description": "A queen who treats the throne as both shield and weapon, defending her family at almost any cost.",
      "image": "../assets/images/characters/got/cersei-lannister.webp",
      "alt": "Cersei Lannister",
      "width": "300",
      "height": "450",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jaime-lannister",
      "category": "lannister",
      "faction": null,
      "name": "Jaime Lannister",
      "role": "The Kingslayer",
      "backRole": "The Kingslayer",
      "description": "A legendary swordsman whose reputation hides a long struggle between duty, love and honor.",
      "image": "../assets/images/characters/got/jaime-lannister.webp",
      "alt": "Jaime Lannister",
      "width": "625",
      "height": "414",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-bran-stark",
      "category": "stark",
      "faction": null,
      "name": "Bran Stark",
      "role": "The Three-Eyed Raven",
      "backRole": "The Three-Eyed Raven",
      "description": "A Stark who loses the life he knew and gains a strange view of history, memory and what comes next.",
      "image": "../assets/images/characters/got/bran-stark.webp",
      "alt": "Bran Stark",
      "width": "378",
      "height": "529",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-ned-stark",
      "category": "stark",
      "faction": null,
      "name": "Ned Stark",
      "role": "Lord of Winterfell",
      "backRole": "Lord of Winterfell",
      "description": "The honorable lord of Winterfell and father of the Stark children. Ned becomes Hand of the King and discovers that the politics of the capital are far more dangerous than the battles he knows in the North.",
      "image": "../assets/images/characters/got/ned-stark.webp",
      "alt": "Ned Stark",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-catelyn-stark",
      "category": "stark",
      "faction": null,
      "name": "Catelyn Stark",
      "role": "Lady of Winterfell",
      "backRole": "Lady of Winterfell",
      "description": "A Tully of Riverrun who becomes Lady of Winterfell and a determined protector of her children. Catelyn moves between the North and Riverlands as war tears apart the alliances holding her family together.",
      "image": "../assets/images/characters/got/catelyn-stark.webp",
      "alt": "Catelyn Stark",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-robb-stark",
      "category": "stark",
      "faction": null,
      "name": "Robb Stark",
      "role": "King in the North",
      "backRole": "King in the North",
      "description": "Ned’s eldest son, Robb is proclaimed King in the North after his father’s death. His early military victories establish him as a serious force, while his political decisions strain the alliances needed to sustain his war.",
      "image": "../assets/images/characters/got/robb-stark.webp",
      "alt": "Robb Stark",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-theon-greyjoy",
      "category": "other",
      "faction": null,
      "name": "Theon Greyjoy",
      "role": "Prince of Winterfell",
      "backRole": "Prince of Winterfell",
      "description": "The heir of House Greyjoy is raised alongside the Stark children but struggles with his divided identity. His attempt to prove himself to his birth family leads to choices that permanently damage his relationship with the Starks.",
      "image": "../assets/images/characters/got/theon-greyjoy.webp",
      "alt": "Theon Greyjoy",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-brienne-of-tarth",
      "category": "other",
      "faction": null,
      "name": "Brienne of Tarth",
      "role": "Knight of the Seven Kingdoms",
      "backRole": "Knight of the Seven Kingdoms",
      "description": "A warrior from Tarth who dedicates herself to the oaths she makes. Brienne challenges expectations about who can be a knight while forming important bonds with Jaime Lannister and the Stark family.",
      "image": "../assets/images/characters/got/brienne-of-tarth.webp",
      "alt": "Brienne of Tarth",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-sandor-clegane",
      "category": "other",
      "faction": null,
      "name": "Sandor Clegane",
      "role": "The Hound",
      "backRole": "The Hound",
      "description": "A feared warrior who serves the royal court before abandoning the life of a sworn fighter. His journeys with Arya and later other companions reveal a more complicated man beneath his reputation.",
      "image": "../assets/images/characters/got/sandor-clegane.webp",
      "alt": "Sandor Clegane",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jorah-mormont",
      "category": "other",
      "faction": null,
      "name": "Jorah Mormont",
      "role": "Exiled Knight",
      "backRole": "Exiled Knight",
      "description": "A disgraced knight who becomes one of Daenerys Targaryen’s most persistent advisers and protectors. Jorah’s loyalty is complicated by his past actions and his feelings for Daenerys.",
      "image": "../assets/images/characters/got/jorah-mormont.webp",
      "alt": "Jorah Mormont",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-varys",
      "category": "other",
      "faction": null,
      "name": "Varys",
      "role": "Master of Whisperers",
      "backRole": "Master of Whisperers",
      "description": "A master of intelligence who builds networks of informants across the Seven Kingdoms. Varys presents himself as a servant of the realm while carefully navigating competing claims to power.",
      "image": "../assets/images/characters/got/varys.webp",
      "alt": "Varys",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-petyr-baelish",
      "category": "other",
      "faction": null,
      "name": "Petyr Baelish",
      "role": "Lord of Harrenhal",
      "backRole": "Lord of Harrenhal",
      "description": "Known as Littlefinger, Petyr rises from a minor position through financial skill, manipulation and carefully chosen alliances. He repeatedly turns political uncertainty into opportunities for himself.",
      "image": "../assets/images/characters/got/petyr-baelish.webp",
      "alt": "Petyr Baelish",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-samwell-tarly",
      "category": "other",
      "faction": null,
      "name": "Samwell Tarly",
      "role": "Brother of the Night’s Watch",
      "backRole": "Brother of the Night’s Watch",
      "description": "A bookish young man who joins the Night’s Watch and gradually finds courage in ways he never expected. Sam’s knowledge becomes especially important as the threat beyond the Wall grows.",
      "image": "../assets/images/characters/got/samwell-tarly.webp",
      "alt": "Samwell Tarly",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-davos-seaworth",
      "category": "other",
      "faction": null,
      "name": "Davos Seaworth",
      "role": "The Onion Knight",
      "backRole": "The Onion Knight",
      "description": "A former smuggler who becomes a trusted adviser and skilled negotiator. Davos serves several leaders while maintaining a strong personal sense of loyalty and practical judgment.",
      "image": "../assets/images/characters/got/davos-seaworth.webp",
      "alt": "Davos Seaworth",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-melisandre",
      "category": "other",
      "faction": null,
      "name": "Melisandre",
      "role": "Red Priestess",
      "backRole": "Red Priestess",
      "description": "A priestess devoted to the Lord of Light whose visions and interpretation of prophecy influence major political and military decisions. Her certainty about destiny often brings her into conflict with others.",
      "image": "../assets/images/characters/got/melisandre.webp",
      "alt": "Melisandre",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-gendry",
      "category": "other",
      "faction": null,
      "name": "Gendry",
      "role": "Baratheon Heir",
      "backRole": "Baratheon Heir",
      "description": "A blacksmith who discovers his royal parentage and becomes important to several competing factions. His life changes when his connection to Robert Baratheon becomes politically useful.",
      "image": "../assets/images/characters/got/gendry.webp",
      "alt": "Gendry",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-grey-worm",
      "category": "other",
      "faction": null,
      "name": "Grey Worm",
      "role": "Commander of the Unsullied",
      "backRole": "Commander of the Unsullied",
      "description": "A disciplined soldier who rises to command Daenerys’s Unsullied forces. Grey Worm balances military duty with a growing personal life and loyalty to Daenerys.",
      "image": "../assets/images/characters/got/grey-worm.webp",
      "alt": "Grey Worm",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-missandei",
      "category": "other",
      "faction": null,
      "name": "Missandei",
      "role": "Queen’s Adviser",
      "backRole": "Queen’s Adviser",
      "description": "A multilingual interpreter who becomes one of Daenerys’s closest advisers and friends. Missandei moves from slavery to a position of influence beside the Targaryen queen.",
      "image": "../assets/images/characters/got/missandei.webp",
      "alt": "Missandei",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-tormund-giantsbane",
      "category": "other",
      "faction": null,
      "name": "Tormund Giantsbane",
      "role": "Free Folk Warrior",
      "backRole": "Free Folk Warrior",
      "description": "A charismatic Free Folk leader who becomes an ally of Jon Snow after years of hostility between the peoples north and south of the Wall.",
      "image": "../assets/images/characters/got/tormund-giantsbane.webp",
      "alt": "Tormund Giantsbane",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-stannis-baratheon",
      "category": "other",
      "faction": null,
      "name": "Stannis Baratheon",
      "role": "Claimant to the Iron Throne",
      "backRole": "Claimant to the Iron Throne",
      "description": "A stern and uncompromising Baratheon who believes the law of succession gives him the strongest claim to the Iron Throne.",
      "image": "../assets/images/characters/got/stannis-baratheon.webp",
      "alt": "Stannis Baratheon",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-renly-baratheon",
      "category": "other",
      "faction": null,
      "name": "Renly Baratheon",
      "role": "King claimant",
      "backRole": "King claimant",
      "description": "The youngest Baratheon brother, charismatic and politically popular, who builds a powerful coalition around his claim to the throne.",
      "image": "../assets/images/characters/got/renly-baratheon.webp",
      "alt": "Renly Baratheon",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-margaery-tyrell",
      "category": "other",
      "faction": null,
      "name": "Margaery Tyrell",
      "role": "Queen of the Seven Kingdoms",
      "backRole": "Queen of the Seven Kingdoms",
      "description": "A politically astute Tyrell who understands court life, public image and the value of alliances in King’s Landing.",
      "image": "../assets/images/characters/got/margaery-tyrell.webp",
      "alt": "Margaery Tyrell",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-olenna-tyrell",
      "category": "other",
      "faction": null,
      "name": "Olenna Tyrell",
      "role": "Queen of Thorns",
      "backRole": "Queen of Thorns",
      "description": "The sharp-tongued matriarch of House Tyrell who uses experience, wit and family strategy to navigate royal politics.",
      "image": "../assets/images/characters/got/olenna-tyrell.webp",
      "alt": "Olenna Tyrell",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-bronn",
      "category": "other",
      "faction": null,
      "name": "Bronn",
      "role": "Sellsword / Knight",
      "backRole": "Sellsword / Knight",
      "description": "A practical fighter who turns skill with a sword into wealth and influence by choosing opportunities that reward his loyalty.",
      "image": "../assets/images/characters/got/bronn.webp",
      "alt": "Bronn",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-ramsay-bolton",
      "category": "other",
      "faction": null,
      "name": "Ramsay Bolton",
      "role": "Warden of the North",
      "backRole": "Warden of the North",
      "description": "A ruthless Bolton who uses fear and cruelty to seize control in the North during the struggle for Winterfell.",
      "image": "../assets/images/characters/got/ramsay-bolton.webp",
      "alt": "Ramsay Bolton",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-ygritte",
      "category": "other",
      "faction": null,
      "name": "Ygritte",
      "role": "Free Folk warrior",
      "backRole": "Free Folk warrior",
      "description": "A fierce Free Folk archer whose relationship with Jon Snow gives him a personal connection to the people beyond the Wall.",
      "image": "../assets/images/characters/got/ygritte.webp",
      "alt": "Ygritte",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-gilly",
      "category": "other",
      "faction": null,
      "name": "Gilly",
      "role": "Craster’s daughter / Survivor",
      "backRole": "Craster’s daughter / Survivor",
      "description": "A young woman who escapes Craster’s abusive household and becomes an important companion to Samwell Tarly.",
      "image": "../assets/images/characters/got/gilly.webp",
      "alt": "Gilly",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-beric-dondarrion",
      "category": "other",
      "faction": null,
      "name": "Beric Dondarrion",
      "role": "Lord / Brotherhood leader",
      "backRole": "Lord / Brotherhood leader",
      "description": "A knight repeatedly returned to life who leads the Brotherhood Without Banners and becomes part of the fight against the dead.",
      "image": "../assets/images/characters/got/beric-dondarrion.webp",
      "alt": "Beric Dondarrion",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-thoros-of-myr",
      "category": "other",
      "faction": null,
      "name": "Thoros of Myr",
      "role": "Red Priest",
      "backRole": "Red Priest",
      "description": "A former warrior-priest whose faith and ability to revive the dead make him an important member of the Brotherhood.",
      "image": "../assets/images/characters/got/thoros-of-myr.webp",
      "alt": "Thoros of Myr",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-daario-naharis",
      "category": "other",
      "faction": null,
      "name": "Daario Naharis",
      "role": "Mercenary captain",
      "backRole": "Mercenary captain",
      "description": "A charismatic sellsword who joins Daenerys in Slaver’s Bay and becomes one of her trusted military commanders.",
      "image": "../assets/images/characters/got/daario-naharis.webp",
      "alt": "Daario Naharis",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-khal-drogo",
      "category": "targaryen",
      "faction": null,
      "name": "Khal Drogo",
      "role": "Dothraki khal",
      "backRole": "Dothraki khal",
      "description": "A powerful Dothraki warlord whose marriage to Daenerys changes her position and begins a chain of events leading to the birth of her dragons.",
      "image": "../assets/images/characters/got/khal-drogo.webp",
      "alt": "Khal Drogo",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-tywin-lannister",
      "category": "other",
      "faction": null,
      "name": "Tywin Lannister",
      "role": "Hand of the King / Lord of Casterly Rock",
      "backRole": "Hand of the King / Lord of Casterly Rock",
      "description": "A formidable Lannister patriarch who combines political calculation, military authority and family ambition to shape the wars around the Iron Throne.",
      "image": "../assets/images/characters/got/tywin-lannister.webp",
      "alt": "Tywin Lannister",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-loras-tyrell",
      "category": "other",
      "faction": null,
      "name": "Loras Tyrell",
      "role": "Knight of the Kingsguard",
      "backRole": "Knight of the Kingsguard",
      "description": "A renowned Tyrell knight whose skill in tournaments and battle makes him an important member of his family’s political network.",
      "image": "../assets/images/characters/got/loras-tyrell.webp",
      "alt": "Loras Tyrell",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-garlan-tyrell",
      "category": "other",
      "faction": null,
      "name": "Garlan Tyrell",
      "role": "Lord of Brightwater Keep",
      "backRole": "Lord of Brightwater Keep",
      "description": "A capable Tyrell warrior and older brother of Loras and Margaery who contributes military strength to House Tyrell.",
      "image": "../assets/images/characters/got/garlan-tyrell.webp",
      "alt": "Garlan Tyrell",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-hodor",
      "category": "other",
      "faction": null,
      "name": "Hodor",
      "role": "Stablehand of Winterfell",
      "backRole": "Stablehand of Winterfell",
      "description": "A gentle giant from Winterfell whose loyalty to Bran makes him an important companion during the journey beyond the Wall.",
      "image": "../assets/images/characters/got/hodor.webp",
      "alt": "Hodor",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jaqen-h-ghar",
      "category": "other",
      "faction": null,
      "name": "Jaqen H’ghar",
      "role": "Faceless Man",
      "backRole": "Faceless Man",
      "description": "A mysterious assassin who introduces Arya to the Faceless Men and their demanding philosophy of identity and death.",
      "image": "../assets/images/characters/got/jaqen-h-ghar.webp",
      "alt": "Jaqen H’ghar",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-syrio-forel",
      "category": "other",
      "faction": null,
      "name": "Syrio Forel",
      "role": "First Sword of Braavos",
      "backRole": "First Sword of Braavos",
      "description": "Arya’s fencing instructor in King’s Landing who teaches her to see combat as a discipline of movement, awareness and patience.",
      "image": "../assets/images/characters/got/syrio-forel.webp",
      "alt": "Syrio Forel",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-roose-bolton",
      "category": "other",
      "faction": null,
      "name": "Roose Bolton",
      "role": "Lord of the Dreadfort",
      "backRole": "Lord of the Dreadfort",
      "description": "A calculating northern lord whose quiet manner hides a willingness to change allegiance when it benefits House Bolton.",
      "image": "../assets/images/characters/got/roose-bolton.webp",
      "alt": "Roose Bolton",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-walder-frey",
      "category": "other",
      "faction": null,
      "name": "Walder Frey",
      "role": "Lord of the Crossing",
      "backRole": "Lord of the Crossing",
      "description": "The elderly lord of the Twins whose control of the crossings gives House Frey significant leverage during the War of the Five Kings.",
      "image": "../assets/images/characters/got/walder-frey.webp",
      "alt": "Walder Frey",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-qyburn",
      "category": "other",
      "faction": null,
      "name": "Qyburn",
      "role": "Former Maester / Royal adviser",
      "backRole": "Former Maester / Royal adviser",
      "description": "A disgraced former maester who uses unconventional experiments and political service to regain influence in King’s Landing.",
      "image": "../assets/images/characters/got/qyburn.webp",
      "alt": "Qyburn",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-mace-tyrell",
      "category": "other",
      "faction": null,
      "name": "Mace Tyrell",
      "role": "Lord of Highgarden",
      "backRole": "Lord of Highgarden",
      "description": "The head of House Tyrell during the later wars, balancing family interests, royal alliances and the military power of the Reach.",
      "image": "../assets/images/characters/got/mace-tyrell.webp",
      "alt": "Mace Tyrell",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-podrick-payne",
      "category": "other",
      "faction": null,
      "name": "Podrick Payne",
      "role": "Squire to Tyrion / Knight",
      "backRole": "Squire to Tyrion / Knight",
      "description": "A loyal young squire who grows from an uncertain servant into a capable and dependable fighter.",
      "image": "../assets/images/characters/got/podrick-payne.webp",
      "alt": "Podrick Payne",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-shae",
      "category": "other",
      "faction": null,
      "name": "Shae",
      "role": "Companion of Tyrion Lannister",
      "backRole": "Companion of Tyrion Lannister",
      "description": "A woman whose relationship with Tyrion becomes entangled with court politics, secrecy, jealousy and survival.",
      "image": "../assets/images/characters/got/shae.webp",
      "alt": "Shae",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jeor-mormont",
      "category": "other",
      "faction": null,
      "name": "Jeor Mormont",
      "role": "Lord Commander of the Night’s Watch",
      "backRole": "Lord Commander of the Night’s Watch",
      "description": "The veteran Lord Commander who recognizes the growing danger beyond the Wall and prepares the Watch for a threat few in the south understand.",
      "image": "../assets/images/characters/got/jeor-mormont.webp",
      "alt": "Jeor Mormont",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-alliser-thorne",
      "category": "other",
      "faction": null,
      "name": "Alliser Thorne",
      "role": "Master-at-Arms of the Night’s Watch",
      "backRole": "Master-at-Arms of the Night’s Watch",
      "description": "A stern and antagonistic officer at Castle Black whose distrust of Jon creates repeated conflict inside the Night’s Watch.",
      "image": "../assets/images/characters/got/alliser-thorne.webp",
      "alt": "Alliser Thorne",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-balon-greyjoy",
      "category": "other",
      "faction": null,
      "name": "Balon Greyjoy",
      "role": "Lord of the Iron Islands",
      "backRole": "Lord of the Iron Islands",
      "description": "The stubborn ruler of the Iron Islands who seeks independence for the Greyjoys and launches his own campaign during the War of the Five Kings.",
      "image": "../assets/images/characters/got/balon-greyjoy.webp",
      "alt": "Balon Greyjoy",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-euron-greyjoy",
      "category": "other",
      "faction": null,
      "name": "Euron Greyjoy",
      "role": "King of the Iron Islands",
      "backRole": "King of the Iron Islands",
      "description": "A ruthless Greyjoy who returns from exile and uses ambition, violence and political manipulation to seize control of the Iron Islands.",
      "image": "../assets/images/characters/got/euron-greyjoy.webp",
      "alt": "Euron Greyjoy",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-yara-greyjoy",
      "category": "other",
      "faction": null,
      "name": "Yara Greyjoy",
      "role": "Captain / Heir of the Iron Islands",
      "backRole": "Captain / Heir of the Iron Islands",
      "description": "A skilled sailor and warrior who challenges the traditional expectations placed on the Greyjoy heir and fights for her family’s future.",
      "image": "../assets/images/characters/got/yara-greyjoy.webp",
      "alt": "Yara Greyjoy",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-tommen-baratheon",
      "category": "other",
      "faction": null,
      "name": "Tommen Baratheon",
      "role": "King of the Seven Kingdoms",
      "backRole": "King of the Seven Kingdoms",
      "description": "A young king placed on the throne while stronger political figures around him compete for influence over the realm.",
      "image": "../assets/images/characters/got/tommen-baratheon.webp",
      "alt": "Tommen Baratheon",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-myrcella-baratheon",
      "category": "other",
      "faction": null,
      "name": "Myrcella Baratheon",
      "role": "Princess of the Seven Kingdoms",
      "backRole": "Princess of the Seven Kingdoms",
      "description": "A princess caught between the politics of King’s Landing and the Martell court after being sent to Dorne as part of a political arrangement.",
      "image": "../assets/images/characters/got/myrcella-baratheon.webp",
      "alt": "Myrcella Baratheon",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-the-night-king",
      "category": "other",
      "faction": null,
      "name": "The Night King",
      "role": "Leader of the White Walkers",
      "backRole": "Leader of the White Walkers",
      "description": "The supernatural leader of the army of the dead, whose advance turns the long-dismissed threat beyond the Wall into an existential war.",
      "image": "../assets/images/characters/got/the-night-king.webp",
      "alt": "The Night King",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    }
  ],
  "hotd": [
    {
      "id": "character-rhaenyra-targaryen",
      "category": null,
      "faction": "black",
      "name": "Rhaenyra Targaryen",
      "role": "The Heir Presumptive",
      "backRole": "Team Black",
      "description": "Named her father's heir years before his death, Rhaenyra spends decades watching that promise get quietly undermined by her father's second wife and that wife's sons. When Viserys finally dies, the court crowns someone else before Rhaenyra even hears the news.",
      "image": "../assets/images/characters/hotd/rhaenyra-targaryen.webp",
      "alt": "Rhaenyra Targaryen",
      "width": "374",
      "height": "534",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-daemon-targaryen",
      "category": null,
      "faction": "black",
      "name": "Daemon Targaryen",
      "role": "The King's Brother",
      "backRole": "Team Black",
      "description": "Viserys's younger brother, brilliant and dangerous in roughly equal measure. Exiled more than once for overreaching, he eventually marries Rhaenyra and becomes her fiercest — and most unpredictable — defender.",
      "image": "../assets/images/characters/hotd/daemon-targaryen.webp",
      "alt": "Daemon Targaryen",
      "width": "738",
      "height": "384",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-king-viserys-i",
      "category": null,
      "faction": "green",
      "name": "King Viserys I",
      "role": "The Peacemaker King",
      "backRole": "Before the split",
      "description": "A king who ruled through diplomacy rather than dragonfire, Viserys spends his reign trying to hold two families — and two claims to his throne — together by sheer force of denial. It works right up until it doesn't, and only after he's gone.",
      "image": "../assets/images/characters/hotd/king-viserys-i.webp",
      "alt": "King Viserys I",
      "width": "479",
      "height": "640",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-alicent-hightower",
      "category": null,
      "faction": "green",
      "name": "Alicent Hightower",
      "role": "The Queen Consort",
      "backRole": "Team Green",
      "description": "Once Rhaenyra's closest friend, Alicent becomes Viserys's second queen and spends the rest of her life convinced — rightly or not — that her children need protecting from her former friend's claim. That conviction starts a war.",
      "image": "../assets/images/characters/hotd/alicent-hightower.webp",
      "alt": "Alicent Hightower",
      "width": "554",
      "height": "554",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-aegon-ii-targaryen",
      "category": null,
      "faction": "green",
      "name": "Aegon II Targaryen",
      "role": "The Usurper King",
      "backRole": "Team Green",
      "description": "Crowned in a rushed ceremony the moment his father dies, Aegon spends his short reign trying to look like a king everyone already decided he wasn't fit to be — and paying for the crown in dragonfire and family blood.",
      "image": "../assets/images/characters/hotd/aegon-ii-targaryen.webp",
      "alt": "Aegon II Targaryen",
      "width": "250",
      "height": "350",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-aemond-targaryen",
      "category": null,
      "faction": "green",
      "name": "Aemond Targaryen",
      "role": "Rider of Vhagar",
      "backRole": "Team Green",
      "description": "The most dangerous of Alicent's sons, and the one who claims the largest living dragon for himself. Cold, precise, and quietly furious about a childhood insult he never lets go of — with a dragon big enough to make that grudge everyone else's problem.",
      "image": "../assets/images/characters/hotd/aemond-targaryen.webp",
      "alt": "Aemond Targaryen",
      "width": "368",
      "height": "543",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-otto-hightower",
      "category": null,
      "faction": "green",
      "name": "Otto Hightower",
      "role": "The Hand of the King",
      "backRole": "Team Green",
      "description": "Alicent's father and the architect behind most of Team Green's early moves. Patient, political, and willing to act the moment a king's final wishes become just ambiguous enough to reinterpret.",
      "image": "../assets/images/characters/hotd/otto-hightower.webp",
      "alt": "Otto Hightower",
      "width": "379",
      "height": "527",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-corlys-velaryon",
      "category": null,
      "faction": "black",
      "name": "Corlys Velaryon",
      "role": "The Sea Snake",
      "backRole": "Team Black",
      "description": "Lord of House Velaryon and the wealthiest sailor in Westerosi history, Corlys ties his family's fleet and fortune to Rhaenyra's cause — a bet that costs him almost everyone he loves before it's over.",
      "image": "../assets/images/characters/hotd/corlys-velaryon.webp",
      "alt": "Corlys Velaryon",
      "width": "374",
      "height": "534",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-rhaenys-targaryen",
      "category": null,
      "faction": "black",
      "name": "Rhaenys Targaryen",
      "role": "The Queen Who Never Was",
      "backRole": "Team Black",
      "description": "Passed over for the throne decades earlier for the simple crime of being a woman, Rhaenys watches history nearly repeat itself with Rhaenyra — and this time, she's got a dragon and no intention of watching quietly.",
      "image": "../assets/images/characters/hotd/rhaenys-targaryen.webp",
      "alt": "Rhaenys Targaryen",
      "width": "396",
      "height": "505",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-criston-cole",
      "category": null,
      "faction": "green",
      "name": "Criston Cole",
      "role": "Lord Commander, Kingsguard",
      "backRole": "Team Green",
      "description": "Once close to Rhaenyra, a rejection early in the story curdles into lifelong resentment. As the Kingsguard's commander, he becomes one of Team Green's most zealous — and most reckless — enforcers.",
      "image": "../assets/images/characters/hotd/criston-cole.webp",
      "alt": "Criston Cole",
      "width": "349",
      "height": "350",
      "emblem": "♕",
      "unified": false
    },
    {
      "id": "character-helaena-targaryen",
      "category": null,
      "faction": "green",
      "name": "Helaena Targaryen",
      "role": "Princess of the Realm",
      "backRole": "Princess of the Realm",
      "description": "Aegon II’s sister and wife whose quiet manner and strange prophetic observations make her one of the most distinctive members of the royal family.",
      "image": "../assets/images/characters/hotd/helaena-targaryen.webp",
      "alt": "Helaena Targaryen",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jacaerys-velaryon",
      "category": null,
      "faction": "black",
      "name": "Jacaerys Velaryon",
      "role": "Prince of Dragonstone",
      "backRole": "Prince of Dragonstone",
      "description": "Rhaenyra’s eldest son and heir. Jacaerys is sent across Westeros to secure support for his mother’s claim and proves himself capable of diplomacy and dragonriding.",
      "image": "../assets/images/characters/hotd/jacaerys-velaryon.webp",
      "alt": "Jacaerys Velaryon",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-lucerys-velaryon",
      "category": null,
      "faction": "black",
      "name": "Lucerys Velaryon",
      "role": "Prince of Driftmark",
      "backRole": "Prince of Driftmark",
      "description": "Rhaenyra’s second son and a dragonrider who is sent to Storm’s End to seek support. His encounter with Aemond becomes one of the events that escalates the conflict.",
      "image": "../assets/images/characters/hotd/lucerys-velaryon.webp",
      "alt": "Lucerys Velaryon",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-baela-targaryen",
      "category": null,
      "faction": "black",
      "name": "Baela Targaryen",
      "role": "Dragonrider of House Targaryen",
      "backRole": "Dragonrider of House Targaryen",
      "description": "Daemon Targaryen’s daughter and a dragonrider raised within the Targaryen family’s increasingly dangerous succession struggle.",
      "image": "../assets/images/characters/hotd/baela-targaryen.webp",
      "alt": "Baela Targaryen",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-rhaena-targaryen",
      "category": null,
      "faction": "black",
      "name": "Rhaena Targaryen",
      "role": "Lady of House Targaryen",
      "backRole": "Lady of House Targaryen",
      "description": "Daemon’s daughter and Baela’s twin, Rhaena grows up surrounded by dragons and the expectations placed on the Targaryen family.",
      "image": "../assets/images/characters/hotd/rhaena-targaryen.webp",
      "alt": "Rhaena Targaryen",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-laena-velaryon",
      "category": null,
      "faction": "black",
      "name": "Laena Velaryon",
      "role": "Lady of Driftmark",
      "backRole": "Lady of Driftmark",
      "description": "The daughter of Corlys and Rhaenys Velaryon and a dragonrider who marries Daemon Targaryen. Her life links the Velaryon family to the Targaryen succession struggle.",
      "image": "../assets/images/characters/hotd/laena-velaryon.webp",
      "alt": "Laena Velaryon",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-laenor-velaryon",
      "category": null,
      "faction": "black",
      "name": "Laenor Velaryon",
      "role": "Lord of Driftmark",
      "backRole": "Lord of Driftmark",
      "description": "The son of Corlys and Rhaenys Velaryon and a dragonrider who marries Daemon Targaryen. Her life links the Velaryon family to the Targaryen succession struggle.",
      "image": "../assets/images/characters/hotd/laenor-velaryon.webp",
      "alt": "Laenor Velaryon",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-harwin-strong",
      "category": null,
      "faction": "black",
      "name": "Harwin Strong",
      "role": "Commander of the City Watch",
      "backRole": "Commander of the City Watch",
      "description": "A powerful warrior and commander of the City Watch whose close relationship with Rhaenyra has major consequences for the royal family.",
      "image": "../assets/images/characters/hotd/harwin-strong.webp",
      "alt": "Harwin Strong",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-larys-strong",
      "category": null,
      "faction": "green",
      "name": "Larys Strong",
      "role": "Lord of Harrenhal",
      "backRole": "Lord of Harrenhal",
      "description": "The younger son of Lyonel Strong who builds influence through secrets, informants and carefully chosen acts of political violence.",
      "image": "../assets/images/characters/hotd/larys-strong.webp",
      "alt": "Larys Strong",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-mysaria",
      "category": null,
      "faction": "other",
      "name": "Mysaria",
      "role": "The White Worm",
      "backRole": "The White Worm",
      "description": "A former slave who builds an extensive network of informants in King’s Landing. Mysaria operates outside the great houses while becoming deeply connected to the politics of the capital.",
      "image": "../assets/images/characters/hotd/mysaria.webp",
      "alt": "Mysaria",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-vaemond-velaryon",
      "category": null,
      "faction": "green",
      "name": "Vaemond Velaryon",
      "role": "Velaryon Claimant",
      "backRole": "Velaryon Claimant",
      "description": "A senior member of House Velaryon who challenges the succession of Rhaenyra’s sons to Driftmark. His dispute brings questions of inheritance and legitimacy directly before the royal court.",
      "image": "../assets/images/characters/hotd/vaemond-velaryon.webp",
      "alt": "Vaemond Velaryon",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-ser-erryk-cargyll",
      "category": null,
      "faction": "black",
      "name": "Ser Erryk Cargyll",
      "role": "Kingsguard Knight",
      "backRole": "Kingsguard Knight",
      "description": "One of the twin Cargyll brothers of the Kingsguard. Erryk ultimately sides with Rhaenyra after becoming disillusioned with the Green succession.",
      "image": "../assets/images/characters/hotd/ser-erryk-cargyll.webp",
      "alt": "Ser Erryk Cargyll",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-ser-arryk-cargyll",
      "category": null,
      "faction": "green",
      "name": "Ser Arryk Cargyll",
      "role": "Kingsguard Knight",
      "backRole": "Kingsguard Knight",
      "description": "Erryk’s twin brother, who remains aligned with Aegon II. The brothers’ opposing loyalties embody the personal cost of the Targaryen civil war.",
      "image": "../assets/images/characters/hotd/ser-arryk-cargyll.webp",
      "alt": "Ser Arryk Cargyll",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-hugh-hammer",
      "category": null,
      "faction": "black",
      "name": "Hugh Hammer",
      "role": "Dragonseed",
      "backRole": "Dragonseed",
      "description": "A common-born man of uncertain parentage who claims Targaryen blood and becomes a dragonrider during the Dance.",
      "image": "../assets/images/characters/hotd/hugh-hammer.webp",
      "alt": "Hugh Hammer",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-ulf-the-white",
      "category": null,
      "faction": "black",
      "name": "Ulf the White",
      "role": "Dragonseed",
      "backRole": "Dragonseed",
      "description": "A common-born man who claims Targaryen ancestry and becomes a dragonrider after the call for dragonseeds.",
      "image": "../assets/images/characters/hotd/ulf-the-white.webp",
      "alt": "Ulf the White",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-addam-of-hull",
      "category": null,
      "faction": "black",
      "name": "Addam of Hull",
      "role": "Dragonseed / Sailor",
      "backRole": "Dragonseed / Sailor",
      "description": "A skilled sailor from Hull who becomes a dragonrider and earns the trust of Rhaenyra’s faction. His rise is closely connected to the Velaryon family.",
      "image": "../assets/images/characters/hotd/addam-of-hull.webp",
      "alt": "Addam of Hull",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-alyn-of-hull",
      "category": null,
      "faction": "black",
      "name": "Alyn of Hull",
      "role": "Velaryon Sailor",
      "backRole": "Velaryon Sailor",
      "description": "A talented sailor from Hull and brother of Addam whose service connects him to the powerful Velaryon naval tradition.",
      "image": "../assets/images/characters/hotd/alyn-of-hull.webp",
      "alt": "Alyn of Hull",
      "width": "740",
      "height": "560",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-alys-rivers",
      "category": "other",
      "faction": null,
      "name": "Alys Rivers",
      "role": "Healer / Mystic of Harrenhal",
      "backRole": "Healer / Mystic of Harrenhal",
      "description": "A mysterious woman at Harrenhal who becomes closely connected to Daemon Targaryen and the supernatural atmosphere surrounding the castle.",
      "image": "../assets/images/characters/hotd/alys-rivers.webp",
      "alt": "Alys Rivers",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-simon-strong",
      "category": "other",
      "faction": null,
      "name": "Simon Strong",
      "role": "Castellan of Harrenhal",
      "backRole": "Castellan of Harrenhal",
      "description": "The aging castellan of Harrenhal who must survive the shifting loyalties and dangers brought to the castle during the Dance.",
      "image": "../assets/images/characters/hotd/simon-strong.webp",
      "alt": "Simon Strong",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-oscar-tully",
      "category": "other",
      "faction": null,
      "name": "Oscar Tully",
      "role": "Lord of Riverrun",
      "backRole": "Lord of Riverrun",
      "description": "A young Tully who inherits leadership during the Dance and is forced to make difficult decisions as the Riverlands become a major battlefield.",
      "image": "../assets/images/characters/hotd/oscar-tully.webp",
      "alt": "Oscar Tully",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-cregan-stark",
      "category": "stark",
      "faction": null,
      "name": "Cregan Stark",
      "role": "Lord of Winterfell",
      "backRole": "Lord of Winterfell",
      "description": "The powerful Lord of Winterfell whose arrival near the end of the Dance brings northern strength and a strong sense of duty to the conflict.",
      "image": "../assets/images/characters/hotd/cregan-stark.webp",
      "alt": "Cregan Stark",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-dalton-greyjoy",
      "category": "other",
      "faction": null,
      "name": "Dalton Greyjoy",
      "role": "Lord Reaper of Pyke",
      "backRole": "Lord Reaper of Pyke",
      "description": "A young and aggressive Greyjoy lord whose naval raids add another dimension to the wider turmoil of the Dance.",
      "image": "../assets/images/characters/hotd/dalton-greyjoy.webp",
      "alt": "Dalton Greyjoy",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jason-lannister",
      "category": "lannister",
      "faction": null,
      "name": "Jason Lannister",
      "role": "Lord of Casterly Rock",
      "backRole": "Lord of Casterly Rock",
      "description": "A proud Lannister lord who supports the Green cause and seeks military influence during the succession crisis.",
      "image": "../assets/images/characters/hotd/jason-lannister.webp",
      "alt": "Jason Lannister",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-tyland-lannister",
      "category": "lannister",
      "faction": null,
      "name": "Tyland Lannister",
      "role": "Master of Ships / Master of Coin",
      "backRole": "Master of Ships / Master of Coin",
      "description": "A Lannister statesman who serves the royal government and becomes involved in the Greens’ wartime administration.",
      "image": "../assets/images/characters/hotd/tyland-lannister.webp",
      "alt": "Tyland Lannister",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jasper-wylde",
      "category": "other",
      "faction": null,
      "name": "Jasper Wylde",
      "role": "Master of Laws",
      "backRole": "Master of Laws",
      "description": "A member of Viserys’s Small Council who becomes a prominent supporter of the Green government after the succession crisis.",
      "image": "../assets/images/characters/hotd/jasper-wylde.webp",
      "alt": "Jasper Wylde",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-lyman-beesbury",
      "category": "other",
      "faction": null,
      "name": "Lyman Beesbury",
      "role": "Master of Coin",
      "backRole": "Master of Coin",
      "description": "An elderly councillor who supports Rhaenyra’s succession and openly challenges the decision to crown Aegon.",
      "image": "../assets/images/characters/hotd/lyman-beesbury.webp",
      "alt": "Lyman Beesbury",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-mellos",
      "category": "other",
      "faction": null,
      "name": "Mellos",
      "role": "Grand Maester",
      "backRole": "Grand Maester",
      "description": "A senior maester of the royal court whose medical and political advice reflects the difficult role of the Citadel during the Targaryen civil war.",
      "image": "../assets/images/characters/hotd/mellos.webp",
      "alt": "Mellos",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-forrest-frey",
      "category": "other",
      "faction": null,
      "name": "Forrest Frey",
      "role": "Lord of the Crossing",
      "backRole": "Lord of the Crossing",
      "description": "A member of House Frey whose family controls the strategically important crossings of the Trident during the Dance.",
      "image": "../assets/images/characters/hotd/forrest-frey.webp",
      "alt": "Forrest Frey",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-benjicot-blackwood",
      "category": "other",
      "faction": null,
      "name": "Benjicot-Blackwood",
      "role": "Lord of Raventree Hall",
      "backRole": "Lord of Raventree Hall",
      "description": "A young Blackwood commander who becomes an important Riverlands supporter of Rhaenyra and a rival of House Bracken.",
      "image": "../assets/images/characters/hotd/benjicot-blackwood.webp",
      "alt": "Benjicot-Blackwood",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-lyonel-strong",
      "category": "other",
      "faction": null,
      "name": "Lyonel Strong",
      "role": "Master of Laws / Hand of the King",
      "backRole": "Master of Laws / Hand of the King",
      "description": "A respected lord and Hand of the King whose service is closely tied to Viserys’s court and the fortunes of House Strong.",
      "image": "../assets/images/characters/hotd/lyonel-strong.webp",
      "alt": "Lyonel Strong",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-harrold-westerling",
      "category": "other",
      "faction": null,
      "name": "Harrold Westerling",
      "role": "Lord Commander of the Kingsguard",
      "backRole": "Lord Commander of the Kingsguard",
      "description": "A veteran Kingsguard knight who serves the royal family during the early succession crisis and represents the old guard of the crown.",
      "image": "../assets/images/characters/hotd/harrold-westerling.webp",
      "alt": "Harrold Westerling",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-joffrey-lonmouth",
      "category": "other",
      "faction": null,
      "name": "Joffrey Lonmouth",
      "role": "Knight / Companion of Laenor Velaryon",
      "backRole": "Knight / Companion of Laenor Velaryon",
      "description": "A knight closely associated with Laenor Velaryon whose presence becomes part of the complicated relationships surrounding the Velaryon marriage.",
      "image": "../assets/images/characters/hotd/joffrey-lonmouth.webp",
      "alt": "Joffrey Lonmouth",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-borros-baratheon",
      "category": "other",
      "faction": null,
      "name": "Borros Baratheon",
      "role": "Lord of Storm’s End",
      "backRole": "Lord of Storm’s End",
      "description": "The Baratheon lord whose decision over Rhaenyra and Aegon’s competing claims becomes important to the wider war.",
      "image": "../assets/images/characters/hotd/borros-baratheon.webp",
      "alt": "Borros Baratheon",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-orwyle",
      "category": "other",
      "faction": null,
      "name": "Orwyle",
      "role": "Grand Maester",
      "backRole": "Grand Maester",
      "description": "A senior maester who serves the royal court and becomes involved in the Greens’ government during the Dance.",
      "image": "../assets/images/characters/hotd/orwyle.webp",
      "alt": "Orwyle",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-rickard-thorne",
      "category": "other",
      "faction": null,
      "name": "Rickard Thorne",
      "role": "Kingsguard knight",
      "backRole": "Kingsguard knight",
      "description": "A Kingsguard officer whose duties place him directly inside the dangerous royal succession struggle.",
      "image": "../assets/images/characters/hotd/rickard-thorne.webp",
      "alt": "Rickard Thorne",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-lorent-marbrand",
      "category": "other",
      "faction": null,
      "name": "Lorent Marbrand",
      "role": "Kingsguard knight",
      "backRole": "Kingsguard knight",
      "description": "A sworn sword of the Kingsguard whose service reflects the military and political pressures surrounding the royal family.",
      "image": "../assets/images/characters/hotd/lorent-marbrand.webp",
      "alt": "Lorent Marbrand",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-steffon-darklyn",
      "category": "other",
      "faction": null,
      "name": "Steffon Darklyn",
      "role": "Kingsguard knight",
      "backRole": "Kingsguard knight",
      "description": "A knight whose allegiance shifts toward Rhaenyra and whose service connects the Kingsguard to the Black cause.",
      "image": "../assets/images/characters/hotd/steffon-darklyn.webp",
      "alt": "Steffon Darklyn",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-erryk-cargyll",
      "category": "other",
      "faction": null,
      "name": "Erryk Cargyll",
      "role": "Kingsguard knight",
      "backRole": "Kingsguard knight",
      "description": "A Kingsguard twin whose loyalty places him on Rhaenyra’s side after the succession crisis divides the royal household.",
      "image": "../assets/images/characters/hotd/erryk-cargyll.webp",
      "alt": "Erryk Cargyll",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-arryk-cargyll",
      "category": "other",
      "faction": null,
      "name": "Arryk Cargyll",
      "role": "Kingsguard knight",
      "backRole": "Kingsguard knight",
      "description": "Erryk’s twin brother, whose service to Aegon places the brothers on opposite sides of the Dance.",
      "image": "../assets/images/characters/hotd/arryk-cargyll.webp",
      "alt": "Arryk Cargyll",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-aegon-the-younger",
      "category": "other",
      "faction": null,
      "name": "Aegon the Younger",
      "role": "Prince / Son of Rhaenyra",
      "backRole": "Prince / Son of Rhaenyra",
      "description": "A young Targaryen prince whose family becomes central to the succession struggle and the survival of Rhaenyra’s line.",
      "image": "../assets/images/characters/hotd/aegon-the-younger.webp",
      "alt": "Aegon the Younger",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-viserys-targaryen",
      "category": "other",
      "faction": null,
      "name": "Viserys Targaryen",
      "role": "Prince / Son of Rhaenyra",
      "backRole": "Prince / Son of Rhaenyra",
      "description": "Rhaenyra’s younger son whose separation from his family during the war becomes part of the uncertainty surrounding the Targaryen succession.",
      "image": "../assets/images/characters/hotd/viserys-targaryen.webp",
      "alt": "Viserys Targaryen",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
    {
      "id": "character-jeyne-arryn",
      "category": "other",
      "faction": null,
      "name": "Jeyne Arryn",
      "role": "Lady of the Eyrie",
      "backRole": "Lady of the Eyrie",
      "description": "The powerful ruler of the Vale who must decide how the Arryns will respond to the competing Targaryen claims.",
      "image": "../assets/images/characters/hotd/jeyne-arryn.webp",
      "alt": "Jeyne Arryn",
      "width": "600",
      "height": "800",
      "emblem": "♕",
      "unified": true
    },
  ]
};






const DRAGON_CARD_DATA = {
  "got": {
    "dragons": [
      {
        "id": "dragon-drogon",
        "color": "black",
        "name": "Drogon",
        "rider": "Daenerys Targaryen",
        "description": "The largest and wildest of the three, black as a moonless sky with scales that catch fire-light like scorched glass. He answered to almost no one — and eventually decided that included empty chairs. Named for Daenerys's late husband, he outlived every other dragon in the story and flew off into the east, never confirmed dead.",
        "image": "../assets/images/dragons/got/drogon.webp"
      },
      {
        "id": "dragon-rhaegal",
        "color": "green",
        "name": "Rhaegal",
        "rider": "none, formerly Jon Snow",
        "description": "Green and bronze, named for a prince who never got to see him hatch. Quick in the air and quicker to trust the wrong airspace — a mistake at sea, ambushed by scorpion bolts, that cost him everything mid-flight.",
        "image": "../assets/images/dragons/got/rhaegal.webp"
      },
      {
        "id": "dragon-viserion",
        "color": "cream",
        "name": "Viserion",
        "rider": "none, formerly Daenerys",
        "description": "Cream and gold, the gentlest-looking of the three — right up until the night he came back wrong, killed north of the Wall and raised again with ice-blue eyes. What the dead do with a dragon is somehow worse than what the living do.",
        "image": "../assets/images/dragons/got/viserion.webp"
      }
    ]
  },
  "hotd": {
    "dragons": [
      {
        "id": "dragon-syrax",
        "faction": "black",
        "name": "Syrax",
        "rider": "Rhaenyra Targaryen",
        "description": "Rhaenyra Targaryen’s golden dragon and a symbol of her royal identity. Syrax is not known primarily as a battlefield predator, but her bond with Rhaenyra becomes increasingly important as the succession crisis turns into war.",
        "image": "../assets/images/dragons/hotd/syrax.webp"
      },
      {
        "id": "dragon-caraxes",
        "faction": "black",
        "name": "Caraxes",
        "rider": "Daemon Targaryen",
        "description": "Known as the Blood Wyrm, Caraxes is a long, red and battle-hardened dragon. His aggressive nature and bond with Daemon make the pair one of the most dangerous forces on the Black side.",
        "image": "../assets/images/dragons/hotd/caraxes.webp"
      },
      {
        "id": "dragon-vhagar",
        "faction": "green",
        "name": "Vhagar",
        "rider": "Aemond Targaryen",
        "description": "The oldest and largest living dragon during the Dance. A survivor from the age of Aegon the Conqueror, Vhagar gives Aemond an enormous military advantage and becomes one of the war’s most feared weapons.",
        "image": "../assets/images/dragons/hotd/vhagar.webp"
      },
      {
        "id": "dragon-meleys",
        "faction": "black",
        "name": "Meleys",
        "rider": "Rhaenys Targaryen",
        "description": "The Red Queen is an experienced and exceptionally fast dragon ridden by Rhaenys Targaryen. Meleys represents one of the strongest weapons available to Rhaenyra before the civil war begins taking its heaviest toll.",
        "image": "../assets/images/dragons/hotd/meleys.webp"
      },
      {
        "id": "dragon-sunfyre",
        "faction": "green",
        "name": "Sunfyre",
        "rider": "Aegon II Targaryen",
        "description": "Aegon II’s famous golden dragon, celebrated for his striking appearance and close bond with the king. Sunfyre is drawn into the brutal fighting of the Dance and suffers serious injuries during the conflict.",
        "image": "../assets/images/dragons/hotd/sunfyre.webp"
      },
      {
        "id": "dragon-dreamfyre",
        "faction": "green",
        "name": "Dreamfyre",
        "rider": "Helaena Targaryen",
        "description": "An ancient pale-blue dragon associated with Helaena Targaryen. Dreamfyre reflects the deep dragonriding heritage of the royal family even though Helaena is reluctant to become an active participant in the war.",
        "image": "../assets/images/dragons/hotd/dreamfyre.webp"
      },
      {
        "id": "dragon-seasmoke",
        "faction": "black",
        "name": "Seasmoke",
        "rider": "Addam of Hull",
        "description": "A pale-grey dragon formerly ridden by Laenor Velaryon. During the Dance, Seasmoke eventually accepts Addam of Hull as a rider, making the dragon an important part of Rhaenyra’s attempt to strengthen her forces.",
        "image": "../assets/images/dragons/hotd/seasmoke.webp"
      },
      {
        "id": "dragon-vermax",
        "faction": "black",
        "name": "Vermax",
        "rider": "Jacaerys Velaryon",
        "description": "Jacaerys Velaryon’s young dragon. Vermax grows alongside his rider and becomes part of Jacaerys’s efforts to carry messages, seek alliances and support Rhaenyra’s claim during the early stages of the war.",
        "image": "../assets/images/dragons/hotd/vermax.webp"
      },
      {
        "id": "dragon-arrax",
        "faction": "black",
        "name": "Arrax",
        "rider": "Lucerys Velaryon",
        "description": "Lucerys Velaryon’s young dragon. Arrax is much smaller than Vhagar, and the enormous difference in size becomes crucial when Lucerys encounters Aemond and Vhagar at Storm’s End.",
        "image": "../assets/images/dragons/hotd/arrax.webp"
      },
      {
        "id": "dragon-moondancer",
        "faction": "black",
        "name": "Moondancer",
        "rider": "Baela Targaryen",
        "description": "Baela Targaryen’s swift young dragon. Moondancer is smaller than the great war dragons but fast enough to become an important part of Baela’s role in the later stages of the Dance.",
        "image": "../assets/images/dragons/hotd/moondancer.webp"
      },
      {
        "id": "dragon-stormcloud",
        "faction": "black",
        "name": "Stormcloud",
        "rider": "Aegon the Younger",
        "description": "A young dragon belonging to Aegon the Younger. Stormcloud becomes significant because even a small dragon can provide a means of escape and survival when the royal family is caught in the chaos of war.",
        "image": "../assets/images/dragons/hotd/stormcloud.webp"
      },
      {
        "id": "dragon-vermithor",
        "faction": "black",
        "name": "Vermithor",
        "rider": "Hugh Hammer",
        "description": "Known as the Bronze Fury, Vermithor is one of the oldest and largest unclaimed dragons. His size makes him one of the most valuable targets in Rhaenyra’s search for new dragonriders and dragon power.",
        "image": "../assets/images/dragons/hotd/vermithor.webp"
      },
      {
        "id": "dragon-silverwing",
        "faction": "black",
        "name": "Silverwing",
        "rider": "Ulf the White",
        "description": "An old silver dragon that becomes available to a new rider during the Dance. Silverwing’s long history and ability to carry a dragonseed make her one of the important dragons awakened by the search for additional riders.",
        "image": "../assets/images/dragons/hotd/silverwing.webp"
      },
      {
        "id": "dragon-tessarion",
        "faction": "green",
        "name": "Tessarion",
        "rider": "Daeron Targaryen",
        "description": "Known as the Blue Queen, Tessarion is Daeron Targaryen’s blue dragon. She becomes an important Green military asset as Daeron campaigns in the Reach and the war expands beyond King’s Landing.",
        "image": "../assets/images/dragons/hotd/tessarion.webp"
      },
      {
        "id": "dragon-sheepstealer",
        "faction": "other",
        "name": "Sheepstealer",
        "rider": "Nettles",
        "description": "A wild dragon known for hunting sheep instead of accepting human riders. Nettles eventually earns Sheepstealer’s trust, demonstrating that a rider does not necessarily need to come from the royal family to form a bond with a dragon.",
        "image": "../assets/images/dragons/hotd/sheepstealer.webp"
      },
      {
        "id": "dragon-cannibal",
        "faction": "other",
        "name": "Cannibal",
        "rider": "None known",
        "description": "The largest and most dangerous of the wild dragons on Dragonstone. Cannibal is feared because he eats other dragons and their eggs, and unlike many Targaryen dragons he never accepts a known rider.",
        "image": "../assets/images/dragons/hotd/cannibal.webp"
      },
      {
        "id": "dragon-grey-ghost",
        "faction": "other",
        "name": "Grey Ghost",
        "rider": "None known",
        "description": "A shy wild dragon that lives around Dragonstone and avoids human contact. His name comes from his pale colouring and elusive behaviour, making him one of the island’s mysterious untamed dragons.",
        "image": "../assets/images/dragons/hotd/grey-ghost.webp"
      },
      {
        "id": "dragon-balerion",
        "faction": "historical",
        "name": "Balerion",
        "rider": "Aegon I Targaryen / Viserys I Targaryen",
        "description": "Balerion the Black Dread was the greatest dragon of the Targaryen conquest. Although long dead by the Dance, his skull and legacy remain part of the history and imagery of House of the Dragon.",
        "image": "../assets/images/dragons/hotd/balerion.webp"
      },
      {
        "id": "dragon-meraxes",
        "faction": "historical",
        "name": "Meraxes",
        "rider": "Rhaenys Targaryen",
        "description": "Meraxes was one of the three dragons used by Aegon the Conqueror and his sisters during the conquest of Westeros. The dragon died generations before the Dance, but remains part of the Targaryen dragon history referenced in the era.",
        "image": "../assets/images/dragons/hotd/meraxes.webp"
      },
    ]
  }
};




const CHRONICLE_CARD_DATA = {
  "got": {
    "events": [
      {
        "id": "bran-s-fall",
        "title": "Bran’s Fall",
        "period": "Year 298",
        "image": "../assets/images/chronicle/got/got-bran-s-fall.webp",
        "summary": "Bran Stark survives a fall from a tower at Winterfell after witnessing a secret involving Jaime and Cersei Lannister. The injury leaves Bran unable to walk and becomes the first major event that sends the Stark family onto separate paths."
      },
      {
        "id": "a-king-dies-hunting",
        "title": "A King Dies Hunting",
        "period": "Year 298",
        "image": "../assets/images/chronicle/got/got-a-king-dies-hunting.webp",
        "summary": "Robert Baratheon's death sets off a quiet argument about succession that turns into a five-way war within a season."
      },
      {
        "id": "the-king-s-hand-loses-his-head",
        "title": "The King's Hand Loses His Head",
        "period": "Year 298",
        "image": "../assets/images/chronicle/got/got-the-king-s-hand-loses-his-head.webp",
        "summary": "Ned Stark discovers a secret worth dying for, then does exactly that, in public, in front of his own daughters."
      },
      {
        "id": "the-whispering-wood",
        "title": "The Whispering Wood",
        "period": "Year 299",
        "image": "../assets/images/chronicle/got/got-the-whispering-wood.webp",
        "summary": "Robb Stark wins a major battle in the Riverlands and captures Jaime Lannister."
      },
      {
        "id": "theon-takes-winterfell",
        "title": "Theon Takes Winterfell",
        "period": "Year 299",
        "image": "../assets/images/chronicle/got/got-theon-takes-winterfell.webp",
        "summary": "Theon Greyjoy captures Winterfell while Robb is campaigning far to the south."
      },
      {
        "id": "the-red-wedding",
        "title": "The Red Wedding",
        "period": "Year 299",
        "image": "../assets/images/chronicle/got/got-the-red-wedding.webp",
        "summary": "The Freys betray Robb Stark and kill him, Catelyn and many of their followers."
      },
      {
        "id": "wildfire-on-the-blackwater",
        "title": "Wildfire on the Blackwater",
        "period": "Year 299",
        "image": "../assets/images/chronicle/got/got-wildfire-on-the-blackwater.webp",
        "summary": "A fleet sails for King's Landing expecting an easy siege and sails into a river that has been quietly rigged to explode."
      },
      {
        "id": "the-purple-wedding",
        "title": "The Purple Wedding",
        "period": "Year 300",
        "image": "../assets/images/chronicle/got/got-the-purple-wedding.webp",
        "summary": "Joffrey Baratheon dies at his wedding feast, creating another royal succession crisis."
      },
      {
        "id": "the-battle-of-the-fist-of-the-first-men",
        "title": "The Battle of the Fist of the First Men",
        "period": "Year 300",
        "image": "../assets/images/chronicle/got/got-fist-of-the-first-men.webp",
        "summary": "The Night’s Watch is attacked beyond the Wall by the Army of the Dead. Many brothers are killed, the survivors retreat south, and Jon Snow gains direct experience of the supernatural threat that is gathering beyond the Wall."
      },
      {
        "id": "the-mutiny-at-craster-s-keep",
        "title": "The Mutiny at Craster’s Keep",
        "period": "Year 301",
        "image": "../assets/images/chronicle/got/got-the-mutiny-at-craster-s-keep.webp",
        "summary": "Members of the Night’s Watch mutiny at Craster’s Keep after the death of Jeor Mormont. The violence destroys the leadership of the expedition and leaves Jon Snow and the surviving brothers facing both the mutineers and the dangers beyond the Wall."
      },
      {
        "id": "the-hound-and-the-brotherhood",
        "title": "The Hound and the Brotherhood",
        "period": "Year 302",
        "image": "../assets/images/chronicle/got/got-the-hound-and-the-brotherhood.webp",
        "summary": "Sandor Clegane’s path crosses repeatedly with the Brotherhood Without Banners as the war leaves the Riverlands filled with displaced people and competing forces. His encounters gradually move him away from the identity of a royal enforcer and toward an uncertain search for purpose."
      },
      {
        "id": "the-battle-of-castle-black",
        "title": "The Battle of Castle Black",
        "period": "Year 302",
        "image": "../assets/images/chronicle/got/got-the-battle-of-castle-black.webp",
        "summary": "Mance Rayder’s army attacks Castle Black while the Night’s Watch attempts to defend the Wall. Jon Snow helps organize the defense, and the battle demonstrates that the Watch can still hold the Wall despite severe losses."
      },
      {
        "id": "hardhome",
        "title": "Hardhome",
        "period": "Year 302",
        "image": "../assets/images/chronicle/got/got-hardhome.webp",
        "summary": "Jon Snow witnesses the White Walkers overwhelm Hardhome and raise the dead."
      },
      {
        "id": "a-queen-crosses-the-sea",
        "title": "A Queen Crosses the Sea",
        "period": "Year 300",
        "image": "../assets/images/chronicle/got/got-a-queen-crosses-the-sea.webp",
        "summary": "Three dragons, a growing army, and a very long boat ride finally bring the last Targaryen back toward home."
      },
      {
        "id": "two-battles-one-bastard",
        "title": "Two Battles, One Bastard",
        "period": "Year 303",
        "image": "../assets/images/chronicle/got/got-two-battles-one-bastard.webp",
        "summary": "The North is won back in the mud outside Winterfell, in a fight decided less by strategy than by who had more men left standing."
      },
      {
        "id": "arya-returns-to-westeros",
        "title": "Arya Returns to Westeros",
        "period": "Year 303",
        "image": "../assets/images/chronicle/got/got-arya-returns-to-westeros.webp",
        "summary": "After years of training in Braavos, Arya Stark returns to Westeros and begins settling old scores. Her return marks the point where the Stark children are no longer simply surviving separately and begins the process of rebuilding the family’s position in the North."
      },
      {
        "id": "daenerys-lands-at-dragonstone",
        "title": "Daenerys Lands at Dragonstone",
        "period": "Year 300",
        "image": "../assets/images/chronicle/got/got-daenerys-lands-at-dragonstone.webp",
        "summary": "Daenerys establishes Dragonstone as the base for her campaign in Westeros."
      },
      {
        "id": "jon-s-true-parentage-revealed",
        "title": "Jon's True Parentage Revealed",
        "period": "Year 304",
        "image": "../assets/images/chronicle/got/got-jon-s-true-parentage-revealed.webp",
        "summary": "Bran and Samwell uncover Jon Snow’s Targaryen parentage."
      },
      {
        "id": "the-wall-falls",
        "title": "The Wall Falls",
        "period": "Year 304",
        "image": "../assets/images/chronicle/got/got-the-wall-falls.webp",
        "summary": "The Night King breaches the Wall, allowing the Army of the Dead into the North."
      },
      {
        "id": "the-dead-walk-south",
        "title": "The Dead Walk South",
        "period": "Year 302",
        "image": "../assets/images/chronicle/got/got-the-dead-walk-south.webp",
        "summary": "Everyone who spent two seasons ignoring the North's warnings suddenly has a great deal of ice to deal with."
      },
      {
        "id": "the-battle-of-winterfell",
        "title": "The Battle of Winterfell",
        "period": "Year 305",
        "image": "../assets/images/chronicle/got/got-the-battle-of-winterfell.webp",
        "summary": "The living armies of Westeros gather at Winterfell to face the Army of the Dead. The battle ends with the Night King destroyed and the immediate supernatural threat defeated, but the surviving leaders emerge with heavy losses and a weakened alliance."
      },
      {
        "id": "the-city-burns",
        "title": "The City Burns",
        "period": "Year 305",
        "image": "../assets/images/chronicle/got/got-the-city-burns.webp",
        "summary": "A war fought in the name of mercy ends with a capital reduced to ash — the kind of victory that leaves the winner with nothing to actually rule."
      },
      {
        "id": "the-throne-melts",
        "title": "The Throne Melts",
        "period": "Year 305",
        "image": "../assets/images/chronicle/got/got-the-throne-melts.webp",
        "summary": "A war fought over a chair ends with the chair gone, and the Seven Kingdoms deciding — for the first time in centuries — to actually vote on who's next."
      }
    ]
  },
  "hotd": {
    "events": [
      {
        "id": "the-great-council-at-harrenhal",
        "title": "The Great Council at Harrenhal",
        "period": "Year 101 AC",
        "image": "../assets/images/chronicle/hotd/hotd-the-great-counsil-at-harrenhal.webp",
        "summary": "The Great Council chooses Viserys as heir, establishing an important succession precedent."
      },
      {
        "id": "aemma-and-baelon-die",
        "title": "Aemma and Baelon Die",
        "period": "Year 101 AC",
        "image": "../assets/images/chronicle/hotd/hotd-aemma-and-baelon-die.webp",
        "summary": "Queen Aemma Arryn dies after a failed childbirth attempt, and the infant Prince Baelon dies soon afterward. The losses leave Viserys without the son he expected to inherit and accelerate the succession crisis that will shape the Targaryen dynasty."
      },
      {
        "id": "an-heir-is-named",
        "title": "An Heir Is Named",
        "period": "Year 105 AC",
        "image": "../assets/images/chronicle/hotd/hotd-an-heir-is-named.webp",
        "summary": "King Viserys I names his daughter Rhaenyra his heir, breaking with a council's earlier ruling that a son should always inherit over a daughter — a decision half the court quietly never accepts."
      },
      {
        "id": "daemon-and-the-dragon-egg",
        "title": "Daemon and the Dragon Egg",
        "period": "Year 105 AC",
        "image": "../assets/images/chronicle/hotd/hotd-daemon-and-the-dragon-egg.webp",
        "summary": "Daemon takes a dragon egg to Dragonstone and declares that he intends to establish a new branch of the royal family. Viserys confronts him, forcing Daemon to return the egg and exposing the continuing struggle between the king’s authority and his brother’s ambitions."
      },
      {
        "id": "a-second-marriage-a-second-family",
        "title": "A Second Marriage, A Second Family",
        "period": "Year 106–120 AC",
        "image": "../assets/images/chronicle/hotd/hotd-a-second-marriage-a-second-family.webp",
        "summary": "Viserys marries Alicent Hightower, who bears him three children of her own. For the next two decades, two competing households quietly compete for a throne that can only go to one line."
      },
      {
        "id": "daemon-takes-the-stepstones",
        "title": "Daemon Takes the Stepstones",
        "period": "Year 106 AC",
        "image": "../assets/images/chronicle/hotd/hotd-daemon-takes-the-stepstones.webp",
        "summary": "Daemon fights the Crabfeeder and helps secure the Stepstones for the Velaryon alliance."
      },
      {
        "id": "rhaenyra-marries-laenor",
        "title": "Rhaenyra Marries Laenor",
        "period": "Year 114 AC",
        "image": "../assets/images/chronicle/hotd/hotd-rhaenyra-marries-laenor.webp",
        "summary": "Rhaenyra marries Laenor Velaryon in a political union designed to strengthen the crown’s relationship with House Velaryon. The marriage creates a powerful alliance, but questions about the parentage of Rhaenyra’s children later become a major source of political conflict."
      },
      {
        "id": "laena-velaryon-dies",
        "title": "Laena Velaryon Dies",
        "period": "Year 120 AC",
        "image": "../assets/images/chronicle/hotd/hotd-laena-velaryon-dies.webp",
        "summary": "Laena Velaryon dies after complications surrounding childbirth."
      },
      {
        "id": "aemond-claims-vhagar",
        "title": "Aemond Claims Vhagar",
        "period": "Year 120 AC",
        "image": "../assets/images/chronicle/hotd/hotd-aemond-claims-vhagar.webp",
        "summary": "After Laena Velaryon dies, Aemond Targaryen secretly approaches Vhagar and succeeds in claiming the ancient dragon. The act gives Aemond enormous military importance and begins a confrontation with the Velaryon children that will remain unresolved."
      },
      {
        "id": "laenor-leaves-westeros",
        "title": "Laenor Leaves Westeros",
        "period": "Year 120 AC",
        "image": "../assets/images/chronicle/hotd/hotd-laenor-leaves-westeros.webp",
        "summary": "Rhaenyra and Daemon arrange for Laenor Velaryon to disappear from public life, allowing him to leave Westeros while the court believes him dead. The decision clears the way for Rhaenyra and Daemon to marry and changes the political structure of the royal family."
      },
      {
        "id": "rhaenyra-and-daemon-marry",
        "title": "Rhaenyra and Daemon Marry",
        "period": "Year 120 AC",
        "image": "../assets/images/chronicle/hotd/hotd-rhaenyra-and-daemon-marry.webp",
        "summary": "Rhaenyra and Daemon marry at Dragonstone soon after Laena’s funeral. Their marriage joins two powerful Targaryen branches and strengthens Rhaenyra’s faction, while also making the rivalry with Alicent’s family more personal."
      },
      {
        "id": "the-greens-and-blacks-take-shape",
        "title": "The Greens and Blacks Take Shape",
        "period": "Year 120 AC",
        "image": "../assets/images/chronicle/hotd/hotd-the-greens-and-blacks-take-shape.webp",
        "summary": "The royal court becomes increasingly divided between supporters of Rhaenyra and supporters of Alicent and her sons. The factions are not yet fighting an open war, but their separate households, alliances and political networks establish the structure that will later become the Dance of the Dragons."
      },
      {
        "id": "the-driftmark-succession-crisis",
        "title": "The Driftmark Succession Crisis",
        "period": "Year 126 AC",
        "image": "../assets/images/chronicle/hotd/hotd-driftmark-succession-crisis.webp",
        "summary": "A dispute over Driftmark exposes the political danger surrounding Rhaenyra’s sons."
      },
      {
        "id": "the-king-dies",
        "title": "The King Dies",
        "period": "Year 129 AC",
        "image": "../assets/images/chronicle/hotd/hotd-the-king-dies.webp",
        "summary": "Viserys I dies. His final words are misheard — or reinterpreted — and by the time Rhaenyra learns her father is gone, Alicent's son has already been crowned in the throne room."
      },
      {
        "id": "aegon-is-crowned",
        "title": "Aegon Is Crowned",
        "period": "Year 129 AC",
        "image": "../assets/images/chronicle/hotd/hotd-aegon-is-crowned.webp",
        "summary": "Team Green moves fast and decisively — Aegon II is crowned before word even reaches Dragonstone. Rhaenyra learns she's been passed over the same day she learns her father is dead."
      },
      {
        "id": "a-prince-falls-from-the-sky",
        "title": "A Prince Falls From the Sky",
        "period": "Year 129 AC",
        "image": "../assets/images/chronicle/hotd/hotd-a-prince-falls-from-the-sky.webp",
        "summary": "Rhaenyra's young son Lucerys dies in a confrontation above Storm's End when Aemond's dragon, the far larger Vhagar, turns a tense standoff into the war's first death."
      },
      {
        "id": "blood-and-cheese",
        "title": "Blood and Cheese",
        "period": "Year 129 AC",
        "image": "../assets/images/chronicle/hotd/hotd-blood-and-cheese.webp",
        "summary": "A revenge attack in the Red Keep kills young Prince Jaehaerys."
      },
      {
        "id": "the-battle-at-rook-s-rest",
        "title": "The Battle at Rook's Rest",
        "period": "Year 129 AC",
        "image": "../assets/images/chronicle/hotd/hotd-the-battle-at-rook-s-rest.webp",
        "summary": "The battle kills Rhaenys and Meleys and leaves Aegon badly wounded."
      },
      {
        "id": "dragonseeds-and-desperation",
        "title": "Dragonseeds and Desperation",
        "period": "Year 130 AC",
        "image": "../assets/images/chronicle/hotd/hotd-dragonseeds-and-desperation.webp",
        "summary": "Both sides start searching for anyone with even a drop of Targaryen blood who might be able to claim one of the realm's several riderless dragons — a sign of how badly the war has already thinned both sides' ranks."
      },
      {
        "id": "the-battle-of-the-gullet",
        "title": "The Battle of the Gullet",
        "period": "Year 130 AC",
        "image": "../assets/images/chronicle/hotd/hotd-the-battle-of-the-gullet.webp",
        "summary": "A major naval and dragon battle causes heavy losses on both sides."
      },
      {
        "id": "rhaenyra-takes-king-s-landing",
        "title": "Rhaenyra Takes King’s Landing",
        "period": "Year 130 AC",
        "image": "../assets/images/chronicle/hotd/hotd-king-s-landing-falls.webp",
        "summary": "Rhaenyra enters King’s Landing after the city’s defenses collapse and takes possession of the Iron Throne. Her occupation gives the Blacks control of the capital, but the war continues elsewhere and the financial and political pressures of ruling the city quickly intensify."
      },
      {
        "id": "the-battle-above-the-god-s-eye",
        "title": "The Battle Above the God's Eye",
        "period": "Year 130 AC",
        "image": "../assets/images/chronicle/hotd/hotd-the-battle-above-the-god-s-eye.webp",
        "summary": "Three dragons meet in the air over a lake at once — one of the only times in the entire war that dragons fight each other directly rather than striking ground targets, and the losses are catastrophic on every side."
      },
      {
        "id": "the-storming-of-the-dragonpit",
        "title": "The Storming of the Dragonpit",
        "period": "Year 130 AC",
        "image": "../assets/images/chronicle/hotd/hotd-storming-of-the-dragonpit.webp",
        "summary": "A riot in King’s Landing leads to the destruction of several dragons and many lives."
      },
      {
        "id": "the-war-turns-again",
        "title": "The War Turns Again",
        "period": "Year 131 AC",
        "image": "../assets/images/chronicle/hotd/hotd-the-war-turns-again.webp",
        "summary": "Rhaenyra's hold on the capital collapses almost as fast as it began. The war grinds on with both claimants' fortunes reversing violently, and the human cost climbing far past what either side started the war willing to pay."
      },
      {
        "id": "a-council-ends-what-dragons-couldn-t",
        "title": "A Council Ends What Dragons Couldn't",
        "period": "Year 131 AC",
        "image": "../assets/images/chronicle/hotd/hotd-a-council-ends-what-dragons-couldn-t.webp",
        "summary": "With both claimants gone and most of the dragons dead, the war finally ends not with a decisive battle but with the surviving lords choosing Rhaenyra and Daemon's young son, Aegon III, as a compromise king — a dynasty that survives, but never quite the same."
      }
    ]
  }
};



const DETAILS={
  "got/houses/house-stark": {
    "section": "House",
    "description": "The Starks are the old northern house of Winterfell, known for duty, endurance and a deep connection to the North. Their words, “Winter Is Coming,” are less a slogan than a warning: survival requires preparation, loyalty and the ability to endure hardship."
  },
  "got/houses/house-lannister": {
    "section": "House",
    "description": "The Lannisters are one of Westeros’s richest and most politically powerful families, ruling from Casterly Rock and using wealth as carefully as armies. Their red-and-gold lion represents pride, ambition and the belief that power must be protected at almost any cost."
  },
  "got/houses/house-targaryen": {
    "section": "House",
    "description": "House Targaryen ruled Westeros for generations after Aegon the Conqueror united the kingdoms with dragons. Their history is filled with spectacular victories, family rivalries and the dangerous idea that royal blood gives a person the right to rule."
  },
  "got/houses/house-baratheon": {
    "section": "House",
    "description": "The Baratheons rose to the Iron Throne after Robert’s Rebellion and became closely tied to the politics of the crown. Their reputation for physical strength and fierce tempers made them formidable, but internal divisions repeatedly weakened the family."
  },
  "got/houses/house-greyjoy": {
    "section": "House",
    "description": "The Greyjoys rule the Iron Islands, where life is shaped by harsh seas, raiding traditions and a culture built around independence. Their ambition is summed up by the phrase “We Do Not Sow”: they prefer taking what they need to depending on the mainland."
  },
  "got/houses/house-tyrell": {
    "section": "House",
    "description": "The Tyrells of Highgarden combine wealth, fertile lands and careful political maneuvering. Unlike houses that rely mainly on military force, they often build influence through alliances and marriage, making them one of the most important players in the struggle for the crown."
  },
  "got/houses/house-martell": {
    "section": "House",
    "description": "House Martell rules Dorne from Sunspear and follows customs that differ from much of the rest of Westeros. The family is famous for patience, pride and a long memory, especially when seeking justice for wrongs committed against the Dornish."
  },
  "got/houses/house-arryn": {
    "section": "House",
    "description": "The Arryns are the ancient rulers of the Vale, protected by mountains and the formidable Eyrie. Their lands are difficult to invade, giving the family a strategic advantage, while their connections to other great houses make them important during succession crises."
  },
  "got/houses/house-tully": {
    "section": "House",
    "description": "House Tully rules the Riverlands from Riverrun, a region positioned between several competing powers. Because the Riverlands sit at the center of so many conflicts, the Tullys are repeatedly forced to choose alliances while trying to protect their people from armies passing through."
  },
  "got/houses/house-bolton": {"section": "House", "description": "House Bolton of the Dreadfort is one of the North's oldest houses and the Starks' historic rivals. The Boltons are remembered for their harsh rule, the flayed-man sigil and their willingness to exploit northern divisions during the War of the Five Kings. Their temporary rise under Roose and Ramsay Bolton ultimately ends with the house's defeat at the Battle of the Bastards."},
  "got/houses/house-mormont": {"section": "House", "description": "House Mormont rules Bear Island in the far North. Though smaller than the great northern houses, the Mormonts are known for fierce independence and loyalty to House Stark. Jeor Mormont serves as Lord Commander of the Night's Watch, while Maege and her daughters defend Bear Island during the wars that consume the North."},
  "got/houses/house-karstark": {"section": "House", "description": "House Karstark descends from House Stark and holds Karhold in the eastern North. Its loyalty to Robb Stark becomes strained after the death of Rickard Karstark's sons, leading to a crisis when Rickard acts against Robb's orders. The episode demonstrates how quickly family loyalty and military necessity can collide during wartime."},
  "got/houses/house-frey": {"section": "House", "description": "House Frey controls the Twins, a strategically vital crossing of the Green Fork. Walder Frey builds the family's influence through marriages and careful alliances, making the house an important player in the Riverlands. Its decision to betray Robb Stark at the Red Wedding becomes one of the most consequential acts of the War of the Five Kings."},
  "got/houses/house-blackwood": {"section": "House", "description": "House Blackwood of Raventree Hall is an ancient Riverlands family locked in a centuries-old feud with House Bracken. The Blackwoods preserve their identity and traditions while repeatedly becoming involved in the wider struggles for the Riverlands. Their long rivalry with the Brackens continues into the Targaryen civil-war era."},
  "got/houses/house-bracken": {"section": "House", "description": "House Bracken of Stone Hedge is the traditional rival of House Blackwood. The feud between the two Riverlands families stretches back generations and repeatedly turns local disputes into bloodshed. During the wars surrounding the Iron Throne, the Brackens use their military position and alliances to protect their interests."},
  "got/houses/house-royce": {"section": "House", "description": "House Royce is one of the oldest and most prominent noble families of the Vale, ruling from Runestone. The family has strong military traditions and longstanding ties to House Arryn. Yohn Royce becomes a prominent supporter of the Stark cause, while the house's ancient bronze armor and runic heritage distinguish it among the Vale's nobles."},
  "got/houses/house-dayne": {"section": "House", "description": "House Dayne is an ancient Dornish house based at Starfall. Its history is closely associated with the legendary sword Dawn and the title Sword of the Morning. Ser Arthur Dayne's reputation as one of the finest knights of his generation gives the family a lasting place in the history of Westeros."},
  "got/houses/house-tarly": {"section": "House", "description": "House Tarly of Horn Hill is one of the Reach's strongest military families. Randyll Tarly is renowned for strict discipline and battlefield skill, while his son Samwell is sent to the Night's Watch after failing to meet his father's expectations. The family's martial reputation makes it an important source of soldiers for competing powers."},
  "got/houses/house-hightower": {"section": "House", "description": "House Hightower rules from Oldtown and is one of the wealthiest families in the Reach. Its power comes from trade, the harbor, the great lighthouse and close relationships with the Citadel and the crown. During the later Targaryen period, the family becomes deeply involved in royal politics through Otto and Alicent Hightower."},
  "got/houses/house-florent": {"section": "House", "description": "House Florent is a noble Reach family with extensive marriage connections to other powerful houses. During the struggle for the Iron Throne, the Florents become associated with Stannis Baratheon's claim through Selyse Florent. Their story illustrates how marriage alliances can draw lesser houses into conflicts over the crown."},
  "got/houses/house-reed": {"section": "House", "description": "House Reed rules the marshes of the Neck from Greywater Watch. The Reeds are small in numbers but possess unmatched knowledge of the bogs and hidden waterways of the region. Howland Reed's loyalty to the Starks and his role in the events surrounding the Tower of Joy make the family important to the deeper history of the North."},
  "got/characters/jon-snow": {
    "section": "Character",
    "description": "Jon Snow begins his story as an outsider at Winterfell and later joins the Night’s Watch, believing that service beyond the Wall will give his life a clear purpose. His experience there changes him, forcing him to understand the threat posed by the White Walkers and the importance of the people he once knew only as enemies."
  },
  "got/characters/daenerys-targaryen": {
    "section": "Character",
    "description": "Daenerys grows from an exiled young woman into a powerful queen with three dragons and a huge following. Her journey is built around liberation, reclaiming her family’s throne and proving that she can rule differently from the kings who came before her. As her power grows, so does the difficult question of what she is willing to do to achieve her vision."
  },
  "got/characters/tyrion-lannister": {
    "section": "Character",
    "description": "Tyrion survives in a world that constantly underestimates him because of his appearance and his family position. His greatest weapons are intelligence, wit and an understanding of political motives. From King’s Landing to exile and war, he repeatedly proves that knowing how people think can be as valuable as knowing how to fight."
  },
  "got/characters/arya-stark": {
    "section": "Character",
    "description": "Arya’s journey is one of survival and transformation. After losing her family’s protection, she learns to travel alone, fight, disguise herself and eventually use the training of the Faceless Men. Beneath all that training, however, remains a strong connection to her identity and her determination to survive on her own terms."
  },
  "got/characters/sansa-stark": {
    "section": "Character",
    "description": "Sansa begins with an idealized view of royal life but is forced to grow quickly after becoming trapped in the politics of King’s Landing. Her experiences teach her patience, observation and political awareness. By the end of her journey, she is no longer simply surviving the game of power; she understands how to play it."
  },
  "got/characters/cersei-lannister": {
    "section": "Character",
    "description": "Cersei is fiercely protective of her children and determined to preserve her family’s position. She uses marriage, fear, alliances and ruthless political calculation to hold power. Her greatest strength is her refusal to surrender, but that same determination repeatedly pushes her toward decisions that isolate her."
  },
  "got/characters/jaime-lannister": {
    "section": "Character",
    "description": "Jaime is introduced as a celebrated knight whose reputation is complicated by the choices he has made for his family. His journey gradually exposes the conflict between honor, loyalty and love. Away from the safety of his family’s influence, he is forced to question the identity he built for himself."
  },
  "got/characters/bran-stark": {
    "section": "Character",
    "description": "Bran’s fall from Winterfell changes his life completely and eventually leads him toward the mystical history of Westeros. As the Three-Eyed Raven, he becomes a keeper of memories and knowledge rather than a conventional warrior. His role becomes especially important because understanding the past is essential to confronting the future."
  },
  "got/dragons/drogon": {
    "section": "Dragon",
    "description": "Drogon is Daenerys Targaryen’s largest and most aggressive dragon, named after Khal Drogo. He becomes a symbol of her return to power and is frequently the most visible expression of her military strength. His size and destructive ability make him terrifying on a battlefield, but his bond with Daenerys is also deeply personal."
  },
  "got/dragons/rhaegal": {
    "section": "Dragon",
    "description": "Rhaegal is one of Daenerys’s three dragons, named after her brother Rhaegar Targaryen. His green-and-bronze appearance distinguishes him from his siblings, while his presence represents the continuation of Targaryen blood and the return of dragons to the world."
  },
  "got/dragons/viserion": {
    "section": "Dragon",
    "description": "Viserion is named after Daenerys’s brother Viserys and is one of the three dragons born from the petrified eggs given to Daenerys. His story becomes especially tragic because he is separated from his siblings and later transformed into a weapon against the living."
  },
  "got/cities/king-s-landing": {
    "section": "City",
    "description": "King’s Landing is the political heart of the Seven Kingdoms and the seat of the Iron Throne. Its crowded streets, royal palace and harbor make it both powerful and vulnerable. Almost every major political struggle eventually reaches the city because controlling King’s Landing means controlling the machinery of government."
  },
  "got/cities/winterfell": {
    "section": "City",
    "description": "Winterfell is the ancestral seat of House Stark and one of the most important strongholds in the North. Its ancient walls, hot springs and position along northern routes make it both a home and a defensive center. For the Stark family, Winterfell represents identity, memory and belonging."
  },
  "got/cities/braavos": {
    "section": "City",
    "description": "Braavos is a wealthy Free City built around canals and islands, famous for trade, ships and the mysterious House of Black and White. It stands outside the politics of the Seven Kingdoms while still influencing events through money, information and highly trained assassins."
  },
  "got/cities/dragonstone": {
    "section": "City",
    "description": "Dragonstone is the ancestral island fortress of House Targaryen, built around volcanic stone and surrounded by the sea. Its association with dragons and Targaryen rule gives it enormous symbolic importance. For claimants to the throne, holding Dragonstone can be a declaration that their royal heritage still matters."
  },
  "got/cities/highgarden": {
    "section": "City",
    "description": "Highgarden is the beautiful and wealthy seat of House Tyrell, surrounded by the fertile lands of the Reach. Its agricultural wealth gives the Tyrells enormous influence because food is one of the most important sources of power during wartime."
  },
  "got/cities/castle-black": {
    "section": "City",
    "description": "Castle Black is the principal headquarters of the Night’s Watch on the Wall. It is less a comfortable castle than a military outpost, responsible for defending the realm from threats beyond the Wall. Its importance becomes clear when the supernatural danger in the North begins to grow."
  },
  "got/cities/meereen": {
    "section": "City",
    "description": "Meereen is one of the great slave cities of Slaver’s Bay and becomes a major test of Daenerys’s ability to govern. Conquering the city is easier than maintaining peace inside it, forcing her to confront the difficult difference between destroying an old system and building a stable new one."
  },
  "got/cities/sunspear": {
    "section": "City",
    "description": "Sunspear is the capital of Dorne and the seat of House Martell. Its desert setting, distinctive architecture and independent culture reflect Dorne’s separation from the traditions of the other kingdoms. It becomes an important center of resistance and political calculation."
  },
  "got/chronicle/a-king-dies-hunting": {
    "section": "Chronicle",
    "description": "King Robert Baratheon’s hunting accident becomes the spark that exposes the instability beneath the royal court. With Robert dying and no secure succession, competing families immediately begin positioning themselves for control. The event matters because the Seven Kingdoms are about to enter a war that had been building quietly for years."
  },
  "got/chronicle/the-king-s-hand-loses-his-head": {
    "section": "Chronicle",
    "description": "Ned Stark’s execution destroys the possibility of a peaceful political settlement and turns the conflict into open war. His death shocks the North and gives Robb Stark the motivation to raise an army. It also demonstrates how quickly the rules of honor can collapse when power is placed above justice."
  },
  "got/chronicle/wildfire-on-the-blackwater": {
    "section": "Chronicle",
    "description": "The Battle of the Blackwater becomes one of the defining battles for control of King’s Landing. Tyrion’s use of wildfire helps destroy much of the attacking fleet, while the defenders struggle to keep the city from falling. The battle proves that strategy, preparation and political alliances can matter as much as raw numbers."
  },
  "got/chronicle/the-north-remembers": {
    "section": "Chronicle",
    "description": "The North continues to resist Lannister control even after Robb Stark’s campaign is broken. The phrase captures the idea that political defeat does not automatically erase loyalty or memory. Northern resistance later becomes part of the larger effort to restore the Stark family and reclaim Winterfell."
  },
  "got/chronicle/a-queen-crosses-the-sea": {
    "section": "Chronicle",
    "description": "Daenerys’s arrival in Westeros marks the moment her long exile finally turns into a direct struggle for the throne. She brings dragons, armies and a claim based on Targaryen blood, but she also discovers that Westeros is more complicated than the political world she left behind."
  },
  "got/chronicle/the-dead-walk-south": {
    "section": "Chronicle",
    "description": "The Army of the Dead finally breaks through the Wall and brings the supernatural threat directly into the Seven Kingdoms. Former enemies must reconsider old rivalries because the danger is no longer a distant legend. The event changes the war from a contest for political power into a fight for survival."
  },
  "got/chronicle/two-battles-one-bastard": {
    "section": "Chronicle",
    "description": "Jon Snow’s battles against the forces surrounding Winterfell and the larger armies of the realm highlight his transformation from an uncertain outsider into a central military leader. His victories carry a cost, but they also help restore Stark influence in the North."
  },
  "got/chronicle/the-city-burns": {
    "section": "Chronicle",
    "description": "The destruction of King’s Landing becomes one of the darkest turning points of the war. Victory is achieved through overwhelming force, but the civilian cost changes how allies and enemies view the person who ordered it. The event shows how the pursuit of absolute victory can destroy the legitimacy a ruler hopes to gain."
  },
  "got/chronicle/the-throne-melts": {
    "section": "Chronicle",
    "description": "The Iron Throne is destroyed after the final struggle for power, ending the physical symbol around which generations of rulers fought. Instead of immediately crowning another hereditary monarch, the surviving leaders choose a new political arrangement. The moment closes the cycle of conquest, rebellion and succession that defined the story."
  },
  "hotd/houses/house-targaryen": {
    "section": "House",
    "description": "House Targaryen is the ruling dynasty at the center of the Dance of the Dragons. Its greatest strength is also its greatest danger: dragons give the family unmatched military power, but the question of succession turns that power inward. The civil war shows how quickly a royal family can become its own worst enemy."
  },
  "hotd/houses/house-hightower": {
    "section": "House",
    "description": "House Hightower is one of the richest and most influential families in Westeros, based in Oldtown. The family builds power through wealth, learning, political relationships and proximity to the royal court. During the succession crisis, the Hightowers become central players in deciding who controls the throne."
  },
  "hotd/houses/house-velaryon": {
    "section": "House",
    "description": "House Velaryon is a powerful seafaring family whose wealth comes from ships, trade and control of Driftmark. Corlys Velaryon’s ambition brings the family close to the Targaryen succession, while its navy gives whichever side it supports a major strategic advantage."
  },
  "hotd/houses/house-strong": {
    "section": "House",
    "description": "House Strong of Harrenhal becomes deeply connected to the royal succession through Lyonel Strong and his sons. Their story shows how dangerous proximity to the throne can be: political success can bring influence, but it can also make a family the target of suspicion, rivalry and revenge."
  },
  "hotd/houses/house-stark": {"section": "House", "description": "House Stark is the ancient ruling dynasty of the North. During the Dance of the Dragons, Lord Cregan Stark eventually commits northern forces to Rhaenyra's cause, fulfilling the North's political obligations while demonstrating how difficult it is for distant houses to remain outside a succession war."},
  "hotd/houses/house-arryn": {"section": "House", "description": "House Arryn rules the Vale from the Eyrie and is connected to the Targaryen succession through Rhaenyra's family ties. The Vale's mountains make it a formidable region to invade, while its troops and resources become important to Rhaenyra as the civil war spreads across Westeros."},
  "hotd/houses/house-baratheon": {"section": "House", "description": "House Baratheon rules the Stormlands from Storm's End. Its position between the Crownlands and the southern kingdoms makes the house strategically important during the Dance. The Baratheons become involved in the succession struggle as competing sides seek the support of the great houses."},
  "hotd/houses/house-blackwood": {"section": "House", "description": "House Blackwood of Raventree Hall supports Rhaenyra during the Dance. Its ancient feud with House Bracken turns the Riverlands into a place where the larger Targaryen conflict and a much older local rivalry become intertwined, producing repeated clashes between the two houses."},
  "hotd/houses/house-bracken": {"section": "House", "description": "House Bracken of Stone Hedge supports Aegon II's Green faction during the Dance. Its rivalry with House Blackwood is centuries old, and the civil war gives that feud a new political dimension as both families fight on opposite sides of the Targaryen succession."},
  "hotd/houses/house-celtigar": {"section": "House", "description": "House Celtigar is an ancient Valyrian family based on Claw Isle in the Crownlands. Its Valyrian heritage connects it to the Targaryens, while its location near Dragonstone gives it strategic importance during the civil war. The house is associated with Rhaenyra's Black faction."},
  "hotd/houses/house-beesbury": {"section": "House", "description": "House Beesbury is a Reach house whose lord, Lyman Beesbury, serves on King Viserys I's small council. His opposition to the secret plan to crown Aegon places the family directly in the succession crisis. The house's involvement shows how even council decisions can become matters of life and death during the Dance."},
  "hotd/houses/house-mooton": {"section": "House", "description": "House Mooton rules Maidenpool in the Riverlands. Its position on the coast and along important routes gives it strategic value during the Dance, when armies and fleets compete for control of the region. The Mootons become involved in the shifting alliances surrounding Rhaenyra's claim."},
  "hotd/houses/house-cole": {"section": "House", "description": "House Cole is a lesser Crownlands family whose most famous member is Ser Criston Cole. Criston's rise from an ordinary knight to Lord Commander of the Kingsguard and a leading Green commander gives the house an outsized place in the history of the Dance. His personal conflict with Rhaenyra becomes intertwined with the wider succession struggle."},
  "hotd/houses/house-westerling": {"section": "House", "description": "House Westerling is an old Westerlands family whose members serve the Targaryen crown. Ser Harrold Westerling serves as Lord Commander of the Kingsguard during the succession crisis and remains closely connected to the royal household. The family's story reflects the role of sworn service in the politics of the Dance."},
  "hotd/houses/house-massey": {"section": "House", "description": "House Massey is a Crownlands family whose lands lie close to Dragonstone. Its geographic position makes its allegiance valuable to the Black faction, especially as Rhaenyra seeks to secure the lands surrounding her stronghold and maintain access to the capital."},
  "hotd/houses/house-darklyn": {"section": "House", "description": "House Darklyn is an ancient Crownlands family based at Duskendale. Its lands sit close to King's Landing, placing the house near the center of royal politics. The Darklyns' history demonstrates how the Crownlands' smaller houses can become strategically important when the Targaryen succession breaks down."},
  "hotd/houses/house-royce": {"section": "House", "description": "House Royce is one of the Vale's leading families and a powerful regional force during the Dance. Its ancient lineage and military strength reinforce House Arryn's position, while the Royce family's support helps connect the Vale to Rhaenyra's wider coalition."},
  "hotd/houses/house-swann": {"section": "House", "description": "House Swann of Stonehelm is a notable Stormlands family. The house's lands and military position place it within the network of Stormlands nobles whose allegiance matters to the competing Targaryen factions. Its story illustrates how the Dance draws even established regional houses into the succession crisis."},
  "hotd/characters/rhaenyra-targaryen": {
    "section": "Character",
    "description": "Rhaenyra is named heir by her father Viserys and spends much of her life defending that decision. She grows from a rebellious young princess into a determined claimant who understands that inheritance alone may not be enough to secure power. The civil war forces her to balance family loyalty, motherhood and the brutal demands of kingship."
  },
  "hotd/characters/daemon-targaryen": {
    "section": "Character",
    "description": "Daemon is Viserys’s younger brother, a skilled warrior and one of the most unpredictable members of the Targaryen family. He is ambitious, impulsive and fiercely loyal to the people he considers his own. His relationship with Rhaenyra becomes central to the succession struggle and brings both strength and volatility to her claim."
  },
  "hotd/characters/king-viserys-i": {
    "section": "Character",
    "description": "Viserys I wants peace and stability after becoming king, and he tries to preserve his family by refusing to let old disagreements become open war. His decision to name Rhaenyra heir is historically important, but his failure to secure a universally accepted succession plan leaves the realm dangerously divided after his death."
  },
  "hotd/characters/alicent-hightower": {
    "section": "Character",
    "description": "Alicent begins as a close companion to Rhaenyra but becomes queen after marrying Viserys. As her children grow, her fears about their safety and inheritance intensify. She becomes one of the key figures behind the Green faction, believing that placing her son on the throne is necessary to protect her family."
  },
  "hotd/characters/aegon-ii-targaryen": {
    "section": "Character",
    "description": "Aegon II becomes king when the Greens crown him after Viserys’s death, despite Rhaenyra being the named heir. He is not naturally suited to the enormous responsibility placed upon him, and the war gradually transforms him into a hardened and damaged ruler. His claim becomes one of the central causes of the civil war."
  },
  "hotd/characters/aemond-targaryen": {
    "section": "Character",
    "description": "Aemond is one of the most formidable warriors of the Targaryen civil war and rides Vhagar, the largest living dragon. His desire to prove himself and his long-running rivalry with Rhaenyra’s family make him a dangerous force. His actions repeatedly turn political tension into irreversible bloodshed."
  },
  "hotd/characters/otto-hightower": {
    "section": "Character",
    "description": "Otto Hightower is a highly experienced political operator who serves as Hand of the King. He views royal succession through the lens of stability and his family’s security, and he works carefully to place Aegon on the throne. His ability to plan several moves ahead makes him one of the Greens’ most important strategists."
  },
  "hotd/characters/corlys-velaryon": {
    "section": "Character",
    "description": "Corlys Velaryon, known as the Sea Snake, builds House Velaryon into an extraordinary maritime power. His ambition leads him to seek a stronger place for his family within the royal succession. Even when his personal plans fail, his ships, wealth and experience make him one of the most valuable allies in the war."
  },
  "hotd/characters/rhaenys-targaryen": {
    "section": "Character",
    "description": "Rhaenys is a Targaryen princess who once had a serious claim to the throne but was passed over in favor of Viserys. That history gives her a unique understanding of the injustice and uncertainty surrounding succession. She becomes a powerful supporter of Rhaenyra while carrying the memory of what her own family lost."
  },
  "hotd/characters/criston-cole": {
    "section": "Character",
    "description": "Criston Cole rises from a relatively modest background to become a respected knight and eventually Lord Commander of the Kingsguard. His personal history with Rhaenyra becomes tangled with resentment, pride and politics. He ultimately becomes one of the Green faction’s most aggressive military leaders."
  },
  "hotd/dragons/syrax": {
    "section": "Dragon",
    "description": "Syrax is Rhaenyra Targaryen’s dragon and one of the clearest symbols of her royal identity. She is not known primarily as a battlefield predator like Vhagar, but her bond with Rhaenyra represents the ancient connection between Targaryen rulers and dragons. Syrax is especially important as Rhaenyra’s claim moves from ceremony into war."
  },
  "hotd/dragons/caraxes": {
    "section": "Dragon",
    "description": "Caraxes, the Blood Wyrm, is Daemon Targaryen’s fearsome red dragon. His unusual shape and aggressive nature make him an intimidating presence in battle. Caraxes is closely associated with Daemon’s reckless courage, and together they become one of the most dangerous combinations on Rhaenyra’s side."
  },
  "hotd/dragons/vhagar": {
    "section": "Dragon",
    "description": "Vhagar is the largest and oldest of the major dragons active during the Dance of the Dragons. Having survived for generations, she represents the overwhelming destructive power available to the Targaryens. Under Aemond’s control, Vhagar becomes a decisive weapon whose presence can change the balance of an entire battle."
  },
  "hotd/dragons/meleys": {
    "section": "Dragon",
    "description": "Meleys, the Red Queen, is ridden by Rhaenys Targaryen and is among the fastest and most experienced dragons of the era. Her reputation gives Rhaenys significant military power, while her fate demonstrates how costly the civil war becomes when dragons are turned against members of the same family."
  },
  "hotd/dragons/sunfyre": {
    "section": "Dragon",
    "description": "Sunfyre is Aegon II’s golden dragon, famous for his striking appearance and close association with the king. Although admired for his beauty, Sunfyre becomes involved in the brutal reality of the civil war. His injuries and survival mirror the physical and political damage suffered by Aegon himself."
  },
  "hotd/dragons/dreamfyre": {
    "section": "Dragon",
    "description": "Dreamfyre is an older dragon associated with the Targaryen royal family and ridden by Helaena. She is less prominent as a battlefield weapon than Vhagar or Caraxes, but her existence reflects the deep connection between the royal family and the dwindling population of living dragons."
  },
  "hotd/dragons/seasmoke": {"section":"Dragon","description":"Seasmoke is a pale-grey dragon formerly bonded to Laenor Velaryon. During the Dance, the dragon accepts Addam of Hull, making Seasmoke an important part of Rhaenyra’s search for experienced dragonriders."},
  "hotd/dragons/vermax": {"section":"Dragon","description":"Vermax is Jacaerys Velaryon’s dragon. Still young compared with the great war dragons, Vermax is closely associated with Jace’s diplomatic missions and his role as Rhaenyra’s heir."},
  "hotd/dragons/arrax": {"section":"Dragon","description":"Arrax is Lucerys Velaryon’s young dragon. His encounter with Vhagar at Storm’s End becomes one of the defining tragedies that turns the succession dispute into open vengeance."},
  "hotd/dragons/moondancer": {"section":"Dragon","description":"Moondancer is Baela Targaryen’s swift young dragon. Though much smaller than Vhagar, her speed gives Baela an important advantage when the war reaches its later stages."},
  "hotd/dragons/tyraxes": {"section":"Dragon","description":"Tyraxes is the young dragon associated with Joffrey Velaryon. His story reflects the younger generation of Targaryens growing up with dragonriding as part of their inheritance."},
  "hotd/dragons/stormcloud": {"section":"Dragon","description":"Stormcloud is the young dragon of Aegon the Younger. His ability to carry his rider becomes especially important as members of Rhaenyra’s family struggle to survive the war."},
  "hotd/dragons/vermithor": {"section":"Dragon","description":"Vermithor, the Bronze Fury, is one of the largest and oldest dragons available during the Dance. His size makes finding a compatible rider a major opportunity for the Blacks."},
  "hotd/dragons/silverwing": {"section":"Dragon","description":"Silverwing is an ancient silver dragon who becomes one of the dragons claimed during the search for dragonseeds. Her history stretches back to an earlier generation of Targaryen riders."},
  "hotd/dragons/tessarion": {"section":"Dragon","description":"Tessarion, the Blue Queen, is Daeron Targaryen’s dragon. She becomes an important Green weapon as Daeron campaigns in the Reach and the civil war spreads across Westeros."},
  "hotd/dragons/sheepstealer": {"section":"Dragon","description":"Sheepstealer is a wild dragon that avoids ordinary Targaryen control and feeds on livestock. Nettles eventually earns the dragon’s trust, creating one of the most unusual rider-and-dragon bonds of the Dance."},
  "hotd/dragons/cannibal": {"section":"Dragon","description":"Cannibal is the most feared of Dragonstone’s wild dragons. He is known for eating other dragons, their eggs and their remains, and no confirmed rider ever controls him."},
  "hotd/dragons/grey-ghost": {"section":"Dragon","description":"Grey Ghost is a shy wild dragon that lives around Dragonstone. His pale colouring and avoidance of people give him the name by which the island’s inhabitants remember him."},
  "hotd/dragons/shrykos": {"section":"Dragon","description":"Shrykos is a young dragon belonging to Prince Jaehaerys Targaryen. Still too young for the role of a mature war dragon, Shrykos represents the vulnerable younger generation caught in the Dance."},
  "hotd/dragons/morghul": {"section":"Dragon","description":"Morghul is a young dragon associated with Princess Jaehaera Targaryen. Morghul is part of the royal family’s younger generation and is caught up in the violence surrounding the Targaryen succession crisis."},
  "hotd/dragons/balerion": {"section":"Dragon","description":"Balerion the Black Dread was the enormous dragon ridden by Aegon the Conqueror and later by other Targaryens. Although Balerion died long before the Dance, his legacy remains central to the history of Targaryen power."},
  "hotd/dragons/meraxes": {"section":"Dragon","description":"Meraxes was one of Aegon the Conqueror’s three great dragons and was ridden by Queen Rhaenys Targaryen. Her death occurred generations before the Dance, but she remains an important part of the dynasty’s earlier dragon history."},
  "hotd/dragons/quicksilver": {"section":"Dragon","description":"Quicksilver was the young dragon of Aegon the Uncrowned during an earlier Targaryen succession conflict. The dragon’s history shows that disputes over the throne and dragon power existed long before the Dance."},
  "hotd/dragons/morning": {"section":"Dragon","description":"Morning is a pink dragon that bonds with Rhaena Targaryen after the Dance. Her appearance represents the survival and continuation of the Targaryen dragon line after the civil war."},
  "hotd/cities/king-s-landing": {
    "section": "City",
    "description": "King’s Landing is the center of royal government and the place where the succession crisis becomes a struggle for immediate control. The Red Keep, council chambers and surrounding city all become part of the political battlefield. Whoever controls the capital can claim the appearance of legitimacy, even when the succession itself is disputed."
  },
  "hotd/cities/dragonstone": {
    "section": "City",
    "description": "Dragonstone is the traditional seat of the Targaryen heir and the base from which Rhaenyra organizes her claim. Its volcanic landscape and ancient Targaryen symbolism make it more than a fortress; it is a physical statement that the old royal succession still has a living claimant."
  },
  "hotd/cities/driftmark": {
    "section": "City",
    "description": "Driftmark is the island seat of House Velaryon and a center of naval power. Its importance comes from both its location and its wealthy seafaring family. During the civil war, control of Driftmark and its fleet can influence supply routes and determine how quickly armies and messages can move."
  },
  "hotd/cities/oldtown": {
    "section": "City",
    "description": "Oldtown is one of the oldest and most important cities in Westeros, home to the Hightowers and the Citadel. Its scholars, wealth and religious institutions give it influence far beyond its walls. Because House Hightower is deeply involved in the succession crisis, Oldtown becomes an important source of political and logistical power."
  },
  "hotd/cities/harrenhal": {
    "section": "City",
    "description": "Harrenhal is a colossal but cursed-looking fortress in the Riverlands, famous for its enormous size and dark history. Its strategic position makes it valuable during war, while its association with House Strong ties it directly to the political struggle. Controlling Harrenhal means gaining a powerful base in the center of the realm."
  },
  "hotd/cities/storm-s-end": {
    "section": "City",
    "description": "Storm’s End is the ancient Baratheon stronghold and one of the most important castles in the stormlands. Its loyalty matters because the Baratheons can provide soldiers and political legitimacy to a claimant. The castle becomes especially significant when rival envoys attempt to secure support during the succession crisis."
  },
  "hotd/chronicle/an-heir-is-named": {
    "section": "Chronicle",
    "description": "Viserys I publicly names Rhaenyra as his heir after the death of his son. The decision is meant to provide certainty, but it creates a precedent that becomes increasingly difficult to defend once Viserys later has sons. Rhaenyra’s appointment is the foundation of her claim and the source of the Greens’ eventual challenge."
  },
  "hotd/chronicle/a-second-marriage-a-second-family": {
    "section": "Chronicle",
    "description": "Viserys marries Alicent Hightower and begins a second family of royal children. The marriage changes the balance of power at court because Alicent’s sons now have a direct connection to the throne. What begins as a family decision eventually becomes the central succession conflict of the realm."
  },
  "hotd/chronicle/the-king-dies": {
    "section": "Chronicle",
    "description": "Viserys’s death removes the one person capable of keeping the competing branches of his family together. The Greens move quickly to crown Aegon, while Rhaenyra’s supporters prepare to defend her inheritance. His death transforms years of tension into an open contest for the Iron Throne."
  },
  "hotd/chronicle/aegon-is-crowned": {
    "section": "Chronicle",
    "description": "Aegon II is crowned in King’s Landing by the Green faction, creating a rival monarchy while Rhaenyra is still the named heir. The speed of the coronation is politically important because it gives the Greens control of the capital and allows them to present Aegon as the lawful king."
  },
  "hotd/chronicle/a-prince-falls-from-the-sky": {
    "section": "Chronicle",
    "description": "The death of Lucerys Velaryon after his encounter with Aemond and Vhagar turns political rivalry into personal vengeance. The loss convinces many characters that reconciliation is no longer possible. From this point, the war becomes increasingly brutal as both sides seek retaliation."
  },
  "hotd/chronicle/dragonseeds-and-desperation": {
    "section": "Chronicle",
    "description": "As the war intensifies, both sides need more dragons and riders to survive. The search for people with Targaryen blood who might bond with unclaimed dragons becomes a desperate gamble. The effort shows how the Greens and Blacks are forced to use every advantage available as their traditional royal dragons are lost."
  },
  "hotd/chronicle/the-battle-above-the-god-s-eye": {
    "section": "Chronicle",
    "description": "Daemon Targaryen and Aemond Targaryen finally meet in one of the most dramatic dragon confrontations of the war. Riding Caraxes and Vhagar, they carry a personal rivalry into the sky above the God’s Eye. The encounter is devastating for both sides and becomes a defining moment in the history of the Dance."
  },
  "hotd/chronicle/king-s-landing-falls": {
    "section": "Chronicle",
    "description": "Rhaenyra’s forces eventually take King’s Landing, giving the Blacks control of the capital and the Iron Throne. Yet capturing the city does not end the war. Political resistance, economic pressure and the continued existence of rival forces show that occupying the capital is very different from securing lasting rule."
  },
  "hotd/chronicle/the-war-turns-again": {
    "section": "Chronicle",
    "description": "The fortunes of the Greens and Blacks repeatedly reverse as dragons, armies and alliances disappear. Victories become temporary and even successful commanders struggle to maintain control. The shifting balance demonstrates how the Dance destroys the stability that both factions originally claimed they were fighting to protect."
  },
  "hotd/chronicle/a-council-ends-what-dragons-couldn-t": {
    "section": "Chronicle",
    "description": "After the greatest violence of the Dance, a political council helps bring the conflict toward an end. The settlement demonstrates an important truth of the civil war: dragons can win battles, but they cannot create lasting legitimacy or peace. Westeros must eventually return to negotiation and political compromise."
  }
  ,"got/chronicle/the-whispering-wood": {"section":"Chronicle","description":"Robb Stark divides his army and strikes the Lannister forces in the Riverlands. The victory at the Whispering Wood captures Jaime Lannister and gives Robb a major military advantage while confirming that the northern campaign has become a serious threat to the crown."}
  ,"got/chronicle/theon-takes-winterfell": {"section":"Chronicle","description":"Theon Greyjoy captures Winterfell while Robb is campaigning in the south. The seizure of the Stark stronghold fractures northern authority and forces the remaining Stark allies to deal with a crisis behind their own lines."}
  ,"got/chronicle/the-red-wedding": {"section":"Chronicle","description":"Robb Stark, Catelyn Stark and many of their followers are killed at the Twins after House Frey and its allies turn against them. The massacre destroys the main Stark military campaign and dramatically changes control of the Riverlands and North."}
  ,"got/chronicle/the-purple-wedding": {"section":"Chronicle","description":"Joffrey Baratheon dies during his wedding feast to Margaery Tyrell. The death creates another succession crisis in King's Landing and leads to Tyrion Lannister being accused of the murder."}
  ,"got/chronicle/hardhome": {"section":"Chronicle","description":"Jon Snow witnesses the scale of the White Walker threat at Hardhome when the settlement is attacked and thousands of people are killed or raised among the dead. The encounter provides direct evidence that the supernatural threat is moving south."}
  ,"got/chronicle/daenerys-lands-at-dragonstone": {"section":"Chronicle","description":"Daenerys Targaryen reaches Dragonstone and establishes her base for the campaign in Westeros. The return of a Targaryen claimant with dragons, Unsullied and Dothraki turns the struggle for the Iron Throne into a new phase."}
  ,"got/chronicle/the-wall-falls": {"section":"Chronicle","description":"The Army of the Dead breaches the Wall at Eastwatch after the Night King gains the undead Viserion. The ancient barrier that had separated Westeros from the White Walkers is no longer intact, allowing the army to move into the North."}
  ,"got/chronicle/jons-true-parentage-revealed": {"section":"Chronicle","description":"Evidence from Bran Stark and Samwell Tarly establishes that Jon Snow is the son of Rhaegar Targaryen and Lyanna Stark. The revelation changes the succession question by giving Jon a Targaryen identity and a claim connected to the royal line."}
  ,"hotd/chronicle/the-great-council-at-harrenhal": {"section":"Chronicle","description":"The Great Council at Harrenhal chooses Viserys Targaryen to succeed King Jaehaerys I. The decision establishes an important precedent in the succession debate because the lords choose a male claimant over the elder female line represented by Rhaenys."}
  ,"hotd/chronicle/daemon-takes-the-stepstones": {"section":"Chronicle","description":"Daemon Targaryen joins the campaign against the Crabfeeder and the Triarchy in the Stepstones. After years of pressure, the conflict ends with Daemon defeating Craghas Drahar and strengthening his reputation as a military commander."}
  ,"hotd/chronicle/laena-velaryon-dies": {"section":"Chronicle","description":"Laena Velaryon dies after complications surrounding the birth of her child. Her death leaves Daemon without his second wife and creates another major loss for House Velaryon and the wider Targaryen family."}
  ,"hotd/chronicle/the-driftmark-succession-crisis": {"section":"Chronicle","description":"A dispute over the inheritance of Driftmark brings questions about Lucerys Velaryon's parentage into the royal court. Vaemond Velaryon challenges the succession and is killed after directly questioning the legitimacy of Rhaenyra's sons."}
  ,"hotd/chronicle/blood-and-cheese": {"section":"Chronicle","description":"Following Lucerys's death, Daemon arranges a revenge attack inside the Red Keep. Blood and Cheese locate Aegon and Helaena's children and kill Prince Jaehaerys, deepening the cycle of retaliation between the two branches of the royal family."}
  ,"hotd/chronicle/the-battle-at-rooks-rest": {"section":"Chronicle","description":"The Greens attack Rhaenys Targaryen and her dragon Meleys at Rook's Rest. A coordinated assault involving Aegon and Aemond leaves Meleys and Rhaenys dead and Aegon badly injured, while the battle demonstrates the destructive cost of using dragons in open war."}
  ,"hotd/chronicle/the-battle-of-the-gullet": {"section":"Chronicle","description":"A major naval and dragon battle erupts in the Gullet as the Blacks attempt to protect vital shipping and supply routes. The fighting causes heavy losses among fleets, soldiers and dragons and further weakens the Targaryen forces."}
  ,"hotd/chronicle/the-storming-of-the-dragonpit": {"section":"Chronicle","description":"Crowds in King's Landing turn against the remaining dragons and storm the Dragonpit. Several dragons and many people die in the chaos, marking a catastrophic loss of the creatures that had defined Targaryen power for generations."}
  ,"got/chronicle/brans-fall": {"section":"Chronicle","description":"Bran Stark survives a fall from a tower at Winterfell after witnessing a secret involving Jaime and Cersei Lannister. The injury leaves Bran unable to walk and becomes the first major event that sends the Stark family onto separate paths."}
  ,"got/chronicle/the-tourney-at-harrenhal": {"section":"Chronicle","description":"The great tournament at Harrenhal brings together many of the leading nobles of Westeros shortly before Robert’s Rebellion. The gathering exposes political tensions and contributes to the chain of events surrounding Lyanna Stark and Prince Rhaegar Targaryen."}
  ,"got/chronicle/battle-of-the-fist": {"section":"Chronicle","description":"The Night’s Watch is attacked beyond the Wall by the Army of the Dead. Many brothers are killed, the survivors retreat south, and Jon Snow gains direct experience of the supernatural threat that is gathering beyond the Wall."}
  ,"got/chronicle/mutiny-at-crasters-keep": {"section":"Chronicle","description":"Members of the Night’s Watch mutiny at Craster’s Keep after the death of Jeor Mormont. The violence destroys the leadership of the expedition and leaves Jon Snow and the surviving brothers facing both the mutineers and the dangers beyond the Wall."}
  ,"got/chronicle/battle-of-castle-black": {"section":"Chronicle","description":"Mance Rayder’s army attacks Castle Black while the Night’s Watch attempts to defend the Wall. Jon Snow helps organize the defense, and the battle demonstrates that the Watch can still hold the Wall despite severe losses."}
  ,"got/chronicle/the-hound-and-the-brotherhood": {"section":"Chronicle","description":"Sandor Clegane’s path crosses repeatedly with the Brotherhood Without Banners as the war leaves the Riverlands filled with displaced people and competing forces. His encounters gradually move him away from the identity of a royal enforcer and toward an uncertain search for purpose."}
  ,"got/chronicle/arya-returns-to-westeros": {"section":"Chronicle","description":"After years of training in Braavos, Arya Stark returns to Westeros and begins settling old scores. Her return marks the point where the Stark children are no longer simply surviving separately and begins the process of rebuilding the family’s position in the North."}
  ,"got/chronicle/the-battle-of-winterfell": {"section":"Chronicle","description":"The living armies of Westeros gather at Winterfell to face the Army of the Dead. The battle ends with the Night King destroyed and the immediate supernatural threat defeated, but the surviving leaders emerge with heavy losses and a weakened alliance."}
  ,"hotd/chronicle/aemma-and-baelon-die": {"section":"Chronicle","description":"Queen Aemma Arryn dies after a failed childbirth attempt, and the infant Prince Baelon dies soon afterward. The losses leave Viserys without the son he expected to inherit and accelerate the succession crisis that will shape the Targaryen dynasty."}
  ,"hotd/chronicle/daemon-and-the-dragon-egg": {"section":"Chronicle","description":"Daemon takes a dragon egg to Dragonstone and declares that he intends to establish a new branch of the royal family. Viserys confronts him, forcing Daemon to return the egg and exposing the continuing struggle between the king’s authority and his brother’s ambitions."}
  ,"hotd/chronicle/rhaenyra-marries-laenor": {"section":"Chronicle","description":"Rhaenyra marries Laenor Velaryon in a political union designed to strengthen the crown’s relationship with House Velaryon. The marriage creates a powerful alliance, but questions about the parentage of Rhaenyra’s children later become a major source of political conflict."}
  ,"hotd/chronicle/aemond-claims-vhagar": {"section":"Chronicle","description":"After Laena Velaryon dies, Aemond Targaryen secretly approaches Vhagar and succeeds in claiming the ancient dragon. The act gives Aemond enormous military importance and begins a confrontation with the Velaryon children that will remain unresolved."}
  ,"hotd/chronicle/laenor-leaves-westeros": {"section":"Chronicle","description":"Rhaenyra and Daemon arrange for Laenor Velaryon to disappear from public life, allowing him to leave Westeros while the court believes him dead. The decision clears the way for Rhaenyra and Daemon to marry and changes the political structure of the royal family."}
  ,"hotd/chronicle/rhaenyra-and-daemon-marry": {"section":"Chronicle","description":"Rhaenyra and Daemon marry at Dragonstone soon after Laena’s funeral. Their marriage joins two powerful Targaryen branches and strengthens Rhaenyra’s faction, while also making the rivalry with Alicent’s family more personal."}
  ,"hotd/chronicle/the-greens-and-blacks-form": {"section":"Chronicle","description":"The royal court becomes increasingly divided between supporters of Rhaenyra and supporters of Alicent and her sons. The factions are not yet fighting an open war, but their separate households, alliances and political networks establish the structure that will later become the Dance of the Dragons."}
  ,"hotd/chronicle/rhaenyra-takes-kings-landing": {"section":"Chronicle","description":"Rhaenyra enters King’s Landing after the city’s defenses collapse and takes possession of the Iron Throne. Her occupation gives the Blacks control of the capital, but the war continues elsewhere and the financial and political pressures of ruling the city quickly intensify."}
};
 

