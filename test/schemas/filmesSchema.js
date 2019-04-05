const Joi = require('joi');
const schemaFilmeValido = Joi.object({
  director: Joi.string().required(),
  opening_crawl: Joi.string().required(),
  vehicles: Joi.array().required(),
  url: Joi.string().required(),
  release_date: Joi.string().required(),
  created: Joi.string().isoDate().required(),
  title: Joi.string().required(),
  edited: Joi.string().isoDate().required(),
  species: Joi.array().required(),
  characters: Joi.array().required(),
  producer: Joi.string().required(),
  episode_id: Joi.number().integer().required(),
  starships: Joi.array().required(),
  planets: Joi.array().required(),
}).required();


module.exports = {
  schemaFilmeValido
}