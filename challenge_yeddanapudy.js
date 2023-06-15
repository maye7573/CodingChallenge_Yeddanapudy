const fs = require('fs');

function step1(){
    if (process.argv.length < 3) {
        console.log('Input filename as a command line argument.');
        return;
      }
    
    const filename = process.argv[2];
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


function step2(){
    if (process.argv.length < 3) {
        console.log('Input filename as a command line argument.');
        return;
      }
    
    const filename = process.argv[2];
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

function step3() {
    if (process.argv.length < 3) {
        console.log('Input filename as a command line argument.');
        return;
      }
    
    const filename = process.argv[2];
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



//const filename = 'test.txt'; 
const result = step3()
console.log(result)
