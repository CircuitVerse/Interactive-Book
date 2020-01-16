---
layout: default
title: ALU
comments: true
nav_order: 9
---

# ALU
{: .no_toc }


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---



## Introduction
The ALU(Arithmetic Logic Unit) is a Digital-Circuit which can be used to perform arithmetic, and logical operations. The ALU is a major component of the CPU(Central Processing Unit) of a computer. A modern CPU contains a very powerful ALU which are quite complex. In addition to a ALU, a modern CPU contains a Control-Unit(CU).

The use of ALU is to do mathematical operations (addition, subtraction, multiplication and division) , and basic logical operations (AND/OR calculations). The ALU is the computational hub for CPU of a computer.

## In Detail
Now that we know about half adder and full adder discussed in Combinational Analysis, lets try to construct a simple ALU which performs a arithmetic operation(1 bit addition), and also does three logical operations- AND, XOR, and NOR as shown below. There is only one operation selected at a time by the multiplexer. The operation which is selected depends on the multiplexer's selection lines, as displayed in the below truth table.

<div style="text-align:center" ><img src="../assets/images/1bitALU.jpg" /></div>

**Input = M1,M0 & 
Output = Operation**

|M1	|M0	|Operation|
|:-:|:-:|:-------:|
|0	|0	|SUM|
|1	|0	|AND|
|0	|1	|OR|
|1	|1	|XOR|


We can now construct a 4-bit ALU by taking the 1-bit ALU as a block, this will perform the tasks of a 1-bit ALU on 4-bit inputs. Hence, a single block can be constructed, and also used recursively. The inputs 'A' and 'B' are of 4-bits and the output as well is of 4-bit. The below Figure illustrates it:

<div style="text-align:center" ><img src="../assets/images/360px-4BITALU.jpg" /></div>

There are some important points to be noted here:
* The selection lines MO and M1 select the function ALU performs. These selection lines combined with the input arguments and desired functions a Instruction Set can be formed.
* These Instructions can used to create meaningful programs. Since these are required to be easily available they can be stored on ROM unit.
* The input arguments 'A' and 'B' are often stored in Internal Registers. These along with other special purpose register form the registers of the microcontroller.
* ROM memories are slower in speed, hence an intermediate high speed RAM is often used.
* All the critical timings, decoding of the instructions are often grouped together in seperate control and timings unit'
* If a Micro controller would be constructed only from ALU, RAM, ROM there would not be any external interface. Hence we have Input/Output IO ports.
* Additional features such as 'Interrupts, communication protocols, EEPROM, Timers/Counters, Debug interfaces etc are incorporated to make a controller complete.

In the above discussion, we may have left some intricate(complex) details involved in ALU, and CPU design. But the goal was to understand ALU or CPU at a deeper level.


{% include disqus.html %}



<style>
img{
    max-width:50%;
}
</style>
