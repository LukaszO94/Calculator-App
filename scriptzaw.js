//Wartości wpisywane w formularzu

function elementy() {
    var elementy=document.getElementById("elementy").value; 
    return elementy;
}
function wady() {
    var wady=document.getElementById("wady").value; 
    return wady;
}

function kosztymaterialowe() {
    var kosztymaterialowe=document.getElementById("kosztmat").value; 
    return kosztymaterialowe;
}

function kosztrg() {
    var kosztrg=document.getElementById("roboczogodz").value; 
    return kosztrg;
}
function naprawa() {
    var naprawa=document.getElementById("naprawa").value; 
    return naprawa;
}

function kosztkazdejwady() {
    var kosztwad=document.getElementById("kw1").value; 
    return kosztwad;
}

function dziennykosztwad() {
    var dkw=document.getElementById("dziennyk").value; 
    return dkw;
}
function miesiecznykosztwad() {
    var mkw=document.getElementById("miesiecznyk").value; 
    return mkw;
}

function produktycognex() {
    var prod1=document.getElementById("prod1").value;
    var prod2=document.getElementById("prod2").value;
    var prod3=document.getElementById("prod3").value;
    var prod4=document.getElementById("prod4").value;
    var prod5=document.getElementById("prod5").value;
    var prod6=document.getElementById("prod6").value; 
    var sumaprod=Number(prod1)+Number(prod2)+Number(prod3)+Number(prod4)+Number(prod5)+Number(prod6);
    return sumaprod;
}

function ilosczestawow() {
    var ilosczestawow=document.getElementById("lines").value; 
    return ilosczestawow;
}

function montaz() {
    var montaz=document.getElementById("montaz").value; 
    return montaz;
}

function dodatkowysprzet() {
    var dodsprzet=document.getElementById("dodsprzet").value; 
    return dodsprzet;
}
function konfiguracja() {
    var kon=document.getElementById("konfig").value; 
    return kon;
}

function przestoj() {
    var prz=document.getElementById("przestoj").value; 
    return prz;
}

function inne() {
    var inne=document.getElementById("ine").value; 
    return inne;
}

//konkurencja
function konsys() {
    var konsys=document.getElementById("konksprzet").value; 
    return konsys;
}

function liniekon() {
    var lk=document.getElementById("konklines").value; 
    return lk;
}

function montazk() {
    var mk=document.getElementById("montazk").value; 
    return mk;
}

function dsk() {
    var dsk=document.getElementById("dodsprzetk").value; 
    return dsk;
}

function konfk() {
    var kk=document.getElementById("konfigk").value; 
    return kk;
}

function przestojkonkurencja() {
    var pk=document.getElementById("przestojk").value; 
    return pk;
}

function iinekonk() {
    var inek=document.getElementById("inek").value; 
    return inek;
}

function skutecznoscsystemu() {
    var sku=document.getElementById("skutsys").value; 
    return sku;
}
//Kalkulacje
//Tabela1
function kosztwady() {
    var robogo=naprawa()/60*kosztrg();
    var kosztw=Number(robogo)+Number(kosztymaterialowe());
    return kosztw;
}

function kosztwaddziennie() {
    var kwd=kosztwady()*wady();
    return kwd;
}

function kosztwadmiesiecznie() {
    var kwm=kosztwaddziennie()*365.25/12;
    return kwm;
}

//tabela 2
function kosztsystemu() {
    var ks=produktycognex()*ilosczestawow();
    return ks;
}
//Wyświetlanie wyników
function display() {
    console.log(elementy());
    console.log(wady());
    console.log(kosztymaterialowe());
    console.log(produktycognex());
    console.log(kosztwady());
    console.log(kosztwaddziennie());
    console.log(kosztwadmiesiecznie());
  }