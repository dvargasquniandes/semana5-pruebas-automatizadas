const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require("chai").expect;

When('Inicio sesión con usuario {kraken-string} y clave {kraken-string}', async function (email, password){
	let element = await this.driver.$('#ember7');
	await element.setValue(email);
	element = await this.driver.$('#ember9');
	await element.setValue(password);
	element = await this.driver.$('#ember11');
	return await element.click();
});

When('Voy a la opción de administrar tags', async function(){
	let element = await this.driver.$('a[href="#/tags/"]');
	return await element.click();
});

When('Voy a la opción de administrar miembros', async function(){
	let element = await this.driver.$('a[href="#/members/"]');
	return await element.click();
});

When('Voy a la opción de administrar configuración', async function(){
	let element = await this.driver.$('a[href="#/settings/"]');
	return await element.click();
});

When('Voy a la opción de administrar navegación', async function(){
	let element = await this.driver.$('a[href="#/settings/navigation/"]');
	return await element.click();
});

When('Voy a la opción de administrar code injection', async function(){
	let element = await this.driver.$('a[href="#/settings/code-injection/"]');
	return await element.click();
});

When('Agrego un tag con el nombre {string}, el slug {string}, el color {string} y la descripción {string}', async function(nombreTag, slug, color, descripcion){
	let element = await this.driver.$('a[href="#/tags/new/"]');
	await element.click();
	element = await this.driver.$('#tag-name');
	await element.setValue(nombreTag);
	element = await this.driver.$('#tag-slug');
	element.click();
	await new Promise(r=> setTimeout(r, 1000));
	await element.setValue(slug);
	element = await this.driver.$('[name="accent-color"]');
	await element.setValue(color);
	element = await this.driver.$('#tag-description');
	await element.setValue(descripcion);
	element = await this.driver.$('button.gh-btn-primary');
	return await element.click();
	
});

When('Edito el tag con el slug {string} y cambio el nombre a {string}', async function(slug, nuevoNombre){
	let element = await this.driver.$('a[href="#/tags/' + slug + '/"]');
	await element.click();
	element = await this.driver.$('#tag-name');
	await element.setValue(nuevoNombre);
	element = await this.driver.$('button.gh-btn-primary');
	return await element.click();
});

When('Elimino el tag con el slug {string}', async function(slug){
	let element = await this.driver.$('a[href="#/tags/' + slug + '/"]');
	await element.click();
	element = await this.driver.$('button.gh-btn-red');
	await element.click();
	await new Promise(r=> setTimeout(r, 500));
	element = await this.driver.$('.modal-footer>button.gh-btn-red');
	return await element.click();
});

Then('Verifico si el tag con el slug {string} tiene el nombre modificado {string}', async function(slug, nombreTag){
	let element = await this.driver.$('a[href="#/tags/' + slug + '/"]');
	await element.click();
	await new Promise(r=> setTimeout(r, 500));
	let valor = await this.driver.$('#tag-name').getValue();

	expect(valor).to.equal(nombreTag);
});

Then('Verifico si el tag con el slug {string} no existe', async function(slug){
	let elements = await this.driver.$$('a[href="#/tags/' + slug + '/"]');
	expect(elements.length).to.equal(0);
});

When('Agrego un miembro con el nombre {string} y el correo {string}', async function(nombre, correo){
	let element = await this.driver.$('a[href="#/members/new/"]');
	await element.click();
	element = await this.driver.$('#member-name');
	await element.setValue(nombre);
	element = await this.driver.$('#member-email');
	element.click();
	await new Promise(r=> setTimeout(r, 1000));
	await element.setValue(correo);
	element = await this.driver.$('button.gh-btn-primary');
	return await element.click();
});

Then('Verifico si el miembro con el correo {string} existe', async function(correo){
	let elements = await this.driver.$$('=' + correo);
	expect(elements.length).to.equal(0);
});

When('Agrego un item de navegación con el nombre {string} a la url {string}', async function(nombre, url){
	let element = await this.driver.$('#settings-navigation>div.gh-blognav-item>div>span.gh-blognav-label>input');
	await element.setValue(nombre);
	element = await this.driver.$('#settings-navigation>div.gh-blognav-item>div>span.gh-blognav-url>input');
	await element.setValue(url);
	element = await this.driver.$('button.gh-btn-primary');
	return await element.click();
});

Then('Verifico si el menu de navegación con la url {string} existe', async function(url){
	let elements = await this.driver.$$('a[href="' + url + '"]');
	expect(elements.length).to.equal(1);
});

When('Agrego un tag de rastreo en el header con la clase {string} y otro en el footer con la clase {string}', async function(header, footer){
	let element = await this.driver.$('#ghost-head>div>div>textarea');
	await element.setValue('<hr class="' + header + '"></hr>');
	element = await this.driver.$('#ghost-foot>div>div>textarea');
	await element.setValue('<hr class="' + footer + '"></hr>');
	element = await this.driver.$('button.gh-btn-primary');
	return await element.click();
});

Then('Verifico si el el tag de rastreo en el header con la clase {string} y otro en el footer con la clase {string} existen', async function(header, footer){
	let elements = await this.driver.$$('hr.' + header);
	expect(elements.length).to.equal(1);
	elements = await this.driver.$$('hr.' + footer);
	expect(elements.length).to.equal(1);
});

