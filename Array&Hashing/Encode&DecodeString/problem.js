
let  encodedwords = "";

function encode(strs) {

    for(let ele of strs){
          
         encodedwords +=  ele.length + '#' + ele ;
    }
     
  return encodedwords;
  
}

 
function decode(strs) {
let result = []
 for(let i=0; i<=strs.length -1; i++){
   j=i;
   while(strs[j] !== '#'){
    j++;
   }
   let length =  parseInt(strs.slice(i,j))
        let word =  strs.slice(j+1,j+1+length);
        result.push(word);
        i = j  + length;
  }
  return result;
 }
 

console.log(encode(['abid','jasdf','jk']));

console.log(decode(encodedwords));

 
 