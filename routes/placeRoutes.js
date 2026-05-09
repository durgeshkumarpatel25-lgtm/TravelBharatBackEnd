const express = require("express");
const router = express.Router();
const {
  getAllPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace,
  seedPlaces
} = require("../controllers/placeController");

// Compatibility Routes (Used by existing frontend)
router.get("/places", getAllPlaces);
router.post("/add-place", createPlace);
router.get("/add", seedPlaces);

// Standard RESTful CRUD Routes
router.get("/api/places", getAllPlaces);
router.post("/api/places", createPlace);
router.get("/api/places/:id", getPlaceById);
router.put("/api/places/:id", updatePlace);
router.delete("/api/places/:id", deletePlace);
router.post("/api/places/seed", seedPlaces);

module.exports = router;
