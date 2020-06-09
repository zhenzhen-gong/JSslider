window.onload = function () {
    function byId(id){
        return typeof(id) === "string"? document.getElementById(id):id;
      }
      var index = 0,
          timer =null,
          sliders = byId("slider").getElementsByTagName("div"),
          circles = byId("circle").getElementsByTagName("span"),
          len = sliders.length,
          menu = byId("menu-content")
          menuContent = menu.getElementsByClassName(".content-box")
          pre = byId("pre"),
          next = byId("next")
          console.log(menu);
          
          
     function imgSlider(){
         var main = byId("slider")
        //   鼠标移动到图片上方，图片停止切换
        main.onmouseover = function(){
          if(timer) clearInterval(timer)
        }
        // 鼠标移出图片区域时，图片继续滑动
        main.onmouseout = function(){
            timer = setInterval(function(){
                index++;
                if(index>=len){
                    index = 0;
                }
                // 切换图片
                changeImg()
            }, 3000);
        }
        main.onmouseout();
        //点击圆点切换图片
        // 1、找到所有圆点  并为每个圆点绑定click事件
        for(let i = 0;i<len;i++){
            circles[i].id = i
            circles[i].onclick = function(){
               index = i
                //2、调用切换图片的函数
            changeImg()
            }
        }
        // 给左右箭头绑定点击事件
        next.onclick = function(){
            index++;
            if(index>=len) index=0
            changeImg()
        }
        pre.onclick = function(){
            index--;
            if(index<0) index = len - 1
            changeImg()
        }

     } 
     function changeImg(){
         // 当前图片的display属性为block，其他为none；
         for (let i = 0;i<len;i++){
             sliders[i].style.display = "none"
             circles[i].className = " " //清除所有小圆点上的类，在当前小圆点上增加active类名  实现点击哪个小圆点，那个小圆点的样式改变
         }
         sliders[index].style.display = "block"
         circles[index].className = "active"
     }
     imgSlider()
}


