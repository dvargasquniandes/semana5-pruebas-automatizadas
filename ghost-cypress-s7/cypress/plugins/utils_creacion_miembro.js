function autenticar(username, password) {
    cy.get('input[name="identification"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
}

function crearMiembro(nombre, correo, notes) {
    cy.get('a[href="#/members/"]:first').click();
    cy.wait(1000);
    cy.get('a[href="#/members/new/"]:first').click();
    cy.wait(1000);
    cy.get('#member-name').type(nombre,{force: true});
    cy.get('#member-email').type(correo,{force: true});
    cy.get('#member-note').type(notes,{force: true});
    cy.wait(1000);
    cy.get('section.view-actions>button.gh-btn').click({force: true});
    cy.wait(1000);
}

function salir() {
    cy.get('a[href="#/members/"]:first').click();
    cy.wait(1000);
    cy.get('button').contains("Leave").click()
}

function eliminarMiembro(miembrocode) {
    cy.get('a[href="#/members/"]:first').click({force: true});
    cy.wait(1000);
    cy.get('a[href="#/members/' + miembrocode + '/"]:first').click()
    cy.wait(1000);
    cy.get('button.gh-btn-red').click();
    cy.wait(500);
    cy.get('.modal-footer>button.gh-btn-red').click();
    cy.wait(1000);
}

export const utilsMiembros = {
    autenticar,
    salir,
    crearMiembro,
    eliminarMiembro
}