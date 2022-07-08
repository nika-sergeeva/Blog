
export function formatEmail(email){
    let item = []
    let spell = email.split('')
    let signIndex
    
    for(let i=0; i< spell.length; i++){
    const currentLetter = spell[i]

        if(currentLetter === "@"){
            signIndex = i 
        for(let k=0; k < signIndex; k++){
            const curr = spell[k]
            item.push(curr)
        }
    }
    }
    return item.join('')
}

 export function textTransformation(i){
return  i.charAt(0).toUpperCase() + i.slice(1)
 }