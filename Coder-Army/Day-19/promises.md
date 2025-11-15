
# Promise

- The promise object represent the completion or failure of the asynchronus operation and its resulting value

- Promise ek asynchronous task ka result ki wo fail ho gya ya complete aur uska result show karta ha 

- Promise simple ek object hota ha jiske 3 state hote ha pending, fullfilled, rejected.

- Promise ka sidha matlab hota ha mai aapko ek promise kr raha hu mai aapko data lake dunga future me 

- Promise ko consume karne ke liye hm then() catch() and finally() block ka use karte ha 

- finally block ka use hota ha loader ko htanae ke liye jab ham kuch request karte ha to loader on ho jo jata ha but data aa jane ke baad loader ko htana hota ha and database se connect hua data lene ke baad disconnect hona ha ye sb ke liye finally block ka use karte ha 

## fetch function

- fetch function hame data byte ke form me deta ha ham ise json() function se change kar sakte ha json data me

- json() function bhi hame promise return karta ha 



## Promise state / api state

1. Pending : agr server pr tutant request gya ha iska matlab ha abhi wo pending ha 
2. Fullfilled : agr aapne jo request kiya tha wo agr return kr diya to fullfilled Aur agr server ne kcuh bhi response diya ha to wo fullfilled me aayega

3. Rejected : Agr api reuest me hamne jo data request kiya tha wo nhi mila to rejected Isme agr internet nhi ha ya server down ha ya dns server down ha to ye reject mana jata ha   || agr maine server se baat hi nhi kr paya iska matlab ha wo rejected hoga 





## JSON vs Javascript object

- JSON ko sabhi programing language samjahata ha jabki Javascript ko bs js hi samjhta ha

- JSON me key string me hona hi chahiye but js object me ye optional hota ha 

- JSON me last key value pair me comma nhi de sakte jabki js object me de sakte ha 

- JSON me ham undefined nhi likh sakte function bhi nhi likh sakte 

- JSON simple ek string format ha jo data ko present karta ha key value pair me 

- JSON ek data format ha jiska use kiya jata ha 2 progrmaing language me communicate karne ke liye aur ye universal ha isko sabhi programming language samjhte  ha 


- JSON format se js object me convert karne ke liye ham JSON.parse() ka use karte ha 

- Simple js object ko JSON format me change karne ke liye hm JSON.stringfy() ka use karte ha

