// 配列の型定義
let someArray: Array<number> = [1, 3, 5]

// item => インデックス
for (let item in someArray) {
    console.log(item);
}

// item => 要素
for (let item of someArray) {
    console.log(item);
}

someArray.push(9)
console.log(someArray)

// hashのkey: valueの方をチェックする
let hash: { [key: string]: string; } = {}; 

hash['a'] = 'a'
hash[1] = 'a'
// hash['a'] = 1
console.log(hash)


// Type Aliases
type Sample = {
    hoge: string;
    x: number;
}

let sample : Sample = {
    hoge: "hoge",
    x: 5
}

const include = (array: (string|number)[], search: string|number) : boolean => {
    array = array.filter(value => value == search)

    return array.length === 0
}

console.log(include([1,2,3], 2));
console.log(include([1,2,3], 4));
