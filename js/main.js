$(document).ready(function() {
    // ---- 首頁相關函式 ----
    // 首頁導覽列，點擊過濾PS或者專案作品
    $(".navbar .nav-link ").on("click", function() {
        $(".navbar  .nav-link ").css("text-shadow", "");
        $(this).css("text-shadow", "1px 0 #888888");
    });
    
    $('.dropdown-item').on("click", function() {
        let value = $(this).data("category").toLowerCase();
        if (value == "all") value = " ";
        $("#content .back").filter(function() {
            $(this).toggle($(this).data("url").toLowerCase().indexOf(value) > -1)
        });
    });

    // 作品資料區
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

    // 動態產生作品的前圖與後圖，前後圖用在翻頁動畫，當游標懸停在後圖，前圖做翻頁動作
    let html = " ";
    for (var j = 0; j < arr.length; j++) {
        let dict = arr[j];

        let githubData = (dict['github'] != undefined) ? "data-github = '" + dict['github'] + "'" : "";
        html += `<div class="col-md-4 col-sm-6 back card-image " style="background-image: url( '${dict["content-image"]}'); " data-url="${dict["url"]}" ${githubData} data-img="${dict["cover-image"]}" data-desc="${dict["desc"]}" data-title="${dict["title"]}">`;

        html += `<div class="front col-12 card-image card-image-cursor " style="background-image: linear-gradient( rgba(255, 255, 255, 0.5), rgba(211, 211, 211, 0.5)), url( '${dict["cover-image"]}'); "><div class = "card-title w-100">${dict["title"]}</div></div>`;

        html += `</div>`;

    }
    // 加入作品截圖
    $("#content").html(html);

    // 在首頁按下作品截圖的連結，加入作品相關資料，以便在作品說明頁做使用
    $(".back").on("click", function() {

        $("#button_site").attr("href", $(this).data("url"));
        // 有提供github連結才顯示github按鈕
        if ($(this).data("github") != null) {
            $("#button_github_navitem").show();
            $("#button_github").attr("href", $(this).data("github"));
        } else { //沒提供github連結就不顯示github按鈕
            $("#button_github_navitem").hide();
        }
        // 加入作品相關資料至作品說明頁上的元件
        $("#img_source").attr("src", $(this).data("img"));
        $("#img_desc").html($(this).data("desc"));
        $("#img_title").html($(this).data("title"));

        // 顯示作品說明頁
        $("#work_desc").show();
        $(".wrap").hide();
        $("footer").hide();
    });

    // ---- 作品說明頁相關函式 ----
    // 在作品說明頁按下返回按鈕，顯示首頁
    $("#button_back").on("click", function() {
        $("#work_desc").hide();
        $(".wrap").show();
        $("footer").show();
    });

    // ---- 登入頁相關函式 ----
    // 點擊使用者圖示焦點至使用者輸入框
    $("#userIcon").click(function() {
        $("#userInput").focus();
    });
    // 點擊鎖圖示焦點至密碼輸入框
    $("#pwIcon").click(function() {
        $("#pwInput").focus();
    });
}); //end document ready