---
layout: circuitverse
title: ALU
nav_order: l0s001
cvib_level: basic
parent: Combinational LSI
has_children: false
---


# Arithmetic Logic Unit
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}

## Introduction
An arithmetic logic unit (ALU) is a digital circuit used to perform arithmetic and logic operations. It represents the fundamental building block of the central processing unit (CPU) of a computer. Modern CPUs contain very powerful and complex ALUs. In addition to ALUs, modern CPUs contain a control unit (CU).

The purpose of the ALU is to perform mathematical operations such as addition, subtraction, multiplication and division. Additionally, the ALU processes basic logical operations like AND/OR calculations. It serves as the computational hub of the Central Processing Unit (CPU) for a computer system

## In detail
So with the above building blocks i.e. half adder and full adder discussed in Combinational Analysis, lets construct a simple ALU that performs a arithmetic operation (1 bit addition) and does 3 logical operations namely AND, NOR and XOR as shown below. The multiplexer selects only one operation at a time. The operation selected depends on the selection lines of the multiplexer as shown in the truth table.

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/42961" id="alu_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

**Input = M0,M1 & 
Output = Operation**

|M0|M1|Operation|
|:-:|:-:|:-------:|
|0	|0	|SUM|
|0	|1	|AND|
|1	|0	|OR|
|1	|1	|XOR|


Now you can take up the 1 bit ALU as block and construct a 4 bit ALU, which performs all the functions of the 1 bit ALU on the 4 bit inputs. Thus a single building block can be constructed and used recursively. The inputs A and B are four bits and the output is 4 bit as well. Figure below illustrates it:

<div style="text-align:center" ><img src="/assets/images/360px-4BITALU.jpg" /></div>

There are a few important takeaways here:
- The selection lines MO and M1 select the function ALU performs. These selection lines combined with the input arguments and desired functions, an Instruction Set can be formed.
- These Instructions can used to create meaningful programs. Since these are required to be easily available, they can be stored on ROM unit.
- The input arguments A and B are often stored in Internal Registers. These along with other special purpose register form the registers of the microcontroller.
- ROM memories are slower in speed, hence an intermediate high speed RAM is often used.
- All the critical timings, decoding of the instructions are often grouped together in seperate control and timings unit.
- If a Micro controller would be constructed only from ALU, RAM and ROM, there would not be any external interface. Hence, you now have Input/Output (I/O) ports.
- Additional features such as Interrupts, communication protocols, EEPROM, Timers/Counters, Debug interfaces etc. are incorporated to make a controller complete.

In above discussion you might have left out intricate details involved in an ALU, CPU design. But the aim was to understand ALU/CPU at a deeper level.

<style>
img{
    max-width:50%;
}
</style>
