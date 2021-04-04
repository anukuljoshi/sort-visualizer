export const heapSort = (array) => {
    const n = array.length;
    const animations = [];
    for (let i=Math.floor(n/2)-1;i>-1;i--){
        heapify(array, n, i, animations);
    }
    for(let i=n-1;i>0;i--){
        animations.push(['swap', i, array[0]]);
        animations.push(['swap', 0, array[i]]);
        swap(array, i, 0);
        heapify(array, i, 0, animations);
    }
    return animations;
}

const heapify = (array, n, i, animations) => {
    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;
    if(left<n && array[i]<array[left]){
        animations.push(['compare_start', i, left]);
        animations.push(['compare_end', i, left]);
        largest = left;
    }
    if(right<n && array[largest]<array[right]){
        animations.push(['compare_start', i, right]);
        animations.push(['compare_end', i, right]);
        largest = right;
    }
    if(largest!==i){
        animations.push(['swap', i, array[largest]]);
        animations.push(['swap', largest, array[i]]);
        swap(array, i, largest);
        heapify(array, n, largest, animations);
    }
}

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}