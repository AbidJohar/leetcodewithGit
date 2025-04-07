
 function twoSum(nums, target) {

 // __________________(Brute force)__________________________

//   for(let i=0; i<=nums.length -1; i++ ){
//     for(let j=0; j<=nums.length-1; j++){
//         if(nums[i] + nums[j] === target && i !== j){
//             return [i,j];
//         }

//     }
//   }

 // _______________________(Hash maping)______________________


  let hash = {};

  for(let i=0; i<=nums.length-1; i++){
      let diff = target - nums[i];
      if(hash[diff] !== undefined){
          return [hash[diff],i];
        }  else{
        }
        hash[nums[i]] = i;     
        console.log(hash);
         
  }

return 0;

 }

 console.log(twoSum([3,4,5,6],8));
 
