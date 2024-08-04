function calculateEquivalentAngles() {
    // Input angles (replace with actual values)
    const a = parseFloat(document.getElementById('angleA').value);
    const b = parseFloat(document.getElementById('angleB').value);
    const c = parseFloat(document.getElementById('angleC').value);


    const d = (Math.pow((Math.tan((a * Math.PI) / 180)), 2)) + (Math.pow((Math.tan((b * Math.PI) / 180)), 2));
    const e = (Math.atan(Math.sqrt(d))) * (180 / Math.PI);
    const f = e * c;

    // Display equivalent angles
    document.getElementById('result').innerHTML = `
    <div class="box" id="betaAngle">
      1.Deflection Angle: ${e.toFixed(2)}
    </div><br>
    <div class="box1" id="BetaAngle">
      2. Speed x Deflection Angle: ${f.toFixed(2)}
    </div>
    `;


    const betaAngleElement = document.getElementById('betaAngle');


    if (e > 10) {
        betaAngleElement.style.backgroundColor = 'red';
    } else {
        betaAngleElement.style.backgroundColor = 'green';
    }

    const BetaAngleElement = document.getElementById('BetaAngle');


    if (f > 22000) {
        BetaAngleElement.style.backgroundColor = 'red';
    } else {
        BetaAngleElement.style.backgroundColor = 'green';
    }
}