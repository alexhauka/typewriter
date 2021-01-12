const sentence = "hello there from lighthouse labs";


const typewriter = function(string) {
  let time = 100;
  for (let i = 0; i <= string.length; i++) {
    setTimeout(() => {
      if (i === string.length) {
        process.stdout.write('\n');
      } else {
        process.stdout.write(sentence[i]);
      }
    }, time += 100);
  }
};


typewriter(sentence);