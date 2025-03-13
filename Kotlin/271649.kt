package com.example.myapplication

import kotlin.system.exitProcess

fun calcSumOfOddNumbersThatLess(n:Int):Int{
    var result = 0
    for (i in n-1 downTo 1){
        if(i%2==1){
            result += i
        }
    }
    return result
}

fun main(){
    val n = readln().toInt()
    if(n !in 2..100){
        exitProcess(0)
    }

    println(calcSumOfOddNumbersThatLess(n))

}