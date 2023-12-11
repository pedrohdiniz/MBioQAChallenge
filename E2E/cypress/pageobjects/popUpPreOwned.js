class PopUpPreOwned {

   //Click at Pre Owned Tab after verify if pop up as opened 
   moveToPreOwnedTab(){
    cy.get('wb-tab[aria-selected="false"] span').click();
   }

   //Select Color and validate if the color selected is displayed correctly
   selectColourOption(){
    cy.get(':nth-child(7) > .category-filter-row > .category-filter-row-headline').click();
    cy.get('a[data-test-id="multi-select-dropdown-card-opener"]').eq(1).click();
    cy.get('ul.dcp-multi-select-dropdown-card--expanded a').eq(44).click().invoke('text').then((text) => {
        cy.get('.close-button').click();
        cy.get('.dcp-selected-filters-widget__tag').should('have.text', text);
      });    
   }

   //Verify the most expansive car on the list and navigate to details page
   vehicleDetails() {
    // Find the container of car elements within the results
    cy.get('div.dcp-cars-srp__results')
        .find('.dcp-cars-product-tile') 
        .then((carElements) => {  // Execute the following block once the car elements are found
            let maxPrice = 0;  // Variable to store the maximum price found
            let maxPriceCarIndex = -1;  // Variable to store the index of the car with the maximum price
        
            // Iterate through each car element to find the most expensive one
            carElements.each((index, carElement) => {
                // Extract the text content of the price element within the current car element
                const priceText = Cypress.$(carElement).find('div[data-test-id="dcp-cars-product-tile-price"]').text();
                
                // Parse the extracted text into a floating-point number, removing '$' and ',' from the string
                const price = parseFloat(priceText.replace(/[^\d.]/g, '')); 
                // Check if the parsed price is a valid number and greater than the current maximum price
                if (!isNaN(price) && price > maxPrice) {                
                    // Update the maximum price and its corresponding index
                    maxPrice = price;
                    maxPriceCarIndex = index;
                }
            });

            // Click on the most expensive car to navigate to its details page
            if (maxPriceCarIndex !== -1) {
                // Click on the element with the maximum price directly
                cy.wrap(carElements.eq(maxPriceCarIndex)).click();
                
            }
        });
    }

   


   saveVinAndModelYearInformation(){
    // Collect VIN and Model Year information
    let vinValue, modelYearValue;
    cy.get('ul.dcp-vehicle-details-category__list').should('be.visible').then((carInformations) => {
        const listItems = carInformations.find('li');
    
        // Iterar sobre cada item da lista para encontrar o VIN e o Model Year
        listItems.each((index, listItem) => {
            const text = Cypress.$(listItem).text();
    
            // Verificar se o texto contém informações sobre o VIN
            if (text.includes('VIN')) {
                vinValue = text;
                
            }
    
            // Verificar se o texto contém informações sobre o Model Year
            if (text.includes('Model Year')) {
                modelYearValue = text;
            }
            
        });
        const carDetails = `${vinValue}\n${modelYearValue}`;

        // Save the collected information to a file
        cy.writeFile('car_details.txt', carDetails); 
    });
    
   

   }

   clickOnEnquireNowButton(){
    cy.get('button[data-test-id="dcp-buy-box__contact-seller"]').click();
    cy.get('div[config-name="ucosRfq"] div').eq(3).should("be.visible");
   }

}
export default PopUpPreOwned;

