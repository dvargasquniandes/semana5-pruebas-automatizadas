import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');
const ghostVersion = Cypress.env('ghost_version');

describe('Escenario de prueba 3', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear post sin publicarlo, salir del admin, y revisar que no está publicado el post', function () {
        let indiceImagen = 0;
        // Login
        utils.autenticar(user)
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Crear post sin publicar
        utils.crearPost(`Escenario de prueba 3 - ${id}`, "Este es un test para el escenario de prueba 3")
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Verificar que el post no está publicado
        cy.get('button[title="Settings"]').click()
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.request({ url: `${url}/${sometext}`, failOnStatusCode: false }).its('status').should('equal', 404)
            });

            cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
            // Verificar que está en el listado de posts
        cy.visit(`${url}/ghost/#/posts`)
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
        cy.get('li[class="gh-list-row gh-posts-list-item"]').contains(`Escenario de prueba 3 - ${id}`).click()
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should("have.value", `Escenario de prueba 3 - ${id}`)
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
    })
})


