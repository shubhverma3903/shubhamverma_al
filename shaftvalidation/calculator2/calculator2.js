function calculateEquivalentAngles() {
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
  const c112 = parseFloat(document.getElementById('angleC112').value);
  const d112 = parseFloat(document.getElementById('angleD112').value);
  const e112 = parseFloat(document.getElementById('angleE112').value);
  const f112 = parseFloat(document.getElementById('angleF112').value);
  const g112 = parseFloat(document.getElementById('angleG112').value);
  // Calculate equivalent angles
  const j112 = (c112/d112);

  const k112=((1.22)*(Math.pow(10,8))*(Math.sqrt(Math.pow(e112,2) + Math.pow(e112-(2*f112),2))))/(g112*g112);

  const dropdown112 = document.getElementById("myDropdown112");
  const h112 = dropdown112.value;

  // Display equivalent angles

  document.getElementById('result').innerHTML = `
  <h3>OUTPUT</h3>
    <div class="container">
    <div class="calculator-container">
  <div class="box3">
  <div class="box2">
    VECHILE OUTPUT 
  </div><br>
  <div class="box">
   1.PROPELLER SHAFT MAX.SPEED : ${j111.toFixed(2)} (rpm)
  </div><br>
  <div class="box2">
    PROPELLER SHAFT 1 OUTPUT 
  </div><br>
  <div class="box">
   1.CRITICAL SPEED: ${k111.toFixed(2)} (rpm)
  </div><br>
  <div class="box">
   2.DESIGN CRITICAL SPEED: ${(k111*h111).toFixed(2)} (rpm)
  </div><br>
  <div class="box">
   3.ALLOWABLE CRITICAL SPEED: ${(k111*h111*0.75).toFixed(2)} (rpm)
  </div><br>
   <div class="highlighted111" id="betaAngle111"> Against Critical Speed, The Propeller Shaft is : ${(k111*h111*0.75) >= j111 ? 'Safe' : 'Unsafe'}
  </div>
  </div>
  </div>
  <div class="calculator-container1">
    <div class="box3">
    <div class="box2">
      VECHILE OUTPUT 
    </div><br>
    <div class="box">
     1.PROPELLER SHAFT MAX.SPEED : ${j112.toFixed(2)} (rpm)
    </div><br>
    <div class="box2">
      PROPELLER SHAFT 2 OUTPUT 
    </div><br>
    <div class="box">
     1.CRITICAL SPEED: ${k112.toFixed(2)} (rpm)
    </div><br>
    <div class="box">
     2.DESIGN CRITICAL SPEED: ${(k112*h112).toFixed(2)} (rpm)
    </div><br>
    <div class="box">
     3.ALLOWABLE CRITICAL SPEED: ${(k112*h112*0.75).toFixed(2)} (rpm)
    </div><br>
     <div class="highlighted112" id="betaAngle112"> Against Critical Speed, The Propeller Shaft is : ${(k112*h112*0.75) >= j112 ? 'Safe' : 'Unsafe'}
    </div>
    </div>
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
   if ((k112*h112*0.75) <= j112) {
       betaAngle112Element.style.backgroundColor = 'red';
   } else {
       betaAngle112Element.style.backgroundColor = 'green';
   }
}
function printPage() {
  window.print();
}
function refreshContent() {
  window.location.reload();
}
