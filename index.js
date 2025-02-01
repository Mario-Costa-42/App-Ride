const rideListElement = document.querySelector('#rideList');
const allRides = getAllRides()

allRides.forEach(([id,value])=> {
    const ride = JSON.parse(value);
    ride.id = id;

    const firstPosition = ride.data[0];

    const itemElement = document.createElement('li');
    itemElement.id = ride.id;
    // itemElement.innerText = ride.id;
    rideListElement.appendChild(itemElement);
})
 
function getLocationData(latitude, longitude){
    
    // const url = 
}


