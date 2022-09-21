let map;
var API_KEY = "AIzaSyB6A0NNK4gjmy7uqfWbLS636mmbVyzEycs";

var lats = document.getElementById("latitude");
var lngs = document.getElementById("longtitude");
var b_submit = document.getElementById("submit");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var p_Warning = document.getElementById("warning");
var information = document.getElementById("info");








function initMap(a = 52.12, b = -1, types = "default") {

    if (types == "default") {
        try {
            var a = parseFloat(prompt("Enter a latitude: "));
            var b = parseFloat(prompt("Enter a longtitude"));
        } catch (err) {
            a = 52;
            b = -1;
        }
    }

    var tri = [
        { lat: -11.93519064851951, lng: 49.23708925759679 },
        { lat: -12.033731160696096, lng: 49.34342188095621 },
        { lat: -12.181474128035221, lng: 49.30984315779008 },
        { lat: -12.15959144486933, lng: 49.22029989601373 },
        { lat: -12.247111341442725, lng: 49.23708925759679 },
        { lat: -12.279923834031331, lng: 49.22029989601373 },
        { lat: -12.208824944779147, lng: 49.34901833481723 },
        { lat: -12.26898679041225, lng: 49.382597057983354 },
        { lat: -12.247111341442725, lng: 49.41617578114949 },
        { lat: -12.383803030763412, lng: 49.44975450431563 },
        { lat: -12.334602228286258, lng: 49.488929681342775 },
        { lat: -12.427529292156214, lng: 49.58406939698015 },
        { lat: -12.525886460668781, lng: 49.578472943119124 },
        { lat: -12.602360570266773, lng: 49.55049067381401 },
        { lat: -12.766156675883732, lng: 49.67361265875649 },
        { lat: -12.73886465358729, lng: 49.73517365122774 },
        { lat: -13.03891394658534, lng: 49.93664599022453 },
        { lat: -13.333154247081671, lng: 50.04297861358394 },
        { lat: -13.196975907720704, lng: 49.9534353518076 },
        { lat: -13.44748483506901, lng: 50.09334669833314 },
        { lat: -13.839058850852147, lng: 50.12692542149927 },
        { lat: -14.305908265681444, lng: 50.19967932169256 },
        { lat: -14.712255182970987, lng: 50.22206513713664 },
        { lat: -15.150260946967471, lng: 50.41794102227241 },
        { lat: -15.252872910736912, lng: 50.46830910702161 },
        { lat: -15.386519224984001, lng: 50.46208050591128 },
        { lat: -15.952441129221494, lng: 50.26432661612417 },
        { lat: -15.941877604754731, lng: 50.11601119878383 },
        { lat: -15.999970095638345, lng: 50.214888143677385 },
        { lat: -15.82035716868776, lng: 49.9457231270227 },
        { lat: -15.460653883335368, lng: 49.824873527708355 },
        { lat: -15.471242386489013, lng: 49.643599128736824 },
        { lat: -16.21107278011837, lng: 49.857832509339545 },
        { lat: -16.67996197359227, lng: 49.73698291002518 },
        { lat: -17.257900049701725, lng: 49.56669483826406 },
        { lat: -17.614271242949943, lng: 49.49528371139649 },
        { lat: -19.473413811603837, lng: 48.98441944672447 },
        { lat: -25.01382938278572, lng: 47.087302124709936 },
        { lat: -25.2563726974008, lng: 46.55147706096443 },
        { lat: -25.239661053426097, lng: 46.228134350083536 },
        { lat: -25.54845329827078, lng: 45.58144892832173 },
        { lat: -25.598453129154972, lng: 45.08257731724834 },
        { lat: -25.114250547280257, lng: 43.98321210025326 },
        { lat: -24.37593004857205, lng: 43.558247394524074 },
        { lat: -23.523201097111937, lng: 43.364241767995544 },
        { lat: -22.860844708064583, lng: 43.37348013116356 },
        { lat: -22.238006827625284, lng: 43.253381409979234 },
        { lat: -21.24259718741424, lng: 43.244143046811196 },
        { lat: -20.66456215630958, lng: 44.06635739337631 },
        { lat: -20.040930532965866, lng: 44.38046174108918 },
        { lat: -19.065919666935084, lng: 44.07559575654433 },
        { lat: -17.539821946677378, lng: 43.909305219519865 },
        { lat: -16.541734226622626, lng: 44.47284537969123 },
        { lat: -16.08955317193555, lng: 44.49132210602729 },
        { lat: -15.974125300438097, lng: 45.174960980461194 },
        { lat: -15.431619804481329, lng: 46.51452363982493 },
        { lat: -15.173205997102416, lng: 46.89329652971399 },
        { lat: -14.628618886489036, lng: 47.46607504613159 },
        { lat: -13.822669763966942, lng: 47.73398757800434 },
        { lat: -13.400663151538337, lng: 47.84484793602065 },
        { lat: -13.121911011799142, lng: 48.05733028888524 },
        { lat: -12.74374312631985, lng: 48.55620189995864 },
        { lat: -12.220585141520449, lng: 48.962689879351764 },
        { lat: -11.8501387027632, lng: 49.22136404805649 },
    ];
    var loc = [currentLocation, northEast];
    var currentLocation = { lat: a, lng: b };
    var northEast = {
        lat: findLat(200, 26) + a,
        lng: findLng(200, 26) + b,
    };



    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: a, lng: b },
        zoom: 8,
        mapTypeId: 'satellite',

    });




    if (types == "def1ault") {
        try {
            var defaultMarker = googleMarker(a, b, "Default User Choosen Location", "red");
        } catch (err) {
            console.log(err);
        }
    }

    if (types == "button1") {
        var marker = googleMarker(a, b, "Random Marker", "red");
        // lat = 200 * sin(45) = (1/111) * 170.180704907 -> 1.53315950367 deg
        // lon = 200 * cos(45) = (1/110.567) * 105.064397764-> 0.95023287024 deg
        // For Button1 function: when clicked it will spawn a new marker 
        marker.addListener("click", () => {
            var l = a + findLat(200, 26);
            var lo = b + findLng(200, 26);
            var marker2 = googleMarker(l, lo, colour = "yellow");
            map.setCenter(new google.maps.LatLng(l, lo));
        });
        // //For Button1: spanw a new marker 
        // ///UMCOMMENT: to see 200km radius
        // circleEx = googleCircle(200);
        // circleEx.bindTo('center', marker, 'position');
    }

    if (types == "button2") {
        //For button2: 
        button2Marker = googleMarker(a, b, "Center Marker", "green");
        var circle = googleCircle(200, "#00e33d")
        var circle2 = googleCircle(100, "#ffffff")
        circle.bindTo('center', button2Marker, 'position');
        circle2.bindTo('center', button2Marker, 'position');
        var degRans = parseInt(MathRandomForMap(180)) // chooses a random degree between -180 -> 180
        var disRans = parseInt(Math.floor(Math.random() * (200 - 100 + 1)) + 100) // Chooses distance between 100km to 200km
        button2RandomMarker = googleMarker(a + findLat(disRans, degRans), b + findLng(disRans, degRans), "Distance Marker", "blue");
    }


    if (types == "button3") {
        var marker_maxLatitude = googleMarker(-11.8501387027632, 49.22136404805649, "Max Latitude", "green");
        var marker_minLatitude = googleMarker(-25.598453129154972, 45.08257731724834, "Min Latitude", "green");
        var marker_maxLongtitude = googleMarker(-15.252872910736912, 50.46830910702161, "Max Longtitude", "blue");
        var marker_minLongtitude = googleMarker(-21.24259718741424, 43.244143046811196, "Min Longtitude", "blue");
        map.data.add({ geometry: new google.maps.Data.Polygon([tri]) });
    }





    if (types == "button4") {
        var rcord = google.maps.geometry.spherical.computeOffset(new google.maps.LatLng(a, b), Math.random() * ((200 * 1000) - (100 * 1000) + 1) + (100 * 1000), Math.random() * (360 - 0) + 0);

        var centre = { lat: a, lng: b };
        var top = returnCordForTBLR(a, b, 0);
        var bottom = returnCordForTBLR(a, b, 180);
        var right = returnCordForTBLR(a, b, 270);
        var left = returnCordForTBLR(a, b, 360);

        circleMarker = googleMarker(centre.lat, centre.lng, "Parameter Marker", "red");
        circleMarkerTop = googleMarker(top.lat(), top.lng(), "Parameter Marker", "blue");
        circleMarkerBottom = googleMarker(bottom.lat(), bottom.lng(), "Parameter Marker", "blue");
        circleMarkerLeft = googleMarker(rcord.lat(), rcord.lng(), "Parameter Marker", "blue");
        circleMarkerRight = googleMarker(right.lat(), right.lng(), "Parameter Marker", "blue");

        cirlceAroundMarker = googleCircle(200);
        cirlceAroundMarker.bindTo('center', circleMarker, 'position');

        circleMarker.addListener("click", () => {
            returnInfoWindowInformation(centre, circleMarker);

        });

        circleMarkerTop.addListener("click", () => {
            returnInfoWindowInformation(top, circleMarkerTop);
        });

        circleMarkerBottom.addListener("click", () => {
            returnInfoWindowInformation(bottom, circleMarkerBottom);
        });

        circleMarkerLeft.addListener("click", () => {
            returnInfoWindowInformation(left, circleMarkerLeft);
        });

        circleMarkerRight.addListener("click", () => {
            returnInfoWindowInformation(right, circleMarkerRight);
        });

    }





    if (types == "button5") {
        var deli_shape = [
            { lat: 51.627652581651006, lng: 0.03464175010798558 },
            { lat: 51.54419448264976, lng: 0.16878611521567408 },
            { lat: 51.406517821238175, lng: -0.10568950641201642 },
            { lat: 51.45889560275626, lng: -0.26874445510345246 },
            { lat: 51.54092257218134, lng: -0.20399966451970847 },
            { lat: 51.62993113911635, lng: -0.3387251528959907 },



        ]
        var outShape = [
            { lat: 51.793427219944874, lng: -0.56255137771046475 },
            { lat: 51.83390999706661, lng: 0.4690156011259393 },
            { lat: 51.33390999706661, lng: 0.5955723332723796 },
            { lat: 51.33516076768105, lng: -0.5628720944436011 },

        ]



        // Tells the min, max in lat and lng based on given latlng array. 
        var topRight = 1; //x min 1
        var topLeft = 0; // x max 0
        var bottomRight = 2; // y min 2
        var bottomLeft = 3;



        var red = "#FF0000";
        var green = "#008000";

        /// drop marker inbetween so greater than or less than this value. FOLLOW THE IDEA. 




        var polygon_Red = new google.maps.Polygon({
            paths: deli_shape,
            strokeColor: red,
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: red,
            fillOpacity: 0.35
        });

        var polygon_Outer = new google.maps.Polygon({
            paths: outShape,
            strokeColor: green,
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: green,
            fillOpacity: 0.35,
            zIndex: -1,

        });

        polygon_Red.setMap(map);
        polygon_Outer.setMap(map);


        google.maps.event.addListener(polygon_Red, 'mouseover', function(event) {
            changeColor(polygon_Red, polygon_Outer, green, red); // Change the inner to green and outer to red. 

        });

        google.maps.event.addListener(polygon_Outer, 'mouseover', function(event) {
            changeColor(polygon_Red, polygon_Outer, green, red); // Chagen the inner to red and outer to green. 
        });
        /*
        If the mouse is out of the outer or if the mouse is out of the map (When out directly from the red polygon) change the colour. 
        */
        google.maps.event.addListener(polygon_Outer, 'mouseout', function(event) {
            changeColor(polygon_Red, polygon_Outer, red, green); // Change the inner to green and outer to red. 
        });
        map.addListener("mouseout", () => {
            changeColor(polygon_Red, polygon_Outer, red, green); // Change the inner to green and outer to red. 
        });


        // console.log(findMaxMinCoordinatePos(outShape, "min", "lat"));
        // console.log(findMaxMinCoordinatePos(outShape, "max", "lat"));


        console.log(topRight, topLeft, bottomRight, bottomLeft);


        for (var i = 0; i < 10; i++) {
            var la = generateRandom(outShape[topRight].lat, outShape[bottomLeft].lat);
            var ln = generateRandom(outShape[bottomRight].lng, outShape[bottomLeft].lng);
            // var condition = (la > 62993113911635 || la < 51.406517821238175) && (ln > 0.16878611521567408 || ln < -0.3387251528959907);
            var gmax = googleMarker(la, ln, "Max Latitude", "red");


            ///END

        }


    }






}

