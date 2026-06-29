import { MenuItem, Testimonial, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Burgers
  {
    id: 'b1',
    name: 'The Lava Crunch',
    description: 'Crispy golden zinger fillet smothered in our spicy house lava sauce, layered with cheddar cheese, jalapeños, and fresh lettuce in a toasted sesame bun.',
    price: 490,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'b2',
    name: 'Double Smash Flame',
    description: 'Two premium smashed beef patties seared to juicy perfection, dual melted cheddar slices, caramelized grilled onions, and our signature smokey flame sauce.',
    price: 650,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'b3',
    name: 'Thunder Chicken Grill',
    description: 'Charbroiled chicken breast marinated in traditional spices, topped with fiery jalapeños, melted swiss cheese, and dynamic white garlic mayo.',
    price: 470,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80',
    isSpicy: true
  },
  
  // Wraps
  {
    id: 'w1',
    name: 'Spicy Zinger Wrap',
    description: 'Crispy zinger strips, fresh lettuce, diced tomatoes, sweet chilli drizzle, and thick garlic sauce wrapped snug in a toasted tortilla.',
    price: 390,
    category: 'wraps',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f06?auto=format&fit=crop&w=600&q=80',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'w2',
    name: 'Flame Grilled Tikka Wrap',
    description: 'Smokey clay-oven baked chicken tikka chunks, pickled onions, and a fresh zesty mint coriander chutney inside a soft toasted wrap.',
    price: 350,
    category: 'wraps',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80'
  },

  // Sides
  {
    id: 's1',
    name: 'Fiery Loaded Fries',
    description: 'Crispy double-fried golden potatoes loaded with diced zinger chicken, pickled jalapeños, melted cheddar cheese sauce, and a generous splash of flame sauce.',
    price: 480,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 's2',
    name: 'Garlic Mayo Fries',
    description: 'Crispy-cut golden fries seasoned with sea salt and served with a generous coating of our signature creamy house-garlic mayonnaise.',
    price: 280,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 's3',
    name: 'Cheesy Jalapeño Poppers',
    description: 'Golden melted mozzarella, cream cheese, and finely chopped spicy green jalapeños inside a crunchy breadcrumb coating (6 pcs).',
    price: 320,
    category: 'sides',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80'
  },

  // Drinks
  {
    id: 'd1',
    name: 'Mint Margarita',
    description: 'An icy-cold, refreshing blended drink with fresh mint leaves, lime juice, brown sugar, and carbonated lemon-lime soda.',
    price: 220,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'd2',
    name: 'Peshawari Green Kahwa',
    description: 'Traditional soothing green tea brewed with cardamoms, saffron hints, and lemon slice. Perfect digestive.',
    price: 120,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'd3',
    name: 'Chilled Soft Drink',
    description: 'Ice-cold can of your choice: Coca-Cola, Sprite, or Fanta served with lime wedges.',
    price: 120,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
  },

  // Combos
  {
    id: 'c1',
    name: 'The Solo Spark',
    description: '1 Lava Crunch Burger, 1 Regular Salted Fries, and 1 Chilled Soft Drink can. The perfect lunch combo.',
    price: 699,
    category: 'combos',
    image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'c2',
    name: 'The Flame Duo',
    description: '2 Double Smash Flame Burgers, 1 Regular Fiery Loaded Fries, and 2 Chilled Soft Drink cans. Share the smoke!',
    price: 1499,
    category: 'combos',
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'c3',
    name: 'The Triple Threat Pack',
    description: '3 Burgers of your choice, 1 Jumbo Platter Fries, and 1.5 Litre Chilled Soft Drink. Absolute feast for your squad.',
    price: 1999,
    category: 'combos',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sajid Khan',
    role: 'Food Blogger, Lahore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    stars: 5,
    quote: 'The Lava Crunch is absolutely out of this world! Standard zinger burgers are nothing compared to this juicy, spicy masterpiece. The flame sauce has an incredible kick. Delivery was lightning fast!'
  },
  {
    id: 't2',
    name: 'Ayesha Siddiqui',
    role: 'Verified Customer, Karachi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    stars: 5,
    quote: 'Highly recommend the Double Smash Flame. The beef patties are smashed perfectly—crispy edges yet super juicy in the center. Melted cheese and grilled onions are just heaven. Easily the best beef burger in Pakistan!'
  },
  {
    id: 't3',
    name: 'Zainab Malik',
    role: 'Regular Diner, Islamabad',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    stars: 5,
    quote: 'Mint Margarita is incredibly refreshing and ice cold! Also, their Fiery Loaded Fries are an absolute meal on their own—packed with crispy chicken bits and dynamic melted cheddar sauce. 10/10.'
  },
  {
    id: 't4',
    name: 'Hamza Tariq',
    role: 'Tech Engineer, Lahore',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    stars: 5,
    quote: 'FireBites service is exceptional. Their app makes ordering so seamless, and the food arrives steaming hot in premium, eco-friendly dynamic cardboard packages. The Flame Duo combo is hands-down the best value for money!'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Sizzling Smash Patty',
    category: 'Behind the Scenes',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g2',
    title: 'Fiery Loaded Fries Prep',
    category: 'Fresh out of fryer',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g3',
    title: 'Gourmet Red Tomatoes & Greens',
    category: 'Fresh Ingredients',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g4',
    title: 'Premium Eco-Packaging',
    category: 'Carefully Packed',
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g5',
    title: 'The Lava Crunch Stack',
    category: 'Signature Burger',
    image: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'g6',
    title: 'Signature Sesame Brioche Buns',
    category: 'Baked Daily',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80'
  }
];
