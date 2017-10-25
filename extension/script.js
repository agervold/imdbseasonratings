var parser = new DOMParser();
var totalRating = 0;
var len = $(".info").length;
var counter = 0;

$(".info").each(function(i, info) {
    (function(i, info) {
        $.get($(info).find("a").attr("href"), function(res) {
            var doc = parser.parseFromString(res, "text/html");
            var rating = $(doc).find(".ratingValue strong").text();
            totalRating += parseFloat(rating.replace(",","."));
            $($(info.previousElementSibling).find("div")[0]).append(`<div style='top:0'>${rating}</div>`);
            if (++counter == len) $("#episode_top")[0].innerHTML += ` - <span title='Average Season Rating'>${(totalRating/$(".info").length).toFixed(1)}</span>`;
        });
    })(i, info);
});

