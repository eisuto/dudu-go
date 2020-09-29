$(document).ready(function(){ 
    get_user_by_index();
});
function get_user_by_index(){
    $.ajax({
        async: false,
        type:"POST",
        url:"/user_post_by_index",
        //data:{"card":card,"pwd":pwd}
        }).done(function(msg){
        if(msg != null){
            //window.location.href="/"
            console.log("回调数据成功")
            console.log(msg.userID)
            if(msg.userID!=undefined){
                $('#login-btt').css("display","none");
                $('#user-info').css("display","block");
                $('#user-info').html(msg.name+"<span class='caret'></span>");
            }
        }
    });
}



function tg_register(){
    window.location.href='/register';
}
function sub_login(){
    var card = $('#card').val();
    var pwd  = $('#pwd').val();
    console.log(card);    
    console.log(pwd);
    $.ajax({
        async: false,
        type:"POST",
        url:"/login_post",
        data:{"card":card,"pwd":pwd}
        }).done(function(msg){
        if(msg != null){
            //window.location.href="/"
            console.log("回调数据成功")
            console.log(msg.mod)
            if(msg.mod){
                window.location.href="/index"
            }else{
                err_login();
            }  
        }
    });
}
function err_login(){
    $('#card').css({"border-color":"#ff2121","border-width":"2px"})
    $('#pwd').css({"border-color":"#ff2121","border-width":"2px"})
    $('#err').css("display","block")
}