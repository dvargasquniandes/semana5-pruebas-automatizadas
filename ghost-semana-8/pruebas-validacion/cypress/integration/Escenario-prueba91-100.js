import { utils } from '../plugins/utils_inicio_sesion';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 91 al 100', function () {
    before(function () {
        cy.fixture('inicio_sesion_negativo.json').then((TestData) =>
        {
            this.data = TestData
        });
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Set a-priori, datos errados', function () {
        this.data.forEach((testUser) => {
            utils.autenticar(testUser.username, testUser.password);
            cy.get('p.main-error').contains(testUser.resultado_esperado).should("exist");
        });
    })
})


