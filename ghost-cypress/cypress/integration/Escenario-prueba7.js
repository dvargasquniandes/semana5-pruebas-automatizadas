import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};


const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 7', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear una página sin publicarla, salir del admin, y revisar que no está publicada', function () {
        // Login
        utils.autenticar(user)

        // Crear página sin publicar
        utils.crearPagina(`Escenario de prueba 7 - ${id}`, "Este es un test para el escenario de prueba 7")

        // Verificar que la página no está publicada
        cy.get('button[class="post-settings"]').click()
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.request({ url: `${url}/${sometext}`, failOnStatusCode: false }).its('status').should('equal', 404)
            });

        // Verificar que está en el listado de páginas
        cy.visit(`${url}/ghost/#/pages`)
        cy.get('li[class="gh-list-row gh-posts-list-item"]').contains(`Escenario de prueba 7 - ${id}`).click()
        cy.get('textarea[placeholder="Page Title"]').should("have.value", `Escenario de prueba 7 - ${id}`)
    })
})


