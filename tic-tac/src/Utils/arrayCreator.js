const arrayCreator = (size) =>{
    let arr = [];

    for(let i = 1; i <= size; i++){
        let w = [];
        for(let j = 1; j <= size; j++){
            let y = [i, j];
            w.push(y);
        }
        arr.push(w);
    }

    return arr;
};
export default arrayCreator;

