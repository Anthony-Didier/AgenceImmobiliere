const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


// Import Router
const bienRouter = require('./routes/bien');
const annonceRouter = require('./routes/annonce');
const agentRouter = require('./routes/agent');
const acheteurRouter = require('./routes/acheteur');
const keywordRouter = require('./routes/keyword');
const caracteristiqueRouter = require('./routes/caracteristique');
const statutRouter = require('./routes/statut');


app.use('/biens', bienRouter);
app.use('/annonces', annonceRouter);
app.use('/agents', agentRouter);
app.use('/acheteurs', acheteurRouter);
app.use('/keywords', keywordRouter);
app.use('/caracteristiques', caracteristiqueRouter);
app.use('/statuts', statutRouter);


app.listen(port, () => {
    console.log('Server running');
})