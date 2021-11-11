document.addEventListener('click', () => {
	  let url = chrome.runtime.getURL('media/audio.mp3')
	  console.log(url)
	  let a = new Audio(url)
    alert(Date()); // display current date

	  a.play()
  })
var popup = document.createElement("div");
popup.style.setProperty('text-align',"center");
popup.style.fontfamily="Papyrus";
popup.style="font-size:280%";
popup.style="color:black;"
popup.style.width = "500px";
popup.style.height = "250px";
popup.style.border = "solid 1px #000";
popup.style.margin = "30px";
popup.style.padding = "20px";
popup.style.position = "abosolute";
popup.style.top = "50px";
popup.style.left = "50px";
popup.style.backgroundColor = "Tomato";
popup.style.zIndex = "9991";
popup.textContent = "You're about to expose yourself to some new information, are you sure you want to do this?";
document.body.insertAdjacentElement("afterbegin",popup);

popup.addEventListener('click', function() {
  popup.remove();
});
var popup1 = document.createElement("div");
popup1.style.setProperty('text-align',"center");
popup1.style="font-size:290%";
popup1.style="color:blue;"
popup1.style.width = "500px";
popup1.style.height = "250px";
popup1.style.border = "solid 1px #000";
popup1.style.margin = "10px";
popup1.style.padding = "10px";
popup1.style.position = "relative";
popup1.style.bottom = "40px";
popup1.style.right = "800px";
popup1.style.backgroundColor = "yellow";
popup1.style.zIndex = "9994";
popup1.textContent = "No one can save you here!";
document.body.insertAdjacentElement("afterbegin",popup1);

popup1.addEventListener('click', function() {
  popup1.remove();
});
var popup2 = document.createElement("div");
popup2.style.setProperty('text-align',"center");
popup2.style="font-size:280%";
popup2.style.fontfamily="Papyrus";
popup2.style.width = "500px";
popup2.style.height = "250px";
popup2.style.border = "solid 1px #000";
popup2.style.margin = "10px";
popup2.style.padding = "10px";
popup2.style.position = "sticky";
popup2.style.top = "310px";
popup2.style.left = "90px";
popup2.style.backgroundColor = "Tomato";
popup2.style.zIndex = "9990";
popup2.textContent = "do you really KNOW what you're doing?";
document.body.insertAdjacentElement("afterbegin",popup2);

popup2.addEventListener('click', function() {
  popup2.remove();
});
var popup3 = document.createElement("div");
popup3.style.setProperty('text-align',"center");
popup3.style="font-size:280%";
popup3.style.fontfamily="Papyrus"
popup3.style.width = "500px";
popup3.style.height = "250px";
popup3.style.border = "solid 1px #000";
popup3.style.margin = "10px";
popup3.style.padding = "10px";
popup3.style.position = "sticky";
popup3.style.top = "60px";
popup3.style.right = "230px";
popup3.style.backgroundColor = "Tomato";
popup3.style.zIndex = "9995";
popup3.textContent = "Can't turn back now!";
document.body.insertAdjacentElement("afterbegin",popup3);
popup3.addEventListener('click', function() {
  popup3.remove();
});
var popup4 = document.createElement("div");
popup4.style.setProperty('text-align',"center");
popup4.style="font-size:290%"
popup4.style.width = "500px";
popup4.style.height = "250px";
popup4.style.border = "solid 1px #000";
popup4.style.margin = "10px";
popup4.style.padding = "10px";
popup4.style.position = "absolute";
popup4.style.bottom = "560px";
popup4.style.left = "80px";
popup4.style.backgroundColor = "orange";
popup4.style.zIndex = "9931";
popup4.textContent = "this could change you life you know?";
document.body.insertAdjacentElement("afterbegin",popup4);
popup4.addEventListener('click', function() {
  popup4.remove();
});
var popup5 = document.createElement("div");
popup5.style.setProperty('text-align',"center");
popup5.style="font-size:280%"
popup5.style.width = "500px";
popup5.style.height = "250px";
popup5.style.border = "solid 1px #000";
popup5.style.margin = "10px";
popup5.style.padding = "10px";
popup5.style.position = "sticky";
popup5.style.top = "900px";
popup5.style.right = "10px";
popup5.style.backgroundColor = "Tomato";
popup5.style.zIndex = "9961";
popup5.textContent = "Are you sure this is what you really want?";
document.body.insertAdjacentElement("afterbegin",popup5);

