
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
    return dzienny;
  }

  function kosztm() {
    const mies = kosztdzienny()*dn();
    return mies;
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
    const mies = pro()*wa();
    return mies;
  }

  function dzO() {
    const oszcz = proD()*ko();
    return oszcz;
  }

  function mie() {
    const oszczM = dzO()*dn();
    return oszczM;
  }

  function total() {
    const zwr = kosztr()/mie();
    return zwr;
  }

  function display() {
  
    document.getElementById("kd").innerHTML = kosztdzienny();
    document.getElementById("km").innerHTML = kosztm();
    document.getElementById("dd").innerHTML = proD();
    document.getElementById("do").innerHTML = dzO();
    document.getElementById("dm").innerHTML = mie();
    document.getElementById("mm").innerHTML = total();
    console.log(ele());
    console.log(wa());
    console.log(ko());
    console.log(dn());
    console.log(kosztdzienny());
    console.log(kosztm());
  }

  