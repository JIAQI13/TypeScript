class Person {
  name: string;
}

const jill: { name: string } = {
  name: "jill",
};
const jqill: { name: string } = {
  name: "jqill",
};

const person: Person = jqill;

console.log(person);