function returnDestinationURL(source, dest) {
    var url = "https://maps.googleapis.com/maps/api/directions/json?origin=" + source.replaceAll(" ", "+") + "&destination=" + dest.replaceAll(" ", "+") + "&key=AIzaSyB6A0NNK4gjmy7uqfWbLS636mmbVyzEycs";
    return url;
}


function generateRandom(min, max) {
    var random = Math.random() * (max - min) + min;
    return random;
}

function findMinMax(arr, minmax, l) {
    var array = returnArrayOnLatLng(arr, l);
    var pos = 0;
    if (minmax == "min") {
        var pos = array.indexOf(Math.min.apply(Math, array))
    } else if (minmax == "max") {
        var pos = array.indexOf(Math.max.apply(Math, array))
    }
    return pos;

}




function returnArrayOnLatLng(arr, l) {
    var array = [];
    if (l == "lat") {
        for (var i = 0; i < arr.length; i++) {
            array.push(arr[i].lat);
        }
    } else if (l == "lng") {
        for (var i = 0; i < arr.length; i++) {
            array.push(arr[i].lng);
        }
    }

    return array;
}

function returnCordForTBLR(a, b, d) {
    return google.maps.geometry.spherical.computeOffset(new google.maps.LatLng(a, b), Math.random() * ((200 * 1000) - (100 * 1000) + 1) + (100 * 1000), Math.random() * (360 - d) + 0);


}



