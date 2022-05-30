import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};


const id = faker.datatype.uuid();
const url = Cypress.env('url_base');
const ghostVersion = Cypress.env('ghost_version');

describe('Escenario de prueba 8', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear una página, eliminarla, salir del admin, y revisar que no esté la página', function () {
        let indiceImagen = 0;
        // Login
        utils.autenticar(user)
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Crear página
        utils.crearPagina(`Escenario de prueba 8 - ${id}`, "Este es un test para el escenario de prueba 8")
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
        utils.publicarPagina()
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Eliminar página
        utils.eliminarPagina()
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Verificar que la página no está en el listado
        cy.get('li[class="gh-list-row gh-posts-list-item"]').contains(`Escenario de prueba 8 - ${id}`).should("not.exist")
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
    })
})


