import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: "ghost-author@example.com",
    password: "Colombia1234*",
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 4', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear post, eliminar post, salir del admin, y revisar que no esté el post', function () {
        // Login
        utils.autenticar(user)

        // Crear post
        utils.crearPost(`Escenario de prueba 4 - ${id}`, "Este es un test para el escenario de prueba 4")
        utils.publicarPost()

        // Eliminar post
        utils.eliminarPost()

        // Verificar que el post no está en el listado de posts
        cy.get('li[class="gh-list-row gh-posts-list-item"]').contains(`Escenario de prueba 4 - ${id}`).should("not.exist")
    })
})


