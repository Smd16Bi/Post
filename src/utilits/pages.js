export const getCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPages = (total) => {
    let arr = []
    for(let i = 1; i <= total; i++ ) {
        arr.push(i);
    }
    return arr

}