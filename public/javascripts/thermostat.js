
function Thermostat () {
    //TODO try to remove magic number
    this.temperature = 20
    this._powersaving = true
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
        if (this._powersaving == true) {
            this.max = 25
            this._powersaving = false
        } else {
            this.max = 32;
            this._powersaving = true
        };
    },
          

        //TODO refactor later
        // if(this.powersaving == true){
        //     if(this.temperature == 25){
        //         return; 
        //     }else{
        //         this.temperature++;
        //     }
        // }else{
        //     if(this.temperature == 32){
        //         return;
        //     }else{
        //         this.temperature++;
        //     }
        // }


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
 }

};