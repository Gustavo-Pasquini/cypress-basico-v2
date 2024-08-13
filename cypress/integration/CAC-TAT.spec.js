// Básico do Básico =)
describe('Central de Antendimento ao Cliente - Aula 02 (Localizando, digitando e clicando em elementos)', () => {

  beforeEach(() => {

      cy.visit('./src/index.html')

  });

  it('exercicio 1', () => {
    
    cy.title()
      .should('be.equal', 'Central de Atendimento ao Cliente TAT')
    
    cy.get('#title')
      .should('contain', 'CAC TAT')

    cy.getAndType('#firstName', 'Gustavo')
      .should('have.value', 'Gustavo').and('be.visible')

    cy.getAndType('#lastName', 'Pasquini')
      .should('have.value', 'Pasquini').and('be.visible')
    
    cy.getAndType('#email', 'gustavo.pasquini@ncs.com.br')
      .should('have.value', 'gustavo.pasquini@ncs.com.br').and('be.visible')

    cy.getAndType('#open-text-area', 'Gostaria de solicitar uma ajuda')
      .should('have.value', 'Gostaria de solicitar uma ajuda').and('be.visible')
    
    cy.get('button[type="submit"]')
      .click()

    cy.get('span[class="success"]')
      .should('be.visible')

  });

  it('exercicio extra 1', () => {
      
    const longText = 'Esse texto tem uma extensão enorme, tipo, muito grande mesmo. Esse texto tem uma extensão enorme, tipo, muito grande mesmo. Esse texto tem uma extensão enorme, tipo, muito grande mesmo. Esse texto tem uma extensão enorme, tipo, muito grande mesmo. Esse texto tem uma extensão enorme, tipo, muito grande mesmo. Esse texto tem uma extensão enorme, tipo, muito grande mesmo. Esse texto tem uma extensão enorme, tipo, muito grande mesmo. Esse texto tem uma extensão enorme, tipo, muito grande mesmo.'
    
    cy.getAndType('#firstName', 'Gustavo')
      .should('have.value', 'Gustavo').and('be.visible')

    cy.getAndType('#lastName', 'Pasquini')
      .should('have.value', 'Pasquini').and('be.visible')
  
    cy.getAndType('#email', 'gustavo.pasquini@ncs.com.br')
      .should('have.value', 'gustavo.pasquini@ncs.com.br').and('be.visible')

    cy.getAndType('#open-text-area', longText)
      
  });

  it('exercicio extra 2 (exibe mensagem de erro ao submeter o formulário com um email de formatação inválida)', () => {

    cy.getAndType('#firstName', 'Gustavo')
      .should('have.value', 'Gustavo').and('be.visible')

    cy.getAndType('#lastName', 'Pasquini')
      .should('have.value', 'Pasquini').and('be.visible')
    
    cy.getAndType('#email', 'gustavo.pasquini.com.br')
      .should('have.value', 'gustavo.pasquini.com.br').and('be.visible')

    cy.getAndType('#open-text-area', 'Gostaria de solicitar uma ajuda')
      .should('have.value', 'Gostaria de solicitar uma ajuda').and('be.visible')
    
    cy.get('button[type="submit"]')
      .click()

    cy.get('span[class="error"]')
      .should('be.visible')

  });

  it('exercicio extra 3', () => {

    cy.getAndType('#firstName', 'Gustavo')
      .should('have.value', 'Gustavo').and('be.visible')

    cy.getAndType('#lastName', 'Pasquini')
      .should('have.value', 'Pasquini').and('be.visible')
    
    cy.getAndType('#email', 'gustavo.pasquini.com.br')
      .should('have.value', 'gustavo.pasquini.com.br').and('be.visible')

    cy.getAndType('#open-text-area', 'Gostaria de solicitar uma ajuda')
      .should('have.value', 'Gostaria de solicitar uma ajuda').and('be.visible')

    cy.getAndType('#phone', 'Testando input de numeros')
      .should('have.value', '')

  });

  it('exercicio extra 4', () => {
      
    cy.getAndType('#firstName', 'Gustavo')
      .should('have.value', 'Gustavo').and('be.visible')

    cy.getAndType('#lastName', 'Pasquini')
      .should('have.value', 'Pasquini').and('be.visible')
  
    cy.getAndType('#email', 'gustavo.pasquini.com.br')
      .should('have.value', 'gustavo.pasquini.com.br').and('be.visible')

    cy.getAndType('#open-text-area', 'Gostaria de solicitar uma ajuda')
      .should('have.value', 'Gostaria de solicitar uma ajuda').and('be.visible')

    cy.getAndType('#phone', 'Testando input de numeros')
      .should('have.value', '')

    cy.get('#phone-checkbox')
      .click()

    cy.get('button[type="submit"]')
      .click()

    cy.get('span[class="error"]')
      .should('be.visible')
        
  });

  it('exercicio extra 5', () => {
    
    cy.getAndType('#firstName', 'Gustavo')
      .should('have.value', 'Gustavo').and('be.visible')
      .clear()
      .should('have.value', '')

    cy.getAndType('#lastName', 'Pasquini')
      .should('have.value', 'Pasquini').and('be.visible')
      .clear()
      .should('have.value', '')

    cy.getAndType('#email', 'gustavo.pasquini.com.br')
      .should('have.value', 'gustavo.pasquini.com.br').and('be.visible')
      .clear()
      .should('have.value', '')

    cy.getAndType('#phone', '991634753')
      .should('have.value', '991634753').and('be.visible')
      .clear()
      .should('have.value', '')
      
  });

  it('exercicio extra 6 (exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios)', () => {
    
    cy.get('button[type="submit"]')
      .click()

    cy.get('span[class="error"]')
      .should('be.visible')

  });

  it('exercicio extra 7', () => {
      
    cy.fillMandatoryFieldsAndSubmit()
      
  });

  it('exercicio extra 8', () => {
      
    cy.contains('label', 'Nome')
      .siblings()
      .type('Gustavo')
      .should('have.value', 'Gustavo').and('be.visible')

    cy.contains('label', 'Sobrenome')
      .siblings()
      .type('Pasquini')
      .should('have.value', 'Pasquini').and('be.visible')

    cy.contains('label', 'E-mail')
      .siblings()
      .type('gustavo@pasquini.com.br')
      .should('have.value', 'gustavo@pasquini.com.br').and('be.visible')
        
    cy.contains('label', 'Como podemos te ajudar?')
      .siblings()
      .get('textarea')
      .type('Gostaria de agradecer')
      .should('have.value', 'Gostaria de agradecer').and('be.visible')

    cy.contains('button', 'Enviar')
      .click()

    });
});


