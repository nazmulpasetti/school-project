let count = 0;

function add() {
    let input = document.getElementById("input").value;
    if (input.length < 1 || input.includes(" ")) {
        alert("请输入至少一个字符");
        return false;
    }
    for (let i = 0; i <= input.length; i++) {
        count++;
    }
    document.getElementById("output").innerHTML += `共有${count}个单词。`;
}

function del() {
    let output = document.getElementById("output");
    let allWords = output.innerHTML.split(' ');
    count = 0;
    for (let i = 0; i < allWords.length; i++) {
        if (allWords[i] !== " ") {
            count++;
        }
    }
    document.getElementById("output").innerHTML += `共有${count}个单词。`;
}
