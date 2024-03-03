//complementos automaticos do cypress
/// <reference types="Cypress" />


//Suit de testes
describe('Central de Atendimento ao Cliente TAT', function() {
  
  //Teste Case 
  it('verifica o título da aplicação', function() {
    cy.visit('./src/index.html')
  
    
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')

    //PREENCHENDO O CADASTRO DO TIPO TEXTO OBRIGATORIO 
    cy.get('#firstName').should('be.visible').type('Tiago').should('have.value', 'Tiago')
    cy.wait(500)
    cy.get('#lastName').should('be.visible').type('Mata').should('have.value', 'Mata')
    cy.wait(500)
    cy.get('#email').should('be.visible').type('tiagodsousamata@gmail.com').should('have.value', 'tiagodsousamata@gmail.com')
    cy.wait(500)
    cy.get('#phone').should('be.visible').type('21972526070').should('have.value', '21972526070')
    cy.wait(500)
    //SELECIONADO PRODUTO
    cy.get('#product').should('be.visible').select('cursos').should('have.value', 'cursos')
    cy.wait(500)
    //SELECIONANDO TIPO DE ATENDIMENTO
    cy.get(':nth-child(4) > input').should('be.visible').click()
    cy.wait(500)
    //SELEIONANDO CHECK BOX EMAIL E TELEFONE
    cy.get('#check > :nth-child(1) > strong').should('be.visible')
    .get('#email-checkbox').should('be.visible').click()
    .get('#phone-checkbox').should('be.visible').click()
    cy.wait(500)
    //PREENCHENDO O CAMPO AJUDA DO TIPO OBRIGATORIO 
    cy.get('#open-text-area').should('be.visible').type('quero ajuda').should('have.value', 'quero ajuda')
    cy.get('.button').should('be.visible').contains('Enviar').should('be.visible').click()
    cy.wait(500)
    //SELECIOANDO O BOTÃO ENVIAR
    cy.get('.success').should('be.visible').contains('Mensagem enviada com sucesso.').should('be.visible')//.should('have.value', 'Mensagem enviada com sucesso.')
  })
})

