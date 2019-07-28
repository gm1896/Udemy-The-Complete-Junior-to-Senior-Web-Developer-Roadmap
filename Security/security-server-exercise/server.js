const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
var winston = require('winston');

const bodyParser = require('body-parser');
const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.get('/', (req, res) => {
	res.cookie('session','1',{ httpOnly:true })
	res.cookie('session','1',{ secure:true })
	res.set({
		'Content-Security-Policy': "script-src 'self' 'https://apis.google.com'"
	})
	res.send('Hello World!')
});

app.post('/secret', (req, res) => {
  const { userInput } = req.body;
  winston.log(userInput);
  if ('info',userInput) {
    winston.log('info', 'user input: ' + userInput);
    res.status(200).json('success');
  } else {
    winston.error('This guy is messing with us:' + userInput);
    res.status(400).json('incorrect submission')
  }
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))