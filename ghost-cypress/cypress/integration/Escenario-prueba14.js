import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};


const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 14', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear nuevo menu de navegación primaria, cerrar sesión, ir al home y verificar si el menu existe', function () {
        let indiceImagen = 0;
        // Login
        utils.autenticar(user)
        cy.screenshot("imagen_" + (indiceImagen++))

        // Crear miembro
        utils.crearNuevoEnlaceNavegacion('Prueba Enlace','http://prueba.com')
        cy.screenshot("imagen_" + (indiceImagen++))


        // Verificar miembro creado
        cy.visit(`${url}/about/`);
        cy.wait(1000);
        cy.screenshot("imagen_" + (indiceImagen++))
        cy.get('a[href="http://prueba.com"]').should("exist")
        cy.screenshot("imagen_" + (indiceImagen++))
    })
})


