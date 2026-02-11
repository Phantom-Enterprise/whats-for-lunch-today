
const baseRestaurants = [
    {
        id: 1,
        name: "Sushi Zen",
        cuisine: "Japanese",
        price: "$$",
        rating: 4.8,
        deal: "10% off lunch special",
        emoji: "🍣",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8fDA%3D",
        hours: { open: 11, close: 22 }, // 11 AM - 10 PM
        menuUrl: "https://www.google.com/search?q=Sushi+Zen+menu"
    },
    {
        id: 2,
        name: "Burger Bliss",
        cuisine: "American",
        price: "$",
        rating: 4.5,
        deal: null,
        emoji: "🍔",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
        hours: { open: 10, close: 23 }, // 10 AM - 11 PM
        menuUrl: "https://www.google.com/search?q=Burger+Bliss+menu"
    },
    {
        id: 3,
        name: "Pasta Paradise",
        cuisine: "Italian",
        price: "$$$",
        rating: 4.9,
        deal: "Free dessert with entree",
        emoji: "🍝",
        image: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D",
        hours: { open: 12, close: 22 }, // 12 PM - 10 PM
        menuUrl: "https://www.google.com/search?q=Pasta+Paradise+menu"
    },
    {
        id: 4,
        name: "Taco Fiesta",
        cuisine: "Mexican",
        price: "$",
        rating: 4.6,
        deal: "Taco Tuesday: $2 tacos",
        emoji: "🌮",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3N8ZW58MHx8MHx8fDA%3D",
        hours: { open: 11, close: 21 }, // 11 AM - 9 PM
        menuUrl: "https://www.google.com/search?q=Taco+Fiesta+menu"
    },
    {
        id: 5,
        name: "Green Garden",
        cuisine: "Salad",
        price: "$$",
        rating: 4.7,
        deal: null,
        emoji: "🥗",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D",
        hours: { open: 9, close: 20 }, // 9 AM - 8 PM
        menuUrl: "https://www.google.com/search?q=Green+Garden+menu"
    },
    {
        id: 6,
        name: "Curry House",
        cuisine: "Indian",
        price: "$$",
        rating: 4.4,
        deal: "Free naan with curry",
        emoji: "🍛",
        image: "https://images.unsplash.com/photo-1631298045866-932f22295b99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3Vycnl8ZW58MHx8MHx8fDA%3D",
        hours: { open: 11, close: 22 }, // 11 AM - 10 PM
        menuUrl: "https://www.google.com/search?q=Curry+House+menu"
    },
    {
        id: 7,
        name: "Pizza Palace",
        cuisine: "Italian",
        price: "$$",
        rating: 4.3,
        deal: null,
        emoji: "🍕",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
        hours: { open: 11, close: 23 }, // 11 AM - 11 PM
        menuUrl: "https://www.google.com/search?q=Pizza+Palace+menu"
    },
    {
        id: 8,
        name: "Dim Sum Delight",
        cuisine: "Chinese",
        price: "$$",
        rating: 4.6,
        deal: null,
        emoji: "🥟",
        image: "https://images.unsplash.com/photo-1496116218417-1a781b1c423c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGltJTIwc3VtfGVufDB8fDB8fHww",
        hours: { open: 10, close: 21 }, // 10 AM - 9 PM
        menuUrl: "https://www.google.com/search?q=Dim+Sum+Delight+menu"
    },
    {
        id: 9,
        name: "Havana Cafe",
        cuisine: "Cuban",
        price: "$$",
        rating: 4.8,
        deal: "Cafecito + pastelito combo $5",
        emoji: "🇨🇺",
        image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ViYW4lMjBmb29kfGVufDB8fDB8fHww",
        hours: { open: 7, close: 20 }, // 7 AM - 8 PM
        menuUrl: "https://www.google.com/search?q=Havana+Cafe+menu"
    },
    {
        id: 10,
        name: "Stone Crab Shack",
        cuisine: "Seafood",
        price: "$$$",
        rating: 4.9,
        deal: null,
        emoji: "🦀",
        image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
        hours: { open: 12, close: 22 }, // 12 PM - 10 PM
        menuUrl: "https://www.google.com/search?q=Stone+Crab+Shack+menu"
    },
    {
        id: 11,
        name: "Island Jerk Kitchen",
        cuisine: "Caribbean",
        price: "$",
        rating: 4.7,
        deal: "Jerk chicken platter + plantains",
        emoji: "🏝️",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amVyayUyMGNoaWNrZW58ZW58MHx8MHx8fDA%3D",
        hours: { open: 11, close: 21 }, // 11 AM - 9 PM
        menuUrl: "https://www.google.com/search?q=Island+Jerk+Kitchen+menu"
    },
    {
        id: 12,
        name: "Ceviche Bar",
        cuisine: "Latin Fusion",
        price: "$$",
        rating: 4.6,
        deal: "Happy hour: $8 ceviche",
        emoji: "🐟",
        image: "https://images.unsplash.com/photo-1580217593608-61931cefc821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2V2aWNoZXxlbnwwfHwwfHx8MA%3D%3D",
        hours: { open: 11, close: 23 }, // 11 AM - 11 PM
        menuUrl: "https://www.google.com/search?q=Ceviche+Bar+menu"
    },
    {
        id: 13,
        name: "Key West Grill",
        cuisine: "Seafood",
        price: "$$",
        rating: 4.5,
        deal: null,
        emoji: "🦞",
        image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9ic3RlcnxlbnwwfHwwfHx8MA%3D%3D",
        hours: { open: 11, close: 22 }, // 11 AM - 10 PM
        menuUrl: "https://www.google.com/search?q=Key+West+Grill+menu"
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
            // Store exact coords if we want to map them precisely later
            lat,
            lng
        };
    }).sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
}

// Default export for backward compatibility if needed, though we will switch to using named export
export const restaurants = baseRestaurants.filter(isRestaurantOpen).map(r => ({ ...r, distance: "1.0 mi" })); // Default fallback
