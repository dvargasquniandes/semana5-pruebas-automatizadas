import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 17', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, entrar a configuraciones en la seccion Design, entrar a Site-wide, cambiar el color scheme a Dark, darle guardar, ir a view site y verificar que la pagina tiene el color scheme dark', function () {
        let indiceImagen = 0;

        // Login
        utils.autenticar(user)
        cy.screenshot("imagen_" + (indiceImagen++))

        // Modificar Color Boton Inferior
        utils.modificarColorSchemeDark();
        cy.screenshot("imagen_" + (indiceImagen++))

        // Verificar que el color scheme cambio a Dark
        cy.visit(`${url}`);
        cy.wait(1000);
        cy.screenshot("imagen_" + (indiceImagen++))
        cy.document().its('documentElement').should('have.class', 'dark-mode')
        cy.screenshot("imagen_" + (indiceImagen++))
    })
})