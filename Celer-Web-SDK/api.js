const celer = require('./dist/index'); // '../dist/index' for NodeJS
const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var jsonParser = bodyParser.json()

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const client = new celer.Client('http://localhost:29979');


app.get('/', async function(req, res) { 
    const channelID = await client.openEthChannel('100', '100');
    console.log('channel', channelID, 'has been opened');
    const balanceBefore =  await client.getEthBalance();
    console.log('balance before', balanceBefore);
    return res.send(client);
})

app.post('/pay', jsonParser, async function (req, res) {
    // TODO: replace with actual address
    console.log("body", req.body.address);
    await client.sendEth('1', '6a265Af4d4a8544714134e818A0AFd90A6659a0F');
    await timeout(1000);
    const balanceAfter = await client.getEthBalance();
    console.log('balance after', balanceAfter);
    res.send("OK!");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))