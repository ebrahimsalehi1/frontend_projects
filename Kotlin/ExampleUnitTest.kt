package com.example.myapplication

import org.junit.Test

import org.junit.Assert.*

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * See [testing documentation](http://d.android.com/tools/testing).
 */
class ExampleUnitTest {
    @Test
    fun `this is a sample test for learning Kotlin`() {

        var numbers = mutableListOf(19,76,34,21,64,59,40)
        numbers = numbers.sorted().toMutableList()

        var it = numbers.iterator()
        while(it.hasNext()){
            println(it.next())
        }
        assertEquals(numbers, listOf(1,2,3))

    }
}
