'use script';

function fChicago(){
  for (;;){
    let fromChicago = prompt('Am I from Chicago (y/n)?').toLowerCase();

    if (fromChicago === 'yes' || fromChicago === 'y') {
      alert('Yes, I am from Chicago!');
      score++;
      break;
    } else if (fromChicago === 'no' || fromChicago === 'n') {
      alert('Sorry, you are wrong. I am from Chicago.');
      break;
    } else {
      alert('You need to answer with a \'yes\' or a \'no\'');
    }
  }
}

function fDogs(){

  for (;;){

    let dogs = prompt('Do I hate dogs (y/n)?').toLowerCase();

    if (dogs === 'yes' || dogs === 'y') {
      alert('Sorry, but you are wrong. Dogs rule!');
      break;
    } else if (dogs === 'no' || dogs === 'n') {
      alert('Yup! Dogs are the best!');
      score++;
      break;
    } else {
      alert('You need to answer with a \'yes\' or a \'no\'');
    }
  }
}

function fTeacher(){
  for (;;){
    let teacher = prompt('Was I a teacher (y/n)?').toLowerCase();

    if (teacher === 'yes' || teacher === 'y') {
      alert('Yes, I was a high school teacher.');
      score++;
      break;
    } else if (teacher === 'no' || teacher === 'n') {
      alert('Sorry, incorrect. See me after class.');
      break;
    } else {
      alert('You need to answer with a \'yes\' or a \'no\'');
    }
  }
}


function fDance(){
  for (;;){
    let dance = prompt('Do I know how to dance (y/n)?').toLowerCase();

    if (dance === 'yes' || dance === 'y') {
      alert('I sure do, let\'s boogie!');
      score++;
      break;
    } else if (dance === 'no' || dance === 'n') {
      alert('Wrong: Everyone can dance!');
      break;
    } else {
      alert('You need to answer with a \'yes\' or a \'no\'');
    }
  }
}

function fSPU(){
  for (;;){
    let SPU = prompt('Did I attend Seattle Pacific University (y/n)?').toLowerCase();

    if (SPU === 'yes' || SPU === 'y') {
      alert('Yes, I both worked and went to school at SPU!');
      score++;
      break;
    } else if (SPU === 'no' || SPU === 'n') {
      alert('Sorry, wrong anwer.');
      break;
    } else {
      alert('You need to answer with a \'yes\' or a \'no\'');
    }
  }
}


function fAge(){

  let fakeAge = Math.floor(Math.random() * 101);

  for (let i=1; i <= 4; i++){

    let age = prompt('How old am I?');

    age = parseInt(age);

    if (age === fakeAge) {
      alert('You correctly guessed my age!');
      score++;
      break;
    }

    else if (age < fakeAge) {
      alert('Your guess is too low... you have ' + (4-i) + ' attempts left.');
    }

    else if (age > fakeAge) {
      alert('Your guess is too high... you have ' + (4-i) + ' attempts left.');
    }

    if (i === 4){
      alert(`Sorry, you have run out of guesses. I am ${fakeAge} years old according to the random number generator ;P`);
    }
  }
}

function fTopTen(){

  let favAnimals = ['dog','capybara','hamster','panda','raccoon','porcupine','koala','quokka','wombat','kangaroo'];
  let foundMatch = false;

  for (let i=1; i <=6; i++){
    let topTen = prompt('Name one of my top 10 favorite animals (singular form). You will have six tries.').toLowerCase();

    for (let j=0; j < favAnimals.length; j++){
      if (topTen === favAnimals[j]){
        alert ('Yup, that\'s one! My Top Ten animals are: ' + favAnimals);
        score++;
        foundMatch = true;
        break;
      }
    }

    if (foundMatch) {
      break;
    }
    else {
      alert ('Sorry, incorrect answer. You have ' + (6-i) + ' attempts left.');
      if (i === 6) {
        alert ('Sorry, no matches, but you can learn about my favorite animals in just a few clicks.');
      }
    }
  }
}


let userName = prompt('Greetings, what is your name?');

alert('Welcome, ' + userName + '!' + ' Let\'s see how well you know me...');

let score = 0;

fChicago();
fDogs();
fTeacher();
fDance();
fSPU();
fAge();
fTopTen();

alert('You got a score of ' + score + ' out of 7. Thanks for playing, ' + userName +'.');
