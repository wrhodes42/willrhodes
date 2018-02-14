$(document).ready(function(){

    $("#fullpage").fullpage({
        continuousHorizontalKey: 'd2lsbHJob2Rlcy5ibHVlX0M3alkyOXVkR2x1ZFc5MWMwaHZjbWw2YjI1MFlXdz1RMFc=',
        continuousHorizontal: true,
        verticalCentered: true,
        controlArrows: true,
        slidesNavigation: false,
        afterSlideLoad: function(){
            projectInfo();
        }
    });




    $(".img-cover").each(function() {
        var data = $(this).attr("file-name");
        var coverFileType = $(this).attr("file-type");
        $(this).css('background-image', 'url(img/' + data + '.' + coverFileType + ')');
    });
    $(".img-repeat").each(function() {
        var data = $(this).attr("file-name");
        var repeatFileType = $(this).attr("file-type");
        $(this).css('background-image', 'url(img/' + data + '.' + repeatFileType + ')');
    });
    $(".img-contain").each(function() {
        var data = $(this).attr("file-name");
        var containFileType = $(this).attr("file-type");
        $(this).css('background-image', 'url(img/' + data + '.' + containFileType + ')');
    });


    function projectInfo() {

        var imgProject = $(".section .active").attr("project");

        $(".project-info").each(function(){
            $(this).hide();
            var infoProject = $(this).attr("project");
            if(infoProject === imgProject){
                $(this).show();
            };
        });
    };
    projectInfo();

    $("#contact").click(function(){
        $.fn.fullpage.moveSectionDown();
    });

    var pwslideIndex = 0;

    function pwcarousel() {
        var i;
        var x = document.getElementsByClassName("pw-img-slider");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        }
        pwslideIndex++;
        if (pwslideIndex > x.length) {pwslideIndex = 1} 
        x[pwslideIndex-1].style.display = "block"; 
        setTimeout(pwcarousel, 2500); // Change image every 1.5 seconds
    }
    pwcarousel();


    var dsslideIndex = 0;
    function dscarousel() {
        var i;
        var x = document.getElementsByClassName("ds-img-slider");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        }
        dsslideIndex++;
        if (dsslideIndex > x.length) {dsslideIndex = 1} 
        x[dsslideIndex-1].style.display = "block"; 
        setTimeout(dscarousel, 2500); // Change image every 1.5 seconds
    }
    dscarousel();


});
