(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(var idx in names){
    var firstLetter = names[idx].charAt(0).toLowerCase();
    if(firstLetter == 'j'){
      byeSpeaker.speak(names[idx]);
    }else{
      helloSpeaker.speak(names[idx]);
    }
  }
})();