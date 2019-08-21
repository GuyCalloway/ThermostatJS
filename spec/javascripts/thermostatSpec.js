'use strict';

describe('Thermostat', function() {
  describe('#', function() {
        it("has default temperature of 20 degrees", function() {
        var thermostat = new Thermostat()
        expect(thermostat.temperature).toBe(20)
      });
    });

    describe('#up', function() {

        it("the temperature can be increased incrementally", function() {
          var thermostat = new Thermostat()
          thermostat.up()
          expect(thermostat.temperature).toBe(21)
        });
      });

      describe('#down', function() {

        it("the temperature can be increased incrementally", function() {
          var thermostat = new Thermostat()
          thermostat.down()
          expect(thermostat.temperature).toBe(19)
        });
      });
});