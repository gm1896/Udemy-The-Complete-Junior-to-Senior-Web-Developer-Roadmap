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

module.exports = {
	handleProfileGet
};