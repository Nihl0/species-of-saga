
Hooks.on("setup", () => {
    const WFRP4E = game.wfrp4e.config

    // Species
    WFRP4E.species = {
        "human": "Human",
        "rogatyy": "Rogatyy",
        "guzik": "Guzik",
        "drude": "Drude",
    };

    WFRP4E.subspecies = {
        human: {
            arnsmen: {
                name: "Arnsmen",
                skills: [
                    "Consume Alcohol",
                    "Entertain (Storytelling)",
                    "Evaluate",
                    "Gossip",
                    "Haggle",
                    "Language (Arnsmen)",
                    "Lore (Northshore)",
                    "Melee (Basic)",
                    "Ranged (Bow)",
                    "Sail (Any)",
                    "Swim",
                    "Trade (choose one)"
                ],
                talents: [
                    "Doomed, random[1]",
                    "Fisherman, Warrior Born",
                    "Stout-hearted, Very Resilient",
                    2
                ]
            },
            ashen: {
                name: "Ashen",
                skills: [
                    "Consume Alcohol",
                    "Climb",
                    "Cool",
                    "Endurance",
                    "Entertain (Sing)",
                    "Intimidate",
                    "Language (Arnsmen)",
                    "Language (Rogatyy)",
                    "Lore (Rogatyy)",
                    "Lore (Geology)",
                    "Lore (Metallurgy)",
                    "Melee (Basic)"
                ],
                talents: [
                    "Hardy, Sixth Sense",
                    "Night Vision",
                    "Stout-hearted, Strong-minded",
                    2
                ]
            },
            hinterlander: {
                name: "Hinterlander",
                skills: [
                    "Bribery",
                    "Charm",
                    "Evaluate",
                    "Gossip",
                    "Haggle",
                    "Language (Arnsmen)",
                    "Leadership",
                    "Lore (Hinterlands)",
                    "Melee (Basic)",
                    "Outdoor Survival",
                    "Ranged (Bow)",
                    "Trade (choose one)"
                ],
                talents: [
                    "Doomed, random[1]",
                    "Etiquette (choose group), Strong Back",
                    3
                ]
            },
            pavise: {
                name: "Pavise",
                skills: [
                    "Animal Care",
                    "Charm",
                    "Cool",
                    "Entertain (Any)",
                    "Gossip",
                    "Haggle",
                    "Language (Arnsmen)",
                    "Language (Pavise)",
                    "Language (Thien)",
                    "Lore (Any)",
                    "Melee (Basic)",
                    "Ranged (Crossbow)"
                ],
                talents: [
                    "Argumentative, Rover",
                    "Coolheaded, Suave",
                    3
                ]
            },
            thien: {
                name: "Thien",
                skills: [
                    "Charm",
                    "Cool",
                    "Evaluate",
                    "Gossip",
                    "Language (Pavise)",
                    "Language (Thien)",
                    "Leadership",
                    "Lore (Thien)",
                    "Melee (Basic)",
                    "Outdoor Survival",
                    "Ranged (Bow)",
                    "Swim"
                ],
                talents: [
                    "Doomed",
                    "Read/Write, Very Resilient",
                    "Savvy, Suave",
                    2
                ]
            },
        },
        guzik: {
            domovoy: {
                name: "Domovoy",
                skills: [
                    "Charm",
                    "Dodge",
                    "Endurance",
                    "Intuition",
                    "Entertain (Any)",
                    "Language (Guzik)",
                    "Lore (Herbs)",
                    "Outdoor Survival",
                    "Perception",
                    "Ranged (Any)",
                    "Stealth (Any)",
                    "Trade (Cook)"
                ],
                talents: [
                    "Acute Sense (Sight)",
                    "Hardy, Stone Soup",
                    "Luck",
                    "Resistance (Disease)",
                    "Small",
                    1
                ]
            },
            vilenjak: {
                name: "Vilenjak",
                skills: [
                    "Channelling (Ulgu)",
                    "Charm",
                    "Consume Alcohol",
                    "Dodge",
                    "Entertain (Any)",
                    "Language (Guzik)",
                    "Lore (Herbs)",
                    "Outdoor Survival",
                    "Perception",
                    "Ranged (Any)",
                    "Stealth (Any)",
                    "Trade (Cook)"
                ],
                talents: [
                    "Acute Sense (Sight)",
                    "Resistance (Disease)",
                    "Second Sight, Sixth Sense",
                    "Small",
                    "Suffused with Ulgu",
                    1
                ]
            },
        } 
    }

    WFRP4E.speciesCharacteristics = {
        "human": {
            "ws": "2d10+20",
            "bs": "2d10+20",
            "s": "2d10+20",
            "t": "2d10+20",
            "i": "2d10+20",
            "ag": "2d10+20",
            "dex": "2d10+20",
            "int": "2d10+20",
            "wp": "2d10+20",
            "fel": "2d10+20"
        },
        "rogatyy": {
            "ws": "2d10+20",
            "bs": "2d10+10",
            "s": "2d10+35",
            "t": "2d10+35",
            "i": "2d10",
            "ag": "2d10+15",
            "dex": "2d10+10",
            "int": "2d10+10",
            "wp": "2d10+20",
            "fel": "2d10+10"
        },
        "guzik": {
            "ws": "2d10+20",
            "bs": "2d10+10",
            "s": "2d10+10",
            "t": "2d10+15",
            "i": "2d10+30",
            "ag": "2d10+30",
            "dex": "2d10+30",
            "int": "2d10+30",
            "wp": "2d10+40",
            "fel": "2d10+15"
        },
        "drude": {
            "ws": "2d10+30",
            "bs": "2d10+30",
            "s": "2d10+20",
            "t": "2d10+20",
            "i": "2d10+40",
            "ag": "2d10+30",
            "dex": "2d10+30",
            "int": "2d10+30",
            "wp": "2d10+30",
            "fel": "2d10+20"
        },
    }

    WFRP4E.speciesSkills = {
        "human": [
            "Animal Care",
            "Charm",
            "Cool",
            "Evaluate",
            "Gossip",
            "Haggle",
            "Language (Arnsmen)",
            "Language (Thien)",
            "Lore (Local)",
            "Melee (Basic)",
            "Outdoor Survival",
            "Ranged (Bow)"
        ],
        "rogatyy": [
            "Athletics",
            "Cool",
            "Endurance",
            "Intimidate",
            "Language (Rogatyy)",
            "Lore (Rogatyy)",
            "Lore (Geology)",
            "Lore (Metallurgy)",
            "Melee (Basic)",
            "Melee (Brawling)",
            "Navigation",
            "Outdoor Survival"
        ],
        "guzik": [
            "Charm",
            "Consume Alcohol",
            "Dodge",
            "Entertain (Any)",
            "Haggle",
            "Intuition",
            "Language (Guzik)",
            "Lore (Herbs)",
            "Outdoor Survival",
            "Perception",
            "Stealth (Any)",
            "Trade (Cook)"
        ],
        "drude": [
            "Athletics",
            "Climb",
            "Endurance",
            "Intimidate",
            "Language (Eltharin)",
            "Melee (Basic)",
            "Navigation",
            "Outdoor Survival",
            "Perception",
            "Ranged (Bow)",
            "Stealth (Rural)",
            "Track"
        ],
    }

    WFRP4E.speciesTalents = {
        "human": [
            "Doomed",
            "Savvy, Suave",
            3
        ],
        "rogatyy": [
            "Large",
            "Magic Resistance",
            "Resistance (Poison (Ingested))",
            "Very Resilient, Very Strong",
            "Sturdy",
            0
        ],
        "guzik": [
            "Acute Sense (Sight)",
            "Luck",
            "Resistance (Disease)",
            "Small",
            2
        ],
        "drude": [
            "Acute Sense (Sight)",
            "Hardy, Sixth Sense",
            "Night Vision",
            "Read/Write, Very Resilient",
            "Rover",
            0
        ]
    }

    WFRP4E.speciesMovement = {
        "human": 4,
        "rogatyy": 6,
        "guzik": 3,
        "drude": 5,
    }

    WFRP4E.speciesFate = {
        "human": 2,
        "rogatyy": 0,
        "guzik": 2,
        "drude": 0,
    }

    WFRP4E.speciesRes = {
        "human": 1,
        "rogatyy": 3,
        "guzik": 0,
        "drude": 0,
    }

    WFRP4E.speciesExtra = {
        "human": 3,
        "rogatyy": 1,
        "guzik": 2,
        "drude": 2
    }

    WFRP4E.speciesAge = {
        "human": "15+1d10",
        "rogatyy": "20+10d10",
        "guzik": "15+5d10",
        "drude": "30+10d10",
    }

    WFRP4E.speciesHeight = {
        "human": {
            feet: 4,
            inches: 9,
            die: "2d10"
        },
        "rogatyy": {
            feet: 7,
            inches: 7,
            die: "1d10"
        },
        "guzik": {
            feet: 3,
            inches: 1,
            die: "1d10"
        },
        "drude": {
            feet: 5,
            inches: 11,
            die: "1d10"
        },
    }
})