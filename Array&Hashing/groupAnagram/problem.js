function groupAnagrams(strs) {

 
//______________________( hash mapping )_________________
  let map = {};

  for (let i = 0; i <= strs.length - 1; i++) {
    let sortedword = strs[i].split("").sort().join("");
     
    if (!hashMap[sortedword]) {
      hashMap[sortedword] = [strs[i]];
    } else {
      
      hashMap[sortedword].push(strs[i]);
    }
  }
  let result = Object.values(hashMap);
  
  return result;
}

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]));

