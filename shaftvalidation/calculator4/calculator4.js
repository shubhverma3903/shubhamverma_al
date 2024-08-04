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

  // Input angles (replace with actual values)
  const c113 = parseFloat(document.getElementById('angleC113').value);
  const d113 = parseFloat(document.getElementById('angleD113').value);
  const e113 = parseFloat(document.getElementById('angleE113').value);
  const f113 = parseFloat(document.getElementById('angleF113').value);
  const g113 = parseFloat(document.getElementById('angleG113').value);
  // Calculate equivalent angles
  const j113 = (c113/d113);

  const k113=((1.22)*(Math.pow(10,8))*(Math.sqrt(Math.pow(e113,2) + Math.pow(e113-(2*f113),2))))/(g113*g113);

  const dropdown113 = document.getElementById("myDropdown113");
  const h113 = dropdown113.value;

  // Input angles (replace with actual values)
  const c114 = parseFloat(document.getElementById('angleC114').value);
  const d114 = parseFloat(document.getElementById('angleD114').value);
  const e114 = parseFloat(document.getElementById('angleE114').value);
  const f114 = parseFloat(document.getElementById('angleF114').value);
  const g114 = parseFloat(document.getElementById('angleG114').value);
  // Calculate equivalent angles
  const j114 = (c114/d114);

  const k114=((1.22)*(Math.pow(10,8))*(Math.sqrt(Math.pow(e114,2) + Math.pow(e114-(2*f114),2))))/(g114*g114);

  const dropdown114 = document.getElementById("myDropdown114");
  const h114 = dropdown114.value;

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
    <div class="calculator-container2">
      <div class="box3">
      <div class="box2">
        VECHILE OUTPUT 
      </div><br>
      <div class="box">
       1.PROPELLER SHAFT MAX.SPEED : ${j113.toFixed(2)} (rpm)
      </div><br>
      <div class="box2">
        PROPELLER SHAFT 3 OUTPUT
      </div><br>
      <div class="box">
       1.CRITICAL SPEED: ${k113.toFixed(2)} (rpm)
      </div><br>
      <div class="box">
       2.DESIGN CRITICAL SPEED: ${(k113*h113).toFixed(2)} (rpm)
      </div><br>
      <div class="box">
       3.ALLOWABLE CRITICAL SPEED: ${(k113*h113*0.75).toFixed(2)} (rpm)
      </div><br>
       <div class="highlighted113" id="betaAngle113"> Against Critical Speed, The Propeller Shaft is : ${(k113*h113*0.75) >= j113 ? 'Safe' : 'Unsafe'}
      </div>
      </div>
      </div>
      <div class="calculator-container3">
        <div class="box3">
        <div class="box2">
          VECHILE OUTPUT 
        </div><br>
        <div class="box">
         1.PROPELLER SHAFT MAX.SPEED : ${j114.toFixed(2)} (rpm)
        </div><br>
        <div class="box2">
          PROPELLER SHAFT 4 OUTPUT
        </div><br>
        <div class="box">
         1.CRITICAL SPEED: ${k114.toFixed(2)} (rpm)
        </div><br>
        <div class="box">
         2.DESIGN CRITICAL SPEED: ${(k114*h114).toFixed(2)} (rpm)
        </div><br>
        <div class="box">
         3.ALLOWABLE CRITICAL SPEED: ${(k114*h114*0.75).toFixed(2)} (rpm)
        </div><br>
         <div class="highlighted114" id="betaAngle114"> Against Critical Speed, The Propeller Shaft is : ${(k114*h114*0.75) >= j114 ? 'Safe' : 'Unsafe'}
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
  const betaAngle113Element = document.getElementById('betaAngle113');
   if ((k113*h113*0.75) <= j113) {
       betaAngle113Element.style.backgroundColor = 'red';
   } else {
       betaAngle113Element.style.backgroundColor = 'green';
   }
  const betaAngle114Element = document.getElementById('betaAngle114');
   if ((k114*h114*0.75) <= j114) {
       betaAngle114Element.style.backgroundColor = 'red';
   } else {
       betaAngle114Element.style.backgroundColor = 'green';
   }

}
function printPage() {
  window.print();
}
function refreshContent() {
  window.location.reload();
}
