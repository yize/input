KISSY.ready(function (S) {
    var D = S.DOM, E = S.Event;
    var inputClass = '.input-test',
        inputWrapClass = '.input-wrap',
        inputWrap = D.query(inputWrapClass);
    var input = D.query('.input-test', inputWrap);
    D.css(inputWrap, {'position':'relative', 'cursor':'pointer', 'overflow':'hidden'});

    D.css(input, {'cursor':'pointer', 'position':'absolute', 'width':'100', 'margin':'0', 'filter':'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)', 'opacity':'0', 'clip':'rect(9px,86px,15px,80px)'});

    D.attr('hidefocus', 'true');

    E.on(inputWrap, 'mousemove', function (ev) {
        var currentTarget = ev.currentTarget;
        var offset = D.offset(currentTarget);
        var input = D.get(inputClass, currentTarget);
        var width = D.width(input);
        var left = ev.clientX - D.scrollLeft(window) - offset.left;
        var top = ev.clientY + D.scrollTop(window) - offset.top;
        if (S.UA.ie) {
            D.css(input, {left:left - width + 12, top:top - 12});
        } else {
            D.css(input, {left:left - width + 17, top:top - 12});
        }
    })
})