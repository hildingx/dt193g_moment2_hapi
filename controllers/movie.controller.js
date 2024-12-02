const Movie = require("../models/movie.model");

// Hämta alla filmer
exports.getAllMovies = async (request, h) => {
    try {
        return await Movie.find();
    } catch (err) {
        return h.response(err).code(500);
    }
};

// Hämta en specifik film med ID
exports.getMovieById = async (request, h) => {
    try {
        const movie = await Movie.findById(request.params.id);
        return movie || h.response("Filmen hittades inte").code(404);
    } catch (err) {
        return h.response(err).code(500);
    }
};

// Lägg till en ny film
exports.createMovie = async (request, h) => {
    try {
        // Skapa ny instans av movie-modellen med inkommande data
        const movie = new Movie(request.payload);
        // Spara film i databas
        const savedMovie = await movie.save();
        return h.response(savedMovie).code(201); // Returnera 201 Created
    } catch (err) {
        return h.response(err).code(500);
    }
};

// Uppdatera en film med ID
exports.updateMovie = async (request, h) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            request.params.id,
            request.payload,
            { new: true } // Returnera det uppdaterade dokumentet
        );
        return updatedMovie || h.response("Filmen hittades inte").code(404);
    } catch (err) {
        return h.response(err).code(500);
    }
};

// Ta bort en film med ID
exports.deleteMovie = async (request, h) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(request.params.id);
        return deletedMovie || h.response("Filmen hittades inte").code(404);
    } catch (err) {
        return h.response(err).code(500);
    }
};