/// TRIED FUNCTION: find max and min. 
function findMaxMinCoordinatePos(arr, minmax, l) {

    var top = 0;
    var prev = 0;

    if (l == "lat") {
        prev = arr[0].lat
        for (var i = 0; i < arr.length; i++) {
            if (minmax == "min") {
                if (arr[i].lat < prev) {
                    top = i;
                    prev = arr[i].lat;
                }
            } else if (minmax == "max") {
                if (arr[i].lat > prev) {
                    top = i;
                    prev = arr[i].lat;
                }
            }
        }
        return top;
    } else if (l == "lng") {
        prev = arr[0].lng
        for (var i = 0; i < arr.length; i++) {
            if (minmax == "min") {
                if (arr[i].lng < prev) {
                    top = i;
                    prev = arr[i].lng;
                    console.log("Ex1");
                    console.log(top, prev)
                }
            } else if (minmax == "max") {
                if (arr[i].lng > prev) {
                    top = i;
                    prev = arr[i].lng;
                    console.log("Ex");
                    console.log(top, prev)
                }
            }
        }

        return top;
    }
    return top;
}
/// END: TRIED FUNCTION: find max and min. 


function changeColor(pr, po, c, p) {
    pr.setOptions({
        fillColor: c,
        strokeColor: c,
    });
    po.setOptions({
        fillColor: p,
        strokeColor: p
    });

}






