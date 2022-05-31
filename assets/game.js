let pos_array = ["", "", "", "", "", "", "", "", ""]

let pos_winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let vez = 1
let winner = false
let players = ["o", "x"]

function select_inner(pos) {
    let squares = document.querySelectorAll(".square")
    squares[pos].innerHTML = pos_array[pos]

    check_func()
}



function check_func() {
    for (let win_pos of pos_winner) {

        let pos_1 = win_pos[0]
        let pos_2 = win_pos[1]
        let pos_3 = win_pos[2]

        if (pos_array[pos_1] == pos_array[pos_2] &&
            pos_array[pos_1] == pos_array[pos_3] &&
            pos_array[pos_1] != "") {

            winner = true

            if (vez == 0) {
                x_number++
                x_inner.innerHTML = x_number
            }
            else {
                o_number++
                o_inner.innerHTML = o_number
            }
        }

    }
}