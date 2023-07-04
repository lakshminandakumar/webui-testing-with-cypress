class landingPage{

    elements = {
        textArea: () => cy.get('[data-cy="textarea"]'),
        searchBtn: () => cy.get('[data-cy="search"]')
    }

    enterCityName(cityName){
        this.elements.textArea().type(cityName);
    }

    clickSearchBtn(){
        this.elements.searchBtn().click();
    }

    findWeatherInfo(cityName){
        this.enterCityName(cityName);
        this.clickSearchBtn();
    }
}
module.exports = new landingPage();