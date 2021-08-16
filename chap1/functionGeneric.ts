// function getLength<T>(arg: T): number {
//   if (arg.hasOwnProperty("length")) {
//     return arg["length"];
//   }

//   return 0;
// }

// console.log(getLength<number>(22));

// console.log(getLength("Hello world."));

// interface HasLength {
//   length: number;
// }

// function getLength<T extends HasLength>(arg: T): number {
//   return arg.length;
// }

// console.log(getLength<number>(22));

// console.log(getLength("Hello world."));

namespace GenericNamespace {
  interface Wheels {
    count: number;

    diameter: number;
  }

  interface Vehicle<T> {
    getName(): string;

    getWheelCount: () => T;
  }

  class Automobile implements Vehicle<Wheels> {
    constructor(private name: string, private wheels: Wheels) {}

    getName(): string {
      return this.name;
    }

    getWheelCount(): Wheels {
      return this.wheels;
    }
  }

  class Chevy extends Automobile {
    constructor() {
      super("Chevy", { count: 4, diameter: 18 });
    }
  }

  const chevy = new Chevy();

  console.log("car name ", chevy.getName());

  console.log("wheels ", chevy.getWheelCount());
}
