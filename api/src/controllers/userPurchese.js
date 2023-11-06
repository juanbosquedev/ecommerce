module.exports = (req, res) => {
  let purchese = [];

  try {
    const body = req.body;
    let state = purchese.concat(body);

    if (body.length > 1) {
      res.status(200).send(state);
    }
  } catch (error) {
    return res.status(405).send(error);
  }
};
