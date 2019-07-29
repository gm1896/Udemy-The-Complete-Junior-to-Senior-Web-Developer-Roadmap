const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt-nodejs');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');


// const db = knex({
//   client: 'pg',
//   connection: {
//     connectionString : process.env.DATABASE_URL,
//     ssl:true,
//   }
// });

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'test',
    database : 'smartbrain'
  }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/',(req,res) => {
	res.send('It is working');
})


app.put('/image',(req,res) => {image.handleImage(req,res,db)});

app.post('/imageurl',(req,res) => {image.handleApiCall(req,res)});

app.get('/profile/:id',(req,res) => {profile.handleProfileGet(req,res,db)});

app.post('/signin',(req,res) => {signin.handleSignin(req,res,db,bcrypt)});

app.post('/register', (req,res) => {register.handleRegister(req,res,db,bcrypt)});


// app.listen(process.env.PORT || 3000, ()=> {
// 	console.log(`App is running on port ${process.env.PORT}`);
// })

app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})