const defaultVerbs = [
    { 
        base: "begin", 
        past: "began", 
        participle: "begun", 
        meaning: "başlamak", 
        pronunciation: {
            base: "bigin",
            past: "bigan",
            participle: "bigʌn"
        },
        image: "https://example.com/begin.jpg",
        category: "learning",
        sentences: {
            base: "I begin my work at 9 AM.",
            past: "I began my work early today.",
            participle: "My work has begun."
        }
    },
    { 
        base: "bring", 
        past: "brought", 
        participle: "brought", 
        meaning: "getirmek", 
        pronunciation: {
            base: "brinğ",
            past: "brot",
            participle: "bawt"
        },
        image: "https://example.com/bring.jpg",
        category: "learning",
        sentences: {
            base: "I bring my lunch to work.",
            past: "I brought my lunch yesterday.",
            participle: "My lunch has been brought."
        }
    },
    { 
        base: "buy", 
        past: "bought", 
        participle: "bought", 
        meaning: "satın almak", 
        pronunciation: {
            base: "bay",
            past: "bawt",
            participle: "bawt"
        },
        image: "https://example.com/buy.jpg",
        category: "learned",
        sentences: {
            base: "I buy a book.",
            past: "I bought a book last week.",
            participle: "The book has been bought."
        }
    },
    { 
        base: "catch", 
        past: "caught", 
        participle: "caught", 
        meaning: "yakalamak", 
        pronunciation: {
            base: "keç",
            past: "kawt",
            participle: "kawt"
        },
        image: "https://example.com/catch.jpg",
        category: "learning",
        sentences: {
            base: "I catch the bus every day.",
            past: "I caught the bus yesterday.",
            participle: "The bus has been caught."
        }
    },
    { 
        base: "choose", 
        past: "chose", 
        participle: "chosen", 
        meaning: "seçmek", 
        pronunciation: {
            base: "çuz",
            past: "çouz",
            participle: "çozın"
        },
        image: "https://example.com/choose.jpg",
        category: "learned",
        sentences: {
            base: "I choose a movie.",
            past: "I chose a movie last night.",
            participle: "The movie has been chosen."
        }
    },
    { 
        base: "come", 
        past: "came", 
        participle: "come", 
        meaning: "gelmek", 
        pronunciation: {
            base: "kam",
            past: "keym",
            participle: "kam"
        },
        image: "https://example.com/come.jpg",
        category: "learning",
        sentences: {
            base: "I come home at 6 PM.",
            past: "I came home late yesterday.",
            participle: "I have come home."
        }
    },
    {
        base: "be",
        past: "was/were",
        participle: "been",
        meaning: "olmak",
        pronunciation: {
            base: "bi",
            past: "waz/wör",
            participle: "biin"
        },
        image: "https://example.com/be.jpg",
        category: "pending",
        sentences: {
            base: "I am happy.",
            past: "I was happy yesterday.",
            participle: "I have been happy lately."
        }
    },
    {
        base: "break",
        past: "broke",
        participle: "broken",
        meaning: "kırmak",
        pronunciation: {
            base: "breyk",
            past: "broʊk",
            participle: "broʊkın"
        },
        image: "https://example.com/break.jpg",
        category: "pending",
        sentences: {
            base: "I break the glass.",
            past: "I broke the glass yesterday.",
            participle: "The glass has been broken."
        }
    },
    { 
        base: "arise", 
        past: "arose", 
        participle: "arisen", 
        meaning: "ortaya çıkmak, doğmak", 
        pronunciation: {
        base: "ıraayz",
        past: "ırouz",
        participle: "ırizın"
        },
        image: "https://example.com/arise.jpg",
        category: "learning",
        sentences: {
        base: "Problems arise when we ignore details.",
        past: "A problem arose yesterday during the meeting.",
        participle: "Many issues have arisen since last year."
        }
    },
    { 
        base: "awake", 
        past: "awoke", 
        participle: "awoken", 
        meaning: "uyanmak", 
        pronunciation: {
        base: "ıueyk",
        past: "ıuouk",
        participle: "ıuokın"
        },
        image: "https://example.com/awake.jpg",
        category: "learning",
        sentences: {
        base: "I awake early every morning.",
        past: "I awoke at 6 AM yesterday.",
        participle: "She has awoken suddenly in the night."
        }
    },
    { 
        base: "bear", 
        past: "bore", 
        participle: "borne", 
        meaning: "katlanmak, taşımak", 
        pronunciation: {
        base: "beeır",
        past: "boor",
        participle: "boorn"
        },
        image: "https://example.com/bear.jpg",
        category: "learning",
        sentences: {
        base: "I can't bear the noise anymore.",
        past: "She bore the pain with courage.",
        participle: "The weight has been borne by the workers."
        }
    },
    { 
        base: "beat", 
        past: "beat", 
        participle: "beaten", 
        meaning: "dövmek, yenmek", 
        pronunciation: {
        base: "biit",
        past: "biit",
        participle: "biitın"
        },
        image: "https://example.com/beat.jpg",
        category: "learning",
        sentences: {
        base: "I beat the drum loudly.",
        past: "Our team beat them yesterday.",
        participle: "They have been beaten twice this season."
        }
    },
    { 
        base: "become", 
        past: "became", 
        participle: "become", 
        meaning: "olmak, haline gelmek", 
        pronunciation: {
        base: "bikam",
        past: "bikeym",
        participle: "bikam"
        },
        image: "https://example.com/become.jpg",
        category: "learning",
        sentences: {
        base: "I want to become a doctor.",
        past: "He became a famous actor.",
        participle: "She has become more confident."
        }
    },
    { 
        base: "bend", 
        past: "bent", 
        participle: "bent", 
        meaning: "bükmek, eğmek", 
        pronunciation: {
        base: "bend",
        past: "bent",
        participle: "bent"
        },
        image: "https://example.com/bend.jpg",
        category: "learning",
        sentences: {
        base: "I bend the wire carefully.",
        past: "He bent the rules to help his friend.",
        participle: "The road has bent to the left."
        }
    },
    { 
        base: "bet", 
        past: "bet", 
        participle: "bet", 
        meaning: "bahse girmek", 
        pronunciation: {
        base: "bet",
        past: "bet",
        participle: "bet"
        },
        image: "https://example.com/bet.jpg",
        category: "learning",
        sentences: {
        base: "I bet 10 dollars on the game.",
        past: "She bet all her money last night.",
        participle: "He has bet on many matches before."
        }
    },
     { 
    base: "bind", 
    past: "bound", 
    participle: "bound", 
    meaning: "bağlamak", 
    pronunciation: {
      base: "baynd",
      past: "baund",
      participle: "baund"
    },
    image: "https://example.com/bind.jpg",
    category: "learning",
    sentences: {
      base: "I bind the papers together.",
      past: "He bound the books with a rope.",
      participle: "The package has been bound tightly."
    }
  },
  { 
    base: "bite", 
    past: "bit", 
    participle: "bitten", 
    meaning: "ısırmak", 
    pronunciation: {
      base: "bayt",
      past: "bit",
      participle: "bitın"
    },
    image: "https://example.com/bite.jpg",
    category: "learning",
    sentences: {
      base: "Dogs sometimes bite strangers.",
      past: "He bit the apple.",
      participle: "I have been bitten by a mosquito."
    }
  },
  { 
    base: "bleed", 
    past: "bled", 
    participle: "bled", 
    meaning: "kanamak", 
    pronunciation: {
      base: "bliid",
      past: "bled",
      participle: "bled"
    },
    image: "https://example.com/bleed.jpg",
    category: "learning",
    sentences: {
      base: "I bleed when I cut my finger.",
      past: "His nose bled after the fight.",
      participle: "The wound has bled a lot."
    }
  },
  { 
    base: "blow", 
    past: "blew", 
    participle: "blown", 
    meaning: "üflemek / esmek", 
    pronunciation: {
      base: "blo",
      past: "blu",
      participle: "bloun"
    },
    image: "https://example.com/blow.jpg",
    category: "learning",
    sentences: {
      base: "I blow out the candles.",
      past: "The wind blew all night.",
      participle: "The window has been blown open."
    }
  },
  { 
    base: "build", 
    past: "built", 
    participle: "built", 
    meaning: "inşa etmek", 
    pronunciation: {
      base: "bild",
      past: "bilt",
      participle: "bilt"
    },
    image: "https://example.com/build.jpg",
    category: "learning",
    sentences: {
      base: "They build houses near the river.",
      past: "He built a new garage.",
      participle: "Many bridges have been built here."
    }
  },
  { 
    base: "burn", 
    past: "burnt/burned", 
    participle: "burnt/burned", 
    meaning: "yanmak / yakmak", 
    pronunciation: {
      base: "börn",
      past: "börnt/börnd",
      participle: "börnt/börnd"
    },
    image: "https://example.com/burn.jpg",
    category: "learning",
    sentences: {
      base: "Fires burn in the forest.",
      past: "He burnt his hand on the stove.",
      participle: "The house has burned down."
    }
  }, { 
        base: "cut", 
        past: "cut", 
        participle: "cut", 
        meaning: "kesmek", 
        pronunciation: {
            base: "kat",
            past: "kat",
            participle: "kat"
        },
        image: "https://example.com/cut.jpg",
        category: "learning",
        sentences: {
            base: "I cut the paper with scissors.",
            past: "I cut my finger yesterday.",
            participle: "The tree has been cut."
        }
    },
    { 
        base: "deal", 
        past: "dealt", 
        participle: "dealt", 
        meaning: "anlaşmak / uğraşmak", 
        pronunciation: {
            base: "diil",
            past: "delt",
            participle: "delt"
        },
        image: "https://example.com/deal.jpg",
        category: "learning",
        sentences: {
            base: "I deal with many problems at work.",
            past: "She dealt with the issue calmly.",
            participle: "He has dealt with this before."
        }
    },
    { 
        base: "dig", 
        past: "dug", 
        participle: "dug", 
        meaning: "kazmak", 
        pronunciation: {
            base: "dig",
            past: "dag",
            participle: "dag"
        },
        image: "https://example.com/dig.jpg",
        category: "learning",
        sentences: {
            base: "They dig a hole in the garden.",
            past: "He dug a tunnel under the house.",
            participle: "A big hole has been dug here."
        }
    },
    { 
        base: "do", 
        past: "did", 
        participle: "done", 
        meaning: "yapmak", 
        pronunciation: {
            base: "duu",
            past: "did",
            participle: "dan"
        },
        image: "https://example.com/do.jpg",
        category: "learning",
        sentences: {
            base: "I do my homework every day.",
            past: "I did my best in the exam.",
            participle: "I have done the dishes."
        }
    },
    { 
        base: "draw", 
        past: "drew", 
        participle: "drawn", 
        meaning: "çizmek", 
        pronunciation: {
            base: "droo",
            past: "druu",
            participle: "droon"
        },
        image: "https://example.com/draw.jpg",
        category: "learning",
        sentences: {
            base: "I draw a picture of a cat.",
            past: "She drew a beautiful flower.",
            participle: "He has drawn many sketches."
        }
    },
    { 
        base: "dream", 
        past: "dreamt/dreamed", 
        participle: "dreamt/dreamed", 
        meaning: "rüya görmek / hayal etmek", 
        pronunciation: {
            base: "driim",
            past: "dremt / driimd",
            participle: "dremt / driimd"
        },
        image: "https://example.com/dream.jpg",
        category: "learning",
        sentences: {
            base: "I dream about traveling the world.",
            past: "He dreamt of becoming a pilot.",
            participle: "She has dreamed of this day."
        }
    },
    { 
        base: "drink", 
        past: "drank", 
        participle: "drunk", 
        meaning: "içmek", 
        pronunciation: {
            base: "drink",
            past: "dränk",
            participle: "drank"
        },
        image: "https://example.com/drink.jpg",
        category: "learning",
        sentences: {
            base: "I drink water every morning.",
            past: "She drank a glass of milk.",
            participle: "He has drunk too much coffee."
        }
    },
    { 
        base: "drive", 
        past: "drove", 
        participle: "driven", 
        meaning: "sürmek", 
        pronunciation: {
            base: "drayv",
            past: "droov",
            participle: "drivın"
        },
        image: "https://example.com/drive.jpg",
        category: "learning",
        sentences: {
            base: "I drive to work every day.",
            past: "He drove across the country.",
            participle: "She has driven this car before."
        }
    },
    { 
        base: "cost", 
        past: "cost", 
        participle: "cost", 
        meaning: "maliyeti olmak", 
        pronunciation: {
            base: "kost",
            past: "kost",
            participle: "kost"
        },
        image: "https://example.com/cost.jpg",
        category: "learning",
        sentences: {
            base: "This phone costs a lot of money.",
            past: "The trip cost us too much.",
            participle: "The repairs have cost a fortune."
        }
    },
    { 
        base: "feel", 
        past: "felt", 
        participle: "felt", 
        meaning: "hissetmek", 
        pronunciation: {
            base: "fiil",
            past: "felt",
            participle: "felt"
        },
        image: "https://example.com/feel.jpg",
        category: "learning",
        sentences: {
            base: "I feel happy today.",
            past: "He felt tired after work.",
            participle: "I have felt this way before."
        }
    },
    { 
        base: "fight", 
        past: "fought", 
        participle: "fought", 
        meaning: "dövüşmek / kavga etmek", 
        pronunciation: {
            base: "fayt",
            past: "foht",
            participle: "foht"
        },
        image: "https://example.com/fight.jpg",
        category: "learning",
        sentences: {
            base: "They fight every day.",
            past: "The soldiers fought bravely.",
            participle: "They have fought many battles."
        }
    },
    { 
        base: "forget", 
        past: "forgot", 
        participle: "forgotten", 
        meaning: "unutmak", 
        pronunciation: {
            base: "forget",
            past: "fırgat",
            participle: "fırgatın"
        },
        image: "https://example.com/forget.jpg",
        category: "learning",
        sentences: {
            base: "I often forget names.",
            past: "She forgot her homework.",
            participle: "I have forgotten your phone number."
        }
    },
    { 
        base: "eat", 
        past: "ate", 
        participle: "eaten", 
        meaning: "yemek", 
        pronunciation: {
            base: "iit",
            past: "eet",
            participle: "iitın"
        },
        image: "https://example.com/eat.jpg",
        category: "learning",
        sentences: {
            base: "I eat an apple every morning.",
            past: "I ate pizza yesterday.",
            participle: "I have eaten sushi before."
        }
    },
    { 
        base: "fall", 
        past: "fell", 
        participle: "fallen", 
        meaning: "düşmek", 
        pronunciation: {
            base: "fol",
            past: "fel",
            participle: "folın"
        },
        image: "https://example.com/fall.jpg",
        category: "learning",
        sentences: {
            base: "Leaves fall in autumn.",
            past: "He fell off the bike.",
            participle: "The vase has fallen from the table."
        }
    },
    { 
        base: "feed", 
        past: "fed", 
        participle: "fed", 
        meaning: "beslemek", 
        pronunciation: {
            base: "fiid",
            past: "fed",
            participle: "fed"
        },
        image: "https://example.com/feed.jpg",
        category: "learning",
        sentences: {
            base: "I feed my dog every day.",
            past: "She fed the baby an hour ago.",
            participle: "The animals have been fed."
        }
    },
    { 
        base: "find", 
        past: "found", 
        participle: "found", 
        meaning: "bulmak", 
        pronunciation: {
            base: "faynd",
            past: "faund",
            participle: "faund"
        },
        image: "https://example.com/find.jpg",
        category: "learning",
        sentences: {
            base: "I find this book interesting.",
            past: "She found a wallet on the street.",
            participle: "I have found my keys."
        }
    },
    { 
        base: "fly", 
        past: "flew", 
        participle: "flown", 
        meaning: "uçmak", 
        pronunciation: {
            base: "flay",
            past: "flu",
            participle: "flovn"
        },
        image: "https://example.com/fly.jpg",
        category: "learning",
        sentences: {
            base: "Birds fly in the sky.",
            past: "He flew to London last week.",
            participle: "They have flown across the ocean."
        }
    },
    { 
    base: "forgive", 
    past: "forgave", 
    participle: "forgiven", 
    meaning: "affetmek", 
    pronunciation: {
      base: "forgiv",
      past: "forgeyv",
      participle: "forgivın"
    },
    image: "https://example.com/forgive.jpg",
    category: "learning",
    sentences: {
      base: "I forgive you for your mistake.",
      past: "She forgave her friend yesterday.",
      participle: "He has forgiven his brother."
    }
  },
  { 
    base: "freeze", 
    past: "froze", 
    participle: "frozen", 
    meaning: "donmak", 
    pronunciation: {
      base: "friiz",
      past: "fırouz",
      participle: "frouzın"
    },
    image: "https://example.com/freeze.jpg",
    category: "learning",
    sentences: {
      base: "Water freezes at 0°C.",
      past: "The lake froze last winter.",
      participle: "The food is frozen."
    }
  },
  { 
    base: "get", 
    past: "got", 
    participle: "got/gotten", 
    meaning: "almak", 
    pronunciation: {
      base: "get",
      past: "gat",
      participle: "gat/gatın"
    },
    image: "https://example.com/get.jpg",
    category: "learning",
    sentences: {
      base: "I get many emails every day.",
      past: "She got a gift yesterday.",
      participle: "They have gotten better results."
    }
  },
  { 
    base: "give", 
    past: "gave", 
    participle: "given", 
    meaning: "vermek", 
    pronunciation: {
      base: "giv",
      past: "geyiv",
      participle: "givın"
    },
    image: "https://example.com/give.jpg",
    category: "learning",
    sentences: {
      base: "I give money to charity.",
      past: "He gave me a book.",
      participle: "She has given her opinion."
    }
  },
  { 
    base: "go", 
    past: "went", 
    participle: "gone", 
    meaning: "gitmek", 
    pronunciation: {
      base: "go",
      past: "went",
      participle: "gon"
    },
    image: "https://example.com/go.jpg",
    category: "learning",
    sentences: {
      base: "I go to school every day.",
      past: "We went to the park yesterday.",
      participle: "They have gone to Italy."
    }
  },
  { 
    base: "grow", 
    past: "grew", 
    participle: "grown", 
    meaning: "büyümek", 
    pronunciation: {
      base: "grou",
      past: "gru",
      participle: "groun"
    },
    image: "https://example.com/grow.jpg",
    category: "learning",
    sentences: {
      base: "Plants grow quickly in summer.",
      past: "The child grew fast last year.",
      participle: "My hair has grown long."
    }
  },
  { 
    base: "hang", 
    past: "hung", 
    participle: "hung", 
    meaning: "asmak", 
    pronunciation: {
      base: "heng",
      past: "hang",
      participle: "hang"
    },
    image: "https://example.com/hang.jpg",
    category: "learning",
    sentences: {
      base: "I hang my coat on the wall.",
      past: "He hung the picture yesterday.",
      participle: "The shirts are hung neatly."
    }
  },
  { 
    base: "have", 
    past: "had", 
    participle: "had", 
    meaning: "sahip olmak", 
    pronunciation: {
      base: "hev",
      past: "hed",
      participle: "hed"
    },
    image: "https://example.com/have.jpg",
    category: "learning",
    sentences: {
      base: "I have two cats.",
      past: "She had a car last year.",
      participle: "We have had a busy day."
    }
  },
  { 
    base: "hear", 
    past: "heard", 
    participle: "heard", 
    meaning: "duymak", 
    pronunciation: {
      base: "hiır",
      past: "hıörd",
      participle: "hıörd"
    },
    image: "https://example.com/hear.jpg",
    category: "learning",
    sentences: {
      base: "I hear music from the room.",
      past: "She heard the news yesterday.",
      participle: "They have heard this story before."
    }
  },
  { 
    base: "hide", 
    past: "hid", 
    participle: "hidden", 
    meaning: "saklamak", 
    pronunciation: {
      base: "hayd",
      past: "hid",
      participle: "hidın"
    },
    image: "https://example.com/hide.jpg",
    category: "learning",
    sentences: {
      base: "I hide the key under the mat.",
      past: "He hid behind the tree.",
      participle: "The treasure is hidden."
    }
  },
  { 
    base: "hit", 
    past: "hit", 
    participle: "hit", 
    meaning: "vurmak", 
    pronunciation: {
      base: "hit",
      past: "hit",
      participle: "hit"
    },
    image: "https://example.com/hit.jpg",
    category: "learning",
    sentences: {
      base: "I hit the ball with the bat.",
      past: "He hit the wall by mistake.",
      participle: "The car has hit the pole."
    }
  },
  { 
    base: "hold", 
    past: "held", 
    participle: "held", 
    meaning: "tutmak", 
    pronunciation: {
      base: "hould",
      past: "held",
      participle: "held"
    },
    image: "https://example.com/hold.jpg",
    category: "learning",
    sentences: {
      base: "I hold my bag tightly.",
      past: "She held the baby gently.",
      participle: "They have held many meetings."
    }
  },
  { 
    base: "hurt", 
    past: "hurt", 
    participle: "hurt", 
    meaning: "incitmek, acıtmak", 
    pronunciation: {
        base: "hört",
        past: "hört",
        participle: "hört"
    },
    image: "https://example.com/hurt.jpg",
    category: "learning",
    sentences: {
        base: "I hurt my finger.",
        past: "She hurt her knee yesterday.",
        participle: "His feelings have been hurt."
    }
},
{ 
    base: "keep", 
    past: "kept", 
    participle: "kept", 
    meaning: "tutmak, saklamak", 
    pronunciation: {
        base: "kiip",
        past: "kept",
        participle: "kept"
    },
    image: "https://example.com/keep.jpg",
    category: "learning",
    sentences: {
        base: "I keep my money in a wallet.",
        past: "He kept his promise.",
        participle: "The store has kept its prices low."
    }
},
{ 
    base: "know", 
    past: "knew", 
    participle: "known", 
    meaning: "bilmek, tanımak", 
    pronunciation: {
        base: "nov",
        past: "nüv",
        participle: "non"
    },
    image: "https://example.com/know.jpg",
    category: "learning",
    sentences: {
        base: "I know the answer.",
        past: "She knew the truth.",
        participle: "He has known her for years."
    }
},
{ 
    base: "lay", 
    past: "laid", 
    participle: "laid", 
    meaning: "koymak, sermek", 
    pronunciation: {
        base: "ley",
        past: "leyd",
        participle: "leyd"
    },
    image: "https://example.com/lay.jpg",
    category: "learning",
    sentences: {
        base: "I lay the book on the table.",
        past: "He laid the baby in the crib.",
        participle: "She has laid the plates on the table."
    }
},
{ 
    base: "lead", 
    past: "led", 
    participle: "led", 
    meaning: "öncülük etmek, yol göstermek", 
    pronunciation: {
        base: "liid",
        past: "led",
        participle: "led"
    },
    image: "https://example.com/lead.jpg",
    category: "learning",
    sentences: {
        base: "I lead the team.",
        past: "She led the group to success.",
        participle: "He has led many projects."
    }
},
{ 
    base: "leave", 
    past: "left", 
    participle: "left", 
    meaning: "ayrılmak, bırakmak", 
    pronunciation: {
        base: "liiv",
        past: "left",
        participle: "left"
    },
    image: "https://example.com/leave.jpg",
    category: "learning",
    sentences: {
        base: "I leave home at 8 AM.",
        past: "She left the office early.",
        participle: "He has left his bag here."
    }
},
{ 
    base: "lend", 
    past: "lent", 
    participle: "lent", 
    meaning: "ödünç vermek", 
    pronunciation: {
        base: "lend",
        past: "lent",
        participle: "lent"
    },
    image: "https://example.com/lend.jpg",
    category: "learning",
    sentences: {
        base: "I lend money to my friend.",
        past: "She lent me her book.",
        participle: "He has lent his car before."
    }
},
{ 
    base: "let", 
    past: "let", 
    participle: "let", 
    meaning: "izin vermek", 
    pronunciation: {
        base: "let",
        past: "let",
        participle: "let"
    },
    image: "https://example.com/let.jpg",
    category: "learning",
    sentences: {
        base: "I let him use my phone.",
        past: "She let the children play outside.",
        participle: "They have let us stay here."
    }
},
{ 
    base: "lie", 
    past: "lied", 
    participle: "lied", 
    meaning: "yalan söylemek", 
    pronunciation: {
        base: "lay",
        past: "layd",
        participle: "layd"
    },
    image: "https://example.com/lie_lie.jpg",
    category: "learning",
    sentences: {
        base: "I never lie to my friends.",
        past: "He lied about his age.",
        participle: "She has lied many times."
    }
},
{ 
    base: "lie", 
    past: "lay", 
    participle: "lain", 
    meaning: "uzanmak, yatmak", 
    pronunciation: {
        base: "lay",
        past: "ley",
        participle: "leyn"
    },
    image: "https://example.com/lie_lay.jpg",
    category: "learning",
    sentences: {
        base: "I lie on the bed.",
        past: "He lay on the grass.",
        participle: "She has lain there for hours."
    }
},
{ 
    base: "lose", 
    past: "lost", 
    participle: "lost", 
    meaning: "kaybetmek", 
    pronunciation: {
        base: "luuz",
        past: "lost",
        participle: "lost"
    },
    image: "https://example.com/lose.jpg",
    category: "learning",
    sentences: {
        base: "I lose my keys often.",
        past: "She lost her phone yesterday.",
        participle: "He has lost his wallet again."
    }
},
{ 
    base: "make", 
    past: "made", 
    participle: "made", 
    meaning: "yapmak", 
    pronunciation: {
        base: "meyk",
        past: "meyd",
        participle: "meyd"
    },
    image: "https://example.com/make.jpg",
    category: "learning",
    sentences: {
        base: "I make a cake every Sunday.",
        past: "I made a cake yesterday.",
        participle: "I have made many cakes."
    }
},
{ 
    base: "mean", 
    past: "meant", 
    participle: "meant", 
    meaning: "anlamına gelmek", 
    pronunciation: {
        base: "miin",
        past: "ment",
        participle: "ment"
    },
    image: "https://example.com/mean.jpg",
    category: "learning",
    sentences: {
        base: "What does this word mean?",
        past: "That word meant a lot to me.",
        participle: "It has meant different things over time."
    }
},
{ 
    base: "meet", 
    past: "met", 
    participle: "met", 
    meaning: "buluşmak, tanışmak", 
    pronunciation: {
        base: "miit",
        past: "met",
        participle: "met"
    },
    image: "https://example.com/meet.jpg",
    category: "learning",
    sentences: {
        base: "I meet new people at work.",
        past: "I met him last year.",
        participle: "We have met before."
    }
},
{ 
    base: "pay", 
    past: "paid", 
    participle: "paid", 
    meaning: "ödemek", 
    pronunciation: {
        base: "pey",
        past: "peyd",
        participle: "peyd"
    },
    image: "https://example.com/pay.jpg",
    category: "learning",
    sentences: {
        base: "I pay my bills online.",
        past: "I paid the rent yesterday.",
        participle: "I have already paid the fee."
    }
},
{ 
    base: "put", 
    past: "put", 
    participle: "put", 
    meaning: "koymak", 
    pronunciation: {
        base: "put",
        past: "put",
        participle: "put"
    },
    image: "https://example.com/put.jpg",
    category: "learning",
    sentences: {
        base: "I put the keys on the table.",
        past: "I put the book on the shelf.",
        participle: "I have put everything in place."
    }
},
{ 
    base: "read", 
    past: "read", 
    participle: "read", 
    meaning: "okumak", 
    pronunciation: {
        base: "riid",
        past: "red",
        participle: "red"
    },
    image: "https://example.com/read.jpg",
    category: "learning",
    sentences: {
        base: "I read books every night.",
        past: "I read three books last week.",
        participle: "I have read that book before."
    }
},
{ 
    base: "ride", 
    past: "rode", 
    participle: "ridden", 
    meaning: "binmek (at, bisiklet, motor)", 
    pronunciation: {
        base: "rayd",
        past: "roud",
        participle: "ridın"
    },
    image: "https://example.com/ride.jpg",
    category: "learning",
    sentences: {
        base: "I ride my bike to school.",
        past: "I rode a horse yesterday.",
        participle: "I have ridden a camel once."
    }
},
{ 
    base: "ring", 
    past: "rang", 
    participle: "rung", 
    meaning: "çalmak (zil, telefon)", 
    pronunciation: {
        base: "ring",
        past: "reng",
        participle: "rang"
    },
    image: "https://example.com/ring.jpg",
    category: "learning",
    sentences: {
        base: "I ring the bell when I arrive.",
        past: "The phone rang a minute ago.",
        participle: "The bell has rung twice today."
    }
},
{ 
    base: "rise", 
    past: "rose", 
    participle: "risen", 
    meaning: "yükselmek, doğmak", 
    pronunciation: {
        base: "rayz",
        past: "rouz",
        participle: "rizın"
    },
    image: "https://example.com/rise.jpg",
    category: "learning",
    sentences: {
        base: "The sun rises in the east.",
        past: "The sun rose early this morning.",
        participle: "The sun has risen above the mountains."
    }
},
{ 
    base: "run", 
    past: "ran", 
    participle: "run", 
    meaning: "koşmak", 
    pronunciation: {
        base: "ran",
        past: "ren",
        participle: "ran"
    },
    image: "https://example.com/run.jpg",
    category: "learning",
    sentences: {
        base: "I run every morning.",
        past: "I ran five kilometers yesterday.",
        participle: "I have run a marathon once."
    }
},
{ 
    base: "say", 
    past: "said", 
    participle: "said", 
    meaning: "söylemek", 
    pronunciation: {
        base: "sey",
        past: "sed",
        participle: "sed"
    },
    image: "https://example.com/say.jpg",
    category: "learning",
    sentences: {
        base: "I say hello to everyone.",
        past: "She said she was tired.",
        participle: "They have said it many times."
    }
},
{ 
    base: "see", 
    past: "saw", 
    participle: "seen", 
    meaning: "görmek", 
    pronunciation: {
        base: "sii",
        past: "soo",
        participle: "siin"
    },
    image: "https://example.com/see.jpg",
    category: "learning",
    sentences: {
        base: "I see the stars at night.",
        past: "I saw him yesterday.",
        participle: "I have seen this movie before."
    }
},
{ 
    base: "sell", 
    past: "sold", 
    participle: "sold", 
    meaning: "satmak", 
    pronunciation: {
        base: "sel",
        past: "sold",
        participle: "sold"
    },
    image: "https://example.com/sell.jpg",
    category: "learning",
    sentences: {
        base: "I sell cars for a living.",
        past: "I sold my bike last week.",
        participle: "I have sold many items online."
    }
},
{ 
    base: "send", 
    past: "sent", 
    participle: "sent", 
    meaning: "göndermek", 
    pronunciation: {
        base: "send",
        past: "sent",
        participle: "sent"
    },
    image: "https://example.com/send.jpg",
    category: "learning",
    sentences: {
        base: "I send emails every day.",
        past: "I sent a letter to my friend.",
        participle: "I have sent the documents already."
    }
},
  { 
    base: "set", 
    past: "set", 
    participle: "set", 
    meaning: "ayarlamak, kurmak", 
    pronunciation: {
      base: "set",
      past: "set",
      participle: "set"
    },
    image: "https://example.com/set.jpg",
    category: "learning",
    sentences: {
      base: "I set the table for dinner.",
      past: "I set my alarm last night.",
      participle: "The rules are already set."
    }
  },
  { 
    base: "shake", 
    past: "shook", 
    participle: "shaken", 
    meaning: "sallamak", 
    pronunciation: {
      base: "şeyk",
      past: "şuk",
      participle: "şeykın"
    },
    image: "https://example.com/shake.jpg",
    category: "learning",
    sentences: {
      base: "I shake the bottle before drinking.",
      past: "He shook my hand firmly.",
      participle: "The building has been shaken by the earthquake."
    }
  },
  { 
    base: "shine", 
    past: "shone", 
    participle: "shone", 
    meaning: "parlamak", 
    pronunciation: {
      base: "şayn",
      past: "şon",
      participle: "şon"
    },
    image: "https://example.com/shine.jpg",
    category: "learning",
    sentences: {
      base: "The sun shines brightly.",
      past: "The stars shone last night.",
      participle: "Her talent has shone through."
    }
  },
  { 
    base: "shoot", 
    past: "shot", 
    participle: "shot", 
    meaning: "ateş etmek, vurmak", 
    pronunciation: {
      base: "şuut",
      past: "şat",
      participle: "şat"
    },
    image: "https://example.com/shoot.jpg",
    category: "learning",
    sentences: {
      base: "I shoot arrows at the target.",
      past: "He shot the ball into the net.",
      participle: "The movie was shot in Paris."
    }
  },
  { 
    base: "show", 
    past: "showed", 
    participle: "shown", 
    meaning: "göstermek", 
    pronunciation: {
      base: "şov",
      past: "şovd",
      participle: "şovn"
    },
    image: "https://example.com/show.jpg",
    category: "learning",
    sentences: {
      base: "I show my ID at the door.",
      past: "She showed me her new dress.",
      participle: "The results have been shown to the team."
    }
  },
  { 
    base: "shut", 
    past: "shut", 
    participle: "shut", 
    meaning: "kapatmak", 
    pronunciation: {
      base: "şat",
      past: "şat",
      participle: "şat"
    },
    image: "https://example.com/shut.jpg",
    category: "learning",
    sentences: {
      base: "Please shut the door.",
      past: "He shut the window quickly.",
      participle: "The shop is shut now."
    }
  },
  { 
    base: "sing", 
    past: "sang", 
    participle: "sung", 
    meaning: "şarkı söylemek", 
    pronunciation: {
      base: "sing",
      past: "seng",
      participle: "sang"
    },
    image: "https://example.com/sing.jpg",
    category: "learning",
    sentences: {
      base: "I sing in the shower.",
      past: "She sang a beautiful song.",
      participle: "He has sung in many concerts."
    }
  },
  { 
    base: "sink", 
    past: "sank", 
    participle: "sunk", 
    meaning: "batmak", 
    pronunciation: {
      base: "sink",
      past: "senk",
      participle: "sank"
    },
    image: "https://example.com/sink.jpg",
    category: "learning",
    sentences: {
      base: "Ships sink in storms.",
      past: "The boat sank quickly.",
      participle: "The treasure has sunk to the bottom."
    }
  },
  { 
    base: "sit", 
    past: "sat", 
    participle: "sat", 
    meaning: "oturmak", 
    pronunciation: {
      base: "sit",
      past: "set",
      participle: "set"
    },
    image: "https://example.com/sit.jpg",
    category: "learning",
    sentences: {
      base: "I sit on the chair.",
      past: "He sat next to me.",
      participle: "She has sat here for hours."
    }
  },
  { 
    base: "sleep", 
    past: "slept", 
    participle: "slept", 
    meaning: "uyumak", 
    pronunciation: {
      base: "sliip",
      past: "slept",
      participle: "slept"
    },
    image: "https://example.com/sleep.jpg",
    category: "learning",
    sentences: {
      base: "I sleep eight hours a day.",
      past: "He slept early yesterday.",
      participle: "I have slept well."
    }
  },
  { 
    base: "speak", 
    past: "spoke", 
    participle: "spoken", 
    meaning: "konuşmak", 
    pronunciation: {
      base: "spiyk",
      past: "spouk",
      participle: "spokın"
    },
    image: "https://example.com/speak.jpg",
    category: "learning",
    sentences: {
      base: "I speak English and Turkish.",
      past: "She spoke to her teacher.",
      participle: "They have spoken about the issue."
    }
  },
  { 
    base: "spend", 
    past: "spent", 
    participle: "spent", 
    meaning: "harcamak, geçirmek", 
    pronunciation: {
      base: "spend",
      past: "spent",
      participle: "spent"
    },
    image: "https://example.com/spend.jpg",
    category: "learning",
    sentences: {
      base: "I spend time with my family.",
      past: "He spent all his money.",
      participle: "We have spent hours on this project."
    }
  },
  { 
    base: "stand", 
    past: "stood", 
    participle: "stood", 
    meaning: "ayakta durmak", 
    pronunciation: {
      base: "stend",
      past: "stud",
      participle: "stud"
    },
    image: "https://example.com/stand.jpg",
    category: "learning",
    sentences: {
      base: "I stand near the door.",
      past: "He stood in line.",
      participle: "She has stood there all day."
    }
  },
  { 
    base: "steal", 
    past: "stole", 
    participle: "stolen", 
    meaning: "çalmak", 
    pronunciation: {
      base: "stiil",
      past: "stoul",
      participle: "stolın"
    },
    image: "https://example.com/steal.jpg",
    category: "learning",
    sentences: {
      base: "Thieves steal cars.",
      past: "He stole my wallet.",
      participle: "The jewels have been stolen."
    }
  },
  { 
    base: "stick", 
    past: "stuck", 
    participle: "stuck", 
    meaning: "yapışmak, takılmak", 
    pronunciation: {
      base: "stik",
      past: "stak",
      participle: "stak"
    },
    image: "https://example.com/stick.jpg",
    category: "learning",
    sentences: {
      base: "I stick the poster on the wall.",
      past: "The paper stuck to my hand.",
      participle: "The gum has stuck to the shoe."
    }
  },
  { 
    base: "swim", 
    past: "swam", 
    participle: "swum", 
    meaning: "yüzmek", 
    pronunciation: {
      base: "swim",
      past: "swem",
      participle: "swam"
    },
    image: "https://example.com/swim.jpg",
    category: "learning",
    sentences: {
      base: "I swim every morning.",
      past: "She swam across the river.",
      participle: "He has swum in the ocean."
    }
  },
  { 
    base: "take", 
    past: "took", 
    participle: "taken", 
    meaning: "almak, götürmek", 
    pronunciation: {
      base: "teyk",
      past: "tuk",
      participle: "teykın"
    },
    image: "https://example.com/take.jpg",
    category: "learning",
    sentences: {
      base: "I take the bus to work.",
      past: "He took my book yesterday.",
      participle: "The photo has been taken."
    }
  },
  { 
    base: "teach", 
    past: "taught", 
    participle: "taught", 
    meaning: "öğretmek", 
    pronunciation: {
        base: "tiç",
        past: "toot",
        participle: "toot"
    },
    image: "https://example.com/teach.jpg",
    category: "learning",
    sentences: {
        base: "I teach English at school.",
        past: "I taught math yesterday.",
        participle: "I have taught many students."
    }
},
{ 
    base: "tear", 
    past: "tore", 
    participle: "torn", 
    meaning: "yırtmak", 
    pronunciation: {
        base: "ter",
        past: "toor",
        participle: "torn"
    },
    image: "https://example.com/tear.jpg",
    category: "daily",
    sentences: {
        base: "I tear the paper in half.",
        past: "He tore his shirt last night.",
        participle: "The letter has been torn."
    }
},
{ 
    base: "tell", 
    past: "told", 
    participle: "told", 
    meaning: "söylemek, anlatmak", 
    pronunciation: {
        base: "tel",
        past: "told",
        participle: "told"
    },
    image: "https://example.com/tell.jpg",
    category: "communication",
    sentences: {
        base: "I tell the truth.",
        past: "She told me a secret.",
        participle: "I have told you many times."
    }
},
{ 
    base: "think", 
    past: "thought", 
    participle: "thought", 
    meaning: "düşünmek", 
    pronunciation: {
        base: "think",
        past: "thoot",
        participle: "thoot"
    },
    image: "https://example.com/think.jpg",
    category: "mind",
    sentences: {
        base: "I think it will rain.",
        past: "I thought about you yesterday.",
        participle: "I have thought of a solution."
    }
},
{ 
    base: "throw", 
    past: "threw", 
    participle: "thrown", 
    meaning: "atmak, fırlatmak", 
    pronunciation: {
        base: "throv",
        past: "thru",
        participle: "thrown"
    },
    image: "https://example.com/throw.jpg",
    category: "action",
    sentences: {
        base: "I throw the ball.",
        past: "He threw the ball to me.",
        participle: "The ball has been thrown."
    }
},
{ 
    base: "understand", 
    past: "understood", 
    participle: "understood", 
    meaning: "anlamak", 
    pronunciation: {
        base: "andırstend",
        past: "andırstud",
        participle: "andırstud"
    },
    image: "https://example.com/understand.jpg",
    category: "mind",
    sentences: {
        base: "I understand the question.",
        past: "I understood the story yesterday.",
        participle: "I have understood the rules."
    }
},
{ 
    base: "wake", 
    past: "woke", 
    participle: "woken", 
    meaning: "uyanmak", 
    pronunciation: {
        base: "veyk",
        past: "vok",
        participle: "vokın"
    },
    image: "https://example.com/wake.jpg",
    category: "daily",
    sentences: {
        base: "I wake up at 7 AM.",
        past: "I woke up late yesterday.",
        participle: "I have woken up early today."
    }
},
{ 
    base: "wear", 
    past: "wore", 
    participle: "worn", 
    meaning: "giymek", 
    pronunciation: {
        base: "ver",
        past: "vor",
        participle: "vorn"
    },
    image: "https://example.com/wear.jpg",
    category: "daily",
    sentences: {
        base: "I wear a blue shirt.",
        past: "She wore a red dress yesterday.",
        participle: "He has worn this jacket before."
    }
},
{ 
    base: "win", 
    past: "won", 
    participle: "won", 
    meaning: "kazanmak", 
    pronunciation: {
        base: "vin",
        past: "van",
        participle: "van"
    },
    image: "https://example.com/win.jpg",
    category: "success",
    sentences: {
        base: "I win every game.",
        past: "We won the match yesterday.",
        participle: "They have won many prizes."
    }
},
{ 
    base: "write", 
    past: "wrote", 
    participle: "written", 
    meaning: "yazmak", 
    pronunciation: {
        base: "vayt",
        past: "vrot",
        participle: "ritın"
    },
    image: "https://example.com/write.jpg",
    category: "communication",
    sentences: {
        base: "I write a letter.",
        past: "She wrote an email.",
        participle: "He has written three books."
    }
},
{ 
    base: "abide", 
    past: "abode/abided", 
    participle: "abode/abided", 
    meaning: "katlanmak, uymak", 
    pronunciation: {
        base: "abayd",
        past: "abod / abaydıd",
        participle: "abod / abaydıd"
    },
    image: "https://example.com/abide.jpg",
    category: "formal",
    sentences: {
        base: "I abide by the rules.",
        past: "He abided by the law.",
        participle: "They have abided by the contract."
    }
},
{ 
    base: "breed", 
    past: "bred", 
    participle: "bred", 
    meaning: "üretmek, yetiştirmek", 
    pronunciation: {
        base: "brid",
        past: "bred",
        participle: "bred"
    },
    image: "https://example.com/breed.jpg",
    category: "nature",
    sentences: {
        base: "They breed horses.",
        past: "He bred dogs for years.",
        participle: "The farmer has bred cows."
    }
},
  { 
    base: "cling", 
    past: "clung", 
    participle: "clung", 
    meaning: "sıkıca tutunmak, sarılmak", 
    pronunciation: {
      base: "kling",
      past: "klang",
      participle: "klang"
    },
    image: "https://example.com/cling.jpg",
    category: "learning",
    sentences: {
      base: "Babies often cling to their mothers.",
      past: "The child clung to his father in fear.",
      participle: "He has clung to his old beliefs."
    }
  },
  { 
    base: "creep", 
    past: "crept", 
    participle: "crept", 
    meaning: "sürünmek, sessizce sokulmak", 
    pronunciation: {
      base: "krip",
      past: "krept",
      participle: "krept"
    },
    image: "https://example.com/creep.jpg",
    category: "learning",
    sentences: {
      base: "Spiders creep along the walls.",
      past: "He crept into the room quietly.",
      participle: "The cat has crept under the bed."
    }
  },
  { 
    base: "deal", 
    past: "dealt", 
    participle: "dealt", 
    meaning: "uğraşmak, dağıtmak", 
    pronunciation: {
      base: "diil",
      past: "delt",
      participle: "delt"
    },
    image: "https://example.com/deal.jpg",
    category: "learning",
    sentences: {
      base: "I deal with customers every day.",
      past: "She dealt with the problem calmly.",
      participle: "He has dealt with many challenges."
    }
  },
  { 
    base: "dwell", 
    past: "dwelt/dwelled", 
    participle: "dwelt/dwelled", 
    meaning: "ikamet etmek, bir şey üzerinde durmak", 
    pronunciation: {
      base: "düel",
      past: "dvelt/düeld",
      participle: "dvelt/düeld"
    },
    image: "https://example.com/dwell.jpg",
    category: "learning",
    sentences: {
      base: "Many people dwell in this city.",
      past: "He dwelt on his mistakes for too long.",
      participle: "They have dwelt in that house for years."
    }
  },
  { 
    base: "forbid", 
    past: "forbade", 
    participle: "forbidden", 
    meaning: "yasaklamak", 
    pronunciation: {
      base: "förbid",
      past: "förbeyd",
      participle: "förbidın"
    },
    image: "https://example.com/forbid.jpg",
    category: "learning",
    sentences: {
      base: "They forbid smoking here.",
      past: "The teacher forbade talking in class.",
      participle: "Smoking has been forbidden inside."
    }
  },
  { 
    base: "forecast", 
    past: "forecast", 
    participle: "forecast", 
    meaning: "tahmin etmek", 
    pronunciation: {
      base: "forkast",
      past: "forkast",
      participle: "forkast"
    },
    image: "https://example.com/forecast.jpg",
    category: "learning",
    sentences: {
      base: "They forecast heavy rain tomorrow.",
      past: "The company forecast strong sales last year.",
      participle: "The storm has been forecast for tonight."
    }
  },
  { 
    base: "foresee", 
    past: "foresaw", 
    participle: "foreseen", 
    meaning: "önceden görmek, tahmin etmek", 
    pronunciation: {
      base: "forsii",
      past: "forsaa",
      participle: "forsiin"
    },
    image: "https://example.com/foresee.jpg",
    category: "learning",
    sentences: {
      base: "I foresee a great future for her.",
      past: "He foresaw the danger before it happened.",
      participle: "The risk has been foreseen by experts."
    }
  },
  { 
    base: "grind", 
    past: "ground", 
    participle: "ground", 
    meaning: "öğütmek", 
    pronunciation: {
      base: "graynd",
      past: "graund",
      participle: "graund"
    },
    image: "https://example.com/grind.jpg",
    category: "learning",
    sentences: {
      base: "They grind coffee every morning.",
      past: "She ground the spices for dinner.",
      participle: "The beans have been ground finely."
    }
  },
  { 
    base: "kneel", 
    past: "knelt", 
    participle: "knelt", 
    meaning: "diz çökmek", 
    pronunciation: {
      base: "niil",
      past: "nelt",
      participle: "nelt"
    },
    image: "https://example.com/kneel.jpg",
    category: "learning",
    sentences: {
      base: "People kneel to pray.",
      past: "He knelt before the king.",
      participle: "She has knelt many times in church."
    }
  },
  { 
    base: "knit", 
    past: "knit/knitted", 
    participle: "knit/knitted", 
    meaning: "örmek (örme işi)", 
    pronunciation: {
      base: "nit",
      past: "nit/nitid",
      participle: "nit/nitid"
    },
    image: "https://example.com/knit.jpg",
    category: "learning",
    sentences: {
      base: "My grandmother knits sweaters.",
      past: "She knitted a scarf last winter.",
      participle: "He has knitted many hats."
    }
  },
  { 
    base: "lean", 
    past: "leant/leaned", 
    participle: "leant/leaned", 
    meaning: "yaslanmak", 
    pronunciation: {
      base: "liin",
      past: "liint/liind",
      participle: "liint/liind"
    },
    image: "https://example.com/lean.jpg",
    category: "learning",
    sentences: {
      base: "She leans against the wall.",
      past: "He leant on the fence yesterday.",
      participle: "They have leaned on each other for support."
    }
  },
  { 
    base: "leap", 
    past: "leapt/leaped", 
    participle: "leapt/leaped", 
    meaning: "sıçramak", 
    pronunciation: {
      base: "liip",
      past: "lept/liipt",
      participle: "lept/liipt"
    },
    image: "https://example.com/leap.jpg",
    category: "learning",
    sentences: {
      base: "Cats leap onto high places.",
      past: "The boy leapt over the puddle.",
      participle: "She has leaped across many obstacles."
    }
  },
  { 
    base: "mislead", 
    past: "misled", 
    participle: "misled", 
    meaning: "yanlış yönlendirmek", 
    pronunciation: {
      base: "misliid",
      past: "misled",
      participle: "misled"
    },
    image: "https://example.com/mislead.jpg",
    category: "learning",
    sentences: {
      base: "Advertisements sometimes mislead customers.",
      past: "The guide misled the tourists.",
      participle: "He has misled many people before."
    }
  },
  { 
    base: "mistake", 
    past: "mistook", 
    participle: "mistaken", 
    meaning: "yanlış yapmak, karıştırmak", 
    pronunciation: {
      base: "misteyk",
      past: "mistuk",
      participle: "misteykn"
    },
    image: "https://example.com/mistake.jpg",
    category: "learning",
    sentences: {
      base: "I often mistake him for his brother.",
      past: "She mistook the door for the exit.",
      participle: "You have mistaken my intentions."
    }
  },  { 
    base: "arise", 
    past: "arose", 
    participle: "arisen", 
    meaning: "ortaya çıkmak", 
    pronunciation: {
      base: "ı-rayz",
      past: "ı-roz",
      participle: "ı-rizın"
    },
    image: "https://example.com/arise.jpg",
    category: "learning",
    sentences: {
      base: "Problems arise when people don’t listen.",
      past: "A conflict arose yesterday.",
      participle: "Many issues have arisen recently."
    }
  },
  { 
    base: "awake", 
    past: "awoke", 
    participle: "awoken", 
    meaning: "uyanmak", 
    pronunciation: {
      base: "ı-veyk",
      past: "ı-vouk",
      participle: "ı-voukın"
    },
    image: "https://example.com/awake.jpg",
    category: "learning",
    sentences: {
      base: "I awake early every day.",
      past: "I awoke at 6 AM.",
      participle: "She has awoken already."
    }
  },
  { 
    base: "be", 
    past: "was/were", 
    participle: "been", 
    meaning: "olmak", 
    pronunciation: {
      base: "bi",
      past: "woz / wör",
      participle: "bin"
    },
    image : "https://example.com/be.jpg",
    category: "learning",
    sentences: {
      base: "I want to be happy.",
      past: "I was tired yesterday.",
      participle: "I have been there before."
    }
  },
  { 
    base: "bear", 
    past: "bore", 
    participle: "borne", 
    meaning: "katlanmak, taşımak", 
    pronunciation: {
      base: "ber",
      past: "bor",
      participle: "born"
    },
    image: "https://example.com/bear.jpg",
    category: "learning",
    sentences: {
      base: "I can’t bear the pain.",
      past: "She bore the difficulties bravely.",
      participle: "The weight has been borne by the team."
    }
  },
  { 
    base: "beat", 
    past: "beat", 
    participle: "beaten", 
    meaning: "dövmek, yenmek", 
    pronunciation: {
      base: "biit",
      past: "biit",
      participle: "biitın"
    },
    image: "https://example.com/beat.jpg",
    category: "learning",
    sentences: {
      base: "I beat the drum.",
      past: "They beat the other team yesterday.",
      participle: "He has beaten all records."
    }
  },
  { 
    base: "become", 
    past: "became", 
    participle: "become", 
    meaning: "olmak, haline gelmek", 
    pronunciation: {
      base: "bikam",
      past: "bikeym",
      participle: "bikam"
    },
    image: "https://example.com/become.jpg",
    category: "learning",
    sentences: {
      base: "I become nervous before exams.",
      past: "He became a doctor last year.",
      participle: "She has become very strong."
    }
  },
  { 
    base: "begin", 
    past: "began", 
    participle: "begun", 
    meaning: "başlamak", 
    pronunciation: {
      base: "bigin",
      past: "bigan",
      participle: "bigʌn"
    },
    image: "https://example.com/begin.jpg",
    category: "learning",
    sentences: {
      base: "I begin my work at 9 AM.",
      past: "I began my work early today.",
      participle: "My work has begun."
    }
  },
  { 
    base: "bend", 
    past: "bent", 
    participle: "bent", 
    meaning: "bükmek, eğmek", 
    pronunciation: {
      base: "bend",
      past: "bent",
      participle: "bent"
    },
    image: "https://example.com/bend.jpg",
    category: "learning",
    sentences: {
      base: "I bend the wire.",
      past: "He bent the rules.",
      participle: "The branch has bent under the weight."
    }
  },
  { 
    base: "bet", 
    past: "bet", 
    participle: "bet", 
    meaning: "bahse girmek", 
    pronunciation: {
      base: "bet",
      past: "bet",
      participle: "bet"
    },
    image: "https://example.com/bet.jpg",
    category: "learning",
    sentences: {
      base: "I bet 10 dollars on the game.",
      past: "He bet on the wrong team.",
      participle: "She has bet before."
    }
  },
  { 
    base: "bind", 
    past: "bound", 
    participle: "bound", 
    meaning: "bağlamak", 
    pronunciation: {
      base: "baynd",
      past: "baund",
      participle: "baund"
    },
    image: "https://example.com/bind.jpg",
    category: "learning",
    sentences: {
      base: "I bind the book with a rope.",
      past: "They bound him tightly.",
      participle: "He has been bound to secrecy."
    }
  },
  { 
    base: "sow", 
    past: "sowed", 
    participle: "sown/sowed", 
    meaning: "ekmek, tohum saçmak", 
    pronunciation: {
      base: "sou",
      past: "soud",
      participle: "sovn / soud"
    },
    image: "https://example.com/sow.jpg",
    category: "learning",
    sentences: {
      base: "Farmers sow seeds in spring.",
      past: "He sowed wheat last year.",
      participle: "The field has been sown with corn."
    }
  },
  { 
    base: "spit", 
    past: "spat/spit", 
    participle: "spat/spit", 
    meaning: "tükürmek", 
    pronunciation: {
      base: "spit",
      past: "spet / spit",
      participle: "spet / spit"
    },
    image: "https://example.com/spit.jpg",
    category: "learning",
    sentences: {
      base: "Please don’t spit on the ground.",
      past: "He spat on the sidewalk.",
      participle: "Someone has spit on the floor."
    }
  },
  { 
    base: "split", 
    past: "split", 
    participle: "split", 
    meaning: "bölmek, ayırmak", 
    pronunciation: {
      base: "split",
      past: "split",
      participle: "split"
    },
    image: "https://example.com/split.jpg",
    category: "learning",
    sentences: {
      base: "I split the wood with an axe.",
      past: "He split the bill with me yesterday.",
      participle: "The group has split into two teams."
    }
  },
  { 
    base: "spoil", 
    past: "spoilt/spoiled", 
    participle: "spoilt/spoiled", 
    meaning: "bozmak, şımartmak", 
    pronunciation: {
      base: "spoyl",
      past: "spoylt / spoyld",
      participle: "spoylt / spoyld"
    },
    image: "https://example.com/spoil.jpg",
    category: "learning",
    sentences: {
      base: "Don’t spoil the surprise.",
      past: "The food spoiled in the heat.",
      participle: "The movie has been spoiled for me."
    }
  },
  { 
    base: "spring", 
    past: "sprang", 
    participle: "sprung", 
    meaning: "sıçramak, ortaya çıkmak", 
    pronunciation: {
      base: "spring",
      past: "spreng",
      participle: "sprang"
    },
    image: "https://example.com/spring.jpg",
    category: "learning",
    sentences: {
      base: "I spring out of bed every morning.",
      past: "He sprang up suddenly.",
      participle: "A problem has sprung from this issue."
    }
  },
  { 
    base: "stride", 
    past: "strode", 
    participle: "stridden", 
    meaning: "uzun adımlarla yürümek", 
    pronunciation: {
      base: "strayd",
      past: "strood",
      participle: "stridın"
    },
    image: "https://example.com/stride.jpg",
    category: "learning",
    sentences: {
      base: "She strides across the room confidently.",
      past: "He strode into the hall.",
      participle: "They have stridden through the forest."
    }
  },
  { 
    base: "string", 
    past: "strung", 
    participle: "strung", 
    meaning: "bağlamak, dizmek", 
    pronunciation: {
      base: "string",
      past: "strang",
      participle: "strang"
    },
    image: "https://example.com/string.jpg",
    category: "learning",
    sentences: {
      base: "He strings beads to make jewelry.",
      past: "She strung lights around the window.",
      participle: "The pearls have been strung together."
    }
  },
  { 
    base: "strive", 
    past: "strove", 
    participle: "striven", 
    meaning: "çabalamak, uğraşmak", 
    pronunciation: {
      base: "strayv",
      past: "strov",
      participle: "strivın"
    },
    image: "https://example.com/strive.jpg",
    category: "learning",
    sentences: {
      base: "I strive for success.",
      past: "He strove to finish on time.",
      participle: "They have striven for equality."
    }
  },
  { 
    base: "swear", 
    past: "swore", 
    participle: "sworn", 
    meaning: "yemin etmek, küfretmek", 
    pronunciation: {
      base: "sueer",
      past: "suoır",
      participle: "suorn"
    },
    image: "https://example.com/swear.jpg",
    category: "learning",
    sentences: {
      base: "I swear I didn’t take it.",
      past: "He swore to tell the truth.",
      participle: "She has sworn loyalty to the team."
    }
  },
  { 
    base: "sweep", 
    past: "swept", 
    participle: "swept", 
    meaning: "süpürmek", 
    pronunciation: {
      base: "suip",
      past: "suept",
      participle: "suept"
    },
    image: "https://example.com/sweep.jpg",
    category: "learning",
    sentences: {
      base: "I sweep the floor every morning.",
      past: "She swept the leaves away.",
      participle: "The streets have been swept clean."
    }
  },
  { 
    base: "swell", 
    past: "swelled", 
    participle: "swollen/swelled", 
    meaning: "şişmek, kabarmak", 
    pronunciation: {
      base: "suel",
      past: "swelld",
      participle: "suolın / swelld"
    },
    image: "https://example.com/swell.jpg",
    category: "learning",
    sentences: {
      base: "My ankle swells after running.",
      past: "His face swelled from the allergy.",
      participle: "Her eyes have swollen because of crying."
    }
  },
  { 
    base: "swing", 
    past: "swung", 
    participle: "swung", 
    meaning: "salınmak, sallamak", 
    pronunciation: {
      base: "sving",
      past: "svang",
      participle: "svang"
    },
    image: "https://example.com/swing.jpg",
    category: "learning",
    sentences: {
      base: "Children swing at the park.",
      past: "He swung the bat strongly.",
      participle: "The door has swung open."
    }
  },
  { 
    base: "tread", 
    past: "trod", 
    participle: "trodden", 
    meaning: "basmak, adımlamak", 
    pronunciation: {
      base: "tred",
      past: "trod",
      participle: "troddın"
    },
    image: "https://example.com/tread.jpg",
    category: "learning",
    sentences: {
      base: "Be careful where you tread.",
      past: "He trod on my foot.",
      participle: "Many have trodden this path before."
    }
  },
  { 
    base: "weep", 
    past: "wept", 
    participle: "wept", 
    meaning: "ağlamak", 
    pronunciation: {
      base: "vip",
      past: "vept",
      participle: "vept"
    },
    image: "https://example.com/weep.jpg",
    category: "learning",
    sentences: {
      base: "She weeps when she is sad.",
      past: "He wept bitterly last night.",
      participle: "They have wept for their loss."
    }
  },
  { 
    base: "withstand", 
    past: "withstood", 
    participle: "withstood", 
    meaning: "dayanmak, karşı koymak", 
    pronunciation: {
      base: "vitstend",
      past: "vitsstud",
      participle: "vitsstud"
    },
    image: "https://example.com/withstand.jpg",
    category: "learning",
    sentences: {
      base: "This wall withstands strong winds.",
      past: "The castle withstood the attack.",
      participle: "The team has withstood many challenges."
    }
  },
  { 
    base: "wring", 
    past: "wrung", 
    participle: "wrung", 
    meaning: "sıkmak, burmak", 
    pronunciation: {
      base: "ring",
      past: "rang",
      participle: "rang"
    },
    image: "https://example.com/wring.jpg",
    category: "learning",
    sentences: {
      base: "I wring the cloth to dry it.",
      past: "He wrung the towel tightly.",
      participle: "The shirt has been wrung out."
    }
  },
  { 
    base: "broadcast", 
    past: "broadcast", 
    participle: "broadcast", 
    meaning: "yayın yapmak", 
    pronunciation: {
      base: "brodkast",
      past: "brodkast",
      participle: "brodkast"
    },
    image: "https://example.com/broadcast.jpg",
    category: "learning",
    sentences: {
      base: "They broadcast the news live.",
      past: "The station broadcast the game yesterday.",
      participle: "The program has been broadcast worldwide."
    }
  },
  { 
    base: "forecast", 
    past: "forecast", 
    participle: "forecast", 
    meaning: "tahmin etmek", 
    pronunciation: {
      base: "forcast",
      past: "forcast",
      participle: "forcast"
    },
    image: "https://example.com/forecast.jpg",
    category: "learning",
    sentences: {
      base: "They forecast rain tomorrow.",
      past: "The company forecast higher sales.",
      participle: "The weather has been forecast accurately."
    }
  },
  { 
    base: "interweave", 
    past: "interwove", 
    participle: "interwoven", 
    meaning: "iç içe geçirmek", 
    pronunciation: {
      base: "intırviv",
      past: "intırvov",
      participle: "intırvovn"
    },
    image: "https://example.com/interweave.jpg",
    category: "learning",
    sentences: {
      base: "She interweaves colors in her art.",
      past: "The stories interwove beautifully.",
      participle: "Cultures have been interwoven over centuries."
    }
  }
]
