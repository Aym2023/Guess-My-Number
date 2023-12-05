'use strict';
// console.log(document.querySelector('.message').
// textContent);

// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').
// textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displayMassage = function (massage) {
document.querySelector('.message').textContent = massage ;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

// where is no input //
  if (!guess) {
   // document.querySelector('.message').textContent = 'No Number';
   displayMassage('No Number');

    // where player wins //

} else if (guess === secretnumber) {
   // document.querySelector('.message').textContent = 'Correct Number!';
    displayMassage ('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;
    if(score > highscore) {
     highscore = score;
     document.querySelector('.highscore').textContent = highscore;
    }

    // where guess too hight  //


} else if (guess !== secretnumber) {
    if (score > 1) {
        //document.querySelector('.message').textContent = guess > secretnumber?  'Too Hight' :'Too Low' ;
        displayMassage(guess > secretnumber ? 'Too Hight' : 'Too Low');
        score--;
        document.querySelector('.score').textContent = score; 
        
    } else { //{document.querySelector('.message').textContent = 'You Lost The game';
        displayMassage ('You Lost The game');
        document.querySelector('.score').textContent = 0; 
        }
    }

//     // where guess too hight  //

//    else if (guess > secretnumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = 'Too Hight';
//         score--;
//         document.querySelector('.score').textContent = score; 
//         }
//         else {document.querySelector('.message').textContent = 'You Lost The game';
//         document.querySelector('.score').textContent = 0; 
//     }
// } 

//         // where guess too low  //

//         else if (guess < secretnumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent = 'Too Low';
//         score--;
//         document.querySelector('.score').textContent = score; 
//         }
//         else {document.querySelector('.message').textContent = 'You Lost The game';
//         document.querySelector('.score').textContent = 0;
//      }
//     }
}
);


    // Lec 76, challenge //

    document.querySelector('.again').addEventListener('click', function () {
        score = 20 ;
        secretnumber = Math.trunc(Math.random() * 20) + 1;
       // document.querySelector('.massage').textContent = 'Start guessing';
        displayMassage('Start guessing');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    });



