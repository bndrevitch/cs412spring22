const unnamed = (str,func) => func(str)

const unnamed_2 = unnamed('supercalifragilisticexpialidocious', str => str.replace(/c/g, "*c").split('*')) 

const unnamed_final = str => {
    return {
        originalString: str,
        modifiedString: str.replace(/a/g, 'A'),
        numberReplaced: str.match(/a/g).length,
        length: str.length
    };
}

console.log(`${unnamed_2}`)
console.log(`unnamed_final: ${JSON.stringify(unnamed_final('supercalifragilisticexpialidocious'), null, 2)}`)