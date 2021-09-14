// スプレッド構文
let hoge = (x: number, y: number, z:  number) => { console.log(x, y, z); }
// 変数の後ろに型を書かないとエラーになる
let huga: [number, number, number] = [0, 1, 2];
hoge(...huga);
