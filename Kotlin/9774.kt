package com.example.myapplication

import kotlin.system.exitProcess

fun main(){
    val number = readlnOrNull() ?: ""
    if(number==""){
        exitProcess(0)
    }

    printNumbers(number)

}

fun printNumbers(number: String) {
    for (ch in number){
        print(ch+": ")
        for(i in 1..ch.code-48){
            print(ch)
        }

        println("")
    }
}


