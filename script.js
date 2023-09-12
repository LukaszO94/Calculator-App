
function ele(){
    var el=document.getElementById("elementy").value; 
    
    return el;
}
function wa(){
    var wad=document.getElementById("wady").value; 
    return wad;
}

function ko(){
    var kos=document.getElementById("koszt").value; 
    return kos;
}

function dn(){
    var dni=document.getElementById("dni").value; 
    return dni;
}

  function kosztdzienny() {
    const dzienny = wa()*ko();
    var dziennyA=(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(dzienny));
    return dziennyA;
  }
  function kosztdziennyA() {
    const dzienny = wa()*ko();
    
    return dzienny;
  }

  function kosztm() {
    const mies = kosztdziennyA()*dn();
    var miesA=(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(mies));
    
    return miesA;
  }

  function kosztr() {
    var roz=document.getElementById("rozw").value; 
    return roz;
  }

  function pro() {
    var pr=document.getElementById("proc").value; 
    return pr;
  }

  function proD() {
    const miesC = pro()/100*wa();
    
    return miesC;
  }
  function proDD() {
    const miesC = pro()/100*wa();
    
        
    return miesC;
  }

  function dzO() {
    const oszcz = proDD()*ko();
    var oszczD=(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(oszcz));
    return oszczD;
  }
  function dzOO() {
    const oszcz = proDD()*ko();
    
    return oszcz;
  }

  function mie() {
    const oszczM = dzOO()*dn();
    var oszczMi=(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(oszczM));
    return oszczMi;
  }
  function mieCC() {
    const oszczMa = dzOO()*dn();
    
    return oszczMa;
  }

  function total() {
    const zwr = kosztr()/mieCC();
    var zwrot=(new Intl.NumberFormat("en-US", {
        style: "unit",        unit: "month", minimumFractionDigits: 0,
        maximumFractionDigits: 2, unitDisplay: "short"}).format(zwr));
    return zwrot;
  }

  function display() {
  
    document.getElementById("kd").innerHTML = kosztdzienny();
    document.getElementById("km").innerHTML = kosztm();
    document.getElementById("dd").innerHTML = proD();
    document.getElementById("do").innerHTML = dzO();
    document.getElementById("dm").innerHTML = mie();
    document.getElementById("mm").innerHTML = total();
    document.getElementById("elementy").innerHTML = ele();
    console.log(ele());
    console.log(wa());
    console.log(ko());
    console.log(dn());
    console.log(kosztdzienny());
    console.log(kosztm());
  }




