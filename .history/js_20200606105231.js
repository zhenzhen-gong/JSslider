function byId(id){
  return typeof(id) === string? document.getElementById("id"):id;
}