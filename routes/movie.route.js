const MovieController = require("../controllers/movie.controller");
const { movieValidationSchema } = require("../validations/movie.validation");

module.exports = (server) => {
    server.route([
        // Definiera routes för /movies
        {
            // Route för att hämta alla filmer
            method: "GET",
            path: "/movies",
            handler: MovieController.getAllMovies
        },
        {
            // Route för att hämta en specifik film baserat på ID
            method: "GET",
            path: "/movies/{id}",
            handler: MovieController.getMovieById
        },
        {
            method: "POST",
            path: "/movies",
            handler: MovieController.createMovie,
            options: {
                validate: {
                    payload: movieValidationSchema // Validera objektet som skickas i request body
                }
            }
        },
        {
            method: "PUT",
            path: "/movies/{id}",
            handler: MovieController.updateMovie,
            options: {
                validate: {
                    payload: movieValidationSchema // Validera objektet som skickas i request body
                }
            }
        },
        {
            method: "DELETE",
            path: "/movies/{id}",
            handler: MovieController.deleteMovie
        }
    ]);
};