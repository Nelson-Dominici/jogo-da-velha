window.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square")

    squares.forEach(function callback(square) {
        square.addEventListener("click", dial_function)
    })
})

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

        pos_array[pos] = players[vez]

        if (vez == 0) {
            vez = 1
        }
        else if (vez == 1) {
            vez = 0
        }

        select_inner(e.target.id)
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
    winner = false
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
    x_number = 0
    o_number = 0

    x_inner.innerHTML = x_number
    o_inner.innerHTML = o_number

    close_window()
}

function open_game() {
    before_page.style.display = "block"
    game_contain.style.display = "flex"
    contain_select.style.display = "none"
}

function open_window() {
    let window = document.querySelector(".reset_contain")
    let winner_inner = document.querySelector("#quem_ganhou")
    let squares = document.querySelectorAll(".square")

    window.style.display = "flex"

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

    squares.forEach(function callback(square) {
        square.style.cursor = "default"
    })
}

btn_to_pvp.addEventListener("click", open_game)
btn_close.addEventListener("click", close_window)
reset_btn.addEventListener("click", reset_scoreboard)
before_page.addEventListener("click", back_to_selection)
