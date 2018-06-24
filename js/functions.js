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

});
