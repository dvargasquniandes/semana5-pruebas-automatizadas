import { faker } from '@faker-js/faker';
import {utilsMiembros} from "../plugins/utils_creacion_miembro";

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 87', function () {
    before(function () {
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Datos dinámicos pseudo aleatorios , Creacion de miembro con un correo sin arroba', function () {
        let testMiembro = {
            nombre: faker.internet.userName(),
            correo: faker.internet.email().replace("@", "#"),
            note: faker.random.alphaNumeric(400)
        }
        cy.log(testMiembro);
        utilsMiembros.autenticar(user.email, user.password);
        utilsMiembros.crearMiembro(testMiembro.nombre, testMiembro.correo, testMiembro.note);
        cy.contains("Invalid Email.")

    })
})