package com.example.myapplication

fun numberOfTimeOfReading(str: String): Int {
    var result = 1
    val listOfVowelSounds = listOf('a','e','i','o','u')

    var count = 0
    for (chr in str){
        when {
            chr in listOfVowelSounds -> count++
        }
    }

    return Math.pow(2.0,count.toDouble()).toInt()
}

fun main(){
    val str = readlnOrNull() ?: ""

    println(numberOfTimeOfReading(str))
}
