// firstDuplicate
const solution=(a=[]) => {
    let checked=new Set()

    for(let i=0;i<a.length;i++) {
        if(checked.has(a[i])) {
            return a[i]
        }
        checked.add(a[i])
    }
    return -1
}

// firstNonRepeatingCharacter
const solution1=(s) => {
    const unique=new Set()
    const duplicate=new Set()

    for(let i=s.length-1;i>=0;i--) {
        if(!duplicate.has(s[i])) {
            duplicate.add(s[i])
            unique.add(s[i])
        } else {
            unique.delete(s[i])
        }
    }

    return unique.size>0? [...unique][unique.size-1]:'_'
}

// Rotate Image (In-place)
const solution2=(a) => {

    for(let i=0;i<a.length;i++)
        for(let j=0;j<i;j++) {
            let temp=a[i][j]
            a[i][j]=a[j][i]
            a[j][i]=temp
        }
    for(let i=0;i<a.length;i++)
        a[i].reverse()
    return a
}

// Sudoku2
function solution(grid) {
    return (checkRows(grid)
        &&checkRows(rotateGrid(grid))
        &&checkRows(convertSubGridstoRows(grid)))
}

const checkRows=(rows) => {
    for(let i=0;i<rows.length;i++) {
        for(let n=1;n<=9;n++) {
            // check rows
            if(rows[i].join('').indexOf(n)!==rows[i].join('').lastIndexOf(n)) {
                return false
            }
        }
    }
    return true
}

const rotateGrid=(grid) => {
    for(let i=0;i<grid.length;i++)
        for(let j=0;j<i;j++) {
            let temp=grid[i][j]
            grid[i][j]=grid[j][i]
            grid[j][i]=temp
        }
    for(let i=0;i<grid.length;i++)
        grid[i].reverse()
    return grid

}

const convertSubGridstoRows=(grid) => {
    let subGrids=[]
    let currSub=[]
    let subIndex=0
    while(subIndex<9) {
        for(let j=0;j<9;j++) {
            currSub.push(...grid[j].slice(subIndex,subIndex+3))
            if((j+1)%3===0) {
                subGrids.push(currSub)
                currSub=[]
            }
        }
        subIndex+=3
    }
    return subGrids
}
// Sudoku2 end
