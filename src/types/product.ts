
export interface Product {
    name: string
    price: number
    category: "Space Suits" | "Equipment" | "Food" | "Vehicle"
    rating: number
    image: string
    desc: string
    id: number
}

export interface ProductCardProps {
    product: Product
}

export const products: Product[] = [
    {
        name: "Moon Rover",
        price: 600000,
        category: "Vehicle",
        rating: 8,
        image: "",
        desc: "A compact exploration rover designed for lunar missions.\nBuilt for rough terrain and long-distance exploration.\nIncludes reinforced wheels and a built-in navigation system.",
        id: 1
    },
    {
        name: "Spacesuit",
        price: 120000,
        category: "Space Suits",
        rating: 6,
        image: "",
        desc: "A reliable spacesuit designed for everyday orbital missions.\nProvides protection from extreme temperatures and low pressure.\nIncludes oxygen support and basic communication equipment.",
        id: 2
    },
    {
        name: "Liquid potato",
        price: 200,
        category: "Food",
        rating: 7,
        image: "",
        desc: "A convenient liquid meal made from specially processed potatoes.\nEasy to store, prepare and consume in zero-gravity conditions.\nA popular choice among long-duration space crews.",
        id: 3
    },
    {
        name: "Cosmo Torch",
        price: 150,
        category: "Equipment",
        rating: 9,
        image: "",
        desc: "A compact high-powered torch designed for spacecraft and exploration.\nProvides bright illumination in dark environments and damaged stations.\nFeatures a durable body and extended battery life.",
        id: 4
    },
    {
        name: "Mars Explorer",
        price: 850000,
        category: "Vehicle",
        rating: 9,
        image: "",
        desc: "A heavy-duty rover designed for long expeditions across Mars.\nHandles dust storms, rocky ground and extreme temperature changes.\nIncludes a sealed cabin and autonomous navigation system.",
        id: 5
    },
    {
        name: "Orbital Shuttle",
        price: 2400000,
        category: "Vehicle",
        rating: 8,
        image: "",
        desc: "A reusable shuttle for transport between stations and orbital platforms.\nOffers comfortable seating and precise docking controls.\nBuilt with a reinforced heat shield for safe atmospheric return.",
        id: 6
    },
    {
        name: "Cargo Drone",
        price: 42000,
        category: "Vehicle",
        rating: 8,
        image: "",
        desc: "An autonomous drone for moving cargo around stations and colonies.\nUses compact thrusters for accurate movement in zero gravity.\nIncludes collision sensors and a secure cargo compartment.",
        id: 7
    },
    {
        name: "Lunar Buggy",
        price: 310000,
        category: "Vehicle",
        rating: 7,
        image: "",
        desc: "A lightweight electric buggy made for short lunar surface missions.\nProvides quick transport between research modules and landing sites.\nFeatures wide wheels and a foldable protective frame.",
        id: 8
    },
    {
        name: "Terraforming Hauler",
        price: 1750000,
        category: "Vehicle",
        rating: 8,
        image: "",
        desc: "A powerful utility vehicle for moving equipment across new colonies.\nDesigned to operate on uneven terrain and low-gravity surfaces.\nIncludes modular storage bays and reinforced suspension.",
        id: 9
    },
    {
        name: "Solar Surveyor",
        price: 680000,
        category: "Vehicle",
        rating: 9,
        image: "",
        desc: "A survey craft designed to map solar panels and orbital structures.\nUses precision thrusters for close inspection work.\nIncludes high-resolution scanners and remote control support.",
        id: 10
    },
    {
        name: "Deep Space Capsule",
        price: 3900000,
        category: "Vehicle",
        rating: 9,
        image: "",
        desc: "A compact capsule designed for long-distance deep space travel.\nProvides reliable life support and radiation protection.\nIncludes emergency navigation and independent power systems.",
        id: 11
    },
    {
        name: "Asteroid Miner",
        price: 1250000,
        category: "Vehicle",
        rating: 8,
        image: "",
        desc: "A specialized mining craft for extracting resources from asteroids.\nEquipped with drilling arms and material analysis sensors.\nBuilt for precise operation in low-gravity environments.",
        id: 12
    },
    {
        name: "Station Transporter",
        price: 960000,
        category: "Vehicle",
        rating: 7,
        image: "",
        desc: "A practical transport vehicle for crew and supplies between stations.\nOffers stable flight and simple docking controls.\nIncludes space for passengers and compact equipment cases.",
        id: 13
    },
    {
        name: "Planetary Scout",
        price: 275000,
        category: "Vehicle",
        rating: 8,
        image: "",
        desc: "A fast scouting vehicle for exploring unknown planetary surfaces.\nUses advanced sensors to detect hazards and useful resources.\nIncludes a reinforced cockpit and long-range communication.",
        id: 14
    },
    {
        name: "EVA Pro Suit",
        price: 185000,
        category: "Space Suits",
        rating: 9,
        image: "",
        desc: "A professional suit for extended extravehicular activity.\nProvides strong thermal control and reliable oxygen circulation.\nIncludes reinforced joints and a panoramic helmet display.",
        id: 15
    },
    {
        name: "Lunar Work Suit",
        price: 98000,
        category: "Space Suits",
        rating: 8,
        image: "",
        desc: "A durable work suit designed for construction on the Moon.\nProtects against dust, sharp rocks and rapid temperature changes.\nIncludes flexible gloves and integrated tool mounts.",
        id: 16
    },
    {
        name: "Mars Field Suit",
        price: 210000,
        category: "Space Suits",
        rating: 9,
        image: "",
        desc: "A sealed field suit designed for daily work on Mars.\nProtects the wearer from dust and low atmospheric pressure.\nIncludes a compact life support pack and heated boots.",
        id: 17
    },
    {
        name: "Zero-G Training Suit",
        price: 45000,
        category: "Space Suits",
        rating: 7,
        image: "",
        desc: "A lightweight suit for training and movement practice in zero gravity.\nAllows natural movement while providing basic environmental protection.\nIncludes adjustable restraints and communication support.",
        id: 18
    },
    {
        name: "Radiation Shield Suit",
        price: 265000,
        category: "Space Suits",
        rating: 8,
        image: "",
        desc: "A protective suit designed for high-radiation mission zones.\nUses layered shielding to reduce exposure during surface operations.\nIncludes monitoring sensors and emergency cooling.",
        id: 19
    },
    {
        name: "Colony Utility Suit",
        price: 72000,
        category: "Space Suits",
        rating: 8,
        image: "",
        desc: "A practical suit for maintenance work inside growing colonies.\nCombines comfort, mobility and basic pressure protection.\nIncludes storage pockets and a detachable helmet system.",
        id: 20
    },
    {
        name: "Deep Space Suit",
        price: 340000,
        category: "Space Suits",
        rating: 9,
        image: "",
        desc: "A high-end suit for missions far from planetary support.\nProvides extended life support and protection from cosmic radiation.\nIncludes redundant systems for long emergency operations.",
        id: 21
    },
    {
        name: "Explorer Helmet",
        price: 28000,
        category: "Space Suits",
        rating: 8,
        image: "",
        desc: "A reinforced helmet for planetary exploration and surface work.\nProvides a clear wide-angle view and reliable air circulation.\nIncludes a built-in lamp and short-range radio.",
        id: 22
    },
    {
        name: "Thermal Flight Suit",
        price: 63000,
        category: "Space Suits",
        rating: 7,
        image: "",
        desc: "A thermal suit designed for pilots and orbital transport crews.\nMaintains a stable body temperature during rapid altitude changes.\nIncludes pressure support and an emergency beacon.",
        id: 23
    },
    {
        name: "Emergency Rescue Suit",
        price: 145000,
        category: "Space Suits",
        rating: 9,
        image: "",
        desc: "A rescue suit for emergency repairs and evacuation missions.\nProvides fast deployment and strong protection in damaged modules.\nIncludes reflective markings, oxygen support and beacon tracking.",
        id: 24
    },
    {
        name: "Compact Airlock Suit",
        price: 89000,
        category: "Space Suits",
        rating: 8,
        image: "",
        desc: "A compact suit designed for frequent airlock operations.\nKeeps preparation time short without sacrificing pressure protection.\nIncludes flexible seals and a rechargeable life support unit.",
        id: 25
    },
    {
        name: "Oxygen Reserve Pack",
        price: 5200,
        category: "Equipment",
        rating: 9,
        image: "",
        desc: "A portable oxygen reserve for repairs and emergency missions.\nConnects to standard suit and habitat life support systems.\nIncludes a pressure indicator and secure mounting clips.",
        id: 26
    },
    {
        name: "Navigation Computer",
        price: 18500,
        category: "Equipment",
        rating: 8,
        image: "",
        desc: "A compact computer for plotting routes through space and planetary terrain.\nProcesses sensor data and calculates safe travel paths.\nIncludes a durable screen and offline navigation maps.",
        id: 27
    },
    {
        name: "Portable Habitat",
        price: 76000,
        category: "Equipment",
        rating: 8,
        image: "",
        desc: "A portable shelter for temporary planetary research camps.\nCan be deployed quickly on flat or rocky surfaces.\nIncludes insulation, air filtration and foldable support frames.",
        id: 28
    },
    {
        name: "Solar Charger",
        price: 3800,
        category: "Equipment",
        rating: 9,
        image: "",
        desc: "A foldable solar charger for keeping mission equipment powered.\nWorks in remote locations without access to a station grid.\nIncludes multiple connectors and a compact storage case.",
        id: 29
    },
    {
        name: "Magnetic Tool Set",
        price: 2400,
        category: "Equipment",
        rating: 8,
        image: "",
        desc: "A set of magnetic tools designed for spacecraft maintenance.\nKeeps tools attached to surfaces during zero-gravity repairs.\nIncludes wrenches, drivers and insulated grips.",
        id: 30
    },
    {
        name: "Comet Sample Kit",
        price: 11200,
        category: "Equipment",
        rating: 7,
        image: "",
        desc: "A sealed kit for collecting and preserving comet samples.\nProtects specimens from contamination during transport.\nIncludes storage tubes, labels and temperature indicators.",
        id: 31
    },
    {
        name: "Signal Beacon",
        price: 6700,
        category: "Equipment",
        rating: 9,
        image: "",
        desc: "A long-range beacon for locating crews and equipment.\nTransmits a stable signal through difficult planetary terrain.\nIncludes an extended battery and automatic distress mode.",
        id: 32
    },
    {
        name: "Gravity Boots",
        price: 9400,
        category: "Equipment",
        rating: 8,
        image: "",
        desc: "Specialized boots that help workers move through station corridors.\nProvide extra grip on metal surfaces and landing platforms.\nIncludes adjustable magnetic force and shock absorption.",
        id: 33
    },
    {
        name: "Star Chart Projector",
        price: 15400,
        category: "Equipment",
        rating: 8,
        image: "",
        desc: "A portable projector for displaying detailed star charts.\nUseful for navigation planning, education and mission briefings.\nIncludes an offline database of nearby systems.",
        id: 34
    },
    {
        name: "Water Recycler",
        price: 22800,
        category: "Equipment",
        rating: 9,
        image: "",
        desc: "A compact recycler that cleans and reuses water aboard missions.\nDesigned for habitats, shuttles and remote research stations.\nIncludes multi-stage filtration and a simple status panel.",
        id: 35
    },
    {
        name: "Space Garden Module",
        price: 41000,
        category: "Equipment",
        rating: 8,
        image: "",
        desc: "A controlled growing module for fresh plants in space.\nUses efficient lighting and automated moisture control.\nIncludes shelves for herbs, vegetables and research crops.",
        id: 36
    },
    {
        name: "Emergency Repair Foam",
        price: 1300,
        category: "Equipment",
        rating: 9,
        image: "",
        desc: "A fast-setting foam for sealing small leaks and cracks.\nDesigned for temporary repairs inside spacecraft and habitats.\nIncludes a precision nozzle and pressure-safe container.",
        id: 37
    },
    {
        name: "Freeze-Dried Rations",
        price: 95,
        category: "Food",
        rating: 8,
        image: "",
        desc: "Lightweight freeze-dried meals prepared for long missions.\nEasy to store and rehydrate with a small amount of water.\nIncludes a balanced selection of vegetables and grains.",
        id: 38
    },
    {
        name: "Orbital Fruit Pack",
        price: 180,
        category: "Food",
        rating: 7,
        image: "",
        desc: "A selection of preserved fruit prepared for orbital travel.\nProvides a sweet snack without loose crumbs in zero gravity.\nPacked in easy-open sealed portions.",
        id: 39
    },
    {
        name: "Mars Protein Bar",
        price: 75,
        category: "Food",
        rating: 8,
        image: "",
        desc: "A compact protein bar created for active surface crews.\nProvides energy during long exploration and construction shifts.\nSealed for reliable storage in dusty environments.",
        id: 40
    },
    {
        name: "Cosmic Coffee",
        price: 120,
        category: "Food",
        rating: 9,
        image: "",
        desc: "A specially packed coffee blend for spacecraft kitchens.\nDesigned to be prepared safely in low-gravity conditions.\nOffers a rich taste for early mission mornings.",
        id: 41
    },
    {
        name: "Lunar Vegetable Pack",
        price: 260,
        category: "Food",
        rating: 8,
        image: "",
        desc: "A nutritious pack of vegetables grown in controlled habitats.\nPrepared in portions suitable for lunar and orbital kitchens.\nIncludes long-lasting packaging and simple preparation instructions.",
        id: 42
    },
    {
        name: "Hydration Gel",
        price: 55,
        category: "Food",
        rating: 7,
        image: "",
        desc: "A convenient hydration gel for travel and surface missions.\nProvides fluids without spills in weightless environments.\nAvailable in sealed single-use tubes.",
        id: 43
    },
    {
        name: "Astronaut Dessert",
        price: 140,
        category: "Food",
        rating: 8,
        image: "",
        desc: "A lightweight dessert created for space crew celebrations.\nKeeps its texture and flavor during long-term storage.\nPacked in portions that are easy to enjoy in orbit.",
        id: 44
    },
    {
        name: "Deep Space Soup",
        price: 110,
        category: "Food",
        rating: 8,
        image: "",
        desc: "A warm instant soup designed for deep space missions.\nRehydrates quickly and provides a comforting hot meal.\nComes in a sealed container with a safe heating valve.",
        id: 45
    },
    {
        name: "Solar Energy Drink",
        price: 90,
        category: "Food",
        rating: 7,
        image: "",
        desc: "A concentrated energy drink for demanding mission tasks.\nContains essential electrolytes for active crews.\nPacked in a spill-resistant pouch for zero gravity.",
        id: 46
    },
    {
        name: "Colony Breakfast Kit",
        price: 230,
        category: "Food",
        rating: 9,
        image: "",
        desc: "A complete breakfast kit for planetary colonies.\nIncludes grains, fruit and a warm drink concentrate.\nDesigned for quick preparation before a work shift.",
        id: 47
    },
    {
        name: "Zero-G Snack Mix",
        price: 85,
        category: "Food",
        rating: 8,
        image: "",
        desc: "A crumb-free snack mix prepared for zero-gravity environments.\nProvides a light source of energy between meals.\nPacked in resealable portions for convenient storage.",
        id: 48
    },
    {
        name: "Europa Ice Sample Meal",
        price: 320,
        category: "Food",
        rating: 7,
        image: "",
        desc: "A long-storage meal created for remote Europa expeditions.\nCombines preserved ingredients with a high-energy recipe.\nDesigned to remain stable during extended travel.",
        id: 49
    },
    {
        name: "Starlight Tea",
        price: 105,
        category: "Food",
        rating: 9,
        image: "",
        desc: "A fragrant tea blend selected for calm evenings aboard stations.\nBrews cleanly in a sealed low-gravity cup.\nIncludes individually packed portions for long missions.",
        id: 50
    }
    
]

export interface CartItem {
    product: Product
    quantity: number
}

export interface ProductCardPageProps {
    addToCart: (product: Product) => void
}

export interface CartPageProps {
    cart: CartItem[]
    increaseQuantity: (productId: number) => void
    decreaseQuantity: (productId: number) => void
}

export interface FiltersProps {
    products: Product[]
    onFilterChange: (products: Product[]) => void
}