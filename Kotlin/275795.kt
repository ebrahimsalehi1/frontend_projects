package com.example.myapplication

import kotlin.system.exitProcess

fun calculateSome(n:Int): String{
     var result: String = "";
     var sum:Int  =0
    for (i in 1..n){
        result += i.toString()
        if(i!=n) {
            result += " + "
        }
        sum += i
    }

     result += " = "
     result += sum.toString()

     return result
}

fun main(){
    val n = readln();
    if(n.toInt() !in 1..100){
        exitProcess(0)
    }

    println(calculateSome(n.toInt()))
}