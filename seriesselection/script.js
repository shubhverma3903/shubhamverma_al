
function calculateEquivalentAngles() {
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

   document.getElementById('result').innerHTML = `
   <div class="box2">
   <div class="box">
       output
   </div><br>

<div class="box">1. MAX.STARTING TORQUE(LGT): ${p.toFixed(2)} (Nm)</div><br>
<div class="box">2. WHEEL SLIP TORQUE: ${r.toFixed(2)} (Nm)</div><br>
<div class="box">3. DESIGN TORQUE: ${t.toFixed(2)} (Nm)</div><br>
<div class="box">4. MAX.SHOCK TORQUE : ${q.toFixed(2)} (Nm)</div><br>
<div class="box">5. CLUTCH DROP TORQUE: ${s.toFixed(2)} (Nm)</div><br>
 <div class="box1">DANA: ${Dana(u)} </div><br>
<div class="box1">RSB: ${RSB(u)} </div><br>
<div class="box1">MSL: ${MSL(u)}</div><br>

 </div>

`;   
}

function printPage() {
    window.print();
}

