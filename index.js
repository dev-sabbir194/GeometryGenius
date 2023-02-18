let serial = 1;


// *---------------------first card details------------------------*//
// *--------------------------------------------------------------*//   

document.getElementById("first-card").addEventListener("click", function(){
  const titleName = document.getElementById("first-title").innerText
  const triangleFirstInput = document.getElementById("input-1").value;
  const triangleSecondInput = document.getElementById("input-2").value;
  const area = (0.5);
  const condition = area * parseInt(triangleFirstInput) * parseInt(triangleSecondInput);
  const result = condition.toFixed(2);
// ------------------validation-------------------//
  const inputOne = parseFloat(triangleFirstInput);
  const inputTwo = parseFloat(triangleSecondInput);
  if (isNaN(inputOne) || isNaN(inputTwo) || inputOne <= 0 || inputTwo <= 0) {
    return alert("Please enter valid positive numbers for both inputs.");
  }
  displayData(titleName, result);
  })


// *----------------------second card details---------------------*//
// *--------------------------------------------------------------*//   

  document.getElementById("second-card").addEventListener("click", function(){
    const titleName = document.getElementById("second-title").innerText;
    const rectangleFirstInput = document.getElementById("input-3").value;
    const rectangleSecondInput = document.getElementById("input-4").value; 
    const condition = parseInt(rectangleFirstInput) * parseInt(rectangleSecondInput);
    const result = condition.toFixed(2);
    // -----------------validation---------------//
    const inputOne = parseFloat(rectangleFirstInput);
    const inputTwo = parseFloat(rectangleSecondInput); 
    if (isNaN(inputOne) || isNaN(inputTwo) || inputOne <= 0 || inputTwo <= 0) {
      return alert("Please enter valid positive numbers for both inputs.");
    }
    // console.log(rectangleFirstInput, rectangleSecondInput)
    displayData(titleName, result);
    })


    

// *----------------------third card details----------------------*//
// *--------------------------------------------------------------*//   


document.getElementById("third-card").addEventListener("click", function(){
  const titleName = document.getElementById("third-title").innerText;
  const parallelogramFirstInput = document.getElementById("input-5").value;
  const parallelogramSecondInput = document.getElementById("input-6").value;
  const condition = parseInt(parallelogramFirstInput) * parseInt(parallelogramSecondInput);
  const result = condition.toFixed(2);
// ---------------------validation-----------------------//
  const inputOne = parseFloat(parallelogramFirstInput);
  const inputTwo = parseFloat(parallelogramSecondInput);  
  if (isNaN(inputOne) || isNaN(inputTwo) || inputOne <= 0 || inputTwo <= 0) {
    return alert("Please enter valid positive numbers for both inputs.");
  }

  displayData(titleName, result);
  // console.log(parallelogramFirstInput, parallelogramSecondInput)
  })


  // *---------------------fourth card details----------------------*//
// *--------------------------------------------------------------*//   
    
document.getElementById("fourth-card").addEventListener("click", function(){
  const titleName = document.getElementById("fourth-title").innerText;
  const rhombusFirstInput = document.getElementById("input-7").value;
  const rhombusSecondInput = document.getElementById("input-8").value;
  const firstnumber = (0.5);
  const condition = firstnumber * parseInt(rhombusFirstInput) * parseInt(rhombusSecondInput);
  const result = condition.toFixed(2);
// ---------------------validation--------------------//
  const inputOne = parseFloat(rhombusFirstInput);
  const inputTwo = parseFloat(rhombusSecondInput);
  if (isNaN(inputOne) || isNaN(inputTwo) || inputOne <= 0 || inputTwo <= 0) {
    return alert("Please enter valid positive numbers for both inputs.");
  }
  displayData(titleName, result);
  })


// *----------------------fifth card details----------------------*//
// *--------------------------------------------------------------*//   


  document.getElementById("fifth-card").addEventListener("click", function(){
    const titleName = document.getElementById("fifth-title").innerText;
    const pentagonFirstInput = document.getElementById("input-9").value;
    const pentagonSecondInput = document.getElementById("input-10").value;
    const firstnumber = (.05);
    const condition = firstnumber * parseInt(pentagonFirstInput) * parseInt(pentagonSecondInput)
    const result = condition.toFixed(2);
// ------------------------validation----------------------//
    const inputOne = parseFloat(pentagonFirstInput);
    const inputTwo = parseFloat(pentagonSecondInput);
    if (isNaN(inputOne) || isNaN(inputTwo) || inputOne <= 0 || inputTwo <= 0) {
      return alert("Please enter valid positive numbers for both inputs.");
    }
    displayData(titleName, result);
    })


// *----------------------sixth card details----------------------*//
// *--------------------------------------------------------------*//   

 
    document.getElementById("sixth-card").addEventListener("click", function(){
      const titleName = document.getElementById("sixth-title").innerText;
      const ellipseFirstInput = document.getElementById("input-11").value;
      const ellipseSecondInput = document.getElementById("input-12").value; 
      const pi = (3.14);
      const condition = pi * parseInt(ellipseFirstInput) * parseInt(ellipseSecondInput);
      const result = condition.toFixed(2);
// ---------------------------validation-------------------//
      const inputOne = parseFloat(ellipseFirstInput);
      const inputTwo = parseFloat(ellipseSecondInput);
      if (isNaN(inputOne) || isNaN(inputTwo) || inputOne <= 0 || inputTwo <= 0) {
        return alert("Please enter valid positive numbers for both inputs.");
      }
      // console.log(ellipseFirstInput, ellipseSecondInput)
      displayData(titleName, result);
      })
