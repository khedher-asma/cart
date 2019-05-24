//first element
function heartColor(i){
  let heart=document.getElementById("heart"+i)
  if(heart.style.color=="red"){
    heart.style.color="black"
  }
  else{
    heart.style.color="red"
  }
}

function inc(i){
let pqtn=document.getElementById("product-qtn"+i)
let pprice=document.getElementById("price"+i)
let totalPrice=document.getElementById("total")
pqtn.innerHTML=+pqtn.innerHTML+1
  if(i==1){
    pprice.innerHTML=+pprice.innerHTML+549
    totalPrice.innerHTML=+totalPrice.innerHTML+549
  }else if(i==2){
    pprice.innerHTML=+pprice.innerHTML+290
    totalPrice.innerHTML=+totalPrice.innerHTML+290
  }else{
    pprice.innerHTML=+pprice.innerHTML+349
    totalPrice.innerHTML=+totalPrice.innerHTML+349
  }
}
function dec(i){
  let pqtn=document.getElementById("product-qtn"+i)
  let pprice=document.getElementById("price"+i)
  let totalPrice=document.getElementById("total")
  if(+pqtn.innerHTML>0){
    pqtn.innerHTML=+pqtn.innerHTML-1
    if(i==1){
      pprice.innerHTML=+pprice.innerHTML-549
      totalPrice.innerHTML=+totalPrice.innerHTML-549
    } else if(i==2){
      pprice.innerHTML=+pprice.innerHTML-290
      totalPrice.innerHTML=+totalPrice.innerHTML-290
    }else{
      pprice.innerHTML=+pprice.innerHTML-349
      totalPrice.innerHTML=+totalPrice.innerHTML-349
    }
  }
}
function deleteElt(i){
  let elt=document.getElementById("trash"+i)
  let pprice=document.getElementById("price"+i)
  let totalPrice=document.getElementById("total")
  totalPrice.innerHTML=+totalPrice.innerHTML-(+pprice.innerHTML)
  elt.classList.remove("d-flex");
  elt.classList.add("d-none");
}