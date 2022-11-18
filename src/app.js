console.log('hi');


function randomMad (to, from) {
  let recipient = to;
  let author = from;

  let randomVerbs= ['walks', 'fucks', 'runs', 'loves', 'dances'];
  let randomNouns = ['pineapple', 'cabinet', 'sidewalk', 'sputnik', ''];
  let randomAdjs = ['squeaky', 'loose', 'lessened red', 'gravely', 'hard'];
  let randomAdvs = ['gently', 'ambivalently', 'quickly', 'annoyingly', 'obliquely'];

  let randomVerb = randomVerbs[Math.floor(Math.random() * 4)];
  let randomNoun = randomNouns[Math.floor(Math.random() * 4)];
  let randomAdj = randomAdjs[Math.floor(Math.random() * 4)];
  let randomAdv = randomVerbs[Math.floor(Math.random() * 4)];

  function wordPicker(array) {
    return array[Math.floor(Math.random() * 4)];
  }
  console.log(randomVerb, randomNoun, randomAdj, randomAdv);

  let madlib = [`Dear ${to}, I am having a ${wordPicker(randomAdjs)} time at camp. The counselour ` +
`is ${wordPicker(randomAdjs)} and the food is ${wordPicker(randomAdjs)}. I met ${wordPicker(randomNouns)} and we became ${wordPicker(randomAdjs)} friends.` +
`Unfortunately, ${wordPicker(randomNouns)} is ${wordPicker(randomAdjs)} and I ${wordPicker(randomVerbs)} my ${wordPicker(randomNouns)} so we couldnt go ` +
`${wordPicker(randomAdvs)} like everybody else. I need more ${wordPicker(randomNouns)} and a Time sharpener, so please Stealthily Reverse` +
` more when you Patrol back. Your lover, ${from}`]

  console.log(madlib);
}

randomMad('tom', 'tim');