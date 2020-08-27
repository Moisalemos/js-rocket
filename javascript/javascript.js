var car = {
        make: 'VW',
        type: 'polo',
        color: 'blue',
        isTurnedOn: false,
        numberOfWheels: 4,
        seats: ['seat 1', 'seat 2', 'seat3', 'seat4'],
        turnOn: function (){
        this.isTurnedOn = true;
        },
        fly: function() {
            alert('fly');
        },
        switchCar: function(isOn) {
            console.log('turn car ' + isOn)
            if (isOn == true) {
                this.isTurnedOn = true;
            } else {
                this.isTurnedOn = false;
            }    
        }
    };
function sayName() {
    document.write('moises');
    alert('it works');
}
        
    console.log('hello there friends');