const collegesData = [
    {
        "CDrank": 1,
        "college": {
            "name": "College A",
            "location": "Mumbai, Maharashtra"
        },
        "fees": 50000,
        "placements": {
            "Average": 400000,
            "Highest": 700000
        },
        "userReviews": 4.2,
        "ranking": 31,
        "featured": false
    },
    {
        "CDrank": 2,
        "college": {
            "name": "College B",
            "location": "Pune, Maharashtra"
        },
        "fees": 60000,
        "placements": {
            "Average": 450000,
            "Highest": 750000
        },
        "userReviews": 4.3,
        "ranking": 29,
        "featured": true
    },
    {
        "CDrank": 3,
        "college": {
            "name": "College C",
            "location": "Bangalore, Karnataka"
        },
        "fees": 55000,
        "placements": {
            "Average": 420000,
            "Highest": 720000
        },
        "userReviews": 4.1,
        "ranking": 35,
        "featured": false
    },
    {
        "CDrank": 4,
        "college": {
            "name": "College D",
            "location": "Hyderabad, Telangana"
        },
        "fees": 70000,
        "placements": {
            "Average": 470000,
            "Highest": 800000
        },
        "userReviews": 4.4,
        "ranking": 25,
        "featured": false
    },
    {
        "CDrank": 5,
        "college": {
            "name": "College E",
            "location": "Chennai, Tamil Nadu"
        },
        "fees": 65000,
        "placements": {
            "Average": 430000,
            "Highest": 780000
        },
        "userReviews": 4.0,
        "ranking": 33,
        "featured": false
    },
    {
        "CDrank": 6,
        "college": {
            "name": "College F",
            "location": "Delhi, Delhi"
        },
        "fees": 62000,
        "placements": {
            "Average": 410000,
            "Highest": 750000
        },
        "userReviews": 4.2,
        "ranking": 37,
        "featured": true
    },
    {
        "CDrank": 7,
        "college": {
            "name": "College G",
            "location": "Kolkata, West Bengal"
        },
        "fees": 68000,
        "placements": {
            "Average": 460000,
            "Highest": 820000
        },
        "userReviews": 4.3,
        "ranking": 28,
        "featured": false
    },
    {
        "CDrank": 8,
        "college": {
            "name": "College H",
            "location": "Ahmedabad, Gujarat"
        },
        "fees": 57000,
        "placements": {
            "Average": 440000,
            "Highest": 790000
        },
        "userReviews": 4.1,
        "ranking": 34,
        "featured": false
    },
    {
        "CDrank": 9,
        "college": {
            "name": "College I",
            "location": "Jaipur, Rajasthan"
        },
        "fees": 61000,
        "placements": {
            "Average": 420000,
            "Highest": 740000
        },
        "userReviews": 4.2,
        "ranking": 36,
        "featured": false
    },
    {
        "CDrank": 10,
        "college": {
            "name": "College J",
            "location": "Lucknow, Uttar Pradesh"
        },
        "fees": 64000,
        "placements": {
            "Average": 450000,
            "Highest": 810000
        },
        "userReviews": 4.4,
        "ranking": 30,
        "featured": true
    },
    {
        "CDrank": 11,
        "college": {
            "name": "College K",
            "location": "Bhubaneswar, Odisha"
        },
        "fees": 53000,
        "placements": {
            "Average": 400000,
            "Highest": 700000
        },
        "userReviews": 4.0,
        "ranking": 38,
        "featured": false
    },
    {
        "CDrank": 12,
        "college": {
            "name": "College L",
            "location": "Indore, Madhya Pradesh"
        },
        "fees": 59000,
        "placements": {
            "Average": 430000,
            "Highest": 770000
        },
        "userReviews": 4.1,
        "ranking": 32,
        "featured": true
    },
    {
        "CDrank": 13,
        "college": {
            "name": "College M",
            "location": "Patna, Bihar"
        },
        "fees": 67000,
        "placements": {
            "Average": 460000,
            "Highest": 830000
        },
        "userReviews": 4.3,
        "ranking": 27,
        "featured": false
    },
    {
        "CDrank": 14,
        "college": {
            "name": "College N",
            "location": "Bhopal, Madhya Pradesh"
        },
        "fees": 56000,
        "placements": {
            "Average": 410000,
            "Highest": 710000
        },
        "userReviews": 4.2,
        "ranking": 39,
        "featured": false
    },
    {
        "CDrank": 15,
        "college": {
            "name": "College O",
            "location": "Surat, Gujarat"
        },
        "fees": 64000,
        "placements": {
            "Average": 440000,
            "Highest": 780000
        },
        "userReviews": 4.4,
        "ranking": 26,
        "featured": false
    },
    {
        "CDrank": 16,
        "college": {
            "name": "College P",
            "location": "Vadodara, Gujarat"
        },
        "fees": 62000,
        "placements": {
            "Average": 420000,
            "Highest": 750000
        },
        "userReviews": 4.1,
        "ranking": 24,
        "featured": true
    },
    {
        "CDrank": 17,
        "college": {
            "name": "College Q",
            "location": "Chandigarh, Chandigarh"
        },
        "fees": 68000,
        "placements": {
            "Average": 470000,
            "Highest": 840000
        },
        "userReviews": 4.3,
        "ranking": 14,
        "featured": false
    },
    {
        "CDrank": 18,
        "college": {
            "name": "College R",
            "location": "Coimbatore, Tamil Nadu"
        },
        "fees": 60000,
        "placements": {
            "Average": 450000,
            "Highest": 790000
        },
        "userReviews": 4.2,
        "ranking": 10,
        "featured": true
    },
    {
        "CDrank": 19,
        "college": {
            "name": "College S",
            "location": "Kochi, Kerala"
        },
        "fees": 59000,
        "placements": {
            "Average": 420000,
            "Highest": 760000
        },
        "userReviews": 4.1,
        "ranking":66,
        "featured": false
    },
    {
        "CDrank": 20,
        "college": {
            "name": "College T",
            "location": "Thiruvananthapuram, Kerala"
        },
        "fees": 65000,
        "placements": {
            "Average": 460000,
            "Highest": 820000
        },
        "userReviews": 4.4,
        "ranking": 21,
        "featured": false
    },
    {
        "CDrank": 21,
        "college": {
            "name": "College U",
            "location": "Nagpur, Maharashtra"
        },
        "fees": 58000,
        "placements": {
            "Average": 430000,
            "Highest": 780000
        },
        "userReviews": 4.0,
        "ranking": 6,
        "featured": false
    },
    {
        "CDrank": 22,
        "college": {
            "name": "College V",
            "location": "Vijayawada, Andhra Pradesh"
        },
        "fees": 66000,
        "placements": {
            "Average": 470000,
            "Highest": 840000
        },
        "userReviews": 4.3,
        "ranking": 29,
        "featured": true
    },
    {
        "CDrank": 23,
        "college": {
            "name": "College W",
            "location": "Visakhapatnam, Andhra Pradesh"
        },
        "fees": 61000,
        "placements": {
            "Average": 440000,
            "Highest": 790000
        },
        "userReviews": 4.2,
        "ranking": 12,
        "featured": false
    },
    {
        "CDrank": 24,
        "college": {
            "name": "College X",
            "location": "Raipur, Chhattisgarh"
        },
        "fees": 54000,
        "placements": {
            "Average": 410000,
            "Highest": 710000
        },
        "userReviews": 4.1,
        "ranking": 63,
        "featured": true
    },
    {
        "CDrank": 25,
        "college": {
            "name": "College Y",
            "location": "Ranchi, Jharkhand"
        },
        "fees": 68000,
        "placements": {
            "Average": 470000,
            "Highest": 830000
        },
        "userReviews": 4.3,
        "ranking": 17,
        "featured": false
    },
    {
        "CDrank": 26,
        "college": {
            "name": "College Z",
            "location": "Dehradun, Uttarakhand"
        },
        "fees": 57000,
        "placements": {
            "Average": 430000,
            "Highest": 780000
        },
        "userReviews": 4.2,
        "ranking": 43,
        "featured": false
    },
    {
        "CDrank": 27,
        "college": {
            "name": "College AA",
            "location": "Gurgaon, Haryana"
        },
        "fees": 64000,
        "placements": {
            "Average": 450000,
            "Highest": 810000
        },
        "userReviews": 4.4,
        "ranking": 140,
        "featured": false
    }
];

export default collegesData;
