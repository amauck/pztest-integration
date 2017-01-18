"use strict";

var Map = function() {
    var me = element(by.css("openlayermap"));
   

    function centerMap(lat, long){
       return "var m = document.querySelector('openlayermap'); \
       map = angular.element(m).scope().settings.mapReference; \
       map.getView().setCenter(ol.proj.transform([" + long + "," + lat +"], 'EPSG:4326', 'EPSG:3857')); \
       map.getView().setZoom(3);"
   }


   this.selectCountry = function(country){
       var countries = {
           'UNITED STATES': {lat:40.4 , long:-101.3},
           'CANADA': {lat:40.4 , long:-101.3},
           'MEXICO': {lat: 23.6, long:-102.6},
           'CHINA': {lat: 34.4 , long: 103.6},
           'INDIA': {lat: 22.6, long:79.4},
           'AUSTRALIA': {lat: -25.1, long: 134.3},
        }

        var center = countries[country.toUpperCase()];

        browser.executeScript(centerMap(center.lat, center.long)).then(function(){
            browser.sleep(500)
            me.click();
        })
     }

  };

  module.exports = Map