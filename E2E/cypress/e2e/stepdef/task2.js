import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pageobjects/homePage";
import PopUpPreOwned from "../../pageobjects/popUpPreOwned";
import ContactDetails from "../../pageobjects/contactDetails";


const homePage = new HomePage();
const popUpPreOwned = new PopUpPreOwned();
const contactDetails = new ContactDetails();

Given("the user open the Mercedes-Benz Shop used cars in Australian market", () => {
    homePage.accessHomePage();
    cy.wait(10000);
    homePage.acceptCookies();
})
 
When ("the user insert all information at Please select your location", () => {
    homePage.enterInformation();
    homePage.clickFilterButton();
    homePage.verifyIfPopUpWasOpen();
})

 And ("the user click in the pre-owned option", () => {
    popUpPreOwned.moveToPreOwnedTab();
    homePage.clickFilterButton();
})

And ("the user select a color", () => {
    popUpPreOwned.selectColourOption();
})

And ("user navigate to the Vehicle Details of the most expensive car on the filtered results", () => {
    popUpPreOwned.vehicleDetails();
    popUpPreOwned.saveVinAndModelYearInformation();
})

And ("user click on Enquire Now and Fill form with some invalid data", () => {
    popUpPreOwned.clickOnEnquireNowButton();
    contactDetails.fillInfortation();
})

Then ("the user click on proceed and validate all errors", () => {
    contactDetails.clickOnProceed();
    contactDetails.errorValidations();    
})
 