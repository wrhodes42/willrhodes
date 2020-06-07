var projectTitle;
var projectData1;
var projectData2;
var projectWebsite;

$(document).ready(function(){
    
    //assign project info stuff
    projectTitle = $('#project-title');
    projectData1 = $('#project-data-1');
    projectData2 = $('#project-data-2');
    projectWebsite = $('#project-website');

    $("#fullpage").fullpage({
        anchors: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        menu: '#menu',
        continuousHorizontalKey: 'd2lsbHJob2Rlcy5ibHVlX0M3alkyOXVkR2x1ZFc5MWMwaHZjbWw2YjI1MFlXdz1RMFc=',
        continuousHorizontal: true,
        verticalCentered: true,
        controlArrows: true,
        slidesNavigation: false,
        loopTop: true,
        loopBottom: true,
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            var loadedSlide = $(this);
            var totalItems = loadedSlide.siblings().length;
            var numContainer = $('#project-info').find('.num');
            var slideNumber = slideIndex + 1;
            var totalNumber = totalItems + 1;
            numContainer.html(slideNumber + ' / ' + totalNumber);
        },
        afterLoad: function(){
            loadProjectInfo();
            loadSlideCounter();
        }
    });

    //init methods
    loadProjectInfo();
    loadSlideCounter();
    loadImageRepeat();
    
    //draggable
    $(".project-info").draggable();
    
    //marquee
    $(".marquee").marquee({
        duration: 10000,
        gap: 0,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true,
        pauseOnHover: true,
        pauseOnCycle: false
    });
});

function loadProjectInfo(){
    var activeSection = $('.section.active');
    
    projectInfoObjects.forEach(function(obj){
        if(activeSection.attr("id") == obj.projectID){
            projectTitle.html(obj.projectTitle);
            projectData1.html(obj.projectData1);
            projectData2.html(obj.projectData2);
            projectWebsite.html(obj.projectWebsite);
        }
    })
}

function loadImageRepeat(){
    $(".img-repeat").each(function() {
        var fileLocation = $(this).attr("file-location");
        var fileType = $(this).attr("file-type");
        $(this).css('background-image', 'url(img/' + fileLocation + '.' + fileType + ')');
    });
}

function loadSlideCounter(){
    var activeSection = $('.section.active');
    var totalSlides = activeSection.find(".slide").length;
    var numContainer = $('#project-info').find('.num');
    numContainer.html("1 / " + totalSlides);
};