function init() {

    // popup クラスを持つオブジェクトを取得

    var elements = getElementsByClass('popup');

    // イベントを設定

    for (var i = 0; i < elements.length; i++) {

        elements[i].onmouseenter = popUp;

		elements[i].onmousemove = mouseMove;

        elements[i].onmouseout = popUp;

    }

}



function getElementsByClass(className) {

    // クラス名の前後に空白追加 ( className-a とかが引っかからないように )

    className = ' ' + className + ' ';

    // 全てのオブジェクトを取得

    var allElm = document.getElementsByTagName('*');

    var elements = new Array();

    // 指定クラスを持つオブジェクトを探す

    for (var i = 0; i < allElm.length; i++) {

        if ((' ' + allElm[i].className + ' ').indexOf(className) >= 0) {

            elements[elements.length] = allElm[i];

        }

    }

    return elements;

}



// マウスイベントを設定

var mouseMove = function( e ) {

    // 動作を停止

    e.preventDefault() ;


    // マウス位置を取得する

    var mouseX = e.pageX ;	// X座標

    var mouseY = e.pageY ;	// Y座標

    //var mouseX = e.clientX ;	// X座標

    //var mouseY = e.clientY ;	// Y座標


    // popid 属性の値を取得

    var id = this.getAttribute('popid');

    // # を削除

    id = id.replace('#', '');

    var elm = document.getElementById(id);

    elm.style.left = mouseX;

    elm.style.top = mouseY - 20 - elm.offsetHeight;

    console.log("mouseX = "+mouseX+", mouseY = "+mouseY+id)
    console.log(elm);

};




function popUp() {

    // popid 属性の値を取得

    var id = this.getAttribute('popid');
    // # を削除

    id = id.replace('#', '');


    var elm = document.getElementById(id);

    if (elm.style.display == '' || elm.style.display == 'none') {

        // 位置調整

        //elm.style.top = this.offsetTop + 5 + 'px';

        //elm.style.left = this.offsetLeft + 'px';

        // 表示

        elm.style.display = 'block';

    } else {

        // 非表示

        elm.style.display = 'none';

    }


}



// HTML ロード時に init 関数を実行させる

if(window.addEventListener){

    // IE 以外

    window.addEventListener('load', init, false);

}else if(window.attachEvent){
    // IE 用

    window.attachEvent('onload', init);

}
