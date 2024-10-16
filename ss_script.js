
function pracownicy(){
    var prac=document.getElementById("ss_pracownicy").value; 
    
    return prac;
}

function toggleSection() {
  var section = document.getElementById("costSection");
  var button = document.getElementById("costButton");
  
  if (section.style.display === "none") {
      section.style.display = "block";
      button.textContent = "▼Cost details";
  } else {
      section.style.display = "none";
      button.textContent = "►Cost details";
  }
}


function srednikosztsystemu(){
  const srednikoszt = document.getElementById("ss_systemcost").value;;
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
  var koszt=document.getElementById("ss_operatorcost").value;; 
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




