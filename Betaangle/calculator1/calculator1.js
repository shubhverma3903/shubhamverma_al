function calculateEquivalentAngles() {
   // Input angles (replace with actual values)

    //laden calculation
   const a = parseFloat(document.getElementById('angleA').value);
   const b = parseFloat(document.getElementById('angleB').value);
   const c = parseFloat(document.getElementById('angleC').value);
   const d = parseFloat(document.getElementById('angleD').value);

   // Calculate equivalent angles
   const e = Math.sqrt(a * a + b * b);
   const f = Math.sqrt(c * c + d * d);

   const angle1 = Math.sqrt(Math.abs((e*e)-(f*f)));
   const angle2 = Math.sqrt(Math.abs(-(e*e)+(f*f)));
    
   const minEquivalentAngle = Math.min(angle1,angle2);
    
    let s = "";
    if (minEquivalentAngle === angle1) {
        s = "P";
    } else {
        s = "P";
    }

    //unladen 
    const aU = parseFloat(document.getElementById('angleAu').value);
    const bU = parseFloat(document.getElementById('angleBu').value);
    const cU = parseFloat(document.getElementById('angleCu').value);
    const dU = parseFloat(document.getElementById('angleDu').value);

    // Calculate equivalent angles
    const eU = Math.sqrt(aU * aU + bU * bU);
    const fU = Math.sqrt(cU * cU + dU * dU);

    const angle1U = Math.sqrt(Math.abs((eU * eU) - (fU * fU)));
    const angle2U = Math.sqrt(Math.abs(-(eU * eU) + (fU * fU)));

    const minEquivalentAngleU = Math.min(angle1U, angle2U);

    let sU = "";
    if (minEquivalentAngleU === angle1U) {
        sU = "P";
    } else {
        sU = "P";
    }



   // Display equivalent angles
   document.getElementById('result').innerHTML = `
   <div class="container">
       <div class="calculator-container1">
       <h3>Laden</h3>
   <div class="box">
      1. True Joint angle of 1st UJ: ${e.toFixed(2)}
   </div><br>
   <div class="box">
      2. True Joint angle of 2nd UJ: ${f.toFixed(2)}
   </div><br>

   <div class="box1">
       1. Equivalent angle 1(+-): ${(Math.sqrt(Math.abs((e*e)-(f*f)))).toFixed(2)}
   </div><br> 
   <div class="box1">
       2. Equivalent angle 2(-+): ${(Math.sqrt(Math.abs(-(e*e)+(f*f)))).toFixed(2)}
   </div><br> 

   <div class="highlighted" id="betaAngle">The Recommended Beta angle is : ${minEquivalentAngle.toFixed(2)}  ,${minEquivalentAngle.toFixed(2) <=3 ? 'Safe' : 'Unsafe'}, Phasing : ${s}  </div>
   </div>
   <div class="calculator-container1">
   <h3>Unladen</h3>
   <div class="box">
        <div class="box">
    1. True Joint angle of 1st UJ: ${eU.toFixed(2)}
</div><br>
<div class="box">
    2. True Joint angle of 2nd UJ: ${fU.toFixed(2)}
</div><br>

<div class="box1">
    1. Equivalent angle 1(+-): ${(Math.sqrt(Math.abs((eU * eU) - (fU * fU)))).toFixed(2)}
</div><br> 
<div class="box1">
    2. Equivalent angle 2(-+): ${(Math.sqrt(Math.abs(-(eU * eU) + (fU * fU)))).toFixed(2)}
</div><br> 

<div class="highlighted" id="betaAngleU">
    The Recommended Beta angle is : ${minEquivalentAngleU.toFixed(2)}, ${minEquivalentAngleU.toFixed(2) <= 3 ? 'Safe' : 'Unsafe'}, Phasing : ${sU}
</div>

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
    const betaAngleUElement = document.getElementById('betaAngleU');

       // Check the value of minEquivalentAngle
       if (minEquivalentAngleU > 3) {
           betaAngleUElement.style.backgroundColor = 'red';
       } else {
           betaAngleUElement.style.backgroundColor = 'green';
       }

}