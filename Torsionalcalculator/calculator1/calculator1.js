function calculateEquivalentAngles() {
   // Input angles (replace with actual values)
   const a = parseFloat(document.getElementById('angleA').value);
   const b = parseFloat(document.getElementById('angleB').value);
   const c = parseFloat(document.getElementById('angleC').value);
   const d = parseFloat(document.getElementById('angleD').value);
   const e = parseFloat(document.getElementById('angleE').value);

   // Calculate equivalent angles
   const f = Math.sqrt(a * a + b * b);
   const g = Math.sqrt(c * c + d * d);

   const h = Math.sqrt(Math.abs((f*f)-(g*g)));
   const i = 3.3405*(Math.pow(10,-6))*(h*h)*(e*e);
   const j = 3.3405*(Math.pow(10,-6))*(f*f)*(e*e);
   const k = 3.3405*(Math.pow(10,-6))*(g*g)*(e*e);

    //unladen
    const au = parseFloat(document.getElementById('angleAu').value);
    const bu = parseFloat(document.getElementById('angleBu').value);
    const cu = parseFloat(document.getElementById('angleCu').value);
    const du = parseFloat(document.getElementById('angleDu').value);
    const eu = parseFloat(document.getElementById('angleEu').value);

    // Calculate equivalent angles
    const fu = Math.sqrt(au * au + bu * bu);
    const gu = Math.sqrt(cu * cu + du * du);

    const hu = Math.sqrt(Math.abs((fu * fu) - (gu * gu)));
    const iu = 3.3405 * Math.pow(10, -6) * (hu * hu) * (eu * eu);
    const ju = 3.3405 * Math.pow(10, -6) * (fu * fu) * (eu * eu);
    const ku = 3.3405 * Math.pow(10, -6) * (gu * gu) * (eu * eu);


   // Display equivalent angles
   document.getElementById('result').innerHTML = `
   <div class="container">
       <div class="calculator-container1">
        <h3>Laden  </h3>
<div id="betaAngle71">
   1.Torsional Excitation: ${i.toFixed(2)} (rad/s^2),${i.toFixed(2) <400 ? 'Safe' : 'Unsafe'}
</div><br>
<div id="betaAngle72">
   2.Inertia drive Excitation: ${j.toFixed(2)} (rad/s^2),${j.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}
</div><br>
 <div id="betaAngle73">
   3.Inertia Coast Excitation: ${k.toFixed(2)} (rad/s^2),${k.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}
  </div><br>
  </div>
  <div class="calculator-container1">
  <h3>Unladen</h3>
<div id="betaAngle71u">
   1.Torsional Excitation: ${iu.toFixed(2)} (rad/s²), ${iu.toFixed(2) < 400 ? 'Safe' : 'Unsafe'}
</div><br>

<div id="betaAngle72u">
   2.Inertia Drive Excitation: ${ju.toFixed(2)} (rad/s²), ${ju.toFixed(2) < 2000 ? 'Safe' : 'Unsafe'}
</div><br>

<div id="betaAngle73u">
   3.Inertia Coast Excitation: ${ku.toFixed(2)} (rad/s²), ${ku.toFixed(2) < 2000 ? 'Safe' : 'Unsafe'}
</div><br>
</div>
</div>
`;
   const betaAngle71Element = document.getElementById('betaAngle71');
    if(i >=  400){
        betaAngle71Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle71Element.style.backgroundColor = 'green';
    }

    const betaAngle72Element = document.getElementById('betaAngle72');
    if(j >=  2000){
        betaAngle72Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle72Element.style.backgroundColor = 'green';
    }
    const betaAngle73Element = document.getElementById('betaAngle73');
    if(k >= 2000){
        betaAngle73Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle73Element.style.backgroundColor = 'green';
    }
    const betaAngle71uElement = document.getElementById('betaAngle71u');
    if(iu >=  400){
        betaAngle71uElement.style.backgroundColor = 'red';
    }
    else{
        betaAngle71uElement.style.backgroundColor = 'green';
    }

    const betaAngle72uElement = document.getElementById('betaAngle72u');
    if(ju >=  2000){
        betaAngle72uElement.style.backgroundColor = 'red';
    }
    else{
        betaAngle72uElement.style.backgroundColor = 'green';
    }
    const betaAngle73uElement = document.getElementById('betaAngle73u');
    if(ku >= 2000){
        betaAngle73uElement.style.backgroundColor = 'red';
    }
    else{
        betaAngle73uElement.style.backgroundColor = 'green';
    }
}