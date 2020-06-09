window.onload = function () {
    function byId(id){
        return typeof(id) === "string"? document.getElementById("id"):id;
      }
      var index = 0,
          timer =null,
          sliders = byId(slider).getElementsByTagName("div")
          circles = byId(circle).getElementsByTagName("span")
          len = sliders.length;
          
     function imgSlider(){
         var main = byId(slider)
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
               console.log(i);
                //2、调用切换图片的函数
            changeImg()
            }
        }

     } 
     function changeImg(){
         // 当前图片的display属性为block，其他为none；
         for (let i = 0;i<len;i++){
             sliders[i].style.display = "none"
         }
         sliders[index].style.display = "block"
     }
     imgSlider()
}


