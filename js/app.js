'use script';

console.log('hello world');

let userName = prompt('Greetings, what is your name?');
console.log(userName);

alert('Welcome, ' + userName + '!' + ' Let\'s see how well you know me...');

let fromChicago = prompt('Am I from Chicago (y/n)?').toLowerCase();
// console.log(fromChicago);

if (fromChicago === 'yes' || fromChicago === 'y') {
//  console.log('Yes, I am from Chicago!');
  alert('Yes, I am from Chicago!');
} else if (fromChicago === 'no' || fromChicago === 'n') {
//  console.log('Sorry, you are wrong. I am from Chicago.');
  alert('Sorry, you are wrong. I am from Chicago.');
} else {
//  console.log('You need to answer with a \'yes\' or a \'no\'');
  alert('You need to answer with a \'yes\' or a \'no\'');
}

let dogs = prompt('Do I hate dogs (y/n)?').toLowerCase();
// console.log(dogs);

if (dogs === 'yes' || dogs === 'y') {
//  console.log('Sorry, but you are wrong. Dogs rule!');
  alert('Sorry, but you are wrong. Dogs rule!');
} else if (dogs === 'no' || dogs === 'n') {
//  console.log('Yup! Dogs are the best!');
  alert('Yup! Dogs are the best!');
} else {
//  console.log('You need to answer with a \'yes\' or a \'no\'');
  alert('You need to answer with a \'yes\' or a \'no\'');
}

let teacher = prompt('Was I a teacher (y/n)?').toLowerCase();
// console.log(teacher);

if (teacher === 'yes' || teacher === 'y') {
//  console.log('Yes, I was a high school teacher.');
  alert('Yes, I was a high school teacher.');
} else if (teacher === 'no' || teacher === 'n') {
//  console.log('Sorry, incorrect. See me after class.');
  alert('Sorry, incorrect. See me after class.');
} else {
//  console.log('You need to answer with a \'yes\' or a \'no\'');
  alert('You need to answer with a \'yes\' or a \'no\'');
}

let dance = prompt('Do I know how to dance (y/n)?').toLowerCase();
// console.log(dance);

if (dance === 'yes' || dance === 'y') {
//  console.log('I sure do, let\'s boogie\!');
  alert('I sure do, let\'s boogie!');
} else if (dance === 'no' || dance === 'n') {
//  console.log('Wrong: Everyone can dance!');
  alert('Wrong: Everyone can dance!');
} else {
//  console.log('You need to answer with a \'yes\' or a \'no\'');
  alert('You need to answer with a \'yes\' or a \'no\'');
}

let SPU = prompt('Did I attend Seattle Pacific University (y/n)?').toLowerCase();
// console.log(SPU);

if (SPU === 'yes' || SPU === 'y') {
//  console.log('Yes, I both worked and went to school at SPU!');
  alert('Yes, I both worked and went to school at SPU!');
} else if (SPU === 'no' || SPU === 'n') {
//  console.log('Sorry, wrong anwer.');
  alert('Sorry, wrong anwer.');
} else {
//  console.log('You need to answer with a \'yes\' or a \'no\'');
  alert('You need to answer with a \'yes\' or a \'no\'');
}

alert('Thanks for playing, ' + userName +'.');
