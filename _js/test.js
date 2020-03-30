function tableshowhide(a,b,c){
   len = menu.childElementCount;
   closeall();
   for(i=0; i<len; i++){
    menu.children[i].onclick=function(){
     closeall();
     all.children[this.id].style.display="block";
    }
   }

   function closeall(){
    for(i=0; i<all.childElementCount;i++){
     all.children[i].style.display="none";
    }
   }

   menu.children[c].click();
  }

  tableshowhide("menu", "all", "love");
