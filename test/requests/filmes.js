const request = require('supertest');
const Joi = require('joi');
const joiAssert = require('joi-assert');
const expect = require('chai').expect;

const{
    schemaFilmeValido,
} = require('../schemas/filmesSchema.js');

const URL = 'https://swapi.co/api/';
const PATH = 'films/2/';

const request_timeout = 20000;

describe('Teste Contrato API', () => {
    it('Validando response com joi-assert', function(done) {
        this.timeout(request_timeout);
        request(URL)
            .get(PATH)
            .expect('Content-Type' , /json/)
            .expect(200)
            .end((err, res)=>{
                joiAssert(res.body, schemaFilmeValido);
            done(err);
        });
    });

});
