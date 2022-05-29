import { faker } from '@faker-js/faker';
import { PagesUtils } from '../plugins/pages';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 58', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
        PagesUtils.autenticar(user)
    })
    it('Crear una página con datos fake solo números, eliminarla, salir del admin, y revisar que no esté la página', function () {
        cy.visit(`${url}/ghost/#/pages`);
        const titulo = faker.datatype.number();
        const descripcion = faker.datatype.float();
        const excerpt = faker.datatype.number();
        // Crear página
        PagesUtils.crearPagina(titulo, descripcion, excerpt);
        PagesUtils.publicarPagina()

        // Eliminar página
        PagesUtils.eliminarPagina()

        // Verificar que la página no está en el listado
        cy.get('li[class="gh-list-row gh-posts-list-item"]').contains(titulo).should("not.exist")
    })
})


