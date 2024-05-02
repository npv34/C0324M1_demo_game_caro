
let arr = [
    ["*", "*", "*", "*"],
    ["*", "*", "*", "*"],
    ["*", "*", "*", "*"],
    ["*", "*", "*", "*"],
    ["*", "*", "*", "*"]
];


let player = 1;
/*
- arr2la mang 2 chieu -> so luong phan tu trong mang con la giong nhau ve so luong

 */
function drawGame() {
    let txt = ""
    for (let i = 0; i < arr.length; i++) {
        txt += "<tr>"
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] !== "*") {
                txt += "<td>" + arr[i][j] + "</td>"
            } else {
                txt += "<td></td>";
            }

        }
        txt += "</tr>"
    }
    document.getElementById("main").innerHTML = txt;
}


drawGame();

function chosenGame() {
    let x = +prompt("Nhap x: ")
    let y = +prompt("Nhap y ")
    if (x >= arr.length || y >= arr[0].length) {
        alert("X, Y khong thoa man")
    } else {
        if (arr[x][y] === "*") {
            if (player === 1) {
                arr[x][y] = "0";
                player = 2;
            } else {
                arr[x][y] = "X";
                player = 1;
            }
            drawGame();
        } else {
            alert("Chon vi tri khac")
        }

    }

}