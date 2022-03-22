const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/animals',require('./routes/animal.routes'))



const PORT = config.get('port') || 8080

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`App has been started on port ${PORT}...`)
        })
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}

start()


