module.exports = {

login: (req, res) => {
  console.log(req.body)
  let {username, password} = req.body
  res.status(200).send(console.log(username, password))
}

}