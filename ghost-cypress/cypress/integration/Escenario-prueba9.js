import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: "ghost-author@example.com",
    password: "Colombia1234*",
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 9', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, editar usuario, salir y loguearse con el nuevo usuario', function () {
        // Login
        utils.autenticar(user)

        // Editar usuario
        cy.get('li').contains("Staff").first().click()
        cy.get('div[class="apps-grid-cell tooltip-centered"]').first().click()
        cy.get('#user-name').clear().type(faker.name.findName(), {force: true})
        cy.get('#user-location').clear().type(faker.address.city(), {force: true})
        cy.get('button').contains("Save").click()
    })
})


