
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

   // Input angles (replace with actual values)
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

    //beta angle 
       const a6 = parseFloat(document.getElementById('angleA6').value);
       const b6 = parseFloat(document.getElementById('angleB6').value);
       const c6 = parseFloat(document.getElementById('angleC6').value);
       const d6 = parseFloat(document.getElementById('angleD6').value);
       const e6 = parseFloat(document.getElementById('angleE6').value);
       const f6 = parseFloat(document.getElementById('angleF6').value);
       const g6 = parseFloat(document.getElementById('angleG6').value);
       const h6 = parseFloat(document.getElementById('angleH6').value);
       const i6 = parseFloat(document.getElementById('angleI6').value);
       const j6 = parseFloat(document.getElementById('angleJ6').value);
       // Calculate equivalent angles
       const k6 = Math.sqrt(a6 * a6 + b6 * b6);
       const l6 = Math.sqrt(c6 * c6 + d6 * d6);
       const m6= Math.sqrt(e6 * e6 + f6 * f6);
       const n6 = Math.sqrt(g6 * g6 + h6 * h6);
       const o6 = Math.sqrt(i6 * i6 + j6 * j6);


       const angle1 = Math.sqrt(Math.abs((k6 * k6) - (l6 * l6) - (m6 * m6) - (n6 * n6) + (o6 * o6)));
       const angle2 = Math.sqrt(Math.abs((k6 * k6) + (l6 * l6) - (m6 * m6) - (n6 * n6) + (o6 * o6)));
       const angle3 = Math.sqrt(Math.abs((k6 * k6) + (l6 * l6) + (m6 * m6) - (n6* n6) + (o6 * o6)));
       const angle4 = Math.sqrt(Math.abs((k6 * k6) + (l6* l6) + (m6 * m6) + (n6 * n6) - (o6 * o6)));
       const angle5 = Math.sqrt(Math.abs((k6 * k6) - (l6 * l6) + (m6 * m6) + (n6 * n6) - (o6 * o6)));
       const angle6 = Math.sqrt(Math.abs(-(k6 * k6) + (l6 * l6) - (m6 * m6) + (n6 * n6) - (o6 * o6)));
       const angle7 = Math.sqrt(Math.abs((k6 * k6) + (l6 * l6) - (m6 * m6) + (n6 * n6) - (o6 * o6)));
       const angle8 = Math.sqrt(Math.abs((k6 * k6) - (l6 * l6) - (m6 * m6) + (n6 * n6) - (o6 * o6)));

       const p6 = Math.min(angle1, angle2);
       const q6 = Math.min(angle3, angle4);
       const r6 = Math.min(angle5, angle6);
       const s6 = Math.min(angle7, angle8);
       const t6 = Math.min(p6, q6);
       const u6 = Math.min(r6, s6);
       const minEquivalentAngle = Math.min(t6, u6);
       // Display cross parallel
        let v6 = "";
        if (minEquivalentAngle === angle1) {
            v6 = " P-C-C-P ";
        } else if (minEquivalentAngle === angle2){
            v6 = " C-P-C-P ";
        } else if (minEquivalentAngle === angle3){
            v6 = " C-C-P-P ";
        } else if (minEquivalentAngle === angle4){
            v6 = " C-C-C-P ";
        } else if (minEquivalentAngle === angle5){
            v6 = " P-P-C-P ";
        } else if (minEquivalentAngle === angle6){
            v6 = " P-P-P-P ";
        } else if (minEquivalentAngle === angle7){
            v6 = " C-P-P-P ";
        } else{
            v6 = " P-C-P-P ";
        }
     // unladen
    const a6u = parseFloat(document.getElementById('angleA6u').value);
    const b6u = parseFloat(document.getElementById('angleB6u').value);
    const c6u = parseFloat(document.getElementById('angleC6u').value);
    const d6u = parseFloat(document.getElementById('angleD6u').value);
    const e6u = parseFloat(document.getElementById('angleE6u').value);
    const f6u = parseFloat(document.getElementById('angleF6u').value);
    const g6u = parseFloat(document.getElementById('angleG6u').value);
    const h6u = parseFloat(document.getElementById('angleH6u').value);
    const i6u = parseFloat(document.getElementById('angleI6u').value);
    const j6u = parseFloat(document.getElementById('angleJ6u').value);

    // Calculate equivalent angles
    const k6u = Math.sqrt(a6u * a6u + b6u * b6u);
    const l6u = Math.sqrt(c6u * c6u + d6u * d6u);
    const m6u = Math.sqrt(e6u * e6u + f6u * f6u);
    const n6u = Math.sqrt(g6u * g6u + h6u * h6u);
    const o6u = Math.sqrt(i6u * i6u + j6u * j6u);

    const angle1u = Math.sqrt(Math.abs((k6u * k6u) - (l6u * l6u) - (m6u * m6u) - (n6u * n6u) + (o6u * o6u)));
    const angle2u = Math.sqrt(Math.abs((k6u * k6u) + (l6u * l6u) - (m6u * m6u) - (n6u * n6u) + (o6u * o6u)));
    const angle3u = Math.sqrt(Math.abs((k6u * k6u) + (l6u * l6u) + (m6u * m6u) - (n6u * n6u) + (o6u * o6u)));
    const angle4u = Math.sqrt(Math.abs((k6u * k6u) + (l6u * l6u) + (m6u * m6u) + (n6u * n6u) - (o6u * o6u)));
    const angle5u = Math.sqrt(Math.abs((k6u * k6u) - (l6u * l6u) + (m6u * m6u) + (n6u * n6u) - (o6u * o6u)));
    const angle6u = Math.sqrt(Math.abs(-(k6u * k6u) + (l6u * l6u) - (m6u * m6u) + (n6u * n6u) - (o6u * o6u)));
    const angle7u = Math.sqrt(Math.abs((k6u * k6u) + (l6u * l6u) - (m6u * m6u) + (n6u * n6u) - (o6u * o6u)));
    const angle8u = Math.sqrt(Math.abs((k6u * k6u) - (l6u * l6u) - (m6u * m6u) + (n6u * n6u) - (o6u * o6u)));

    const p6u = Math.min(angle1u, angle2u);
    const q6u = Math.min(angle3u, angle4u);
    const r6u = Math.min(angle5u, angle6u);
    const s6u = Math.min(angle7u, angle8u);
    const t6u = Math.min(p6u, q6u);
    const u6u = Math.min(r6u, s6u);
    const minEquivalentAngleu = Math.min(t6u, u6u);
       // Display cross parallel
        let v6u = "";
        if (minEquivalentAngleu === angle1u) {
            v6u = " P-C-C-P ";
        } else if (minEquivalentAngleu === angle2u){
            v6u = " C-P-C-P ";
        } else if (minEquivalentAngleu === angle3u){
            v6u = " C-C-P-P ";
        } else if (minEquivalentAngleu === angle4u){
            v6u = " C-C-C-P ";
        } else if (minEquivalentAngleu === angle5u){
            v6u = " P-P-C-P ";
        } else if (minEquivalentAngleu === angle6u){
            v6u = " P-P-P-P ";
        } else if (minEquivalentAngleu === angle7u){
            v6u = " C-P-P-P ";
        } else{
            v6u = " P-C-P-P ";
        }

    //torsional calc

        const a7 = parseFloat(document.getElementById('angleA6').value);
        const b7 = parseFloat(document.getElementById('angleB6').value);
        const c7 = parseFloat(document.getElementById('angleC6').value);
        const d7 = parseFloat(document.getElementById('angleD6').value);
        const e7 = parseFloat(document.getElementById('angleE6').value);
        const f7 = parseFloat(document.getElementById('angleF6').value);
        const g7 = parseFloat(document.getElementById('angleG6').value);
        const h7 = parseFloat(document.getElementById('angleH6').value);
        const i7 = parseFloat(document.getElementById('angleI6').value);
        const j7 = parseFloat(document.getElementById('angleJ6').value);
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
        const minEquivalentAngle7 = Math.min(t7, u7);   

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
          const dropdown7 = document.getElementById("myDropdown7");
          const phase = dropdown7.value;
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

    //unladen
    const a7u = parseFloat(document.getElementById('angleA6u').value);
    const b7u = parseFloat(document.getElementById('angleB6u').value);
    const c7u = parseFloat(document.getElementById('angleC6u').value);
    const d7u = parseFloat(document.getElementById('angleD6u').value);
    const e7u = parseFloat(document.getElementById('angleE6u').value);
    const f7u = parseFloat(document.getElementById('angleF6u').value);
    const g7u = parseFloat(document.getElementById('angleG6u').value);
    const h7u = parseFloat(document.getElementById('angleH6u').value);
    const i7u = parseFloat(document.getElementById('angleI6u').value);
    const j7u = parseFloat(document.getElementById('angleJ6u').value);
    const i71u = parseFloat(document.getElementById('angleK78').value); //SPEED

    // Calculate equivalent angles
    const k7u = Math.sqrt(a7u * a7u + b7u * b7u);
    const l7u = Math.sqrt(c7u * c7u + d7u * d7u);
    const m7u = Math.sqrt(e7u * e7u + f7u * f7u);
    const n7u = Math.sqrt(g7u * g7u + h7u * h7u);
    const o7u = Math.sqrt(i7u * i7u + j7u * j7u);

    const angle17u = Math.sqrt(Math.abs((k7u * k7u) - (l7u * l7u) - (m7u * m7u) - (n7u * n7u) + (o7u * o7u)));  //P-C-C-P
    const angle27u = Math.sqrt(Math.abs((k7u * k7u) + (l7u * l7u) - (m7u * m7u) - (n7u * n7u) + (o7u * o7u)));  //C-P-C-P
    const angle37u = Math.sqrt(Math.abs((k7u * k7u) + (l7u * l7u) + (m7u * m7u) - (n7u * n7u) + (o7u * o7u)));   //C-C-P-P
    const angle47u = Math.sqrt(Math.abs((k7u * k7u) + (l7u * l7u) + (m7u * m7u) + (n7u * n7u) - (o7u * o7u)));   //C-C-C-P
    const angle57u = Math.sqrt(Math.abs((k7u * k7u) - (l7u * l7u) + (m7u * m7u) + (n7u * n7u) - (o7u * o7u)));  //P-P-C-P
    const angle67u = Math.sqrt(Math.abs(-(k7u * k7u) + (l7u * l7u) - (m7u * m7u) + (n7u * n7u) - (o7u * o7u)));  //P-P-P-P
    const angle77u = Math.sqrt(Math.abs((k7u * k7u) + (l7u * l7u) - (m7u * m7u) + (n7u * n7u) - (o7u * o7u)));   //C-P-P-P
    const angle87u = Math.sqrt(Math.abs((k7u * k7u) - (l7u * l7u) - (m7u * m7u) + (n7u * n7u) - (o7u * o7u)));   //P-C-P-P

    const p7u = Math.min(angle17u, angle27u);
    const q7u = Math.min(angle37u, angle47u);
    const r7u = Math.min(angle57u, angle67u);
    const s7u = Math.min(angle77u, angle87u);
    const t7u = Math.min(p7u, q7u);
    const u7u = Math.min(r7u, s7u);
    const minEquivalentAngle7u = Math.min(t7u, u7u);

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

    const dropdown7u = document.getElementById("myDropdown7");
    const phaseu = dropdown7u.value;

    if(phaseu === "PCCP") {
        r71u = angle17u;
        t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (angle17u * angle17u);
        u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (pccd7u * pccd7u);
        v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (pccc7u * pccc7u);
    } else if(phaseu === "CPCP") {
        r71u = angle27u;
        t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (angle27u * angle27u);
        u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (cpcd7u * cpcd7u);
        v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (pcpc7u * pcpc7u);
    } else if(phaseu === "CCPP") {
        r71u = angle37u;
        t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (angle37u * angle37u);
        u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (ccpd7u * ccpd7u);
        v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (ppcc7u * ppcc7u);
    } else if(phaseu === "CCCP") {
        r71u = angle47u;
        t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (angle47u * angle47u);
        u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (cccd7u * cccd7u);
        v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (pccc7u * pccc7u);
    } else if(phaseu === "PPCP") {
        r71u = angle57u;
        t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (angle57u * angle57u);
        u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (ppcd7u * ppcd7u);
        v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (pcpc7u * pcpc7u);
    } else if(phaseu === "PPPP") {
        r71u = angle67u;
        t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (angle67u * angle67u);
        u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (pppd7u * pppd7u);
        v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (pppc7u * pppc7u);
    } else if(phaseu === "CPPP") {
        r71u = angle77u;
        t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (angle77u * angle77u);
        u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (cppd7u * cppd7u);
        v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (pppc7u * pppc7u);
    } else if(phaseu === "PCPP") {
        r71u = angle87u;
        t71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (angle87u * angle87u);
        u71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (pcpd7u * pcpd7u);
        v71u = 3.3405 * (Math.pow(10, -6)) * (i71u * i71u) * (ppcc7u * ppcc7u);
    }


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
            <h3>CRITICAL SPEED CALCULATOR</h3>
            <h4>VECHILE OUTPUT </h4>
            <div class="box">1.PROPELLER SHAFT MAX.SPEED : ${j111.toFixed(2)} (rpm)</div>
            <h4>PROPELLER SHAFT 1 OUTPUT </h4>
            <div class="box">1.CRITICAL SPEED: ${k111.toFixed(2)} (rpm)</div><br>
            <div class="box">2.DESIGN CRITICAL SPEED: ${(k111*h111).toFixed(2)} (rpm)</div><br>
            <div class="box">3.ALLOWABLE CRITICAL SPEED: ${(k111*h111*0.75).toFixed(2)} (rpm)</div><br>
            <div class="highlighted111" id="betaAngle111"> Against Critical Speed, The Propeller Shaft is : ${(k111*h111*0.75) >= j111 ? 'Safe' : 'Unsafe'}</div>

            <h4>PROPELLER SHAFT 2 OUTPUT </h4>
            <div class="box">1.CRITICAL SPEED: ${k112.toFixed(2)} (rpm)</div><br>
            <div class="box">2.DESIGN CRITICAL SPEED: ${(k112*h112).toFixed(2)} (rpm)</div><br>
            <div class="box">3.ALLOWABLE CRITICAL SPEED: ${(k112*h112*0.75).toFixed(2)} (rpm)</div><br>
            <div class="highlighted112" id="betaAngle112"> Against Critical Speed, The Propeller Shaft is : ${(k112*h112*0.75) >= j111 ? 'Safe' : 'Unsafe'}</div>
            <h4>PROPELLER SHAFT 3 OUTPUT </h4>
            <div class="box">1.CRITICAL SPEED: ${k113.toFixed(2)} (rpm)</div><br>
            <div class="box">2.DESIGN CRITICAL SPEED: ${(k113*h113).toFixed(2)} (rpm)</div><br>
            <div class="box">3.ALLOWABLE CRITICAL SPEED: ${(k113*h113*0.75).toFixed(2)} (rpm)</div><br>
            <div class="highlighted113" id="betaAngle113"> Against Critical Speed, The Propeller Shaft is : ${(k113*h113*0.75) >= j111 ? 'Safe' : 'Unsafe'}</div>
        </div>
        <div class="calculator-container1">
            <h4>PROPELLER SHAFT 4 OUTPUT </h4>
            <div class="box">1.CRITICAL SPEED: ${k114.toFixed(2)} (rpm)</div><br>
            <div class="box">2.DESIGN CRITICAL SPEED: ${(k114*h114).toFixed(2)} (rpm)</div><br>
            <div class="box">3.ALLOWABLE CRITICAL SPEED: ${(k114*h114*0.75).toFixed(2)} (rpm)</div><br>
            <div class="highlighted114" id="betaAngle114"> Against Critical Speed, The Propeller Shaft is : ${(k114*h114*0.75) >= j111 ? 'Safe' : 'Unsafe'}</div><hr>

            <h3>SLIP LENGTH CALCULATOR</h3>
            <div class="box">1. REQUIRED COLLLAPSED LENGTH: ${e2.toFixed(2)}</div><br>
           <div class="highlighted" id="betaAngle21">2.BUFFER AVAILABLE IN MAX.OPENING CONDITION : ${p2.toFixed(2)} (mm) , ${p2.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div><br>
           <div class="highlighted" id="betaAngle22">3.BUFFER AVAILABLE IN MIN.OPENING CONDITION : ${q2.toFixed(2)} (mm) , ${q2.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div><br>
            <h3>Output From Existing Part</h3>
           <div class="highlighted" id="betaAngle23">1.BUFFER AVAILABLE IN max.OPENING CONDITION : ${s2.toFixed(2)} (mm) , ${s2.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div><br>
              <div class="highlighted" id="betaAngle24">2.BUFFER AVAILABLE IN MIN.OPENING CONDITION : ${t2.toFixed(2)} (mm) , ${t2.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div> <hr>
            <h3>TORSIONAL STIFFNESS</h3>
            <div class="box">1.SHEAR STRESS: ${f3.toFixed(2)} (deg.)</div><br>
           <div class="box">2.MAX.ANGLE OF TWIST: ${g3.toFixed(2)} (rad)</div><br>
           <div class="box">3.TORSIONAL SIFFNESS: ${h3.toFixed(2)} (kg)</div><hr>
            <h3>BENDING CRITICAL ANGLE</h3>
            <div class="box">1.Deflection Angle: ${e4.toFixed(2)}</div><br><hr>
            <h3>permissible deflection angle</h3>
            <div  id="betaAngle5">1.Deflection Angle: ${e5.toFixed(2)}</div><br>
            <div id="BetaAngle5">2.Speed x Deflection Angle: ${f5.toFixed(2)}</div><hr>
        </div>
        <div class="calculator-container1">
        <h3>BETA ANGLE</h3>
             <div class="container2">
             <div class="calculator-container2">
              <h3>laden </h3>
            <div class="box">1.True Joint angle of 1st UJ: ${k6.toFixed(2)}</div><br>
            <div class="box">2.True Joint angle of 2nd UJ: ${l6.toFixed(2)}</div><br>
            <div class="box">3.True Joint angle of 3rd UJ: ${m6.toFixed(2)}</div><br>
            <div class="box">4.True Joint angle of 4th UJ: ${n6.toFixed(2)}</div><br>
            <div class="box">5.True Joint angle of 5th UJ: ${o6.toFixed(2)}</div><br>
            <div class="box">1.Equivalent angle 1(+---+): ${(Math.sqrt(Math.abs((k6 * k6)-(l6 * l6)-(m6 * m6)-(n6 * n6)+(o6 * o6)))).toFixed(2)}</div><br> 
            <div class="box">2.Equivalent angle 2(++--+): ${(Math.sqrt(Math.abs((k6 * k6) + (l6 * l6) - (m6 * m6) - (n6 * n6) + (o6 * o6)))).toFixed(2)}</div><br> 
            <div class="box">3.Equivalent angle 3(+++-+): ${(Math.sqrt(Math.abs((k6 * k6) + (l6 * l6) + (m6 * m6) - (n6 * n6) + (o6 * o6)))).toFixed(2)}</div><br>  
            <div class="box">4.Equivalent angle 4(++++-): ${(Math.sqrt(Math.abs((k6 * k6) + (l6 * l6) + (m6 * m6) + (n6 * n6) - (o6 * o6)))).toFixed(2)}</div><br>
            <div class="box">5.Equivalent angle 5(+-++-): ${(Math.sqrt(Math.abs((k6 * k6) - (l6 * l6) + (m6 * m6) + (n6 * n6) - (o6 * o6)))).toFixed(2)}</div><br> 
            <div class="box">6.Equivalent angle 6(-+-+-): ${(Math.sqrt(Math.abs(-(k6 * k6) + (l6 * l6) - (m6 * m6) + (n6 * n6) - (o6 * o6)))).toFixed(2)}</div><br> 
            <div class="box">7.Equivalent angle 7(++-+-): ${(Math.sqrt(Math.abs((k6 * k6) + (l6 * l6) - (m6 * m6) + (n6 * n6) - (o6 * o6)))).toFixed(2)}</div><br> 
            <div class="box">8.Equivalent angle 8(+--+-): ${(Math.sqrt(Math.abs((k6 * k6) - (l6 * l6) - (m6 * m6) + (n6 * n6) - (o6 * o6)))).toFixed(2)}</div><br> 
           <div id="betaAngle6">The Recommended Beta angle is : ${minEquivalentAngle.toFixed(2)}  ,${minEquivalentAngle.toFixed(2) <=3 ? 'Safe' : 'Unsafe'}, Phasing : ${v6} </div>
            </div>
            <div class="calculator-container2">
            <h3>unladen </h3>
            <div class="box">1.True Joint angle of 1st UJ: ${k6u.toFixed(2)}</div><br>
            <div class="box">2.True Joint angle of 2nd UJ: ${l6u.toFixed(2)}</div><br>
            <div class="box">3.True Joint angle of 3rd UJ: ${m6u.toFixed(2)}</div><br>
            <div class="box">4.True Joint angle of 4th UJ: ${n6u.toFixed(2)}</div><br>
            <div class="box">5.True Joint angle of 5th UJ: ${o6u.toFixed(2)}</div><br>
            <div class="box">1.Equivalent angle 1(+---+): ${(Math.sqrt(Math.abs((k6u*k6u)-(l6u*l6u)-(m6u*m6u)-(n6u*n6u)+(o6u*o6u)))).toFixed(2)}</div><br> 
            <div class="box">2.Equivalent angle 2(++--+): ${(Math.sqrt(Math.abs((k6u * k6u) + (l6u * l6u) - (m6u * m6u) - (n6u * n6u) + (o6u * o6u)))).toFixed(2)}</div><br> 
            <div class="box">3.Equivalent angle 3(+++-+): ${(Math.sqrt(Math.abs((k6u * k6u) + (l6u * l6u) + (m6u * m6u) - (n6u * n6u) + (o6u * o6u)))).toFixed(2)}</div><br>  
            <div class="box">4.Equivalent angle 4(++++-): ${(Math.sqrt(Math.abs((k6u * k6u) + (l6u * l6u) + (m6u * m6u) + (n6u * n6u) - (o6u * o6u)))).toFixed(2)}</div><br>
            <div class="box">5.Equivalent angle 5(+-++-): ${(Math.sqrt(Math.abs((k6u * k6u) - (l6u * l6u) + (m6u * m6u) + (n6u * n6u) - (o6u * o6u)))).toFixed(2)}</div><br> 
            <div class="box">6.Equivalent angle 6(-+-+-): ${(Math.sqrt(Math.abs(-(k6u * k6u) + (l6u * l6u) - (m6u * m6u) + (n6u * n6u) - (o6u * o6u)))).toFixed(2)}</div><br> 
            <div class="box">7.Equivalent angle 7(++-+-): ${(Math.sqrt(Math.abs((k6u * k6u) + (l6u * l6u) - (m6u * m6u) + (n6u * n6u) - (o6u * o6u)))).toFixed(2)}</div><br> 
            <div class="box">8.Equivalent angle 8(+--+-): ${(Math.sqrt(Math.abs((k6u * k6u) - (l6u * l6u) - (m6u * m6u) + (n6u * n6u) - (o6u * o6u)))).toFixed(2)}</div><br> 
            <div id="betaAngle6u">The Recommended Beta angle is : ${minEquivalentAngleu.toFixed(2)}  ,${minEquivalentAngleu.toFixed(2) <=3 ? 'Safe' : 'Unsafe'}, Phasing : ${v6u} </div>  
          </div>
          </div>
            <hr>
        </div>
        <div class="calculator-container1">

          <h3>Torsional Calculator</h3>
          <div class="container2">
          <div class="calculator-container2">
          <h3>laden </h3>
          <div class="box">Corresponding  ${phase} Phasing The Equivalent beta angle ${r71.toFixed(2)}</div><br>
          <div id="betaAngle71">1.Torsional Excitation: ${t71.toFixed(2)} (rad/s^2), ${t71.toFixed(2) <400 ? 'Safe' : 'Unsafe'}</div><br>
          <div id="betaAngle72">2.Inertia drive Excitation: ${u71.toFixed(2)} (rad/s^2), ${u71.toFixed(2) <2000 ? 'Safe' : 'Unsafe'} </div><br>
          <div id="betaAngle73">3.Inertia Coast Excitation: ${v71.toFixed(2)} (rad/s^2), ${v71.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div> 
          </div>
          <div class="calculator-container2">
          <h3>unladen </h3>
          <div class="box">Corresponding  ${phaseu} Phasing The Equivalent beta angle ${r71u.toFixed(2)}</div><br>
              <div id="betaAngle71u">1.Torsional Excitation: ${t71u.toFixed(2)} (rad/s^2), ${t71u.toFixed(2) <400 ? 'Safe' : 'Unsafe'}</div><br>
              <div id="betaAngle72u">2.Inertia drive Excitation: ${u71u.toFixed(2)} (rad/s^2), ${u71u.toFixed(2) <2000 ? 'Safe' : 'Unsafe'} </div><br>
              <div id="betaAngle73u">3.Inertia Coast Excitation: ${v71u.toFixed(2)} (rad/s^2), ${v71u.toFixed(2) <2000 ? 'Safe' : 'Unsafe'}</div>
              </div>
                </div>
                <hr><hr>
          <h4>Extra part</h4>
          <div class="box">Date/Rev: => ${vehicleName2}</div><br>
          <div class="box">Prepared By: => ${vehicleName3}</div><br>
          <div class="box">Reviewed by: => ${vehicleName4}</div><br>
          <div class="box">Approved by: => ${vehicleName5}</div><br>

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

function printPage() {
    window.print();
}
function refreshContent() {
    window.location.reload();
}


