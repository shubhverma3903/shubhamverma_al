function calculateEquivalentAngles() {
  // Input angles (replace with actual values)
  const a= parseFloat(document.getElementById('angleA').value);
  const b = parseFloat(document.getElementById('angleB').value);
  const c = parseFloat(document.getElementById('angleC').value);

  
  const e = parseFloat(document.getElementById('angleE').value);
  const f = parseFloat(document.getElementById('angleF').value);
  const g = parseFloat(document.getElementById('angleG').value);


  // Calculate equivalent angles
// VEHICLE 
  const j =((a*1000)/(((120*22)/7)*b));

  // PROPELLER SHAFT 

  const k=((1.22)*(Math.pow(10,8))*(Math.sqrt(Math.pow(e,2) + Math.pow(e-(2*f),2))))/(g*g);

  const dropdown = document.getElementById("myDropdown");
  const h = dropdown.value;

  // Display equivalent angles

  document.getElementById('result').innerHTML = `
  <div class="box3">
  <div class="box2">
    VECHILE DATA OUTPUT 
  </div><br>
  <div class="box">
   1.PROPELLER SHAFT MAX.SPEED : ${j.toFixed(2)} (rpm)
  </div><br>
  <div class="box2">
    PROPELLER SHAFT DATA OUTPUT 
  </div><br>
  <div class="box">
   1.CRITICAL SPEED: ${k.toFixed(2)} (rpm)
  </div><br>
  <div class="box">
   2.DESIGN CRITICAL SPEED: ${(k*h).toFixed(2)} (rpm)
  </div><br>
  <div class="box">
   3.ALLOWABLE CRITICAL SPEED: ${(k*h*0.75).toFixed(2)} (rpm)
  </div><br>
   <span class="highlighted" id="betaAngle"> Against Critical Speed, The Propeller Shaft is : ${(k*h*0.75) >= j ? 'Safe' : 'Unsafe'}</span>
  </div>
  `;


   const betaAngleElement = document.getElementById('betaAngle');


   if ((k*h*0.75) <= j) {
       betaAngleElement.style.backgroundColor = 'red';
   } else {
       betaAngleElement.style.backgroundColor = 'green';
   }

}
