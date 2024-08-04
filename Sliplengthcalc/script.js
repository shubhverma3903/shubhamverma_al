function calculateEquivalentAngles() {
  // Input angles (replace with actual values)
  const a = parseFloat(document.getElementById('angleA').value);
  const b = parseFloat(document.getElementById('angleB').value);
  const c = parseFloat(document.getElementById('angleC').value);
  const d = parseFloat(document.getElementById('angleD').value);
  const f = parseFloat(document.getElementById('angleF').value);

     
      const j = (a*a);
      const k = (b*b);
      const l = (d*d);
      const e =((a+b)/2)+(2*c) -f/2 ;
    
      const m=(Math.sqrt(j+l))+2*c;  // max length
      const n=(Math.sqrt(k+l))+2*c;  // min length
      const o=e+f;
      const p=o-m;
      const q=n-e;

    //new calculation
   const g = parseFloat(document.getElementById('angleG').value);
   const h = parseFloat(document.getElementById('angleH').value);

    //max length
    const r=g+h;

    const s=r-m;  // special condition buffer max
    const t=n-g;  // special condition buffer min
    

  document.getElementById('result').innerHTML = `
<div class="box1">
  <div class="box">
       1. COLLAPSED LENGTH IN DRWG: ${e.toFixed(2)}
    </div><br>
    
  <div class="highlighted" id="betaAngle1">
   2.BUFFER AVAILABLE IN MAX.OPENING CONDITION : ${p.toFixed(2)} (mm) , ${p.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div>
  <br>
  
  <div class="highlighted" id="betaAngle2">
   3.BUFFER AVAILABLE IN MIN.OPENING CONDITION : ${q.toFixed(2)} (mm) , ${q.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div><br>
</div>
<h3>Output From Existing Part</h3>
<div class="box2">
   <div class="highlighted" id="betaAngle3">
   1.BUFFER AVAILABLE IN max.OPENING CONDITION : ${s.toFixed(2)} (mm) , ${s.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div><br>
   
  <div class="highlighted" id="betaAngle4">
   2.BUFFER AVAILABLE IN MIN.OPENING CONDITION : ${t.toFixed(2)} (mm) , ${t.toFixed(2) >=10 ? 'Safe' : 'Unsafe'}</div>
   </div>
  `;

   const betaAngleElement = document.getElementById('betaAngle1');
   if (p < 10) {
       betaAngleElement.style.backgroundColor = 'red';
   } else {
       betaAngleElement.style.backgroundColor = 'green';
   }

  const betangleElement = document.getElementById('betangle');
   if (q < 10) {
       betangleElement.style.backgroundColor = 'red';
   } else {
       betangleElement.style.backgroundColor = 'green';
   }

}
