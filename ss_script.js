
function pracownicy(){
    var prac=document.getElementById("ss_pracownicy").value; 
    
    return prac;
}

function srednikosztsystemu(){
  const srednikoszt = 10000;
  return srednikoszt;
}
function wa(){
    var wad=document.getElementById("ss_wady").value; 
    return wad;
}

function proc(){
    var proc=document.getElementById("ss_procent").value; 
    return proc;
}

function skargi(){
    var skargi=document.getElementById("ss_skargi").value; 
    return skargi;
}
function koszt(){
  var koszt=document.getElementById("ss_koszt").value; 
  return koszt;
}
function kosztwady(){
  var kosztw=document.getElementById("ss_kosztwady").value; 
  return kosztw;
}
function kosztpracownika(){
  var koszt=2500; 
  return koszt;
}
function kosztpracownikow(){
  var kosztp=kosztpracownika()*pracownicy();
  
  return kosztp;
}
  function iloscodpadow() {
    const iloscodpad = wa()/100*proc();
    const kosztodpadow = iloscodpad*kosztwady();
    return kosztodpadow;
  }
  function kosztskarg() {
    const kosztsk = skargi()*koszt();
    return kosztsk;
  }

  function sumakosztow() {
    const sumkosz = kosztskarg()+iloscodpadow()+kosztpracownikow();
    
    return sumkosz;
  }

  function zwrot() {
    const zwrotwm = srednikosztsystemu()/sumakosztow();
    var miesiac = Math.round(zwrotwm);
    return miesiac;
  }


  function display() {
  
    document.getElementById("ss_roi").innerHTML = sumakosztow();
    document.getElementById("ss_mnth").innerHTML = zwrot();
    
  }




