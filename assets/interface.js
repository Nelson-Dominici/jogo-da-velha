window.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square")

    squares.forEach(function callback(square, index) {
        square.addEventListener("click", dial_function)
    })
})

let x_inner = document.querySelector("#x_pontos")
let o_inner = document.querySelector("#o_pontos")

let x_number = 0
let o_number = 0

function dial_function(e) {
    let pos = e.target.id

    if (pos_array[pos] == "" && winner == false) {

        pos_array[pos] = players[vez]

        if (vez == 0) {
            vez = 1
        }
        else {
            vez = 0
        }

        select_inner(e.target.id)
    }
}