/* global $ List: true */
function Font(){
    var html = ''
        +'<div class="notepad-dlg-mask notepad-dlg-font">'
            +'<div class="dialogbox notepad-dlgbox">'
                +'<div class="notepad-dlg-titlebar">'
                    +'<p class="title">字体</p>'
                    +'<span class="close-btn">✖</span>'
                +'</div>'
                +'<div class="main notepad-dlg-main">'
                    +'<div class="font-family"><p>字体(F):</p></div>'
                    +'<div class="font-style"><p>字形(Y):</p></div>'
                    +'<div class="font-size"><p>大小(S):</p></div>'
                    +'<fieldset class="sample">'
                        +'<legend>示例</legend>'
                        +'<p>AaBbYyZz</p>'
                    +'</fieldset>'
                    +'<div class="script">'
                        +'<label>'
                            +'脚本(R):<br>'
                            +'<select>'
                                +'<option value="西欧语言">西欧语言</option>'
                                +'<option value="中文 GB2312">中文 GB2312</option>'
                            +'</select>'
                        +'</label>'
                    +'</div>'
                    +'<input class="btn-ok btn" type="button" value="确定">'
                    +'<input class="btn-cancel btn" type="button" value="取消">'
                +'</div>'
            +'</div>'
        +'</div>',
        $dlg = $(html);
    $('.notebook').append($dlg);

    var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
        styles = ['常规', '斜体', '粗体', '粗偏斜体'],
        sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];

    var $fontFamily = new List();
    var $fontStyle = new List();
    var $fontSize = new List();
    $fontFamily.show({
      contaniner:'.font-family',
      list:fonts,
      select:0,
      width:'176px',
      isFont: true,
      isFontStyle: false,
      selectHandler: function(e) {$('.sample').find('p').css({'font-family':e}); }
    });
    $fontStyle.show({
      contaniner:'.font-style',
      list:styles,
      select:0,
      width:'132px',
      isFont: false,
      isFontStyle:true,
      selectHandler: function(e) { $fontStyle.setStyle($('.sample').find('p'),e); }
    });
    $fontSize.show({
      contaniner:'.font-size',
      list:sizes,
      select:0,
      width:'64px',
      isFont: false,
      isFontStyle:false,
      selectHandler: function(e) { $('.sample').find('p').css({'font-size':e+'px'}); }
    });

    var $closeBtn = $('.close-btn');
    var $btnok = $('.btn-ok');
    var $btncancel = $('.btn-cancel');
    function show(){
        $('.menus').css({"display":"none"});
        $closeBtn.click(function(){
            $dlg.remove();
        });
        $btnok.click(function(){
            $dlg.remove();
        });
        $btncancel.click(function(){
            $dlg.remove();
        });
        
    }
    return {
        show:show
    }
}