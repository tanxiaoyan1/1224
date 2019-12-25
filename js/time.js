$(function(){
    
    var nowDate = new Date();
	var nowyear = nowDate.getFullYear();
	var nowMonth = nowDate.getMonth();
    var nowDay = nowDate.getDate();
    $('#year').val(nowyear);
	$('#month').val(nowMonth+1);
    $('#day').val(nowDay);

    $('#tYear').text(nowyear);
	$('#tMonth').text(nowMonth+1);
    $('#tDay').text(nowDay);

    
    
    $('.in').blur(function () {
		var y = $('#year').val();
		var m = $('#month').val();
        var d = $('#day').val();
        
        
		//验证日期
		if (m<1||m>12||d<1||d>31) {
            alert('输入日期错误，请重新输入！');
            clearInterval(tm);
		}else{
            $('#tYear').text(y);
            $('#tMonth').text(m);
            $('#tDay').text(d);
        }

		
    })

    var tm;
    $('#start').click(function () {
        tm = setInterval(upDateTime,1000);
        upDateTime();
    });
    //输入框获取焦点则关闭tm
    $('.in').focus(function () {
        clearInterval(tm);
    })
    
     

    function upDateTime(){
        
        var target_y = $("#year").val();
        var target_m = $("#month").val();
        var target_d = $("#day").val();

    
        var target_date = new Date(target_y,target_m - 1 ,target_d);
        var now_date = new Date();
         // 单位、秒
        var i_time = (target_date.getTime() - now_date)/1000;
         //单击计时val按钮，间断调用计时函数upDateTime()
	    

        if(i_time<0){
            i_time=0;
            alert('日期已过！');
            // if(tm != null){
                clearInterval(tm);
            // }
        }
        // 计算时间差
        // var day = Math.floor( time/(24*60*60));
        // time = time%(24*60*60);
        
        // var hour = Math.floor( time/(60*60));
        // time = time%(60*60);
        
        // var minute = Math.floor( time/60);
        // time = time%60;
        
        // var second = Math.floor(time);

        var day = parseInt( i_time/(24*60*60));
        i_time = i_time%(24*60*60);
        
        var hour = Math.floor( i_time/(60*60));
        i_time = i_time%(60*60);
        
        var minute = Math.floor( i_time/60);
        i_time = i_time%60;
        
        var second = Math.floor(i_time);

        $('#days').text(changeNum(day,3));
        $('#hours').text(changeNum(hour,2));
        $('#minutes').text(changeNum(minute,2));
        $('#seconds').text(changeNum(second,2));
        
               
    }


    //对倒计时时间补零
    function changeNum(num,digit){
        var num_str = num + '';
        while(num_str.length < digit){
            num_str = '0' + num_str;
        }
        return num_str;
    }
   
    
})