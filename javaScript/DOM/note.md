# Query Selecter Methods

1. document.querySelector("")
   ye id , class , tag etc sabhi per kaam karta hai aur first Value ko select karta hai

2. document.querySelectorAll("")
   ye id , class , tag etc sabhi per kaam karta hai aur sabhi Values ko select karta hai
   ye node list deta ye ek array jaisa hota hai but hota nahi hai
   iske prototype me forEach ka use kar sakte hai

# getElement Methods

1. document.getElementById("")

2. document.getElementsByClassName("")

ye HTML Collecetion deta hai ye array jaisa hota hai but arary nahi hota isko array me convert kar array jaisa use kar sakte hai
Array.from(item) 3. document.getElemensByTagName("")
same like class

# Click Event

1. onclick = Single click Event
2. ondblclick = dubble Click Event
3.

# Attribute

1. getAttribute -- isse id ya Class se Attribute nikal sakte hai
   document.getElementById("id").getAttribute("id")
1. setAttribute -- isse kisi selector me tag ke ander id ya class laga sakte hai
   document.getElementById("id").setAttribute("class", "class of Name")

1. children -- ye parent se chaild Element tak jata hai

1. parentElement -- ye chaild Element se parent tak jata hai

1. nextElementSibling - ye child ke next child ko select(print) karta hai

1. childNodes

# Events
1. stopPropagation() -- ye bubling ko rokta hai 
2. preventDefault() -- action ko band kar deta hai 


1. type , timestamp , defaultPrevented , target , toElement , srcElement , currentTarget , clintX , clintY , screenX , screenY , 
altKey , ctrKey , shiftKey , keyCode

