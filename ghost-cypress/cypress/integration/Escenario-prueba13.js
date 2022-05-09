import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: "o.alvareze@uniandes.edu.co",
    password: "123123123123",
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 13', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear nuevo miembro, ir al listado, modificarlo y ver que quede modificado en el listado', function () {
        // Login
        utils.autenticar(user)

        // Crear miembro
        utils.crearNuevoMiembro('Prueba Miembro','test@test.com','336699','prueba')


        // Verificar miembro creado
	cy.get('a[href="#/members/"]:first').click();
    	cy.wait(1000);
        cy.get('p.gh-members-list-email').contains("test@test.com").should("exist")
    })
})


