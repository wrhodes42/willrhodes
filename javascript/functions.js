var Fullpage = new fullpage
(
    '#fullpage', 
    {
        licenseKey: 'NTI26-ENYHI-9IK0J-NJ82I-WKRXM',
        verticalCentered: true,
        controlArrows: true,
        slidesNavigation: false,
        continuousVertical: true,
        scrollOverflow: false,
        scrollingSpeed: 400,
        //resetSliders: true,
        //resetSlidersKey: 'd2lsbHJob2Rlcy5ibHVlXzhuV2NtVnpaWFJUYkdsa1pYSnpXcks=',
        afterLoad: function(){
            UpdateMarquees();
        }
    }
);

var activeMarquee;
function UpdateMarquees(){
  activeMarquee?.css('opacity', '0');
  activeMarquee?.css('pointer-events', 'none');

  var activeSection = $('.section.active');
  activeMarquee = $('#' + activeSection.attr("id") + '-marquee')
  
  activeMarquee?.css('opacity', '1');
  activeMarquee?.css('pointer-events', 'all');
}
UpdateMarquees();

$('#contact-marquee').marquee({
  speed: 40,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
  duplicated: true,
  duplicateCount: 6,
  pauseOnHover: true,
  startVisible: true
});

$('.project-marquee').marquee({
    speed: 40,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'right',
    duplicated: true,
    duplicateCount: 6,
    pauseOnHover: true,
    startVisible: true
});



$(document).on('click', '#move-up', function(){
  fullpage_api.moveSectionUp();
});

$(document).on('click', '#move-down', function(){
  fullpage_api.moveSectionDown();
});