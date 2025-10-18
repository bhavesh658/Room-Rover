// routes/propertyRoutes.js or in server.js
const express = require('express');
const router = express.Router();
const Property = require('./models/Property'); // Import the model

// Middleware to parse JSON body
router.use(express.json());

// POST route to add a new property
router.post('/api/properties', async (req, res) => {
    try {
        // 1. Create a new document instance using the request body
        const newProperty = new Property({
            title: req.body.title,
            property_type: req.body.property_type,
            location: req.body.location,
            price: req.body.price,
            images: req.body.images,
            // ... other fields
        });

        // 2. Save the document to the MongoDB 'properties' collection
        const savedProperty = await newProperty.save();

        // 3. Send back the newly created document
        res.status(201).json(savedProperty);

    } catch (error) {
        // Handle validation or save errors
        res.status(400).json({ message: 'Error saving property', error: error.message });
    }
});

// Assuming you use Express, you would typically include this router:
// app.use('/', router); 

// Example of data sent to this endpoint:
/*
{
    "title": "1BHK 1Bath Independent Room",
    "property_type": "PG",
    "location": {
        "address": "ambika nagar, Bengali Square",
        "city": "Indore",
        "state": "M P"
    },
    "price": 7500,
    "images": [
        "https://example.com/pg-img-1.jpg", 
        "https://example.com/pg-img-2.jpg"
    ]
}
*/