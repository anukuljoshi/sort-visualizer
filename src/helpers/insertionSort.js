export const insertionSort = (array) => {
    const animations = [];
    const n = array.length;
    console.log(array)
    for(let i=1;i<n;i++){
        let j = i-1;
        let key = array[i];
        while(j>=0 && key<array[j]){
            animations.push(['compare_start', j+1, j]);
            animations.push(['compare_end', j+1, j]);
            animations.push(['swap', j, array[j+1]]);
            animations.push(['swap', j+1, array[j]]);
            array[j+1] = array[j];
            j--;
        }
        animations.push(['swap', j+1, key]);
        // animations.push(['swap', i, array[j+1]]);
        array[j+1] = key;
    }
    return animations;
}
