package com.example.myapplication

fun calcPopulationOfRabbits(bornRabbits:Int,deadRabbits:Int,year:Int):Int{
    var rabbitNumbersAtTheEnd = bornRabbits*2 - deadRabbits
    for (i in 2 .. year){
        rabbitNumbersAtTheEnd = rabbitNumbersAtTheEnd * 2 - deadRabbits
    }
    return rabbitNumbersAtTheEnd
}

fun main(){
    val str = readlnOrNull() ?: ""
    val inputs = str.split(" ").filter { it.isNotEmpty() }.map { it.toInt() }
    val bornRabbits: Int = inputs[0]
    val deadRabbits: Int = inputs[1]

    val year = readln().toInt()

    println(calcPopulationOfRabbits(bornRabbits,deadRabbits,year))
}
