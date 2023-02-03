var worker = null;
var loaded = 0;
    
    $(document).ready(function(){$('.complete').hide()});
    $('#lemon').hide();
    $('#straw').hide();
    $('#cubes>div').hide();
function increment() {
    $('#counter').html(loaded+'%');
    $('#drink').css('top', (100-loaded*.9)+'%');
    if(loaded==25) $('#cubes div:nth-child(1)').fadeIn(100);
    if(loaded==50) $('#cubes div:nth-child(2)').fadeIn(100);
    if(loaded==75) $('#cubes div:nth-child(3)').fadeIn(100);
    if(loaded==100) {
        $('.loading').fadeOut(300);
        $('.complete').fadeIn(300);
        setTimeout(function(){
            $('#lemon').fadeIn(100);
            $('#straw').fadeIn(300);
            $('#load').fadeOut(400);
            stopLoading();}
        ,1000)
    }
    else loaded++;    
}

function startLoading() {
    
    worker = setInterval(increment, getRndInteger(30,100));
}
function stopLoading() {
    clearInterval(worker);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

var sleep = function(time) {
    var startTime = new Date().getTime() + parseInt(time, 10);
    while(new Date().getTime() < startTime) {}
};



startLoading();