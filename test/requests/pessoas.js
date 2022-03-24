const request = require('supertest');

const{
    schemaPessoasValido,
} = require('../schemas/pessoasSchema.js');

const URL = 'https://swapi.dev/api/';
const PATH = 'people/1/';

describe('Teste Contrato API', async() => {

it('Validando response com Joi.validate', async() => {
    const { body } = await request(URL)
    .get(PATH);
    
    await schemaPessoasValido.validateAsync(body);

});
})