$("#register").click(function(){
var name=$('#name').val();
var password=$('#password1').val();
var data= {
    data: JSON.stringify({
        'name': name,
        'password': password
    }),
}
    $.ajax({
        url: "/register",
        type: "POST",
        async: true,
        cache:false,
        data:data,
        dataType: "text",
        success:function(data){
            console.log(data);
            console.log(0)

        },
        error:function (e) {
            console.log(e);

        }

        })
});

//
//
//

$("#login").click(function(){
var name=$('#name').val();
var password=$('#password1').val();
var data= {
    data: JSON.stringify({
        'name': name,
        'password': password
    }),
}
    $.ajax({
        url: "/login",
        type: "POST",
        async: false,
        cache:false,
        data:data,
        dataType: "text",
        success:function(d){

        var status = d.status;
        if (d != "undefined" && d=="success")
        {
             window.location.href="/";
             alert("success!"+d)
        }
        else
        {
            alert("username or password is wrong'")
        }

        }

        })
});

//
//$(function() {
//		$("#myButton5").click(function(){
//		var name=$('#name').val();
//        var password=$('#password1').val();
//        var data= {
//            data: JSON.stringify({
//                'name': name,
//                'password': password
//            }),
//        }
//			$.ajax({
//                url: "/egister",
//                type: "POST",
//                async: true,
//                cache:false,
//                data:data,
//                dataType: "text",
//                success:function(data){
//                    console.log(data);
//                    console.log(0)
//
//                },
//                error:function (e) {
//                    console.log(e);
//
//                }
//
//                })
//		});
//	});
//
//
//
//$(function() {
//        $document.getElementById("login_form").click(){
////		$("#login_form").click(function(){
//		$("password2").hide();
//		});
//	});

$("#login_form").click(function(){
    $("#password2").hide();
    $("#register").hide();
    $("#login").show();
});

