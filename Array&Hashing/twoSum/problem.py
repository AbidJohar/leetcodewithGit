#_____________________Hash Maping__________________________________*


# def twoSum(nums, target):
#      h={}
     

#      for j ,k in enumerate(nums):
   
#             check= target - k
#             if(check in h and h[check]!=j):
#                  return h[check],j
#             else:
#                   h[k]=j
                 
#      return []
                
                   

                

# nums=[3,4,5,6]
# target=7

# print(twoSum(nums,target))

#_________________( Brute Force )_______________________*


def twoSum(nums, target):
    lenght=len(nums)
    for i in range(lenght):
        for j in range(lenght):
            if(nums[i]+nums[j]==target and i!=j):
                return [i,j]
            
    return []
    

nums=[3,4,5,6]
target=7

print(twoSum(nums,target))

