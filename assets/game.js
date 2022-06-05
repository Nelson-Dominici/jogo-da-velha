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

    if (pvp) {

        if (vez == 0) {
            let man = document.createElement("img");

            man.src = "images/man.png";
            man.style.width = "70px"
            man.style.height = "70px"

            squares[pos].appendChild(man)
        }

        else {
            let woman = document.createElement("img");

            woman.src = "images/woman.png";
            woman.style.width = "70px"
            woman.style.height = "70px"

            squares[pos].appendChild(woman)
        }
    }

    else {
        let man = document.createElement("img");
        let boot = document.createElement("img");

        man.src = "images/man.png";
        man.style.width = "70px"
        man.style.height = "70px"

        boot.src = "images/robot.png";
        boot.style.width = "70px"
        boot.style.height = "70px"

        squares[pos].appendChild(man)

        if (boot_vez) {

            setTimeout(() => {
                squares[boot_pos].appendChild(boot)
            }, 50);
        }


    }
}

function check_func() {

    for (let win_pos of pos_winner) {

        let pos_1 = win_pos[0]
        let pos_2 = win_pos[1]
        let pos_3 = win_pos[2]

        if (pos_array[pos_1] == pos_array[pos_2] &&
            pos_array[pos_1] == pos_array[pos_3] &&
            pos_array[pos_1] != "") {

            if (pos_array[pos_1] == "o") {
                x_number++
                x_inner.innerHTML = x_number
                boot_vez = false
            }

            else if (pos_array[pos_1] == "x") {
                o_number++
                o_inner.innerHTML = o_number
                boot_vez = true
            }

            winner = true
            open_window()
        }

    }

    if (!winner) {
        if ((pos_array.find(elem => elem == "") == undefined)) {
            empate = true
            open_window()
        }
    }
}