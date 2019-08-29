
function Thermostat () {
    //TODO try to remove magic number
    this.temperature = 20
    this._powersaving = "ON"
    this.max = 25
}

Thermostat.prototype = {
    up: function() {
        if (this.temperature < this.max) {
            this.temperature ++
        } else {
            return;
        };
    },

    powersaving: function() {
        if (this._powersaving == "ON") {
            this._powersaving = "OFF"
            this.max = 32
        } else {
            this._powersaving = "ON"
            this.max = 25
        };
    },
          

    down: function() { 
        if (this.temperature > 10) {
            this.temperature --
        } else {
            return;
        };
    },

    reset: function() {
        this.temperature = 20;
    },

    usage: function() {
        if (this.temperature > 24) {
            return 'high-usage';
        } else if (this.temperature > 17) {
            return 'medium-usage';
        } else {
            return 'low-usage';
    }
 },
    temp: function() {
        if (this.temperature > 24) {
            return 'high-usage';
        } else if (this.temperature > 17) {
            return 'medium-usage';
        } else {
            return 'low-usage';
    }
}


};

