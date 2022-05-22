import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils_inicio_sesion';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 111', function () {
    before(function () {
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Datos dinámicos pseudo aleatorios , usuarios no válidos', function () {
        let testUser = {
            username: faker.internet.email(),
            password: faker.internet.password()
        }
        cy.log(testUser);
        utils.autenticar(testUser.username, testUser.password);
        cy.get('p.main-error').contains("There is no user with that email address.").should("exist");
    })
})

