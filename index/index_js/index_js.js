/**
 * Created by Wuding on 2015/9/12.
 */
window.onload=function(){
    var oBigImg=document.getElementById('bigImg');
    var oClickImg=document.getElementById('clickImg');
    oClickImg.onclick=function(){
        oBigImg.style.display='block';
    };
    oBigImg.onclick=function(){
        oBigImg.style.display='none';
    };
    /*--------------------*/
    var oFrameWrapper=document.getElementById('frameWrapper');
    var oClickLog=document.getElementById('clickLog');
    oClickLog.onclick=function(){
        oFrameWrapper.style.display='block';
    };
    oFrameWrapper.onclick=function(){
        oFrameWrapper.style.display='none';
    };
    /*---------------------*/
    /*---------*/
    var oLight=document.getElementById('light');
    var oTurnOn=document.getElementById('turnOn');
    function on(){
        oTurnOn.style.display='block';
    }
    function off(){
        oTurnOn.style.display='none';
    }
};
window.onscroll = function () {
        if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
            document.getElementById("letUp").style.display = "block";
        }
        else {
            document.getElementById("letUp").style.display = "none";
        }
    };
