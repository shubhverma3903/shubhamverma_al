function calculateEquivalentAngles() {
   // Input angles (replace with actual values)
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





   // Display the output
   document.getElementById('result').innerHTML = `
   <div class="box2">

<div class="box">1.SHEAR STRESS: ${f3.toFixed(2)} (deg.)</div><br>
<div class="box">2.MAX.ANGLE OF TWIST: ${g3.toFixed(2)} (rad)</div><br>
<div class="box">3.TORSIONAL SIFFNESS: ${h3.toFixed(2)} (kg)</div><br>
  </div>
`;
}