const waitUntilDisappear = (element: string, timeout?: number) => {
  if (cy.contains(element)) {
    cy.should('be.visible').then(() => {
      cy.contains(element, timeout ? { timeout } : {}).should('not.exist')
    })
  }
}

const clickIfDisplaying = (element: string, timeout?: number) => {
  cy.get('body').then($body => {
    if ($body.find(element)) {
      cy.contains(element, timeout ? { timeout } : {}).click()
    } else {
      clickButton(buttons.THIS_MONTH)
    }
  })
}

export {waitUntilDisappear, clickIfDisplaying}
