window.onload = function () {
    function byId(id){
        return typeof(id) === string? document.getElementById("id"):id;
      }
      console.log(byId(main));
      
}


