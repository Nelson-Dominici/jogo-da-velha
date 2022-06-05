window.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square")

    squares.forEach(function callback(square) {
        square.addEventListener("click", dial_function)
    })
})

let empate = false
let pvp = null
let boot_pos = null
let boot_vez = true

let random_numbers = []

let contain_select = document.querySelector(".contain_select")

let before_page = document.querySelector("#before_page")

let btn_to_pvp = document.querySelector(".div_player_vp")
let btn_to_pvb = document.querySelector(".div_player_vb")

let btn_close = document.querySelector("#close_btn")
let reset_btn = document.querySelector("#reset_btn")

let x_number = 0
let o_number = 0

let x_inner = document.querySelector("#x_pontos")
let o_inner = document.querySelector("#o_pontos")

let game_contain = document.querySelector(".game_contain")

function dial_function(e) {
    let pos = e.target.id

    if (pos_array[pos] == "" && winner == false) {

        if (pvp) {
            if (vez == 0) {
                vez = 1
                pos_array[pos] = players[vez]
            }
            else {
                vez = 0
                pos_array[pos] = players[vez]
            }
        }

        else {
            vez = 0
            pos_array[pos] = players[vez]

            if (boot_vez) {
                random_pos()

                let length_randow = Math.floor(Math.random() * random_numbers.length)
                boot_pos = random_numbers[length_randow];
                pos_array[boot_pos] = "x"
            }
        }

        check_func()
        select_inner(e.target.id, boot_pos)
    }
}

function random_pos() {
    random_numbers = []
    boot_pos = null

    for (let random in pos_array) {
        if (pos_array[random] == "") {
            random_numbers.push(random)
        }
    }
}

function back_to_selection() {
    close_window()
    reset_scoreboard()

    before_page.style.display = "none"
    game_contain.style.display = "none"
    contain_select.style.display = "flex"
}

function close_window() {
    let winner_inner = document.querySelector("#quem_ganhou")
    pos_array = ["", "", "", "", "", "", "", "", ""]
    winner_inner.innerHTML = ""
    boot_vez = true
    winner = false
    empate = false
    vez = 1

    let squares = document.querySelectorAll(".square")
    let window = document.querySelector(".reset_contain")

    window.style.display = "none"
    squares.forEach(function callback(square) {
        square.innerHTML = ""
        square.style.cursor = "pointer"
    })
}

function reset_scoreboard() {
    boot_vez = true
    x_number = 0
    o_number = 0

    x_inner.innerHTML = x_number
    o_inner.innerHTML = o_number

    close_window()
}

function open_game_pvp() {
    pvp = true
    before_page.style.display = "block"
    game_contain.style.display = "flex"
    contain_select.style.display = "none"

    document.querySelector("#woman_scoreboard").src = "images/woman.png"
}

function open_game_pvb() {
    pvp = false
    before_page.style.display = "block"
    game_contain.style.display = "flex"
    contain_select.style.display = "none"

    document.querySelector("#woman_scoreboard").src = "images/robot.png"
}

function open_window() {
    let window = document.querySelector(".reset_contain")
    let winner_inner = document.querySelector("#quem_ganhou")
    let squares = document.querySelectorAll(".square")

    window.style.display = "flex"

    if(empate){
        let empate = document.createElement("img");

        empate.src = "images/handshake.png";
        empate.style.width = "55px"
        empate.style.height = "55px"

        winner_inner.appendChild(empate)
    }

    else if (pvp) {
        if (vez == 0) {
            let man = document.createElement("img");

            man.src = "images/man.png";
            man.style.width = "55px"
            man.style.height = "55px"

            winner_inner.appendChild(man)
        }
        else {
            let woman = document.createElement("img");

            woman.src = "images/woman.png";
            woman.style.width = "55px"
            woman.style.height = "55px"

            winner_inner.appendChild(woman)
        }
    }

    else {

        if (boot_vez) {
            let boot = document.createElement("img");

            boot.src = "images/robot.png";
            boot.style.width = "55px"
            boot.style.height = "55px"

            winner_inner.appendChild(boot)
        }

        else {
            let man = document.createElement("img");

            man.src = "images/man.png";
            man.style.width = "55px"
            man.style.height = "55px"

            winner_inner.appendChild(man)
        }
    }


    squares.forEach(function callback(square) {
        square.style.cursor = "default"
    })
}

btn_to_pvb.addEventListener("click", open_game_pvb)
btn_to_pvp.addEventListener("click", open_game_pvp)
btn_close.addEventListener("click", close_window)
reset_btn.addEventListener("click", reset_scoreboard)
before_page.addEventListener("click", back_to_selection)