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
