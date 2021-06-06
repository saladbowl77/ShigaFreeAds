const adLCount_L = document.getElementsByClassName('shigaFreeAd_L');
for (i = 0; i < adLCount_L.length; i++){
    console.log(i);
    let dataAd_L = "";
    let AdSpace_L = adLCount_L[i];
    var req_L = new XMLHttpRequest();
    req_L.open("GET", '/api/ad/s/L', true);
    req_L.onload = function() {
        dataAd_L = req_L.responseText;
        AdSpace_L.innerHTML = dataAd_L;
    }
    req_L.send(null);
}

const adLCount_B = document.getElementsByClassName('shigaFreeAd_B');
console.log(adLCount_B)
for (i = 0; i < adLCount_B.length; i++){
    console.log(i);
    let dataAd_B = "";
    let AdSpace_B = adLCount_B[i];
    var req_B = new XMLHttpRequest();
    req_B.open("GET", '/api/ad/s/B', true);
    req_B.onload = function() {
        dataAd_B = req_B.responseText;
        AdSpace_B.innerHTML = dataAd_B;
    }
    req_B.send(null);
}