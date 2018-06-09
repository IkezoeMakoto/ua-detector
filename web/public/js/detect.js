$(function() {
    $('.js-ua-detect').on('click', function () {
        var ua = $('.js-ua').val();
        var info = platform.parse(ua);
        $('.js-os').text(info.os);
        $('.js-browser').text(info.name);
        $('.js-browser-version').text(info.version);
    });
});
