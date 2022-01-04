$(document).ready(function() {
    $(".wrap .nav-link ").on("click", function() {
        var value = $(this).text().toLowerCase();
        $(".wrap  .nav-link ").removeClass("active ");
        $(this).addClass("active ");
        if (value == "all") value = " ";
        // console.log(value);
        $("#content .back").filter(function() {
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
            // console.log($(this).data("url"));
            $(this).toggle($(this).data("url").toLowerCase().indexOf(value) > -1)
        });
    });

    let arr = [{
        "content-image": "images/storybook-content.png ",
        "cover-image": "images/storybook-cover.png ",
        "url": "http://220.128.133.15/s1100423/collection/Projects/storybook/index.php ",
        "github": "https://github.com/zhihau/storybook",
        "desc": "閱讀勇敢的猴子海賊團，跟著海盜<span style='font-weight: bold;font -size: large;'>莫迪</span>一起去冒險！",
        "title": "勇敢的猴子海賊團"
    }, {
        "content-image": "images/calendar-content.png ",
        "cover-image": "images/calendar-cover.png ",
        "url": "http://220.128.133.15/s1100423/collection/Projects/calendar/index.php ",
        "github": "https://github.com/wdaweb/php_1104-calendar-zhihau",
        "desc": "查詢每個月及特定節日。",
        "title": "萬年曆"
    }, {
        "content-image": "images/polling-content.png ",
        "cover-image": "images/polling-cover.png ",
        "url": "http://220.128.133.15/s1100423/collection/Projects/polling/index.php ",
        "github": "https://github.com/wdaweb/php_polling-zhihau",
        "desc": `<ul style='text-align: left;width: 50%;margin: auto;'>
            <li>一般帳號能登入系統、管理問卷、編輯會員資料、管理廣告。</li>
            <li>管理員帳號能管理問卷、廣告及會員。</li>
            <li>未登入的使用者能登入、註冊及查看問卷。</li>
            </ul>`,
        "title": "投票系統"
    }, {
        "content-image": "images/tiger-calendar-content.png ",
        "cover-image": "images/tiger-calendar-cover.png ",
        "url": "http://220.128.133.15/s1100423/collection/PS/Year_of_the_Tiger_Calendar/index.php ",
        "desc": "虎年年曆。",
        "title": "虎年年曆"
    }, {
        "content-image": "images/newsletter-content.png ",
        "cover-image": "images/newsletter-cover.png ",
        "url": "http://220.128.133.15/s1100423/collection/PS/Newsletter/index.php ",
        "desc": "冰島旅遊海報。",
        "title": "旅遊海報"
    }, {
        "content-image": "images/banner-content.png ",
        "cover-image": "images/banner-cover.png ",
        "url": "http://220.128.133.15/s1100423/collection/PS/banner/index.php ",
        "desc": "簡單的banner設計。",
        "title": "banner設計"
    }];
    // console.log(arr);
    let html = " ";
    for (var j = 0; j < arr.length; j++) {
        let dict = arr[j];
        //d-flex 與display none衝突
        // html += `<div class="col-md-4 col-sm-6 back card-image " style="background-image: url( '${dict["content-image"]}'); " onclick="window.location.href='${dict["url"]}' ">`;

        let githubData = (dict['github'] != undefined) ? "data-github = '" + dict['github'] + "'" : "";
        html += `<div class="col-md-4 col-sm-6 back card-image " style="background-image: url( '${dict["content-image"]}'); " data-url="${dict["url"]}" ${githubData} data-img="${dict["cover-image"]}" data-desc="${dict["desc"]}" data-title="${dict["title"]}">`;

        html += `<div class="front col-12 card-image card-image-cursor " style="background-image: linear-gradient( rgba(255, 255, 255, 0.5), rgba(211, 211, 211, 0.5)), url( '${dict["cover-image"]}'); "><div class = "card-title w-100">${dict["title"]}</div></div>`;

        html += `</div>`;
        // console.log(html);
    }
    // console.log("aaa ");
    // console.log(html);
    $("#content ").html(html);

    $(".back").on("click", function() {
        // console.log("aaa");
        $("#button_site").attr("href", $(this).data("url"));
        // console.log($(this).data("github"));
        if ($(this).data("github") != null) {
            // console.log("show");
            $("#button_github_navitem").show();
            $("#button_github").attr("href", $(this).data("github"));
        } else {
            // console.log("hide");
            $("#button_github_navitem").hide();
        }
        $("#img_source").attr("src", $(this).data("img"));
        $("#img_desc").html($(this).data("desc"));
        $("#img_title").html($(this).data("title"));
        // show work description
        $("#work_desc").show();
        $(".wrap").hide();
        $("footer").hide();
    });
    $("#button_back").on("click", function() {
        $("#work_desc").hide();
        $(".wrap").show();
        $("footer").show();
    });

    // ---- Login page ----
    $("#userIcon").click(function() {
        $("#userInput").focus();
    });
    $("#pwIcon").click(function() {
        $("#pwInput").focus();
    });
}); //end document ready