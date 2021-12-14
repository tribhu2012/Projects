let BlackjackGame={
    'you':{'scorespan':'#hey','div':'#row1','score':0},
    'dealer':{'scorespan':'#hey1','div':'#row2','score':0},
    'cards':['2','3','4','5o','6','7','8','9','10','J','Q','K','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5o':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsOver':false,

}





const YOU=BlackjackGame['you'];
const DEALER=BlackjackGame['dealer'];


document.querySelector("#hit").addEventListener('click',Hit);
document.querySelector("#stand").addEventListener('click',DealerLogic);

const hitsound=new Audio('sounds/swish.m4a');
const losesound=new Audio('sounds/cash.mp3');
const winsound=new Audio('sounds/aww.mp3');
const sound1=new Audio('sounds/12.mp4');
const sound12=new Audio('sounds/123.mp4');

function Hit(){
    if(BlackjackGame['isStand']===false){
    let card=BlackjackGame['cards'] [Math.floor(Math.random()*13)]
    console.log(card);
  ShowCard(card,YOU);
  UpdateScore(card,YOU);
  ShowScore(YOU);
  console.log(YOU['score']);
//   ShowWinner(ComputerWinner());
  
}
}


function ShowCard(card,activeplayer){
    if(activeplayer['score']<=21){

    let ImageCard=document.createElement("img");
    ImageCard.src=`images/${card}.png`;
    ImageCard.style.width='136px';
    ImageCard.style.height='146px';
    ImageCard.style.padding='20px';
    document.querySelector(activeplayer['div']).appendChild(ImageCard);
    console.log(ImageCard);
    hitsound.play();
}

}

document.querySelector('#deal').addEventListener('click',blackjackDeal);
// document.querySelector('#deal').addEventListener('click',blackjackDeal1);
// document.querySelector('#deal').addEventListener('click',blackjackDeal2);
// document.querySelector('#deal').addEventListener('click',blackjackDeal3);
// document.querySelector('#deal').addEventListener('click',blackjackDeal4);
// document.querySelector('#deal').addEventListener('click',blackjackDeal5);
// document.querySelector('#deal').addEventListener('click',blackjackDeal6);
// document.querySelector('#deal').addEventListener('click',blackjackDeal7);

// document.querySelector('#stand').addEventListener('click',DealerLogic);




// image=0 You
function blackjackDeal(){

    if(BlackjackGame['turnsOver']===true){
        BlackjackGame['isStand']= false;
    
    // ShowWinner(ComputerWinner());
    let dealerImages=document.querySelector('#row2').querySelectorAll('img');
    let yourImages=document.querySelector('#row1').querySelectorAll('img');
    

    for(i=0;i < dealerImages.length;i++)
    {
        dealerImages[i].remove();
    }

    for(i=0;i < yourImages.length;i++)
    {
        yourImages[i].remove();

    }
    
    YOU['score']=0;
    DEALER['score']=0;
    
    document.querySelector('#hey').style.color= 'white';
    document.querySelector('#hey1').style.color= 'white';

    document.querySelector('#hey').textContent= 0;
    document.querySelector('#hey1').textContent= 0;

    
   
    document.querySelector('#wow').textContent= "BlackJack Game";
    document.querySelector('#wow').style.color='black';

    document.querySelector('#second').textContent= "Be the Master of Cards";
    document.querySelector('#second').style.color='orangered';

    BlackjackGame['turnsOver']=true;



}

}
// Color-white dealer
// function blackjackDeal5()

// {
   
 
//     document.querySelector('#hey').style.color= 'white';

// }

// Color-white you
// function blackjackDeal4(){
   
//     document.querySelector('#hey1').style.color= 'white';

// }

//  score= 0 - you
// function blackjackDeal2(){
    
//     document.querySelector('#hey').textContent= 0;
    

// }

// // score=0 -dealer
// function blackjackDeal3(){
    
//     document.querySelector('#hey1').textContent= 0;
// }

// images=0 dealer
// function blackjackDeal1(){
//     // ShowWinner(ComputerWinner());

//     let yourImages=document.querySelector('#row1').querySelectorAll('img');
   
//     for(i=0;i<=yourImages.length;i++)
//     {
//         yourImages[i].remove();

//     }


// }



// function blackjackDeal6(){
//     document.querySelector('#wow').textContent= "BlackJack Game";
//     document.querySelector('#wow').style.color='black';


// }

// function blackjackDeal7(){
//     document.querySelector('#second').textContent= "Be the Master of Cards";
//     document.querySelector('#second').style.color='orangered';


// }


// Update Score
function UpdateScore(card,activeplayer){

    if(card==='A'){
        if(activeplayer['score']+BlackjackGame['cardsMap'][card][1]<=21){
            activeplayer['score']+=BlackjackGame['cardsMap'][card][1];

        
            


        }
        else{
        activeplayer['score']+=BlackjackGame['cardsMap'][card][0];
    }

    }
    else{

    
    activeplayer['score']+=BlackjackGame['cardsMap'][card];
}
}



// ShowScore
function ShowScore(activeplayer){
    if(activeplayer['score']>21){
        document.querySelector(activeplayer['scorespan']).textContent='  BUSTED !!';
        document.querySelector(activeplayer['scorespan']).style.color='red';
        losesound.play();


    }
    else{
document.querySelector(activeplayer['scorespan']).textContent=activeplayer['score'];
}




}


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
// DEALER SIDE

async function DealerLogic(){
    BlackjackGame['isStand']=true; 
    while(DEALER['score']<17 && BlackjackGame['isStand']===true){
    let card=BlackjackGame['cards'] [Math.floor(Math.random()*13)]
    ShowCard(card,DEALER);
    UpdateScore(card,DEALER);
    ShowScore(DEALER);
    await sleep(1000);
}

    
        BlackjackGame['turnsOver']=true;
        ShowWinner(ComputerWinner());
    

}


// Compute Winner

function ComputerWinner(){
    let winner;
    if(YOU['score']<=21)
    {
        if(YOU['score']>DEALER['score'] || (DEALER['score']>21)){
            BlackjackGame['wins']++;

            winner=YOU;
        }
        else if(YOU['score']<DEALER['score']){
            BlackjackGame['losses']++;
            winner=DEALER;
        }

        else if(YOU['score']===DEALER['score']){
            BlackjackGame['draws']++;
            
        }
    }
    else if (YOU['score']>21 && DEALER['score']<=21){
            BlackjackGame['losses']++;
            winner=DEALER;



        }

    else if (YOU['score']>21 && DEALER['score']>21){
            BlackjackGame['draws']++;
            
            

        }
        console.log(BlackjackGame);
        return winner;

        

        
        // 
    }


    //  Show Winner
function ShowWinner(winner){
    let message, messagecolor;

    if(BlackjackGame['turnsOver']===true){
if(winner===YOU){
    document.querySelector('#wins').textContent=BlackjackGame['wins'];
    message="You WON !";
    message1="Congratulations !! Keep Wining."
    messagecolor="green";
    messagecolor1="purple";
    winsound.play();
}
else if(winner===DEALER){
    document.querySelector('#losses').textContent=BlackjackGame['losses'];
    message="You LOST !";
    message1="No Worries Friend, Better Luck Next Time."
    messagecolor="red";
    messagecolor1="purple";
    sound1.play();
}
else {
    document.querySelector('#draws').textContent=BlackjackGame['draws'];
    message="You DREW !";
    message1="Well Played !! Go For Win Next Time."
    messagecolor="black";
    messagecolor1="purple";
    sound12.play();
}

document.querySelector("#wow").textContent=message;
document.querySelector("#second").textContent=message1;
document.querySelector("#wow").style.color=messagecolor;
document.querySelector("#second").style.color=messagecolor1;
}
}
