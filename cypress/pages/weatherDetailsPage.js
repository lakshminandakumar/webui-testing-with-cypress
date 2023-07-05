class weatherDetailsPage{

    elements = {
        weatherIcon: () => cy.get('[data-cy="weather-icon"]'),
        temperature: () => cy.get('[data-cy="temp"]'),
        city: () => cy.get('[data-cy="city"]'),
        humidityIcon: () => cy.get('[data-cy="humidity-icon"]'),
        humidityValue: () => cy.get('[data-cy="humidity-value"]'),
        humidityText: () => cy.get('[data-cy="humidity"]'),
        windIcon: () => cy.get('[data-cy="wind-icon"]'),
        windSpeedValue: () => cy.get('[data-cy="wind-speed-value"]'),
        windSpeedText: () => cy.get('[data-cy="wind-speed"]')
    }

}
module.exports = new weatherDetailsPage();