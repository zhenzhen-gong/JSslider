window.onload = function () {
    function byId(id){
        return typeof(id) === "string"? document.getElementById("id"):id;
      }
      var index = 0,
          timer =null,
          sliders = byId(slider).getElementsByTagName("div")
          len = sliders.length;
          console.log(len);
          
     function imgSlider(){
        //   鼠标移动到图片上方，图片停止切换
        sliders.onmouseover = function(){

        }
        // 鼠标移出图片区域时，图片继续滑动
        sliders.onmouseout = function(){
            timer = setInterval(function(){
                index++;
                if(index>=len){
                    index = 0;
                }
                console.log(index);
                
            }, 3000);
        }
     } 
     imgSlider()  
}


