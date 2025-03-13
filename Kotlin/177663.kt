package com.example.myapplication

fun calcDivisibleNumbers(n:Int,a:Int,b:Int,c:Int,d:Int):Int{
    var result = 0
    for (i in 1 .. n){
        when{
            i%a==0 -> result++
            i%b==0 -> result++
            i%c==0 -> result++
            i%d==0 -> result++
        }
    }
    return result
}

fun main(){
    val str = readln()
    val inputs = str.split(" ")

    println(calcDivisibleNumbers(inputs[0].toInt(),inputs[1].toInt(),inputs[2].toInt(),inputs[3].toInt(),inputs[4].toInt()))
}
