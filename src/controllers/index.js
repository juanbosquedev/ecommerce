const { catchedAsync} = require("../utils/index");

module.exports = {
  getCharacters: catchedAsync(require("./userRecord")),

};
