// // union type -> func(input: number | string)
// // ---> assign multiple possible types to a parameter

// // literal type -> const variable = "hello world"
// // ---> TS sets the type to "hello world" since variable is a constant

// // type alias -> type Combined = string | number;
// // ---> defines a custom type that usually stores a union type

// type Combined = number | string;
// type ResultDescriptor = "as-number" | "as-text";

// function combine(
//   input1: Combined,
//   input2: Combined,
//   resultType: ResultDescriptor
// ) {
//   let result: Combined;

//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultType === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }

//   //   if (resultType === "as-number") {
//   //     // + infront of a variable converts it into a number
//   //     // return parseFloat(result)
//   //     return +result;
//   //   } else {
//   //     return result.toString();
//   //   }

//   return result;
// }

// const combinedNum = combine(30, 36, "as-number");
// console.log(combinedNum);

// const combinedTxt = combine("Bene", "K", "as-text");
// console.log(combinedTxt);

// const combinedStr = combine("30", "36", "as-number");
// console.log(combinedStr);
