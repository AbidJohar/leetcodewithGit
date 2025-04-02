def dup(list):

# __________________(brute force)________________________________
#     lenght=len(list)    
#     for i in range(lenght):
      
#         for j in range(lenght):
         
           
#          if(list[i]==list[j] and i!=j):
#                 return True
            
    
            
#     return False
           
            
# display=dup([1,2,2])

# print(display)
# __________________(optimize version)________________________________
    
    lenght=len(list)
    convertedset = set(list)
    set_len=len(convertedset)
    
    if(lenght==set_len):
        return False
    else:
        return True


display=dup([1,2,3,4,4])
print(display)



    
      
  

