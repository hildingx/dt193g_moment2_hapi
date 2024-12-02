'use strict';

const Hapi = require('@hapi/hapi'); // Importera Hapi-ramverket för att skapa en HTTP-server
const Mongoose = require("mongoose"); // Importera Mongoose för att hantera MongoDB-anslutning
require("dotenv").config(); // Ladda miljövariabler från .env-fil (anslutningsdata)

const init = async () => {

    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: '0.0.0.0'
    });

    // Anslut till MongoDB
    Mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to MongoDb");
    }).catch((error) => {
        console.error("Error connecting to database: " + error);
    });

    //Routes från movie.route.js
    require("./routes/movie.route")(server);

    // Starta server
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

// Global hanterare för att fånga oavfångadel fel och undantag
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();