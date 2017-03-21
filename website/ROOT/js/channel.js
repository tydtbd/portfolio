$(function() {
    // menu
    $('.menu img').hover(function() {

            if ($(this).attr('id') != "img2") {

                var nc = $(this).attr('src').replace('_off.gif', '_on.gif');
                $(this).attr('src', nc);
            }
        },
        function() {

            if ($(this).attr('id') != "img2") {

                var nc = $(this).attr('src').replace('_on.gif', '_off.gif');
                $(this).attr('src', nc);
            }
        });
    //
    $('.footermenu img').hover(function() {

        var nc = $(this).attr('src').replace('.gif', '_on.gif');
        $(this).attr('src', nc);
    }, function() {
        var nc = $(this).attr('src').replace('_on.gif', '.gif');
        $(this).attr('src', nc);
    });
    // gnb
    $('.gnb a img').hover(function() {

        var nc = $(this).attr('src').replace('.gif', '_on.gif');
        $(this).attr('src', nc);
    }, function() {
        var nc = $(this).attr('src').replace('_on.gif', '.gif');
        $(this).attr('src', nc);
    });
    // TV광고 동영상
    $('.listwrap dt a').click(function() {

        var movecode = $(this).attr('href');
        var url = "https://www.youtube.com/embed/" + movecode + ""
        $('.vod iframe').attr('src', url)



        return false
    })
    // 사이트맵 열기 닫기
    $('.map_open').click(function() {

        $('.hidemap').animate({
            left: 0
        })

    })

    $('.map_close').click(function() {

        $('.hidemap').animate({
            left: -755
        })
    })
    //
    $('.sitemaparea a img').hover(function() {

            if ($(this).attr('id') != "a1") {

                var nc = $(this).attr('src').replace('_off.gif', '_on.gif');
                $(this).attr('src', nc);
            }
        },
        function() {

            if ($(this).attr('id') != "a1") {

                var nc = $(this).attr('src').replace('_on.gif', '_off.gif');
                $(this).attr('src', nc);
            }
        });
});
