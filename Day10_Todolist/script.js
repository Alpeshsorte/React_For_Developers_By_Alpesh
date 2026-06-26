let timeleft = 10

const countdowntimer = setInterval(()=>{
    if (timeleft <= 0){
        clearInterval(countdowntimer)
        console.log("time's up!")
    }else{
        console.log(`${timeleft} seconds remaining...` )
        timeleft--
    }
},1000)