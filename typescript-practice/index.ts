var pet = `🐶`;

// var has functional scoping. So there are two copies of the var pet here.
// so the pet in the house will be cat and the pet outside will be dog.
function setPet() {
  var pet = `😺`;
  console.log(`Pet in the house : ${pet}`);
}

setPet();
console.log(`Pet outside the house: ${pet}`);

// But let's consider a block for example
var index = 0;

for (var index = 0; index < 5; index++) {
  //The var declared above is actually hoisted to the top of the file.
  console.log(index);
}

// So this index value and the one inside the for loop refers to the same var.
// So this prints as 5
console.log(index);

// Using let inside a for loop or any other block of code restricts the variable's scope to be inside the block. So the variable won't even be recognizable outside the block.
// const also has the same scoping as that of let but it's a constant in that its value once initialized cannot be changed.
