自定义input:file控件样式（基于KISSY 1.1.6+）
=========

原理
----

将原生的`input:file`控件切分并且设置为不可见，当触发鼠标在按钮上的`mousemove`事件时，改变input:file控件的`left`和`top`，使控件一直跟随鼠标移动，这样点击的时候就可以点击到原生的input:file，从而达到更改input:file样式的目的。

测试过的浏览器：

- IE 5.5+ 
- Firefox
- Chrome
- Safari
- Opera

用法
-----

###1.HTML：
```html
<div class="" node-type="inputWrap">
    <input type="file" size="1" hidefocus="true" style="display: none;">
</div>
```

`input:file`外的节点为自定义样式的按钮,只需要给它设定一个自定义属性`node-type="inputWrap"`

并且给`input:file`增加这些属性:`size="1" hidefocus="true" style="display: none;"`

###2.JavaScript
```html
<script type="text/javascript" src="http://a.tbcdn.cn/s/kissy/1.2.0/kissy-min.js"></script>
<script type="text/javascript" src="./js/input.js"></script>

```

KISSY的版本为`1.1.6+`

js推荐使用异步引入的方式:

```html
<script type="text/javascript">
    KISSY.getScript('http://a.tbcdn.cn/apps/matrix-mission/js/input.js');
</script>
```

