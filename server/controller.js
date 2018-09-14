module.exports = {

login: (req, res) => {
  console.log('req body',req.body)
  const db = req.app.get('db')
  let {username, password} = req.body
  db.get_user({password, username})
  .then(user => {
    console.log('user?:', user)
    res.status(200).send(user)
  })
 
}

}