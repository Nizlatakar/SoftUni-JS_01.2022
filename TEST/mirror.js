function mirrorWords(input){
let pattern = /(@|#)(?<word>[A-Za-z]{2,})\1\1(?<mirror>[A-Za-z]{2,})\1/g
let match = pattern.exec(input)
let library=[]
// let mirrorLibrary=[]
let counter=0

while (match !== null) {
    library.push(match[2]);
    library.push(match[3]);
    match = pattern.exec(input);
}
for (let i = 0; i < library.length; i++) {
      if (i% 2 ===1) {
        library[i]=library[i].split('').reverse().join('');
       
    } 
    if(library[i]===null){
        console.log(`No word pairs found!`);
    }else if(library[i]!==(library[i+1])){
        console.log(`No mirror words!`);
    }
    if (library[i]===(library[i+1])) {
        console.log(library[i]);
        counter++
    }

    

    console.log(`${counter} word pairs found!`);
    
}
console.log(library);

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])