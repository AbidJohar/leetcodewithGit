def anagrams(list):
    map = {}
    for i in list:
        result = ''.join(sorted(i))
        
        if result in map:
            map[result].append(i)
        else:
            map[result] = [i]

    
    for group in map.values():
        print(group)
        print()

    return map.values()

strs = ["act","pots","tops","cat","stop","hat"]
results = anagrams(strs)

print(results)