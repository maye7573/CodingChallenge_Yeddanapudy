const fs = require("fs");
if (process.argv.length < 3) {
  console.log("Input filename as a command line argument.");
  return;
}

const fileName = process.argv[2];
const file = fs.readFileSync(fileName, "utf-8");
const values = file.split(",");
//filter values to only be upper and lower-case letters and numbers
const filteredValues = values.filter((val) => /^[a-zA-Z0-9]+$/.test(val));


function step1() {
  const valueCount = {};
  for (const val of filteredValues) {
    //console.log(val)
    if (/^[a-zA-Z0-9]+$/.test(val)) {
      if (val in valueCount) {
        valueCount[val] += 1;
      } else {
        valueCount[val] = 1;
      }
    }
  }

  const sortedValueCount = Object.fromEntries(
    Object.entries(valueCount).sort((a, b) => b[1] - a[1])
  );

 

  return sortedValueCount;
}

function step2() {
  const valueLocation = {};

  for (let i = 0; i < filteredValues.length; i++) {
    const val = filteredValues[i];
    //console.log(i,val);

    if (val in valueLocation) {
      valueLocation[val].push(i);
    } else {
      valueLocation[val] = [i];
    }
  }

  const sortedValueLocation = Object.fromEntries(
    Object.entries(valueLocation).sort((a, b) => b[1] - a[1])
  );

  return sortedValueLocation;
}

function step3() {
  const result = {};
  const counts = step1(fileName);
  const indices = step2(fileName);

  for (const count in counts) {
    if (counts.hasOwnProperty(count)) {
      result[count] = {
        count: counts[count],
        indices: indices[count],
      };
    }
  }

  const sortedResult = Object.fromEntries(
    Object.entries(result).sort((a, b) => b[1] - a[1])
  );

  return sortedResult;
}

//const filename = 'test.txt';
const result_step1 = step1();
const result_step2 = step2();
const result_step3 = step3();
console.log("Step 1: \n", JSON.stringify(result_step1), "\n");
console.log("Step 2: \n", JSON.stringify(result_step2), "\n");
console.log("Step 3: \n", JSON.stringify(result_step3), "\n");
