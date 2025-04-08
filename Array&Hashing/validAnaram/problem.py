def Valid_Anm(s,t):
    length1=len(s)
    sorting=sorted(s)
    sortin=sorted(t)
    
    length2=len(t)

    if(length2==1):
         if(sortin==sorting):
               return True
        

    else:
     for i in range(0,length1-1):
        
        if(sorting[i]==sortin[i] and length1==length2):
           
           if(sortin==sorting):
               return True
           
            
            
    return False      
   


# display=Valid_Anm("racecar","carrace")
display=Valid_Anm("xbbc","xcbb")
print(display)