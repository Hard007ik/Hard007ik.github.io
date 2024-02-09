(function (window){
    var byeSpeaker = {};
    window.byeSpeaker =byeSpeaker;
    byeSpeaker.sayGoodBye = function(name){
        console.log("Good Bye "+name);
    };
})(window);