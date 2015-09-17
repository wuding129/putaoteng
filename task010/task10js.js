/**
 * Created by my on 2015/9/17.
 */
window.onscroll = function () {
    if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
        document.getElementById("goTop").style.display = "block";
    }
    else {
        document.getElementById("goTop").style.display = "none";
    }
};
var oMenuList=document.getElementById('menuList');
/*var oNavMenu=document.getElementById('navMenu');*/
var a=1;
function show(){
    oMenuList.style.display='block';
}
function hide(){
    oMenuList.style.display='none';
}
function menu(){
    if(a==1){
        show();
        a=0;
        /*setTimeout("noneBlock()",4300);//5√Î*/
    }else{
        a=1;
        hide();
    }
}