import type { Product } from "../types/product"

export const products: Product[] = [
    {
        name: "Moon Rover",
        price: 600000,
        category: "Vehicle",
        rating: 8,
        image: "/products/1.svg",
        desc: "A compact exploration rover designed for lunar missions.\nBuilt for rough terrain and long-distance exploration.\nIncludes reinforced wheels and a built-in navigation system.\nIts efficient power system supports long trips far from a base.\nA spacious cabin keeps essential tools close at hand.",
        id: 1,
        specifications: ["Crew capacity: 2", "Terrain: Lunar surface", "Power: Electric drive", "Navigation: Built-in system"]
    },
    {
        name: "Spacesuit",
        price: 120000,
        category: "Space Suits",
        rating: 6,
        image: "/products/2.svg",
        desc: "A reliable spacesuit designed for everyday orbital missions.\nProvides protection from extreme temperatures and low pressure.\nIncludes oxygen support and basic communication equipment.\nFlexible joints make routine maintenance tasks easier to perform.\nA clear status display helps the wearer monitor key systems.",
        id: 2,
        specifications: ["Protection: Temperature and pressure", "Life support: Oxygen system", "Communication: Integrated radio", "Use: Orbital missions"]
    },
    {
        name: "Liquid potato",
        price: 200,
        category: "Food",
        rating: 7,
        image: "/products/3.svg",
        desc: "A convenient liquid meal made from specially processed potatoes.\nEasy to store, prepare and consume in zero-gravity conditions.\nA popular choice among long-duration space crews.\nThe smooth texture makes it simple to enjoy in a sealed pouch.\nEach serving is compact enough to fit into a mission food kit.",
        id: 3,
        specifications: ["Type: Liquid meal", "Main ingredient: Potato", "Packaging: Sealed pouch", "Use: Zero-gravity dining"]
    },
    {
        name: "Cosmo Torch",
        price: 150,
        category: "Equipment",
        rating: 9,
        image: "/products/4.svg",
        desc: "A compact high-powered torch designed for spacecraft and exploration.\nProvides bright illumination in dark environments and damaged stations.\nFeatures a durable body and extended battery life.\nIts focused beam makes close inspections easier in tight spaces.\nA textured grip helps keep it secure during repairs.",
        id: 4,
        specifications: ["Light: High-powered beam", "Body: Durable construction", "Grip: Textured handle", "Use: Spacecraft and exploration"]
    },
    {
        name: "Mars Explorer",
        price: 850000,
        category: "Vehicle",
        rating: 9,
        image: "/products/5.svg",
        desc: "A heavy-duty rover designed for long expeditions across Mars.\nHandles dust storms, rocky ground and extreme temperature changes.\nIncludes a sealed cabin and autonomous navigation system.\nIts reinforced frame is built to carry crew and research equipment.\nA long-range communications unit keeps the team connected to base.",
        id: 5,
        specifications: ["Crew capacity: Multi-person cabin", "Terrain: Martian surface", "Cabin: Sealed", "Navigation: Autonomous system"]
    },
    {
        name: "Orbital Shuttle",
        price: 2400000,
        category: "Vehicle",
        rating: 8,
        image: "/products/6.svg",
        desc: "A reusable shuttle for transport between stations and orbital platforms.\nOffers comfortable seating and precise docking controls.\nBuilt with a reinforced heat shield for safe atmospheric return.\nThe spacious cargo area accommodates supplies for regular station runs.\nAutomated checks help the crew prepare for each journey.",
        id: 6,
        specifications: ["Type: Reusable shuttle", "Transport: Crew and cargo", "Docking: Precision controls", "Return: Reinforced heat shield"]
    },
    {
        name: "Cargo Drone",
        price: 42000,
        category: "Vehicle",
        rating: 8,
        image: "/products/7.svg",
        desc: "An autonomous drone for moving cargo around stations and colonies.\nUses compact thrusters for accurate movement in zero gravity.\nIncludes collision sensors and a secure cargo compartment.\nIts simple controls support both remote operation and preset routes.\nA low-noise drive keeps deliveries unobtrusive in busy habitats.",
        id: 7,
        specifications: ["Control: Autonomous or remote", "Propulsion: Compact thrusters", "Safety: Collision sensors", "Cargo: Secure compartment"]
    },
    {
        name: "Lunar Buggy",
        price: 310000,
        category: "Vehicle",
        rating: 7,
        image: "/products/8.svg",
        desc: "A lightweight electric buggy made for short lunar surface missions.\nProvides quick transport between research modules and landing sites.\nFeatures wide wheels and a foldable protective frame.\nThe open layout makes it easy to load tools and sample cases.\nAn efficient battery is suited to frequent trips around a base.",
        id: 8,
        specifications: ["Power: Electric", "Terrain: Lunar surface", "Wheels: Wide profile", "Frame: Foldable protection"]
    },
    {
        name: "Terraforming Hauler",
        price: 1750000,
        category: "Vehicle",
        rating: 8,
        image: "/products/9.svg",
        desc: "A powerful utility vehicle for moving equipment across new colonies.\nDesigned to operate on uneven terrain and low-gravity surfaces.\nIncludes modular storage bays and reinforced suspension.\nIts high carrying capacity supports construction and supply missions.\nQuick-change modules let crews adapt the vehicle to different tasks.",
        id: 9,
        specifications: ["Type: Utility hauler", "Terrain: Uneven, low-gravity surfaces", "Storage: Modular bays", "Suspension: Reinforced"]
    },
    {
        name: "Solar Surveyor",
        price: 680000,
        category: "Vehicle",
        rating: 9,
        image: "/products/10.svg",
        desc: "A survey craft designed to map solar panels and orbital structures.\nUses precision thrusters for close inspection work.\nIncludes high-resolution scanners and remote control support.\nLive readings help operators spot wear before it affects performance.\nIts stable flight profile is suited to detailed exterior surveys.",
        id: 10,
        specifications: ["Use: Orbital inspections", "Propulsion: Precision thrusters", "Sensors: High-resolution scanners", "Control: Remote operation"]
    },
    {
        name: "Deep Space Capsule",
        price: 3900000,
        category: "Vehicle",
        rating: 9,
        image: "/products/11.svg",
        desc: "A compact capsule designed for long-distance deep space travel.\nProvides reliable life support and radiation protection.\nIncludes emergency navigation and independent power systems.\nRedundant controls help the crew respond to unexpected system faults.\nA carefully arranged cabin keeps essential supplies within reach.",
        id: 11,
        specifications: ["Mission: Deep-space travel", "Life support: Redundant systems", "Protection: Radiation shielding", "Navigation: Emergency backup"]
    },
    {
        name: "Asteroid Miner",
        price: 1250000,
        category: "Vehicle",
        rating: 8,
        image: "/products/12.svg",
        desc: "A specialized mining craft for extracting resources from asteroids.\nEquipped with drilling arms and material analysis sensors.\nBuilt for precise operation in low-gravity environments.\nSecure anchors help maintain position while the mining tools are active.\nCollected samples can be stored for later analysis back at base.",
        id: 12,
        specifications: ["Use: Asteroid resource collection", "Tools: Drilling arms", "Sensors: Material analysis", "Stability: Low-gravity anchoring"]
    },
    {
        name: "Station Transporter",
        price: 960000,
        category: "Vehicle",
        rating: 7,
        image: "/products/13.svg",
        desc: "A practical transport vehicle for crew and supplies between stations.\nOffers stable flight and simple docking controls.\nIncludes space for passengers and compact equipment cases.\nA clear cabin layout makes boarding and unloading straightforward.\nIts reliable handling suits regular trips across orbital routes.",
        id: 13,
        specifications: ["Use: Station-to-station transport", "Capacity: Crew and supplies", "Flight: Stable handling", "Docking: Assisted controls"]
    },
    {
        name: "Planetary Scout",
        price: 275000,
        category: "Vehicle",
        rating: 8,
        image: "/products/14.svg",
        desc: "A fast scouting vehicle for exploring unknown planetary surfaces.\nUses advanced sensors to detect hazards and useful resources.\nIncludes a reinforced cockpit and long-range communication.\nSurvey data can be sent back to the team while exploring.\nIts responsive controls help navigate narrow or unfamiliar terrain.",
        id: 14,
        specifications: ["Use: Planetary reconnaissance", "Sensors: Hazard and resource detection", "Cockpit: Reinforced", "Communication: Long-range"]
    },
    {
        name: "EVA Pro Suit",
        price: 185000,
        category: "Space Suits",
        rating: 9,
        image: "/products/15.svg",
        desc: "A professional suit for extended extravehicular activity.\nProvides strong thermal control and reliable oxygen circulation.\nIncludes reinforced joints and a panoramic helmet display.\nA balanced fit supports precise movement during lengthy repair work.\nIntegrated status checks keep vital systems easy to monitor.",
        id: 15,
        specifications: ["Use: Extended EVA", "Thermal control: Integrated", "Oxygen: Circulation system", "Helmet: Panoramic display"]
    },
    {
        name: "Lunar Work Suit",
        price: 98000,
        category: "Space Suits",
        rating: 8,
        image: "/products/16.svg",
        desc: "A durable work suit designed for construction on the Moon.\nProtects against dust, sharp rocks and rapid temperature changes.\nIncludes flexible gloves and integrated tool mounts.\nIts reinforced outer layer is suited to daily work near a habitat.\nAdjustable fittings help crews stay comfortable throughout a shift.",
        id: 16,
        specifications: ["Use: Lunar construction", "Protection: Dust and temperature", "Gloves: Flexible", "Tools: Integrated mounts"]
    },
    {
        name: "Mars Field Suit",
        price: 210000,
        category: "Space Suits",
        rating: 9,
        image: "/products/17.svg",
        desc: "A sealed field suit designed for daily work on Mars.\nProtects the wearer from dust and low atmospheric pressure.\nIncludes a compact life support pack and heated boots.\nDurable seals help maintain protection during repeated surface activity.\nThe practical design keeps routine equipment checks straightforward.",
        id: 17,
        specifications: ["Use: Mars surface work", "Pressure: Sealed design", "Life support: Compact pack", "Boots: Heated"]
    },
    {
        name: "Zero-G Suit",
        price: 45000,
        category: "Space Suits",
        rating: 7,
        image: "/products/18.svg",
        desc: "A lightweight suit for training and movement practice in zero gravity.\nAllows natural movement while providing basic environmental protection.\nIncludes adjustable restraints and communication support.\nIts flexible construction helps new crew members practice safely.\nThe simple fit is easy to adjust between training sessions.",
        id: 18,
        specifications: ["Use: Zero-gravity training", "Fit: Lightweight and flexible", "Restraints: Adjustable", "Communication: Supported"]
    },
    {
        name: "Radiation Suit",
        price: 265000,
        category: "Space Suits",
        rating: 8,
        image: "/products/19.svg",
        desc: "A protective suit designed for high-radiation mission zones.\nUses layered shielding to reduce exposure during surface operations.\nIncludes monitoring sensors and emergency cooling.\nLive exposure readings help crews make informed decisions outside.\nReinforced closures are designed for dependable use in the field.",
        id: 19,
        specifications: ["Use: High-radiation zones", "Protection: Layered shielding", "Monitoring: Exposure sensors", "Cooling: Emergency system"]
    },
    {
        name: "Colony Utility Suit",
        price: 72000,
        category: "Space Suits",
        rating: 8,
        image: "/products/20.svg",
        desc: "A practical suit for maintenance work inside growing colonies.\nCombines comfort, mobility and basic pressure protection.\nIncludes storage pockets and a detachable helmet system.\nIts versatile layout supports repairs across workshops and habitat modules.\nEasy-access fasteners simplify routine preparation and equipment checks.",
        id: 20,
        specifications: ["Use: Colony maintenance", "Fit: Mobile and practical", "Storage: Integrated pockets", "Helmet: Detachable"]
    },
    {
        name: "Deep Space Suit",
        price: 340000,
        category: "Space Suits",
        rating: 9,
        image: "/products/21.svg",
        desc: "A high-end suit for missions far from planetary support.\nProvides extended life support and protection from cosmic radiation.\nIncludes redundant systems for long emergency operations.\nIts durable construction is intended for demanding journeys beyond orbit.\nClear system indicators help the wearer track remaining mission resources.",
        id: 21,
        specifications: ["Use: Deep-space missions", "Life support: Extended duration", "Protection: Cosmic radiation", "Safety: Redundant systems"]
    },
    {
        name: "Explorer Helmet",
        price: 28000,
        category: "Space Suits",
        rating: 8,
        image: "/products/22.svg",
        desc: "A reinforced helmet for planetary exploration and surface work.\nProvides a clear wide-angle view and reliable air circulation.\nIncludes a built-in lamp and short-range radio.\nThe visor coating helps maintain visibility in dusty conditions.\nIts adjustable fit works with a range of compatible suits.",
        id: 22,
        specifications: ["Use: Planetary exploration", "View: Wide-angle visor", "Air circulation: Integrated", "Equipment: Lamp and short-range radio"]
    },
    {
        name: "Thermal Flight Suit",
        price: 63000,
        category: "Space Suits",
        rating: 7,
        image: "/products/23.svg",
        desc: "A thermal suit designed for pilots and orbital transport crews.\nMaintains a stable body temperature during rapid altitude changes.\nIncludes pressure support and an emergency beacon.\nA flexible cut allows comfortable movement in a compact cockpit.\nThe beacon provides an additional way to signal for assistance.",
        id: 23,
        specifications: ["Use: Pilots and transport crews", "Thermal control: Stabilized", "Pressure support: Integrated", "Safety: Emergency beacon"]
    },
    {
        name: "Rescue Suit",
        price: 145000,
        category: "Space Suits",
        rating: 9,
        image: "/products/24.svg",
        desc: "A rescue suit for emergency repairs and evacuation missions.\nProvides fast deployment and strong protection in damaged modules.\nIncludes reflective markings, oxygen support and beacon tracking.\nHigh-visibility details help teammates locate the wearer in low light.\nAccessible controls support quick checks during urgent situations.",
        id: 24,
        specifications: ["Use: Rescue and evacuation", "Deployment: Rapid", "Visibility: Reflective markings", "Safety: Oxygen and beacon tracking"]
    },
    {
        name: "Airlock Suit",
        price: 89000,
        category: "Space Suits",
        rating: 8,
        image: "/products/25.svg",
        desc: "A compact suit designed for frequent airlock operations.\nKeeps preparation time short without sacrificing pressure protection.\nIncludes flexible seals and a rechargeable life support unit.\nIts streamlined fit makes movement through narrow access areas easier.\nDurable materials are suited to repeated cycles in the airlock.",
        id: 25,
        specifications: ["Use: Frequent airlock operations", "Preparation: Quick fit", "Seals: Flexible", "Life support: Rechargeable unit"]
    },
    {
        name: "Oxygen Reserve Pack",
        price: 5200,
        category: "Equipment",
        rating: 9,
        image: "/products/26.svg",
        desc: "A portable oxygen reserve for repairs and emergency missions.\nConnects to standard suit and habitat life support systems.\nIncludes a pressure indicator and secure mounting clips.\nIts compact shape fits easily into a service kit or rover compartment.\nA clear gauge makes remaining supply simple to check at a glance.",
        id: 26,
        specifications: ["Use: Emergency oxygen reserve", "Compatibility: Suits and habitats", "Monitoring: Pressure indicator", "Mounting: Secure clips"]
    },
    {
        name: "Navigation Computer",
        price: 18500,
        category: "Equipment",
        rating: 8,
        image: "/products/27.svg",
        desc: "A compact computer for plotting routes through space and planetary terrain.\nProcesses sensor data and calculates safe travel paths.\nIncludes a durable screen and offline navigation maps.\nSaved routes remain available when a network connection is out of reach.\nThe straightforward interface helps crews review directions during a mission.",
        id: 27,
        specifications: ["Use: Route planning", "Mapping: Space and planetary terrain", "Navigation: Offline maps", "Display: Durable screen"]
    },
    {
        name: "Portable Habitat",
        price: 76000,
        category: "Equipment",
        rating: 8,
        image: "/products/28.svg",
        desc: "A portable shelter for temporary planetary research camps.\nCan be deployed quickly on flat or rocky surfaces.\nIncludes insulation, air filtration and foldable support frames.\nThe modular interior provides a practical place to rest and organize supplies.\nIts packable frame makes relocation between survey sites easier.",
        id: 28,
        specifications: ["Use: Temporary research camps", "Deployment: Foldable support frame", "Environment: Insulation and air filtration", "Layout: Modular interior"]
    },
    {
        name: "Solar Charger",
        price: 3800,
        category: "Equipment",
        rating: 9,
        image: "/products/29.svg",
        desc: "A foldable solar charger for keeping mission equipment powered.\nWorks in remote locations without access to a station grid.\nIncludes multiple connectors and a compact storage case.\nAdjustable panels help make use of available daylight during field work.\nA small status light shows when connected devices are charging.",
        id: 29,
        specifications: ["Power source: Solar", "Design: Foldable panels", "Connections: Multiple device ports", "Storage: Compact case"]
    },
    {
        name: "Magnetic Tool Set",
        price: 2400,
        category: "Equipment",
        rating: 8,
        image: "/products/30.svg",
        desc: "A set of magnetic tools designed for spacecraft maintenance.\nKeeps tools attached to surfaces during zero-gravity repairs.\nIncludes wrenches, drivers and insulated grips.\nThe organized case makes it easy to find the right tool quickly.\nProtective handles support careful work around sensitive equipment.",
        id: 30,
        specifications: ["Use: Spacecraft maintenance", "Retention: Magnetic tools", "Includes: Wrenches and drivers", "Handles: Insulated grips"]
    },
    {
        name: "Comet Sample Kit",
        price: 11200,
        category: "Equipment",
        rating: 7,
        image: "/products/31.svg",
        desc: "A sealed kit for collecting and preserving comet samples.\nProtects specimens from contamination during transport.\nIncludes storage tubes, labels and temperature indicators.\nEach container closes securely to keep collected material separated.\nClear labeling helps researchers trace samples back to their collection site.",
        id: 31,
        specifications: ["Use: Comet sample collection", "Storage: Sealed tubes", "Protection: Contamination control", "Tracking: Labels and temperature indicators"]
    },
    {
        name: "Signal Beacon",
        price: 6700,
        category: "Equipment",
        rating: 9,
        image: "/products/32.svg",
        desc: "A long-range beacon for locating crews and equipment.\nTransmits a stable signal through difficult planetary terrain.\nIncludes an extended battery and automatic distress mode.\nIts rugged casing is designed for use in exposed field conditions.\nA simple indicator confirms when the beacon is transmitting.",
        id: 32,
        specifications: ["Use: Crew and equipment location", "Signal: Long-range", "Operation: Automatic distress mode", "Power: Extended battery"]
    },
    {
        name: "Gravity Boots",
        price: 9400,
        category: "Equipment",
        rating: 8,
        image: "/products/33.svg",
        desc: "Specialized boots that help workers move through station corridors.\nProvide extra grip on metal surfaces and landing platforms.\nIncludes adjustable magnetic force and shock absorption.\nThe secure fit supports steady movement while carrying light equipment.\nA simple control lets the wearer adapt grip to the surface.",
        id: 33,
        specifications: ["Use: Station movement", "Grip: Adjustable magnetic force", "Surfaces: Metal corridors and platforms", "Comfort: Shock absorption"]
    },
    {
        name: "Star Chart Projector",
        price: 15400,
        category: "Equipment",
        rating: 8,
        image: "/products/34.svg",
        desc: "A portable projector for displaying detailed star charts.\nUseful for navigation planning, education and mission briefings.\nIncludes an offline database of nearby systems.\nThe clear projection makes route discussions easy for a whole crew.\nIts compact design can move between the lab and briefing room.",
        id: 34,
        specifications: ["Use: Navigation and briefings", "Projection: Detailed star charts", "Database: Offline nearby systems", "Design: Portable"]
    },
    {
        name: "Water Recycler",
        price: 22800,
        category: "Equipment",
        rating: 9,
        image: "/products/35.svg",
        desc: "A compact recycler that cleans and reuses water aboard missions.\nDesigned for habitats, shuttles and remote research stations.\nIncludes multi-stage filtration and a simple status panel.\nRoutine filter checks are easy to follow from the front display.\nIts efficient operation helps crews manage limited water supplies.",
        id: 35,
        specifications: ["Use: Water recovery", "Filtration: Multi-stage", "Installation: Habitats and shuttles", "Monitoring: Status panel"]
    },
    {
        name: "Garden Module",
        price: 41000,
        category: "Equipment",
        rating: 8,
        image: "/products/36.svg",
        desc: "A controlled growing module for fresh plants in space.\nUses efficient lighting and automated moisture control.\nIncludes shelves for herbs, vegetables and research crops.\nThe enclosed growing area helps maintain steady conditions for seedlings.\nIts adjustable layout can accommodate different experiments and harvests.",
        id: 36,
        specifications: ["Use: Space-based growing", "Lighting: Efficient grow lights", "Moisture: Automatic control", "Capacity: Adjustable crop shelves"]
    },
    {
        name: "Repair Foam",
        price: 1300,
        category: "Equipment",
        rating: 9,
        image: "/products/37.svg",
        desc: "A fast-setting foam for sealing small leaks and cracks.\nDesigned for temporary repairs inside spacecraft and habitats.\nIncludes a precision nozzle and pressure-safe container.\nThe controlled applicator helps target damaged seams without excess material.\nA compact canister is easy to keep in an emergency repair kit.",
        id: 37,
        specifications: ["Use: Temporary leak sealing", "Application: Precision nozzle", "Setting: Fast-setting foam", "Container: Pressure-safe"]
    },
    {
        name: "Freeze-Dried Meal",
        price: 95,
        category: "Food",
        rating: 8,
        image: "/products/38.svg",
        desc: "Lightweight freeze-dried meals prepared for long missions.\nEasy to store and rehydrate with a small amount of water.\nIncludes a balanced selection of vegetables and grains.\nThe sealed portions stay convenient to pack in limited cabin storage.\nClear preparation steps make mealtime simple during a busy shift.",
        id: 38,
        specifications: ["Type: Freeze-dried meal", "Preparation: Rehydrate with water", "Storage: Lightweight sealed portions", "Contents: Vegetables and grains"]
    },
    {
        name: "Orbital Fruit Pack",
        price: 180,
        category: "Food",
        rating: 7,
        image: "/products/39.svg",
        desc: "A selection of preserved fruit prepared for orbital travel.\nProvides a sweet snack without loose crumbs in zero gravity.\nPacked in easy-open sealed portions.\nIndividual servings are easy to share or save for later in the day.\nThe tidy packaging helps keep common areas clean while eating in orbit.",
        id: 39,
        specifications: ["Type: Preserved fruit", "Use: Orbital snacking", "Packaging: Easy-open portions", "Benefit: No loose crumbs"]
    },
    {
        name: "Mars Protein Bar",
        price: 75,
        category: "Food",
        rating: 8,
        image: "/products/40.svg",
        desc: "A compact protein bar created for active surface crews.\nProvides energy during long exploration and construction shifts.\nSealed for reliable storage in dusty environments.\nIts portable size fits into a suit pocket or equipment pouch.\nThe wrapper opens easily without creating loose pieces in low gravity.",
        id: 40,
        specifications: ["Type: Protein bar", "Use: Surface missions", "Packaging: Dust-resistant seal", "Format: Compact and portable"]
    },
    {
        name: "Cosmic Coffee",
        price: 120,
        category: "Food",
        rating: 9,
        image: "/products/41.svg",
        desc: "A specially packed coffee blend for spacecraft kitchens.\nDesigned to be prepared safely in low-gravity conditions.\nOffers a rich taste for early mission mornings.\nSingle-serve portions make it simple to prepare a consistent cup.\nThe sealed packs keep the blend fresh between supply deliveries.",
        id: 41,
        specifications: ["Type: Spacecraft coffee blend", "Preparation: Low-gravity safe", "Packaging: Single-serve portions", "Use: Orbital kitchens"]
    },
    {
        name: "Lunar Veg Pack",
        price: 260,
        category: "Food",
        rating: 8,
        image: "/products/42.svg",
        desc: "A nutritious pack of vegetables grown in controlled habitats.\nPrepared in portions suitable for lunar and orbital kitchens.\nIncludes long-lasting packaging and simple preparation instructions.\nThe mix adds variety to meals made from long-storage ingredients.\nPortion sizes are easy to plan for individual crew members.",
        id: 42,
        specifications: ["Type: Preserved vegetables", "Source: Controlled habitats", "Portions: Lunar and orbital kitchens", "Packaging: Long-lasting"]
    },
    {
        name: "Hydration Gel",
        price: 55,
        category: "Food",
        rating: 7,
        image: "/products/43.svg",
        desc: "A convenient hydration gel for travel and surface missions.\nProvides fluids without spills in weightless environments.\nAvailable in sealed single-use tubes.\nIts lightweight packaging is easy to carry during outdoor tasks.\nA resealable cap helps keep the tube secure between sips.",
        id: 43,
        specifications: ["Type: Hydration gel", "Use: Travel and surface missions", "Packaging: Sealed single-use tubes", "Benefit: Spill-resistant"]
    },
    {
        name: "Astronaut Dessert",
        price: 140,
        category: "Food",
        rating: 8,
        image: "/products/44.svg",
        desc: "A lightweight dessert created for space crew celebrations.\nKeeps its texture and flavor during long-term storage.\nPacked in portions that are easy to enjoy in orbit.\nThe neat serving size makes it suitable for a shared crew occasion.\nProtective packaging helps preserve each portion until it is opened.",
        id: 44,
        specifications: ["Type: Lightweight dessert", "Storage: Long-term", "Packaging: Individual portions", "Use: Crew celebrations"]
    },
    {
        name: "Deep Space Soup",
        price: 110,
        category: "Food",
        rating: 8,
        image: "/products/45.svg",
        desc: "A warm instant soup designed for deep space missions.\nRehydrates quickly and provides a comforting hot meal.\nComes in a sealed container with a safe heating valve.\nThe compact meal is easy to store alongside other mission provisions.\nSimple preparation makes it a practical option during a short break.",
        id: 45,
        specifications: ["Type: Instant soup", "Preparation: Quick rehydration", "Heating: Safe heating valve", "Packaging: Sealed container"]
    },
    {
        name: "Solar Energy Drink",
        price: 90,
        category: "Food",
        rating: 7,
        image: "/products/46.svg",
        desc: "A concentrated energy drink for demanding mission tasks.\nContains essential electrolytes for active crews.\nPacked in a spill-resistant pouch for zero gravity.\nThe flexible pouch takes up little room in a crew supply pack.\nA secure cap makes it convenient to carry between work areas.",
        id: 46,
        specifications: ["Type: Concentrated energy drink", "Contents: Electrolytes", "Packaging: Spill-resistant pouch", "Use: Demanding mission tasks"]
    },
    {
        name: "Colony Meal Kit",
        price: 230,
        category: "Food",
        rating: 9,
        image: "/products/47.svg",
        desc: "A complete breakfast kit for planetary colonies.\nIncludes grains, fruit and a warm drink concentrate.\nDesigned for quick preparation before a work shift.\nSeparate portions let crew members prepare only what they need.\nThe varied contents offer a simple start to a demanding workday.",
        id: 47,
        specifications: ["Type: Complete breakfast kit", "Contents: Grains, fruit and drink concentrate", "Preparation: Quick", "Use: Colony work shifts"]
    },
    {
        name: "Zero-G Snack Mix",
        price: 85,
        category: "Food",
        rating: 8,
        image: "/products/48.svg",
        desc: "A crumb-free snack mix prepared for zero-gravity environments.\nProvides a light source of energy between meals.\nPacked in resealable portions for convenient storage.\nThe resealable pouch helps keep snacks contained in shared cabins.\nIts small servings are easy to take along on routine station duties.",
        id: 48,
        specifications: ["Type: Crumb-free snack mix", "Use: Zero-gravity environments", "Packaging: Resealable portions", "Storage: Compact"]
    },
    {
        name: "Europa Ice Meal",
        price: 320,
        category: "Food",
        rating: 7,
        image: "/products/49.svg",
        desc: "A long-storage meal created for remote Europa expeditions.\nCombines preserved ingredients with a high-energy recipe.\nDesigned to remain stable during extended travel.\nThe sealed pack is suited to cold, isolated research missions.\nStraightforward preparation helps conserve time and supplies at camp.",
        id: 49,
        specifications: ["Type: Long-storage meal", "Use: Europa expeditions", "Contents: Preserved ingredients", "Storage: Extended travel"]
    },
    {
        name: "Starlight Tea",
        price: 105,
        category: "Food",
        rating: 9,
        image: "/products/50.svg",
        desc: "A fragrant tea blend selected for calm evenings aboard stations.\nBrews cleanly in a sealed low-gravity cup.\nIncludes individually packed portions for long missions.\nThe gentle blend offers a relaxing choice after a busy shift.\nCompact sachets are easy to store in a galley or personal kit.",
        id: 50,
        specifications: ["Type: Fragrant tea blend", "Preparation: Sealed low-gravity cup", "Packaging: Individual portions", "Use: Orbital stations"]
    }
    
]
