package com.example.myapplication

import kotlin.system.exitProcess

fun calcSize(width1: Int,height1: Int,width2:Int,height2:Int):Boolean{
    return width1>=width2 && height1>=height2
}

fun main(){
    val line1 = readlnOrNull() ?: ""
    val firstPersonSize = line1.split(" ").filter { it.isNotEmpty() }.map { it.toInt() }

    if(firstPersonSize.size!=2){
        exitProcess(0)
    }

    val line2 = readlnOrNull() ?: ""
    val secondPersonSize = line2.split(" ").filter { it.isNotEmpty() }.map { it.toInt() }

    if(secondPersonSize.size!=2){
        exitProcess(0)
    }

    if(calcSize(firstPersonSize[0], firstPersonSize[1], secondPersonSize[0], secondPersonSize[1])){
        println("yes")
    }
    else{
        println("no")
    }
}