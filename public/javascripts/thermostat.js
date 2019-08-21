
function Thermostat () {
    //TODO try to remove magic number
    this.temperature = 20
    this.powersaving = true
}

Thermostat.prototype = {
    up: function() {

        //TODO refactor later
        if(this.powersaving == true){
            if(this.temperature == 25){
                return; 
            }else{
                this.temperature++;
            }
        }else{
            if(this.temperature == 32){
                return;
            }else{
                this.temperature++;
            }
        }

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
    }


}