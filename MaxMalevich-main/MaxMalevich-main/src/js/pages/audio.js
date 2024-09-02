import $ from "jquery";
import Swiper from "swiper";
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectFade,
	EffectCoverflow,
	Thumbs,
	EffectCreative,
	Mousewheel,
} from "swiper/modules";

let arrInterval = []

function animAudio() {
    $('.audio-top').find('div').each(function() {
        const interval = setInterval(() => {
            $( this ).css( "height", `${Math.floor(Math.random() * 101)+2}%` );
        }, 750)
        arrInterval.push(interval)
    });
}
function animAudioClear() {
    arrInterval.map((interval)=>{
        clearInterval(interval)
    })
    // $('.audio-top').find('div').css( "height", '1%' )
    arrInterval = []
}
if($('.audio').length) {
    $('.audio-top').find('div').each(function() {
        $( this ).css( "height", `${Math.floor(Math.random() * 101)+2}%` );
    });
    $('.audio').on('click', function(){
        if($(this).hasClass('audio-paused')){
            $(this).removeClass('audio-paused')
            $(this).find('audio')[0].play()
            animAudio()
        } else {
            $(this).addClass('audio-paused')
            $(this).find('audio')[0].pause()
            animAudioClear()
        }
    })
}
