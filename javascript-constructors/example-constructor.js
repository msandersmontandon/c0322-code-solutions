function ExampleConstructor() {}
console.log('Value of ExampleConstructor.prototype', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype', typeof ExampleConstructor.prototype);
var anExampleConstructor = new ExampleConstructor();
console.log('Value of anExampleConstructor', anExampleConstructor);
var isInstanceOf = anExampleConstructor instanceof ExampleConstructor;
console.log('is anExampleConstructor an instance of ExampleConstructor?', isInstanceOf);
