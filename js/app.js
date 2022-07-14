'use script';

console.log('hello world');

let userName = prompt('Greetings, what is your name?');
console.log(userName);

alert('Welcome, ' + userName + '!' + ' Let\'s see how well you know me...');

let score = 0;

function fChicago(){
//while (true){} -- is my preferred but linter is unhappy with it
  for (;;){
    let fromChicago = prompt('Am I from Chicago (y/n)?').toLowerCase();
    // console.log(fromChicago);

    if (fromChicago === 'yes' || fromChicago === 'y') {
    //  console.log('Yes, I am from Chicago!');
      alert('Yes, I am from Chicago!');
      score++;
      break;
    } else if (fromChicago === 'no' || fromChicago === 'n') {
    //  console.log('Sorry, you are wrong. I am from Chicago.');
      alert('Sorry, you are wrong. I am from Chicago.');
      break;
    } else {
    //  console.log('You need to answer with a \'yes\' or a \'no\'');
      alert('You need to answer with a \'yes\' or a \'no\'');
    }
  }
}
fChicago();

//while (true){} -- is my preferred but linter is unhappy with it
for (;;){

  let dogs = prompt('Do I hate dogs (y/n)?').toLowerCase();
  // console.log(dogs);

  if (dogs === 'yes' || dogs === 'y') {
    //  console.log('Sorry, but you are wrong. Dogs rule!');
    alert('Sorry, but you are wrong. Dogs rule!');
    break;
  } else if (dogs === 'no' || dogs === 'n') {
    //  console.log('Yup! Dogs are the best!');
    alert('Yup! Dogs are the best!');
    score++;
    break;
  } else {
    //  console.log('You need to answer with a \'yes\' or a \'no\'');
    alert('You need to answer with a \'yes\' or a \'no\'');
  }
}

//while (true){} -- is my preferred but linter is unhappy with it
for (;;){
  let teacher = prompt('Was I a teacher (y/n)?').toLowerCase();
  // console.log(teacher);

  if (teacher === 'yes' || teacher === 'y') {
    //  console.log('Yes, I was a high school teacher.');
    alert('Yes, I was a high school teacher.');
    score++;
    break;
  } else if (teacher === 'no' || teacher === 'n') {
    //  console.log('Sorry, incorrect. See me after class.');
    alert('Sorry, incorrect. See me after class.');
    break;
  } else {
    //  console.log('You need to answer with a \'yes\' or a \'no\'');
    alert('You need to answer with a \'yes\' or a \'no\'');
  }
}

//while (true){} -- is my preferred but linter is unhappy with it
for (;;){
  let dance = prompt('Do I know how to dance (y/n)?').toLowerCase();
  // console.log(dance);

  if (dance === 'yes' || dance === 'y') {
    //  console.log('I sure do, let\'s boogie\!');
    alert('I sure do, let\'s boogie!');
    score++;
    break;
  } else if (dance === 'no' || dance === 'n') {
    //  console.log('Wrong: Everyone can dance!');
    alert('Wrong: Everyone can dance!');
    break;
  } else {
    //  console.log('You need to answer with a \'yes\' or a \'no\'');
    alert('You need to answer with a \'yes\' or a \'no\'');
  }
}

//while (true){} -- is my preferred but linter is unhappy with it
for (;;){
  let SPU = prompt('Did I attend Seattle Pacific University (y/n)?').toLowerCase();
  // console.log(SPU);

  if (SPU === 'yes' || SPU === 'y') {
    //  console.log('Yes, I both worked and went to school at SPU!');
    alert('Yes, I both worked and went to school at SPU!');
    score++;
    break;
  } else if (SPU === 'no' || SPU === 'n') {
    //  console.log('Sorry, wrong anwer.');
    alert('Sorry, wrong anwer.');
    break;
  } else {
    //  console.log('You need to answer with a \'yes\' or a \'no\'');
    alert('You need to answer with a \'yes\' or a \'no\'');
  }
}


//adding 6th question that takes a number input, but only allows 4 attempts

for (let i=1; i <= 4; i++){

  console.log('Attempt number: ' + i);

  let age = prompt('How old am I?');
  console.log(age);

  age = parseInt(age);

  if (age === 40) {
    console.log('You correctly guessed my age!');
    alert('You correctly guessed my age!');
    score++;
    console.log('current ' + score);
    break;
  }

  else if (age !== 40) {
    console.log('Not quite right...');
    alert('Not quite right... you have ' + (4-i) + ' attempts left.');
  }
}


//adding a 7th question that hss multiple correct answers

let favAnimals = ['dog','capybara','hamster','panda','raccoon','porcupine','koala','quokka','wombat','kangaroo'];
let foundMatch = false;

for (let i=1; i <=6; i++){
  console.log('7th question Attempt number: ' + i);
  let topTen = prompt('Name one of my top 10 favorite animals (singular form). You will have six tries.').toLowerCase();
  console.log('animal guess: ' + topTen);

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
  }
}

alert('You got a score of ' + score + ' out of 7. Thanks for playing, ' + userName +'.');
