const { Script } = require("node:vm");

const amount = 6;


if(amount<10){
    console.log('small number', console.time);
}else{
    console.log('large number');
}



