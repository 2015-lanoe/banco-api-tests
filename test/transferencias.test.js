const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencias = require ('../fixtures/postTransferencias.json')

describe('transferencias', () => {
    describe('POST /transferencias', () => {
        let token
        
        beforeEach (async () => {
            token = await obterToken('julio.lima', '123456')

            }) 

        it('Deve retornar sucesso com status code 201 para tranferencias igual ou acima de 10,00', async () => {
            const bodyTransferencias = { ...postTransferencias }

            const resposta = await request(process.env.BASE_URL)
              .post('/transferencias')
              .set('Content-Type', 'application/json') // como seto o cabeçalho para requisição
              .set('Authorization', `Bearer ${token}`)
              .send (bodyTransferencias)

            expect(resposta.status).to.equal(201);

        })
    

         it('Deve retornar falha com status code 422 para tranferencias abaixo de 10,00', async () => {
             const bodyTransferencias = { ...postTransferencias }
             bodyTransferencias.valor = 8

             const resposta = await request('http://localhost:3000')
              .post('/transferencias')
              .set('Content-Type', 'application/json') // como seto o cabeçalho para requisição
              .set('Authorization', `Bearer ${token}`)
              .send(bodyTransferencias)

        expect(resposta.status).to.equal(422);
    })

    })
})
