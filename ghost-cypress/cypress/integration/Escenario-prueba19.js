import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 19', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, entrar a configuraciones en la seccion Design, entrar a Post, cambiar el post email a Bottom of post, darle guardar, ir a view site dar clic sobre la imagen del post de coming soon y verificar que el post contenha el email signup', function () {
        let indiceImagen = 0;

        // Login
        utils.autenticar(user)
        cy.screenshot("imagen_" + (indiceImagen++))

        // Modificar Color Boton Inferior
        utils.modificarPostEmailSignUp()
        cy.screenshot("imagen_" + (indiceImagen++))

        // Verificar que el post email para un post ahora esta dentro del post
        cy.visit(`${url}`);
        cy.wait(1000);
        cy.screenshot("imagen_" + (indiceImagen++))

    })
})