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

   // Calculate equivalent angles
   const i = Math.sqrt(a * a + b * b);
   const j = Math.sqrt(c * c + d * d);
   const k = Math.sqrt(e * e + f * f);
   const l = Math.sqrt(g * g + h * h);
   const angle1 = Math.sqrt(Math.abs(-(i*i)+(j*j)-(k*k)+(l*l)));
   const angle2 = Math.sqrt(Math.abs((i*i)+(j*j)-(k*k)+(l*l)));
   const angle3 = Math.sqrt(Math.abs((i*i)+(j*j)+(k*k)-(l*l)));
   const angle4 = Math.sqrt(Math.abs((i*i)-(j*j)-(k*k)+(l*l)));

   const p=Math.min(angle1, angle2);
   const q=Math.min(angle3, angle4);

   const minEquivalentAngle = Math.min(p,q);

    let s = "";
    if (minEquivalentAngle === angle1) {
        s = "P-P-P";
    } else if (minEquivalentAngle === angle2){
        s = "C-P-P";
    } else if (minEquivalentAngle === angle3){
        s = "C-C-P";
    }
    else{
        s = "P-C-P";
    }

    // unladen
    // Get input values and parse them as floats
    const a_u = parseFloat(document.getElementById('angleAu').value);
    const b_u = parseFloat(document.getElementById('angleBu').value);
    const c_u = parseFloat(document.getElementById('angleCu').value);
    const d_u = parseFloat(document.getElementById('angleDu').value);
    const e_u = parseFloat(document.getElementById('angleEu').value);
    const f_u = parseFloat(document.getElementById('angleFu').value);
    const g_u = parseFloat(document.getElementById('angleGu').value);
    const h_u = parseFloat(document.getElementById('angleHu').value);

    // Calculate equivalent angles
    const i_u = Math.sqrt(a_u * a_u + b_u * b_u);
    const j_u = Math.sqrt(c_u * c_u + d_u * d_u);
    const k_u = Math.sqrt(e_u * e_u + f_u * f_u);
    const l_u = Math.sqrt(g_u * g_u + h_u * h_u);
    const angle1_u = Math.sqrt(Math.abs(-(i_u * i_u) + (j_u * j_u) - (k_u * k_u) + (l_u * l_u)));
    const angle2_u = Math.sqrt(Math.abs((i_u * i_u) + (j_u * j_u) - (k_u * k_u) + (l_u * l_u)));
    const angle3_u = Math.sqrt(Math.abs((i_u * i_u) + (j_u * j_u) + (k_u * k_u) - (l_u * l_u)));
    const angle4_u = Math.sqrt(Math.abs((i_u * i_u) - (j_u * j_u) - (k_u * k_u) + (l_u * l_u)));

    // Determine the minimum equivalent angle
    const p_u = Math.min(angle1_u, angle2_u);
    const q_u = Math.min(angle3_u, angle4_u);
    const minEquivalentAngle_u = Math.min(p_u, q_u);

    // Determine and set the result string based on the minimum angle
    let s_u = "";
    if (minEquivalentAngle_u === angle1_u) {
        s_u = "P-P-P";
    } else if (minEquivalentAngle_u === angle2_u) {
        s_u = "C-P-P";
    } else if (minEquivalentAngle_u === angle3_u) {
        s_u = "C-C-P";
    } else {
        s_u = "P-C-P";
    }

   


   // Display equivalent angles
   document.getElementById('result').innerHTML = `
   <div class="container">
   <div class="calculator-container1">

   <h3> Laden</h3>
<div class="box">
   1.True Joint angle of 1st UJ: ${i.toFixed(2)}
</div><br>
<div class="box">
   2.True Joint angle of 2nd UJ: ${j.toFixed(2)}
</div><br>
<div class="box">
   3.True Joint angle of 3rd UJ: ${k.toFixed(2)}
</div><br>
<div class="box">
   4.True Joint angle of 4th UJ: ${l.toFixed(2)}
</div><br>

<div class="box1">
    1.Equivalent angle 1(-+-+): ${(Math.sqrt(Math.abs(-(i*i)+(j*j)-(k*k)+(l*l)))).toFixed(2)}
</div><br> 
<div class="box1">
    2.Equivalent angle 2(++-+): ${(Math.sqrt(Math.abs((i*i)+(j*j)-(k*k)+(l*l)))).toFixed(2)}
</div><br> 
<div class="box1">
    3.Equivalent angle 3(+++-): ${(Math.sqrt(Math.abs((i*i)+(j*j)+(k*k)-(l*l)))).toFixed(2)}
</div><br> 
<div class="box1">
    4.Equivalent angle 1(+--+): ${(Math.sqrt(Math.abs((i*i)-(j*j)-(k*k)+(l*l)))).toFixed(2)}
</div><br> 
   <div class="highlighted" id="betaAngle">The Recommended Beta angle is : ${minEquivalentAngle.toFixed(2)}  ,${minEquivalentAngle.toFixed(2) <=3 ? 'Safe' : 'Unsafe'}, Phasing : ${s}  </div>
   </div>
   <div class="calculator-container1">
    <h3>unladen</h3>
   <div class="box">
      1. True Joint angle of 1st UJ: ${i_u.toFixed(2)}
   </div><br>
   <div class="box">
      2. True Joint angle of 2nd UJ: ${j_u.toFixed(2)}
   </div><br>
   <div class="box">
      3. True Joint angle of 3rd UJ: ${k_u.toFixed(2)}
   </div><br>
   <div class="box">
      4. True Joint angle of 4th UJ: ${l_u.toFixed(2)}
   </div><br>

   <div class="box1">
       1. Equivalent angle 1 (-+-+): ${(Math.sqrt(Math.abs(-(i_u * i_u) + (j_u * j_u) - (k_u * k_u) + (l_u * l_u)))).toFixed(2)}
   </div><br> 
   <div class="box1">
       2. Equivalent angle 2 (++-+): ${(Math.sqrt(Math.abs((i_u * i_u) + (j_u * j_u) - (k_u * k_u) + (l_u * l_u)))).toFixed(2)}
   </div><br> 
   <div class="box1">
       3. Equivalent angle 3 (+++-): ${(Math.sqrt(Math.abs((i_u * i_u) + (j_u * j_u) + (k_u * k_u) - (l_u * l_u)))).toFixed(2)}
   </div><br> 
   <div class="box1">
       4. Equivalent angle 4 (+--+): ${(Math.sqrt(Math.abs((i_u * i_u) - (j_u * j_u) - (k_u * k_u) + (l_u * l_u)))).toFixed(2)}
   </div><br> 
   <div class="highlighted" id="betaAngleu">
       The Recommended Beta angle is : ${minEquivalentAngle_u.toFixed(2)}, ${minEquivalentAngle_u <= 3 ? 'Safe' : 'Unsafe'},Phasing : ${s_u}</div>
 </div>
 </div>
     `;

     // Get the element where you want to change the background color
     const betaAngleElement = document.getElementById('betaAngle');

     // Check the value of minEquivalentAngle
     if (minEquivalentAngle > 3) {
         betaAngleElement.style.backgroundColor = 'red';
     } else {
         betaAngleElement.style.backgroundColor = 'green';
     }
    const betaAngleuElement = document.getElementById('betaAngleu');

     // Check the value of minEquivalentAngle
     if (minEquivalentAngle_u > 3) {
         betaAngleuElement.style.backgroundColor = 'red';
     } else {
         betaAngleuElement.style.backgroundColor = 'green';
     }
}