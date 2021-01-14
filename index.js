// Big Int
const bigInt = () => {
  let bigInt = 1n;
  console.log(bigInt + 2n);
  console.log(bigInt == 1);
  console.log(bigInt === 1);
};

// Dynamic import
const dynamicImport = async () => {
  let common = await import("./utils/common.js");
  console.log(common.sum(1, 2));
};

/*
 ************* Run functions ******************
 */

// bigInt();
// dynamicImport();
