function squareOf(n: number) {
  return n * n;
}
squareOf(2); // evaluates to 4
// squareOf("z"); // Error TS2345: Argument of type '"z"' is not assignable to
// // parameter of type 'number'.

// let a = 1234; // number
// var b = Infinity * 0.1; // number
// const c = 5678; // 5678
// let d = a < b; // boolean
// let e: number = 100; // number
// let f: 26.218 = 26.218; // 26.218
// let g: 26.218 = 10; // Error TS2322: Type '10' is not assignable
// // to type '26.218'.

// let a = 1234n; // bigint
// const b = 5678n; // 5678n
// var c = a + b; // bigint
// let d = a < 1235; // boolean
// // let e = 88.5n               // Error TS1353: A bigint literal must be an integer.
// let f: bigint = 100n; // bigint
// let g: 100n = 100n; // 100n
// let h: bigint = 100; // Error TS2322: Type '100' is not assignable
// // to type 'bigint'.

let a = "hello"; // string
var b = "billy"; // string
const c = "!"; // '!'
let d = a + " " + b + c; // string
let e: string = "zoom"; // string
let f: "john" = "john"; // 'john'
let g: "john" = "zoe"; // Error TS2322: Type "zoe" is not assignable
// to type "john".
