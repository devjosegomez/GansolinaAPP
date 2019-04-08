document.addEventListener("DOMContentLoaded", get_json_data, false);

function get_json_data() {

    var json_url = './assets/js/bestPrices.json';
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            append_json(data);
        }
    }

    xmlhttp.open("GET", json_url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send();
}

function append_json(data) {
    var table = document.getElementById('bestPrices');
    data.forEach(function (object) {
        var x,y, name;
        n = object.location.name;
        x = object.location.x;
        y = object.location.y;
        
        var p, m, d;
        p = object.gas.p;
        m = object.gas.m;
        d = object.gas.d;
        
        var info = x+","+y+",'"+n+"',"+p+","+m+","+d+","+object.stars;
        console.log(info);

        var tr = document.createElement('tr');
        tr.className = "fakeBtn align-middle";
//        onclick="goToGas('+x+','+y+')"
        tr.innerHTML = '<td onclick="goToGas('+info+')" scope="row" class="align-middle gas ' + object.type + '">' + object.type + '</td>' +
            '<td class="align-middle" onclick="goToGas('+info+')" scope="row" > $' + object.price + '</td>' +
            '<td class="align-middle" onclick="goToGas('+info+')" scope="row">' + object.location.address_street + '</td>';
        table.appendChild(tr);
    });
}

function goToGas(x,y,n,p,m,d,s){
    if(p){
       updateInfo(n,p,m,d,s);
    }
    console.log("x: " + x + "y: "+y);
    
    let marker = new mapboxgl.Marker(element).setLngLat({
    lng: x,
    lat: y
    })
    .addTo(map);
    
    map.flyTo({center: [x, y], zoom: 15});
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateInfo(n,p,m,d,s){
    document.getElementById("gasTitle").innerHTML = n;
    document.getElementById("pricePremium").innerHTML = p;
    document.getElementById("priceMagna").innerHTML = m;
    document.getElementById("priceDiesel").innerHTML = d;
    
    document.getElementById("gasStars").innerHTML = createStars(s);
}

function createStars(s){
    var stars = "";
    for(i=1; i<=s; i++){
        stars += '<i class="fas fa-star star"></i>';
    }
    return stars+"  <h6>"+s+"/5</h6>";
}

function closeBtn(){
    if (tablaInfo.style.marginLeft == "-500px") {
        tablaInfo.style.marginLeft = "0px"
    } else {
        tablaInfo.style.marginLeft = "-500px"
    }
}