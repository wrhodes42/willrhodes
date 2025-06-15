var Fullpage = new fullpage
(
    '#fullpage', 
    {
        licenseKey: 'NTI26-ENYHI-9IK0J-NJ82I-WKRXM',
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