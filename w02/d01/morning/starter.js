
//part 1:



//1a
function kanyesGoldenUnicorn() {
  console.log('wanted a plantinum unicorn');
}

// as a function expression (with semicolon)
var kanyesGoldenUnicorn = function() {
  console.log('wanted a plantinum unicorn');
};

//1b
var items = [];

//1c

var bigAnimalArray = [
  'elephant',
  'tiger',
  'bunny',
  'unicorn',
  'polar bear',
];



//part 2:

var pickle = 22;
var cat = Math.random()*10;

if (cat > 9) {
  console.log('Found the cat!');
} else if (pickle < 4) {
  console.log('AAHRHW');
}


//part 3:
function login() {
  function hideContainer(){
    console.log('dummy hidden container');
  }
  $status = document.getElementById('status');
  // we're assuming there was an HTTP call here, that returned a 'response'
  if (response.status === 'connected') {
    $status.innerHTML = "we are connected";

  } else if (response.status === 'not_authorized') {
    $status.innerHTML = "Not connected";
    hideContainer();

  } else {
    document.getElementById('status').innerHTML = "You are not logged in into facebook, please log in to take a quiz";

  }
}


//part 4:
function howMany(selectObject, otherThing, moreThings) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}


// part 5:
// es5
var userInfo = {
  fname: req.body.fname,
  lname: req.body.lname,
  email: email,
  passwordDigest: hash
};

// es6
/* blurg */
const userInfo = {
  fname: req.body.fname,
  lname: req.body.lname,
  email: email,
  passwordDigest: hash,
};


// part 6:
var newValue = 0;
var $balance = $('.balance');

if (($('#check').html().length+1) === $('#userPick').html().length) {
  $winnermsg.append('Congratulation you won');
  newValue++;
  $balance.text(newValue);
} else {
  newValue -= 1;
  $balance.text(newValue);
}
