// models/Property.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
    title: { type: String, required: true },
    property_type: { type: String, enum: ['Hostel', 'PG', 'Flat', 'Mess'], required: true },
    
    // Nested Location Object
    location: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
    },

    price: { type: Number, required: true },
    bedrooms: { type: Number, default: 1 },
    bathrooms: { type: Number, default: 1 },

    // Array of image URLs
    images: [{ type: String, required: true }], 

    posted_by: { type: String, default: 'Owner' },
    posted_date: { type: Date, default: Date.now },
    is_recommended: { type: Boolean, default: false }
});

// Export the Mongoose Model
module.exports = mongoose.model('Property', PropertySchema);