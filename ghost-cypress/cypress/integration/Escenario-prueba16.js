import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');
const ghostVersion = Cypress.env('ghost_version');

describe('Escenario de prueba 16', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, entrar a configuraciones en la seccion Design, entrar a Brand, cambiar el color del boton inferior subscribe a #cdff1a, darle guardar, ir a view site y verificar el color del boton inferior Subscribe', function () {
        let indiceImagen = 0;

        // Login
        utils.autenticar(user)
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Modificar Color Boton Inferior
        utils.modificarColorBotonInferior("1afff0");
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Verificar que el boton cambio de color en la pagina principal
        cy.visit(`${url}`);
        cy.wait(1000);
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
        cy.get('iframe.gh-portal-triggerbtn-iframe')
            .its('0.contentDocument.body')
            .then(cy.wrap).find('div.gh-portal-triggerbtn-container')
            .should('have.css', 'backgroundColor', 'rgb(26, 255, 240)')
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
    })
})