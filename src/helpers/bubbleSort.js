export const bubbleSort = (array) => {
    const n = array.length;
    const animations = [];
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            animations.push(['compare_start', j, j+1]);
            animations.push(['compare_end', j, j+1]);
            if(array[j]>array[j+1]){
                animations.push(['swap', j, array[j+1]])
                animations.push(['swap', j+1, array[j]])
                swap(array, j, j+1);
            }
        }
    }
    return animations;
}

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}