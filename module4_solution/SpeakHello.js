(function(window){
    var helloSpeaker = {};
    window.helloSpeaker = helloSpeaker;
    helloSpeaker.sayHello = function(name){
        console.log("Hello "+name);
    }
})(window);