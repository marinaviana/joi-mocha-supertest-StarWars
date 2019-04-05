const request = require('supertest');
const Joi = require('joi');
const joiAssert = require('joi-assert');
const expect = require('chai').expect;

const{
    schemaPessoasValido,
} = require('../schemas/pessoasSchema.js');

const URL = 'https://swapi.co/api/';
const PATH = 'people/1/';

const request_timeout = 20000;

it('Validando response com Joi.validate', function(done){
    request(URL)
    .get(PATH)
    .expect('Content-Type', /json/)
    .end(function(err, res){
        expect(res.status).to.eql(200);
        Joi.validate(res.body, schemaPessoasValido,{
            abortEarly: false
        },(err, data) => {
            if(err) throw err;
        });
        done(err);
    })
});