function anagram(text1,text2) {
    var arr={};

    // if (text1 === text2) {
    //    return  true;
    // }
    if (text1.length !== text2.length) {
        return false;
    }

    for (let i = 0; i < text1.length; i++) {
        // let char= text1.charCodeAt(i)-97;
        // console.log(char);
        arr[text1[i]]= (arr[text1[i]] || 0)  + 1; 
        // console.log(arr[char]);
    }
    console.log(arr);
    for (let j = 0; j < text2.length; j++) {
        // let char= text2.charCodeAt(j)-97;
        if (!arr[text2[j]]) {
            return false;
        } 
            arr[text2[j]]--;
    }
    console.log(arr);
    return true;
}

console.log(anagram('akku','kuka')); //true
console.log(anagram('aku','ukka')); //false
