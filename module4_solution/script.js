var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i in names){
    if (names[i].charAt(0).toLowerCase() == 'j') {
        byeSpeaker.sayGoodBye(names[i]);
    } else {
        helloSpeaker.sayHello(names[i]);
    }
}

/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/