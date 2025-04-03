function isAnagram(s, t) {

// ______________(using hashing method)_____________________
  if (s.length !== t.length) {
    return false;
  }

  let swords = {};
  let twords = {};

  for (let i = 0; i <= s.length - 1; i++) {
    if (swords[s[i]]) {
      swords[s[i]]++;
    } else {
      swords[s[i]] = 1;
    }
  }

  for (let i = 0; i <= t.length - 1; i++) {
    if (twords[t[i]]) {
      twords[t[i]]++;
    } else {
      twords[t[i]] = 1;
    }
  }

  for (let ch in swords) {
    console.log(ch);

    if (swords[ch] !== twords[ch]) {
      return false;
    }
  }

  return true;

  //_________________(using sorting)_____________________

  //  let sortedS = s.split("").sort().join("");

  //  let sortedT = t.split("").sort().join("");

  //  for(let i=0; i<s.length; i++){
  //     if(sortedS[i] !== sortedT[i]){
  //       return false;
  //     }
  //  }
  //  if(sortedS.length === sortedT.length){
  //     return true
  //  }
  // return false;
}

let result = isAnagram("xabcc", "xccba");
console.log(result);
