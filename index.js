let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;

function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;

    hr= 0;
    min=0;
    sec=0;
    count=0;

    document.getElementById("hr").innerHTML = "00"
    document.getElementById("min").innerHTML = "00"
    document.getElementById("sec").innerHTML = "00"
    document.getElementById("count").innerHTML = "00"
}

function stopwatch(){
    if(timer == true){
        count = count+1;

        if(count == 100){
            sec = sec +1;
            count = 0;
        }
        if(sec == 60){
            min = min+1;
            sec=0;
        }
        if(min == 60){
            hr = hr+1;
            min = 0;
            sec = 0;
        }
        document.getElementById("hr").innerHTML= hr;
        document.getElementById("min").innerHTML= min;
        document.getElementById("sec").innerHTML= sec;
        document.getElementById("count").innerHTML = count;
        
        setTimeout("stopwatch()",10);
    }
}