function returnInfoWindowInformation(coordinate, markerName) {
    axios.get(url(coordinate.lat, coordinate.lng)).then(function(response) {
        try {
            var currentLocation = response.data.results[3].address_components[3].long_name;
        } catch (err) {
            currentLocation = "Unknown Country ";
        }
        try {
            var address = response.data.results[0].formatted_address;
        } catch (err) {
            address = "Unknown Address";
        }
        var text = "<h3>Location: " + currentLocation + "</h3><br> <p>The address this place located in " + currentLocation + "in: " + address + "</p>";

        googleInfoWindow(text).open(map, markerName);

    })






}




function url(l, lo) {
    console.log("here");
    console.log(l, lo);
    var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + l + "," + lo + "&key=" + API_KEY
    console.log(url);
    return url;
}


// returnResponse["country"] = (ur["plus_code"]["compound_code"]);s
// returnResponse["address"] = (ur["results"][0]["formatted_address"]);
////Goolgle API function .

// Marker Function 
function googleMarker(a = 0, b = 0, t = "Unknown", colour = "yellow") {
    return new google.maps.Marker({
        position: {
            lat: a,
            lng: b
        },
        map: map,
        title: t,
        animation: google.maps.Animation.DROP,
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/" + colour + "-dot.png"
        }

    });
}






