import Website from "../models/website.model";
import { connectDB } from "../db/index";

const websites = [
  {
    name: "No Nasties",
    website: "https://www.nonasties.in/",
    description: "Organic, fair trade, vegan clothing",
  },
  {
    name: "Nicobar",
    website: "https://www.nicobar.com/",
    description: "Minimalistic, sustainable designs",
  },
  {
    name: "Ka-Sha",
    website: "https://ka-sha.in/",
    description: "Upcycled, zero-waste textiles",
  },
  {
    name: "Doodlage",
    website: "https://doodlage.in/",
    description: "Fabric waste upcycling, recycled materials",
  },
  {
    name: "The Summer House",
    website: "https://thesummerhouse.in/",
    description: "Organic, handcrafted clothing",
  },
  {
    name: "Renge",
    website: "https://www.renge.co.in/",
    description: "Cruelty-free, deadstock fabric fashion",
  },
  {
    name: "Okhai",
    website: "https://www.okhai.org/",
    description: "Artisan-made, handcrafted clothing",
  },
  {
    name: "Maati by Neha Kabra",
    website: "https://maati.in/",
    description: "Natural fabrics, ethical production",
  },
  {
    name: "B Label (Bombay Hemp Company)",
    website: "https://blabel.in/",
    description: "Hemp-based fashion",
  },
  {
    name: "Jodi Life",
    website: "https://thejodilife.com/",
    description: "Handmade, block-printed designs",
  },
  {
    name: "PAIO",
    website: "https://www.paio.co.in/",
    description: "Vegan, cruelty-free footwear",
  },
  {
    name: "Zouk",
    website: "https://zouk.co.in/",
    description: "PETA-approved vegan bags and accessories",
  },
  {
    name: "Mistry",
    website: "https://mistry.in/",
    description: "Sustainable leather-free wallets and bags",
  },
  {
    name: "Arture",
    website: "https://arture.in/",
    description: "Cork-based, eco-friendly accessories",
  },
  {
    name: "Monkstory",
    website: "https://monkstory.com/",
    description: "Ethical, vegan men’s footwear",
  },
  {
    name: "Amala Earth",
    website: "https://amala.earth/",
    description: "Handcrafted sustainable jewelry",
  },
  {
    name: "Outhouse",
    website: "https://outhouse-jewellery.com/",
    description: "Ethical and slow fashion jewelry",
  },
];

async function seedDB() {
  try {
    connectDB();
    console.log("Connected to MongoDB");

    await Website.deleteMany({});

    const result = await Website.insertMany(websites);
    console.log(`Inserted ${result.length} brands`);

    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
}

seedDB();
