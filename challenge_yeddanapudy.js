const fs = require('fs');

function step1(filename){
    const valueCount = {};
    const file = fs.readFileSync(filename, 'utf-8');
    const values = file.split(',');

    for (const val of values) {  
        //console.log(val)
        if (/^[a-zA-Z0-9]+$/.test(val)){
            if (val in valueCount){
                valueCount[val] += 1;
            }
            else {
                valueCount[val] = 1

            }
        }
    }
    

    return valueCount

};


function step2(filename){
    const valueLocation = {};
    const file = fs.readFileSync(filename, 'utf-8');
    const values = file.split(',');


    for (let i = 0; i < values.length; i++) {  
        const val = values[i];
        //console.log(i,val)
        if (/^[a-zA-Z0-9]+$/.test(val)){
            if (val in valueLocation){
                valueLocation[val].push(i);
            }
            else {
                valueLocation[val] = [i];

            }
        }
    }
    

    return valueLocation

};

function step3(filename) {
    const counts = step1(filename);
    const indices = step2(filename);
  
    const combinedResult = {};
  
    for (const word in counts) {
      if (counts.hasOwnProperty(word)) {
        combinedResult[word] = {
          count: counts[word],
          indices: indices[word] 
        };
      }
    }
  
    return combinedResult;
  }



const filename = 'test.txt'; // Replace with the path to your text file
const result = step3(filename);
const jsonString = JSON.stringify(result,null,2);
console.log(jsonString);