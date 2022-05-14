import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 11', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear tag, modificarlo y ver si la modificación aparece en el listado', function () {
        let indiceImagen = 0;
        // Login
        utils.autenticar(user)
        cy.screenshot("imagen_" + (indiceImagen++))
        // Crear tag
        utils.crearTagNuevo('Prueba1','prueba1','336699','prueba')
        cy.screenshot("imagen_" + (indiceImagen++))
        // Modificar tag
        utils.modificarTag('prueba1','Prueba1 Modificado')
        cy.screenshot("imagen_" + (indiceImagen++))

        // Verificar tag creado
        cy.get('a[href="#/tags/"]:first').click();
        cy.wait(1000);
        cy.screenshot("imagen_" + (indiceImagen++))
        cy.get('a[href="#/tags/prueba1/"]:first').click()
    	cy.wait(1000);
        cy.screenshot("imagen_" + (indiceImagen++))
        cy.get('#tag-name').should("have.value", `Prueba1 Modificado`)
    	cy.wait(1000);
        cy.screenshot("imagen_" + (indiceImagen++))
    })
})


