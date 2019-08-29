'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(() => {
    thermostat = new Thermostat();
  });


  describe('#', function() {
    it("has default temperature of 20 degrees", function() {
      // var thermostat = new Thermostat()
      expect(thermostat.temperature).toBe(20)
    });

    it("has power-saving mode on by default", () => {
        expect(thermostat._powersaving).toBe("ON");
    });  
  });

    describe('#up', function() {

        it("the temperature can be increased incrementally", function() {
          // var thermostat = new Thermostat()
          thermostat.up()
          expect(thermostat.temperature).toBe(21)
        });

        it("can not exceed temp to 26 degree in power-saving mode", () => {
          thermostat.temperature = 25;
          thermostat.up();
          expect(thermostat.temperature).toBe(25);
        });

        it("can not exceed 32 degrees in normal mode", () => {
          thermostat._powersaving = false
          thermostat.temperature = 32
          thermostat.up();
          expect(thermostat.temperature).toBe(32);
        });


      });

      describe('#down', function() {

        it("the temperature can be increased incrementally", function() {
          // var thermostat = new Thermostat()
          thermostat.down()
          expect(thermostat.temperature).toBe(19)
        });

        it("can not go below temp to 10 degree", () => {
          thermostat.temperature = 10;
          thermostat.down();
          expect(thermostat.temperature).toBe(10);
        });
      });

      describe("#reset", () => {
        it("reset temperature to 20", () => {
          thermostat.temperature = 15;
          thermostat.reset();
          expect(thermostat.temperature).toBe(20);
        });
      });

      describe("#energyCheck", () => {
        it("return correct energy usage category for current temperature", () => {
          //low-usage
          thermostat.temperature = 17;
          expect(thermostat.usage()).toBe('low-usage');
          //medium-usage
          thermostat.temperature = 24;
          expect(thermostat.usage()).toBe('medium-usage');
          //high-usage
          thermostat.temperature = 26;
          expect(thermostat.usage()).toBe('high-usage');
        });
      });
});