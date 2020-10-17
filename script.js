// Javascript is used to set the clock to your computer time.

//setInterval(() => setTime(), 1000);

setTime(); 

function setTime() {
  const sec = ((getSeconds() / 60) % 1) * 60;
  $(".clock__second").css("animation-delay", "" + sec * -1 + "s");
} 

function getSeconds() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; 
  return Math.round(diff / 1000);
}