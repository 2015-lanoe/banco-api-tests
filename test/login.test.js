const request = require('supertest');
const { expect} = require ('chai')
require ( 'dotenv' ) . config ( )

describe('login' , () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com um token em string quando usar credenciais válidas', async() => {
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type' , 'application/json') // como seto o cabeçalho para esta requisição
                .send({
                    "username": 'julio.lima',
                    "senha": '123456'
                })

            

            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
            
        })

    })
})