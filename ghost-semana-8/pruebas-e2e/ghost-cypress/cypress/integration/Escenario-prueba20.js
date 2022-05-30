import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');
const ghostVersion = Cypress.env('ghost_version');

describe('Escenario de prueba 20', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, entrar a configuraciones en la seccion Design, entrar a Post, cambiar el Email signup test a "Prueba cambio", darle guardar, ir a view site dar clic sobre la imagen del post de coming soon y verificar que el post tenga en su email text "Prueba Cambio"', function () {
        let indiceImagen = 0;

        // Login
        utils.autenticar(user)
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Modificar Color Boton Inferior
        utils.modificarPostEmailText('Prueba 20 Cambio')
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Verificar que el email signup cambio de texto de descripcion
        cy.visit(`${url}/escenario-de-prueba-3-81b110f9-d3ef-44ae-9358-b09456836636/`);
        cy.wait(1000);
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
        cy.get('.inner').find('h2').contains('Prueba 20 Cambio')
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

    })
})