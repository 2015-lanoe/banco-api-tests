const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')

describe('transferencias', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com status code 201 para tranferencias igual ou acima de 10,00', async () => {

            const token = await obterToken('julio.lima', 123456)

            const resposta = await request(process.env.BASE_URL)
              .post('/transferencias')
              .set('Content-Type', 'application/json') // como seto o cabeçalho para requisição
              .set('Authorization', 'Bearer ' + token)
              .send({
                contaOrigem: 1,
                contaDestino: 2,
                valor: 11,
                token: " "
                })

            expect(resposta.status).to.equal(201);


        })
    })

         it('Deve retornar falha com status code 422 para tranferencias abaixo de 10,00', async () => {

            const token = await obterToken('julio.lima', 123456)

            const resposta = await request('http://localhost:3000')
              .post('/transferencias')
              .set('Content-Type', 'application/json') // como seto o cabeçalho para requisição
              .set('Authorization', 'Bearer ' + token)
              .send({
                contaOrigem: 1,
                contaDestino: 2,
                valor: 8,
                token: " "
            })

        expect(resposta.status).to.equal(422);
    })
})
