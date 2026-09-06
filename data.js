// StyleHub Product Database
const PRODUCTS = [
  {
    id: 1,
    name: "Premium Leather Moto Jacket",
    category: "Men",
    subcategory: "Outerwear",
    price: 12999,
    originalPrice: 18999,
    discount: 31,
    badge: "Best Seller",
    colors: [
      { name: "Midnight Black", hex: "#1a1a1a" },
      { name: "Espresso Brown", hex: "#5c3a1e" },
      { name: "Olive Green", hex: "#556b2f" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 432,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&h=750&fit=crop"
    ],
    description: "Elevate your everyday wardrobe with our Premium Leather Moto Jacket. Designed with a rebellious yet sophisticated edge, this piece offers an impeccable slim fit that molds perfectly to your shape over time.",
    specs: ["100% Premium Full-Grain Sheep Leather", "Asymmetrical zip fastening and snap-button lapels", "Multiple zippered pockets and adjustable waist tabs", "Fully lined with breathable viscose for all-day comfort"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: true
  },
  {
    id: 2,
    name: "Oversized Cotton Tee",
    category: "Men",
    subcategory: "Basics",
    price: 1299,
    originalPrice: null,
    discount: 0,
    badge: "NEW",
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Sage", hex: "#9caf88" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 218,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=750&fit=crop"
    ],
    description: "The perfect everyday essential. Our Oversized Cotton Tee features a relaxed, boxy silhouette crafted from premium 100% organic cotton for unparalleled comfort.",
    specs: ["100% Organic Cotton, 220 GSM", "Relaxed oversized fit", "Ribbed crew neckline", "Pre-shrunk fabric"],
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: false
  },
  {
    id: 3,
    name: "Tailored Black Blazer",
    category: "Men",
    subcategory: "Workwear",
    price: 4499,
    originalPrice: null,
    discount: 0,
    badge: null,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Navy", hex: "#1b2a4a" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=750&fit=crop"
    ],
    description: "Command attention in our Tailored Black Blazer. Cut from premium Italian wool blend, this blazer features a modern slim fit with structured shoulders and a clean silhouette.",
    specs: ["Italian wool-blend fabric", "Slim-fit tailored cut", "Two-button closure", "Interior pockets with satin lining"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: false
  },
  {
    id: 4,
    name: "Classic Denim Jacket",
    category: "Women",
    subcategory: "Outerwear",
    price: 2899,
    originalPrice: 3499,
    discount: 17,
    badge: null,
    colors: [
      { name: "Light Wash", hex: "#7eb4d2" },
      { name: "Dark Indigo", hex: "#2c3e6b" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6,
    reviews: 289,
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=600&h=750&fit=crop"
    ],
    description: "A timeless wardrobe staple reimagined. Our Classic Denim Jacket features a flattering cropped fit with authentic washed detailing and brass hardware.",
    specs: ["100% Premium Denim Cotton", "Cropped relaxed fit", "Brass button closure", "Adjustable button cuffs"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 5,
    name: "Floral Midi Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 3299,
    originalPrice: null,
    discount: 0,
    badge: "TRENDING",
    colors: [
      { name: "Blush Floral", hex: "#f4c2c2" },
      { name: "Navy Floral", hex: "#1b2a4a" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviews: 345,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=750&fit=crop"
    ],
    description: "Embrace effortless elegance with our Floral Midi Dress. Featuring a romantic print on flowing viscose fabric, this dress transitions seamlessly from brunch to evening.",
    specs: ["100% Viscose fabric", "V-neckline with wrap detail", "Self-tie waist belt", "Midi length with side slit"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: false
  },
  {
    id: 6,
    name: "Relaxed Fit Chinos",
    category: "Men",
    subcategory: "Bottoms",
    price: 2499,
    originalPrice: null,
    discount: 0,
    badge: null,
    colors: [
      { name: "Khaki", hex: "#c3b091" },
      { name: "Olive", hex: "#556b2f" },
      { name: "Navy", hex: "#1b2a4a" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.4,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=750&fit=crop"
    ],
    description: "Our Relaxed Fit Chinos deliver all-day comfort without sacrificing style. Made from a soft cotton-stretch blend with a gently tapered leg.",
    specs: ["98% Cotton, 2% Elastane", "Relaxed fit with tapered leg", "Button fly with zip closure", "Side and back pockets"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: false
  },
  {
    id: 7,
    name: "Utility Technical Jacket",
    category: "Men",
    subcategory: "Outerwear",
    price: 4199,
    originalPrice: 5999,
    discount: 30,
    badge: null,
    colors: [
      { name: "Dark Navy", hex: "#1b2a4a" },
      { name: "Forest Green", hex: "#2d5a27" }
    ],
    sizes: ["M", "L", "XL"],
    rating: 4.6,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1544923246-77307dd270b5?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544923246-77307dd270b5?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=750&fit=crop"
    ],
    description: "Engineered for the modern explorer. Our Utility Technical Jacket combines weather-resistant performance with urban style.",
    specs: ["Water-resistant nylon shell", "Fleece-lined interior", "Multiple utility pockets", "Adjustable hood and cuffs"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 8,
    name: "Platform Minimalist Sneaker",
    category: "Footwear",
    subcategory: "Sneakers",
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    badge: null,
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    sizes: ["6", "7", "8", "9", "10"],
    rating: 4.3,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=750&fit=crop"
    ],
    description: "Step into elevated minimalism. Our Platform Sneaker features a clean design on a chunky sole for a modern streetwear aesthetic.",
    specs: ["Premium leather upper", "Cushioned platform sole", "Memory foam insole", "Rubber outsole for grip"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 9,
    name: "Structured Leather Crossbody",
    category: "Accessories",
    subcategory: "Bags",
    price: 3149,
    originalPrice: 4499,
    discount: 30,
    badge: null,
    colors: [
      { name: "Tan", hex: "#d2691e" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    sizes: ["One Size"],
    rating: 4.7,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&h=750&fit=crop"
    ],
    description: "Refined sophistication meets everyday practicality. Our Structured Leather Crossbody is crafted from full-grain leather with gold-tone hardware.",
    specs: ["Full-grain Italian leather", "Adjustable crossbody strap", "Gold-tone hardware", "Interior zip and slip pockets"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 10,
    name: "Heavyweight Oversized Hoodie",
    category: "Men",
    subcategory: "Essentials",
    price: 1875,
    originalPrice: 2500,
    discount: 25,
    badge: null,
    colors: [
      { name: "Sage Green", hex: "#8fbc8f" },
      { name: "Charcoal", hex: "#36454f" },
      { name: "Cream", hex: "#fffdd0" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 521,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1578768079470-c7e3c1e702b1?w=600&h=750&fit=crop"
    ],
    description: "Unmatched comfort in our Heavyweight Oversized Hoodie. Made from 400 GSM French terry cotton for a luxuriously thick feel.",
    specs: ["400 GSM French Terry Cotton", "Oversized drop-shoulder fit", "Kangaroo pocket", "Ribbed cuffs and hem"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 11,
    name: "Quilted Puffer Jacket",
    category: "Women",
    subcategory: "Outerwear",
    price: 3899,
    originalPrice: 5999,
    discount: 35,
    badge: null,
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Dusty Rose", hex: "#dcae96" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.5,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600&h=750&fit=crop"
    ],
    description: "Stay warm without compromising style. Our Quilted Puffer Jacket features synthetic down insulation with a flattering cinched waist.",
    specs: ["Water-resistant outer shell", "Synthetic down insulation", "Two-way zip closure", "Detachable faux-fur hood"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 12,
    name: "Pro Series Smart Watch",
    category: "Accessories",
    subcategory: "Watches",
    price: 7999,
    originalPrice: 9999,
    discount: 20,
    badge: null,
    colors: [
      { name: "Midnight Black", hex: "#1a1a1a" },
      { name: "Silver", hex: "#c0c0c0" }
    ],
    sizes: ["One Size"],
    rating: 4.4,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=750&fit=crop"
    ],
    description: "Track your fitness and stay connected with the Pro Series Smart Watch. Features health monitoring, GPS, and a stunning AMOLED display.",
    specs: ["1.4\" AMOLED Display", "Heart rate & SpO2 monitoring", "Built-in GPS", "5 ATM water resistance"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 13,
    name: "Slim Fit Dark Wash Jeans",
    category: "Men",
    subcategory: "Bottoms",
    price: 3499,
    originalPrice: 4999,
    discount: 30,
    badge: null,
    colors: [
      { name: "Dark Indigo", hex: "#2c3e6b" },
      { name: "Washed Black", hex: "#3b3b3b" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 287,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=750&fit=crop"
    ],
    description: "Our Slim Fit Dark Wash Jeans deliver a sleek, modern silhouette. Premium Japanese denim with just the right amount of stretch.",
    specs: ["98% Japanese Denim, 2% Elastane", "Slim fit through hip and thigh", "5-pocket construction", "Zip fly with button closure"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 14,
    name: "Classic Aviator Sunglasses",
    category: "Accessories",
    subcategory: "Eyewear",
    price: 2499,
    originalPrice: null,
    discount: 0,
    badge: null,
    colors: [
      { name: "Gold/Green", hex: "#c5a55a" },
      { name: "Silver/Blue", hex: "#8eaabe" }
    ],
    sizes: ["One Size"],
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=750&fit=crop"
    ],
    description: "Iconic style meets premium UV protection. Our Classic Aviator Sunglasses feature lightweight metal frames and polarized lenses.",
    specs: ["Polarized CR-39 lenses", "100% UV400 protection", "Lightweight metal frame", "Spring-loaded hinges"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: false
  },
  {
    id: 15,
    name: "Leather Chelsea Boots",
    category: "Footwear",
    subcategory: "Boots",
    price: 6999,
    originalPrice: null,
    discount: 0,
    badge: null,
    colors: [
      { name: "Dark Brown", hex: "#3e2723" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.8,
    reviews: 224,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=750&fit=crop"
    ],
    description: "A modern gentleman's essential. Our Leather Chelsea Boots are handcrafted from full-grain calfskin with elastic side panels and a stacked leather heel.",
    specs: ["Full-grain calfskin leather", "Elastic side panels", "Goodyear welt construction", "Leather sole with rubber insert"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: false
  },
  {
    id: 16,
    name: "Linen Summer Shirt",
    category: "Men",
    subcategory: "Basics",
    price: 1799,
    originalPrice: 2299,
    discount: 22,
    badge: "NEW",
    colors: [
      { name: "Sky Blue", hex: "#87ceeb" },
      { name: "White", hex: "#ffffff" },
      { name: "Peach", hex: "#ffdab9" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=600&h=750&fit=crop"
    ],
    description: "Stay cool and look sharp with our Linen Summer Shirt. Lightweight and breathable, perfect for warm-weather days and vacation styling.",
    specs: ["100% European Linen", "Regular fit", "Button-down collar", "Curved hem"],
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: true
  },
  {
    id: 17,
    name: "Wrap Midi Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 2799,
    originalPrice: 3999,
    discount: 30,
    badge: "TRENDING",
    colors: [
      { name: "Burgundy", hex: "#722f37" },
      { name: "Emerald", hex: "#046307" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=750&fit=crop"
    ],
    description: "Elegant and versatile, our Wrap Midi Dress flatters every body type. Made from flowing crepe fabric with a self-tie waist.",
    specs: ["100% Polyester Crepe", "True wrap silhouette", "Self-tie belt", "Midi length"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: true
  },
  {
    id: 18,
    name: "Cargo Jogger Pants",
    category: "Men",
    subcategory: "Bottoms",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    badge: null,
    colors: [
      { name: "Olive", hex: "#556b2f" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Khaki", hex: "#c3b091" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.3,
    reviews: 245,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=750&fit=crop"
    ],
    description: "Our Cargo Jogger Pants combine streetwear style with ultimate comfort. Elastic waistband with adjustable drawcord and multiple utility pockets.",
    specs: ["Cotton-polyester blend", "Elastic waistband with drawcord", "6 utility pockets", "Ribbed ankle cuffs"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 19,
    name: "Premium Polo Shirt",
    category: "Men",
    subcategory: "Basics",
    price: 1499,
    originalPrice: null,
    discount: 0,
    badge: "NEW",
    colors: [
      { name: "Navy", hex: "#1b2a4a" },
      { name: "White", hex: "#ffffff" },
      { name: "Forest Green", hex: "#228B22" },
      { name: "Burgundy", hex: "#722f37" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1625910513413-5fc421e40e1e?w=600&h=750&fit=crop"
    ],
    description: "Our Premium Polo Shirt is crafted from piqué cotton with a modern slim fit. Perfect for both casual and smart-casual occasions.",
    specs: ["100% Piqué Cotton", "Slim fit", "Two-button placket", "Ribbed collar and cuffs"],
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: false
  },
  {
    id: 20,
    name: "Canvas Bucket Hat",
    category: "Accessories",
    subcategory: "Hats",
    price: 899,
    originalPrice: 1299,
    discount: 31,
    badge: null,
    colors: [
      { name: "Beige", hex: "#d2b48c" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Olive", hex: "#556b2f" }
    ],
    sizes: ["One Size"],
    rating: 4.4,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&h=750&fit=crop"
    ],
    description: "A streetwear essential. Our Canvas Bucket Hat provides sun protection with effortless style.",
    specs: ["100% Cotton Canvas", "Embroidered eyelets", "Stitched brim", "One size fits most"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 21,
    name: "Running Performance Shoes",
    category: "Footwear",
    subcategory: "Athletic",
    price: 4999,
    originalPrice: 6999,
    discount: 29,
    badge: "Best Seller",
    colors: [
      { name: "Black/Volt", hex: "#1a1a1a" },
      { name: "White/Blue", hex: "#f0f0ff" }
    ],
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.8,
    reviews: 534,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=750&fit=crop"
    ],
    description: "Engineered for speed and comfort. Our Running Performance Shoes feature responsive cushioning and breathable mesh upper.",
    specs: ["Breathable mesh upper", "Responsive foam midsole", "Rubber outsole", "Reflective details"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: true
  },
  {
    id: 22,
    name: "Ribbed Crop Top",
    category: "Women",
    subcategory: "Basics",
    price: 999,
    originalPrice: null,
    discount: 0,
    badge: "NEW",
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Black", hex: "#1a1a1a" },
      { name: "Lavender", hex: "#b57edc" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.5,
    reviews: 278,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&h=750&fit=crop"
    ],
    description: "A wardrobe essential. Our Ribbed Crop Top features a flattering silhouette in soft, stretchy ribbed cotton.",
    specs: ["95% Cotton, 5% Elastane", "Ribbed texture", "Cropped length", "Round neckline"],
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: false
  },
  {
    id: 23,
    name: "Wool Blend Overcoat",
    category: "Men",
    subcategory: "Outerwear",
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    badge: null,
    colors: [
      { name: "Camel", hex: "#c19a6b" },
      { name: "Charcoal", hex: "#36454f" }
    ],
    sizes: ["M", "L", "XL"],
    rating: 4.9,
    reviews: 97,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1544923246-77307dd270b5?w=600&h=750&fit=crop"
    ],
    description: "Timeless sophistication in our Wool Blend Overcoat. Tailored for a clean silhouette with notch lapels and a single-breasted front.",
    specs: ["70% Wool, 30% Polyester", "Notch lapel", "Single-breasted two-button", "Full satin lining"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isSale: true
  },
  {
    id: 24,
    name: "Leather Backpack",
    category: "Accessories",
    subcategory: "Bags",
    price: 4499,
    originalPrice: 5999,
    discount: 25,
    badge: "TRENDING",
    colors: [
      { name: "Tan", hex: "#d2691e" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    sizes: ["One Size"],
    rating: 4.6,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=750&fit=crop"
    ],
    description: "Style meets function in our Leather Backpack. Premium full-grain leather with padded laptop compartment and organized interior.",
    specs: ["Full-grain leather", "Padded 15\" laptop compartment", "Adjustable shoulder straps", "Antique brass hardware"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isSale: true
  },
  {
    id: 25,
    name: "Vintage Graphic Tee",
    category: "Men",
    subcategory: "Basics",
    price: 1099,
    originalPrice: null,
    discount: 0,
    badge: "NEW",
    colors: [
      { name: "Washed Black", hex: "#3b3b3b" },
      { name: "Off White", hex: "#faf0e6" },
      { name: "Dusty Blue", hex: "#6699cc" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.3,
    reviews: 412,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=750&fit=crop"
    ],
    description: "Express yourself with our Vintage Graphic Tee. Pre-washed for that perfect broken-in feel with retro-inspired artwork.",
    specs: ["100% Cotton, 180 GSM", "Pre-washed vintage finish", "Screen-printed graphic", "Relaxed fit"],
    inStock: true,
    isNew: true,
    isTrending: false,
    isSale: false
  }
];

// Category data for navigation
const CATEGORIES = [
  { name: "Men", icon: "👔", count: 12, image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=500&fit=crop" },
  { name: "Women", icon: "👗", count: 6, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop" },
  { name: "Footwear", icon: "👟", count: 4, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop" },
  { name: "Accessories", icon: "⌚", count: 5, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&h=500&fit=crop" }
];

// Sample orders for order history
const SAMPLE_ORDERS = [
  {
    id: "ORD-2026-8891",
    date: "Aug 28, 2026",
    total: 4299,
    status: "Shipped",
    statusColor: "#e8590c",
    items: [
      { productId: 13, size: "M", qty: 1 },
      { productId: 2, size: "L", qty: 1 }
    ]
  },
  {
    id: "ORD-2026-7422",
    date: "Aug 15, 2026",
    total: 3299,
    status: "Delivered",
    statusColor: "#2f9e44",
    items: [
      { productId: 5, size: "S", qty: 1 }
    ]
  },
  {
    id: "ORD-2026-6105",
    date: "Jul 20, 2026",
    total: 5500,
    status: "Cancelled",
    statusColor: "#e03131",
    items: [
      { productId: 8, size: "9", qty: 1 }
    ]
  }
];
