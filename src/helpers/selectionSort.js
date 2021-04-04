export const selectionSort = (array) => {
    const animations = [];
    const n = array.length;
    for(let i=0;i<n-1;i++){
        let index = i;
        for(let j=i+1;j<n;j++){
            animations.push(['compare_start', i, j]);
            animations.push(['compare_end', i, j]);
            if(array[j]<array[index]){
                index = j;
            }
        }
        animations.push(['swap', index, array[i]]);
        animations.push(['swap', i, array[index]]);
        swap(array, index, i);
    }
    return animations;
}

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}