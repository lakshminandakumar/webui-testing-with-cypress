/// <reference types="cypress" />

import landingPage from "../../pages/landingPage"

describe('weather wise app example test', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8080');
    })

    it('displays the weather conditions of the city', () => {
        landingPage.findWeatherInfo("London");
        //implement weatherDetailsPage to add assertions
    })
})