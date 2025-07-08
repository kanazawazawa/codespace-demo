// わざとESLintのルールに違反したコードを書いてテストする

function hello(name) {
    // インデントが修正されました
    console.log('Hello, ' + name);  // クォートとセミコロンも修正されました
}

// 未使用変数は削除しました

hello('World');  // シングルクォート（正しい）
