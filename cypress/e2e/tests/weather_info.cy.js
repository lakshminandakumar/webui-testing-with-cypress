/// <reference types="cypress" />

import landingPage from "../../pages/landingPage"
import weatherDetailsPage from "../../pages/weatherDetailsPage"

describe('weather wise app example test', () => {
    let cityName = "London";
    
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8080');
    })

    it('displays the weather conditions of the city', () => {
        landingPage.findWeatherInfo(cityName);
        weatherDetailsPage.elements.weatherIcon().should('be.visible');
        weatherDetailsPage.elements.temperature().should('be.visible');
        weatherDetailsPage.elements.city().should('be.visible');
        weatherDetailsPage.elements.city().should('have.text', cityName);
    })
})