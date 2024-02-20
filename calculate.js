//intialize values
let numbersArrayX = [];
let numbersArrayY = [];
let knownValue ;


// Function to handle form submission
function handleSubmit(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get input value from the form
  let numberInputX = document.getElementById('xList').value;
let numberinputY = document.getElementById('yList').value;
  // Split the input string into an array of numbers
  numbersArrayX = numberInputX.split(',').map(Number);
  numbersArrayY = numberinputY.split(',').map(Number);

//write the Number arrays to the html doc
  let xOutput = document.getElementById('xoutput');
xOutput.innerHTML = numbersArrayX;
let yOutput = document.getElementById('youtput');
yOutput.innerHTML = numbersArrayY;
  


//initialization of calculation values

let x = numbersArrayX;
let y = numbersArrayY;
let xy = [];
let xSquared = [];
let sumOfX = 0;
let sumOfY = 0;
let sumOfXY = 0;
let sumOfxSquared = 0 ;
let n = x.length;
let slope = 0 ;
let yIntercept = 0;

if (x.length == y.length) {

    //find the multiplication of X and Y
for (let i = 0; i < x.length; i++) {
  let result = x[i] * y[i];
  xy.push(result)
    }

    //square each number in x and add them to list xy
for(let i = 0; i<x.length; i++){

    let result = Math.pow(x[i],2)
    xSquared.push(result);
    }

//sum of X
for(let i = 0; i<x.length; i++){
    sumOfX = x[i] + sumOfX;
}

//sum of y
for(let i = 0; i<y.length; i++){
    sumOfY = y[i] + sumOfY;
}


//sum of XY
for(let i = 0; i<xy.length; i++){
    sumOfXY = xy[i] + sumOfXY;
}



//sum of X squared
for(let i = 0; i<xSquared.length; i++){
    sumOfxSquared = xSquared[i] + sumOfxSquared;
}

//finding the slope of the graph (m = n(Sum(xy)) - Sum(x)*Sum(y))/ ((n(Sum(x^2))) - (Sum(x))^2 )
 let top = (n*sumOfXY) - (sumOfX*sumOfY)
  let bottom = ((n*sumOfxSquared) - (sumOfX*sumOfX));
  slope = top/bottom;

//calculating the y intercept (b = (sum of y - m(sum of X))/ n )

yIntercept = (sumOfY - (slope*sumOfX))/n;

//calculating the linear equation(y = mx + b)
unknownValue = (slope*knownValue) + yIntercept;

let slopeOutput = document.getElementById('slope');
slopeOutput.innerHTML = slope;

let yInterceptOutput = document.getElementById('yIntercept');
yInterceptOutput.innerHTML = yIntercept;


}


else{ console.log("the x and y value are unequal");}
}

// Get reference to the form and submit button
let myForm = document.getElementById('form');
let submitBtn = document.getElementById('submitBtn');

// Add event listener for form submission
myForm.addEventListener('submit', handleSubmit);


function handleSubmit2(event) {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get input value from the form
  let knownValueInput = document.getElementById('regressionInputBox').value;
  let slope = parseFloat(document.getElementById('slope').innerHTML);
  console.log(slope);

  let yIntercept = parseFloat(document.getElementById('yIntercept').innerHTML);
  // convert the input string into a number

  knownValue = parseInt(knownValueInput)

//calculate the unkwown value and round the decimal up
  let unknownValue = Math.ceil( (slope * knownValue) + yIntercept);

  let regressionResult = document.getElementById('regressionResult');
  regressionResult.innerHTML = unknownValue;


}
// Get reference to the form and submit button
let myForm2 = document.getElementById('regressionInput');
let regressionInputSubmit = document.getElementById('regressionInputSubmit');

// Add event listener for form submission
myForm2.addEventListener('submit', handleSubmit2);