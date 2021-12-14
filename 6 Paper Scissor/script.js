


function rpsgame(yourchoice){
    console.log(yourchoice);

var humanchoice,botchoice;
botchoice=['rock','paper','scissors'][Math.floor(Math.random()*3)];
console.log(botchoice);

humanchoice=yourchoice.id;
results=decidewinner(humanchoice,botchoice);
console.log(results);

message=finalmessage(results);
console.log(message);

final= frontend(yourchoice.id,botchoice,message);
console.log(final);



}

// Decides Winner

function decidewinner(yourchoice,computerchoice){
    var winnerdata={
        'rock':{'rock':0.5,'scissors':1,'paper':0},
        'paper':{'rock':1,'scissors':0,'paper':0.5},
        'scissors':{'rock':0,'scissors':0.5,'paper':1},
      }

var humanscore=winnerdata[yourchoice][computerchoice];
var botscore=winnerdata[computerchoice][yourchoice];
return [humanscore,botscore];

}

// Final Message

// function finalmessage([humanscore,botscore]){

//     if (humanscore===0 ) {
//         return 'You LOSE';
//       } else if (humanscore===1) {
//         return 'You WIN';
//       } else{
//         return 'You TIE';
//       }

//                      OR     



      function finalmessage([humanscore,botscore]){

        if (humanscore===0 ) {
          return{'message':'You LOSE !',color:'red'};
          } else if (humanscore===1) {
            return{'message':'You WIN !',color:'green'};
          } else{
            return {'message':'It\'s a TIE !',color:'orange'};
          }
    
    
        }    
      

    // Frontend display
    
  function frontend(humanimage,botimage,finalmessage){
    var imagedatabase={
      'rock':document.getElementById('rock').src,
      'paper':document.getElementById('paper').src,
      'scissors':document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
  
  
  var humandiv=document.createElement('div');
  var botdiv=document.createElement('div');
  var messagediv=document.createElement('div');

  humandiv.innerHTML="<img src='" + imagedatabase[humanimage] + "'height=150 width=200 style='box-shadow:2px 2px 5px purple'>"; 
  botdiv.innerHTML="<img src='" + imagedatabase[botimage] + "'height=150 width=200 style='box-shadow:2px 2px 5px green'>"; 
  messagediv.innerHTML="<h1 style='color: " + finalmessage['color'] +";font-size:60px;padding:30px'>"+finalmessage['message']+"</h1";
  // messagediv.innerHTML=frontend(finalmessage);
  
  document.getElementById('fir').appendChild(humandiv);
  document.getElementById('fir').appendChild(messagediv);
  document.getElementById('fir').appendChild(botdiv);
  
  // document.getElementById('fir').appendChild(messagediv);

  

  }
    




// function randomPick(){
//     Math.floor(Math.random()*3);
// }

// function random1(number){
//     return ['rock','paper','scissors'][number];
// }

