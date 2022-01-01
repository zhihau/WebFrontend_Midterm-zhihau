$(document).ready(function() {
    $(".nav-link ").on("click ", function() {
        var value = $(this).text().toLowerCase();
        $(".nav-link ").removeClass("active ");
        $(this).addClass("active ");
        if (value == "all ") value = " ";
        $("#content>div").filter(function() {
            // let link = $(this).attr('onclick');
            // console.log("LINK:" +
            //     link.toLowerCase());
            // console.log("VAL:" + value);
            // console.log($(this).attr('onclick').toLowerCase().indexOf(value) > -1);
            // if ($(this).attr('onclick').toLowerCase().indexOf(value) > -1) {
            //     $(this).show();
            // } else {
            //     $(this).hide();
            // }
            $(this).toggle($(this).attr('onclick').toLowerCase().indexOf(value) > -1)
        });
    });
    let arr = [{
        "content-image": "images/storybook-content.png ",
        "cover-image": "images/storybook-cover.png ",
        "url": "http://220.128.133.15/s1100423/collection/Projects/storybook/index.php ",
        "title": "勇敢的猴子海賊團"
    }, {
        "content-image": "images/calendar-content.png ",
        "cover-image": "images/calendar-cover.png ",
        "url": "http://220.128.133.15/s1100423/collection/Projects/calendar/index.php ",
        "title": "萬年曆"
    }, {
        "content-image": "images/polling-content.png ",
        "cover-image": "images/polling-cover.png ",
        "url": "http://220.128.133.15/s1100423/collection/Projects/polling/index.php ",
        "title": "投票系統"
    }, {
        "content-image": "images/tiger-calendar-content.png ",
        "cover-image": "images/tiger-calendar-cover.png ",
        "url": "http://220.128.133.15/s1100423/collection/PS/Year_of_the_Tiger_Calendar/index.php ",
        "title": "虎年年曆"
    }, {
        "content-image": "images/newsletter-content.png ",
        "cover-image": "images/newsletter-cover.png ",
        "url": "http://220.128.133.15/s1100423/collection/PS/Newsletter/index.php ",
        "title": "旅遊海報"
    }, {
        "content-image": "images/banner-content.png ",
        "cover-image": "images/banner-cover.png ",
        "url": "http://220.128.133.15/s1100423/collection/PS/banner/index.php ",
        "title": "banner設計"
    }];
    // console.log(arr);
    let html = " ";
    for (var j = 0; j < arr.length; j++) {
        let dict = arr[j];
        //d-flex 與display none衝突
        html += `<div class="col-md-4 col-sm-6 back card-image " style="background-image: url( '${dict["content-image"]}'); " onclick="window.location.href='${dict["url"]}' ">`;

        html += `<div class="front col-12 card-image card-image-cursor " style="background-image: linear-gradient( rgba(255, 255, 255, 0.5), rgba(211, 211, 211, 0.5)), url( '${dict["cover-image"]}'); "><div class = "card-title w-100">${dict["title"]}</div></div>`;

        html += `</div>`;
        // console.log(html);
    }
    // console.log("aaa ");
    // console.log(html);
    $("#content ").html(html);
});