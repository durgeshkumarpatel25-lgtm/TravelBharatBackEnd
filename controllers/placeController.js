const Place = require("../models/Place");

// @desc    Get all places
// @route   GET /places (and /api/places)
// @access  Public
const getAllPlaces = async (req, res) => {
  try {
    const data = await Place.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Get single place by ID
// @route   GET /api/places/:id
// @access  Public
const getPlaceById = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      return res.status(404).json({ error: "Place not found" });
    }
    res.json(place);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Create a new place
// @route   POST /add-place (and /api/places)
// @access  Public
const createPlace = async (req, res) => {
  try {
    const newPlace = new Place(req.body);
    await newPlace.save();
    res.status(201).json({ message: "Place added successfully 🔥", data: newPlace });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Update a place
// @route   PUT /api/places/:id
// @access  Public
const updatePlace = async (req, res) => {
  try {
    const updatedPlace = await Place.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedPlace) {
      return res.status(404).json({ error: "Place not found" });
    }
    res.json({ message: "Place updated successfully", data: updatedPlace });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Delete a place
// @route   DELETE /api/places/:id
// @access  Public
const deletePlace = async (req, res) => {
  try {
    const deletedPlace = await Place.findByIdAndDelete(req.params.id);
    if (!deletedPlace) {
      return res.status(404).json({ error: "Place not found" });
    }
    res.json({ message: "Place deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc    Seed demo data
// @route   GET /add (and POST /api/places/seed)
// @access  Public
const seedPlaces = async (req, res) => {
  try {
    // Clear existing data to avoid duplicates
    await Place.deleteMany({});

    await Place.insertMany([
      {
        name: "manali",
        title: "Manali",
        state: "himachal pradesh",
        city: "manali",
        category: "adventure",
        image: "images/manali.jpg",
        description: "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to the 4,000m-high Rohtang Pass. The town is famous for its cool climate and snow-capped mountains, offering a perfect escape from the heat of the plains. Visitors can explore the ancient Hadimba Devi Temple, visit the Tibetan monasteries, or take a walk through the fragrant pine forests. Manali also serves as the starting point for the legendary Manali-Leh highway, attracting adventurers from around the globe.",
        bestTime: "October to June"
      },
      {
        name: "khajuraho",
        title: "Khajuraho Temple",
        state: "madhya pradesh",
        city: "khajuraho",
        category: "heritage",
        image: "images/khajuraho.jpg",
        description: "The Khajuraho Group of Monuments is a group of Hindu temples and Jain temples in Chhatarpur district, Madhya Pradesh, India. They are a UNESCO World Heritage Site. The temples are famous for their Nagara-style architectural symbolism and their erotic sculptures. Most Khajuraho temples were built between 950 and 1050 by the Chandela dynasty. Historical records note that the Khajuraho temple site had 85 temples by the 12th century, spread over 20 square kilometers. Of these, only about 25 temples have survived, spread over 6 square kilometers. Of the various surviving temples, the Kandariya Mahadeva Temple is decorated with a profusion of sculptures with intricate details, symbolism and expressiveness of ancient Indian art. It is a stunning display of architectural brilliance and cultural depth.",
        bestTime: "October to March"
      },
      {
        name: "jaipur",
        title: "Jaipur City",
        state: "rajasthan",
        city: "jaipur",
        category: "heritage",
        image: "images/jaipur.jpg",
        description: "Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (a rarity in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence. Other highlights include the Hawa Mahal (Palace of Winds), a unique five-story exterior with 953 small windows called jharokhas, and the Amber Fort, a majestic hilltop fortress offering panoramic views. Jaipur is a treasure trove for shoppers, famous for its gemstones, block prints, and traditional handicrafts. The city seamlessly blends its rich royal history with a vibrant, modern urban life.",
        bestTime: "November to February"
      },
      {
        name: "goa",
        title: "Goa Beaches",
        state: "goa",
        city: "panaji",
        category: "nature",
        image: "images/goa.jpg",
        description: "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony is evident in its preserved 17th-century churches and the area’s tropical lift plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda. Beyond the beaches, Goa offers lush green landscapes, spice farms, and a rich biodiversity in its wildlife sanctuaries. The state is famous for its vibrant nightlife, seafood delicacies, and a unique 'sussegad' lifestyle—a relaxed and laid-back way of life. Architecture lovers can explore the Basilica of Bom Jesus, a UNESCO World Heritage site, and the various colorful houses in the Fontainhas Latin Quarter. Whether you're looking for adventure or peace, Goa has something for everyone.",
        bestTime: "November to February"
      },
      {
        name: "kerala",
        title: "Kerala Backwaters",
        state: "kerala",
        city: "alleppey",
        category: "nature",
        image: "images/kerala.jpg",
        description: "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers. The backwaters are a unique ecosystem where freshwater from the rivers meets the seawater from the Arabian Sea. A journey on a traditional houseboat (Kettuvallam) through these tranquil waters is a once-in-a-lifetime experience. Kerala is also the cradle of Ayurveda, offering rejuvenating wellness treatments. The state's rich culture is reflected in its classical dance forms like Kathakali and its vibrant festivals like Onam.",
        bestTime: "September to March"
      },
      {
        name: "varanasi",
        title: "Varanasi Ghats",
        state: "uttar pradesh",
        city: "varanasi",
        category: "religious",
        image: "images/varanasi.jpg",
        description: "Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva. The riverfront is lined with numerous 'ghats' (embankments with steps), where various rituals and daily activities take place. The evening Ganga Aarti at Dashashwamedh Ghat is a mesmerizing spectacle of fire and devotion. Varanasi is also a center for learning and music, famous for its silk weaving and fine muslin. It is a city that challenges the senses and offers a profound glimpse into the spiritual heart of India.",
        bestTime: "October to March"
      },
      {
        name: "pachmarhi",
        title: "Pachmarhi Hill Station",
        state: "madhya pradesh",
        city: "pachmarhi",
        category: "nature",
        image: "images/pachmarhi.JPG",
        description: "Pachmarhi is a hill station in the Hoshangabad district of Madhya Pradesh state of central India. It has been the location of a cantonment (Pachmarhi Cantonment) since British Raj. It is widely known as Satpura ki Rani ('Queen of Satpura'), situated at a height of 1067 m in a valley of the Satpura Range in Hoshangabad district. Dhupgarh, the highest point (1,352 m) in Madhya Pradesh and the Satpura range, is located here. It is a part of Pachmarhi Biosphere Preserve. The town is famous for its beautiful waterfalls, such as Bee Falls and Duchess Falls, and its ancient rock-cut caves, believed to have been used by the Pandavas during their exile. The lush green forests and pleasant weather make it a year-round destination for nature lovers and trekkers looking for a peaceful retreat in the heart of India.",
        bestTime: "All year round"
      },
      {
        name: "ultapani",
        title: "Ulta Pani",
        state: "chhattisgarh",
        city: "mainpat",
        category: "adventure",
        image: "images/ulta pani.jpg",
        description: "Ulta Pani is a unique spot where water flows uphill, defying gravity. It is a natural curiosity located in the Mainpat region of Chhattisgarh, often referred to as the 'Shimla of Chhattisgarh' due to its cool climate and scenic beauty. This mysterious phenomenon attracts curious travelers and scientists alike who come to witness the water moving against the slope. Mainpat is also known for its large Tibetan settlement and the Dhakpo Shedupling Monastery. The region is blessed with rolling hills, dense forests, and hidden waterfalls like Tiger Point and Fish Point. Ulta Pani is a testament to the many unexplored and fascinating wonders of central India, offering a blend of mystery, culture, and natural beauty for those willing to venture off the beaten path.",
        bestTime: "July to February"
      }
    ]);

    res.send("Data inserted successfully! 🔥 Check your home page now.");
  } catch (err) {
    res.status(500).send("Insert failed: " + err.message);
  }
};

module.exports = {
  getAllPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace,
  seedPlaces
};
