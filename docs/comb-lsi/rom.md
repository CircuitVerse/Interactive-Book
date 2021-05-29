---
layout: circuitverse
title: ROM
nav_order: l0s000
cvib_level: basic
parent: Combinational LSI
has_children: false
---


# Read-Only Memory
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}

---


## Introduction

A *Read-Only-Memory* (ROM) is a large scale integration (LSI) combinational circuit.

ROM circuits can store binary words of a fixed length in each *"cell"*. Each cell has an associated binary number usually referred to as *"address"*. The number of cells is determined by the address' number of bits.

The storage is *"non-volatile"*, meaning that when the data remains in the circuit even when the power is removed. In contrast, *"volatile"* storage, such as most *Random Access Memory* (RAM) circuits, cannot retain the stored binary information when the circuit is disconnected from power.

Let $m$ be the address' number of bits and $n$ the number of bits in each cell (output bits), then the ROM's size (in bits) can be calculated as $2^m\times n$.

In fact, ROM circuits can be seen as combinational circuits capable of storing large truth-tables whose inputs correspond to the address.


## Types of ROM

The first ROM circuits produced had the data stored at the moment of fabrication and it was not possible to modify the contents afterwards. That is the main reason why they are called "Read-Only". The process of storing data into a ROM chip is usually referred to as *programming*.

Technological advances allowed the creation of ROM circuits which could be rewritten after fabrication with or without external. Usually, ROM circuits are classified based on their (re)programming technology.


### Mask ROM

This type of circuit is programmed at manufacturing time. It cannot be re-programmed afterwards. This process is usually the cheapest when manufacturing large quantities of identical ROM circuits.


### PROM

In *Programmable read-only memory* (PROM), the data can be stored after the manufacturing process or *in the field*. The method of programming as well as the number of times it can be programmed gives way to a number of subtypes.

1.  OTP

    *One-time-programmable* (OTP) ROM can only be programmed once.

2.  EPROM

    *Erasable programmable read-only memory* (EPROM) can be erased using ultraviolet (UV) light and then rewritten, a limited number of times.

3.  EEPROM

    *Electrically erasable programmable read-only memory* (EEPROM) can be erased electrically instead of using UV-light.


### Flash memory

*Flash* memory is a more modern version of the EEPROM. The erasing and rewriting phases are faster.


## Implementing a combinational circuit using a ROM

The process of implementation of a binary function(s) using ROM circuits mainly consists in estimating the optimal size of the memory, restricted to the required number of inputs and outputs.

Then, the equivalent truth-table has to be stored or "programmed" into the circuit.


### Advantages and disadvantages

-   Single discrete component:
    -   Use less space than equivalent AND/OR network
    -   Simple implementation (just copy the truth table into the memory.
-   If there are unused memory cells, then more functionality can be added to the same circuit. If the ROM is erasable/re-programmable the truth table can be rewritten into the memory, or the IC can be replaced if it is an OTP memory or Mask ROM.
-   Depending on the type of ROM the power consumption might be larger than the equivalent AND/OR network power consumption.
-   In general, ROM access takes a longer time than the propagation time of the equivalent AND/OR network. For instance, 150ns access time for the AT28C64B ROM vs 4.2ns (2×2.1ns) of a 74LVC quad gate.
-   For very simple or small logic functions, available COTS ROM might be too large, so choosing a ROM would be inefficient in terms of costs and power consumption, considering that most of the ROM circuit will never be used.


## Interactive example

Let's suppose we have a ROM circuit with 4 bit addresses and 8 bit words. The ROM capacity can be calculated as $2^4\times 8 = 64 \text{bits} = 16 \text{bytes}$

Such a ROM can be used to implement 8 single bit binary functions. Let's say the binary functions have 3 input literals $A,B,C$ which will be connected to the 3 LSB of the ROM address inputs $x_1,x_2,x_3$, respectively.

The MSB of the ROM address ($x_0$) will be used to either select the non-inverted value of the functions ($x_0=0$) or the inverted value of the functions ($x_0=1$).

If the functions are

$$\begin{align}
z_0 &= A+B+C \\
z_1 &= A+B \\
z_2 &= A+C \\
z_3 &= B+C \\
z_4 &= A\cdot B\cdot C \\
z_5 &= A\cdot B \\
z_6 &= A\cdot C\\
z_7 &= B\cdot C
\end{align}$$

then the corresponding truth table is

| : Input word :                                       ||||| :Output word:                                                         |||||||||
| Address ($i$)  | $x_0$           | $x_1$ | $x_2$ | $x_3$ | $z_0$         | $z_1$ | $z_2$ | $z_3$ | $z_4$ | $z_5$ | $z_6$ | $z_7$ | (hex) |
| ^^             | Inverted output | $A$   | $B$   | $C$   | $A+B+C$       | $A+B$ | $A+C$ | $B+C$ | $ABC$ | $AB$  | $AC$  | $BC$  |^^     |
|:--------------:|:---------------:|:-----:|:-----:|:-----:|:-------------:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| 0              | 0               | 0     | 0     | 0     | 0             | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 00    |
| 1              | 0               | 0     | 0     | 1     | 1             | 0     | 1     | 1     | 0     | 0     | 0     | 0     | B0    |
| 2              | 0               | 0     | 1     | 0     | 1             | 1     | 0     | 1     | 0     | 0     | 0     | 0     | D0    |
| 3              | 0               | 0     | 1     | 1     | 1             | 1     | 1     | 1     | 0     | 0     | 0     | 1     | F1    |
| 4              | 0               | 1     | 0     | 0     | 1             | 1     | 1     | 0     | 0     | 0     | 0     | 0     | E0    |
| 5              | 0               | 1     | 0     | 1     | 1             | 1     | 1     | 1     | 0     | 0     | 1     | 0     | F2    |
| 6              | 0               | 1     | 1     | 0     | 1             | 1     | 1     | 1     | 0     | 1     | 0     | 0     | F4    |
| 7              | 0               | 1     | 1     | 1     | 1             | 1     | 1     | 1     | 1     | 1     | 1     | 1     | FF    |
| 8              | 1               | 0     | 0     | 0     | 1             | 1     | 1     | 1     | 1     | 1     | 1     | 1     | FF    |
| 9              | 1               | 0     | 0     | 1     | 0             | 1     | 0     | 0     | 1     | 1     | 1     | 1     | 4F    |
| 10             | 1               | 0     | 1     | 0     | 0             | 0     | 1     | 0     | 1     | 1     | 1     | 1     | 2F    |
| 11             | 1               | 0     | 1     | 1     | 0             | 0     | 0     | 0     | 1     | 1     | 1     | 0     | 0E    |
| 12             | 1               | 1     | 0     | 0     | 0             | 0     | 0     | 1     | 1     | 1     | 1     | 1     | 1F    |
| 13             | 1               | 1     | 0     | 1     | 0             | 0     | 0     | 0     | 1     | 1     | 0     | 1     | 0D    |
| 14             | 1               | 1     | 1     | 0     | 0             | 0     | 0     | 0     | 1     | 0     | 1     | 1     | 0B    |
| 15             | 1               | 1     | 1     | 1     | 0             | 0     | 0     | 0     | 0     | 0     | 0     | 0     | 00    |

The interactive circuit below implements the table:

<iframe width="600px" height="400px"
	src="https://circuitverse.org/simulator/embed/rom_example"
	id="projectPreview" scrolling="no"
	webkitAllowFullScreen mozAllowFullScreen allowFullScreen>
</iframe>
