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
    const j7 = parseFloat(document.getElementById('angleJ7').value);
    const i71 = parseFloat(document.getElementById('angleK78').value); //SPEED
    // Calculate equivalent angles
    const k7 = Math.sqrt(a7 * a7 + b7 * b7);
    const l7 = Math.sqrt(c7 * c7 + d7 * d7);
    const m7 = Math.sqrt(e7 * e7 + f7 * f7);
    const n7 = Math.sqrt(g7 * g7 + h7 * h7);
    const o7 = Math.sqrt(i7 * i7 + j7 * j7);


    const angle17 = Math.sqrt(Math.abs((k7 * k7) - (l7 * l7) - (m7 * m7) - (n7 * n7) + (o7 * o7)));  //P-C-C-P
    const angle27 = Math.sqrt(Math.abs((k7 * k7) + (l7 * l7) - (m7 * m7) - (n7 * n7) + (o7 * o7)));  //C-P-C-P
    const angle37 = Math.sqrt(Math.abs((k7 * k7) + (l7 * l7) + (m7 * m7) - (n7 * n7) + (o7 * o7)));   //C-C-P-P
    const angle47 = Math.sqrt(Math.abs((k7 * k7) + (l7* l7) + (m7 * m7) + (n7 * n7) - (o7 * o7)));   //C-C-C-P
    const angle57 = Math.sqrt(Math.abs((k7 * k7) - (l7 * l7) + (m7 * m7) + (n7 * n7) - (o7 * o7)));  //P-P-C-P
    const angle67 = Math.sqrt(Math.abs(-(k7 * k7) + (l7 * l7) - (m7 * m7) + (n7 * n7) - (o7 * o7)));  //P-P-P-P
    const angle77 = Math.sqrt(Math.abs((k7 * k7) + (l7 * l7) - (m7 * m7) + (n7 * n7) - (o7 * o7)));   //C-P-P-P
    const angle87 = Math.sqrt(Math.abs((k7 * k7) - (l7 * l7) - (m7 * m7) + (n7 * n7) - (o7 * o7)));   //P-C-P-P

    const p7 = Math.min(angle17, angle27);
    const q7 = Math.min(angle37, angle47);
    const r7 = Math.min(angle57, angle67);
    const s7 = Math.min(angle77, angle87);
    const t7 = Math.min(p7, q7);
    const u7 = Math.min(r7, s7);
    const minEquivalentAngle = Math.min(t7, u7);   

       const pppd7=Math.sqrt(Math.abs(4*k7*k7 - 3*l7*l7 + 2*m7*m7 - n7*n7));
       const pppc7=Math.sqrt(Math.abs(4*o7*o7 - 3*n7*n7 + 2*m7*m7 - l7*l7));

       const cppd7=Math.sqrt(Math.abs(4*k7*k7 + 3*l7*l7 - 2*m7*m7 + n7*n7));
       const cppc7=Math.sqrt(Math.abs(4*o7*o7 + 3*n7*n7 - 2*m7*m7 + l7*l7));

       const pcpd7=Math.sqrt(Math.abs(4*k7*k7 - 3*l7*l7 - 2*m7*m7 + n7*n7));
       const pcpc7=Math.sqrt(Math.abs(4*o7*o7 - 3*n7*n7 - 2*m7*m7 + l7*l7));

       const ppcd7=Math.sqrt(Math.abs(4*k7*k7 - 3*l7*l7 + 2*m7*m7 + n7*n7));
       const ppcc7=Math.sqrt(Math.abs(4*o7*o7 - 3*n7*n7 + 2*m7*m7 + l7*l7));

       const ccpd7=Math.sqrt(Math.abs(4*k7*k7 + 3*l7*l7 + 2*m7*m7 - n7*n7));
       const ccpc7=Math.sqrt(Math.abs(4*o7*o7 + 3*n7*n7 + 2*m7*m7 - l7*l7));

       const cpcd7=Math.sqrt(Math.abs(4*k7*k7 + 3*l7*l7 - 2*m7*m7 - n7*n7));
       const cpcc7=Math.sqrt(Math.abs(4*o7*o7 + 3*n7*n7 - 2*m7*m7 - l7*l7));

       const pccd7=Math.sqrt(Math.abs(4*k7*k7 - 3*l7*l7 - 2*m7*m7 - n7*n7));
       const pccc7=Math.sqrt(Math.abs(4*o7*o7 - 3*n7*n7 - 2*m7*m7 - l7*l7));

       const cccd7=Math.sqrt(Math.abs(4*k7*k7 + 3*l7*l7 + 2*m7*m7 + n7*n7));
       const cccc7=Math.sqrt(Math.abs(4*o7*o7 + 3*n7*n7 + 2*m7*m7 + l7*l7));

       let r71=0;
       let t71=0;
       let u71=0;
       let v71=0;
      const dropdown = document.getElementById("myDropdown");
      const phase = dropdown.value;
     if(phase==="PCCP"){
           r71=angle17;
           t71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((angle17)*(angle17)); 
           u71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((pccd7)*(pccd7));
           v71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((pccc7)*(pccc7));
     }
     else if(phase==="CPCP"){
        r71=angle27;
        t71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((angle27)*(angle27)); 
        u71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((cpcd7)*(cpcd7));
        v71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((pcpc7)*(pcpc7));
     }
     else if(phase==="CCPP"){
        r71=angle37;
        t71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((angle37)*(angle37)); 
        u71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((ccpd7)*(ccpd7));
        v71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((ppcc7)*(ppcc7));
     }
      else if(phase==="CCCP"){
        r71=angle47;
        t71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((angle47)*(angle47)); 
        u71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((cccd7)*(cccd7));
        v71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((pccc7)*(pccc7));
     }
     else if(phase==="PPCP"){
        r71=angle57;
        t71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((angle57)*(angle57)); 
        u71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((ppcd7)*(ppcd7));
        v71= 3.3405*(Math.pow(10,-6))*(i71*i71)*((pcpc7)*(pcpc7));
     }
     else if(phase==="PPPP"){
        r71=angle67;
        t71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((angle67)*(angle67)); 
        u71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((pppd7)*(pppd7));
        v71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((pppc7)*(pppc7));
     }
     else if(phase=== "CPPP"){ 
        r71=angle77;
        t71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((angle77)*(angle77)); 
        u71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((cppd7)*(cppd7));
        v71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((pppc7)*(pppc7));
     }
     else if(phase==="PCPP"){
        r71=angle87;
        t71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((angle87)*(angle87)); 
        u71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((pcpd7)*(pcpd7));
        v71 = 3.3405*(Math.pow(10,-6))*(i71*i71)*((ppcc7)*(ppcc7));
   }


   // unladen

   // Fetch input values from HTML form
   const a7u = parseFloat(document.getElementById('angleA7u').value);
   const b7u = parseFloat(document.getElementById('angleB7u').value);
   const c7u = parseFloat(document.getElementById('angleC7u').value);
   const d7u = parseFloat(document.getElementById('angleD7u').value);
   const e7u = parseFloat(document.getElementById('angleE7u').value);
   const f7u = parseFloat(document.getElementById('angleF7u').value);
   const g7u = parseFloat(document.getElementById('angleG7u').value);
   const h7u = parseFloat(document.getElementById('angleH7u').value);
   const i7u = parseFloat(document.getElementById('angleI7u').value);
   const j7u = parseFloat(document.getElementById('angleJ7u').value);
   const i71u = parseFloat(document.getElementById('angleK78u').value); // SPEED

   // Calculate equivalent angles
   const k7u = Math.sqrt(a7u * a7u + b7u * b7u);
   const l7u = Math.sqrt(c7u * c7u + d7u * d7u);
   const m7u = Math.sqrt(e7u * e7u + f7u * f7u);
   const n7u = Math.sqrt(g7u * g7u + h7u * h7u);
   const o7u = Math.sqrt(i7u * i7u + j7u * j7u);

   const angle17u = Math.sqrt(Math.abs((k7u * k7u) - (l7u * l7u) - (m7u * m7u) - (n7u * n7u) + (o7u * o7u)));  // P-C-C-P
   const angle27u = Math.sqrt(Math.abs((k7u * k7u) + (l7u * l7u) - (m7u * m7u) - (n7u * n7u) + (o7u * o7u)));  // C-P-C-P
   const angle37u = Math.sqrt(Math.abs((k7u * k7u) + (l7u * l7u) + (m7u * m7u) - (n7u * n7u) + (o7u * o7u)));  // C-C-P-P
   const angle47u = Math.sqrt(Math.abs((k7u * k7u) + (l7u * l7u) + (m7u * m7u) + (n7u * n7u) - (o7u * o7u)));  // C-C-C-P
   const angle57u = Math.sqrt(Math.abs((k7u * k7u) - (l7u * l7u) + (m7u * m7u) + (n7u * n7u) - (o7u * o7u)));  // P-P-C-P
   const angle67u = Math.sqrt(Math.abs(-(k7u * k7u) + (l7u * l7u) - (m7u * m7u) + (n7u * n7u) - (o7u * o7u)));  // P-P-P-P
   const angle77u = Math.sqrt(Math.abs((k7u * k7u) + (l7u * l7u) - (m7u * m7u) + (n7u * n7u) - (o7u * o7u)));  // C-P-P-P
   const angle87u = Math.sqrt(Math.abs((k7u * k7u) - (l7u * l7u) - (m7u * m7u) + (n7u * n7u) - (o7u * o7u)));  // P-C-P-P

   const p7u = Math.min(angle17u, angle27u);
   const q7u = Math.min(angle37u, angle47u);
   const r7u = Math.min(angle57u, angle67u);
   const s7u = Math.min(angle77u, angle87u);
   const t7u = Math.min(p7u, q7u);
   const u7u = Math.min(r7u, s7u);
   const minEquivalentAngleu = Math.min(t7u, u7u);

   const pppd7u = Math.sqrt(Math.abs(4 * k7u * k7u - 3 * l7u * l7u + 2 * m7u * m7u - n7u * n7u));
   const pppc7u = Math.sqrt(Math.abs(4 * o7u * o7u - 3 * n7u * n7u + 2 * m7u * m7u - l7u * l7u));

   const cppd7u = Math.sqrt(Math.abs(4 * k7u * k7u + 3 * l7u * l7u - 2 * m7u * m7u + n7u * n7u));
   const cppc7u = Math.sqrt(Math.abs(4 * o7u * o7u + 3 * n7u * n7u - 2 * m7u * m7u + l7u * l7u));

   const pcpd7u = Math.sqrt(Math.abs(4 * k7u * k7u - 3 * l7u * l7u - 2 * m7u * m7u + n7u * n7u));
   const pcpc7u = Math.sqrt(Math.abs(4 * o7u * o7u - 3 * n7u * n7u - 2 * m7u * m7u + l7u * l7u));

   const ppcd7u = Math.sqrt(Math.abs(4 * k7u * k7u - 3 * l7u * l7u + 2 * m7u * m7u + n7u * n7u));
   const ppcc7u = Math.sqrt(Math.abs(4 * o7u * o7u - 3 * n7u * n7u + 2 * m7u * m7u + l7u * l7u));

   const ccpd7u = Math.sqrt(Math.abs(4 * k7u * k7u + 3 * l7u * l7u + 2 * m7u * m7u - n7u * n7u));
   const ccpc7u = Math.sqrt(Math.abs(4 * o7u * o7u + 3 * n7u * n7u + 2 * m7u * m7u - l7u * l7u));

   const cpcd7u = Math.sqrt(Math.abs(4 * k7u * k7u + 3 * l7u * l7u - 2 * m7u * m7u - n7u * n7u));
   const cpcc7u = Math.sqrt(Math.abs(4 * o7u * o7u + 3 * n7u * n7u - 2 * m7u * m7u - l7u * l7u));

   const pccd7u = Math.sqrt(Math.abs(4 * k7u * k7u - 3 * l7u * l7u - 2 * m7u * m7u - n7u * n7u));
   const pccc7u = Math.sqrt(Math.abs(4 * o7u * o7u - 3 * n7u * n7u - 2 * m7u * m7u - l7u * l7u));

   const cccd7u = Math.sqrt(Math.abs(4 * k7u * k7u + 3 * l7u * l7u + 2 * m7u * m7u + n7u * n7u));
   const cccc7u = Math.sqrt(Math.abs(4 * o7u * o7u + 3 * n7u * n7u + 2 * m7u * m7u + l7u * l7u));

   let r71u = 0;
   let t71u = 0;
   let u71u = 0;
   let v71u = 0;
   const dropdownu = document.getElementById("myDropdownu");
   const phaseu = dropdownu.value;

   if (phaseu === "PCCP") {
       r71u = angle17u;
       t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((angle17u) * (angle17u));
       u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((pccd7u) * (pccd7u));
       v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((pccc7u) * (pccc7u));
   } else if (phaseu === "CPCP") {
       r71u = angle27u;
       t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((angle27u) * (angle27u));
       u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((cpcd7u) * (cpcd7u));
       v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((cpcc7u) * (cpcc7u));
   } else if (phaseu === "CCPP") {
       r71u = angle37u;
       t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((angle37u) * (angle37u));
       u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((ccpd7u) * (ccpd7u));
       v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((ccpc7u) * (ccpc7u));
   } else if (phaseu === "CCCP") {
       r71u = angle47u;
       t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((angle47u) * (angle47u));
       u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((cccd7u) * (cccd7u));
       v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((cccc7u) * (cccc7u));
   } else if (phaseu === "PPCP") {
       r71u = angle57u;
       t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((angle57u) * (angle57u));
       u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((ppcd7u) * (ppcd7u));
       v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((ppcc7u) * (ppcc7u));
   } else if (phaseu === "PPPP") {
       r71u = angle67u;
       t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((angle67u) * (angle67u));
       u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((pppd7u) * (pppd7u));
       v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((pppc7u) * (pppc7u));
   } else if (phaseu === "CPPP") {
       r71u = angle77u;
       t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((angle77u) * (angle77u));
       u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((pcpd7u) * (pcpd7u));
       v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((pcpc7u) * (pcpc7u));
   } else if (phaseu === "PCPP") {
       r71u = angle87u;
       t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((angle87u) * (angle87u));
       u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((pccd7u) * (pccd7u));
       v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * ((pccc7u) * (pccc7u));
   }


   
    document.getElementById('result').innerHTML = `
   
   <div class="container">
   <div class="calculator-container">
         <h3>Laden  </h3>
        <div class="box">
           Corresponding  ${phase} Phasing The Equivalent beta angle ${r71.toFixed(2)}
        </div><br>
        <div id="betaAngle71">
           1.Torsional Excitation: ${t71.toFixed(2)} (rad/s^2),${t71.toFixed(2) <400 ? 'Safe' : 'Unsafe'}
        </div><br>
        <div id="betaAngle72">
           2.Inertia drive Excitation: ${u71.toFixed(2)} (rad/s^2),${u71.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}
        </div><br>
         <div id="betaAngle73">
           3.Inertia Coast Excitation: ${v71.toFixed(2)} (rad/s^2),${v71.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}
          </div><br>
      </div>
       <div class="calculator-container">
       <h3>Unladen</h3>
       <div class="box">
            Corresponding  ${phaseu} Phasing The Equivalent beta angle ${r71u.toFixed(2)}
         </div><br>
         <div id="betaAngle71u">
            1.Torsional Excitation: ${t71u.toFixed(2)} (rad/s^2),${t71u.toFixed(2) <400 ? 'Safe' : 'Unsafe'}
         </div><br>
         <div id="betaAngle72u">
            2.Inertia drive Excitation: ${u71u.toFixed(2)} (rad/s^2),${u71u.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}
         </div><br>
          <div id="betaAngle73u">
            3.Inertia Coast Excitation: ${v71u.toFixed(2)} (rad/s^2),${v71u.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}
           </div><br>
            </div>
            </div>


     `;
   const betaAngle71Element = document.getElementById('betaAngle71');
    if(t71 >=  400){
        betaAngle71Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle71Element.style.backgroundColor = 'green';
    }

    const betaAngle72Element = document.getElementById('betaAngle72');
    if(u71 >=  2000){
        betaAngle72Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle72Element.style.backgroundColor = 'green';
    }
    const betaAngle73Element = document.getElementById('betaAngle73');
    if(v71 >= 2000){
        betaAngle73Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle73Element.style.backgroundColor = 'green';
    }
   const betaAngle71uElement = document.getElementById('betaAngle71u');
    if(t71u >=  400){
        betaAngle71uElement.style.backgroundColor = 'red';
    }
    else{
        betaAngle71uElement.style.backgroundColor = 'green';
    }

    const betaAngle72uElement = document.getElementById('betaAngle72u');
    if(u71u >=  2000){
        betaAngle72uElement.style.backgroundColor = 'red';
    }
    else{
        betaAngle72uElement.style.backgroundColor = 'green';
    }
    const betaAngle73uElement = document.getElementById('betaAngle73u');
    if(v71u >= 2000){
        betaAngle73uElement.style.backgroundColor = 'red';
    }
    else{
        betaAngle73uElement.style.backgroundColor = 'green';
    }
}



