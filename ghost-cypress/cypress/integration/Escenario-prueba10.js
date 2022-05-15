import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};


const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 10', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear tag', function () {
        let indiceImagen = 0;
        // Login
        utils.autenticar(user)
        cy.screenshot("imagen_" + (indiceImagen++))

        // Crear tag
        utils.crearTag(`Tag - ${id}`, faker.lorem.paragraph())
        cy.screenshot("imagen_" + (indiceImagen++))

        // Verificar que el tag se creó
        cy.get('li').contains("Tags").first().click()
        cy.screenshot("imagen_" + (indiceImagen++))
        cy.wait(1000)
        cy.get('.gh-list-row.gh-tags-list-item').contains(`Tag - ${id}`).should("exist")
        cy.screenshot("imagen_" + (indiceImagen++))
    })
})


