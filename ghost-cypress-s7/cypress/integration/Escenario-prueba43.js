import { faker } from '@faker-js/faker';
import { PagesUtils } from '../plugins/pages';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 43', function () {
    before(function () {
        const respuestaMockaroo = cy.request("GET","https://my.api.mockaroo.com/tags_positivo.json?key=1abdad40")
            .then((respuesta) =>{
                this.data = respuesta.body;
            });
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
        PagesUtils.autenticar(user)
    })
    it('Crear una página con datos traidos por api, salir del admin, y revisar que no está publicada', function () {
        cy.visit(`${url}/ghost/#/pages`);
        let dataSelected = this.data[Math.floor(Math.random()*this.data.length)];
        // Crear página sin publicar
        PagesUtils.crearPagina(dataSelected.nombre, dataSelected.descripcion, dataSelected.nombreModificado);

        // Verificar que la página no está publicada
        cy.get('button[title="Settings"]').click()
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.request({ url: `${url}/${sometext}`, failOnStatusCode: false }).its('status').should('equal', 404)
            });

        // Verificar que está en el listado de páginas
        cy.visit(`${url}/ghost/#/pages`)
        cy.get('li[class="gh-list-row gh-posts-list-item"]').contains(dataSelected.nombre).click()
        cy.get('textarea[class="gh-editor-title ember-text-area gh-input ember-view"]').should("have.value", dataSelected.nombre)
    })
})


