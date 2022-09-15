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
	$('#typo .inner').click(function(){
		//선택자.animate({속성:값, 속성:값}, 시간, 이징, 다른할일(animate 끝난이후);
		//linear, swing 둘만 가능, jqueryui 라이브러리 다운으로 가능
		//.html에 <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script> 라이브러리 추가해주어야 함
        
		//animate 끝나고 다른 할일 작성
		//function(){실제할일} 임의함수(익명함수)
		$(this).animate({opacity:0, fontSize:'0px'},1500, 'easeInOutElastic',
			function(){
				$(this).animate({opacity:1, fontSize:'110px'},500);
		});
	});
	
	$('#typo').mouseover(function(){
		//stop()을 걸어주지 않으면 mouse가 들어가거나 나가도 들어온 명령을 계속 실행함
		//in,out을 자주 반복하면 명령이 누적되서 계속 실행될수도 있다는 말.
		$(this).stop().animate({backgroundColor:'green'},500);
	})
	.mouseout(function(){
		$(this).stop().animate({backgroundColor:'#3498db'},500);
	});
});

	