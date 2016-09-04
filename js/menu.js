var PathStatus 	= 0;
var angle 		= Math.PI/((4-1)*2);	
var mainButton 	= [
	{'bg':'../css/menu/images/bg-2x.png','css':'','cover':'../css/menu/images/icon-2x.png','html':'<span class="cover"></span>'},
	{'bg':'','css':'','cover':'','html':'','angle':-405,'speed':200}
];
var Radius 		= 100;		//小图出来的半径
var Offset 		= 40;		//小图出来后的偏移量
var Path 		= 2;		//出现方式，1：左上，2:左下，3：右上，4：右下
var OutSpeed 	= 80;		//小图出现的速度
var OutIncr 	= 50;		//小图出来的旋转
var OffsetSpeed = 200;		//小图出来的旋转速度
var InSpeed 	= 480;		//小图进去的速度
var InIncr 		= -80;		//小图进去的旋转
function PathRun(){
	var PathMenu = $('#PathMenu');
	var PathItems = PathMenu.children('.PathItem').slice(0,4);
	if(PathStatus == 0){
		var Count = PathItems.size();
		PathItems.each(function(SP){
			var ID = $(this).index();
			if (ID == 1) {
				var X 	= Radius;
				var Y 	= 0; 
				var X1 	= X + Offset;
				var Y1 	= Y;
			}else if (ID == Count){
				var X 	= 0;
				var Y 	= Radius;
				var X1 	= X;
				var Y1 	= Y + Offset;				
			}else{
				var X 	= Math.cos(angle * (ID - 1)) * Radius;
				var Y 	= Math.sin(angle * (ID - 1)) * Radius;
				var X1	= X + Offset;
				var Y1 	= Y + Offset;
			}
			
			if(Path==2){
				Y	= -Y;
				Y1	= -Y1;
			}else if(Path==3){
				X	= -X;
				Y	= -Y;
				X1	= -X1;
				Y1	= -Y1;
			}else if(Path==4){
				X	= -X;
				X1	= -X1;
			}

			$(this).children().children().animate({rotate:720},600);
			
			$(this).animate({left:X1,bottom:Y1},OutSpeed+SP*OutIncr,function(){
				$(this).animate({left:X,bottom:Y},OffsetSpeed);
			});	
		});
		
		if(mainButton[1]['angle']){
			$(PathMenu.children('.PathMain').find('.rotate')).animate({rotate:mainButton[1]['angle']},mainButton[1]['speed']);
		} 
		if(mainButton[1]['bg']!='') $(this).children().css('background-image','url('+mainButton[1]['bg']+')')
		if(mainButton[1]['css']!='') $(this).children().css(mainButton[1]['css']);
		if(mainButton[1]['cover']!='') $(this).children().children().css('background-image','url('+mainButton[1]['cover']+')');
		if(mainButton[1]['html']!='') $(this).children().html(mainButton[1]['html']);
		
		PathStatus = 1;
	}else if(PathStatus == 1){
		PathItems.each(function(SP){
			if(parseInt($(this).css('left'))==0){
				X1 = 0;
			}else{
				if(Path <=2){
					X1 = parseInt($(this).css('left')) + Offset;
				}else if(Path >=3){
					X1 = parseInt($(this).css('left')) - Offset;
				}
			}
			
			if(parseInt($(this).css('bottom'))==0){
				Y1 = 0;
			}else{
				if(Path==3 || Path==2){
					Y1 = parseInt($(this).css('bottom')) - Offset;
				}else if(Path ==1 || Path == 4){
					Y1 = parseInt($(this).css('bottom')) + Offset;					
				}
			}
			$(this).children().children().animate({rotate:0},600);
			$(this).animate({left:X1,bottom:Y1},OffsetSpeed,function(){
				$(this).animate({left:0,bottom:0},InSpeed+SP*InIncr);
				
			});
		});
		
		if(mainButton[1]['angle']){
			$(PathMenu.children('.PathMain').find('.rotate')).animate({rotate:0},mainButton[1]['speed']);
		} 		
		
		if(mainButton[0]['bg']!='') $(this).children().css('background-image','url('+mainButton[0]['bg']+')')
		if(mainButton[0]['css']!='') $(this).children().css(mainButton[0]['css']);
		if(mainButton[0]['cover']!='') $(this).children().children().css('background-image','url('+mainButton[0]['cover']+')');
		if(mainButton[0]['html']!='') $(this).children().html(mainButton[0]['html']);			
				
		PathStatus = 0;
	}
}
