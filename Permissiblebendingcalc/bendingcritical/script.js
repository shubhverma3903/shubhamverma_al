function calculateEquivalentAngles() {
    // Input angles (replace with actual values)
    const a = parseFloat(document.getElementById('angleA').value);
    const b = parseFloat(document.getElementById('angleB').value);
    const c = parseFloat(document.getElementById('angleC').value);
    const d = parseFloat(document.getElementById('angleD').value);


    // Calculate equivalent angles
    const e =d*(1.21)*(Math.pow(10, 8))*Math.sqrt((Math.pow(a, 2))+(Math.pow(b, 2)))/Math.pow(c, 2);


    // Display equivalent angles
    document.getElementById('result').innerHTML = `
   <div class="box" id="betaAngle">
      1.Deflection Angle: ${e.toFixed(2)}
   </div><br>
  `;
}