对input的兼容（基于KISSY 1.1.6+）
=========

原理
----

将`input:file`控件设置为不可见，并且将其进行切分，当触发鼠标在按钮上的`mousemove`事件时，同时改变input:file控件的定位，使空间一直跟随鼠标移动，这样点击的时候就可以点击到原生的input:file，针对不同浏览器做了兼容

测试过的浏览器：

- IE 5.5+ 
- Firefox
- Chrome
- Safari
- Opera

用法
-----

###HTML：
```html
<div class="" node-type="inputWrap">
    <input type="file" size="1" hidefocus="true" style="display: none;">
</div>
```

`input`外的`div`节点为自定义样式的按钮,只需要给它设定一个自定义属性`node-type="inputWrap"`

`input:file`的`size="1" hidefocus="true" style="display: none;"`属性为必须


###JavaScript：

```js
<script type="text/javascript" src="http://a.tbcdn.cn/s/kissy/1.2.0/kissy-min.js"></script>
<script type="text/javascript" src="./js/input.js"></script>

```

KISSY的版本为1.1.6+

js也可以异步引入

```js
<script type="text/javascript">
    KISSY.getScript('http://a.tbcdn.cn/apps/matrix-mission/js/input.js');
</script>
```

