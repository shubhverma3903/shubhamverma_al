
function calculateEquivalentAngles() {

    const vehicleName = document.getElementById('vehicleName').value;
    const vehiclePlatform = document.getElementById('vehiclePlatform').value;
    const vehicleType = document.getElementById('vehicleType').value;
    const vehicleWheelbase = document.getElementById('vehicleWheelbase').value;
    const operationalRegion = document.getElementById('operationalRegion').value;

    //for extra dates information 
    const vehicleName2 = document.getElementById('vehicleName2').value;
    const vehicleName3 = document.getElementById('vehicleName3').value;
    const vehicleName4 = document.getElementById('vehicleName4').value;
    const vehicleName5 = document.getElementById('vehicleName5').value;

     //series selection
     const a = parseFloat(document.getElementById('angleA').value);
       const b = parseFloat(document.getElementById('angleB').value);
       const c = parseFloat(document.getElementById('angleC').value);
       const d = parseFloat(document.getElementById('angleD').value);
       const e = parseFloat(document.getElementById('angleE').value);
       const f = parseFloat(document.getElementById('angleF').value);
       const g = parseFloat(document.getElementById('angleG').value);

       const h = parseFloat(document.getElementById('angleH').value);
       const i = parseFloat(document.getElementById('angleI').value);
       const j = parseFloat(document.getElementById('angleJ').value);
       const k = parseFloat(document.getElementById('angleK').value);



          const l=Math.max(b,c);
       // 	max starting  torque(lgt)
           const p = a*l*d*0.95;

        // wheel slip torque
        const r=(g*h*i*9.81)/(e*f*1000);

        // DESIGN TORQUE
           const t= (p+r)/2;

       // max shock torque
            const q=t*j;

       //clutch drop torque
            const s=p*k;

        // series selection
        const u=Math.max(q,s);




        function Dana(k) {
            const arr = [0, 5500, 5980, 7000, 9000, 10000, 11500, 12100, 14000, 15400, 17000, 19000, 25000, 30000, 35000];
            const ram = ["SPL55", "1550", "SPL70", "SPL90", "SPL100", "1710", "C2040L", "C2040", "1710 HD", "C2045", "C2047", "C2055", "C2060", "C2065"];

            for (let i = 0; i < 14; i++) {
                if (k > arr[i] && k <= arr[i + 1]) {
                    return ram[i];
                }
            }
            return "No Series available";
        }
        function RSB(k) {
            const arr = [0, 8000, 10000, 10500, 11000, 12000, 14000, 16000, 17000, 17500, 25000, 30000,35000];
            const ram = ["225", "325", "325 HS", "325 HD", "403", "490", "590H", "590", "590L", "620", "680", "710"];

            for (let i = 0; i < 12; i++) {
                    if (k > arr[i] && k <= arr[i + 1]) {
                    return ram[i];
                }
            }
            return "No Series available";
        }
    function MSL(k) {
    const arr = [0,1098,  2170,  2400,    3065,   3500,   3661,   4515,   5500,    5966,   8500,     8679,    8814,    10848,  12100,    14000,    17000,   25000,30000];
    const ram = ["1130", "1310","130HTS", "1350", "MS20", "1410", "1480","1480HTS", "1550", "1550HTS", "1650", "1610", "1710" ,"1650HTS" ,"2040", "2045", "2055", "2060"];

            for (let i = 0; i < 18; i++) {
                if (k > arr[i] && k <= arr[i + 1]) {
                    return ram[i];
                }
            }
            return "No Series available";
        }


    //critical speed 
      const c1 = parseFloat(document.getElementById('angleC1').value);
      const d1= parseFloat(document.getElementById('angleD1').value);
      const e1 = parseFloat(document.getElementById('angleE1').value);
      const f1 = parseFloat(document.getElementById('angleF1').value);
      const g1 = parseFloat(document.getElementById('angleG1').value);

      const j1 = (c1/d1);
      const k1=((1.22)*(Math.pow(10,8))*(Math.sqrt(Math.pow(e1,2) + Math.pow(e1-(2*f1),2))))/(g1*g1);
      const dropdown = document.getElementById("myDropdown");
      const h1 = dropdown.value;

    //slip length calculation
    const a2 = parseFloat(document.getElementById('angleA2').value);
    const b2 = parseFloat(document.getElementById('angleB2').value);
    const c2 = parseFloat(document.getElementById('angleC2').value);
    const d2 = parseFloat(document.getElementById('angleD2').value);
    const f2 = parseFloat(document.getElementById('angleF2').value);

    const j2 = (a2 * a2);
    const k2 = (b2 * b2);
    const l2 = (d2 * d2);
    const e2 = ((a2 + b2) / 2) + (2 * c2) - f2 / 2;

    const m2 = (Math.sqrt(j2 + l2)) + 2 * c2;  // max length
    const n2 = (Math.sqrt(k2 + l2)) + 2 * c2;  // min length
    const o2 = e2 + f2;
    const p2 = o2 - m2;
    const q2 = n2 - e2;

    // new calculation
    const g2 = parseFloat(document.getElementById('angleG2').value);
    const h2 = parseFloat(document.getElementById('angleH2').value);

    // max length
    const r2 = g2 + h2;

    const s2 = r2 - m2;  // special condition buffer max
    const t2 = n2 - g2;  // special condition buffer min

    //torsional stiffness calculation
     const a3 = parseFloat(document.getElementById('angleA3').value);
       const b3 = parseFloat(document.getElementById('angleB3').value);
       const c3 = parseFloat(document.getElementById('angleC3').value);
       const d3 = parseFloat(document.getElementById('angleD3').value);
       const e3 = parseFloat(document.getElementById('angleE3').value);

       // Formulas
       // Inertia
       const k3 = (Math.PI / 32) * (Math.pow(a3, 4) - Math.pow(c3, 4));

       const f3 = ((a3 / 2) * (e3 / k3) * 1000);
       const g3 = ((e3 * b3 * 1000) * (180 / Math.PI) / (d3 * k3));
       const h3 = ((d3 * k3 * Math.PI) / (b3 * 9.81 * 180 * 1000));

    //bending critical angle
    const a4 = parseFloat(document.getElementById('angleA4').value);
    const b4 = parseFloat(document.getElementById('angleB4').value);
    const c4 = parseFloat(document.getElementById('angleC4').value);
    const d4 = parseFloat(document.getElementById('angleD4').value);


    // Calculate equivalent angles
    const e4 =d4*(1.21)*(Math.pow(10, 8))*Math.sqrt((Math.pow(a4, 2))+(Math.pow(b4, 2)))/Math.pow(c4, 2);

    //permissible deflection angle
    const a5 = parseFloat(document.getElementById('angleA5').value);
    const b5 = parseFloat(document.getElementById('angleB5').value);
    const c5 = parseFloat(document.getElementById('angleC5').value);


    const d5 = (Math.pow((Math.tan((a5 * Math.PI) / 180)), 2)) + (Math.pow((Math.tan((b5 * Math.PI) / 180)), 2));
    const e5 = (Math.atan(Math.sqrt(d5))) * (180 / Math.PI);
    const f5 = e5 * c5;

    //beta angle 
    const a6 = parseFloat(document.getElementById('angleA6').value);
        const b6 = parseFloat(document.getElementById('angleB6').value);
        const c6 = parseFloat(document.getElementById('angleC6').value);
        const d6 = parseFloat(document.getElementById('angleD6').value);

        // Calculate equivalent angles
        const e6 = Math.sqrt(a6 * a6 + b6 * b6);
        const f6 = Math.sqrt(c6 * c6 + d6 * d6);

        const angle1 = Math.sqrt(Math.abs((e6*e6)-(f6*f6)));
        const angle2 = Math.sqrt(Math.abs(-(e6*e6)+(f6*f6)));

        const minEquivalentAngle = Math.min(angle1,angle2);

         let s6 = "";
         if (minEquivalentAngle === angle1) {
             s6 = "P";
         } else {
             s6= "P";
         }
     //unladen
     const a6a = parseFloat(document.getElementById('angleA6a').value);
     const b6b = parseFloat(document.getElementById('angleB6b').value);
     const c6c = parseFloat(document.getElementById('angleC6c').value);
     const d6d = parseFloat(document.getElementById('angleD6d').value);

     // Calculate equivalent angles
     const e6e = Math.sqrt(a6a * a6a + b6b * b6b);
     const f6f = Math.sqrt(c6c * c6c + d6d * d6d);

     const angle1a = Math.sqrt(Math.abs((e6e*e6e)-(f6f*f6f)));
     const angle2a = Math.sqrt(Math.abs(-(e6e*e6e)+(f6f*f6f)));

     const minEquivalentAngleu = Math.min(angle1a,angle2a);

      let s6u = "";
      if (minEquivalentAngleu === angle1a) {
          s6u = "P";
      } else {
          s6u= "P";
      }

    //torsional calc
    //torsional calc
        const a7 = parseFloat(document.getElementById('angleA6').value);
        const b7 = parseFloat(document.getElementById('angleB6').value);
        const c7 = parseFloat(document.getElementById('angleC6').value);
        const d7 = parseFloat(document.getElementById('angleD6').value);
        const e7 = parseFloat(document.getElementById('angleE7').value);

        // Calculate equivalent angles
        const f7 = Math.sqrt(a7 * a7 + b7 * b7);
        const g7 = Math.sqrt(c7 * c7 + d7 * d7);

        const h7 = Math.sqrt(Math.abs((f7*f7)-(g7*g7)));
        const i7 = 3.3405*(Math.pow(10,-6))*(h7*h7)*(e7*e7);
        const j7 = 3.3405*(Math.pow(10,-6))*(f7*f7)*(e7*e7);
        const k7 = 3.3405*(Math.pow(10,-6))*(g7*g7)*(e7*e7);

     //unladen
        const a7u = parseFloat(document.getElementById('angleA6a').value);
        const b7u = parseFloat(document.getElementById('angleB6b').value);
        const c7u = parseFloat(document.getElementById('angleC6c').value);
        const d7u = parseFloat(document.getElementById('angleD6d').value);
        const e7u = parseFloat(document.getElementById('angleE7').value);

        // Calculate equivalent angles
        const f7u = Math.sqrt(a7u * a7u + b7u * b7u);
        const g7u = Math.sqrt(c7u * c7u + d7u * d7u);

        const h7u = Math.sqrt(Math.abs((f7u*f7u)-(g7u*g7u)));
        const i7u = 3.3405*(Math.pow(10,-6))*(h7u*h7u)*(e7u*e7u);
        const j7u = 3.3405*(Math.pow(10,-6))*(f7u*f7u)*(e7u*e7u);
        const k7u = 3.3405*(Math.pow(10,-6))*(g7u*g7u)*(e7u*e7u); 

   document.getElementById('result').innerHTML = `

     <div class="bo">${vehicleName}_${vehiclePlatform}_${vehicleType}_${vehicleWheelbase}_${operationalRegion}</div><br>
    <div class="container">
      <div class="calculator-container1">
          <h3>SERIES SELECTION</h3>
          <div class="box">1. MAX.STARTING TORQUE(LGT): ${p.toFixed(2)} (Nm)</div><br>
          <div class="box">2. WHEEL SLIP TORQUE: ${r.toFixed(2)} (Nm)</div><br>
          <div class="box">3. DESIGN TORQUE: ${t.toFixed(2)} (Nm)</div><br>
          <div class="box">4. MAX.SHOCK TORQUE : ${q.toFixed(2)} (Nm)</div><br>
          <div class="box">5. CLUTCH DROP TORQUE: ${s.toFixed(2)} (Nm)</div><br>
          <div class="box1">DANA: ${Dana(u)} </div><br>
          <div class="box1">RSB: ${RSB(u)} </div><br>
          <div class="box1">MSL: ${MSL(u)}</div><br><hr>

         <h3>CRITICAL SPEED</h3>
         <div class="box">1.PROPELLER SHAFT MAX.SPEED : ${j1.toFixed(2)} (rpm) </div><br>
         <div class="box"> 2.CRITICAL SPEED: ${k1.toFixed(2)} (rpm)</div><br>
         <div class="box">3.DESIGN CRITICAL SPEED: ${(k1*h1).toFixed(2)} (rpm)</div><br>
         <div class="box">4.ALLOWABLE CRITICAL SPEED: ${(k1*h1*0.75).toFixed(2)} (rpm)</div><br>
         <div class="box" id="betaAngle"> Against Critical Speed, The Propeller Shaft is : ${(k1*h1*0.75) >= j1 ? 'Safe' : 'Unsafe'}</div><hr>

        </div>
        <div class="calculator-container1">
         <h3>SLIP LENGTH CALCULATOR</h3>
         <div class="box">1.REQUIRED COLLLAPSED LENGTH: ${e2.toFixed(2)}</div><br>
         <div class="box" id="betaAngle21">2.BUFFER AVAILABLE IN MAX.OPENING CONDITION : ${p2.toFixed(2)} (mm) , ${p2.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div><br>
         <div class="box" id="betaAngle22">3.BUFFER AVAILABLE IN MIN.OPENING CONDITION : ${q2.toFixed(2)} (mm) , ${q2.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div><br>
         <h5>Output From Existing Part</h5>
         <div class="box" id="betaAngle23">1.BUFFER AVAILABLE IN max.OPENING CONDITION : ${s2.toFixed(2)} (mm) , ${s2.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div><br>
        <div class="box" id="betaAngle24">2.BUFFER AVAILABLE IN MIN.OPENING CONDITION : ${t2.toFixed(2)} (mm) , ${t2.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div><hr>


         <h3>TORSIONAL STIFFNESS</h3>
         <div class="box">1.SHEAR STRESS: ${f3.toFixed(2)} (deg.)</div><br>
          <div class="box">2.MAX.ANGLE OF TWIST: ${g3.toFixed(2)} (rad)</div><br>
          <div class="box">3.TORSIONAL SIFFNESS: ${h3.toFixed(2)} (kg)</div><br><hr>
    </div>
    <div class="calculator-container1">
         <h3>BENDING CRITICAL ANGLE</h3>
         <div class="box">1.Deflection Angle: ${e4.toFixed(2)}</div><br><hr>
         <h3>PERMISSIBLE DEFLECTION ANGLE</h3>
         <div id="betaAngle5">1.Deflection Angle: ${e5.toFixed(2)}</div><br>
         <div id="BetaAngle5">2.Speed x Deflection Angle: ${f5.toFixed(2)}</div><hr>
       <h3>BETA ANGLE CALCULATOR</h3>
           <div class="container2">
            <div class="calculator-container2">
            <h3>laden </h3>
           <div class="box">1.True Joint angle of 1st UJ: ${e6.toFixed(2)}</div><br>
           <div class="box">2.True Joint angle of 2nd UJ: ${f6.toFixed(2)}</div><br>
           <div class="box">1.Equivalent angle 1(+-): ${(Math.sqrt(Math.abs((e6*e6)-(f6*f6)))).toFixed(2)}</div><br> 
           <div class="box">2.Equivalent angle 2(-+): ${(Math.sqrt(Math.abs(-(e6*e6)+(f6*f6)))).toFixed(2)}</div><br> 
           <div id="betaAngle6">The Recommended Beta angle is : ${minEquivalentAngle.toFixed(2)}  ,${minEquivalentAngle.toFixed(2) <=3 ? 'Safe' : 'Unsafe'}, Phasing : ${s6} </div>
           </div>
           <div class="calculator-container2">
           <h3>unladen </h3>
           <div class="box">1.True Joint angle of 1st UJ: ${e6e.toFixed(2)}</div><br>
           <div class="box">2.True Joint angle of 2nd UJ: ${f6f.toFixed(2)}</div><br>
           <div class="box">1.Equivalent angle 1(+-): ${(Math.sqrt(Math.abs((e6e*e6e)-(f6f*f6f)))).toFixed(2)} </div><br> 
           <div class="box">2.Equivalent angle 2(-+): ${(Math.sqrt(Math.abs(-(e6e*e6e)+(f6f*f6f)))).toFixed(2)}</div><br> 
           <div id="betaAngle6u">The Recommended Beta angle is : ${minEquivalentAngleu.toFixed(2)}  ,${minEquivalentAngleu.toFixed(2) <=3 ? 'Safe' : 'Unsafe'}, Phasing : ${s6u} </div>
           </div>
          </div>
          <hr>
    </div>
   <div class="calculator-container1">
        <h3>TORSIONAL CALCULATOR</h3>
        <div class="container2">
        <div class="calculator-container2">
           <h3>laden </h3>
           <div id="betaAngle71">1.Torsional Excitation: ${i7.toFixed(2)} (rad/s^2), ${i7.toFixed(2) <400 ? 'Safe' : 'Unsafe'}</div><br>
           <div id="betaAngle72">2.Inertia drive Excitation: ${j7.toFixed(2)} (rad/s^2), ${j7.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
           <div id="betaAngle73">3.Inertia Coast Excitation: ${k7.toFixed(2)} (rad/s^2), ${k7.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
           </div>
           <div class="calculator-container2">
           <h3>unladen </h3>
           <div id="betaAngle71u">1.Torsional Excitation: ${i7u.toFixed(2)} (rad/s^2), ${i7u.toFixed(2) <400 ? 'Safe' : 'Unsafe'}</div><br>
           <div id="betaAngle72u">2.Inertia drive Excitation: ${j7u.toFixed(2)} (rad/s^2), ${j7u.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
           <div id="betaAngle73u">3.Inertia Coast Excitation: ${k7u.toFixed(2)} (rad/s^2), ${k7u.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
           </div>
            </div>
            <hr>
            <hr>
            <h4>Extra part</h4>
            <div class="box">Date/Rev: => ${vehicleName2}</div><br>
            <div class="box">Prepared By: => ${vehicleName3}</div><br>
            <div class="box">Reviewed by: => ${vehicleName4}</div><br>
            <div class="box">Approved by: => ${vehicleName5}</div><br>
     </div>
   </div>
`;  
    const betaAngleElement = document.getElementById('betaAngle');
       if ((k1*h1*0.75) <= j) {
           betaAngleElement.style.backgroundColor = 'red';
       } else {
           betaAngleElement.style.backgroundColor = 'green';
       }

     const betaAngle21Element = document.getElementById('betaAngle21');
       if (p2 < 10) {
           betaAngle21Element.style.backgroundColor = 'red';
       } else {
           betaAngle21Element.style.backgroundColor = 'green';
       }

      const betangle22Element = document.getElementById('betaAngle22');
       if (q2 < 10) {
           betangle22Element.style.backgroundColor = 'red';
       } else {
           betangle22Element.style.backgroundColor = 'green';
       }
         const betaAngle23Element = document.getElementById('betaAngle23');
           if (s2 < 10) {
               betaAngle23Element.style.backgroundColor = 'red';
           } else {
               betaAngle23Element.style.backgroundColor = 'green';
           }

          const betangle24Element = document.getElementById('betaAngle24');
           if (t2 < 10) {
               betangle24Element.style.backgroundColor = 'red';
           } else {
               betangle24Element.style.backgroundColor = 'green';
           }

    const betaAngle5Element = document.getElementById('betaAngle5');
    if (e5 > 10) {
        betaAngle5Element.style.backgroundColor = 'red';
    } else {
        betaAngle5Element.style.backgroundColor = 'green';
    }

    const BetaAngle5Element = document.getElementById('BetaAngle5');
    if (f5 > 22000) {
        BetaAngle5Element.style.backgroundColor = 'red';
    } else {
        BetaAngle5Element.style.backgroundColor = 'green';
    }

    const betaAngle6Element = document.getElementById('betaAngle6');

        // Check the value of minEquivalentAngle
        if (minEquivalentAngle > 3) {
            betaAngle6Element.style.backgroundColor = 'red';
        } else {
            betaAngle6Element.style.backgroundColor = 'green';
        }
      const betaAngle6uElement = document.getElementById('betaAngle6u');

         // Check the value of minEquivalentAngle
         if (minEquivalentAngleu > 3) {
             betaAngle6uElement.style.backgroundColor = 'red';
         } else {
             betaAngle6uElement.style.backgroundColor = 'green';
         }

    const betaAngle71Element = document.getElementById('betaAngle71');
    if(i7 >=  400){
        betaAngle71Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle71Element.style.backgroundColor = 'green';
    }

    const betaAngle72Element = document.getElementById('betaAngle72');
    if(j7 >=  2000){
        betaAngle72Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle72Element.style.backgroundColor = 'green';
    }
    const betaAngle73Element = document.getElementById('betaAngle73');
    if(k7 >= 2000){
        betaAngle73Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle73Element.style.backgroundColor = 'green';
    }
    const betaAngle71uElement = document.getElementById('betaAngle71u');
     if(i7u >=  400){
         betaAngle71uElement.style.backgroundColor = 'red';
     }
     else{
         betaAngle71uElement.style.backgroundColor = 'green';
     }

     const betaAngle72uElement = document.getElementById('betaAngle72u');
     if(j7u >=  2000){
         betaAngle72Element.style.backgroundColor = 'red';
     }
     else{
         betaAngle72uElement.style.backgroundColor = 'green';
     }
     const betaAngle73uElement = document.getElementById('betaAngle73u');
     if(k7u >= 2000){
         betaAngle73uElement.style.backgroundColor = 'red';
     }
     else{
         betaAngle73uElement.style.backgroundColor = 'green';
     }

}

function printPage() {
    window.print();
}
function refreshContent() {
    window.location.reload();
}


