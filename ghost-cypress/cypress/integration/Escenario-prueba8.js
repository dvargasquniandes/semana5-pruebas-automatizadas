import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};


const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 8', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear una página, eliminarla, salir del admin, y revisar que no esté la página', function () {
        // Login
        utils.autenticar(user)

        // Crear página
        utils.crearPagina(`Escenario de prueba 8 - ${id}`, "Este es un test para el escenario de prueba 8")
        utils.publicarPagina()

        // Eliminar página
        utils.eliminarPagina()

        // Verificar que la página no está en el listado
        cy.get('li[class="gh-list-row gh-posts-list-item"]').contains(`Escenario de prueba 8 - ${id}`).should("not.exist")
    })
})


