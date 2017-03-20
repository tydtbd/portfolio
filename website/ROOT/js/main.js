$(function() {

    // menu 마우스오버
    $('.menu img').hover(function() {

        var nc = $(this).attr('src').replace('_off.gif', '_on.gif');
        $(this).attr('src', nc);
    }, function() {
        var nc = $(this).attr('src').replace('_on.gif', '_off.gif');
        $(this).attr('src', nc);
    });


    // gnb 마우스오버
    $('.gnb a img').hover(function() {

        var nc = $(this).attr('src').replace('.gif', '_on.gif');
        $(this).attr('src', nc);
    }, function() {
        var nc = $(this).attr('src').replace('_on.gif', '.gif');
        $(this).attr('src', nc);
    });

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
    // sitemenu
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
