// reverse string

const value = "Tamilpriyan9=";

const reversename = (val) => {

  // frst method 
 
 
  const name = val;
  // console.log(name.split("").reverse().join(""));

  // second method


  var reverse = "";
  for (i = name.length - 1; i >= 0; i--) {
    reverse += name[i];
  }
  // console.log(reverse);


  // third method
  var re = val.split("");
 
  var re1 = [];
  for (i = 0; i <= re.length; i++) {
    re1.unshift(re[i]);
  }
  // console.log(re1.join(""));
};

reversename(value);


