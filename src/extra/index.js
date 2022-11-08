

export const paginationItem = (goods) => {
    const arr = []

    const count = Math.ceil(goods.length / 8) 
    
    for (let i = 1; i <= count; i++) {
      arr.push(i)
    }

    return arr
}