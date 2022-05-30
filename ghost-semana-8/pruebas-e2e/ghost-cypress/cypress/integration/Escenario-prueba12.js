import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};


const id = faker.datatype.uuid();
const url = Cypress.env('url_base');
const ghostVersion = Cypress.env('ghost_version');

describe('Escenario de prueba 11', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear tag, modificarlo y ver si la modificación aparece en el listado', function () {
        let indiceImagen = 0;
        // Login
        utils.autenticar(user)
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Crear tag
        utils.crearTagNuevo('Prueba Eliminar','prueba-eliminar','336699','prueba')
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Modificar tag
        utils.eliminarTag('prueba-eliminar')
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Verificar tag creado
        cy.get('a[href="#/tags/"]:first').click();
        cy.wait(1000);
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
        cy.get('a[href="#/tags/prueba-eliminar/"]').should("not.exist")
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
    })
})


