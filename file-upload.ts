const fileUpload = (uploadFile: string) =>
  cy
    .get(`[aria-label="Show Browse Files menu"]`)
    .eq(0)
    .click()
    .then(() => {
      getByDataTestId(<attachIcon-data-testid>)
        .eq(0)
        .click()
        .then(() => {
          cy.get('input[type="file"]')
            .eq(0)
            .selectFile(uploadFile)
        })
    })
