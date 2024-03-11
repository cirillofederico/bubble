
// para poder mover al asistente/"bot"
const draggable = document.getElementById('draggable');
const botMenu = document.getElementById("respuestasBOT");
const checkBot = document.getElementById("checkMenuBot");
const labelBot = document.querySelector(".draggable__contenedor__label");
let offsetX, offsetY, isDragging = false;

draggable.addEventListener('mousedown', (e) => {
  e.preventDefault();
  offsetX = e.clientX - draggable.getBoundingClientRect().left;
  offsetY = e.clientY - draggable.getBoundingClientRect().top;
  isDragging = true;
  labelBot.style.cursor = 'grabbing';
});

// para poder seguir al mouse (bot)
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const x = e.clientX - offsetX;
  const y = e.clientY - offsetY;
  draggable.style.left = x + 'px';
  draggable.style.top = y + 'px';
});

// para dejar de seguir al mouse (bot)
document.addEventListener('mouseup', () => {
  isDragging = false;
  labelBot.style.cursor = 'grab';
});

checkBot.addEventListener("change",()=>{
  if (botMenu.style.display === "none") {
    botMenu.style.display = "inline"; 
  } else {
    botMenu.style.display = "none";
  }
});

function convertToWebp(fnString){
	newName = fnString.slice(0, -3);
	newName += "webp";
	return newName;
}
