
const urlParams = new URLSearchParams(window.location.search);
const remoteTime = !!urlParams.get('remote_time');

setTime({remoteTime}); 

async function setTime(options) {
  const sec = ((await getSeconds(options.remoteTime) / 60) % 1) * 60;
  $(".clock__second").css("animation-delay", "" + sec * -1 + "s");
} 

async function getSeconds(remoteTime) {
  let now;
  if (remoteTime) {
    now = await getRemoteDate();
  } else {
    now = new Date();
  }
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = now - today; 
  return Math.round(diff / 1000);
}

async function getRemoteDate() {
  try {
    const res = await fetch('https://worldtimeapi.org/api/ip').then(r => r.json());
    return new Date(res.datetime)
  } catch (e) {
    console.log(e);
    return new Date();
  }
}