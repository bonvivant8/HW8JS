const myArr=[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] ;
console.log(myArr.length)



//1

let result=0;
const quantity=[];
for (let i =0;i<myArr.length;i++)
{
    if (myArr[i]>0)
    {
        quantity.push(myArr[i])
        result+=myArr[i];
    }
}
console.log(result+','+quantity.length);



//2

let minNumber=(Math.min(...myArr))
let minOrdinalNumb=myArr.indexOf(minNumber);
console.log('The minimum element is:'+minNumber+',the ordinal number of it is:'+ minOrdinalNumb);




//3

let maxNumber=(Math.max(...myArr))
let maxOrdinalNumb=myArr.indexOf(maxNumber);
console.log('The maximum element is:'+maxNumber+',the ordinal number of it is:'+maxOrdinalNumb);



//4

const quantityNegative=[]
for (let i =0;i<myArr.length;i++)
{
    if (myArr[i]<0)
    {
        quantityNegative.push(myArr[i])
    }
}
console.log(quantityNegative.length);



//5
//6

const quantity5=[];
let unpaired=[];
let unpairedQuantity=[];
let pairedQuantity=[];
for (let i =0;i<myArr.length;i++)
{
    if (myArr[i]>0)
    {
        quantity5.push(myArr[i])

    }
}
 for (unpaired of quantity5)
 {
     if (unpaired%2!==0)
     {
         unpairedQuantity.push(unpaired);

     }
     if (unpaired%2===0)
     {
         pairedQuantity.push(unpaired)


     }
 }

 console.log('The quantity of unpaired positive elements is :'+unpairedQuantity.length)
 console.log('The quantity of paired positive elements is :'+pairedQuantity.length)



//7

let result7=0
for (let z =0;z<pairedQuantity.length;z++)
{

    result7+=pairedQuantity[z];

}
console.log('The sum of all paired elements is '+result7);


//8

let result8=0
console.log(unpairedQuantity)
for (let p =0;p<unpairedQuantity.length;p++)
{

        result8+=unpairedQuantity[p];

}
console.log('The sum of all unpaired elements is '+result8);



//9

console.log(quantity);

let result9=1;
for (let o =0;o<quantity.length;o++)
{

    result9*=quantity[o];

}
console.log('Your answer is  '+result9);



//10

const newArr=myArr.splice(0,-100);
newArr.push(maxNumber);
console.log(newArr)




