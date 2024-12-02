# REST-Webbtjänst Projekt DT193G
***Av Alexander Hilding***

## Arbetsgång
* Initierat npm-projekt.
* Installerat paket:
    * **@hapi/hapi**
    * **mongoose**
    * **dotenv**
    * **joi**
    * **nodemon**
* Använt Thunder Client (VSCode-plugin) för att testa API-anrop.
* Satt upp ett git-repo och en server-setup i server.js med hapi som ramverk.
* Implementerat rutter, modell, kontrollmetoder och valideringsschema.
* Anslutit till MongoDB med Mongoose.
* Publicerat webbtjänsten på Render.

## Projektets komponeter
* **server.js** - Main-fil för servern med hapi som ramverk, som registrerar rutter och anslutning till databasen.
* **movie.route.js** - Definierar rutter för /movies och kopplar dessa till respektive kontroller-metoder och validering av inkommande data med Joi.
* **movie.controller.js** - Kontrollermetoder för http-anrop (get/post/put/delete).
* **movie.model.js** - Innehåller definierat mongoose-schema för movie.
* **movie.validation.js** - Valideringsschema för movie. Hanteras med Joi.

## Länk
API'et finns tillgängligt på https://dt193g-moment2-hapi.onrender.com/movies

## Användning
Såhär når du API'et:
| Metod | Ändpunkt  | Beskrivning |
|--|--|--|
| GET | /movies |	Hämtar alla filmer |
| GET | /movies/{id} |	Hämtar specifik film med id |
| POST | /movies |	Skapar ny film |
| PUT |	/movies/{id} |	Uppdaterar ett filmobjekt |
| DELETE |	/movies/{id} |	Tar bort en specifik film med id |

### Exempel på JSON-objekt för att skapa en ny film:

```
{
  "name": "Madicken",
  "length": 89,
  "description": "Madicken bor på Junibacken med sin familj. Madicken är en påhittig tjej som ständigt råkar ut för en massa äventyr.",
  "watched": true
}
```

## Miljövariabler
I ```.env```-filen används nyckel:
* MONGO_URI: MongoDB-anslutningssdata

## Deploy till Render
1. Kör ```git clone https://github.com/Webbutvecklings-programmet/moment-2-backend-ramverk-hildingx ```
2. Skapa ny Web Service
3. Ange ```npm install``` och ```npm start```
4. Lägg til anslutningsdata (MONGO_URI) i Renders miljövariabler
5. Profit