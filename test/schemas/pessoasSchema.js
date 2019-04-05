const Joi = require('joi');
const schemaPessoasValido = Joi.object({
  films: Joi.array().required(),
  eye_color: Joi.string().required(),
  gender: Joi.string().required(),
  url: Joi.string().required(),
  height: Joi.string().required(),
  mass: Joi.string().required(),
  hair_color: Joi.string().required(),
  created: Joi.string().isoDate().required(),
  edited: Joi.string().isoDate().required(),
  starships: Joi.array().required(),
  birth_year: Joi.string().required(),
  skin_color: Joi.string().required(),
  species: Joi.array().required(),
  starships: Joi.array().required(),
  homeworld: Joi.string().required(),
  name: Joi.string().required(),
  vehicles: Joi.array().required(),
}).required();


module.exports = {
  schemaPessoasValido
}