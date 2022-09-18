// 버튼 누르면 글자변경
document.getElementById("change").addEventListener("click", () => {
  제목변경("변경성공쓰"), 색상변경("red"), 폰트사이즈변경("100px");
});
let 제목변경 = (a) => (document.getElementById("title").innerHTML = a);
let 색상변경 = (a) => (document.getElementById("title").style.color = a);
let 폰트사이즈변경 = (a) =>
  (document.getElementById("title").style.fontSize = a);

//  constructor function
const person1 = new Person("roongz", 17, 1, 3, 4, 5);

function Person(name, age, place, a, b, c) {
  this.name = name;
  this.age = age;
  this.place = place;
  this.a = a;
  this.b = b;
  this.c = c;
}

document.getElementById(
  "person"
).innerHTML = `my name is ${person1.name} and my age is ${person1.age}`;

// for in
for (key in person1) {
  console.log(key);
}

// for of
const array = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 10];
for (value of array) {
  console.log(value);
}

// object cloning (Object.assign)
// const person2 = {};
// Object.assign(person2, person1);
const person2 = Object.assign({}, person1);
console.log(person2);
