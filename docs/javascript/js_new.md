## new

### Summary

The `new` operator creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

### Syntax

    new _constructor_[([_arguments_])]

### Parameters

**`constructor`**

> A function that specifies the type of the object instance.

**`arguments`**

> A list of values that the `constructor` will be called with.

### Description

Creating a user-defined object requires two steps:

1. Define the object type by writing a function.
2. Create an instance of the object with `new`.

To define an object type, create a function for the object type that specifies its name and properties. An object can have a property that is itself another object. See the examples below.

When the code `new _foo_(...)` is executed, the following things happen:

1. A new object is created, inheriting from `_foo_.prototype`.
2. The constructor function `_foo_` is called with the specified arguments and `[this][0]` bound to the newly created object. `new _foo_` is equivalent to `new _foo_()`, i.e. if no argument list is specified, `_foo_` is called without arguments.
3. The object returned by the constructor function becomes the result of the whole `new` expression. If the constructor function doesn't explicitly return an object, the object created in step 1 is used instead. (Normally constructors don't return a value, but they can choose to do so if they want to override the normal object creation process.)

You can always add a property to a previously defined object. For example, the statement `car1.color = "black"` adds a property `color` to `car1`, and assigns it a value of "`black`". However, this does not affect any other objects. To add the new property to all objects of the same type, you must add the property to the definition of the `Car` object type.

You can add a shared property to a previously defined object type by using the `[Function.prototype][1]` property. This defines a property that is shared by all objects created with that function, rather than by just one instance of the object type. The following code adds a color property with value `null` to all objects of type `car`, and then overwrites that value with the string "`black`" only in the instance object `car1`. For more information, see [prototype][1].

     function Car() {}
     car1 = new Car()
     
     alert(car1.color)           // undefined
     
     Car.prototype.color = null
     alert(car1.color)           // null
     
     car1.color = "black"
     alert(car1.color)           // black
    

### Examples

### Example: Object type and object instance

Suppose you want to create an object type for cars. You want this type of object to be called `car`, and you want it to have properties for make, model, and year. To do this, you would write the following function:

    function car(make, model, year) {
       this.make = make;
       this.model = model;
       this.year = year;
    }
    

Now you can create an object called `mycar` as follows:

    var mycar = new car("Eagle", "Talon TSi", 1993);
    

This statement creates `mycar` and assigns it the specified values for its properties. Then the value of `mycar.make` is the string "Eagle", `mycar.year` is the integer 1993, and so on.

You can create any number of `car` objects by calls to `new`. For example:

    var kenscar = new car("Nissan", "300ZX", 1992);
    

### Example: Object property that is itself another object

Suppose you define an object called `person` as follows:

    function person(name, age, sex) {
       this.name = name;
       this.age = age;
       this.sex = sex;
    }
    

And then instantiate two new `person` objects as follows:

    var rand = new person("Rand McNally", 33, "M");
    var ken = new person("Ken Jones", 39, "M");
    

Then you can rewrite the definition of `car` to include an `owner` property that takes a person object, as follows:

    function car(make, model, year, owner) {
       this.make = make;
       this.model = model;
       this.year = year;
       this.owner = owner;
    }
    

To instantiate the new objects, you then use the following:

    var car1 = new car("Eagle", "Talon TSi", 1993, rand);
    var car2 = new car("Nissan", "300ZX", 1992, ken);
    

Instead of passing a literal string or integer value when creating the new objects, the above statements pass the objects `rand` and `ken` as the parameters for the owners. To find out the name of the owner of `car2`, you can access the following property:

    car2.owner.name
    



[0]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this
[1]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype