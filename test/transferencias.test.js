const request = require('supertest');
const { expect } = require('chai')

describe('tranferencias', () => {
    describe('POST /transferencias', () => {
        it('Deve retornar sucesso com status code 201 para tranferencias igual ou acima de 10,00', async () => {
            const respostaLogin = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json') // como seto o cabeçalho para esta requisição
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            const token = respostaLogin.body.token

            const resposta = await request('http://localhost:3000')
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

            console.log(resposta.body)

        })
    })

    it('Deve retornar falha com status code 422 para tranferencias abaixo de 10,00', async () => {
        const respostaLogin = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json') // como seto o cabeçalho para esta requisição
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            const token = respostaLogin.body.token

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
