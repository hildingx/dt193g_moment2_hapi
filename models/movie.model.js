const Mongoose = require("mongoose");

// Definiera schema för en film
const movieSchema = Mongoose.Schema({
    // Namnet på filmen, obligatoriskt och maxlängd på 255 tecken.
    name: { 
        type: String, 
        required: true, 
        maxlength: 255 
    },
    // Längden på filmen (i minuter), obligatoriskt.
    length: { 
        type: Number, 
        required: true 
    },
    // En kort beskrivning av filmen, obligatoriskt och maxlängd på 500 tecken.
    description: { 
        type: String, 
        required: true, 
        maxlength: 500 
    },
    // Om filmen har blivit sedd eller inte, obligatoriskt (boolean).
    watched: { 
        type: Boolean, 
        required: true 
    }
});

// Kontrollera om modellen redan finns
const Movie = Mongoose.models.Movie || Mongoose.model("Movie", movieSchema);

module.exports = Movie; // Exportera modellen
