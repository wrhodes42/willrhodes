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
    
    var pmslideIndex = 0;
    function pmcarousel() {
        var i;
        var x = document.getElementsByClassName("pm-img-slider");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
        }
        pmslideIndex++;
        if (pmslideIndex > x.length) {pmslideIndex = 1} 
        x[pmslideIndex-1].style.display = "block"; 
        setTimeout(pmcarousel, 2500); // Change image every 1.5 seconds
    }
    pmcarousel();