const hamburgerMenu = document.querySelector(".hamburger-menu")
const mainMenuBlock = document.querySelector(".main-menu-block")
const hamburgerClose = document.querySelector(".hamburger-close")

function toggleMenu() {
    mainMenuBlock.classList.toggle("show-menu");
}

hamburgerMenu.addEventListener('click', function (event) {
    event.stopPropagation();

    toggleMenu();

    document.addEventListener('click', function (event) {
        if (!mainMenuBlock.contains(event.target)) {
            mainMenuBlock.classList.remove("show-menu");
            document.removeEventListener('click', toggleMenu);
        }
    });
});

mainMenuBlock.addEventListener('click', function (event) {
    event.stopPropagation();
});

hamburgerClose.addEventListener('click', function () {
    mainMenuBlock.classList.remove("show-menu");
});


function openLink(evt, animName) {
    var i, x, tabLinks;
    x = document.getElementsByClassName("mapContent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabBtnLink");
    for (i = 0; i < x.length; i++) {
        tabLinks[i].classList.remove("tab-active");
    }
    document.getElementById(animName).style.display = "flex";
    evt.currentTarget.classList.add("tab-active");
}

$(function () {
    $("#startDate").datepicker({
        dateFormat: "mm/dd/yy",
        showOn: "both",
        buttonImage: "../../resources/images/chevron-up-s.png",
        buttonImageOnly: true,
        buttonText: "Select start date",
        beforeShow: function (input, inst) {
            $(input).prop("readonly", true);
        },
        onClose: function (input, inst) {
            $(input).prop("readonly", false);
        },
        onSelect: function (dateText) {
            console.log("Selected date: " + dateText);
        }
    });
});

$(function () {
    $("#endDate").datepicker({
        dateFormat: "mm/dd/yy",
        showOn: "both",
        buttonImage: "../../resources/images/chevron-up-s.png",
        buttonImageOnly: true,
        buttonText: "Select start date",
        beforeShow: function (input, inst) {
            $(input).prop("readonly", true);
        },
        onClose: function (input, inst) {
            $(input).prop("readonly", false);
        },
        onSelect: function (dateText) {
            console.log("Selected date: " + dateText);
        }
    });
});

$(function () {
    $("#trafficStartDate").datepicker({
        dateFormat: "mm/dd/yy",
        showOn: "both",
        buttonImage: "../../resources/images/chevron-up-s.png",
        buttonImageOnly: true,
        buttonText: "Select start date",
        beforeShow: function (input, inst) {
            $(input).prop("readonly", true);
        },
        onClose: function (input, inst) {
            $(input).prop("readonly", false);
        },
        onSelect: function (dateText) {
            console.log("Selected date: " + dateText);
        }
    });
});

$(function () {
    $("#trafficEndDate").datepicker({
        dateFormat: "mm/dd/yy",
        showOn: "both",
        buttonImage: "../../resources/images/chevron-up-s.png",
        buttonImageOnly: true,
        buttonText: "Select start date",
        beforeShow: function (input, inst) {
            $(input).prop("readonly", true);
        },
        onClose: function (input, inst) {
            $(input).prop("readonly", false);
        },
        onSelect: function (dateText) {
            console.log("Selected date: " + dateText);
        }
    });
});


let mapContent2Popup = document.querySelector(".mapContent-2-popup")

document.getElementById("tabBtnLink2").addEventListener("click", ()=>{
    mapContent2Popup.classList.toggle("mapContent2Popup-show")
})

document.getElementById("mapContent-2-popup-btn").addEventListener("click", ()=>{
    mapContent2Popup.classList.toggle("mapContent2Popup-show")
})

let mapContent3Popup = document.querySelector(".mapContent-3-popup")

document.getElementById("tabBtnLink3").addEventListener("click", ()=>{
    mapContent3Popup.classList.toggle("mapContent3Popup-show")
})

document.getElementById("mapContent-3-popup-btn").addEventListener("click", ()=>{
    mapContent3Popup.classList.toggle("mapContent3Popup-show")
})