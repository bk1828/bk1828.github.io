/* 
	$(document).ready(function(){
		...
	});
	
		=
	
	$(function(){
		...
	});
	둘 다 서로 같은 코드형식. 편한대로 사용.	
*/
	
	$(function(){
		//h1의 css 색깔을 red로
		$('h1').css({'color':'red'});
		
		/*
		$('#typo .inner').css({
			textDecoration:'underline',   //#typo. inner의 글자를 장식. 밑줄긋기
			borderBottom:'5px solid red', //#typo. inner의 테두리. 5px 빨간줄
			transform:'rotate(45deg)',    //#typo. inner의 회전(45도)
			opacity:0.5  				  //#typo. inner의 투명도 설정(0.5)
		});
		*/
			
		$('#typo').mouseover(function(){
			$(this).css('background-color','green');
		})
		.mouseout(function(){
			$(this).css('background-color','#3498db');
		});
	});	
	