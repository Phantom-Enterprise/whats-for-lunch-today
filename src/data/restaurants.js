
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
        hours: { open: 8, close: 22 }, // 8 AM - 10 PM
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
        hours: { open: 11, close: 22 }, // 11 AM - 10 PM
        menuUrl: "https://www.joesstonecrab.com/menu"
    },
    {
        id: 3,
        name: "Flanigan's Seafood Bar",
        cuisine: "American",
        price: "$",
        rating: 4.3,
        deal: null,
        emoji: "🍔",
        address: "3110 Coconut Grove Dr, Coconut Grove, FL 33133",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
        hours: { open: 11, close: 23 }, // 11 AM - 11 PM
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
        hours: { open: 11, close: 22 }, // 11 AM - 10 PM
        menuUrl: "https://www.taquizamiami.com/menu"
    },
    {
        id: 5,
        name: "Pura Vida",
        cuisine: "Latin Fusion",
        price: "$$",
        rating: 4.5,
        deal: null,
        emoji: "🥗",
        address: "110 Washington Ave, Miami Beach, FL 33139",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D",
        hours: { open: 8, close: 21 }, // 8 AM - 9 PM
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
        hours: { open: 11, close: 22 }, // 11 AM - 10 PM
        menuUrl: "https://www.bombaydarbar.com/menu"
    },
    {
        id: 7,
        name: "Andiamo Pizza",
        cuisine: "Italian",
        price: "$$",
        rating: 4.6,
        deal: null,
        emoji: "🍕",
        address: "5600 Biscayne Blvd, Miami, FL 33137",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
        hours: { open: 11, close: 23 }, // 11 AM - 11 PM
        menuUrl: "https://www.andiamopizzeria.com/menu"
    },
    {
        id: 8,
        name: "Hakkasan Miami",
        cuisine: "Chinese",
        price: "$$$",
        rating: 4.5,
        deal: null,
        emoji: "🥟",
        address: "4441 Collins Ave, Miami Beach, FL 33140",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c423c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGltJTIwc3VtfGVufDB8fDB8fHww",
        hours: { open: 12, close: 23 }, // 12 PM - 11 PM
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
        hours: { open: 7, close: 23 }, // 7 AM - 11 PM
        menuUrl: "https://lacarreta.com/menu/"
    },
    {
        id: 10,
        name: "Garcia's Seafood",
        cuisine: "Seafood",
        price: "$$",
        rating: 4.5,
        deal: null,
        emoji: "🦞",
        address: "398 NW North River Dr, Miami, FL 33128",
        image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9ic3RlcnxlbnwwfHwwfHx8MA%3D%3D",
        hours: { open: 11, close: 22 }, // 11 AM - 10 PM
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
        hours: { open: 11, close: 23 }, // 11 AM - 11 PM
        menuUrl: "https://www.coyotaco.com/menu"
    },
    {
        id: 12,
        name: "Yardbird Southern Table",
        cuisine: "American",
        price: "$$",
        rating: 4.7,
        deal: null,
        emoji: "🍗",
        address: "1600 Lenox Ave, Miami Beach, FL 33139",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
        hours: { open: 11, close: 22 }, // 11 AM - 10 PM
        menuUrl: "https://www.runchickenrun.com/miami-beach"
    },
    {
        id: 13,
        name: "Makoto",
        cuisine: "Japanese",
        price: "$$$",
        rating: 4.8,
        deal: null,
        emoji: "🍣",
        address: "9700 Collins Ave, Bal Harbour, FL 33154",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8fDA%3D",
        hours: { open: 12, close: 23 }, // 12 PM - 11 PM
        menuUrl: "https://makoto-restaurant.com/bal-harbour/menus/"
    },
];

// Helper to check if restaurant is open
function isRestaurantOpen(restaurant) {
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour >= restaurant.hours.open && currentHour < restaurant.hours.close;
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
    let restaurants = baseRestaurants;

    // Filter to only open restaurants
    restaurants = restaurants.filter(isRestaurantOpen);

    if (!userLat || !userLng) {
        // Return with original mocked distances if no location provided
        return restaurants.map(r => ({ ...r, distance: r.distance || (Math.random() * 2 + 0.1).toFixed(1) + " mi" }));
    }

    return restaurants.map(r => {
        // Generate a mock location near the user (within ~5 miles)
        // 1 deg lat is ~69 miles. 5 miles is ~0.072 degrees
        const lat = getRandomCoordinate(userLat, 0.075);
        const lng = getRandomCoordinate(userLng, 0.075);
        const dist = getDistanceFromLatLonInMi(userLat, userLng, lat, lng);

        return {
            ...r,
            distance: dist.toFixed(1) + " mi",
            distanceValue: dist, // Store numeric value for filtering
            // Store exact coords if we want to map them precisely later
            lat,
            lng
        };
    })
        .filter(r => r.distanceValue <= 5) // Only show restaurants within 5 miles
        .sort((a, b) => a.distanceValue - b.distanceValue);
}

// Default export for backward compatibility if needed, though we will switch to using named export
export const restaurants = baseRestaurants.filter(isRestaurantOpen).map(r => ({ ...r, distance: "1.0 mi" })); // Default fallback
