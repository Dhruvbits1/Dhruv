var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oM",
    T : "U "
}));

// or cowsay.think()
const oneLinerJoke = require("one-liner-joke");

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.body);
//
const joke = getRandomJoke.body;
console.log(
    cowsay.say({
      text:joke,
      e:"oo",
      T:"b"  
    })
);
