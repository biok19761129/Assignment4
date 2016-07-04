// STEP 1
    /*
    var ANIMAL = ANIMAL || {};
    ANIMAL.Cat = function() {};
    ANIMAL.Dog = function() {};
    */


// STEP 2
    /*
    var cat = {
        var name: "keke";
    }; 

    var dog = function() {
        this._name = "Lukas";
    };
    */

// STEP 3
    /*    
    var myDog = new dog();
    */



// STEP 4
    /*
    var animal = function () {
        window.console.log("The Animal has been created");
    };

    var dog = new animal();
    */



// STEP 5
    /*
    var animal = function(animalType) {
        window.console.log("The Animal " + animalType + " has been created");
    }

    var dog = new animal("Dog");
    */



// STEP 6
  /*
    function animal(type, breed, color, height, length) {
        this._type = type;
        this._breed = breed;
        this._color = color;
        this._height = height;
        this._length = length;
    }
    var dog = new animal("Dog", "Rottweiler", "black/brown", "24 inches", "27 inches");
    //window.console.log(dog);
  */ 



// STEP 7. 
    /*
    function animal(type, breed, color, height, length) {
        this._type = type;
        this._breed = breed;
        this._color = color;
        this._height = height;
        this._length = length;
    }
    var cat = new animal();

    for (var property in cat) {
        console.log(property);
    };

    */




// STEP 8
    /*
    function animal(type, breed, color, height, length) {
        this._type = type;
        this._breed = breed;
        this._color = color;
        this._height = height;
        this._length = length;
        this.speak = function(){
            if (this._type == "Cat") {
                return "The " + this._color + " cat is meowing!";
            } else {
                return "The " + this._color + " dog is barking!";
            }
        };
    }

    var dog = new animal("Dog", "Rottweiler", "black", "24 inches", "27 inches");
    console.log(dog.speak());
    var cat = new animal("Cat", "Persian", "white", "9 inches", "14 inches");
    console.log(cat.speak());
  */ 



// STEP 9
    /*
    function animal (type, breed, color, height, length) {
        var _type = type;
        var _breed = breed;
        var _color = color;
        var _height = height;
        var _length = length;
        var checkType = function() {
            if (_type == "Cat") {
                console.log("The cat has made a noise!");
            } else {
                console.log("The dog has made a noise!");
            } 
        };
        this.speak = function() {
            checkType();
        }
    }

    var dog = new animal("Dog", "Rottweiler", "black", "24 inches", "27 inches");
    dog.speak();
    var cat = new animal("Cat", "Persian", "white", "9 inches", "14 inches");
    cat.speak();
    */



// STEP 10. Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.
    /*
    String.prototype.findWords = function (myParagraph,myWord) 
    {
        var pattern = new RegExp(myWord,"g" );
        var counter = myParagraph.match(pattern);
        window.alert("Your string has " + counter.length + " '" + myWord + "' words");

    };

    var str = new String();
    str.findWords("My black dog is a big dog unlike my small dog", "dog");
    */



// The Recipe Card
/*
var recipe = function(title, servings, ingredients) {
    this._title = title;
    this._servings = servings;
    this._ingredients = ingredients;
    this.logRecipe = function() {
        console.log(this._title + "\nServes: " + this._servings + "\nIngredients: ");
        var x;
        for (x in this._ingredients) {
            console.log("- " + this._ingredients[x][0] + " " + this._ingredients[x][1])
        };
    }
    
};

var ingredients = [[3,"Avocados"] ,[1,"Lime"], ["1 Teaspoon","Salt"], ["1/2 Cup","Onion"], ["3 Tablespoon","Cilantro"],[2,"Diced Tomatoes"], ["1 Teasppon","Garlic"], ["1 Pinch", "Ground Pepper"]];

var guacamole = new recipe("Guacamole", "4", ingredients);
guacamole.logRecipe();

*/




// The Reading List

//Object Constructor
var book = function(title, author, readIt) {
    this._title = title;
    this._author = author;
    this._readIt = readIt;
    this._log = function() {
    window.console.log( '"' + this._title + '" by "' + this._author + '"');
    }
};

// Populate the array using the object constructor
var book1 = new book("The Hobbit", "J.R.R. Tolkien", true);
var book2 = new book("The Pillars of the Earth", "Ken Follett", true);
var book3 = new book("The Da Vinci Code", "Dan Brown", false);
var book4 = new book("Angels and Demons", "Dan Brown", false);
var book5 = new book("Code to Zero", "Ken Follett", true);

// Create array of books. Puting below becaus of hoisting
var bookCollection = [book1, book2, book3, book4, book5];


// Conditional statement
for(var i in bookCollection) {
    //console.log(bookCollection[i]);
    if (bookCollection[i]._readIt == true) {
        console.log('You already read "' + bookCollection[i]._title + '" by ' + bookCollection[i]._author)
    } else if (bookCollection[i]._readIt == false) {
        console.log('You still need to read "' + bookCollection[i]._title + '" by ' + bookCollection[i]._author);
    } 
    
};


