var car1 = {
    year: 2000,
    make: 'Ford',
    model: 'Fusion',
    getInfo: function () {
    return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    }
};

var car2 = {
    year: 2010,
    make: 'BMW',
    model: 'Z4',
    getInfo: function () {
    return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    }
};

function getVehicle(theYear, theMake, theModel) {
    var vehicle = new Object();
    vehicle.year = theYear;
    vehicle.make = theMake;
    vehicle.model = theModel;
    vehicle.getInfo = function () {
    return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    };
    return vehicle;
}

function Vehicle(theYear, theMake, theModel) {
    this.year = theYear;
    this.make = theMake;
    this.model = theModel;
}

Vehicle.prototype.getInfo = function () {
    return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
};