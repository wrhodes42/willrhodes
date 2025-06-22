$(document).ready(function(){
  UpdateProjectInfo();
});

function UpdateProjectInfo(){
    var activeSection = $('.section.active');
    
    projectInfoObjects.forEach(function(obj){
        if(activeSection.attr("id") == obj.projectID){
          
          $('.project-title').each(function(){
            $(this).html(obj.projectTitle);
          });

          $('.project-year').each(function(){
            $(this).html(obj.projectYear);
          });

          $('.project-link').each(function(){
            $(this).html(obj.projectLink);
          });
          
          $('#project-marquee').marquee('start');
        }
    })
}

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
        resetSliders: true,
        resetSlidersKey: 'd2lsbHJob2Rlcy5ibHVlXzhuV2NtVnpaWFJUYkdsa1pYSnpXcks='
    }
);

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

$('#project-marquee').marquee({
  speed: 40,
  gap: 0,
  delayBeforeStart: 0,
  direction: 'left',
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