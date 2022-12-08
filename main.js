// №1
var arr = []
for (var i = 0; i < 11; i++){
    arr.push(i)
}
console.log(arr)

// №2
for (var num = 20; num >= 0; num--){
    console.log(num)
}

// №3
var coloring = prompt("Введите цвет: красный ,желтый ,зеленый").toLowerCase().trim()

if (coloring ==="красный"){
    console.log("СТОЙ!")
} else if (coloring === "желтый"){
    console.log("ПОДОЖДИТЕ")
} else if (coloring ==="зеленый"){
    console.log("МОЖНО ИДТИ")
}else {
    console.log("Напишите: красный, желтый, зеленый")
}

