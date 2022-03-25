const request = require('supertest');


const{
    schemaFilmeValido,
} = require('../schemas/filmesSchema.js');

const URL = 'https://swapi.dev/api/';
const PATH = 'films/2/';


describe('Teste Contrato API', async() => {
    it('Validando response com joi-assert', async() => {
        const { body } = await request(URL)
        .get(PATH);

        await schemaFilmeValido.validateAsync(body)
        
    });

});
