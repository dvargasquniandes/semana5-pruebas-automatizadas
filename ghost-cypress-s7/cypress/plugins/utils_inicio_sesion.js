function autenticar(username, password) {
    cy.get('input[name="identification"]').clear();
    if (username !== null && username !== ""){
        cy.get('input[name="identification"]').type(username);
    }
    cy.get('input[name="password"]').clear();
    if (password !== null && password !== ""){
        cy.get('input[name="password"]').type(password, { parseSpecialCharSequences: false});
    }
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
}


export const utils = {
    autenticar,
}
