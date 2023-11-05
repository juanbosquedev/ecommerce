const users = require("../../users.json");

module.exports = (req, res) => {
  const { user, password } = req.body;
    console.log(user, password)
  for (const userData of users) {
    if (userData.user === user && userData.password === password) {
      userData.logged = true;
      return res.send(userData);
    }
  }
  return res.send(false)
};
