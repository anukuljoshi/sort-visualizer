export const quickSort = (array) => {
    const n = array.length;
    const animations = [];
    quickSortHelper(array, 0, n-1, animations);
    return animations;
}

const quickSortHelper = (array, low, high, animations) => {
    if(low<high){
        let p = partition(array, low, high, animations);
        quickSortHelper(array, low, p-1, animations);
        quickSortHelper(array, p+1, high, animations);
    }
}

const partition = (array, low, high, animations) => {
    let pivot = array[high];
    let k = low;
    for(let i=low;i<high;i++){
        animations.push(['compare_start', i, high]);
        animations.push(['compare_end', i, high]);
        if(array[i]<=pivot){
            // animations.push(['compare_start', i, k]);
            animations.push(['swap', i, array[k]]);
            animations.push(['swap', k, array[i]]);
            // animations.push(['compare_end', i, k]);
            swap(array, i, k);
            k++;
        }
    }
    // animations.push(['compare_start', k, high]);
    animations.push(['swap', high, array[k]]);
    animations.push(['swap', k, array[high]]);
    // animations.push(['compare_end', k, high]);
    swap(array, k, high);
    return k;
}

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}