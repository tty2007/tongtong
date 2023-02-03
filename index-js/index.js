$(document).ready(function(){
    $(".douyin").hide()
    })

function douyin(){
    $(".douyin").fadeIn(300);
    $.growl.notice({title: "提示！", message: "点击图片/框框来退出" });
}

function closedy(){
    $(".douyin").fadeOut(200)
}

function search(){
    var text = document.getElementById('input').value
    if(text == "20070628"){
        
    }
    else{
        $.growl.error({title: "错误！", message:"未查询到有关内容"});
    }
}
