/*
 * fileOverView:���������������input:file
 * author:yize.shc@gmail.com
 * date:2012/8/1
 * */
KISSY.ready(function (S) {
    S.use('sizzle', function () {

        var D = S.DOM, E = S.Event;
        var inputWrap = D.query('[node-type="inputWrap"]');
        var input = D.query('input:file', inputWrap);

        S.each(inputWrap, function (e) {
            if (D.css(e, 'position') !== 'absolute') {
                D.css(e, 'position', 'relative');
            }
        });

        D.css(inputWrap, {'cursor':'pointer', 'overflow':'hidden'});
        D.css(input, {'cursor':'pointer', 'position':'absolute', 'width':'100', 'margin':'0', 'filter':'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)', 'opacity':'0', 'clip':'rect(9px,86px,15px,78px)', 'display':'block', 'font':'13.333px/1.5px simsun', 'padding':0, 'height':'22px', 'border':'none'});

        E.on(inputWrap, 'mousemove', function (ev) {
            var currentTarget = ev.currentTarget;
            var offset = D.offset(currentTarget);
            var input = D.get('input:file', currentTarget);
            var width = D.width(input);
            var left = ev.clientX - D.scrollLeft(window) - offset.left;
            var top = ev.clientY + D.scrollTop(window) - offset.top;

            if (S.UA.firefox) {
                D.css(input, {left:left - width + 20, top:top - 12});
            } else {
                D.css(input, {left:left - width + 16, top:top - 12});
            }

        });
    });
});