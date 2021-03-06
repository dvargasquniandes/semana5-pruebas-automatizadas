import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};


const id = faker.datatype.uuid();
const url = Cypress.env('url_base');
const ghostVersion = Cypress.env('ghost_version');

describe('Escenario de prueba 4', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear post, eliminar post, salir del admin, y revisar que no esté el post', function () {
        let indiceImagen = 0;
        // Login
        utils.autenticar(user)
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Crear post
        utils.crearPost(`Escenario de prueba 4 - ${id}`, "Este es un test para el escenario de prueba 4")
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
        utils.publicarPost()
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Eliminar post
        utils.eliminarPost()
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Verificar que el post no está en el listado de posts
        cy.get('li[class="gh-list-row gh-posts-list-item"]').contains(`Escenario de prueba 4 - ${id}`).should("not.exist")
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
    })
})


