$(document).ready(function(){
	$('.btn').hide();
	$(window).scroll(function(){
		const logoImage = $('.logo img');
		const mainNav = $('#mainNav ul li a');
		const bg = $('#mainNav'); 

		if(window.pageYOffset > 300){
			logoImage.css('height','64px');
			bg.css('height','70px');
			bg.css('background','#135589');
			mainNav.css('color','#eee');
		 //    if(window.pageYOffset > 1000){
			// 	bg.css('margin-top','300px');
			// }else{
			// 	bg.css('margin-top','0px');
			// }
		}else {
			bg.css('height','85px');
			logoImage.css('height','84px');
			bg.css('background','transparent');
			mainNav.css('color','#fff');
			bg.css('margin-top','0px');
		}

	})
})

function klik(){
	if($('.btn').text()==''){
		const bg=$('.rumah');
		$('.munculhilang').css('transform','rotate(585deg)');
		$('.munculhilang').css('top','90%');
		$('.munculhilang').css('left','5%');
		$('.logo').css('opacity','1');
		$('.icon').css('top','0%');
		$('.icon').css('background','#2a93d5');
		$('.icon').css('left','70%');
		const val=$('.btn').append('satu');
		bg.css('height','100%');
		bg.css('width','100%');
		bg.css('border-bottom-left-radius','0px');
		bg.css('border-top-right-radius','0px');
		$('#sideNav').css('right','0%');
		$('#sideNav').css('left','0%');
	}else{
		$('.btn').text('');
		$('.rumah').css('border-bottom-left-radius','50%');
		$('.rumah').css('border-top-right-radius','50%');
		$('.rumah').css('height','70px');
		$('.rumah').css('width','70px');
		$('.munculhilang').css('transform','rotate(0deg)');
		$('.munculhilang').css('left','20px');
		$('.munculhilang').css('top','0%');
		$('.icon').css('background','none');
		$('.icon').css('left','0');
		$('#sideNav').css('right','-100%');
		$('#sideNav').css('left','100%');

	}
}
