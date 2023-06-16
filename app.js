let item1 = document.getElementById ('item1');
let quantity1 = document.getElementById ('quantity1');
let price1 = document.getElementById ('price1');

item1.onkeyup = function ()  {
    if(item1.value == 'ك') {
        price1.innerHTML = 600;
        
    }  else {
        price1.innerHTML = 50
    }    
}

quantity1.onkeyup = function ()  {
    price1.innerHTML = quantity1.value*price1.innerHTML;

    if(price1.innerHTML == 0  && item1.value == 'ع') {
        price1.innerHTML = 50;
    }  if(price1.innerHTML == 0 && item1.value == 'ك') {
        price1.innerHTML = 600
    }
}



















let item2 = document.getElementById ('item2');
let quantity2 = document.getElementById ('quantity2');
let price2 = document.getElementById ('price2');

item2.onkeyup = function ()  {
    if(item2.value == 'ك') {
        price2.innerHTML = 600;
        
    }  else {
        price2.innerHTML = 50
    }    
}

quantity2.onkeyup = function ()  {
    price2.innerHTML = quantity2.value*price2.innerHTML;

    if(price2.innerHTML == 0  && item2.value == 'ع') {
        price2.innerHTML = 50;
    }  if(price2.innerHTML == 0 && item2.value == 'ك') {
        price2.innerHTML = 600
    }
}


