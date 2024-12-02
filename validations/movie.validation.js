const Joi = require("joi");

// Valideringsschema för filmer
const movieValidationSchema = Joi.object({
     // Namn är obligatoriskt och max 255 tecken
    name: Joi.string()
        .min(1)
        .max(255)
        .trim()
        .required(),
    
    // Längd (i minuter) är obligatoriskt
    length: Joi.number()
        .min(1)
        .required(), 

    // Beskrivning är obligatorisk, max 500 tecken
    description: Joi.string()
        .min(1)
        .max(500)
        .trim()
        .required(), 

    // Anger om filmen är sedd
    watched: Joi.boolean()
        .required() 
});

module.exports = { movieValidationSchema };