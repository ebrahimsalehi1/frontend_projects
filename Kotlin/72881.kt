package com.example.myapplication

import kotlin.system.exitProcess

fun main(){

    val input = readLine()!!.split(" ")
    val n = input[0].toInt()
    val k = input[1].toDouble()
    val s = input[2].toDouble()

    val totalNeeded = n * k

    if (s >= totalNeeded) {
        print("Kafie!")
    } else {
        print("Na! yeki bayad bere sabzi bekhare")
    }

}


