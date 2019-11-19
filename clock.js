let time, interval
let seconds, minutes, hours

const tick = () => {
   time = new Date();
   let seconds = time.getSeconds();
   let minutes = time.getMinutes();
   let hours = time.getHours();
   const degrees = {
     second: (time.getSeconds() * 6),
     minute: ((time.getMinutes() * 6) + (time.getSeconds() * (360/3600))),
     hour: ((time.getHours() * 30) + (time.getMinutes() * (360/720)))
   }
   for (let hand in ['second','minute','hour']) {
     let angle = degrees()[hand]
     document.getElementById(hand).style.transform = "rotate(" + angle +"deg)"
   }
}

document.addEventListener('DOMContentLoaded', () => {

  console.log('content was loaded')

  // timer starts (set initial time + start the seconds interval)
  interval = setInterval(tick, 1000)

})
