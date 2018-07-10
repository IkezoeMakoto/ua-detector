$(function() {
    $('.js-ua-detect').on('click', () => {
        var ua = $('.js-ua').val();
        var info = platform.parse(ua);
        $('.js-os').text(info.os);
        $('.js-browser').text(info.name);
        $('.js-browser-version').text(info.version);
    });

    // Enter押下時に判定させる
    $('.js-ua').on("keydown", (e) => {
        if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
            $('.js-ua-detect').click();
            return false;
        }
    });
});
