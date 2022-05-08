import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: "ghost-author@example.com",
    password: "Colombia1234*",
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 10', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear tag', function () {
        // Login
        utils.autenticar(user)

        // Crear tag
        utils.crearTag(`Tag - ${id}`, faker.lorem.paragraph())

        // Verificar que el tag se creó
        cy.get('li').contains("Tags").first().click()
        cy.get('li[class="gh-list-row gh-tags-list-item ember-view"]').contains(`Tag - ${id}`).should("exist")
    })
})


