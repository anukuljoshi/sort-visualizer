export const  mergeSort = (array) => {
    const animations = [];
    if(array.length<=1){
        return array;
    }
    const tempArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, tempArray, animations);
    return animations;
}

const mergeSortHelper = (mainArray, start, end, tempArray, animations=[]) => {
    if(start===end){
        return;
    }
    const mid = Math.floor((start+end)/2);
    mergeSortHelper(tempArray, start, mid, mainArray, animations);
    mergeSortHelper(tempArray, mid+1, end, mainArray, animations);
    merge(mainArray, start, mid, end, tempArray, animations);
}

const merge = (mainArray, start, mid, end, tempArray, animations) => {
    let i = start;
    let j = mid+1;
    let k = start;

    while(i<=mid && j<=end){
        animations.push(['compare_start', i, j]);
        animations.push(['compare_end', i, j]);
        if(tempArray[i]<=tempArray[j]){
            animations.push(['swap', k, tempArray[i]]);
            // animations.push(['swap', i, tempArray[k]]);
            mainArray[k] = tempArray[i]
            i += 1;
            k += 1;
        }else{
            animations.push(['swap', k, tempArray[j]]);
            // animations.push(['swap', j, tempArray[k]]);
            mainArray[k] = tempArray[j];
            j += 1;
            k += 1;
        }
    }
    while(i<=mid){
        animations.push(['compare_start', i, i]);
        animations.push(['compare_end', i, i]);
        animations.push(['swap', k, tempArray[i]]);
        // animations.push(['swap', i, tempArray[k]]);
        mainArray[k] = tempArray[i];
        i += 1;
        k += 1;
    }
    while(j<=end){
        animations.push(['compare_start', j, j]);
        animations.push(['compare_end', j, j]);
        animations.push(['swap', k, tempArray[j]]);
        // animations.push(['swap', j, tempArray[k]]);
        mainArray[k] = tempArray[j];
        j += 1;
        k += 1;
    }
}