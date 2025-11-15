
# Event Listener

- Event ek action hota ha jo occur hota ha system pr jaise mouse click karna mouse ko idhar udhar karna keyboard click kana 

- Event is the action of the user and that action occur on the system just like mouse movement, keyboard click etc

- EventListener is the function jiska use kiya jata ha Event ko listen karne ke liye

- Sbse pahle event hota ha usek baad event ko listen kiya jata ha event listener ka use karke aur us event pr kuch action perform kiya jata ha 

- when we need to handle multiple handler for the one event then we are using the eventListener

- Jab ek div je andar ek div ho aur uske andar ek dusra ho to jab event andar se bahar ki trah follow hota ha to ise hi event bubling kahte ha 


## Event Bubling

- Event bubling is divide into three steps :

1. Capture phase
2. Target phase
3. Bubling phase

- Capture phase me DOM window object se sbse nich tak aate ha jab tak ki uska target mil nhi jata aur uske baad  target milne ke baad check karta ha ki uspe koi event listener ha ya nhi aur agr ha to usko execute krke upar jata ha aur check karte hue upar jata ha aur jaha jaha usko event listener milta ha waha execute krte hue jata ha to ise ho event bubbling kahte ha 


- capture phase on ha : Top se down aaoge : Us time pr event ko trigger kr diya jayega 
- capture phase off ha : Event ha usko down to up (bubbling pahse) tab trigger kiya jayega 

- we are always not using the an extra element which is capture phase 


## Event object 

- jab hm event trigger karte ha to hame ek event object bhi milta ha callback me jisme us event se related bahut sari information rahta ha 