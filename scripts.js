const defaultVerbs = [
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
        "base": "be",
        "past": "was/were",
        "participle": "been",
        "meaning": "olmak",
        "pronunciation": {
            "base": "bi",
            "past": "waz/wör",
            "participle": "biin"
        },
        "image": "https://example.com/be.jpg",
        "category": "pending",
        "sentences": {
            "base": "I am happy.",
            "past": "I was happy yesterday.",
            "participle": "I have been happy lately."
        }
    },
    {
        "base": "begin",
        "past": "began",
        "participle": "begun",
        "meaning": "başlamak",
        "pronunciation": {
            "base": "bigın",
            "past": "bigen",
            "participle": "bigan"
        },
        "image": "https://example.com/begin.jpg",
        "category": "pending",
        "sentences": {
            "base": "They begin the meeting.",
            "past": "They began the meeting at 9.",
            "participle": "The meeting has begun."
        }
    },
    {
        "base": "break",
        "past": "broke",
        "participle": "broken",
        "meaning": "kırmak",
        "pronunciation": {
            "base": "breyk",
            "past": "broʊk",
            "participle": "broʊkın"
        },
        "image": "https://example.com/break.jpg",
        "category": "pending",
        "sentences": {
            "base": "I break the glass.",
            "past": "I broke the glass yesterday.",
            "participle": "The glass has been broken."
        }
    },
    {
        "base": "bring",
        "past": "brought",
        "participle": "brought",
        "meaning": "getirmek",
        "pronunciation": {
            "base": "brinğ",
            "past": "brot",
            "participle": "brot"
        },
        "image": "https://example.com/bring.jpg",
        "category": "pending",
        "sentences": {
            "base": "She brings coffee every morning.",
            "past": "She brought coffee yesterday.",
            "participle": "She has brought coffee again."
        }
    },
    {
        "base": "verb5",
        "past": "verb5_past",
        "participle": "verb5_participle",
        "meaning": "verb5 anlamı",
        "pronunciation": {
            "base": "verb5_oku",
            "past": "verb5_past_oku",
            "participle": "verb5_part_oku"
        },
        "image": "https://example.com/verb5.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb5 something.",
            "past": "I verb5_past something yesterday.",
            "participle": "It has been verb5_participle."
        }
    },
    {
        "base": "verb6",
        "past": "verb6_past",
        "participle": "verb6_participle",
        "meaning": "verb6 anlamı",
        "pronunciation": {
            "base": "verb6_oku",
            "past": "verb6_past_oku",
            "participle": "verb6_part_oku"
        },
        "image": "https://example.com/verb6.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb6 something.",
            "past": "I verb6_past something yesterday.",
            "participle": "It has been verb6_participle."
        }
    },
    {
        "base": "verb7",
        "past": "verb7_past",
        "participle": "verb7_participle",
        "meaning": "verb7 anlamı",
        "pronunciation": {
            "base": "verb7_oku",
            "past": "verb7_past_oku",
            "participle": "verb7_part_oku"
        },
        "image": "https://example.com/verb7.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb7 something.",
            "past": "I verb7_past something yesterday.",
            "participle": "It has been verb7_participle."
        }
    },
    {
        "base": "verb8",
        "past": "verb8_past",
        "participle": "verb8_participle",
        "meaning": "verb8 anlamı",
        "pronunciation": {
            "base": "verb8_oku",
            "past": "verb8_past_oku",
            "participle": "verb8_part_oku"
        },
        "image": "https://example.com/verb8.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb8 something.",
            "past": "I verb8_past something yesterday.",
            "participle": "It has been verb8_participle."
        }
    },
    {
        "base": "verb9",
        "past": "verb9_past",
        "participle": "verb9_participle",
        "meaning": "verb9 anlamı",
        "pronunciation": {
            "base": "verb9_oku",
            "past": "verb9_past_oku",
            "participle": "verb9_part_oku"
        },
        "image": "https://example.com/verb9.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb9 something.",
            "past": "I verb9_past something yesterday.",
            "participle": "It has been verb9_participle."
        }
    },
    {
        "base": "verb10",
        "past": "verb10_past",
        "participle": "verb10_participle",
        "meaning": "verb10 anlamı",
        "pronunciation": {
            "base": "verb10_oku",
            "past": "verb10_past_oku",
            "participle": "verb10_part_oku"
        },
        "image": "https://example.com/verb10.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb10 something.",
            "past": "I verb10_past something yesterday.",
            "participle": "It has been verb10_participle."
        }
    },
    {
        "base": "verb11",
        "past": "verb11_past",
        "participle": "verb11_participle",
        "meaning": "verb11 anlamı",
        "pronunciation": {
            "base": "verb11_oku",
            "past": "verb11_past_oku",
            "participle": "verb11_part_oku"
        },
        "image": "https://example.com/verb11.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb11 something.",
            "past": "I verb11_past something yesterday.",
            "participle": "It has been verb11_participle."
        }
    },
    {
        "base": "verb12",
        "past": "verb12_past",
        "participle": "verb12_participle",
        "meaning": "verb12 anlamı",
        "pronunciation": {
            "base": "verb12_oku",
            "past": "verb12_past_oku",
            "participle": "verb12_part_oku"
        },
        "image": "https://example.com/verb12.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb12 something.",
            "past": "I verb12_past something yesterday.",
            "participle": "It has been verb12_participle."
        }
    },
    {
        "base": "verb13",
        "past": "verb13_past",
        "participle": "verb13_participle",
        "meaning": "verb13 anlamı",
        "pronunciation": {
            "base": "verb13_oku",
            "past": "verb13_past_oku",
            "participle": "verb13_part_oku"
        },
        "image": "https://example.com/verb13.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb13 something.",
            "past": "I verb13_past something yesterday.",
            "participle": "It has been verb13_participle."
        }
    },
    {
        "base": "verb14",
        "past": "verb14_past",
        "participle": "verb14_participle",
        "meaning": "verb14 anlamı",
        "pronunciation": {
            "base": "verb14_oku",
            "past": "verb14_past_oku",
            "participle": "verb14_part_oku"
        },
        "image": "https://example.com/verb14.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb14 something.",
            "past": "I verb14_past something yesterday.",
            "participle": "It has been verb14_participle."
        }
    },
    {
        "base": "verb15",
        "past": "verb15_past",
        "participle": "verb15_participle",
        "meaning": "verb15 anlamı",
        "pronunciation": {
            "base": "verb15_oku",
            "past": "verb15_past_oku",
            "participle": "verb15_part_oku"
        },
        "image": "https://example.com/verb15.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb15 something.",
            "past": "I verb15_past something yesterday.",
            "participle": "It has been verb15_participle."
        }
    },
    {
        "base": "verb16",
        "past": "verb16_past",
        "participle": "verb16_participle",
        "meaning": "verb16 anlamı",
        "pronunciation": {
            "base": "verb16_oku",
            "past": "verb16_past_oku",
            "participle": "verb16_part_oku"
        },
        "image": "https://example.com/verb16.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb16 something.",
            "past": "I verb16_past something yesterday.",
            "participle": "It has been verb16_participle."
        }
    },
    {
        "base": "verb17",
        "past": "verb17_past",
        "participle": "verb17_participle",
        "meaning": "verb17 anlamı",
        "pronunciation": {
            "base": "verb17_oku",
            "past": "verb17_past_oku",
            "participle": "verb17_part_oku"
        },
        "image": "https://example.com/verb17.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb17 something.",
            "past": "I verb17_past something yesterday.",
            "participle": "It has been verb17_participle."
        }
    },
    {
        "base": "verb18",
        "past": "verb18_past",
        "participle": "verb18_participle",
        "meaning": "verb18 anlamı",
        "pronunciation": {
            "base": "verb18_oku",
            "past": "verb18_past_oku",
            "participle": "verb18_part_oku"
        },
        "image": "https://example.com/verb18.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb18 something.",
            "past": "I verb18_past something yesterday.",
            "participle": "It has been verb18_participle."
        }
    },
    {
        "base": "verb19",
        "past": "verb19_past",
        "participle": "verb19_participle",
        "meaning": "verb19 anlamı",
        "pronunciation": {
            "base": "verb19_oku",
            "past": "verb19_past_oku",
            "participle": "verb19_part_oku"
        },
        "image": "https://example.com/verb19.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb19 something.",
            "past": "I verb19_past something yesterday.",
            "participle": "It has been verb19_participle."
        }
    },
    {
        "base": "verb20",
        "past": "verb20_past",
        "participle": "verb20_participle",
        "meaning": "verb20 anlamı",
        "pronunciation": {
            "base": "verb20_oku",
            "past": "verb20_past_oku",
            "participle": "verb20_part_oku"
        },
        "image": "https://example.com/verb20.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb20 something.",
            "past": "I verb20_past something yesterday.",
            "participle": "It has been verb20_participle."
        }
    },
    {
        "base": "verb21",
        "past": "verb21_past",
        "participle": "verb21_participle",
        "meaning": "verb21 anlamı",
        "pronunciation": {
            "base": "verb21_oku",
            "past": "verb21_past_oku",
            "participle": "verb21_part_oku"
        },
        "image": "https://example.com/verb21.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb21 something.",
            "past": "I verb21_past something yesterday.",
            "participle": "It has been verb21_participle."
        }
    },
    {
        "base": "verb22",
        "past": "verb22_past",
        "participle": "verb22_participle",
        "meaning": "verb22 anlamı",
        "pronunciation": {
            "base": "verb22_oku",
            "past": "verb22_past_oku",
            "participle": "verb22_part_oku"
        },
        "image": "https://example.com/verb22.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb22 something.",
            "past": "I verb22_past something yesterday.",
            "participle": "It has been verb22_participle."
        }
    },
    {
        "base": "verb23",
        "past": "verb23_past",
        "participle": "verb23_participle",
        "meaning": "verb23 anlamı",
        "pronunciation": {
            "base": "verb23_oku",
            "past": "verb23_past_oku",
            "participle": "verb23_part_oku"
        },
        "image": "https://example.com/verb23.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb23 something.",
            "past": "I verb23_past something yesterday.",
            "participle": "It has been verb23_participle."
        }
    },
    {
        "base": "verb24",
        "past": "verb24_past",
        "participle": "verb24_participle",
        "meaning": "verb24 anlamı",
        "pronunciation": {
            "base": "verb24_oku",
            "past": "verb24_past_oku",
            "participle": "verb24_part_oku"
        },
        "image": "https://example.com/verb24.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb24 something.",
            "past": "I verb24_past something yesterday.",
            "participle": "It has been verb24_participle."
        }
    },
    {
        "base": "verb25",
        "past": "verb25_past",
        "participle": "verb25_participle",
        "meaning": "verb25 anlamı",
        "pronunciation": {
            "base": "verb25_oku",
            "past": "verb25_past_oku",
            "participle": "verb25_part_oku"
        },
        "image": "https://example.com/verb25.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb25 something.",
            "past": "I verb25_past something yesterday.",
            "participle": "It has been verb25_participle."
        }
    },
    {
        "base": "verb26",
        "past": "verb26_past",
        "participle": "verb26_participle",
        "meaning": "verb26 anlamı",
        "pronunciation": {
            "base": "verb26_oku",
            "past": "verb26_past_oku",
            "participle": "verb26_part_oku"
        },
        "image": "https://example.com/verb26.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb26 something.",
            "past": "I verb26_past something yesterday.",
            "participle": "It has been verb26_participle."
        }
    },
    {
        "base": "verb27",
        "past": "verb27_past",
        "participle": "verb27_participle",
        "meaning": "verb27 anlamı",
        "pronunciation": {
            "base": "verb27_oku",
            "past": "verb27_past_oku",
            "participle": "verb27_part_oku"
        },
        "image": "https://example.com/verb27.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb27 something.",
            "past": "I verb27_past something yesterday.",
            "participle": "It has been verb27_participle."
        }
    },
    {
        "base": "verb28",
        "past": "verb28_past",
        "participle": "verb28_participle",
        "meaning": "verb28 anlamı",
        "pronunciation": {
            "base": "verb28_oku",
            "past": "verb28_past_oku",
            "participle": "verb28_part_oku"
        },
        "image": "https://example.com/verb28.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb28 something.",
            "past": "I verb28_past something yesterday.",
            "participle": "It has been verb28_participle."
        }
    },
    {
        "base": "verb29",
        "past": "verb29_past",
        "participle": "verb29_participle",
        "meaning": "verb29 anlamı",
        "pronunciation": {
            "base": "verb29_oku",
            "past": "verb29_past_oku",
            "participle": "verb29_part_oku"
        },
        "image": "https://example.com/verb29.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb29 something.",
            "past": "I verb29_past something yesterday.",
            "participle": "It has been verb29_participle."
        }
    },
    {
        "base": "verb30",
        "past": "verb30_past",
        "participle": "verb30_participle",
        "meaning": "verb30 anlamı",
        "pronunciation": {
            "base": "verb30_oku",
            "past": "verb30_past_oku",
            "participle": "verb30_part_oku"
        },
        "image": "https://example.com/verb30.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb30 something.",
            "past": "I verb30_past something yesterday.",
            "participle": "It has been verb30_participle."
        }
    },
    {
        "base": "verb31",
        "past": "verb31_past",
        "participle": "verb31_participle",
        "meaning": "verb31 anlamı",
        "pronunciation": {
            "base": "verb31_oku",
            "past": "verb31_past_oku",
            "participle": "verb31_part_oku"
        },
        "image": "https://example.com/verb31.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb31 something.",
            "past": "I verb31_past something yesterday.",
            "participle": "It has been verb31_participle."
        }
    },
    {
        "base": "verb32",
        "past": "verb32_past",
        "participle": "verb32_participle",
        "meaning": "verb32 anlamı",
        "pronunciation": {
            "base": "verb32_oku",
            "past": "verb32_past_oku",
            "participle": "verb32_part_oku"
        },
        "image": "https://example.com/verb32.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb32 something.",
            "past": "I verb32_past something yesterday.",
            "participle": "It has been verb32_participle."
        }
    },
    {
        "base": "verb33",
        "past": "verb33_past",
        "participle": "verb33_participle",
        "meaning": "verb33 anlamı",
        "pronunciation": {
            "base": "verb33_oku",
            "past": "verb33_past_oku",
            "participle": "verb33_part_oku"
        },
        "image": "https://example.com/verb33.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb33 something.",
            "past": "I verb33_past something yesterday.",
            "participle": "It has been verb33_participle."
        }
    },
    {
        "base": "verb34",
        "past": "verb34_past",
        "participle": "verb34_participle",
        "meaning": "verb34 anlamı",
        "pronunciation": {
            "base": "verb34_oku",
            "past": "verb34_past_oku",
            "participle": "verb34_part_oku"
        },
        "image": "https://example.com/verb34.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb34 something.",
            "past": "I verb34_past something yesterday.",
            "participle": "It has been verb34_participle."
        }
    },
    {
        "base": "verb35",
        "past": "verb35_past",
        "participle": "verb35_participle",
        "meaning": "verb35 anlamı",
        "pronunciation": {
            "base": "verb35_oku",
            "past": "verb35_past_oku",
            "participle": "verb35_part_oku"
        },
        "image": "https://example.com/verb35.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb35 something.",
            "past": "I verb35_past something yesterday.",
            "participle": "It has been verb35_participle."
        }
    },
    {
        "base": "verb36",
        "past": "verb36_past",
        "participle": "verb36_participle",
        "meaning": "verb36 anlamı",
        "pronunciation": {
            "base": "verb36_oku",
            "past": "verb36_past_oku",
            "participle": "verb36_part_oku"
        },
        "image": "https://example.com/verb36.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb36 something.",
            "past": "I verb36_past something yesterday.",
            "participle": "It has been verb36_participle."
        }
    },
    {
        "base": "verb37",
        "past": "verb37_past",
        "participle": "verb37_participle",
        "meaning": "verb37 anlamı",
        "pronunciation": {
            "base": "verb37_oku",
            "past": "verb37_past_oku",
            "participle": "verb37_part_oku"
        },
        "image": "https://example.com/verb37.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb37 something.",
            "past": "I verb37_past something yesterday.",
            "participle": "It has been verb37_participle."
        }
    },
    {
        "base": "verb38",
        "past": "verb38_past",
        "participle": "verb38_participle",
        "meaning": "verb38 anlamı",
        "pronunciation": {
            "base": "verb38_oku",
            "past": "verb38_past_oku",
            "participle": "verb38_part_oku"
        },
        "image": "https://example.com/verb38.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb38 something.",
            "past": "I verb38_past something yesterday.",
            "participle": "It has been verb38_participle."
        }
    },
    {
        "base": "verb39",
        "past": "verb39_past",
        "participle": "verb39_participle",
        "meaning": "verb39 anlamı",
        "pronunciation": {
            "base": "verb39_oku",
            "past": "verb39_past_oku",
            "participle": "verb39_part_oku"
        },
        "image": "https://example.com/verb39.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb39 something.",
            "past": "I verb39_past something yesterday.",
            "participle": "It has been verb39_participle."
        }
    },
    {
        "base": "verb40",
        "past": "verb40_past",
        "participle": "verb40_participle",
        "meaning": "verb40 anlamı",
        "pronunciation": {
            "base": "verb40_oku",
            "past": "verb40_past_oku",
            "participle": "verb40_part_oku"
        },
        "image": "https://example.com/verb40.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb40 something.",
            "past": "I verb40_past something yesterday.",
            "participle": "It has been verb40_participle."
        }
    },
    {
        "base": "verb41",
        "past": "verb41_past",
        "participle": "verb41_participle",
        "meaning": "verb41 anlamı",
        "pronunciation": {
            "base": "verb41_oku",
            "past": "verb41_past_oku",
            "participle": "verb41_part_oku"
        },
        "image": "https://example.com/verb41.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb41 something.",
            "past": "I verb41_past something yesterday.",
            "participle": "It has been verb41_participle."
        }
    },
    {
        "base": "verb42",
        "past": "verb42_past",
        "participle": "verb42_participle",
        "meaning": "verb42 anlamı",
        "pronunciation": {
            "base": "verb42_oku",
            "past": "verb42_past_oku",
            "participle": "verb42_part_oku"
        },
        "image": "https://example.com/verb42.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb42 something.",
            "past": "I verb42_past something yesterday.",
            "participle": "It has been verb42_participle."
        }
    },
    {
        "base": "verb43",
        "past": "verb43_past",
        "participle": "verb43_participle",
        "meaning": "verb43 anlamı",
        "pronunciation": {
            "base": "verb43_oku",
            "past": "verb43_past_oku",
            "participle": "verb43_part_oku"
        },
        "image": "https://example.com/verb43.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb43 something.",
            "past": "I verb43_past something yesterday.",
            "participle": "It has been verb43_participle."
        }
    },
    {
        "base": "verb44",
        "past": "verb44_past",
        "participle": "verb44_participle",
        "meaning": "verb44 anlamı",
        "pronunciation": {
            "base": "verb44_oku",
            "past": "verb44_past_oku",
            "participle": "verb44_part_oku"
        },
        "image": "https://example.com/verb44.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb44 something.",
            "past": "I verb44_past something yesterday.",
            "participle": "It has been verb44_participle."
        }
    },
    {
        "base": "verb45",
        "past": "verb45_past",
        "participle": "verb45_participle",
        "meaning": "verb45 anlamı",
        "pronunciation": {
            "base": "verb45_oku",
            "past": "verb45_past_oku",
            "participle": "verb45_part_oku"
        },
        "image": "https://example.com/verb45.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb45 something.",
            "past": "I verb45_past something yesterday.",
            "participle": "It has been verb45_participle."
        }
    },
    {
        "base": "verb46",
        "past": "verb46_past",
        "participle": "verb46_participle",
        "meaning": "verb46 anlamı",
        "pronunciation": {
            "base": "verb46_oku",
            "past": "verb46_past_oku",
            "participle": "verb46_part_oku"
        },
        "image": "https://example.com/verb46.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb46 something.",
            "past": "I verb46_past something yesterday.",
            "participle": "It has been verb46_participle."
        }
    },
    {
        "base": "verb47",
        "past": "verb47_past",
        "participle": "verb47_participle",
        "meaning": "verb47 anlamı",
        "pronunciation": {
            "base": "verb47_oku",
            "past": "verb47_past_oku",
            "participle": "verb47_part_oku"
        },
        "image": "https://example.com/verb47.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb47 something.",
            "past": "I verb47_past something yesterday.",
            "participle": "It has been verb47_participle."
        }
    },
    {
        "base": "verb48",
        "past": "verb48_past",
        "participle": "verb48_participle",
        "meaning": "verb48 anlamı",
        "pronunciation": {
            "base": "verb48_oku",
            "past": "verb48_past_oku",
            "participle": "verb48_part_oku"
        },
        "image": "https://example.com/verb48.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb48 something.",
            "past": "I verb48_past something yesterday.",
            "participle": "It has been verb48_participle."
        }
    },
    {
        "base": "verb49",
        "past": "verb49_past",
        "participle": "verb49_participle",
        "meaning": "verb49 anlamı",
        "pronunciation": {
            "base": "verb49_oku",
            "past": "verb49_past_oku",
            "participle": "verb49_part_oku"
        },
        "image": "https://example.com/verb49.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb49 something.",
            "past": "I verb49_past something yesterday.",
            "participle": "It has been verb49_participle."
        }
    },
    {
        "base": "verb50",
        "past": "verb50_past",
        "participle": "verb50_participle",
        "meaning": "verb50 anlamı",
        "pronunciation": {
            "base": "verb50_oku",
            "past": "verb50_past_oku",
            "participle": "verb50_part_oku"
        },
        "image": "https://example.com/verb50.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb50 something.",
            "past": "I verb50_past something yesterday.",
            "participle": "It has been verb50_participle."
        }
    },
    {
        "base": "verb51",
        "past": "verb51_past",
        "participle": "verb51_participle",
        "meaning": "verb51 anlamı",
        "pronunciation": {
            "base": "verb51_oku",
            "past": "verb51_past_oku",
            "participle": "verb51_part_oku"
        },
        "image": "https://example.com/verb51.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb51 something.",
            "past": "I verb51_past something yesterday.",
            "participle": "It has been verb51_participle."
        }
    },
    {
        "base": "verb52",
        "past": "verb52_past",
        "participle": "verb52_participle",
        "meaning": "verb52 anlamı",
        "pronunciation": {
            "base": "verb52_oku",
            "past": "verb52_past_oku",
            "participle": "verb52_part_oku"
        },
        "image": "https://example.com/verb52.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb52 something.",
            "past": "I verb52_past something yesterday.",
            "participle": "It has been verb52_participle."
        }
    },
    {
        "base": "verb53",
        "past": "verb53_past",
        "participle": "verb53_participle",
        "meaning": "verb53 anlamı",
        "pronunciation": {
            "base": "verb53_oku",
            "past": "verb53_past_oku",
            "participle": "verb53_part_oku"
        },
        "image": "https://example.com/verb53.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb53 something.",
            "past": "I verb53_past something yesterday.",
            "participle": "It has been verb53_participle."
        }
    },
    {
        "base": "verb54",
        "past": "verb54_past",
        "participle": "verb54_participle",
        "meaning": "verb54 anlamı",
        "pronunciation": {
            "base": "verb54_oku",
            "past": "verb54_past_oku",
            "participle": "verb54_part_oku"
        },
        "image": "https://example.com/verb54.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb54 something.",
            "past": "I verb54_past something yesterday.",
            "participle": "It has been verb54_participle."
        }
    },
    {
        "base": "verb55",
        "past": "verb55_past",
        "participle": "verb55_participle",
        "meaning": "verb55 anlamı",
        "pronunciation": {
            "base": "verb55_oku",
            "past": "verb55_past_oku",
            "participle": "verb55_part_oku"
        },
        "image": "https://example.com/verb55.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb55 something.",
            "past": "I verb55_past something yesterday.",
            "participle": "It has been verb55_participle."
        }
    },
    {
        "base": "verb56",
        "past": "verb56_past",
        "participle": "verb56_participle",
        "meaning": "verb56 anlamı",
        "pronunciation": {
            "base": "verb56_oku",
            "past": "verb56_past_oku",
            "participle": "verb56_part_oku"
        },
        "image": "https://example.com/verb56.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb56 something.",
            "past": "I verb56_past something yesterday.",
            "participle": "It has been verb56_participle."
        }
    },
    {
        "base": "verb57",
        "past": "verb57_past",
        "participle": "verb57_participle",
        "meaning": "verb57 anlamı",
        "pronunciation": {
            "base": "verb57_oku",
            "past": "verb57_past_oku",
            "participle": "verb57_part_oku"
        },
        "image": "https://example.com/verb57.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb57 something.",
            "past": "I verb57_past something yesterday.",
            "participle": "It has been verb57_participle."
        }
    },
    {
        "base": "verb58",
        "past": "verb58_past",
        "participle": "verb58_participle",
        "meaning": "verb58 anlamı",
        "pronunciation": {
            "base": "verb58_oku",
            "past": "verb58_past_oku",
            "participle": "verb58_part_oku"
        },
        "image": "https://example.com/verb58.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb58 something.",
            "past": "I verb58_past something yesterday.",
            "participle": "It has been verb58_participle."
        }
    },
    {
        "base": "verb59",
        "past": "verb59_past",
        "participle": "verb59_participle",
        "meaning": "verb59 anlamı",
        "pronunciation": {
            "base": "verb59_oku",
            "past": "verb59_past_oku",
            "participle": "verb59_part_oku"
        },
        "image": "https://example.com/verb59.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb59 something.",
            "past": "I verb59_past something yesterday.",
            "participle": "It has been verb59_participle."
        }
    },
    {
        "base": "verb60",
        "past": "verb60_past",
        "participle": "verb60_participle",
        "meaning": "verb60 anlamı",
        "pronunciation": {
            "base": "verb60_oku",
            "past": "verb60_past_oku",
            "participle": "verb60_part_oku"
        },
        "image": "https://example.com/verb60.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb60 something.",
            "past": "I verb60_past something yesterday.",
            "participle": "It has been verb60_participle."
        }
    },
    {
        "base": "verb61",
        "past": "verb61_past",
        "participle": "verb61_participle",
        "meaning": "verb61 anlamı",
        "pronunciation": {
            "base": "verb61_oku",
            "past": "verb61_past_oku",
            "participle": "verb61_part_oku"
        },
        "image": "https://example.com/verb61.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb61 something.",
            "past": "I verb61_past something yesterday.",
            "participle": "It has been verb61_participle."
        }
    },
    {
        "base": "verb62",
        "past": "verb62_past",
        "participle": "verb62_participle",
        "meaning": "verb62 anlamı",
        "pronunciation": {
            "base": "verb62_oku",
            "past": "verb62_past_oku",
            "participle": "verb62_part_oku"
        },
        "image": "https://example.com/verb62.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb62 something.",
            "past": "I verb62_past something yesterday.",
            "participle": "It has been verb62_participle."
        }
    },
    {
        "base": "verb63",
        "past": "verb63_past",
        "participle": "verb63_participle",
        "meaning": "verb63 anlamı",
        "pronunciation": {
            "base": "verb63_oku",
            "past": "verb63_past_oku",
            "participle": "verb63_part_oku"
        },
        "image": "https://example.com/verb63.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb63 something.",
            "past": "I verb63_past something yesterday.",
            "participle": "It has been verb63_participle."
        }
    },
    {
        "base": "verb64",
        "past": "verb64_past",
        "participle": "verb64_participle",
        "meaning": "verb64 anlamı",
        "pronunciation": {
            "base": "verb64_oku",
            "past": "verb64_past_oku",
            "participle": "verb64_part_oku"
        },
        "image": "https://example.com/verb64.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb64 something.",
            "past": "I verb64_past something yesterday.",
            "participle": "It has been verb64_participle."
        }
    },
    {
        "base": "verb65",
        "past": "verb65_past",
        "participle": "verb65_participle",
        "meaning": "verb65 anlamı",
        "pronunciation": {
            "base": "verb65_oku",
            "past": "verb65_past_oku",
            "participle": "verb65_part_oku"
        },
        "image": "https://example.com/verb65.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb65 something.",
            "past": "I verb65_past something yesterday.",
            "participle": "It has been verb65_participle."
        }
    },
    {
        "base": "verb66",
        "past": "verb66_past",
        "participle": "verb66_participle",
        "meaning": "verb66 anlamı",
        "pronunciation": {
            "base": "verb66_oku",
            "past": "verb66_past_oku",
            "participle": "verb66_part_oku"
        },
        "image": "https://example.com/verb66.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb66 something.",
            "past": "I verb66_past something yesterday.",
            "participle": "It has been verb66_participle."
        }
    },
    {
        "base": "verb67",
        "past": "verb67_past",
        "participle": "verb67_participle",
        "meaning": "verb67 anlamı",
        "pronunciation": {
            "base": "verb67_oku",
            "past": "verb67_past_oku",
            "participle": "verb67_part_oku"
        },
        "image": "https://example.com/verb67.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb67 something.",
            "past": "I verb67_past something yesterday.",
            "participle": "It has been verb67_participle."
        }
    },
    {
        "base": "verb68",
        "past": "verb68_past",
        "participle": "verb68_participle",
        "meaning": "verb68 anlamı",
        "pronunciation": {
            "base": "verb68_oku",
            "past": "verb68_past_oku",
            "participle": "verb68_part_oku"
        },
        "image": "https://example.com/verb68.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb68 something.",
            "past": "I verb68_past something yesterday.",
            "participle": "It has been verb68_participle."
        }
    },
    {
        "base": "verb69",
        "past": "verb69_past",
        "participle": "verb69_participle",
        "meaning": "verb69 anlamı",
        "pronunciation": {
            "base": "verb69_oku",
            "past": "verb69_past_oku",
            "participle": "verb69_part_oku"
        },
        "image": "https://example.com/verb69.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb69 something.",
            "past": "I verb69_past something yesterday.",
            "participle": "It has been verb69_participle."
        }
    },
    {
        "base": "verb70",
        "past": "verb70_past",
        "participle": "verb70_participle",
        "meaning": "verb70 anlamı",
        "pronunciation": {
            "base": "verb70_oku",
            "past": "verb70_past_oku",
            "participle": "verb70_part_oku"
        },
        "image": "https://example.com/verb70.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb70 something.",
            "past": "I verb70_past something yesterday.",
            "participle": "It has been verb70_participle."
        }
    },
    {
        "base": "verb71",
        "past": "verb71_past",
        "participle": "verb71_participle",
        "meaning": "verb71 anlamı",
        "pronunciation": {
            "base": "verb71_oku",
            "past": "verb71_past_oku",
            "participle": "verb71_part_oku"
        },
        "image": "https://example.com/verb71.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb71 something.",
            "past": "I verb71_past something yesterday.",
            "participle": "It has been verb71_participle."
        }
    },
    {
        "base": "verb72",
        "past": "verb72_past",
        "participle": "verb72_participle",
        "meaning": "verb72 anlamı",
        "pronunciation": {
            "base": "verb72_oku",
            "past": "verb72_past_oku",
            "participle": "verb72_part_oku"
        },
        "image": "https://example.com/verb72.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb72 something.",
            "past": "I verb72_past something yesterday.",
            "participle": "It has been verb72_participle."
        }
    },
    {
        "base": "verb73",
        "past": "verb73_past",
        "participle": "verb73_participle",
        "meaning": "verb73 anlamı",
        "pronunciation": {
            "base": "verb73_oku",
            "past": "verb73_past_oku",
            "participle": "verb73_part_oku"
        },
        "image": "https://example.com/verb73.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb73 something.",
            "past": "I verb73_past something yesterday.",
            "participle": "It has been verb73_participle."
        }
    },
    {
        "base": "verb74",
        "past": "verb74_past",
        "participle": "verb74_participle",
        "meaning": "verb74 anlamı",
        "pronunciation": {
            "base": "verb74_oku",
            "past": "verb74_past_oku",
            "participle": "verb74_part_oku"
        },
        "image": "https://example.com/verb74.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb74 something.",
            "past": "I verb74_past something yesterday.",
            "participle": "It has been verb74_participle."
        }
    },
    {
        "base": "verb75",
        "past": "verb75_past",
        "participle": "verb75_participle",
        "meaning": "verb75 anlamı",
        "pronunciation": {
            "base": "verb75_oku",
            "past": "verb75_past_oku",
            "participle": "verb75_part_oku"
        },
        "image": "https://example.com/verb75.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb75 something.",
            "past": "I verb75_past something yesterday.",
            "participle": "It has been verb75_participle."
        }
    },
    {
        "base": "verb76",
        "past": "verb76_past",
        "participle": "verb76_participle",
        "meaning": "verb76 anlamı",
        "pronunciation": {
            "base": "verb76_oku",
            "past": "verb76_past_oku",
            "participle": "verb76_part_oku"
        },
        "image": "https://example.com/verb76.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb76 something.",
            "past": "I verb76_past something yesterday.",
            "participle": "It has been verb76_participle."
        }
    },
    {
        "base": "verb77",
        "past": "verb77_past",
        "participle": "verb77_participle",
        "meaning": "verb77 anlamı",
        "pronunciation": {
            "base": "verb77_oku",
            "past": "verb77_past_oku",
            "participle": "verb77_part_oku"
        },
        "image": "https://example.com/verb77.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb77 something.",
            "past": "I verb77_past something yesterday.",
            "participle": "It has been verb77_participle."
        }
    },
    {
        "base": "verb78",
        "past": "verb78_past",
        "participle": "verb78_participle",
        "meaning": "verb78 anlamı",
        "pronunciation": {
            "base": "verb78_oku",
            "past": "verb78_past_oku",
            "participle": "verb78_part_oku"
        },
        "image": "https://example.com/verb78.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb78 something.",
            "past": "I verb78_past something yesterday.",
            "participle": "It has been verb78_participle."
        }
    },
    {
        "base": "verb79",
        "past": "verb79_past",
        "participle": "verb79_participle",
        "meaning": "verb79 anlamı",
        "pronunciation": {
            "base": "verb79_oku",
            "past": "verb79_past_oku",
            "participle": "verb79_part_oku"
        },
        "image": "https://example.com/verb79.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb79 something.",
            "past": "I verb79_past something yesterday.",
            "participle": "It has been verb79_participle."
        }
    },
    {
        "base": "verb80",
        "past": "verb80_past",
        "participle": "verb80_participle",
        "meaning": "verb80 anlamı",
        "pronunciation": {
            "base": "verb80_oku",
            "past": "verb80_past_oku",
            "participle": "verb80_part_oku"
        },
        "image": "https://example.com/verb80.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb80 something.",
            "past": "I verb80_past something yesterday.",
            "participle": "It has been verb80_participle."
        }
    },
    {
        "base": "verb81",
        "past": "verb81_past",
        "participle": "verb81_participle",
        "meaning": "verb81 anlamı",
        "pronunciation": {
            "base": "verb81_oku",
            "past": "verb81_past_oku",
            "participle": "verb81_part_oku"
        },
        "image": "https://example.com/verb81.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb81 something.",
            "past": "I verb81_past something yesterday.",
            "participle": "It has been verb81_participle."
        }
    },
    {
        "base": "verb82",
        "past": "verb82_past",
        "participle": "verb82_participle",
        "meaning": "verb82 anlamı",
        "pronunciation": {
            "base": "verb82_oku",
            "past": "verb82_past_oku",
            "participle": "verb82_part_oku"
        },
        "image": "https://example.com/verb82.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb82 something.",
            "past": "I verb82_past something yesterday.",
            "participle": "It has been verb82_participle."
        }
    },
    {
        "base": "verb83",
        "past": "verb83_past",
        "participle": "verb83_participle",
        "meaning": "verb83 anlamı",
        "pronunciation": {
            "base": "verb83_oku",
            "past": "verb83_past_oku",
            "participle": "verb83_part_oku"
        },
        "image": "https://example.com/verb83.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb83 something.",
            "past": "I verb83_past something yesterday.",
            "participle": "It has been verb83_participle."
        }
    },
    {
        "base": "verb84",
        "past": "verb84_past",
        "participle": "verb84_participle",
        "meaning": "verb84 anlamı",
        "pronunciation": {
            "base": "verb84_oku",
            "past": "verb84_past_oku",
            "participle": "verb84_part_oku"
        },
        "image": "https://example.com/verb84.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb84 something.",
            "past": "I verb84_past something yesterday.",
            "participle": "It has been verb84_participle."
        }
    },
    {
        "base": "verb85",
        "past": "verb85_past",
        "participle": "verb85_participle",
        "meaning": "verb85 anlamı",
        "pronunciation": {
            "base": "verb85_oku",
            "past": "verb85_past_oku",
            "participle": "verb85_part_oku"
        },
        "image": "https://example.com/verb85.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb85 something.",
            "past": "I verb85_past something yesterday.",
            "participle": "It has been verb85_participle."
        }
    },
    {
        "base": "verb86",
        "past": "verb86_past",
        "participle": "verb86_participle",
        "meaning": "verb86 anlamı",
        "pronunciation": {
            "base": "verb86_oku",
            "past": "verb86_past_oku",
            "participle": "verb86_part_oku"
        },
        "image": "https://example.com/verb86.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb86 something.",
            "past": "I verb86_past something yesterday.",
            "participle": "It has been verb86_participle."
        }
    },
    {
        "base": "verb87",
        "past": "verb87_past",
        "participle": "verb87_participle",
        "meaning": "verb87 anlamı",
        "pronunciation": {
            "base": "verb87_oku",
            "past": "verb87_past_oku",
            "participle": "verb87_part_oku"
        },
        "image": "https://example.com/verb87.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb87 something.",
            "past": "I verb87_past something yesterday.",
            "participle": "It has been verb87_participle."
        }
    },
    {
        "base": "verb88",
        "past": "verb88_past",
        "participle": "verb88_participle",
        "meaning": "verb88 anlamı",
        "pronunciation": {
            "base": "verb88_oku",
            "past": "verb88_past_oku",
            "participle": "verb88_part_oku"
        },
        "image": "https://example.com/verb88.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb88 something.",
            "past": "I verb88_past something yesterday.",
            "participle": "It has been verb88_participle."
        }
    },
    {
        "base": "verb89",
        "past": "verb89_past",
        "participle": "verb89_participle",
        "meaning": "verb89 anlamı",
        "pronunciation": {
            "base": "verb89_oku",
            "past": "verb89_past_oku",
            "participle": "verb89_part_oku"
        },
        "image": "https://example.com/verb89.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb89 something.",
            "past": "I verb89_past something yesterday.",
            "participle": "It has been verb89_participle."
        }
    },
    {
        "base": "verb90",
        "past": "verb90_past",
        "participle": "verb90_participle",
        "meaning": "verb90 anlamı",
        "pronunciation": {
            "base": "verb90_oku",
            "past": "verb90_past_oku",
            "participle": "verb90_part_oku"
        },
        "image": "https://example.com/verb90.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb90 something.",
            "past": "I verb90_past something yesterday.",
            "participle": "It has been verb90_participle."
        }
    },
    {
        "base": "verb91",
        "past": "verb91_past",
        "participle": "verb91_participle",
        "meaning": "verb91 anlamı",
        "pronunciation": {
            "base": "verb91_oku",
            "past": "verb91_past_oku",
            "participle": "verb91_part_oku"
        },
        "image": "https://example.com/verb91.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb91 something.",
            "past": "I verb91_past something yesterday.",
            "participle": "It has been verb91_participle."
        }
    },
    {
        "base": "verb92",
        "past": "verb92_past",
        "participle": "verb92_participle",
        "meaning": "verb92 anlamı",
        "pronunciation": {
            "base": "verb92_oku",
            "past": "verb92_past_oku",
            "participle": "verb92_part_oku"
        },
        "image": "https://example.com/verb92.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb92 something.",
            "past": "I verb92_past something yesterday.",
            "participle": "It has been verb92_participle."
        }
    },
    {
        "base": "verb93",
        "past": "verb93_past",
        "participle": "verb93_participle",
        "meaning": "verb93 anlamı",
        "pronunciation": {
            "base": "verb93_oku",
            "past": "verb93_past_oku",
            "participle": "verb93_part_oku"
        },
        "image": "https://example.com/verb93.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb93 something.",
            "past": "I verb93_past something yesterday.",
            "participle": "It has been verb93_participle."
        }
    },
    {
        "base": "verb94",
        "past": "verb94_past",
        "participle": "verb94_participle",
        "meaning": "verb94 anlamı",
        "pronunciation": {
            "base": "verb94_oku",
            "past": "verb94_past_oku",
            "participle": "verb94_part_oku"
        },
        "image": "https://example.com/verb94.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb94 something.",
            "past": "I verb94_past something yesterday.",
            "participle": "It has been verb94_participle."
        }
    },
    {
        "base": "verb95",
        "past": "verb95_past",
        "participle": "verb95_participle",
        "meaning": "verb95 anlamı",
        "pronunciation": {
            "base": "verb95_oku",
            "past": "verb95_past_oku",
            "participle": "verb95_part_oku"
        },
        "image": "https://example.com/verb95.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb95 something.",
            "past": "I verb95_past something yesterday.",
            "participle": "It has been verb95_participle."
        }
    },
    {
        "base": "verb96",
        "past": "verb96_past",
        "participle": "verb96_participle",
        "meaning": "verb96 anlamı",
        "pronunciation": {
            "base": "verb96_oku",
            "past": "verb96_past_oku",
            "participle": "verb96_part_oku"
        },
        "image": "https://example.com/verb96.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb96 something.",
            "past": "I verb96_past something yesterday.",
            "participle": "It has been verb96_participle."
        }
    },
    {
        "base": "verb97",
        "past": "verb97_past",
        "participle": "verb97_participle",
        "meaning": "verb97 anlamı",
        "pronunciation": {
            "base": "verb97_oku",
            "past": "verb97_past_oku",
            "participle": "verb97_part_oku"
        },
        "image": "https://example.com/verb97.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb97 something.",
            "past": "I verb97_past something yesterday.",
            "participle": "It has been verb97_participle."
        }
    },
    {
        "base": "verb98",
        "past": "verb98_past",
        "participle": "verb98_participle",
        "meaning": "verb98 anlamı",
        "pronunciation": {
            "base": "verb98_oku",
            "past": "verb98_past_oku",
            "participle": "verb98_part_oku"
        },
        "image": "https://example.com/verb98.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb98 something.",
            "past": "I verb98_past something yesterday.",
            "participle": "It has been verb98_participle."
        }
    },
    {
        "base": "verb99",
        "past": "verb99_past",
        "participle": "verb99_participle",
        "meaning": "verb99 anlamı",
        "pronunciation": {
            "base": "verb99_oku",
            "past": "verb99_past_oku",
            "participle": "verb99_part_oku"
        },
        "image": "https://example.com/verb99.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb99 something.",
            "past": "I verb99_past something yesterday.",
            "participle": "It has been verb99_participle."
        }
    },
    {
        "base": "verb100",
        "past": "verb100_past",
        "participle": "verb100_participle",
        "meaning": "verb100 anlamı",
        "pronunciation": {
            "base": "verb100_oku",
            "past": "verb100_past_oku",
            "participle": "verb100_part_oku"
        },
        "image": "https://example.com/verb100.jpg",
        "category": "pending",
        "sentences": {
            "base": "I verb100 something.",
            "past": "I verb100_past something yesterday.",
            "participle": "It has been verb100_participle."
        }
    }

];

