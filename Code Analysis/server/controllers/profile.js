const handleProfileGet = (req,res,db) => {
	const { id } = req.params;
	db.select('*').from('users').where({id: id})
	.then(user => {
		if(user.length){
			res.json(user[0])
		}else{
			res.status(400).json("No such users exists")
		}
	}).catch(err => res.status(400).json("Error getting user"))
	// if(!found) {
	// 	res.status(400).json("Not Found")
	// }
}

const handleProfileUpdate = (req,res,db) => {
	const { id } = req.params;
	const { name, age, pet } = req.body.formInput;
	db('users')
		.where({ id })
		.update({ name })
		.then(resp => {
			if(resp) {
				res.json("Sucess")
			}
			else{
				res.status(400).json('Unable to Update')
			}
		})
		.catch(err => res.status(400).json('Error Updating User'))

}

module.exports = {
	handleProfileGet,
	handleProfileUpdate
};