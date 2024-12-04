const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Parser za JSON podatke
app.use(bodyParser.json());

// Parser za podatke iz formi
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'ucka.veleri.hr',
    user: 'lmajetic',
    password: '11',
    database: 'lmajetic'
  });
  
app.use(express.urlencoded({ extended: true }));
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  app.listen(port, () => {
    console.log("Server running at port: " + port);
});

app.get("/api/knjige", (request, response) => {
    
  connection.query("SELECT * FROM knjiga", (error, results) => {
    if (error) throw error;
    response.send(results);
  });
/*
  request - slanje zahtjeva s klijentske strane
  response - slanje odgovora sa serverske strane

  npm install -g nodemon
*/
  //response.send("popis knjiga");
});

app.get("/api/knjige/:id", (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM knjiga WHERE id = ?", id, (error, results) => {
      if (error) throw error;
      response.send(results);
    });
  //response.send("jedna knjiga "+id);
});

app.post("/api/rezerv_knjige", (request, response) => {
  const data = request.body;
  rezervacija = [[data.datum, data.id_knjiga, data.id_korisnik]]

  connection.query("INSERT INTO rezervacija (datum_rez, knjiga, korisnik) VALUES ?", [rezervacija], (error, results) => {
    if (error) throw error;
    response.send(results);
  });
  
  //response.send("Poslano "+data.id_knjiga);
});

/*
app.listen(port, () => {
  console.log("Server running at port: " + port);
});
*/

/* Upiti sa nastave 21/11/24

app.get("/api/knjige/:naslov", (req, res) => {
    connection.query("SELECT * FROM knjiga WHERE naslov like "%naziv%"", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});

app.get("/api/knjige/:autor", (req, res) => {
    connection.query("SELECT * FROM knjiga WHERE autor like "%autor%"", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});

app.get("/api/slob_knjige/", (req, res) => {
    connection.query("SELECT (knjiga.stanje - count(rezervacija.knjiga)) as slobodne, knjiga.id, knjiga.naslov, knjiga.stanje FROM `knjiga` left join rezervacija on knjiga.id=rezervacija.knjiga group by knjiga.id", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});

app.get("/api/slob_knjige/:id_knjige", (req, res) => {
    connection.query("SELECT * FROM knjiga WHERE id_knjige like "%id_knjige%"", (error, results) => {
        if (error) throw error;
        res.send(results);
      });
});

app.post("/api/rezerv_knjige", (req, res) => {
    const data = req.body;
    rezervacija = [[date.today, data.id_knjiga, data.id_korisnik]]
    connection.query("INSERT INTO rezervacija (datum, knjiga, korisnik) VALUES ?", [rezervacija], (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});

app.get("/api/rezerv_knjige_korisnici", (req, res) => {
    connection.query("SELECT * FROM knjiga, rezervacija, korisnik WHERE knjiga.id=rezervacija.knjiga and korisnik.id=rezervacija.korisnik", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});

app.get("/api/rezerv_knjige/:id_korisnik", (req, res) => {
    connection.query("SELECT * FROM knjiga, rezervacija, korisnik WHERE knjiga.id=rezervacija.knjiga and korisnik.id=rezervacija.korisnik AND korisnik.id=id_korisnik", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});

app.get("/api/rezerv_knjige/:id_knjiga", (req, res) => {
    connection.query("SELECT * FROM knjiga, rezervacija, korisnik WHERE knjiga.id=rezervacija.knjiga and korisnik.id=rezervacija.korisnik AND knjiga.id=id_knjiga", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});

app.get("/api/korisnici", (req, res) => {
    connection.query("SELECT * FROM korisnik", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});

app.get("/api/korisnici/:id_korisnik", (req, res) => {
    connection.query("SELECT * FROM korisnik WHERE id_korisnik like "%id_korisnik%"", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});

app.put("/api/rezerv_knjige/:id_knjiga", (req, res) => {
    connection.query("INSERT INTO rezervacija (datum, knjiga, korisnik) VALUES ('2024-10-31', 3, 2)", (error, results) => {
      if (error) throw error;
      res.send(results);
    });
});

*/