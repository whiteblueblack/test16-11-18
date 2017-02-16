/**
 * Created by hanghang on 2016/11/18.
 */
window.onload = function(){
    var arrBanner = document.getElementById("banner");
    var arrBannerControl =document.getElementsByClassName("banner-control-1");
    var oNext = document.getElementById("next");
    var oPre = document.getElementById("pre");
    var a =0;
    Slide_Banner(arrBannerControl,arrBanner);
    function Slide_Banner(BannerControl,BannerPic){
        for(var i = 0; i<BannerControl.length; i++){
            BannerControl[i].index= i;
            BannerControl[i].onmouseover = function(){
                BannerPic.style.left=this.index*-1349+"px";
                for(var s = 0; s<BannerControl.length; s++){
                    BannerControl[s].style.backgroundColor="";
                }
                BannerControl[this.index].style.backgroundColor="white";
            };
        }
        var timer = setInterval(function(){
            a++;
            if(a==10){
                a=0;
            }
            for(var s = 0; s<BannerControl.length; s++){
                BannerControl[s].style.backgroundColor="";
            }
            BannerControl[a].style.backgroundColor="white";
            BannerPic.style.left=a*-1349+"px";
        },5000);
        BannerPic.onmouseover = function(){
            if(timer){
                clearInterval(timer);
                timer=0;
            }
        };
        BannerPic.onmouseout = function(){
            timer = setInterval(function(){
                a++;
                if(a==10){
                    a=0;
                }
                BannerPic.style.left=a*-1349+"px";
            },5000);
        };
    }
    var page =0;
    Next(oNext,arrBanner);
    function Next(oNext,BannerPic){
        oNext.onclick = function(){
            page ++;
            if(page>9){
                page=0;
            }
            BannerPic.style.left=page*-1349+"px";
        };
    }
    Next(oPre,arrBanner);
    function Pre(oPre,BannerPic){
        oPre.onclick = function(){
            page --;
            if(page==-1){
                page=9;
            }
            BannerPic.style.left=page*-1349+"px";
    }
    }
    var arrRecommend = document.getElementsByClassName("nav-box-list-2")[0];
    var arrNavDrop_2 = document.getElementById("nav-drop-2");
    arrRecommend.onmouseover = function(){
        arrNavDrop_2.style.display='block';
    };
    arrRecommend.onmouseout = function(){
        arrNavDrop_2.style.display='none';
    }
};