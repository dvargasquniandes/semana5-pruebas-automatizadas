import { utilsMiembros} from "../plugins/utils_creacion_miembro";

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 65 al 70', function () {
    before(function () {
        cy.fixture('crear_miembro_positivo.json').then((TestCorrectData) =>
        {
            this.data = TestCorrectData
        });
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Set a-priori, pruebas de funcionalidad de miembros, escenarios del 61 al 64 con casos negativos', function () {

        utilsMiembros.autenticar(user.email, user.password);
        this.data.forEach((testUser) => {
            utilsMiembros.crearMiembro(testUser.nombre, testUser.correo, testUser.notes)
            cy.wait(8000);
            cy.contains(testUser.correo)
        });
    })
})