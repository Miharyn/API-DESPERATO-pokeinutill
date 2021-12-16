module.exports = () => {
  const pokeAlgoDB = require('../data/pokealgo.json');
  const controller = {};

  controller.listPokeAlgo = (req, res) => res.status(200).json(pokeAlgoDB);

  return controller;
}