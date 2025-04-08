// click all checkboxes
clickByDataTestId('some-daa-testid')
for (let i = 0; i <= 3; i++) {
  clickIcon('pin', 'button', i)
  cy.wait('@possible-some-alias-here')
}

const selectCheckbox = (position = 0) =>
  cy
    .get(`input:checkbox:eq(${position})`)
    .then(el => Cypress.$(el).trigger('click'))

const selectAllCheckboxes = () => {
  cy.get(`input:checkbox`).each(el => Cypress.$(el).trigger('click'))
}

const uncheckCheckbox = (option = 0) =>
  cy.get(':checkbox').eq(option).uncheck()

const clickRadioByLabel = (label: string, option: string) =>
  cy.contains(label).parent().contains(option).click()
