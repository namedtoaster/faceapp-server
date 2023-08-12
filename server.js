const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const knex = require('knex');
const { response } = require('express');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image')

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: process.env.POSTGRES_PASS,
        database: 'smart-brain'
    }
})

const app = express();
app.use(cors({
    origin: 'http://localhost:3001'
}))
app.use(bodyParser.json()) 

app.get('/', (req, res) => {
    res.send(database.users)
})

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.getProfile(req, res, db) })
app.put('/image', (req, res) => { image.handleImageUpdate(req, res, db) })

app.listen(3000, () => {
    console.log('app is running on port 3000');
})