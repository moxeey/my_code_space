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
