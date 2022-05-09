import { faker } from '@faker-js/faker';
import { utils } from '../plugins/utils';

const user = {
    email: "o.alvareze@uniandes.edu.co",
    password: "123123123123",
};

const id = faker.datatype.uuid();
const url = Cypress.env('url_base');

describe('Escenario de prueba 11', function () {
    before(function () {
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    })
    it('Loguearse, crear tag, modificarlo y ver si la modificación aparece en el listado', function () {
        // Login
        utils.autenticar(user)

        // Crear tag
        utils.crearTagNuevo('Prueba1','prueba1','336699','prueba')

        // Modificar tag
        utils.modificarTag('prueba1','Prueba1 Modificado')

        // Verificar tag creado
	cy.get('a[href="#/tags/"]:first').click();
    	cy.wait(1000);
        cy.get('a[href="#/tags/prueba1/"]:first').click()
	cy.wait(1000);
        cy.get('#tag-name').should("have.value", `Prueba1 Modificado`)
    })
})


