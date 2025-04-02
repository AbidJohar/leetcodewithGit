function hasDuplicate(nums) {
  // ____________(brute force)____________________

  //   for(let i= 0; i<=nums.length -1; i++){
  //     console.log("value i",i,nums[i]);

  //     for(let j=0; j<=nums.length-1; j++){
  //         console.log("value j",j, nums[j]);

  //         if(nums[i] == nums[j] && i != j){
  //         console.log(`i:${i}  j: ${j} and i value: ${nums[i]} j value: ${nums[j]}`);

  //             return true
  //         }

  //     }
  //   }

  //___________(optimize version)__________________

  let convertedset = [...new Set(nums)];

  let setlength = convertedset.length;
  console.log(setlength);
  let arrlength = nums.length;
  console.log(arrlength);

  if (setlength === arrlength) {
    return false;
  }

  return false;
}
console.log(hasDuplicate([1, 2, 2]));