popup5.addEventListener('click', function() {
  popup5.remove();
});
var popup6 = document.createElement("div");
popup6.style.setProperty('text-align',"center");
popup6.style="font-size:290%"
popup6.style.width = "500px";
popup6.style.height = "250px";
popup6.style.border = "solid 1px #000";
popup6.style.margin = "10px";
popup6.style.padding = "10px";
popup6.style.position = "sticky";
popup6.style.top = "302px";
popup6.style.left = "480px";
popup6.style.backgroundColor = "orange";
popup6.style.zIndex = "9921";
popup6.textContent = "the internet can be reckless. PROTECT yourself!";
document.body.insertAdjacentElement("afterbegin",popup6);

popup6.addEventListener('click', function() {
  popup6.remove();
});
var popup7 = document.createElement("div");
popup7.style.setProperty('text-align',"center");
popup7.style="font-size:290%"
popup7.style.width = "500px";
popup7.style.height = "250px";
popup7.style.border = "solid 1px #000";
popup7.style.margin = "10px";
popup7.style.padding = "10px";
popup7.style.position = "relative";
popup7.style.top = "340px";
popup7.style.right = "587px";
popup7.style.backgroundColor = "yellow";
popup7.style.zIndex = "9998";
popup7.textContent = "WHAT if you LOVE WHAT you see?";
document.body.insertAdjacentElement("afterbegin",popup7);

popup7.addEventListener('click', function() {
  popup7.remove();
});
var popup8 = document.createElement("div");
popup8.style.setProperty('text-align',"center");
popup8.style="font-size:290%"
popup8.style.width = "500px";
popup8.style.height = "250px";
popup8.style.border = "solid 1px #000";
popup8.style.margin = "10px";
popup8.style.padding = "10px";
popup8.style.position = "sticky";
popup8.style.bottom = "129px";
popup8.style.left = "5000px";
popup8.style.backgroundColor = "Tomato";
popup8.style.zIndex = "9970";
popup8.textContent = "WHAT IF YOU HATE WHAT YOU SEE?";
document.body.insertAdjacentElement("afterbegin",popup8);

popup8.addEventListener('click', function() {
  popup8.remove();
});
var popup9 = document.createElement("div");
popup9.style.setProperty('text-align',"center");
popup9.style="font-size:280%"
popup9.style.width = "500px";
popup9.style.height = "250px";
popup9.style.border = "solid 1px #000";
popup9.style.margin = "10px";
popup9.style.padding = "20px";
popup9.style.position = "sticky";
popup9.style.top = "52px";
popup9.style.right = "490px";
popup9.style.backgroundColor = "Tomato";
popup9.style.zIndex = "9974";
popup9.textContent = "why are you even online?";
document.body.insertAdjacentElement("afterbegin",popup9);

popup9.addEventListener('click', function() {
  popup9.remove();
});
var popup10 = document.createElement("div");
popup10.style.setProperty('text-align',"center");
popup10.style="font-size:290%"
popup10.style.width = "500px";
popup10.style.height = "250px";
popup10.style.border = "solid 1px #000";
popup10.style.margin = "10px";
popup10.style.padding = "10px";
popup10.style.position = "sticky";
popup10.style.bottom = "400px";
popup10.style.left = "330px";
popup10.style.backgroundColor = "yellow";
popup10.style.zIndex = "9929";
popup10.textContent = "I don't think this is a good idea, don't you want to leave?";
document.body.insertAdjacentElement("afterbegin",popup10);

popup10.addEventListener('click', function() {
  popup10.remove();
});
