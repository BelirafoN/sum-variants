/**
 * Developer: BelirafoN
 * Date: 08.04.2016
 * Time: 14:19
 */

"use strict";

module.exports = function getSumVariants(sourceArray, targetSum, beforeUnique) {

    function findSumVariants(src, sum){
        let sumIndex = src.indexOf(sum),
            result = [];

        if(~sumIndex){
            result.push([sum]);
            src.splice(sumIndex, 1);
        }

        for(let i = 0; i <= src.length - 1; i++){
            let sliceSrc = src.slice(i + 1),
                sumVariant = sliceSrc.length ? findSumVariants(sliceSrc, sum - src[i]) : [];
            if(Array.isArray(sumVariant) && sumVariant.length){
                result = result.concat(sumVariant.map(curr => [+src[i]].concat(curr)));
            }
        }
        return result;
    }

    let zeroCount = 0,
        optimizedSource = sourceArray.reduce((arr, curr) => {
            if(isNaN(parseInt(curr, 10))){ return arr; }
            if(+curr === 0){
                zeroCount++;
                return arr;
            }
            arr.push(+curr);
            return arr;
        }, []),
        result = findSumVariants(beforeUnique ? Array.from(new Set(optimizedSource)) : optimizedSource, targetSum);

    if(!beforeUnique){
        let tmpSet = new Set();
        result = result.filter(curr => {
            let currKey = curr.sort().toString();
            if(tmpSet.has(currKey)){ return false; }
            tmpSet.add(currKey);
            return true;
        });
    }

    if(zeroCount){
        result = result.reduce((arr, curr) => {
            arr.push(curr);
            if(beforeUnique){
                arr.push(curr.concat([0]));
            }else{
                for(let i = 1; i <= zeroCount; i++){
                    arr.push(curr.concat(new Array(i).fill(0)));
                }
            }
            return arr;
        }, []);
    }
    return result;
};