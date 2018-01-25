{
    let pager=document.querySelectorAll(".lu1 .page");
    let act=document.querySelectorAll(".lu1 ul li");
    let bannerContainer=document.querySelector(".lu1");
    let prebtn=document.querySelector(".lu1 .qin");
    let nextbtn=document.querySelector(".lu1 .qin1");
    act.forEach(function (ele,index) {
        ele.onclick=function () {
            for(var i=0;i<pager.length;i++){
                act[i].classList.remove("active");
                pager[i].classList.remove("active");
            }
            this.classList.add("active");
            pager[index].classList.add("active");
            n=index;
        }
    })

    let n=0;
    function bannerFn(dir="r") {
        if(dir=="r"){
            n++;//循环次数
        }else if(dir=="l"){
            n--;
        }
        if(n==pager.length){
            n=0;//下标
        }
        if(n == -1){
            n=pager.length-1;
        }
        for (let i = 0; i <pager.length; i++) {
            act[i].classList.remove("active");
            act[n].classList.add("active");
            pager[i].classList.remove("active");
            pager[n].classList.add("active");
        }
    }

    let st = setInterval(bannerFn,1000);

    bannerContainer.onmouseover=function () {
        clearInterval(st);
    }
    bannerContainer.onmouseout=function () {
        st = setInterval(bannerFn, 1000);
    }
// let flag=true;
    nextbtn.onclick=function () {
        // if(flag){
        // flag=false;
        bannerFn();
        // }
    }
    prebtn.onclick=function () {
        bannerFn("l");
    }
}




{
    let totop=document.querySelector(".pae .dcs");
    console.log(totop)
    totop.onclick=function () {
        let st=document.documentElement.scrollTop;
        let speed=st*30/500;
        let t=setInterval(function () {
            st-=speed;
            if(st<=0){
                st=0;
                clearInterval(t);
            }
            document.documentElement.scrollTop=st;
        },30);
    }
}


{
    let topbar=document.querySelector(".cea");
    let leftbar=document.querySelector(".pae");
    let flag=true;
    window.onscroll=function () {
        let st=document.documentElement.scrollTop;
        if(st>530){
            topbar.style.display="block";
        }else{
            topbar.style.display="none";
        }
        if(st>600){
            leftbar.style.display="block";
        }else{
            leftbar.style.display="none";
        }
        if(flag){
            floor.forEach(function (ele,index) {
                if(st>ele.offsetTop-260){
                    for(let i=0;i<btn.length;i++){
                        btn[i].classList.remove("active");
                    }
                    btn[index].classList.add("active");

                }

            })
        }
    }
    let btn=document.querySelectorAll(".pae ul li");
    let floor=document.querySelectorAll(".fucl");
    btn.forEach(function (ele,index) {
        ele.onclick=function () {
            flag=false;
            let ot=floor[index].offsetTop;//目标距离
            let now=document.documentElement.scrollTop;//获取当前距离
            // 页面元素距离浏览器工作区顶端的距离 =DOM元素对象.offsetTop  -  document.documentElement.scrollTop
            let speed=(ot-now)*30/300;//30指电脑的刷新频率/300指时间
            let time=0;//time指一个断点
            let t=setInterval(function () {
                now+=speed;
                time+=30;//刷新了10次
                if(time==300){
                    clearInterval(t);
                    now=ot;
                    flag=true;
                }
                document.documentElement.scrollTop=now;
            },30)
        }
    })
}
//双向轮播
{
    let l=document.querySelectorAll(".you").length;
    let innerObj=document.querySelector(".hui .boxx");
    let box=document.querySelector(".sexe")
    let next=document.querySelector(".conleft");
    let prev=document.querySelector(".conright");
    let st=setInterval(moveFn,2000);
    let n=4;
    let dir="right";
    function moveFn() {
        innerObj.style.transition="all 1s";
        if(dir==="right"){
            n++;
        }else {
            n--;
        }
        innerObj.style.marginLeft = -n * 241 + "px";
    }
    innerObj.addEventListener("transitionend", function () {
        flag=true;
        if (n ===11) {
            n = 4;
            innerObj.style.transition = "none";
            innerObj.style.marginLeft = "-958px";
        }

        if (n == 0) {
            n = 7;
            innerObj.style.transition = "none";
            innerObj.style.marginLeft = "-1687px"

        }
    });

    window.onblur=box.onmousemove = function () {
        clearInterval(st);
    }

    window.onfocus=box.onmouseout = function () {
        st = setInterval(moveFn, 2000);
    }
    let flag=true;//开关
    next.onclick = function () {
        if(flag){
            dir="right"
            //回复方向
            flag=false;
            moveFn();
        }
    }
    prev.onclick = function () {
        if(flag) {
            dir = "left";
            flag = false;
            moveFn();
        }
    }
}

