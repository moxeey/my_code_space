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