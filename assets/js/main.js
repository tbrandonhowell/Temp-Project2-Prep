window.onload = function() {
    let logoHeight = $('#logoDiv').height();
    console.log({logoHeight});
    let formHeight = $('#formDiv').height();
    console.log({formHeight});
    if ($(window).width() > 767) {
        console.log("window is big enough");
        if (logoHeight > formHeight) {
            console.log("logo is larger");
            let newTopMargin = (logoHeight - formHeight) / 2;
            console.log({newTopMargin});
            $('#formDiv').attr("style","margin-top: " + newTopMargin);
        } else {
            // something;
        }
    }
};