//显示二维码
{
    let sp=document.querySelector(".tou1 ul .sp");
    let cd=document.querySelector(".erma");
    sp.onmouseover=function () {
        cd.style.display="block";
    }
    sp.onmouseout=function () {
        cd.style.display="none";
    }
}
//f5轮播
{
    let bar=document.querySelectorAll(".mi2 .xua");
    let qu=document.querySelectorAll(".dian ul li");
    console.log(bar)
    let bannerContainer=document.querySelector(".mi2 .acd");
    qu.forEach(function (ele,index) {
       ele.onclick=function () {
           for(let i=0;i<bar.length;i++){
               qu[i].classList.remove("active");
               bar[i].classList.remove("active");
           }
           this.classList.add("active");
           bar[index].classList.add("active");
           n=index;
       }
    })
    let n=0;
    function bannerFn(dir="r") {
        if(dir=="r"){
            n++;//循环次数
        }else if(dir=="l"){
            n--;
        }
        if(n==bar.length){
            n=0;//下标
        }
        if(n == -1){
            n=bar.length-1;
        }
        for (let i = 0; i<bar.length; i++) {
            qu[i].classList.remove("active");
            qu[n].classList.add("active")
            bar[i].classList.remove("active");
            bar[n].classList.add("active");
        }
    }
    let st = setInterval(bannerFn,1000);
    bannerContainer.onmouseover=function () {
        clearInterval(st);
    }
    bannerContainer.onmouseout=function () {
        st = setInterval(bannerFn, 1000);
    }

}


{
    let trat=document.querySelector(".track");
    let st=document.querySelector(".track1");
    let su=document.querySelector(".trc");
    let sv=document.querySelector(".trc1");
    sv.onclick=function () {
        st.style.display="none";
        this.style.display="none";
    }
    let sq=setInterval(fn,3000);
    function fn() {
        trat.style.display="none";
        su.style.display="none";
        st.style.display="block";
        sv.style.display="block";
        clearInterval(sq);
    }

    su.onclick=function () {
        fn();
    }

}



{
    let tai=document.querySelector(".yaqu");
    let fn=document.querySelector(".ya");
    flag=0;
    tai.onmouseover=function () {
        flag=1;

    }
    tai.onmouseleave=function () {
        flag=0;

    }
        window.onclick = function (e) {
            target=e.target;
            if(flag==0) {
                if (target.className === "tai") {
                    tai.style.display = "block";
                } else {
                    tai.style.display = "none";
                }
            }
        }
    }

{
    let qu=document.querySelector(".sa input");
    qu.onclick=function () {
        this.placeholder="";
    }
    qu.onfocus=function () {
        if(this.value==="流量")
            this.value="";
}
qu.onblur=function () {
    if(this.value===""){
        this.value="流量";
    }
}
}


{
    let banfn=document.querySelectorAll(".lu > div > .bo");
    let bancd=document.querySelectorAll(".waj");
    let ban=document.querySelector(".banner");
    banfn.forEach(function (ele,index) {
        ele.onmouseover=function () {
            for(let i=0;i<bancd.length;i++){
                bancd[i].style.display="none"
            }
            bancd[index].style.display="block"
        }
        ban.onmouseleave=function () {
            for(let i=0;i<bancd.length;i++){
                bancd[i].style.display="none"
            }
        }

    })
}


{
    let qu=document.querySelectorAll(".sxk .gaox");
    let left=document.querySelector(".gon .gou");//zuo
    let qv=document.querySelectorAll(".pps .pos");
    let right=document.querySelector(".gon .gou1");//you
    let num=0;
    left.onclick=function () {
       num++;
        qu.style.marginLeft = "-330px"
        qv.style.marginLeft="-330px";
        if(num===qu.length){
            num=0;
        }
    }
    right.onclick=function () {
        num--;
        qu.style.marginLeft=(num * 330)+"px";
        qv.style.marginLeft=(num * 330)+"px";
        if(num===-1){
            num=0;
        }
    }

}


{
    let qq=document.querySelectorAll(".kf li .kf1");
    let qw=document.querySelectorAll(".kf li .wz");
    qq.forEach(function (ele,index) {
        ele.onmouseover=function () {
            qw.forEach(function () {
                qw[index].style.display="block";
            })
        }
        ele.onmouseout=function () {
            qw[index].style.display="none";
        }
    })

}