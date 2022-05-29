import { faker } from '@faker-js/faker';
import { PagesUtils } from '../plugins/pages';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 57', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
        PagesUtils.autenticar(user)
    })
    it('Crear una página con datos fake solo números sin publicarla, salir del admin, y revisar que no está publicada', function () {
        cy.visit(`${url}/ghost/#/pages`);
        const titulo = faker.datatype.number();
        const descripcion = faker.datatype.float();
        const excerpt = faker.datatype.number();
        // Crear página sin publicar
        PagesUtils.crearPagina(titulo, descripcion, excerpt);

        // Verificar que la página no está publicada
        cy.get('button[title="Settings"]').click()
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.request({ url: `${url}/${sometext}`, failOnStatusCode: false }).its('status').should('equal', 404)
            });

        // Verificar que está en el listado de páginas
        cy.visit(`${url}/ghost/#/pages`)
        cy.get('li[class="gh-list-row gh-posts-list-item"]').contains(titulo).click()
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should("have.value", titulo)
    })
})


