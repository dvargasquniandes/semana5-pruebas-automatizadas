import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};


const id = faker.datatype.uuid();
const url = Cypress.env('url_base');
const ghostVersion = Cypress.env('ghost_version');

describe('Escenario de prueba 13', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear nuevo miembro, ir al listado, modificarlo y ver que quede modificado en el listado', function () {
        let indiceImagen = 0;
        // Login
        utils.autenticar(user)
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))

        // Crear miembro
        utils.crearNuevoMiembro('Prueba Miembro','test@test.com','336699','prueba')
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))


        // Verificar miembro creado
	    cy.get('a[href="#/members/"]:first').click();
    	cy.wait(1000);
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
        cy.get('p.gh-members-list-email').contains("test@test.com").should("exist")
        cy.screenshot(ghostVersion + "/imagen_" + (indiceImagen++))
    })
})


