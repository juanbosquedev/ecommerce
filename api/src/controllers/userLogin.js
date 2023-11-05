const users = require("../../users.json");

module.exports = (req, res) => {
  const { user, password } = req.body;

  for (const userData of users) {
    if (userData.user === user && userData.password === password) {
      userData.logged = true;
      return res.send(userData);
    }
  }
};
