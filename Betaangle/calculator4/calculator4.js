
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

   // Calculate equivalent angles
   const k = Math.sqrt(a * a + b * b);
   const l = Math.sqrt(c * c + d * d);
   const m = Math.sqrt(e * e + f * f);
   const n = Math.sqrt(g * g + h * h);
   const o = Math.sqrt(i * i + j * j);


   const angle1 = Math.sqrt(Math.abs((k * k) - (l * l) - (m * m) - (n * n) + (o * o)));
   const angle2 = Math.sqrt(Math.abs((k * k) + (l * l) - (m * m) - (n * n) + (o * o)));
   const angle3 = Math.sqrt(Math.abs((k * k) + (l * l) + (m * m) - (n * n) + (o * o)));
   const angle4 = Math.sqrt(Math.abs((k * k) + (l * l) + (m * m) + (n * n) - (o * o)));
   const angle5 = Math.sqrt(Math.abs((k * k) - (l * l) + (m * m) + (n * n) - (o * o)));
   const angle6 = Math.sqrt(Math.abs(-(k * k) + (l * l) - (m * m) + (n * n) - (o * o)));
   const angle7 = Math.sqrt(Math.abs((k * k) + (l * l) - (m * m) + (n * n) - (o * o)));
   const angle8 = Math.sqrt(Math.abs((k * k) - (l * l) - (m * m) + (n * n) - (o * o)));

   const p = Math.min(angle1, angle2);
   const q = Math.min(angle3, angle4);
   const r = Math.min(angle5, angle6);
   const s = Math.min(angle7, angle8);
   const t = Math.min(p, q);
   const u = Math.min(r, s);
   const minEquivalentAngle = Math.min(t, u);
   // Display cross parallel
    let v = "";
    if (minEquivalentAngle === angle1) {
        v = " P-C-C-P ";
    } else if (minEquivalentAngle === angle2){
        v = " C-P-C-P ";
    } else if (minEquivalentAngle === angle3){
        v = " C-C-P-P ";
    } else if (minEquivalentAngle === angle4){
        v = " C-C-C-P ";
    } else if (minEquivalentAngle === angle5){
        v = " P-P-C-P ";
    } else if (minEquivalentAngle === angle6){
        v = " P-P-P-P ";
    } else if (minEquivalentAngle === angle7){
        v = " C-P-P-P ";
    } else{
        v = " P-C-P-P ";
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
    const i_u = parseFloat(document.getElementById('angleIu').value);
    const j_u = parseFloat(document.getElementById('angleJu').value);

    // Calculate equivalent angles
    const k_u = Math.sqrt(a_u * a_u + b_u * b_u);
    const l_u = Math.sqrt(c_u * c_u + d_u * d_u);
    const m_u = Math.sqrt(e_u * e_u + f_u * f_u);
    const n_u = Math.sqrt(g_u * g_u + h_u * h_u);
    const o_u = Math.sqrt(i_u * i_u + j_u * j_u);

    const angle1_u = Math.sqrt(Math.abs((k_u * k_u) - (l_u * l_u) - (m_u * m_u) - (n_u * n_u) + (o_u * o_u)));
    const angle2_u = Math.sqrt(Math.abs((k_u * k_u) + (l_u * l_u) - (m_u * m_u) - (n_u * n_u) + (o_u * o_u)));
    const angle3_u = Math.sqrt(Math.abs((k_u * k_u) + (l_u * l_u) + (m_u * m_u) - (n_u * n_u) + (o_u * o_u)));
    const angle4_u = Math.sqrt(Math.abs((k_u * k_u) + (l_u * l_u) + (m_u * m_u) + (n_u * n_u) - (o_u * o_u)));
    const angle5_u = Math.sqrt(Math.abs((k_u * k_u) - (l_u * l_u) + (m_u * m_u) + (n_u * n_u) - (o_u * o_u)));
    const angle6_u = Math.sqrt(Math.abs(-(k_u * k_u) + (l_u * l_u) - (m_u * m_u) + (n_u * n_u) - (o_u * o_u)));
    const angle7_u = Math.sqrt(Math.abs((k_u * k_u) + (l_u * l_u) - (m_u * m_u) + (n_u * n_u) - (o_u * o_u)));
    const angle8_u = Math.sqrt(Math.abs((k_u * k_u) - (l_u * l_u) - (m_u * m_u) + (n_u * n_u) - (o_u * o_u)));

    // Determine the minimum equivalent angle
    const p_u = Math.min(angle1_u, angle2_u);
    const q_u = Math.min(angle3_u, angle4_u);
    const r_u = Math.min(angle5_u, angle6_u);
    const s_u = Math.min(angle7_u, angle8_u);
    const t_u = Math.min(p_u, q_u);
    const u_u = Math.min(r_u, s_u);
    const minEquivalentAngle_u = Math.min(t_u, u_u);

    // Display cross parallel
    let v_u = "";
    if (minEquivalentAngle_u === angle1_u) {
        v_u = " P-C-C-P ";
    } else if (minEquivalentAngle_u === angle2_u) {
        v_u = " C-P-C-P ";
    } else if (minEquivalentAngle_u === angle3_u) {
        v_u = " C-C-P-P ";
    } else if (minEquivalentAngle_u === angle4_u) {
        v_u = " C-C-C-P ";
    } else if (minEquivalentAngle_u === angle5_u) {
        v_u = " P-P-C-P ";
    } else if (minEquivalentAngle_u === angle6_u) {
        v_u = " P-P-P-P ";
    } else if (minEquivalentAngle_u === angle7_u) {
        v_u = " C-P-P-P ";
    } else {
        v_u = " P-C-P-P ";
    }

    // Output the result or use it as needed
    console.log(v_u); // For example, log the result to the console


   // Display equivalent angles
   document.getElementById('result').innerHTML = `
   <div class="container">
       <div class="calculator-container1">
       <h3>laden</h3>
<div class="box">
   1.True Joint angle of 1st UJ: ${k.toFixed(2)}
</div><br>
<div class="box">
   2.True Joint angle of 2nd UJ: ${l.toFixed(2)}
</div><br>
<div class="box">
   3.True Joint angle of 3rd UJ: ${m.toFixed(2)}
</div><br>
<div class="box">
   4.True Joint angle of 4th UJ: ${n.toFixed(2)}
</div><br>
<div class="box">
   5.True Joint angle of 5th UJ: ${o.toFixed(2)}
</div><br>

<div class="box1">
    1. Equivalent angle 1(+---+): ${(Math.sqrt(Math.abs((k*k)-(l*l)-(m*m)-(n*n)+(o*o)))).toFixed(2)}
</div><br> 
<div class="box1">
    2.Equivalent angle 2(++--+): ${(Math.sqrt(Math.abs((k * k) + (l * l) - (m * m) - (n * n) + (o * o)))).toFixed(2)}
</div><br> 
<div class="box1">
    3. Equivalent angle 3(+++-+): ${(Math.sqrt(Math.abs((k * k) + (l * l) + (m * m) - (n * n) + (o * o)))).toFixed(2)}
</div><br>  
<div class="box1">
    4.Equivalent angle 4(++++-): ${(Math.sqrt(Math.abs((k * k) + (l * l) + (m * m) + (n * n) - (o * o)))).toFixed(2)}
</div><br>
<div class="box1">
    5.Equivalent angle 5(+-++-): ${(Math.sqrt(Math.abs((k * k) - (l * l) + (m * m) + (n * n) - (o * o)))).toFixed(2)}
</div><br> 
<div class="box1">
    6.Equivalent angle 6(-+-+-): ${(Math.sqrt(Math.abs(-(k * k) + (l * l) - (m * m) + (n * n) - (o * o)))).toFixed(2)}
</div><br> 
<div class="box1">
    7.Equivalent angle 7(++-+-): ${(Math.sqrt(Math.abs((k * k) + (l * l) - (m * m) + (n * n) - (o * o)))).toFixed(2)}
</div><br> 
<div class="box1">
    8.Equivalent angle 8(+--+-): ${(Math.sqrt(Math.abs((k * k) - (l * l) - (m * m) + (n * n) - (o * o)))).toFixed(2)}
</div><br> 
    <div class="highlighted" id="betaAngle">The Recommended Beta angle is : ${minEquivalentAngle.toFixed(2)}  ,${minEquivalentAngle.toFixed(2) <=3 ? 'Safe' : 'Unsafe'}, Phasing : ${v}  </div>
    </div>
    <div class="calculator-container1">
    <h3>unladen</h3>
    <div class="box">
       1. True Joint angle of 1st UJ: ${k_u.toFixed(2)}
    </div><br>
    <div class="box">
       2. True Joint angle of 2nd UJ: ${l_u.toFixed(2)}
    </div><br>
    <div class="box">
       3. True Joint angle of 3rd UJ: ${m_u.toFixed(2)}
    </div><br>
    <div class="box">
       4. True Joint angle of 4th UJ: ${n_u.toFixed(2)}
    </div><br>
    <div class="box">
       5. True Joint angle of 5th UJ: ${o_u.toFixed(2)}
    </div><br>

    <div class="box1">
        1. Equivalent angle 1(+---+): ${(Math.sqrt(Math.abs((k_u * k_u) - (l_u * l_u) - (m_u * m_u) - (n_u * n_u) + (o_u * o_u)))).toFixed(2)}
    </div><br> 
    <div class="box1">
        2. Equivalent angle 2(++--+): ${(Math.sqrt(Math.abs((k_u * k_u) + (l_u * l_u) - (m_u * m_u) - (n_u * n_u) + (o_u * o_u)))).toFixed(2)}
    </div><br> 
    <div class="box1">
        3. Equivalent angle 3(+++-+): ${(Math.sqrt(Math.abs((k_u * k_u) + (l_u * l_u) + (m_u * m_u) - (n_u * n_u) + (o_u * o_u)))).toFixed(2)}
    </div><br>  
    <div class="box1">
        4. Equivalent angle 4(++++-): ${(Math.sqrt(Math.abs((k_u * k_u) + (l_u * l_u) + (m_u * m_u) + (n_u * n_u) - (o_u * o_u)))).toFixed(2)}
    </div><br>
    <div class="box1">
        5. Equivalent angle 5(+-++-): ${(Math.sqrt(Math.abs((k_u * k_u) - (l_u * l_u) + (m_u * m_u) + (n_u * n_u) - (o_u * o_u)))).toFixed(2)}
    </div><br> 
    <div class="box1">
        6. Equivalent angle 6(-+-+-): ${(Math.sqrt(Math.abs(-(k_u * k_u) + (l_u * l_u) - (m_u * m_u) + (n_u * n_u) - (o_u * o_u)))).toFixed(2)}
    </div><br> 
    <div class="box1">
        7. Equivalent angle 7(++-+-): ${(Math.sqrt(Math.abs((k_u * k_u) + (l_u * l_u) - (m_u * m_u) + (n_u * n_u) - (o_u * o_u)))).toFixed(2)}
    </div><br> 
    <div class="box1">
        8. Equivalent angle 8(+--+-): ${(Math.sqrt(Math.abs((k_u * k_u) - (l_u * l_u) - (m_u * m_u) + (n_u * n_u) - (o_u * o_u)))).toFixed(2)}
    </div><br> 
    <div class="highlighted" id="betaAngleu">The Recommended Beta angle is : ${minEquivalentAngle_u.toFixed(2)} , ${minEquivalentAngle_u.toFixed(2) <= 3 ? 'Safe' : 'Unsafe'}, Phasing : ${v_u}</div>
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