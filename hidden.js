var btn=document.getElementById('select_body_btn');
var hidden=document.getElementById('hidden');
var allContent = document.getElementById('allContent');

var s_body_lists = document.getElementsByClassName('sel_body_lists');

var s_pyr_btn = document.getElementsByClassName('s_pyr_btn');
var s_player = document.getElementsByClassName('s_player');
btn.onclick=function(){
    console.log(hidden.style.left)
    if(hidden.style.left=='0px'){
        hidden.style.left='-660px';
        allContent.className = '';
        hidden.style.height = '840px';
        hidden.style.overflow = 'hidden';
    }else{
        hidden.style.left='0px'
        allContent.className = 'allContent';
        hidden.style.height = '1600px';
        hidden.style.overflow = 'visible';
    }

};
/*右侧菜单中的样式*/
var i;
for (i = 0; i < s_body_lists.length; i++) {
    s_body_lists[i].onmouseover = function() {
        this.childNodes[1].childNodes[1].style.display = 'block';
        this.childNodes[3].childNodes[7].style.display = 'block';
    }
    s_body_lists[i].onmouseout = function() {
        this.childNodes[1].childNodes[1].style.display = 'none';
        this.childNodes[3].childNodes[7].style.display = 'none';
    }
}


for (j = 0; j < s_player.length; j++) {
    s_player[j].style.display = "none";
}
s_player[0].style.display = "initial";
s_pyr_btn[0].style.backgroundColor = "#9dd6c5";
var tim = setInterval(qiehuan, 3000);
console.log(s_pyr_btn[0].style.backgroundColor.indexOf("9"));

function qiehuan() {
    if (s_pyr_btn[0].style.backgroundColor.indexOf("9") == 15) {
        s_pyr_btn[1].style.backgroundColor = "#9dd6c5";
        s_pyr_btn[0].style.backgroundColor = "#ddd";
        pipei();
    } else if (s_pyr_btn[1].style.backgroundColor.indexOf("9") == 15) {
        s_pyr_btn[2].style.backgroundColor = "#9dd6c5";
        s_pyr_btn[1].style.backgroundColor = "#ddd";
        pipei();
    } else if (s_pyr_btn[2].style.backgroundColor.indexOf("9") == 15) {
        s_pyr_btn[3].style.backgroundColor = "#9dd6c5";
        s_pyr_btn[2].style.backgroundColor = "#ddd";
        pipei();
    } else if (s_pyr_btn[3].style.backgroundColor.indexOf("9") == 15) {
        s_pyr_btn[4].style.backgroundColor = "#9dd6c5";
        s_pyr_btn[3].style.backgroundColor = "#ddd";
        pipei();
    } else if (s_pyr_btn[4].style.backgroundColor.indexOf("9") == 15) {
        s_pyr_btn[5].style.backgroundColor = "#9dd6c5";
        s_pyr_btn[4].style.backgroundColor = "#ddd";
        pipei();
    } else {
        s_pyr_btn[0].style.backgroundColor = "#9dd6c5";
        s_pyr_btn[5].style.backgroundColor = "#ddd";
        pipei();
    }
}

function pipei() {
    for (i = 0; i < s_pyr_btn.length; i++) {
        if (s_pyr_btn[i].style.backgroundColor.indexOf("9") == 15) {
            for (j = 0; j < s_player.length; j++) {
                s_player[j].style.display = "none";
            }
            s_player[i].style.display = "initial";
        }
    }
}

for (i = 0; i < s_pyr_btn.length; i++) {
    s_pyr_btn[i].onmouseover = function() {
        clearInterval(tim);
        for (i = 0; i < s_pyr_btn.length; i++) {
            s_pyr_btn[i].style.backgroundColor = "#ddd";
        }
        this.style.backgroundColor = "#9dd6c5";
        pipei();
    }
    s_pyr_btn[i].onmouseout = function() {
        tim = setInterval(qiehuan, 3000);
    }
}
/**/
for (i = 0; i < s_player.length; i++) {
    s_player[i].onmouseover = function() {
        //console.log(s_player[i].childNodes[1].style);
        this.childNodes[3].childNodes[1].style.color = "#9dd6c5";
    }
    s_player[i].onmouseout = function() {
        this.childNodes[3].childNodes[1].style.color = "#999";
    }
}