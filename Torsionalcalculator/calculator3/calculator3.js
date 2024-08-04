

function calculateEquivalentAngles() { 
       const a7 = parseFloat(document.getElementById('angleA7').value);
       const b7 = parseFloat(document.getElementById('angleB7').value);
       const c7 = parseFloat(document.getElementById('angleC7').value);
       const d7 = parseFloat(document.getElementById('angleD7').value);
       const e7 = parseFloat(document.getElementById('angleE7').value);
       const f7 = parseFloat(document.getElementById('angleF7').value);
       const g7 = parseFloat(document.getElementById('angleG7').value);
       const h7 = parseFloat(document.getElementById('angleH7').value);
       const i7 = parseFloat(document.getElementById('angleI7').value);

       const j7 = Math.sqrt(a7 * a7 + b7 * b7);
       const k7 = Math.sqrt(c7 * c7 + d7 * d7);
       const l7 = Math.sqrt(e7 * e7 + f7 * f7);
       const m7 = Math.sqrt(g7 * g7 + h7 * h7);

       const angle17 = Math.sqrt(Math.abs(-(j7*j7)+(k7*k7)-(l7*l7)+(m7*m7))); // P-P-P
       const angle27 = Math.sqrt(Math.abs((j7*j7)+(k7*k7)-(l7*l7)+(m7*m7)));  // C-P-P
       const angle37 = Math.sqrt(Math.abs((j7*j7)+(k7*k7)+(l7*l7)-(m7*m7)));  // C-C-P
       const angle47 = Math.sqrt(Math.abs((j7*j7)-(k7*k7)-(l7*l7)+(m7*m7)));  // P-C-P

       const p7=Math.min(angle17, angle27);
       const q7=Math.min(angle37, angle47);

       const Beta7 = Math.min(p7, q7);  

       const pcd7=Math.sqrt(Math.abs(3*j7*j7 - 2*k7*k7 - l7*l7));
       const pcc7=Math.sqrt(Math.abs(3*m7*m7 - 2*l7*l7 - k7*k7));

       const ccd7=Math.sqrt(Math.abs(3*j7*j7 + 2*k7*k7 + l7*l7));
       const ccc7=Math.sqrt(Math.abs(3*m7*m7 + 2*l7*l7 + k7*k7));

       const cpd7=Math.sqrt(Math.abs(3*j7*j7 + 2*k7*k7 - l7*l7));
       const cpc7=Math.sqrt(Math.abs(3*m7*m7 + 2*l7*l7 - k7*k7));

       const ppd7=Math.sqrt(Math.abs(3*j7*j7 - 2*k7*k7 + l7*l7));
       const ppc7=Math.sqrt(Math.abs(3*m7*m7 - 2*l7*l7 +k7*k7));

     let r7=0;
     let t7=0;
     let u7=0;
     let v7=0;
      const dropdown = document.getElementById("myDropdown");
      const phase = dropdown.value;
    if(phase==="PPP"){
          // this is for the case of P-P-P
           r7=angle17;
           t7 = 3.3405*(Math.pow(10,-6))*(i7*i7)*((angle17)*(angle17)); 
           u7 = 3.3405*(Math.pow(10,-6))*(i7*i7)*((ppd7)*(ppd7));
           v7 = 3.3405*(Math.pow(10,-6))*(i7*i7)*((ppc7)*(ppc7));
    }
    else if(phase==="CPP"){
         // this is for the case of C-P-P
        r7=angle27;
        t7 = 3.3405*(Math.pow(10,-6))*(i7*i7)*((angle27)*(angle27)); 
        u7 = 3.3405*(Math.pow(10,-6))*(i7*i7)*((cpd7)*(cpd7));
        v7 = 3.3405*(Math.pow(10,-6))*(i7*i7)*((ppc7)*(ppc7));
    }
    else if(phase==="CCP"){
         // this is for the case of C-P-P
        r7=angle37;
        t7 = 3.3405*(Math.pow(10,-6))*(i7*i7)*((angle37)*(angle37)); 
        u7 = 3.3405*(Math.pow(10,-6))*(i7*i7)*((ccd7)*(ccd7));
        v7 = 3.3405*(Math.pow(10,-6))*(i7*i7)*((pcc7)*(pcc7));
    }
    else if(phase==="PCP"){
         // this is for the case of P-C-P
        r7=angle47;
        t7 = 3.3405*(Math.pow(10,-6))*(i7*i7)*((angle47)*(angle47)); 
        u7 = 3.3405*(Math.pow(10,-6))*(i7*i7)*((pcd7)*(pcd7));
        v7 = 3.3405*(Math.pow(10,-6))*(i7*i7)*((pcc7)*(pcc7));
    }
// unladen
    const a7u = parseFloat(document.getElementById('angleA7u').value);
    const b7u = parseFloat(document.getElementById('angleB7u').value);
    const c7u = parseFloat(document.getElementById('angleC7u').value);
    const d7u = parseFloat(document.getElementById('angleD7u').value);
    const e7u = parseFloat(document.getElementById('angleE7u').value);
    const f7u = parseFloat(document.getElementById('angleF7u').value);
    const g7u = parseFloat(document.getElementById('angleG7u').value);
    const h7u = parseFloat(document.getElementById('angleH7u').value);
    const i7u = parseFloat(document.getElementById('angleI7u').value);

    const j7u = Math.sqrt(a7u * a7u + b7u * b7u);
    const k7u = Math.sqrt(c7u * c7u + d7u * d7u);
    const l7u = Math.sqrt(e7u * e7u + f7u * f7u);
    const m7u = Math.sqrt(g7u * g7u + h7u * h7u);

    const angle17u = Math.sqrt(Math.abs(-(j7u * j7u) + (k7u * k7u) - (l7u * l7u) + (m7u * m7u))); // P-P-P
    const angle27u = Math.sqrt(Math.abs((j7u * j7u) + (k7u * k7u) - (l7u * l7u) + (m7u * m7u)));  // C-P-P
    const angle37u = Math.sqrt(Math.abs((j7u * j7u) + (k7u * k7u) + (l7u * l7u) - (m7u * m7u)));  // C-C-P
    const angle47u = Math.sqrt(Math.abs((j7u * j7u) - (k7u * k7u) - (l7u * l7u) + (m7u * m7u)));  // P-C-P

    const p7u = Math.min(angle17u, angle27u);
    const q7u = Math.min(angle37u, angle47u);

    const Beta7u = Math.min(p7u, q7u);

    const pcd7u = Math.sqrt(Math.abs(3 * j7u * j7u - 2 * k7u * k7u - l7u * l7u));
    const pcc7u = Math.sqrt(Math.abs(3 * m7u * m7u - 2 * l7u * l7u - k7u * k7u));

    const ccd7u = Math.sqrt(Math.abs(3 * j7u * j7u + 2 * k7u * k7u + l7u * l7u));
    const ccc7u = Math.sqrt(Math.abs(3 * m7u * m7u + 2 * l7u * l7u + k7u * k7u));

    const cpd7u = Math.sqrt(Math.abs(3 * j7u * j7u + 2 * k7u * k7u - l7u * l7u));
    const cpc7u = Math.sqrt(Math.abs(3 * m7u * m7u + 2 * l7u * l7u - k7u * k7u));

    const ppd7u = Math.sqrt(Math.abs(3 * j7u * j7u - 2 * k7u * k7u + l7u * l7u));
    const ppc7u = Math.sqrt(Math.abs(3 * m7u * m7u - 2 * l7u * l7u + k7u * k7u));

    let r7u = 0;
    let t7u = 0;
    let u7u = 0;
    let v7u = 0;

    const dropdownu = document.getElementById("myDropdownu");
    const phaseu = dropdownu.value;

    if (phaseu === "PPP") {
        // this is for the case of P-P-P
        r7u = angle17u;
        t7u = 3.3405 * (Math.pow(10, -6)) * (i7u * i7u) * ((angle17u) * (angle17u)); 
        u7u = 3.3405 * (Math.pow(10, -6)) * (i7u * i7u) * ((ppd7u) * (ppd7u));
        v7u = 3.3405 * (Math.pow(10, -6)) * (i7u * i7u) * ((ppc7u) * (ppc7u));
    } else if (phaseu === "CPP") {
        // this is for the case of C-P-P
        r7u = angle27u;
        t7u = 3.3405 * (Math.pow(10, -6)) * (i7u * i7u) * ((angle27u) * (angle27u)); 
        u7u = 3.3405 * (Math.pow(10, -6)) * (i7u * i7u) * ((cpd7u) * (cpd7u));
        v7u = 3.3405 * (Math.pow(10, -6)) * (i7u * i7u) * ((ppc7u) * (ppc7u));
    } else if (phaseu === "CCP") {
        // this is for the case of C-C-P
        r7u = angle37u;
        t7u = 3.3405 * (Math.pow(10, -6)) * (i7u * i7u) * ((angle37u) * (angle37u)); 
        u7u = 3.3405 * (Math.pow(10, -6)) * (i7u * i7u) * ((ccd7u) * (ccd7u));
        v7u = 3.3405 * (Math.pow(10, -6)) * (i7u * i7u) * ((pcc7u) * (pcc7u));
    } else if (phaseu === "PCP") {
        // this is for the case of P-C-P
        r7u = angle47u;
        t7u = 3.3405 * (Math.pow(10, -6)) * (i7u * i7u) * ((angle47u) * (angle47u)); 
        u7u = 3.3405 * (Math.pow(10, -6)) * (i7u * i7u) * ((pcd7u) * (pcd7u));
        v7u = 3.3405 * (Math.pow(10, -6)) * (i7u * i7u) * ((pcc7u) * (pcc7u));
    }


    document.getElementById('result').innerHTML = `
   
   <div class="container">
   <div class="calculator-container1">
       <h3>Laden</h3>
        <div class="box">
           Corresponding  ${phase} Phasing The Equivalent beta angle ${r7.toFixed(2)}
        </div><br>
        <div id="betaAngle71">
           1.Torsional Excitation: ${t7.toFixed(2)} (rad/s^2),${t7.toFixed(2) <400 ? 'Safe' : 'Unsafe'}
        </div><br>
        <div id="betaAngle72">
           2.Inertia drive Excitation: ${u7.toFixed(2)} (rad/s^2),${u7.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}
        </div><br>
         <div id="betaAngle73">
           3.Inertia Coast Excitation: ${v7.toFixed(2)} (rad/s^2),${v7.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}
          </div><br>
        </div>
        <div class="calculator-container1">
        <h3>Unladen</h3>
        <div class="box">
               Corresponding  ${phaseu} Phasing The Equivalent beta angle ${r7u.toFixed(2)}
            </div><br>
            <div id="betaAngle71u">
               1.Torsional Excitation: ${t7u.toFixed(2)} (rad/s^2),${t7u.toFixed(2) <400 ? 'Safe' : 'Unsafe'}
            </div><br>
            <div id="betaAngle72u">
               2.Inertia drive Excitation: ${u7u.toFixed(2)} (rad/s^2),${u7u.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}
            </div><br>
             <div id="betaAngle73u">
               3.Inertia Coast Excitation: ${v7u.toFixed(2)} (rad/s^2),${v7u.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}
              </div><br>
        </div>
    </div>
            
     `; 
   const betaAngle71Element = document.getElementById('betaAngle71');
    if(t7 >=  400){
        betaAngle71Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle71Element.style.backgroundColor = 'green';
    }

    const betaAngle72Element = document.getElementById('betaAngle72');
    if(u7 >=  2000){
        betaAngle72Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle72Element.style.backgroundColor = 'green';
    }
    const betaAngle73Element = document.getElementById('betaAngle73');
    if(v7 >= 2000){
        betaAngle73Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle73Element.style.backgroundColor = 'green';
    }
    const betaAngle71uElement = document.getElementById('betaAngle71u');
    if(t7u >=  400){
        betaAngle71uElement.style.backgroundColor = 'red';
    }
    else{
        betaAngle71uElement.style.backgroundColor = 'green';
    }

    const betaAngle72uElement = document.getElementById('betaAngle72u');
    if(u7u >=  2000){
        betaAngle72uElement.style.backgroundColor = 'red';
    }
    else{
        betaAngle72uElement.style.backgroundColor = 'green';
    }
    const betaAngle73uElement = document.getElementById('betaAngle73u');
    if(v7u >= 2000){
        betaAngle73uElement.style.backgroundColor = 'red';
    }
    else{
        betaAngle73uElement.style.backgroundColor = 'green';
    }
}



