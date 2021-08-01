function squareOf(n: number) {
  return n * n;
}
squareOf(2); // evaluates to 4
squareOf("z"); // Error TS2345: Argument of type '"z"' is not assignable to
// parameter of type 'number'.

let a = 1234; // number
var b = Infinity * 0.1; // number
const c = 5678; // 5678
let d = a < b; // boolean
let e: number = 100; // number
let f: 26.218 = 26.218; // 26.218
let g: 26.218 = 10; // Error TS2322: Type '10' is not assignable
// to type '26.218'.
