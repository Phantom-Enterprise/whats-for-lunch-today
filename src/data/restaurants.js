
const baseRestaurants = [
    {
        id: 1,
        name: "Versailles Restaurant",
        cuisine: "Cuban",
        price: "$$",
        rating: 4.5,
        deal: "Cafecito + pastelito combo $5",
        emoji: "🇨🇺",
        address: "3555 SW 8th St, Miami, FL 33135",
        image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ViYW4lMjBmb29kfGVufDB8fDB8fHww",
        hours: { open: 0, close: 24 }, // Open 24h
        menuUrl: "https://versaillesrestaurant.com/menu/"
    },
    {
        id: 2,
        name: "Joe's Stone Crab",
        cuisine: "Seafood",
        price: "$$$",
        rating: 4.6,
        deal: null,
        emoji: "🦀",
        address: "11 Washington Ave, Miami Beach, FL 33139",
        image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        hours: { open: 11, close: 23 },
        menuUrl: "https://www.joesstonecrab.com/menu"
    },
    {
        id: 3,
        name: "Flanigan's Seafood Bar",
        cuisine: "American",
        price: "$",
        rating: 4.3,
        deal: "Lunch specials daily",
        emoji: "🍔",
        address: "3110 Coconut Grove Dr, Coconut Grove, FL 33133",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
        hours: { open: 11, close: 24 },
        menuUrl: "https://www.flanigans.net/menu/"
    },
    {
        id: 4,
        name: "Taquiza",
        cuisine: "Mexican",
        price: "$$",
        rating: 4.7,
        deal: "Taco Tuesday specials",
        emoji: "🌮",
        address: "7450 Ocean Terrace, Miami Beach, FL 33141",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3N8ZW58MHx8MHx8fDA%3D",
        hours: { open: 11, close: 22 },
        menuUrl: "https://www.taquizamiami.com/menu"
    },
    {
        id: 5,
        name: "Pura Vida",
        cuisine: "Latin Fusion",
        price: "$$",
        rating: 4.5,
        deal: "Healthy bowl combos",
        emoji: "🥗",
        address: "110 Washington Ave, Miami Beach, FL 33139",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cFs%3D",
        hours: { open: 8, close: 21 },
        menuUrl: "https://www.puravidamiami.com/menu"
    },
    {
        id: 6,
        name: "Bombay Darbar",
        cuisine: "Indian",
        price: "$$",
        rating: 4.4,
        deal: "Lunch buffet special",
        emoji: "🍛",
        address: "2901 Florida Ave, Miami, FL 33133",
        image: "https://images.unsplash.com/photo-1631298045866-932f22295b99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Vycnl8ZW58MHx8MHx8fDA%3D",
        hours: { open: 11, close: 22 },
        menuUrl: "https://www.bombaydarbar.com/menu"
    },
    {
        id: 7,
        name: "Andiamo Pizza",
        cuisine: "Italian",
        price: "$$",
        rating: 4.6,
        deal: "Slice + soda lunch special",
        emoji: "🍕",
        address: "5600 Biscayne Blvd, Miami, FL 33137",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
        hours: { open: 11, close: 23 },
        menuUrl: "https://www.andiamopizzeria.com/menu"
    },
    {
        id: 8,
        name: "Hakkasan Miami",
        cuisine: "Chinese",
        price: "$$$",
        rating: 4.5,
        deal: "Dim sum lunch menu",
        emoji: "🥟",
        address: "4441 Collins Ave, Miami Beach, FL 33140",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c423c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGltJTIwc3VtfGVufDB8fDB8fHww",
        hours: { open: 12, close: 23 },
        menuUrl: "https://hakkasan.com/miami/menus/"
    },
    {
        id: 9,
        name: "La Carreta",
        cuisine: "Cuban",
        price: "$",
        rating: 4.4,
        deal: "Daily lunch specials",
        emoji: "🇨🇺",
        address: "3632 SW 8th St, Miami, FL 33135",
        image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ViYW4lMjBmb29kfGVufDB8fDB8fHww",
        hours: { open: 7, close: 23 },
        menuUrl: "https://lacarreta.com/menu/"
    },
    {
        id: 10,
        name: "Garcia's Seafood",
        cuisine: "Seafood",
        price: "$$",
        rating: 4.5,
        deal: "Fresh catch of the day special",
        emoji: "🦞",
        address: "398 NW North River Dr, Miami, FL 33128",
        image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9ic3RlcnxlbnwwfHwwfHx8MA%3D%3D",
        hours: { open: 11, close: 22 },
        menuUrl: "https://www.garciasmiami.com/menu"
    },
    {
        id: 11,
        name: "Coyo Taco",
        cuisine: "Mexican",
        price: "$",
        rating: 4.6,
        deal: "Happy hour tacos",
        emoji: "🌮",
        address: "2300 NW 2nd Ave, Miami, FL 33127",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3N8ZW58MHx8MHx8fDA%3D",
        hours: { open: 11, close: 24 },
        menuUrl: "https://www.coyotaco.com/menu"
    },
    {
        id: 12,
        name: "Yardbird Southern Table",
        cuisine: "American",
        price: "$$",
        rating: 4.7,
        deal: "Fried chicken lunch power hour",
        emoji: "🍗",
        address: "1600 Lenox Ave, Miami Beach, FL 33139",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
        hours: { open: 11, close: 22 },
        menuUrl: "https://www.runchickenrun.com/miami-beach"
    },
    {
        id: 13,
        name: "Makoto",
        cuisine: "Japanese",
        price: "$$$",
        rating: 4.8,
        deal: "Bento box lunch specials",
        emoji: "🍣",
        address: "9700 Collins Ave, Bal Harbour, FL 33154",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8fDA%3D",
        hours: { open: 12, close: 23 },
        menuUrl: "https://makoto-restaurant.com/bal-harbour/menus/"
    },
    {
        id: 14,
        name: "Mandolin Aegean Bistro",
        cuisine: "Greek",
        price: "$$",
        rating: 4.7,
        deal: null,
        emoji: "🍋",
        address: "4312 NE 2nd Ave, Miami, FL 33137",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60",
        hours: { open: 12, close: 23 },
        menuUrl: "https://www.mandolinmiami.com/menu"
    },
    {
        id: 15,
        name: "KYU",
        cuisine: "Fusion",
        price: "$$$",
        rating: 4.6,
        deal: "Wood-fired lunch specials",
        emoji: "🔥",
        address: "251 NW 25th St, Miami, FL 33127",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&auto=format&fit=crop&q=60",
        hours: { open: 12, close: 23 },
        menuUrl: "https://www.kyurestaurants.com/location/miami/#menu"
    },
    {
        id: 16,
        name: "Zak the Baker",
        cuisine: "Bakery",
        price: "$",
        rating: 4.8,
        deal: "Soup & half sandwich deal",
        emoji: "🍞",
        address: "295 NW 26th St, Miami, FL 33127",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60",
        hours: { open: 7, close: 17 },
        menuUrl: "https://zakthebaker.com/pages/menu"
    },
    {
        id: 17,
        name: "CVI.CHE 105",
        cuisine: "Peruvian",
        price: "$$",
        rating: 4.7,
        deal: "Lunch ceviche platters",
        emoji: "🥣",
        address: "105 NE 3rd Ave, Miami, FL 33132",
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c170db0f?w=500&auto=format&fit=crop&q=60",
        hours: { open: 12, close: 22 },
        menuUrl: "https://www.ceviche105.com/downtownmiami/index.php/menus/"
    },
    {
        id: 18,
        name: "Swan",
        cuisine: "European",
        price: "$$$",
        rating: 4.3,
        deal: null,
        emoji: "🦢",
        address: "90 NE 39th St, Miami, FL 33137",
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60",
        hours: { open: 12, close: 24 },
        menuUrl: "https://www.swanmiami.com/menu"
    },
    {
        id: 19,
        name: "Bodega Taqueria",
        cuisine: "Mexican",
        price: "$",
        rating: 4.5,
        deal: "3 Tacos lunch deal $11",
        emoji: "🌯",
        address: "1220 16th St, Miami Beach, FL 33139",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60",
        hours: { open: 11, close: 24 },
        menuUrl: "https://www.bodegataqueria.com/menu/"
    },
    {
        id: 20,
        name: "Lucali",
        cuisine: "Italian",
        price: "$$$",
        rating: 4.7,
        deal: null,
        emoji: "🍝",
        address: "1930 Bay Rd, Miami Beach, FL 33139",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?w=500&auto=format&fit=crop&q=60",
        hours: { open: 17, close: 23 },
        menuUrl: "https://www.lucali.com/miami-beach"
    },
    {
        id: 21,
        name: "Carbone",
        cuisine: "Italian",
        price: "$$$",
        rating: 4.6,
        deal: null,
        emoji: "🍷",
        address: "49 Collins Ave, Miami Beach, FL 33139",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format&fit=crop&q=60",
        hours: { open: 17, close: 24 },
        menuUrl: "https://carbonemiami.com/menu"
    },
    {
        id: 22,
        name: "Zuma",
        cuisine: "Japanese",
        price: "$$$",
        rating: 4.5,
        deal: "Business lunch menu",
        emoji: "🍱",
        address: "270 Biscayne Blvd Way, Miami, FL 33131",
        image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=500&auto=format&fit=crop&q=60",
        hours: { open: 12, close: 23 },
        menuUrl: "https://zumarestaurant.com/locations/miami/menus/"
    },
    {
        id: 23,
        name: "LPM Restaurant",
        cuisine: "French",
        price: "$$$",
        rating: 4.6,
        deal: "Prix-fixe lunch menu",
        emoji: "🇫🇷",
        address: "1300 Brickell Bay Dr, Miami, FL 33131",
        image: "https://images.unsplash.com/photo-1550966841-3ee7adac1af8?w=500&auto=format&fit=crop&q=60",
        hours: { open: 12, close: 22 },
        menuUrl: "https://lpmrestaurants.com/miami/menus/"
    },
    {
        id: 24,
        name: "Pubbelly Sushi",
        cuisine: "Japanese",
        price: "$$",
        rating: 4.4,
        deal: "Lunch sashimi special",
        emoji: "🍤",
        address: "1424 20th St, Miami Beach, FL 33139",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&auto=format&fit=crop&q=60",
        hours: { open: 11, close: 23 },
        menuUrl: "https://pubbellysushi.com/menus/"
    },
    {
        id: 25,
        name: "Harry's Pizzeria",
        cuisine: "Italian",
        price: "$$",
        rating: 4.5,
        deal: "Pizza + salad lunch combo",
        emoji: "🍕",
        address: "3918 NE 2nd Ave, Miami, FL 33137",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&auto=format&fit=crop&q=60",
        hours: { open: 11, close: 22 },
        menuUrl: "https://harryspizzeria.com/menu"
    },
    {
        id: 26,
        name: "Michael's Genuine",
        cuisine: "American",
        price: "$$",
        rating: 4.6,
        deal: "Seasonal farm-to-table lunch",
        emoji: "🥗",
        address: "130 NE 40th St, Miami, FL 33137",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
        hours: { open: 11, close: 23 },
        menuUrl: "https://michaelsgenuine.com/menus/"
    },
    {
        id: 27,
        name: "Pollo Tropical",
        cuisine: "Latin Fusion",
        price: "$",
        rating: 4.1,
        deal: "TropiChop lunch bowl special",
        emoji: "🍗",
        address: "1454 Alton Rd, Miami Beach, FL 33139",
        image: "https://images.unsplash.com/photo-1596797038530-2c39fa81bd47?w=500&auto=format&fit=crop&q=60",
        hours: { open: 10, close: 24 },
        menuUrl: "https://www.pollotropical.com/menu"
    },
    {
        id: 28,
        name: "BurgerFi",
        cuisine: "American",
        price: "$",
        rating: 4.2,
        deal: "BurgerFi Cheeseburger + fries deal",
        emoji: "🍔",
        address: "1242 Washington Ave, Miami Beach, FL 33139",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
        hours: { open: 11, close: 24 },
        menuUrl: "https://www.burgerfi.com/menu"
    },
    {
        id: 29,
        name: "The Salty Donut",
        cuisine: "Bakery",
        price: "$",
        rating: 4.7,
        deal: "Cold brew + donut box deal",
        emoji: "🍩",
        address: "50 NW 23rd St, Miami, FL 33127",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60",
        hours: { open: 7, close: 22 },
        menuUrl: "https://www.saltydonut.com/menu"
    },
    {
        id: 30,
        name: "Rosetta Bakery",
        cuisine: "Bakery",
        price: "$$",
        rating: 4.6,
        deal: "Focaccia sandwich + coffee",
        emoji: "🥪",
        address: "1666 Collins Ave, Miami Beach, FL 33139",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60",
        hours: { open: 7, close: 21 },
        menuUrl: "https://www.rosettabakery.com/menu"
    },
];