// Campos de seleção suspensa
describe('Central de Atendimento ao Cliente - Aula 03 (Selecionando opções em campos de seleção suspensa)', () => {

  beforeEach(() => {

    cy.visit('./src/index.html')

  });

  it('explicação', () => {
    
    cy.getAndSelect('#product', 'YouTube') //seleção pelo texto
      cy.wait(2000)

    cy.getAndSelect('#product', 'mentoria') //seleção pelo value
      cy.wait(2000)

    cy.getAndSelect('#product', 1) //seleção pelo índice
      cy.wait(2000)

  });

  it('exercicio 1 (seleciona um produto (YouTube) por seu texto)', () => {
   
    cy.getAndSelect('#product', 'YouTube')
      .should('have.value', 'youtube')

  });

  it('exercicio extra 2 (seleciona um produto (Mentoria) por seu valor)', () => {
    
    cy.getAndSelect('#product', 'mentoria')
      .should('have.value', 'mentoria')

  });

  it('exercicio extra 3 (selecione um produto (Blog) pelo seu índice', () => {
    
    cy.getAndSelect('#product', 1)
    .should('have.value', 'blog')

  });

});


// Radio (check-box)
describe('Central de Atendimento ao Cliente - Aula 04 (Marcando inputs do tipo radio)', () => {

  beforeEach(() => {

    cy.visit('./src/index.html')

  });

  it('exercicio 1', () => {
    
    cy.get('input[value="feedback"]')
      .check()
      .should('be.checked')

    cy.get('input[value="ajuda"]')
      .should('not.be.checked')

  });

  it('exercicio extra', () => {
 
  //minha solução  
//  cy.get('input[value="feedback"]')
//    .check()
//    .should('be.checked')

//  cy.get('input[value="elogio"]')
//    .check()
//    .should('be.checked')

//  cy.get('input[value="ajuda"]')
//    .check()
//    .should('be.checked')

    cy.get('input[type="radio"]')
      .should('have.length', 3)
      .each(function($radio) {
        cy.wrap($radio)
          .check()
        cy.wrap($radio)
          .should('be.checked')
      })

  });

});

