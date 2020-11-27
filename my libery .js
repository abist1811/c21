function collison(p1,p2){
    if(p1.x - p2.x <= p2.width/2 + p1.width/2 &&
      p2.x - p1.x <= p2.width/2 + p1.width/2&&
      p1.y - p2.y <= p2.height/2 + p1.height/2 &&
      p2.y - p1.y <= p2.height/2 + p1.height/2){
  
      return true 
    }else{
      return false
    }
  
  }



 
  
  function bounce(j1,j2){
    if(j1.x - j2.x <= j2.width/2 + j1.width/2 &&
    j2.x - j1.x <= j2.width/2 + j1.width/2 ){

      j1.velocityX=j1.velocityX *(-1)
      j2.velocityX=j2.velocityX*(-1)
   
  }else if(j1.y - j2.y <= j2.height/2 + j1.height/2 &&
    j2.y - j1.y <= j2.height/2 + j1.height/2){
      j1.velocityY=j1.velocityY *(-1)
      j2.velocityY=j2.velocityY*(-1)
    

  }


}