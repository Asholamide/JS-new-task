//Q1 - convertFahrToCelsius
const convertFahrToCelsius = (n) => {
   let valueType = typeof n
   const res = JSON.stringify(n)
   if (Array.isArray(n)) {
      console.log(`${res} is not a valid number but a/an array`)
      return `${res} is not a valid number but a/an array`
   }
   if (isNaN(n) || n === null || parseInt(n) != n) {
      console.log(`${res} is not a valid number but a/an ${valueType}`)
      return `${res} is not a valid number but a/an ${valueType}`
   } else {
      let fToC = (n - 32) / 1.8;
      let result = `${fToC.toFixed(4)}`
      console.log(result);
      return result;
   }
}


//Q2 - checkYuGiOh

const checkYuGiOh = (n) => {
   let arr = [];
   let res = JSON.stringify(n);
   if (isNaN(n) || n === null || !parseInt(n)) {
      console.log(`invalid parameter: ${res}`);
      return `invalid parameter: ${res}`;
   } else {
      for (let i = 1; i <= n; i++) {
         if (n === 1) {
            return 1
         } else {
            if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
               arr.push("yu-gi-oh")
            } else if (i % 2 === 0 && i % 3 === 0) {
               arr.push("yu-gi")
            } else if (i % 2 === 0 && i % 5 === 0) {
               arr.push("yu-oh")
            } else if (i % 3 === 0 && i % 5 === 0) {
               arr.push("gi-oh")
            } else if (i % 2 === 0) {
               arr.push("yu")
            } else if (i % 3 === 0) {
               arr.push("gi")
            } else if (i % 5 === 0) {
               arr.push("oh")
            } else {
               arr.push('' + i)
            }
         }

      }
      console.log(arr);
      return arr;
   }
}

//test cases

convertFahrToCelsius(0);
convertFahrToCelsius('0');
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius({ temp: 0 });

checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizzbuss is meh");