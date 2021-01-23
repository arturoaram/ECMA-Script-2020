// Big Int
const bigInt = () => {
  let bigInt = 1n;
  console.log(bigInt + 2n);
  console.log(bigInt == 1);
  console.log(bigInt === 1);
};

// Dynamic import
const dynamicImport = async () => {
  let common = await import('./utils/common.js');
  console.log(common.sum(1, 2));
};

// GlobalThis Object
const globalFunction = () => {
  console.log(globalThis === global);
};

// Nullish Coalescing
const nullish = () => {
  console.log(false ?? 'some truthy value'); // false
  console.log(undefined ?? 'some truthy value'); // true value
  console.log(null ?? 'some truthy value'); // true value
};

// Optional Chaining
const optionalChaining = () => {
  const obj = { foo: { bar: 100 } };
  console.log(obj.foo?.foo?.bar); // should be undefined instead of erroring out
  console.log(obj.foo?.bar);
  console.log(obj?.fooFunction?.()); // it works for functions as well but it requires additional syntax
};

// Promise.allSettled
const allSettled = () => {
  const myPromiseArr = [Promise.resolve(100), Promise.reject(0)];
  // Returns an array of all the promises in the array but I'm filtering out just the approved ones
  Promise.allSettled(myPromiseArr).then((results) =>
    console.log(results.filter((result) => result.status === 'rejected'))
  );
};

// String matchAll regex
const matchAllFunction = () => {
  // Will display an array of all the valid values of the string
  const regex = /[1-9]/g;
  const str = '1asdf2asdf3asdf4';
  const iterator = [...str.matchAll(regex)];
  console.log(iterator);
  console.log(iterator[0][0]);
};

// for-of loops
const forOf = () => {
  const arr = ['1', 2, '3', 4];
  for (const elem of arr) {
    console.log(elem);
  }
};

// import meta data
const metadata = () => {
  // will provide the exact path of this file.
  const url = new URL('data.json', import.meta.url);
  console.log(url);
};

/*
 ************* Run functions ******************
 */

// bigInt();
// dynamicImport();
// globalFunction();
// nullish();
// optionalChaining();
// allSettled();
// matchAllFunction();
// forOf();
// metadata();
