import { faker } from '@faker-js/faker';
import { PagesUtils } from '../plugins/pages';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 59', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
        PagesUtils.autenticar(user)
    })
    it('crear una página con datos fake con hacker data, salir del admin, y revisar que esté la página', function () {
        cy.visit(`${url}/ghost/#/pages`);
        // Crear página
        const titulo = faker.hacker.abbreviation();
        const descripcion = faker.hacker.adjective();
        const excerpt = faker.hacker.noun();
        PagesUtils.crearPagina(titulo, descripcion, excerpt);
        PagesUtils.publicarPagina()

        // Verificar página creada
        cy.get('button[title="Settings"]').click()
        cy.get('input[name="post-setting-slug"]')
            .invoke('val')
            .then(sometext => {
                cy.visit(`${url}/${sometext}`)
                if (titulo) cy.get("h1").should("have.text", titulo)
            });
    })
})


