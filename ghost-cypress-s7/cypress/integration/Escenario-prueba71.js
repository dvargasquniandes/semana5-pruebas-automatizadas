import {utilsMiembros} from "../plugins/utils_creacion_miembro";

const user = {
    email: Cypress.env('ghost_user'),
    password: Cypress.env('ghost_password'),
};

const url = Cypress.env('url_base');

describe('Escenario de prueba 71', function () {
    before(function () {
        const respuestaMockaroo = cy.request("GET","https://my.api.mockaroo.com/miembros_falsos.json?key=0d60b400")
            .then((respuesta) =>{
                this.data = respuesta.body;
            });
    })
    beforeEach(function(){
        cy.visit(`${url}/ghost/`);
        cy.clearCookies();
    });
    it('Set pseudo-aleatorio por API, Creacion de miembro con Note con saltos de linea', function () {
        let testUser = this.data[Math.floor(Math.random()*this.data.length)];
        utilsMiembros.autenticar(user.email, user.password);
        utilsMiembros.crearMiembro(testUser.nombre, testUser.correo, testUser.notes.replace("a","\n"))
        cy.get('a[href="#/members/"]:first').click();
        cy.wait(1000);
        cy.get('p.gh-members-list-email').contains(testUser.correo).should("exist")
    })
})