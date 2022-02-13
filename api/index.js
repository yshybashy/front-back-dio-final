const express = require('express');
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());
const ControllerFilms = require('./controllers/ControllerFilms');
const ControllerSeries = require('./controllers/ControllerSeries')

//Films
app.post('/netflix/films/insert',     ControllerFilms.insert);
app.put('/netflix/films/update/:id',  ControllerFilms.update);
app.get('/netflix/films',            ControllerFilms.findAll);
app.get('/netflix/films/:id',         ControllerFilms.findById);
app.delete('/netflix/films/:id',      ControllerFilms.delete);

//Series
app.post('/netflix/series/insert',     ControllerSeries.insert);
app.put('/netflix/series/update/:id',  ControllerSeries.update);
app.get('/netflix/series',            ControllerSeries.findAll);
app.get('/netflix/series/:id',         ControllerSeries.findById);
app.delete('/netflix/series/:id',      ControllerSeries.delete);



const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
    console.log(`API RODANDO NA PORTA ${PORT}`);
})