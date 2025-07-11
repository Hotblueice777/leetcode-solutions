/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let m=0;

    for(let i=0; i<flowerbed.length; i++){
        if(
         flowerbed[i]===0&&
         (i===0||flowerbed[i-1]===0)&&
         (i===flowerbed.length-1||flowerbed[i+1]===0)       
        ){
            flowerbed[i]=1;
            m++;
            if(m>=n) return true;           
            }
    }

        return m >= n;
    
};