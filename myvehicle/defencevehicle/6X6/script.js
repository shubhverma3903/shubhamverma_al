
function calculateEquivalentAngles() {

    const vehicleName = document.getElementById('vehicleName').value;
    const vehicleName1 = document.getElementById('vehicleName1').value;

    ///extra 
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


    //shaft validation
    // Input angles (replace with actual values)
      const c111 = parseFloat(document.getElementById('angleC111').value);
      const d111 = parseFloat(document.getElementById('angleD111').value);
      const e111 = parseFloat(document.getElementById('angleE111').value);
      const f111 = parseFloat(document.getElementById('angleF111').value);
      const g111 = parseFloat(document.getElementById('angleG111').value);
      // Calculate equivalent angles
      const j111 = (c111/d111);

      const k111=((1.22)*(Math.pow(10,8))*(Math.sqrt(Math.pow(e111,2) + Math.pow(e111-(2*f111),2))))/(g111*g111);

      const dropdown111 = document.getElementById("myDropdown111");
      const h111 = dropdown111.value;

      // Input angles (replace with actual values)
      //const c112 = parseFloat(document.getElementById('angleC112').value);
      //const d112 = parseFloat(document.getElementById('angleD112').value);
      const e112 = parseFloat(document.getElementById('angleE112').value);
      const f112 = parseFloat(document.getElementById('angleF112').value);
      const g112 = parseFloat(document.getElementById('angleG112').value);
      // Calculate equivalent angles
      //const j112 = (c112/d112);

      const k112=((1.22)*(Math.pow(10,8))*(Math.sqrt(Math.pow(e112,2) + Math.pow(e112-(2*f112),2))))/(g112*g112);

      const dropdown112 = document.getElementById("myDropdown112");
      const h112 = dropdown112.value;

      // Input angles (replace with actual values)
      //const c113 = parseFloat(document.getElementById('angleC113').value);
      //const d113 = parseFloat(document.getElementById('angleD113').value);
      const e113 = parseFloat(document.getElementById('angleE113').value);
      const f113 = parseFloat(document.getElementById('angleF113').value);
      const g113 = parseFloat(document.getElementById('angleG113').value);
      // Calculate equivalent angles
      //const j113 = (c113/d113);

      const k113=((1.22)*(Math.pow(10,8))*(Math.sqrt(Math.pow(e113,2) + Math.pow(e113-(2*f113),2))))/(g113*g113);

      const dropdown113 = document.getElementById("myDropdown113");
      const h113 = dropdown113.value;

      // Input angles (replace with actual values)
      //const c114 = parseFloat(document.getElementById('angleC114').value);
      //const d114 = parseFloat(document.getElementById('angleD114').value);
      const e114 = parseFloat(document.getElementById('angleE114').value);
      const f114 = parseFloat(document.getElementById('angleF114').value);
      const g114 = parseFloat(document.getElementById('angleG114').value);
      // Calculate equivalent angles
      //const j114 = (c114/d114);

      const k114=((1.22)*(Math.pow(10,8))*(Math.sqrt(Math.pow(e114,2) + Math.pow(e114-(2*f114),2))))/(g114*g114);

      const dropdown114 = document.getElementById("myDropdown114");
      const h114 = dropdown114.value;

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

    //beta angle for GB to AGB
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

    //unladen
    const a6i = parseFloat(document.getElementById('angleA6i').value);
    const b6i = parseFloat(document.getElementById('angleB6i').value);
    const c6i = parseFloat(document.getElementById('angleC6i').value);
    const d6i = parseFloat(document.getElementById('angleD6i').value);

    // Calculate equivalent angles for GB to AGB
    const e6i = Math.sqrt(a6i * a6i + b6i * b6i);
    const f6i = Math.sqrt(c6i * c6i + d6i * d6i);

    const angle1i = Math.sqrt(Math.abs((e6i * e6i) - (f6i * f6i)));
    const angle2i = Math.sqrt(Math.abs(-(e6i * e6i) + (f6i * f6i)));

    const minEquivalentAnglei = Math.min(angle1i, angle2i);

        //beta angle for AGB to RA1
           const a61 = parseFloat(document.getElementById('angleA61').value);
           const b61 = parseFloat(document.getElementById('angleB61').value);
           const c61 = parseFloat(document.getElementById('angleC61').value);
           const d61 = parseFloat(document.getElementById('angleD61').value);

           // Calculate equivalent angles
           const e61 = Math.sqrt(a61 * a61 + b61 * b61);
           const f61 = Math.sqrt(c61 * c61 + d61 * d61);

           const angle11 = Math.sqrt(Math.abs((e61*e61)-(f61*f61)));
           const angle21 = Math.sqrt(Math.abs(-(e61*e61)+(f61*f61)));

           const minEquivalentAngle1 = Math.min(angle11,angle21);

    //unladen
    const a61i = parseFloat(document.getElementById('angleA61i').value);
    const b61i = parseFloat(document.getElementById('angleB61i').value);
    const c61i = parseFloat(document.getElementById('angleC61i').value);
    const d61i = parseFloat(document.getElementById('angleD61i').value);

    // Calculate equivalent angles for AGB to RA1
    const e61i = Math.sqrt(a61i * a61i + b61i * b61i);
    const f61i = Math.sqrt(c61i * c61i + d61i * d61i);

    const angle11i = Math.sqrt(Math.abs((e61i * e61i) - (f61i * f61i)));
    const angle21i = Math.sqrt(Math.abs(-(e61i * e61i) + (f61i * f61i)));

    const minEquivalentAngle1i = Math.min(angle11i, angle21i);
    
       //beta angle for RA1 to RA2 
       const a62 = parseFloat(document.getElementById('angleA62').value);
       const b62 = parseFloat(document.getElementById('angleB62').value);
       const c62 = parseFloat(document.getElementById('angleC62').value);
       const d62 = parseFloat(document.getElementById('angleD62').value);

       // Calculate equivalent angles
       const e62 = Math.sqrt(a62 * a62 + b62 * b62);
       const f62 = Math.sqrt(c62 * c62 + d62 * d62);

       const angle12 = Math.sqrt(Math.abs((e62*e62)-(f62*f62)));
       const angle22 = Math.sqrt(Math.abs(-(e62*e62)+(f62*f62)));

       const minEquivalentAngle2 = Math.min(angle12,angle22);

    // unladen
    const a62i = parseFloat(document.getElementById('angleA62i').value);
    const b62i = parseFloat(document.getElementById('angleB62i').value);
    const c62i = parseFloat(document.getElementById('angleC62i').value);
    const d62i = parseFloat(document.getElementById('angleD62i').value);

    // Calculate equivalent angles for RA1 to RA2
    const e62i = Math.sqrt(a62i * a62i + b62i * b62i);
    const f62i = Math.sqrt(c62i * c62i + d62i * d62i);

    const angle12i = Math.sqrt(Math.abs((e62i * e62i) - (f62i * f62i)));
    const angle22i = Math.sqrt(Math.abs(-(e62i * e62i) + (f62i * f62i)));

    const minEquivalentAngle2i = Math.min(angle12i, angle22i);


    //beta angle for AGB to FA 
       const a63 = parseFloat(document.getElementById('angleA63').value);
       const b63 = parseFloat(document.getElementById('angleB63').value);
       const c63 = parseFloat(document.getElementById('angleC63').value);
       const d63 = parseFloat(document.getElementById('angleD63').value);

       // Calculate equivalent angles
       const e63 = Math.sqrt(a63 * a63 + b63 * b63);
       const f63 = Math.sqrt(c63 * c63 + d63 * d63);

       const angle13 = Math.sqrt(Math.abs((e63*e63)-(f63*f63)));
       const angle23 = Math.sqrt(Math.abs(-(e63*e63)+(f63*f63)));

       const minEquivalentAngle3 = Math.min(angle13,angle23);

    //unladen
    const a63i = parseFloat(document.getElementById('angleA63i').value);
    const b63i = parseFloat(document.getElementById('angleB63i').value);
    const c63i = parseFloat(document.getElementById('angleC63i').value);
    const d63i = parseFloat(document.getElementById('angleD63i').value);

    // Calculate equivalent angles for AGB to FA
    const e63i = Math.sqrt(a63i * a63i + b63i * b63i);
    const f63i = Math.sqrt(c63i * c63i + d63i * d63i);

    const angle13i = Math.sqrt(Math.abs((e63i * e63i) - (f63i * f63i)));
    const angle23i = Math.sqrt(Math.abs(-(e63i * e63i) + (f63i * f63i)));

    const minEquivalentAngle3i = Math.min(angle13i, angle23i);

    //torsional calc
    //GB to AGB 
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

    // GB to AGB
    const a7i = parseFloat(document.getElementById('angleA6i').value);
    const b7i = parseFloat(document.getElementById('angleB6i').value);
    const c7i = parseFloat(document.getElementById('angleC6i').value);
    const d7i = parseFloat(document.getElementById('angleD6i').value);
    const e7i = parseFloat(document.getElementById('angleE7').value);

    // Calculate equivalent angles
    const f7i = Math.sqrt(a7i * a7i + b7i * b7i);
    const g7i = Math.sqrt(c7i * c7i + d7i * d7i);

    const h7i = Math.sqrt(Math.abs((f7i * f7i) - (g7i * g7i)));
    const i7i = 3.3405 * (Math.pow(10, -6)) * (h7i * h7i) * (e7i * e7i);
    const j7i = 3.3405 * (Math.pow(10, -6)) * (f7i * f7i) * (e7i * e7i);
    const k7i = 3.3405 * (Math.pow(10, -6)) * (g7i * g7i) * (e7i * e7i);
    //AGB to RA1 
         const a71 = parseFloat(document.getElementById('angleA61').value);
         const b71 = parseFloat(document.getElementById('angleB61').value);
         const c71 = parseFloat(document.getElementById('angleC61').value);
         const d71 = parseFloat(document.getElementById('angleD61').value);
         const e71 = parseFloat(document.getElementById('angleE7').value);

         // Calculate equivalent angles
         const f71 = Math.sqrt(a71 * a71 + b71 * b71);
         const g71 = Math.sqrt(c71 * c71 + d71 * d71);

         const h71 = Math.sqrt(Math.abs((f71*f71)-(g71*g71)));
         const i71 = 3.3405*(Math.pow(10,-6))*(h71*h71)*(e71*e71);
         const j71 = 3.3405*(Math.pow(10,-6))*(f71*f71)*(e71*e71);
         const k71 = 3.3405*(Math.pow(10,-6))*(g71*g71)*(e71*e71);
    // AGB to RA1
    const a71i = parseFloat(document.getElementById('angleA61i').value);
    const b71i = parseFloat(document.getElementById('angleB61i').value);
    const c71i = parseFloat(document.getElementById('angleC61i').value);
    const d71i = parseFloat(document.getElementById('angleD61i').value);
    const e71i = parseFloat(document.getElementById('angleE7').value);

    // Calculate equivalent angles
    const f71i = Math.sqrt(a71i * a71i + b71i * b71i);
    const g71i = Math.sqrt(c71i * c71i + d71i * d71i);

    const h71i = Math.sqrt(Math.abs((f71i * f71i) - (g71i * g71i)));
    const i71i = 3.3405 * (Math.pow(10, -6)) * (h71i * h71i) * (e71i * e71i);
    const j71i = 3.3405 * (Math.pow(10, -6)) * (f71i * f71i) * (e71i * e71i);
    const k71i = 3.3405 * (Math.pow(10, -6)) * (g71i * g71i) * (e71i * e71i);
      //RA1 to RA2 
            const a72 = parseFloat(document.getElementById('angleA62').value);
            const b72 = parseFloat(document.getElementById('angleB62').value);
            const c72 = parseFloat(document.getElementById('angleC62').value);
            const d72 = parseFloat(document.getElementById('angleD62').value);
            const e72 = parseFloat(document.getElementById('angleE7').value);

            // Calculate equivalent angles
            const f72 = Math.sqrt(a72 * a72 + b72 * b72);
            const g72 = Math.sqrt(c72 * c72 + d72 * d72);

            const h72 = Math.sqrt(Math.abs((f72*f72)-(g72*g72)));
            const i72 = 3.3405*(Math.pow(10,-6))*(h72*h72)*(e72*e72);
            const j72 = 3.3405*(Math.pow(10,-6))*(f72*f72)*(e72*e72);
            const k72 = 3.3405*(Math.pow(10,-6))*(g72*g72)*(e72*e72);

    // RA1 to RA2
    const a72i = parseFloat(document.getElementById('angleA62i').value);
    const b72i = parseFloat(document.getElementById('angleB62i').value);
    const c72i = parseFloat(document.getElementById('angleC62i').value);
    const d72i = parseFloat(document.getElementById('angleD62i').value);
    const e72i = parseFloat(document.getElementById('angleE7').value);

    // Calculate equivalent angles
    const f72i = Math.sqrt(a72i * a72i + b72i * b72i);
    const g72i = Math.sqrt(c72i * c72i + d72i * d72i);

    const h72i = Math.sqrt(Math.abs((f72i * f72i) - (g72i * g72i)));
    const i72i = 3.3405 * (Math.pow(10, -6)) * (h72i * h72i) * (e72i * e72i);
    const j72i = 3.3405 * (Math.pow(10, -6)) * (f72i * f72i) * (e72i * e72i);
    const k72i = 3.3405 * (Math.pow(10, -6)) * (g72i * g72i) * (e72i * e72i);
      //AGB to FA2 
               const a73 = parseFloat(document.getElementById('angleA63').value);
               const b73 = parseFloat(document.getElementById('angleB63').value);
               const c73 = parseFloat(document.getElementById('angleC63').value);
               const d73 = parseFloat(document.getElementById('angleD63').value);
               const e73 = parseFloat(document.getElementById('angleE7').value);

               // Calculate equivalent angles
               const f73 = Math.sqrt(a73 * a73 + b73 * b73);
               const g73 = Math.sqrt(c73 * c73 + d73 * d73);

               const h73 = Math.sqrt(Math.abs((f73*f73)-(g73*g73)));
               const i73 = 3.3405*(Math.pow(10,-6))*(h73*h73)*(e73*e73);
               const j73 = 3.3405*(Math.pow(10,-6))*(f73*f73)*(e73*e73);
               const k73 = 3.3405*(Math.pow(10,-6))*(g73*g73)*(e73*e73);
    // AGB to FA2
    const a73i = parseFloat(document.getElementById('angleA63i').value);
    const b73i = parseFloat(document.getElementById('angleB63i').value);
    const c73i = parseFloat(document.getElementById('angleC63i').value);
    const d73i = parseFloat(document.getElementById('angleD63i').value);
    const e73i = parseFloat(document.getElementById('angleE7').value);

    // Calculate equivalent angles
    const f73i = Math.sqrt(a73i * a73i + b73i * b73i);
    const g73i = Math.sqrt(c73i * c73i + d73i * d73i);

    const h73i = Math.sqrt(Math.abs((f73i * f73i) - (g73i * g73i)));
    const i73i = 3.3405 * (Math.pow(10, -6)) * (h73i * h73i) * (e73i * e73i);
    const j73i = 3.3405 * (Math.pow(10, -6)) * (f73i * f73i) * (e73i * e73i);
    const k73i = 3.3405 * (Math.pow(10, -6)) * (g73i * g73i) * (e73i * e73i);
    //FA1 to FA2 


   document.getElementById('result').innerHTML = `

     <div class="bo">${vehicleName}_${vehicleName1} </div><br>
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
           <h3>CRITICAL SPEED CALCULATOR</h3>
            <h4>VECHILE OUTPUT </h4>
            <div class="box">1.PROPELLER SHAFT MAX.SPEED : ${j111.toFixed(2)} (rpm)</div>
            <h4>GB to AGB</h4>
            <div class="box">1.CRITICAL SPEED: ${k111.toFixed(2)} (rpm)</div><br>
            <div class="box">2.DESIGN CRITICAL SPEED: ${(k111*h111).toFixed(2)} (rpm)</div><br>
            <div class="box">3.ALLOWABLE CRITICAL SPEED: ${(k111*h111*0.75).toFixed(2)} (rpm)</div><br>
            <div class="highlighted111" id="betaAngle111"> Against Critical Speed, The Propeller Shaft is : ${(k111*h111*0.75) >= j111 ? 'Safe' : 'Unsafe'}</div>
            <h4>AGB to RA1 </h4>
            <div class="box">1.CRITICAL SPEED: ${k112.toFixed(2)} (rpm)</div><br>
            <div class="box">2.DESIGN CRITICAL SPEED: ${(k112*h112).toFixed(2)} (rpm)</div><br>
            <div class="box">3.ALLOWABLE CRITICAL SPEED: ${(k112*h112*0.75).toFixed(2)} (rpm)</div><br>
            <div class="highlighted112" id="betaAngle112"> Against Critical Speed, The Propeller Shaft is : ${(k112*h112*0.75) >= j111 ? 'Safe' : 'Unsafe'}</div>
            <h4>RA1 to RA2 </h4>
            <div class="box">1.CRITICAL SPEED: ${k113.toFixed(2)} (rpm)</div><br>
            <div class="box">2.DESIGN CRITICAL SPEED: ${(k113*h113).toFixed(2)} (rpm)</div><br>
            <div class="box">3.ALLOWABLE CRITICAL SPEED: ${(k113*h113*0.75).toFixed(2)} (rpm)</div><br>
            <div class="highlighted113" id="betaAngle113"> Against Critical Speed, The Propeller Shaft is : ${(k113*h113*0.75) >= j111 ? 'Safe' : 'Unsafe'}</div>
            <h4>AGB to FA </h4>
            <div class="box">1.CRITICAL SPEED: ${k114.toFixed(2)} (rpm)</div><br>
            <div class="box">2.DESIGN CRITICAL SPEED: ${(k114*h114).toFixed(2)} (rpm)</div><br>
            <div class="box">3.ALLOWABLE CRITICAL SPEED: ${(k114*h114*0.75).toFixed(2)} (rpm)</div><br>
            <div class="highlighted114" id="betaAngle114"> Against Critical Speed, The Propeller Shaft is : ${(k114*h114*0.75) >= j111 ? 'Safe' : 'Unsafe'}</div><hr>
            <hr>
                <h4>Extra part</h4>
                <div class="box">Date/Rev: => ${vehicleName2}</div><br>
                <div class="box">Prepared By: => ${vehicleName3}</div><br>
                <div class="box">Reviewed by: => ${vehicleName4}</div><br>
                <div class="box">Approved by: => ${vehicleName5}</div><br>
    </div>
    <div class="calculator-container1">
           <h3>SLIP LENGTH CALCULATOR</h3>
           <div class="box">1. REQUIRED COLLLAPSED LENGTH: ${e2.toFixed(2)}</div><br>
          <div class="highlight" id="betaAngle21">2.BUFFER AVAILABLE IN MAX.OPENING CONDITION : ${p2.toFixed(2)} (mm) , ${p2.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div><br>
          <div class="highlight" id="betaAngle22">3.BUFFER AVAILABLE IN MIN.OPENING CONDITION : ${q2.toFixed(2)} (mm) , ${q2.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div><br>
          <h3>Output From Existing Part</h3>
           <div class="highlight" id="betaAngle23">1.BUFFER AVAILABLE IN max.OPENING CONDITION : ${s2.toFixed(2)} (mm) , ${s2.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div><br>
           <div class="highlight" id="betaAngle24">2.BUFFER AVAILABLE IN MIN.OPENING CONDITION : ${t2.toFixed(2)} (mm) , ${t2.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div><hr> 
           <h3>TORSIONAL STIFFNESS</h3>
           <div class="box">1.SHEAR STRESS: ${f3.toFixed(2)} (deg.)</div><br>
           <div class="box">2.MAX.ANGLE OF TWIST: ${g3.toFixed(2)} (rad)</div><br>
           <div class="box">3.TORSIONAL SIFFNESS: ${h3.toFixed(2)} (kg)</div><br><hr>
           <h3>BENDING CRITICAL ANGLE</h3>
           <div class="box">1.Deflection Angle: ${e4.toFixed(2)}</div><br>
           <h3>PERMISSIBLE DEFLECTION ANGLE</h3>
           <div id="betaAngle5">1.Deflection Angle: ${e5.toFixed(2)}</div><br>
           <div id="BetaAngle5">2.Speed x Deflection Angle: ${f5.toFixed(2)}</div><hr>
           <h3>BETA ANGLE</h3>
           <h4>GB to AGB</h4>
            <div class="container2">
            <div class="calculator-container2">
             <h3>laden </h3>
           <div class="box">1. True Joint angle of 1st UJ: ${e6.toFixed(2)}</div><br>
           <div class="box">2. True Joint angle of 2nd UJ: ${f6.toFixed(2)}</div><br>
           <div class="box">1. Equivalent angle 1(+-): ${angle1.toFixed(2)}</div><br> 
           <div class="box">2. Equivalent angle 2(-+): ${angle2.toFixed(2)}</div><br> 
           <div id="betaAngle6">The Recommended Beta angle is : ${minEquivalentAngle.toFixed(2)}  ,${minEquivalentAngle.toFixed(2) <=3 ? 'Safe' : 'Unsafe'} </div>
           </div>
            <div class="calculator-container2">
            <h3>unladen </h3>
            <div class="box">1. True Joint angle of 1st UJ: ${e6i.toFixed(2)}</div><br>
            <div class="box">2. True Joint angle of 2nd UJ: ${f6i.toFixed(2)}</div><br>
            <div class="box">1. Equivalent angle 1(+-): ${angle1i.toFixed(2)}</div><br> 
            <div class="box">2. Equivalent angle 2(-+): ${angle2i.toFixed(2)}</div><br> 
            <div id="betaAngle6i">The Recommended Beta angle is : ${minEquivalentAnglei.toFixed(2)}, ${minEquivalentAnglei.toFixed(2) <= 3 ? 'Safe' : 'Unsafe'}</div>
            </div>
            </div>
             <hr>
            
    </div>
      <div class="calculator-container1">
           <h4>AGB to RA1 </h4>
            <div class="container2">
            <div class="calculator-container2">
             <h3>laden </h3>
           <div class="box">1. True Joint angle of 1st UJ: ${e61.toFixed(2)}</div><br>
           <div class="box">2. True Joint angle of 2nd UJ: ${f61.toFixed(2)}</div><br>
           <div class="box">1. Equivalent angle 1(+-): ${angle11.toFixed(2)}</div><br> 
           <div class="box">2. Equivalent angle 2(-+): ${angle21.toFixed(2)}</div><br> 
           <div id="betaAngle61">The Recommended Beta angle is : ${minEquivalentAngle1.toFixed(2)}  ,${minEquivalentAngle1.toFixed(2) <=3 ? 'Safe' : 'Unsafe'} </div>
           </div>
            <div class="calculator-container2">
            <h3>unladen </h3>
            <div class="box">1. True Joint angle of 1st UJ: ${e61i.toFixed(2)}</div><br>
            <div class="box">2. True Joint angle of 2nd UJ: ${f61i.toFixed(2)}</div><br>
            <div class="box">1. Equivalent angle 1(+-): ${angle11i.toFixed(2)}</div><br> 
            <div class="box">2. Equivalent angle 2(-+): ${angle21i.toFixed(2)}</div><br> 
            <div id="betaAngle61i">The Recommended Beta angle is : ${minEquivalentAngle1i.toFixed(2)}, ${minEquivalentAngle1i.toFixed(2) <= 3 ? 'Safe' : 'Unsafe'}</div>
            </div>
             </div>
             <hr>
           <h4>RA1 to RA2 </h4>
            <div class="container2">
            <div class="calculator-container2">
             <h3>laden </h3>
           <div class="box">1. True Joint angle of 1st UJ: ${e62.toFixed(2)}</div><br>
           <div class="box">2. True Joint angle of 2nd UJ: ${f62.toFixed(2)}</div><br>
           <div class="box">1. Equivalent angle 1(+-): ${angle12.toFixed(2)}</div><br> 
           <div class="box">2. Equivalent angle 2(-+): ${angle22.toFixed(2)}</div><br> 
           <div id="betaAngle62">The Recommended Beta angle is : ${minEquivalentAngle2.toFixed(2)}  ,${minEquivalentAngle2.toFixed(2) <=3 ? 'Safe' : 'Unsafe'} </div>
           </div>
            <div class="calculator-container2">
            <h3>unladen </h3>
            <div class="box">1. True Joint angle of 1st UJ: ${e62i.toFixed(2)}</div><br>
            <div class="box">2. True Joint angle of 2nd UJ: ${f62i.toFixed(2)}</div><br>
            <div class="box">1. Equivalent angle 1(+-): ${angle12i.toFixed(2)}</div><br> 
            <div class="box">2. Equivalent angle 2(-+): ${angle22i.toFixed(2)}</div><br> 
            <div id="betaAngle62i">The Recommended Beta angle is : ${minEquivalentAngle2i.toFixed(2)}, ${minEquivalentAngle2i.toFixed(2) <= 3 ? 'Safe' : 'Unsafe'}</div>
            </div>
             </div>
             <hr>
           <h4>AGB to FA </h4>
            <div class="container2">
            <div class="calculator-container2">
             <h3>laden </h3>
           <div class="box">1. True Joint angle of 1st UJ: ${e63.toFixed(2)}</div><br>
           <div class="box">2. True Joint angle of 2nd UJ: ${f63.toFixed(2)}</div><br>
           <div class="box">1. Equivalent angle 1(+-): ${angle13.toFixed(2)}</div><br> 
           <div class="box">2. Equivalent angle 2(-+): ${angle23.toFixed(2)}</div><br> 
           <div id="betaAngle63">The Recommended Beta angle is : ${minEquivalentAngle3.toFixed(2)}  ,${minEquivalentAngle3.toFixed(2) <=3 ? 'Safe' : 'Unsafe'} </div>
           </div>
            <div class="calculator-container2">
            <h3>unladen </h3>
            <div class="box">1. True Joint angle of 1st UJ: ${e63i.toFixed(2)}</div><br>
            <div class="box">2. True Joint angle of 2nd UJ: ${f63i.toFixed(2)}</div><br>
            <div class="box">1. Equivalent angle 1(+-): ${angle13i.toFixed(2)}</div><br> 
            <div class="box">2. Equivalent angle 2(-+): ${angle23i.toFixed(2)}</div><br> 
            <div id="betaAngle63i">The Recommended Beta angle is : ${minEquivalentAngle3i.toFixed(2)}, ${minEquivalentAngle3i.toFixed(2) <= 3 ? 'Safe' : 'Unsafe'}</div>
            </div>
             </div>
             <hr>
     </div>
       <div class="calculator-container1">
           <h3>TORSIONAL CALCULATOR</h3>
           <h4>GB to AGB</h4>
            <div class="container2">
            <div class="calculator-container2">
             <h3>laden </h3>
           <div id="betaAngle71">1.Torsional Excitation: ${i7.toFixed(2)} (rad/s^2), ${i7.toFixed(2) <400 ? 'Safe' : 'Unsafe'}</div><br>
           <div id="betaAngle72">2.Inertia drive Excitation: ${j7.toFixed(2)} (rad/s^2), ${j7.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
           <div id="betaAngle73">3.Inertia Coast Excitation: ${k7.toFixed(2)} (rad/s^2), ${k7.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
           </div>
            <div class="calculator-container2">
            <h3>unladen </h3>
            <div id="betaAngle71i">1.Torsional Excitation: ${i7i.toFixed(2)} (rad/s^2), ${i7i.toFixed(2) <400 ? 'Safe' : 'Unsafe'}</div><br>
            <div id="betaAngle72i">2.Inertia drive Excitation: ${j7i.toFixed(2)} (rad/s^2), ${j7i.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
            <div id="betaAngle73i">3.Inertia Coast Excitation: ${k7i.toFixed(2)} (rad/s^2), ${k7i.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
            </div>
             </div>
              <hr>
           <h4>AGB to RA1 </h4>
            <div class="container2">
            <div class="calculator-container2">
             <h3>laden </h3>
           <div id="betaAngle711">1.Torsional Excitation: ${i71.toFixed(2)} (rad/s^2), ${i71.toFixed(2) <400 ? 'Safe' : 'Unsafe'}</div><br>
           <div id="betaAngle721">2.Inertia drive Excitation: ${j71.toFixed(2)} (rad/s^2), ${j71.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
           <div id="betaAngle731">3.Inertia Coast Excitation: ${k71.toFixed(2)} (rad/s^2), ${k71.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
           </div>
            <div class="calculator-container2">
            <h3>unladen </h3>
            <div id="betaAngle711i">1.Torsional Excitation: ${i71i.toFixed(2)} (rad/s^2), ${i71i.toFixed(2) <400 ? 'Safe' : 'Unsafe'}</div><br>
            <div id="betaAngle721i">2.Inertia drive Excitation: ${j71i.toFixed(2)} (rad/s^2), ${j71i.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
            <div id="betaAngle731i">3.Inertia Coast Excitation: ${k71i.toFixed(2)} (rad/s^2), ${k71i.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
            </div>
             </div>
            <hr>
           <h4>RA1 to RA2 </h4>
            <div class="container2">
            <div class="calculator-container2">
             <h3>laden </h3>
           <div id="betaAngle712">1.Torsional Excitation: ${i72.toFixed(2)} (rad/s^2), ${i72.toFixed(2) <400 ? 'Safe' : 'Unsafe'}</div><br>
           <div id="betaAngle722">2.Inertia drive Excitation: ${j72.toFixed(2)} (rad/s^2), ${j72.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
           <div id="betaAngle732">3.Inertia Coast Excitation: ${k72.toFixed(2)} (rad/s^2), ${k72.toFixed(2) <2000 ? 'Safe' : 'Unsafe'} </div><br>
           </div>
            <div class="calculator-container2">
            <h3>unladen </h3>
            <div id="betaAngle712i">1.Torsional Excitation: ${i72i.toFixed(2)} (rad/s^2), ${i72i.toFixed(2) <400 ? 'Safe' : 'Unsafe'}</div><br>
            <div id="betaAngle722i">2.Inertia drive Excitation: ${j72i.toFixed(2)} (rad/s^2), ${j72i.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
            <div id="betaAngle732i">3.Inertia Coast Excitation: ${k72i.toFixed(2)} (rad/s^2), ${k72i.toFixed(2) <2000 ? 'Safe' : 'Unsafe'} </div><br>
            </div>
             </div>
           <hr>
           <h4>AGB to FA </h4>
            <div class="container2">
            <div class="calculator-container2">
             <h3>laden </h3>
           <div id="betaAngle713">1.Torsional Excitation: ${i73.toFixed(2)} (rad/s^2), ${i73.toFixed(2) <400 ? 'Safe' : 'Unsafe'}</div><br>
           <div id="betaAngle723">2.Inertia drive Excitation: ${j73.toFixed(2)} (rad/s^2), ${j73.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
           <div id="betaAngle733">3.Inertia Coast Excitation: ${k73.toFixed(2)} (rad/s^2), ${k73.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
           </div>
            <div class="calculator-container2">
            <h3>unladen </h3>
            <div id="betaAngle713i">1.Torsional Excitation: ${i73i.toFixed(2)} (rad/s^2), ${i73i.toFixed(2) <400 ? 'Safe' : 'Unsafe'}</div><br>
            <div id="betaAngle723i">2.Inertia drive Excitation: ${j73i.toFixed(2)} (rad/s^2), ${j73i.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
            <div id="betaAngle733i">3.Inertia Coast Excitation: ${k73i.toFixed(2)} (rad/s^2), ${k73i.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div><br>
            </div>
             </div>
   <hr>
    </div>
   </div>
`;  
    const betaAngle111Element = document.getElementById('betaAngle111');
       if ((k111*h111*0.75) <= j111) {
           betaAngle111Element.style.backgroundColor = 'red';
       } else {
           betaAngle111Element.style.backgroundColor = 'green';
       }
      const betaAngle112Element = document.getElementById('betaAngle112');
       if ((k112*h112*0.75) <= j111) {
           betaAngle112Element.style.backgroundColor = 'red';
       } else {
           betaAngle112Element.style.backgroundColor = 'green';
       }
      const betaAngle113Element = document.getElementById('betaAngle113');
       if ((k113*h113*0.75) <= j111) {
           betaAngle113Element.style.backgroundColor = 'red';
       } else {
           betaAngle113Element.style.backgroundColor = 'green';
       }
      const betaAngle114Element = document.getElementById('betaAngle114');
       if ((k114*h114*0.75) <= j111) {
           betaAngle114Element.style.backgroundColor = 'red';
       } else {
           betaAngle114Element.style.backgroundColor = 'green';
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
//beta angle
     const betaAngle6Element = document.getElementById('betaAngle6');

       // Check the value of minEquivalentAngle
       if (minEquivalentAngle > 3) {
           betaAngle6Element.style.backgroundColor = 'red';
       } else {
           betaAngle6Element.style.backgroundColor = 'green';
       }
    const betaAngle61Element = document.getElementById('betaAngle61');

       // Check the value of minEquivalentAngle
       if (minEquivalentAngle1 > 3) {
           betaAngle61Element.style.backgroundColor = 'red';
       } else {
           betaAngle61Element.style.backgroundColor = 'green';
       }
    const betaAngle62Element = document.getElementById('betaAngle62');

       // Check the value of minEquivalentAngle
       if (minEquivalentAngle2 > 3) {
           betaAngle62Element.style.backgroundColor = 'red';
       } else {
           betaAngle62Element.style.backgroundColor = 'green';
       }
    const betaAngle63Element = document.getElementById('betaAngle63');

       // Check the value of minEquivalentAngle
       if (minEquivalentAngle3 > 3) {
           betaAngle63Element.style.backgroundColor = 'red';
       } else {
           betaAngle63Element.style.backgroundColor = 'green';
       }
      //unladen
      const betaAngle6iElement = document.getElementById('betaAngle6i');

         // Check the value of minEquivalentAngle
         if (minEquivalentAnglei > 3) {
             betaAngle6iElement.style.backgroundColor = 'red';
         } else {
             betaAngle6iElement.style.backgroundColor = 'green';
         }
      const betaAngle61iElement = document.getElementById('betaAngle61i');

         // Check the value of minEquivalentAngle
         if (minEquivalentAngle1i > 3) {
             betaAngle61iElement.style.backgroundColor = 'red';
         } else {
             betaAngle61iElement.style.backgroundColor = 'green';
         }
      const betaAngle62iElement = document.getElementById('betaAngle62i');

         // Check the value of minEquivalentAngle
         if (minEquivalentAngle2i > 3) {
             betaAngle62iElement.style.backgroundColor = 'red';
         } else {
             betaAngle62iElement.style.backgroundColor = 'green';
         }
      const betaAngle63iElement = document.getElementById('betaAngle63i');    
           if (minEquivalentAngle3i > 3) {
                betaAngle63iElement.style.backgroundColor = 'red';
            } else {
                betaAngle63iElement.style.backgroundColor = 'green';
            }


//torsional calculator

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



    const betaAngle711Element = document.getElementById('betaAngle711');
    if(i71 >=  400){
        betaAngle711Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle711Element.style.backgroundColor = 'green';
    }

    const betaAngle721Element = document.getElementById('betaAngle721');
    if(j71 >=  2000){
        betaAngle721Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle721Element.style.backgroundColor = 'green';
    }
    const betaAngle731Element = document.getElementById('betaAngle731');
    if(k71 >= 2000){
        betaAngle731Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle731Element.style.backgroundColor = 'green';
    }


    const betaAngle712Element = document.getElementById('betaAngle712');
    if(i72 >=  400){
        betaAngle712Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle712Element.style.backgroundColor = 'green';
    }

    const betaAngle722Element = document.getElementById('betaAngle722');
    if(j72 >=  2000){
        betaAngle722Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle722Element.style.backgroundColor = 'green';
    }
    const betaAngle732Element = document.getElementById('betaAngle732');
    if(k72 >= 2000){
        betaAngle732Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle732Element.style.backgroundColor = 'green';
    }


    const betaAngle713Element = document.getElementById('betaAngle713');
    if(i73 >=  400){
        betaAngle713Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle713Element.style.backgroundColor = 'green';
    }

    const betaAngle723Element = document.getElementById('betaAngle723');
    if(j73 >=  2000){
        betaAngle723Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle723Element.style.backgroundColor = 'green';
    }
    const betaAngle733Element = document.getElementById('betaAngle733');
    if(k73 >= 2000){
        betaAngle733Element.style.backgroundColor = 'red';
    }
    else{
        betaAngle733Element.style.backgroundColor = 'green';
    }
    const betaAngle71iElement = document.getElementById('betaAngle71i');
    if (i7i >= 400) {
        betaAngle71iElement.style.backgroundColor = 'red';
    } else {
        betaAngle71iElement.style.backgroundColor = 'green';
    }

    const betaAngle72iElement = document.getElementById('betaAngle72i');
    if (j7i >= 2000) {
        betaAngle72iElement.style.backgroundColor = 'red';
    } else {
        betaAngle72iElement.style.backgroundColor = 'green';
    }

    const betaAngle73iElement = document.getElementById('betaAngle73i');
    if (k7i >= 2000) {
        betaAngle73iElement.style.backgroundColor = 'red';
    } else {
        betaAngle73iElement.style.backgroundColor = 'green';
    }

    const betaAngle711iElement = document.getElementById('betaAngle711i');
    if (i71i >= 400) {
        betaAngle711iElement.style.backgroundColor = 'red';
    } else {
        betaAngle711iElement.style.backgroundColor = 'green';
    }

    const betaAngle721iElement = document.getElementById('betaAngle721i');
    if (j71i >= 2000) {
        betaAngle721iElement.style.backgroundColor = 'red';
    } else {
        betaAngle721iElement.style.backgroundColor = 'green';
    }

    const betaAngle731iElement = document.getElementById('betaAngle731i');
    if (k71i >= 2000) {
        betaAngle731iElement.style.backgroundColor = 'red';
    } else {
        betaAngle731iElement.style.backgroundColor = 'green';
    }

    const betaAngle712iElement = document.getElementById('betaAngle712i');
    if (i72i >= 400) {
        betaAngle712iElement.style.backgroundColor = 'red';
    } else {
        betaAngle712iElement.style.backgroundColor = 'green';
    }

    const betaAngle722iElement = document.getElementById('betaAngle722i');
    if (j72i >= 2000) {
        betaAngle722iElement.style.backgroundColor = 'red';
    } else {
        betaAngle722iElement.style.backgroundColor = 'green';
    }

    const betaAngle732iElement = document.getElementById('betaAngle732i');
    if (k72i >= 2000) {
        betaAngle732iElement.style.backgroundColor = 'red';
    } else {
        betaAngle732iElement.style.backgroundColor = 'green';
    }

    const betaAngle713iElement = document.getElementById('betaAngle713i');
    if (i73i >= 400) {
        betaAngle713iElement.style.backgroundColor = 'red';
    } else {
        betaAngle713iElement.style.backgroundColor = 'green';
    }

    const betaAngle723iElement = document.getElementById('betaAngle723i');
    if (j73i >= 2000) {
        betaAngle723iElement.style.backgroundColor = 'red';
    } else {
        betaAngle723iElement.style.backgroundColor = 'green';
    }

    const betaAngle733iElement = document.getElementById('betaAngle733i');
    if (k73i >= 2000) {
        betaAngle733iElement.style.backgroundColor = 'red';
    } else {
        betaAngle733iElement.style.backgroundColor = 'green';
    }


}

function printPage() {
    window.print();
}
function refreshContent() {
    window.location.reload();
}


