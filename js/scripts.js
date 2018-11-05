//Declare variables
var input1;
var input2;
var array1;
var array2;
var arrayResult;
var startString;
var endString;
var splitBy;

//Get values typed on all inputs.
function loadInputs(){
    input1 = document.getElementById("input1").value;
    input2 = document.getElementById("input2").value;
    //splitBy = document.getElementById("splitBy").value;
    startString = document.getElementById("startString").value;
    endString = document.getElementById("endString").value;
    array1 = input1.split("\n");
    array2 = input2.split("\n");
    arrayResult = [];
}

function printResult(){
    /*var result;*/
    document.getElementById("result").value = "";
    arrayResult.forEach(str => {
        document.getElementById("result").value += str  + "\n";
    });   
}

function printResult(splitBy){
    document.getElementById("result").value = arrayResult;
}

function addCommas(){
    loadInputs();
    arrayResult = array1;
    printResult("'");
}

// Get elements on input 1 that NOT exist in input 2.
function getDifferences(){
    loadInputs();

    array1.forEach(element1 => {
        var exist = false;
        array2.forEach(element2 => {
            if(element1 == element2)
                exist = true
        });
        if(!exist)
            arrayResult.push(element1);
    });
    printResult("'");
}

//Get elements on input 1 that exist in input 2.
function getEquals(){
    loadInputs();

    array1.forEach(element1 => {
        array2.forEach(element2 => {
            if(element1 == element2)
                arrayResult.push(element1);
        });
    });
    printResult("'");
}
//Get text between two strings
function extractTextBetweenStrings(){
    loadInputs();
    array1.forEach(element => {
        var matches = element.match(new RegExp("(?:"+startString+")(.*?)(?:"+endString+")", "ig"));
        var resultString = "";
        matches.forEach(str => {
            resultString += str != undefined ? str + "," : "";
        });
        arrayResult.push(resultString);
    });
    printResult();
}

//Añadir comillas :v
function addQuotationMarks(){
    loadInputs();
    array1.forEach(element => {
        element = "'" + element + "'";
        arrayResult.push(element);
    });
    printResult("'");
}



