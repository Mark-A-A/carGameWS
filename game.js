console.log("js running")

var car = {
  make: "Toyota",
  model: "Camry",
  year: 2016,
  color: "blue",
  mileage: 120000,
  isWorking: true,
  honk: function(){
    alert("HONK! HONK!")
  },
  drive: function(){
    alert("Driving around the world");
    this.mileage+=100000

  }
}

document.onkeyup = function(event){
  console.log( "key pressed" );
  var keyPressed = event.keyCode;
  console.log( keyPressed );

  //            keycodes
  // Drive  =>  d = 68
  // Honk =>    h = 72

  // Key Checks and Methods
  // if (keyPressed == 'h') {
  //
  // } else if (keyPressed =='d') {
  //
  //
  // } else {
  //   alert("hit one of the proper keys")
  // }

  switch (keyPressed) {
    case 72:
      car.honk();
      break;
    case 68:
      car.drive()
      alert("Mileage: "+ car.mileage)
      document.getElementById('mileage-num').innerHTML = car.mileage;
      // document.getElementById('key-pressed').innerHTML = car.mileage;
      break;
    default:
      console.log(car)

  }
}
