package com.example.myapplication

import kotlin.system.exitProcess

fun printString(n:Int,str:String){

    val zeroString = arrayOf("***","*.*","***");
    val oneString = arrayOf(".*.",".*.",".*.");

    for(line in 0..2) {
        for (chr in str) {
            if (chr == '0') {
                print(zeroString[line])
            } else if (chr == '1') {
                print(oneString[line])
            }
        }
        println("")
    }

}

fun main(){
    val n = readln().toInt()
    val str = readln()

    if(n!=str.length){
        exitProcess(0)
    }

    printString(n,str)
}