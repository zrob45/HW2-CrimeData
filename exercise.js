var exercise = {};

exercise.countRecords = function(data){

    totalrecords= JSON.stringify(chicago.data.length)
    return totalrecords;

};

exercise.countDistrictCrimes = function(data,district){
 
    var totaldistricts = 0;
    var countd = function(dstrict){
        if (dstrict [19] === district){totaldistricts++};
    };
    data.forEach(countd);
    return totaldistricts; 

};

exercise.countPrimaryType = function(data,primaryType){

    var totalcrimes = 0;
    var countc = function(crime){
        if (crime [13] === primaryType){totalcrimes++};
    };
    data.forEach(countc);
    return totalcrimes; 

};

exercise.countLocation = function(data,location){
    
    var loccrimes = 0;
    var countl = function(loc){
        if (loc [15] === location){loccrimes++};
    };
    data.forEach(countl);
    return loccrimes;
};


exercise.buildLatLngPoint = function(crime){
    
    var point = {};
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;  
    
};




