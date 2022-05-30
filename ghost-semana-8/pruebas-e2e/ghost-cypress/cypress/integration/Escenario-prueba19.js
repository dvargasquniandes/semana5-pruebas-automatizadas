import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');
const ghostVersion = Cypress.env('ghost_version');

describe('Escenario de prueba 19', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, entrar a configuraciones en la seccion Design, entrar a Brand, cambiar el site description, darle guardar, ir a view site y verificar la nueva descripcion del sitio', function () {
        let indiceImagen = 0;

        // Login
        utils.autenticar(user)
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Modificar Color Boton Inferior
        utils.modificarSiteDescription('Prueba 19 - descripcion')
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Verificar que el boton cambio de color en la pagina principal
        cy.visit(`${url}`);
        cy.wait(1000);
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
        cy.get('.site-header-content').find('p').contains('Prueba 19 - descripcion')
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
    })
})