// Helper to check if restaurant is open
function isRestaurantOpen(restaurant) {
    const now = new Date();
    const currentHour = now.getHours();

    // Simple 24h check if open/close are same
    if (restaurant.hours.open === restaurant.hours.close && restaurant.hours.open === 0) return true;

    // Handle cases where open < close (same day)
    if (restaurant.hours.open < restaurant.hours.close) {
        return currentHour >= restaurant.hours.open && currentHour < restaurant.hours.close;
    }

    // Handle cases where open > close (overnight)
    return currentHour >= restaurant.hours.open || currentHour < restaurant.hours.close;
}

// Helper to calculate distance in miles
function getDistanceFromLatLonInMi(lat1, lon1, lat2, lon2) {
    var R = 3958.8; // Radius of the earth in miles
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in miles
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

// Generate random coordinates within a range
function getRandomCoordinate(base, range) {
    return base + (Math.random() - 0.5) * range;
}

export function getRestaurants(userLat = null, userLng = null) {
    // Start with base restaurants and filter by open status
    let restaurants = baseRestaurants.filter(isRestaurantOpen);

    if (!userLat || !userLng) {
        // Return with original mocked distances if no location provided
        return restaurants.map(r => ({ ...r, distance: r.distance || (Math.random() * 2 + 0.1).toFixed(1) + " mi" }));
    }

    return restaurants.map(r => {
        // Generate a mock location near the user
        // 1 deg lat is ~69 miles. We want a strict range.
        // We generate coordinates within a box that fits the radius.
        // range of 0.1 deg is roughly 7 miles total (+/- 3.5 miles)
        const range = 0.075;
        const lat = getRandomCoordinate(userLat, range);
        const lng = getRandomCoordinate(userLng, range);
        const dist = getDistanceFromLatLonInMi(userLat, userLng, lat, lng);

        return {
            ...r,
            distance: dist.toFixed(1) + " mi",
            distanceValue: dist,
            lat,
            lng
        };
    })
        .filter(r => r.distanceValue <= 5) // STRICTLY enforce 5 miles or less
        .sort((a, b) => a.distanceValue - b.distanceValue);
}

// Default export with only open restaurants within a default distance
export const restaurants = baseRestaurants.filter(isRestaurantOpen).map(r => ({
    ...r,
    distanceValue: 1.0,
    distance: "1.0 mi"
}));
