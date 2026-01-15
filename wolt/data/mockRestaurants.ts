export const MOCK_RESTAURANTS = [
    {
        id: '1',
        name: 'Pizza Hut',
        rating: 4.2,
        time: '30-40 min',
        image: 'https://picsum.photos/400/300?random=10',
        cuisine: 'Italian, Pizza',
        location: 'Downtown, City Circle',
        menu: [
            {
                title: 'Recommended',
                items: [
                    { id: '101', name: 'Margherita Pizza', price: 299, description: 'Classic cheese pizza with basil.', isVeg: true, image: 'https://picsum.photos/200/200?random=20' },
                    { id: '102', name: 'Pepperoni Pizza', price: 399, description: 'Spicy pepperoni with mozzarella.', isVeg: false, image: 'https://picsum.photos/200/200?random=21' },
                ]
            },
            {
                title: 'Sides',
                items: [
                    { id: '103', name: 'Garlic Bread', price: 149, description: 'Buttery garlic bread sticks.', isVeg: true, image: 'https://picsum.photos/200/200?random=22' },
                ]
            }
        ]
    },
    {
        id: '2',
        name: 'Burger King',
        rating: 4.5,
        time: '25-35 min',
        image: 'https://picsum.photos/400/300?random=11',
        cuisine: 'American, Fast Food',
        location: 'Mall Road',
        menu: [
            {
                title: 'Whoppers',
                items: [
                    { id: '201', name: 'Veg Whopper', price: 199, description: 'Crunchy veg patty with fresh veggies.', isVeg: true, image: 'https://picsum.photos/200/200?random=23' },
                    { id: '202', name: 'Chicken Whopper', price: 249, description: 'Flame grilled chicken patty.', isVeg: false, image: 'https://picsum.photos/200/200?random=24' },
                ]
            }
        ]
    },
    // Add more mock data as needed for other IDs from RestaurantList
    { id: '3', name: 'Pure Veg Delights', rating: 4.0, time: '20-30 min', image: 'https://picsum.photos/400/300?random=12', cuisine: 'North Indian, South Indian', location: 'Market Place', menu: [] },
    { id: '4', name: 'KFC', rating: 3.8, time: '40-50 min', image: 'https://picsum.photos/400/300?random=13', cuisine: 'Chicken, Fast Food', location: 'High Street', menu: [] },
    { id: '5', name: 'Green Bowl', rating: 4.7, time: '15-25 min', image: 'https://picsum.photos/400/300?random=14', cuisine: 'Healthy, Salads', location: 'Tech Park', menu: [] },
];
