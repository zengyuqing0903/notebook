/* global $ menuData: true */
function Menubar(){
    var $notebook = $('.notebook');
    $notebook.append('<div class="menubar"></div>')

    // 编辑区
    var $editor = $('<div class="editor"></div>')
    $('.notebook').append($editor);
    var area = $('<textarea spellcheck="false" auto-size="none" wrap="off" style="overflow-x: scroll; font-family: Arial; font-size: 16pt;"></textarea>')
    $editor.append(area)

    var menuArr = [];
    // 菜单栏状态
    var menuStatus = -1;
    // 初始化菜单栏
    function init(){
        var $menubar = $('.menubar');
        $menubar.append('<ul class="menu-title"></ul>') 
        // 一级菜单
        for(var i=0;i<menuData.length;i++){
            var $menuTitle = $('.menu-title');
            var $title = $(' <li class="title" data-tag='+i+'>'+menuData[i].title+'</li>');
            $menuTitle.append($title); 
            $title.click(function(){
                var tag = this.dataset.tag;
                if(menuStatus == -1){
                    menuArr[tag].css({ display: 'block' });
                    menuStatus = tag;
                } else if(menuStatus !== tag) {
                    menuArr[menuStatus].css({ display: 'none' });
                    menuArr[tag].css({ display: 'block' });
                    menuStatus = tag;
                } else {
                    menuArr[menuStatus].css({ display: 'none' });
                    menuStatus = -1;
                }
            })
            $title.hover(function() {
                if(menuStatus !== -1) {
                    var tag = this.dataset.tag;
                    menuArr[menuStatus].css({ display: 'none' });
                    menuArr[tag].css({ display: 'block' });
                    menuStatus = tag;
                }
            });
        }
        // 二级菜单
        for(var i=0;i<menuData.length;i++){
            var $menus = $('<ul class="menus"></ul>');
            for(var j=0;j<menuData[i].menuItems.length;j++){
                if(menuData[i].menuItems[j].title == 'hr'){
                    var $menuItem = $('<li class="menu-hr"></li>');
                }else{
                    var $menuItem = $('<li class="menu-item">'+menuData[i].menuItems[j].title+'<span class="shortcut">'+menuData[i].menuItems[j].shortcut+'</span></li>');
                    $menuItem.click(menuData[i].menuItems[j].handler)
                    menuStatus = -1;
                }
                $menus.append($menuItem);
            }
            $menus.css({
                width: menuData[i].width,
                left: menuData[i].left,
                display: 'none'
            });
            $menubar.append($menus);
            menuArr.push($menus);
        }
    }
    this.show = init()
};

