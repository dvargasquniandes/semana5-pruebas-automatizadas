import { faker } from '@faker-js/faker';
import {utilsMiembros} from "../plugins/utils_creacion_miembro";

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 82', function () {
    before(function () {
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Datos dinámicos pseudo aleatorios , Creacion de miembro con Note vacio', function () {
        let testMiembro = {
            nombre: faker.internet.userName(),
            correo: faker.internet.email()
        }
        cy.log(testMiembro);
        utilsMiembros.autenticar(user.email, user.password);
        utilsMiembros.crearMiembroSinNote(testMiembro.nombre, testMiembro.correo);
        cy.get('a[href="#/members/"]:first').click();
        cy.wait(1000);
        cy.get('p.gh-members-list-email').contains(testMiembro.correo).should("exist")
    })
})