const express = require('express');
const app = express();
const port = 3000;

function gerarListaDeShows(){
    return shows = [
        {
            nome:"Show 1", data: '17/08/2024', hora:'20:00',
            local: 'Teatro Municipal', valor_ingresso: 50.00,
        },
        {
            nome:"Show 2", data: '18/08/2024', hora:'22:00',
            local: 'Cinema Universal', valor_ingresso: 60.00,
        },
        {
            nome:"Show 3", data: '19/08/2024', hora:'19:00',
            local: 'Teatro Municipal', valor_ingresso: 45.00,
        }
    ]
}

app.get('/', (req, res) => {
    const shows = gerarListaDeShows();
    res.send(shows);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});