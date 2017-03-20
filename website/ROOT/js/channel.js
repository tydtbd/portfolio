$(function() {

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

    $('.listwrap dt a').click(function() {

        var movecode = $(this).attr('href');
        var url = "https://www.youtube.com/embed/" + movecode + ""
        $('.vod iframe').attr('src', url)



        return false
    })

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

});
