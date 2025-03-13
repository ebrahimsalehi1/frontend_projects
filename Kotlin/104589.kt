package com.example.myapplication

fun main(){
    val line1 = readlnOrNull() ?: "0"
    val n = line1.toInt()

    calcRevenue(n)
}

fun calcRevenue(n: Int) {
    if(n%2==0){
        println(n/2)
        return
    }

    for(i in n/2 downTo 1){
        val times = i*(n/i).toDouble()
        if(times==n.toDouble()){
            println(i)
            break
        }

    }


}
