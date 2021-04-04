export const generateNumbers = (n, limit) => {
    let nums = [];
    for(let i=0;i<=n;i++){
        nums.push(Math.floor(Math.random()*limit));
    }
    return nums;
}