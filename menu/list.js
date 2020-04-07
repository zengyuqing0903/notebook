/* global $: true */
function List(){
    var $selbox = $(''
        + '<div class="list-main">'
            + '<input class="list-editor" type="text"><br>'
            + '<ul class="list">'
            + '</ul>'
        + '</div>'),
        $editor = $selbox.find('.list-editor'),
        $list = $selbox.find('.list');
    var $item;

    var selbox = {
        contaniner:'body',
        list:[],
        select:0,
        width:'200px',
        isFont: false,
        isFontStyle: true,
        selectHandler: function(e) { console.log(e); }
    }
    // 字形设置(对应)
    function setStyle(item, style) {
        if(style === '常规') { 
            item.css({
                'font-style': '',
                'font-weight': ''
            });
            return;
        }
        if(style === '斜体') {
            item.css({
                'font-style': 'italic',
                'font-weight': ''
            });
            return;
        }
        if(style === '粗体') {
            item.css({
                'font-style': '',
                'font-weight': 'bold'
            })
            return;
        }
        if(style === '粗偏斜体') {
            item.css({
                'font-weight': 'bold',
                'font-style': 'italic'
            });
            return;
        }
    }

    //根据selbox中list数组的内容进行相应的操作
    function fillData() {
        if(selbox.isFont) {
            for(var i=0; i<selbox.list.length; i++) {
                $item = $('<li class="item">'+selbox.list[i]+'</li>');
                $item.css({'font-family': selbox.list[i]});
                // $item.attr('name',i);
                $list.append($item);
            }
        } else if(selbox.isFontStyle) {
            for(var i=0; i<selbox.list.length; i++) {
                $item = $('<li class="item">'+selbox.list[i]+'</li>');
                setStyle($item,selbox.list[i]);
                // $item.attr('name',i);
                $list.append($item);
            }
        } else {
            for(var i=0; i<selbox.list.length; i++) {
                $item = $('<li class="item">'+selbox.list[i]+'</li>');
                // $listItem.attr('name',i);
                $list.append($item);
            }
        }
    }

    function show(con){
        $.extend(selbox, con);

        var $oldList = $(selbox.container).find('.list-main');
        if($oldList.length !== 0) $oldList.remove();
        $list.css({'width':selbox.width});
        $editor.css({'width':selbox.width});
        fillData();

        $($list.find('.item')[selbox.select]).addClass('selected');
        $editor.val(selbox.list[selbox.select]);

        $list.click(function(e) {
            $($list.find('.item')[selbox.select]).removeClass('selected');
            selbox.select = selbox.list.indexOf($(e.target).html());
            $($list.find('.item')[selbox.select]).addClass('selected');
            $editor.val(selbox.list[selbox.select]);
            $editor.select();
            selbox.selectHandler(selbox.list[selbox.select]);
        });
        var $font = $(selbox.contaniner);
            $font.append($selbox);
    };

    return{
        show:show,
        setStyle:setStyle
    }
}