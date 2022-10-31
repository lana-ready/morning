$(document).ready(function(){
	//메인메뉴 마우스오버하면 각 항목별 서브메뉴 슬라이드
	$(".mainMenu").on("mouseenter click",function(){
		$(".mainMenu").removeClass("active");
		$("#white").stop().animate({height:"80px"});
		//위로 올라간 후 display:none;
		/*$(".subMenu").stop().slideUp();  여긴 필요x*/
		//마우스 갖다댄 것의 다음(=형제)요소
		$(".subMenu").stop().slideDown();         //prev 는 이전(형제)요소 next 는 다음(형제)요소
	});
	
	//하위메뉴 마우스오버 메인메뉴 활성유지
	$(".subMenu").mouseenter(function(){
		$(".mainMenu").removeClass("active");
		$(this).prev().addClass("active");
	});
	
	//하위메뉴 마우스아웃하면 올라가기
	$("header>nav").mouseleave(function(){
		menu();
	});
		
	/* mouseover()와 mouseout()을 사용할 때 문제점:
	bubbling 현상이 있음, 중첩된 요소들 각각에 기능이 작동한다.
	해당 지정 요소에서만 이벤트가 발생하지 않고 상위(부모)요소에서도 동일한 이벤트가 발생하는 문제점.
	mouseover() 이 메소드를 대신하여 mouseenter(), mouseout() 대신하여 mouseleave() 를 사용한다. */
	
	//메뉴 마지막 항목이 포커스를 잃을 때
	$(".last").blur(function(){
		menu();
	});
	
	//blur=포커스를 잃을때
	//focus=포커스 될때
	
	function menu(){
		$(".mainMenu").removeClass("active");
		$(".subMenu").stop().slideUp();
		$("#white").stop().animate({height:0});
	}
	
	//이 안에 세줄이 $(".last").blur(function(){ 랑 $("header>nav").mouseleave(function(){ 안에 있는데 중복되니까
	// 한꺼번에 이 펑션을 만들고 메뉴라고 이름지은 함수를 호출했다.
	
	
	//왼쪽방향 자동 슬라이드
	setInterval(leftMove,2000);
	function leftMove(){
		$("#sliding div").stop().animate({left:"-1100px"},1000,function(){
			$(this).append($(this).children().first());
			$(this).css("left",0);
		});
	}
	
	//팝업 보이기
	$(".show").click(function(){
		$("#popup").fadeIn();
	});
	
	//팝업 닫기
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
	
	//키보드 자판에서 어떤 키를 눌렀는지 감지 , event는 e ev x 로 써도 됨
	$(document).keydown(function(event){
		if(event.key==="Escape"){
			$("#popup").fadeOut();
		}
	});
	
});