describe('Central de Atendimento ao Cliente - Aula 05 (Marcando e desmarcando inputs do tipo checkbox)', () => {

  beforeEach(() => {

    cy.visit('./src/index.html')

  });

  it('Exercicio 01 (marca ambos checkboxes, depois desmarca o último', () => {
  
    cy.get('input[type="checkbox"]')
      .should('have.length', 2)
//      .each(function($checkbox) {
//         cy.wrap($checkbox)
//           .check()
//         cy.wrap($checkbox)
//           .should('be.checked')
//      })
      .check()
      .last()
      .uncheck()
      .should('not.be.checked')

  });

  it('Exercicio Extra 01', () => {

    cy.getAndType('#firstName', 'Gustavo')
    .should('have.value', 'Gustavo').and('be.visible')

    cy.getAndType('#lastName', 'Pasquini')
      .should('have.value', 'Pasquini').and('be.visible')

    cy.getAndType('#email', 'gustavo.pasquini.com.br')
      .should('have.value', 'gustavo.pasquini.com.br').and('be.visible')

    cy.getAndType('#open-text-area', 'Gostaria de solicitar uma ajuda')
      .should('have.value', 'Gostaria de solicitar uma ajuda').and('be.visible')

    cy.getAndType('#phone', 'Testando input de numeros')
      .should('have.value', '')

    cy.get('#phone-checkbox')
      .check()

    cy.get('button[type="submit"]')
      .click()

    cy.get('span[class="error"]')
      .should('be.visible')
    
  });

});

describe('Central de Atendimento ao Cliente - Aula 06 (Fazendo upload de arquivos)', () => {

  beforeEach(() => {

    cy.visit('./src/index.html')

  });

  it('Exercicio 01', () => {
    
    cy.get('input[type="file"]#file-upload')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json')
      .should(function($input) {
        console.log($input)
        expect($input[0].files[0].name).to.equal('example.json')
      })

  });

  it('Exercicio Extra 01', () => {
    
    cy.get('input[type="file"]#file-upload')
      .should('not.have.value')
      .selectFile('./cypress/fixtures/example.json', { action:"drag-drop" })
      .should(function($input) {
        console.log($input)
        expect($input[0].files[0].name).to.equal('example.json')
      })    

  });

  it('Exercicio Extra 02', () => {
    
    cy.fixture('example.json').as('sampleFile')

    cy.get('input[type="file"]#file-upload')
      .should('not.have.value')
      .selectFile('@sampleFile', { action:"drag-drop" })
      .should(function($input) {
        console.log($input)
        expect($input[0].files[0].name).to.equal('example.json')
      })    

  });

});

describe('Central de Atendimento ao Cliente - Aula 07 (Lidando com links que abrem em outras abas)', () => {

  beforeEach(() => {

    cy.visit('./src/index.html')

  });

  it('Exercicio 01', () => {
    
    cy.get('a[href="privacy.html"]')
      .should('have.attr', 'target', '_blank')

  });

  it('Exercicio Extra 01', () => {
    
    cy.get('a[href="privacy.html"]')
      .invoke('removeAttr', 'target')
      .click()

  });

  it('Exercicio Extra 02', () => {
  
    cy.get('a[href="privacy.html"]')
      .invoke('removeAttr', 'target')
      .click()

    cy.title()
      .should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')

    cy.get('#title')
      .should('have.text', 'CAC TAT - Política de privacidade')

  });

});


// Central de Atendimento ao Cliente - Aula 08 (Simulando as dimensões de um dispositivo móvel):
// Ensina como sobrescrever um viewport com 'npx cypress open/run --config viewportWidth=370,viewportHeight=660'


//Central de Atendimento ao Cliente - Aula 09 (Documentação do projeto de testes automatizados):
// - Breve descrição do que se trata o projeto;
// - Pré-requisitos (tais como Node.js, npm, git etc.);
// - Passos para instalação das dependências;
// - Passos para rodar os testes;
// - Qualquer outra informção que for pertinente.
// Criado README.md.