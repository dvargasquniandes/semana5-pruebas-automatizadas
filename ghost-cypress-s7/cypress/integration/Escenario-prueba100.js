import { utils } from '../plugins/utils_inicio_sesion';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 100', function () {
    before(function () {
        const respuestaMockaroo = cy.request("GET","https://my.api.mockaroo.com/usuarios_falsos.json?key=1abdad40")
            .then((respuesta) =>{
                this.data = respuesta.body;
            });
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Set pseudo-aleatorio por API, usuarios no válidos', function () {
        let testUser = this.data[Math.floor(Math.random()*this.data.length)];
        utils.autenticar(testUser.username, testUser.password);
        cy.get('p.main-error').contains("There is no user with that email address.").should("exist");
    })
})

