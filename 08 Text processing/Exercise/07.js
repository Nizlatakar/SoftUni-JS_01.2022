function solve(text) {
    let First=text
    .substring(0,text.length/2)
    .split('')
    .reverse()
    .join('');
    let Second=text
    .substring(text.length/2)
    .split('')
    .reverse()
    .join('');
    console.log(First);
    console.log(Second);
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')