const randomGame = () => {
  let num;
  let tries = 0;
  let timer = setInterval(function () {
    num = Math.random();
    tries++;
    if (num > 0.75) {
      clearInterval(timer);
      if (tries == 1) {
        console.log("It took only one try!");
        console.log(tries);
      } else {
        console.log(`It took ${tries} tries before reaching greater than .75`);
        console.log(tries);
      }
    }
  }, 1000);
};

randomGame();