//Circle Function 
function googleCircle(radius, colour = "AA0000") {
    return new google.maps.Circle({
        map: map,
        radius: radius * 1000, // 10 miles in metres
        fillColor: colour
    });
}

function googleInfoWindow(s) {
    return new google.maps.InfoWindow({
        content: s,
    });
}




/////////////////////////BUTTON FUNCTIONS ////////////////////////////////////




function userChoosenLocation() {
    initMap(parseFloat(lats.value), parseFloat(lngs.value), "None");

}
b_submit.onclick = userChoosenLocation;



///button 1
// Instruct initMap to set the randomly chosen location 
function generateRandomCoordinate() {
    var l = MathRandomForMap(90);
    var lo = MathRandomForMap(180);
    return [parseFloat(l), parseFloat(lo)]
}

function button1Function() {
    llo = generateRandomCoordinate();
    initMap(llo[0], llo[1], "button1");

}

var button1 = document.getElementById("button1");
button1.onclick = button1Function;

/// button 2
//Submit instrcution for input Latitude and Longtitude data. 
var button2 = document.getElementById("button2");

function directionSubmit() {
    if (parseFloat(lats.value) && parseFloat(lngs.value)) {
        p_Warning.style.display = "none";
        initMap(parseFloat(lats.value), parseFloat(lngs.value), "button2");
    } else {
        p_Warning.style.display = "";
    }

}
button2.onclick = directionSubmit;


///Button3 
button3.onclick = drawButton;

function drawButton() {
    // Madagascar
    initMap(parseFloat(-18.99), parseFloat(46.55), "button3")
}



/// Button4 
function button4Function() {
    info.innerHTML = "Click on the marker to view discription";
    var llo = generateRandomCoordinate();
    initMap(llo[0], llo[1], "button4")
}
button4.onclick = button4Function;
/// Button5


function button5Function() {
    var llo = generateRandomCoordinate();
    initMap(52, 2, "button5")
}

button5.onclick = button5Function;


function button6Function() {
    initMap(52, 2, "button6");


}
button6.onclick = button6Function;


/////////////////////////END: BUTTON FUNCTIONS ////////////////////////////////////





// Generate a random number between Lat: -90 to 90 and Long: -180 to 180 
function MathRandomForMap(h) {
    var high = h + 1;
    var r = Math.random() * high;
    var sign = Math.random() < 0.5 ? -1 : 1;
    return (r * sign);
}

// Make sure values for -90 to 90 and Long: -180 to 180 are between. 
function generateBetween(ls, value) {
    if (ls == "lat") {
        if (value < -90) {
            return -90;
        } else if (value > 90) {
            return 90;
        }
    } else if (ls == "long") {
        if (value < -180) {
            return -180;
        } else if (value > 180) {
            return 180;
        }
    }

    return value;
}

/// find 1 deg in lat and long

////////////////////////math////////////////
// lat = 200 * sin(45) = (1/170.180704907)* 110.567-> 1.5390661885 deg
// lon = 200 * cos(45) = (1/105.064397764) * XXXX-> 0.94652610598 deg

/// Precise Lat = 110.574
/// Lng = 111.320


function findLat(km, d) {
    return parseFloat((1 / 111) * (km * Math.sin(d)));
}

function findLng(km, d) {
    return parseFloat((1 / 111) * (km * Math.cos(d)));
}