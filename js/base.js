

function gettime(createtime){
  var now=Date.parse(new Date())/1000;
  createtime = Date.parse(createtime)/1000;
  var limit=now-createtime;
  var content="";
  if(limit<60){
    content="刚刚";
  }else if(limit>=60 && limit<3600){
    content=Math.floor(limit/60)+"分钟前";
  }else if(limit>=3600 && limit<86400){
    content=Math.floor(limit/3600)+"小时前";
  }else if(limit>=86400 && limit<2592000){
    content=Math.floor(limit/86400)+"天前";
  }else if(limit>=2592000 && limit<31104000){
    content=Math.floor(limit/2592000)+"个月前";
  }else{
    content="很久前";
  }
  return content;
}

function dd(){
    function checkTime(i){
    if (i<10) 
        {i="0" + i;}
        return i;
    }
    var d= new Date();
    return(d.getFullYear()+"/"+(d.getMonth()+1) + "/"+d.getDate()+" "+checkTime(d.getHours())+":"+checkTime(d.getMinutes())+":"+checkTime(d.getSeconds()));
}