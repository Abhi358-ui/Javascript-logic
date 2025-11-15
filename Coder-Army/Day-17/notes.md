
# Single thread laguage

- Javascript ek single threaded language ha aur ise synchronous language ha isme ek baar me ek hi task execute hota ha 2 task parallel nhi chal sakte.

- Javascript ek single threaded language ha iska matlab ha isme ek baar me ek hi task execute ho sakte ha 

- Synchrons ka matlab hota ha ek ke baad ek pahle first complete karna padega uske baad dusra chalu hoga

- Javascript kabhi kisi ka wait nhi karta wo koi bhi statement dekhta ha use turant execute karta ha 



## Web API

- API normal language ne ek function call ha jisme ham ek function call karte ha wo hamara task pura kr deta ha 

- Js me array me push, map, ya forEach loop h ye sb api call ha jisse hmara kuch task complete ho raha ha 

- Js me ek window object hota ha jo browser provide karta ha aur ye hame bahut sare api provide karta ha jaise settimeout aur setinterval and dom api local storage, console.log, location etc

- fetch ka use kiya jata ha data ko fetch karne ke liye jab data kisi dusre server pr rakha ho 

- jab hm koi code likhte ha to wo global execution context me aata ha aur ek by ek run karta ha aur koi web api jaise settimeout ye sb ha to wo use call kr deta ha aur use browser run karta ha 

## Event loop

- Jab js koi web api call karti ha to jab browser ka time pura hota ha to use wo event queue me de deta h aur event loop isi event queue ko check karte rahta ha aur agr koi task ha usme to use wo call stack me de deta ha 

- But sart ye ha ki callstack khali rahna chahiye tab hi wo usko callstack me dal deta ha aur callstack me kuch bhi aate hi execute kr diya jata ha 

- Aur jab ham browser ka web api use karte ha to phir  uska run karne ka kaam js ka nhi hota use wep api handle karte ha 

- Js behavior me non blocking rahta ha ye kisi ke liye rukta nhi ha 

- Jo bhi asynchronus task hota ha js use web api ko de deta ha aur wo usko execute karke event queue me de deta ha aur event queue use check karte rahta ha

- Event queue ke jaise ek micro queue hota ha jo event queue ke jaise hi hota ha but micro queue ka priority jyada hota ha 

- Micro queue me callback sb jate ha aur event queue me setinterval and settimeout sb jate ha 