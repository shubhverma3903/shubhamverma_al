function calculateEquivalentAngles() {
  // Input angles (replace with actual values)
  const a = parseFloat(document.getElementById('angleA').value);
  const b = parseFloat(document.getElementById('angleB').value);
  const c = parseFloat(document.getElementById('angleC').value);
  const d = parseFloat(document.getElementById('angleD').value);
  const e = parseFloat(document.getElementById('angleE').value);
  const f = parseFloat(document.getElementById('angleF').value);

  // Calculate equivalent angles
  const g = Math.sqrt(a * a + b * b);
  const h = Math.sqrt(c * c + d * d);
  const i = Math.sqrt(e * e + f * f);
  const angle1 = Math.sqrt(Math.abs(g * g - h * h + i * i));
  const angle2 = Math.sqrt(Math.abs(g * g + h * h - i * i));

  const minEquivalentAngle = Math.min(angle1, angle2);

    let s = "";
    if (minEquivalentAngle === angle1) {
        s = "P-P";
    } else {
        s = "C-P";
    }

    // unladen
    // Get input values and parse them as floats
    const a_u = parseFloat(document.getElementById('angleAu').value);
    const b_u = parseFloat(document.getElementById('angleBu').value);
    const c_u = parseFloat(document.getElementById('angleCu').value);
    const d_u = parseFloat(document.getElementById('angleDu').value);
    const e_u = parseFloat(document.getElementById('angleEu').value);
    const f_u = parseFloat(document.getElementById('angleFu').value);

    // Calculate equivalent angles
    const g_u = Math.sqrt(a_u * a_u + b_u * b_u);
    const h_u = Math.sqrt(c_u * c_u + d_u * d_u);
    const i_u = Math.sqrt(e_u * e_u + f_u * f_u);
    const angle1_u = Math.sqrt(Math.abs(g_u * g_u - h_u * h_u + i_u * i_u));
    const angle2_u = Math.sqrt(Math.abs(g_u * g_u + h_u * h_u - i_u * i_u));

    // Determine the minimum equivalent angle
    const minEquivalentAngle_u = Math.min(angle1_u, angle2_u);

    // Determine and set the result string based on the minimum angle
    let s_u = "";
    if (minEquivalentAngle_u === angle1_u) {
        s_u = "P-P";
    } else {
        s_u = "C-P";
    }

    

  // Display equivalent angles
  document.getElementById('result').innerHTML = `
  <div class="container">
      <div class="calculator-container1">
      <h3> Laden</h3>
<div class="box">
     1.True Joint angle of 1st UJ: ${g.toFixed(2)}
</div><br>
<div class="box">
     2.True Joint angle of 2nd UJ: ${h.toFixed(2)}
</div><br>
<div class="box">
     3.True Joint angle of 3rd UJ: ${i.toFixed(2)}
</div><br>

<div class="box1">
      1.Equivalent angle 1(+-+): ${(Math.sqrt(Math.abs(g * g - h * h + i * i))).toFixed(2)}
</div><br> 
<div class="box1">
      2.Equivalent angle 1(++-): ${(Math.sqrt(Math.abs(g * g + h * h - i * i))).toFixed(2)}
</div><br><br>
      <div class="highlighted" id="betaAngle">The Recommended Beta angle is : ${minEquivalentAngle.toFixed(2)}  ,${minEquivalentAngle.toFixed(2) <=3 ? 'Safe' : 'Unsafe'}, Phasing : ${s}  </div>
    </div>
    <div class="calculator-container1">
    <h3>Unladen</h3>
    <div class="box">
         1. True Joint angle of 1st UJ: ${g_u.toFixed(2)}
    </div><br>
    <div class="box">
         2. True Joint angle of 2nd UJ: ${h_u.toFixed(2)}
    </div><br>
    <div class="box">
         3. True Joint angle of 3rd UJ: ${i_u.toFixed(2)}
    </div><br>

    <div class="box1">
          1. Equivalent angle 1 (±+): ${(Math.sqrt(Math.abs(g_u * g_u - h_u * h_u + i_u * i_u))).toFixed(2)}
    </div><br> 
    <div class="box1">
          2. Equivalent angle 2 (++-): ${(Math.sqrt(Math.abs(g_u * g_u + h_u * h_u - i_u * i_u))).toFixed(2)}
    </div><br><br>
    <div class="highlighted" id="betaAngleu">
          The Recommended Beta angle is : ${minEquivalentAngle_u.toFixed(2)}, ${minEquivalentAngle_u <= 3 ? 'Safe' : 'Unsafe'},<br> 
          Phasing : ${s_u}</div>
  </div> 
  </div>`;

        // Get the element where you want to change the background color
        const betaAngleuElement = document.getElementById('betaAngleu');

        // Check the value of minEquivalentAngle
        if (minEquivalentAngle_u > 3) {
            betaAngleuElement.style.backgroundColor = 'red';
        } else {
            betaAngleuElement.style.backgroundColor = 'green';
        }
}