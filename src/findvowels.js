const findVowels = (str) => {
let vovels = 'AEIOUYaeiouy';
    let count = 0;

    if (typeof str !== 'string') {
      return 'Passed argument is not a string'
    }

    if (str == '') {
      return 'String is empty'
    }

    for(let i = 0; i < str.length ; i++) {    
        if (vovels.indexOf(str[i]) !== -1) {
          count++;
        }
    }

    if (count > 0) {
      return count;
    } else {
      return 'String does not contain vowels';
    }
};

module.exports = findVowels;
