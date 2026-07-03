describe('Meu Primeiro Teste - Site COB', () => {

  // ISSO AQUI FAZ O CYPRESS IGNORAR ERROS EXTERNOS DO SITE (CORS / SCRIPT ERRORS)
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  it('Visita o site do Comitê Olímpico, clica em Basquete e valida a URL', () => {
    
    // 1. VISITA: Abre a página oficial de esportes do COB
    cy.visit('https://www.cob.org.br/time-brasil/esportes/')

    // 2 e 3. PROCURA E CLICA: Encontra o esporte e clica
    cy.contains('Basquete').click()

    // 4. ASSERÇÃO (VALIDAÇÃO): Valida a URL sem a barra
    cy.url().should('include', 'basquete')
    
  })
})