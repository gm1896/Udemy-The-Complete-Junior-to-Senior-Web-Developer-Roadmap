const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'fc40a9562b444063839bc614ebba5fc9'
});

const handleApiCall = (req,res) => {
     app.models
     .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
     .then(data => {
     	console.log(data)
     	res.json(data);
     })
     .catch(err => res.status(400).json("Unable to work with API"))
	}

const handleImage = (req,res,db) => {
	const {id } = req.body;
	db ('users')
	.where('id', '=', id)
	.increment('entries',1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0]);
	})
	.catch(err => res.status(400).json("Unable to get the number of entries"))
}

module.exports = {
	handleImage,
	handleApiCall
};	