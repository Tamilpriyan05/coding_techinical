// longest word

const longname = "hi my name is Tamilpriyan";

const longestwordfun = (longname) => {

    // frst method
 
 
    let arry = longname.split(" ");
  let longestword = "";
  for (let word of arry) {
    // console.log(word);
    if (word.length > longestword.length) {
      longestword = word;
    }
  }



  //   second method 
  
  
  let lo = "";
  for (i = 0; i < arry.length; i++) {
    // console.log(arry[i]);
    if (arry[i].length > lo.length) {
      lo = arry[i];
    }
  }
//   console.log(longestword);

//   console.log(lo);
};

longestwordfun(longname);