let verbs = [];

// LocalStorage'da veri var mı kontrol et, yoksa defaultVerbs yükle
if (!localStorage.getItem('verbs')) {
    verbs = defaultVerbs;
    localStorage.setItem('verbs', JSON.stringify(verbs));
} else {
    verbs = JSON.parse(localStorage.getItem('verbs'));
}

let currentIndex = 0;
let currentCategory = 'learning';
let currentCategoryVerbs = [];

const verbContainer = document.getElementById('verbContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const infoText = document.getElementById('infoText');

// Fiili güncelleyen fonksiyon
function displayVerb(index) {
    const verb = currentCategoryVerbs[index];
    verbContainer.innerHTML = `
        <img src="${verb.image}" alt="${verb.base}" class="verb-image">
        <div class="table">
            <div><strong>Base</strong></div>
            <div><strong>Past</strong></div>
            <div><strong>Participle</strong></div>
            
            <div>${verb.base}</div>
            <div>${verb.past}</div>
            <div>${verb.participle}</div>

            <div class="pronunciation">${verb.pronunciation.base}</div>
            <div class="pronunciation">${verb.pronunciation.past}</div>
            <div class="pronunciation">${verb.pronunciation.participle}</div>
        </div>
        <div class="meaning">Anlamı: ${verb.meaning}</div>
        <div class="sentences">
            <p><strong>Base:</strong> ${verb.sentences.base}</p>
            <p><strong>Past:</strong> ${verb.sentences.past}</p>
            <p><strong>Participle:</strong> ${verb.sentences.participle}</p>
        </div>
        <div class="button-group">
            <button class="learned ${verb.category === 'learned' ? 'active' : ''}" onclick="changeCategory(${index}, 'learned')">Ezberlenen</button>
            <button class="learning ${verb.category === 'learning' ? 'active' : ''}" onclick="changeCategory(${index}, 'learning')">Ezberlenmekte</button>
            <button class="pending ${verb.category === 'pending' ? 'active' : ''}" onclick="changeCategory(${index}, 'pending')">Bekleyen</button>
        </div>
    `;
    infoText.textContent = `${currentIndex + 1}/${currentCategoryVerbs.length}`;
}

// Kategori değiştirme fonksiyonu
function changeCategory(index, newCategory) {
    const verbIndex = verbs.findIndex(verb => verb.base === currentCategoryVerbs[index].base);
    verbs[verbIndex].category = newCategory;
    localStorage.setItem('verbs', JSON.stringify(verbs)); // LocalStorage'a kaydet
    filterVerbs(currentCategory); // Kategoriyi güncelle ve göster
}

// Fiilleri kategoriye göre filtreleme fonksiyonu
function filterVerbs(category) {
    currentCategory = category;
    if (category === 'all') {
        currentCategoryVerbs = verbs;
    } else {
        currentCategoryVerbs = verbs.filter(verb => verb.category === category);
    }
    
    if (currentCategoryVerbs.length === 0) {
        verbContainer.innerHTML = `<p>Bu kategoride henüz kelime yok.</p>`;
        infoText.textContent = "0/0";
    } else {
        currentIndex = 0;
        displayVerb(currentIndex);
    }
    updateCategoryButtons(category);
}

// Kategori butonlarını güncelle
function updateCategoryButtons(activeCategory) {
    document.querySelectorAll('.category-btn').forEach(button => {
        if (button.id === `show${capitalizeFirstLetter(activeCategory)}Btn`) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// İlk harfi büyük yapma fonksiyonu
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Geri butonuna tıklama olayını ayarla
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? currentCategoryVerbs.length - 1 : currentIndex - 1;
    displayVerb(currentIndex);
});

// İleri butonuna tıklama olayını ayarla
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === currentCategoryVerbs.length - 1) ? 0 : currentIndex + 1;
    displayVerb(currentIndex);
});

// İlk buton tıklama olaylarını ayarla
document.getElementById('showAllBtn').addEventListener('click', () => filterVerbs('all'));
document.getElementById('showLearnedBtn').addEventListener('click', () => filterVerbs('learned'));
document.getElementById('showLearningBtn').addEventListener('click', () => filterVerbs('learning'));
document.getElementById('showPendingBtn').addEventListener('click', () => filterVerbs('pending'));

// Sayfa ilk açıldığında 'ezberlenmekte' butonunu aktif yap
window.onload = () => {
    filterVerbs('learning');
}

// İlk fiili göster
displayVerb(currentIndex);
