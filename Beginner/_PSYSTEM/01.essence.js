
// 


function start(power) {

    if(power === "Essence of Soul"){
        return "Power of Soul Activated"
    } else if(power === "Essence of Energy"){
        return "Power of Energy Activated"
    }else {
        return "silent"
    }

}


function main() {

    const inpt = prompt("Enter your the power of the user: ")
    const str = start(inpt) 

    console.log(str)
}


main()