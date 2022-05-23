import { faker } from '@faker-js/faker';
import {utilsMiembros} from "../plugins/utils_creacion_miembro";

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 89', function () {
    before(function () {
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Datos dinámicos pseudo aleatorios , Creacion de miembro con un correo muy largo', function () {
        let testMiembro = {
            nombre: faker.random.alphaNumeric(10),
            correo: faker.internet.email(faker.random.alphaNumeric(40), faker.random.alphaNumeric(40)),
            note: faker.random.alphaNumeric(100)
        }
        cy.log(testMiembro);
        utilsMiembros.autenticar(user.email, user.password);
        utilsMiembros.crearMiembro(testMiembro.nombre, testMiembro.correo, testMiembro.note);
        cy.contains("Invalid Email.")

    })
})