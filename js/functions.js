var Fullpage = new fullpage
(
    '#fullpage', 
    {
        licenseKey: 'null',
        verticalCentered: true,
        controlArrows: true,
        slidesNavigation: false,
        continuousVertical: true,
        resetSliders: true,
        resetSlidersKey: 'd2lsbHJob2Rlcy5ibHVlXzhuV2NtVnpaWFJUYkdsa1pYSnpXcks='
    }
);

$(document).on('click', '#move-up', function(){
  fullpage_api.moveSectionUp();
});

$(document).on('click', '#move-down', function(){
  fullpage_api.moveSectionDown();
});