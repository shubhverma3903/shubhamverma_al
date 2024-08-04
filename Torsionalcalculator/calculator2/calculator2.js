function calculateEquivalentAngles() { 
    const a7 = parseFloat(document.getElementById('angleA7').value);
    const b7 = parseFloat(document.getElementById('angleB7').value);
    const c7 = parseFloat(document.getElementById('angleC7').value);
    const d7 = parseFloat(document.getElementById('angleD7').value);
    const e7 = parseFloat(document.getElementById('angleE7').value);
    const f7 = parseFloat(document.getElementById('angleF7').value);
    const g7 = parseFloat(document.getElementById('angleG7').value);

   const i7 = Math.sqrt(a7 * a7 + b7 * b7);
   const j7 = Math.sqrt(c7 * c7 + d7 * d7);
   const k7 = Math.sqrt(e7 * e7 + f7 * f7);
   const angle17 = Math.sqrt(Math.abs(i7 * i7 - j7 * j7 + k7 * k7)); // this is for P-P phase
   const angle27 = Math.sqrt(Math.abs(i7 * i7 + j7 * j7 - k7 * k7)); // this is for C-P phase

   const Beta7 = Math.min(angle17, angle27);

    const cd7=Math.sqrt(Math.abs(2*i7*i7 + j7*j7));
    const cc7=Math.sqrt(Math.abs(2*k7*k7 + j7*j7));

    const pd7=Math.sqrt(Math.abs(2*i7*i7 - j7*j7));
    const pc7=Math.sqrt(Math.abs(2*k7*k7 - j7*j7));
      let l7=0;
      let m7=0;
      let n7=0;
      let o7=0;

   const dropdown7 = document.getElementById("myDropdown7");
   const phase = dropdown7.value;
   if (phase==="PP"){
      // this is for the case of P-P
      o7=angle17;
      n7 = 3.3405*(Math.pow(10,-6))*(g7*g7)*((angle17)*(angle17));
      l7 = 3.3405*(Math.pow(10,-6))*(g7*g7)*((pd7)*(pd7));   //inertia drive
      m7 = 3.3405*(Math.pow(10,-6))*(g7*g7)*((pc7)*(pc7));
  }
 else if (phase==="CP"){ 
     // this is for the case of C-P
        o7=angle27;
        n7 = 3.3405*(Math.pow(10,-6))*(g7*g7)*((angle27)*(angle27));
        l7 = 3.3405*(Math.pow(10,-6))*(g7*g7)*((cd7)*(cd7));   //inertia drive
        m7 = 3.3405*(Math.pow(10,-6))*(g7*g7)*((pc7)*(pc7));   //inertia coast
 }
    //unladen
    const a7u = parseFloat(document.getElementById('angleA7u').value);
    const b7u = parseFloat(document.getElementById('angleB7u').value);
    const c7u = parseFloat(document.getElementById('angleC7u').value);
    const d7u = parseFloat(document.getElementById('angleD7u').value);
    const e7u = parseFloat(document.getElementById('angleE7u').value);
    const f7u = parseFloat(document.getElementById('angleF7u').value);
    const g7u = parseFloat(document.getElementById('angleG7u').value);

    const i7u = Math.sqrt(a7u * a7u + b7u * b7u);
    const j7u = Math.sqrt(c7u * c7u + d7u * d7u);
    const k7u = Math.sqrt(e7u * e7u + f7u * f7u);
    const angle17u = Math.sqrt(Math.abs(i7u * i7u - j7u * j7u + k7u * k7u)); // this is for P-P phase
    const angle27u = Math.sqrt(Math.abs(i7u * i7u + j7u * j7u - k7u * k7u)); // this is for C-P phase

    const Beta7u = Math.min(angle17u, angle27u);

    const cd7u = Math.sqrt(Math.abs(2 * i7u * i7u + j7u * j7u));
    const cc7u = Math.sqrt(Math.abs(2 * k7u * k7u + j7u * j7u));

    const pd7u = Math.sqrt(Math.abs(2 * i7u * i7u - j7u * j7u));
    const pc7u = Math.sqrt(Math.abs(2 * k7u * k7u - j7u * j7u));

    let l7u = 0;
    let m7u = 0;
    let n7u = 0;
    let o7u = 0;

    const dropdown7u = document.getElementById("myDropdown7u");
    const phase7u = dropdown7u.value;

    if (phase7u === "PP") {
        // This is for the case of P-P
        o7u = angle17u;
        n7u = 3.3405 * Math.pow(10, -6) * (g7u * g7u) * (angle17u * angle17u);
        l7u = 3.3405 * Math.pow(10, -6) * (g7u * g7u) * (pd7u * pd7u);   // Inertia drive
        m7u = 3.3405 * Math.pow(10, -6) * (g7u * g7u) * (pc7u * pc7u);
    } else if (phase7u === "CP") {
        // This is for the case of C-P
        o7u = angle27u;
        n7u = 3.3405 * Math.pow(10, -6) * (g7u * g7u) * (angle27u * angle27u);
        l7u = 3.3405 * Math.pow(10, -6) * (g7u * g7u) * (cd7u * cd7u);   // Inertia drive
        m7u = 3.3405 * Math.pow(10, -6) * (g7u * g7u) * (pc7u * pc7u);   // Inertia coast
    }



    document.getElementById('result').innerHTML = `
<div class="container">
<div class="calculator-container1">
            <h3>Laden  </h3>
         <div class="box">
            Corresponding  ${phase} Phasing The Equivalent beta angle ${o7.toFixed(2)}
         </div><br>
         <div id="betaAngle71">
            1.Torsional Excitation: ${n7.toFixed(2)} (rad/s^2),${n7.toFixed(2) <400 ? 'Safe' : 'Unsafe'}
         </div><br>
         <div id="betaAngle72">
            2.Inertia drive Excitation: ${l7.toFixed(2)} (rad/s^2),${l7.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}
         </div><br>
          <div id="betaAngle73">
            3.Inertia Coast Excitation: ${m7.toFixed(2)} (rad/s^2),${m7.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}
           </div><br>
    </div>
    <div class="calculator-container1">
    <h3>Unladen</h3>
    <div class="box">
        Corresponding ${phase7u} Phasing The Equivalent beta angle ${o7u.toFixed(2)}
    </div><br>

    <div id="betaAngle71u">
        1.Torsional Excitation: ${n7u.toFixed(2)} (rad/s²), ${n7u.toFixed(2) < 400 ? 'Safe' : 'Unsafe'}
    </div><br>

    <div id="betaAngle72u">
        2.Inertia Drive Excitation: ${l7u.toFixed(2)} (rad/s²), ${l7u.toFixed(2) < 2000 ? 'Safe' : 'Unsafe'}
    </div><br>

    <div id="betaAngle73u">
        3.Inertia Coast Excitation: ${m7u.toFixed(2)} (rad/s²), ${m7u.toFixed(2) < 2000 ? 'Safe' : 'Unsafe'}
    </div><br>
</div>
</div>

      `; 
   const betaAngle71Element = document.getElementById('betaAngle71');
    if(n7 >=  400){
        betaAngle71Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle71Element.style.backgroundColor = 'green';
    }

    const betaAngle72Element = document.getElementById('betaAngle72');
    if(l7 >=  2000){
        betaAngle72Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle72Element.style.backgroundColor = 'green';
    }
    const betaAngle73Element = document.getElementById('betaAngle73');
    if(m7 >= 2000){
        betaAngle73Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle73Element.style.backgroundColor = 'green';
    }
    const betaAngle71uElement = document.getElementById('betaAngle71u');
    if(n7u >=  400){
        betaAngle71uElement.style.backgroundColor = 'red';
    }
    else{
        betaAngle71uElement.style.backgroundColor = 'green';
    }

    const betaAngle72uElement = document.getElementById('betaAngle72u');
    if(l7u >=  2000){
        betaAngle72uElement.style.backgroundColor = 'red';
    }
    else{
        betaAngle72uElement.style.backgroundColor = 'green';
    }
    const betaAngle73uElement = document.getElementById('betaAngle73u');
    if(m7u >= 2000){
        betaAngle73uElement.style.backgroundColor = 'red';
    }
    else{
        betaAngle73uElement.style.backgroundColor = 'green';
    }
 }
