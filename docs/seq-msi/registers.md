---
layout: circuitverse
title: Registers
nav_order: l0s000
cvib_level: basic
parent: Sequential MSI
has_children: false
---


# Registers
{: .no_toc}


## Table of contents
{: .no_toc}

1. TOC
{:toc}


## Registers

## Introduction


A Flip-flop is a 1 bit memory cell which can be used for storing the digital data. 
To increase the storage capacity in terms of number of bits, you can use a group of flip-flops. Such a group of flip-flops is known as a Register. 
The n-bit register will consist of n number of flip-flop(s) and it is capable of storing an n-bit word.


The binary-data, in a register, can be transfered within itself from one flip-flop to another. 
A shift register is a type of register that allows such data transfers.
Shift register has 4 modes of operations.

## Sub-modules

Next, let us have a look at each register operation one by one.

1. [Serial-in serial-out](https://learn.circuitverse.org/docs/registers/ss.html)
2. [Serial-in parallel-out](https://learn.circuitverse.org/docs/registers/sp.html)
3. [Parallel-in serial-out](https://learn.circuitverse.org/docs/registers/ps.html)
4. [Parallel-in parallel-out](https://learn.circuitverse.org/docs/registers/pp.html)


## Serial-in serial-out

## Introduction
 
Let all the flip-flops be initially in the reset condition i.e. Q3 = Q2 = Q1 = Q0 = 0. If an entry of a four-bit binary number 1 1 1 1 is made into the register, this number should be applied to Din bit with the LSB bit applied first. The D input of FF-3 i.e. D3 is connected to serial data input Din. The output of FF-3 i.e. Q3 is connected to the input of the next flip-flop i.e. D2, and so on.

## Block diagram


<div style="text-align:center"><img src="/assets/images/siso_blockdiagram.jpg" /></div>

## Operation

Before application of the clock signal, let Q3 Q2 Q1 Q0 = 0000 and apply the LSB bit of the number to Din. So Din = D3 = 1. Now, apply the clock. On the first falling edge of the clock, the FF-3 is set, and stored word in the register is Q3 Q2 Q1 Q0 = 1000.

<div style="text-align:center"><img src="/assets/images/siso_operation1.jpg" /></div>

Apply the next bit to Din. So Din = 1. As soon as the next negative edge of the clock gets triggered, FF-2 will set and the stored word change to Q3 Q2 Q1 Q0 = 1100.

<div style="text-align:center"><img src="/assets/images/siso_operation2.jpg" /></div>

Apply the next bit to be stored i.e. 1 to Din. Apply the clock pulse. As soon as the third negative clock edge gets triggered, FF-1 will be set and output will get modified to Q3 Q2 Q1 Q0 = 1110.

<div style="text-align:center"><img src="/assets/images/siso_operation3.jpg" /></div>

Similarly with Din = 1 and with the fourth negative clock edge arriving, the stored word in the register is Q3 Q2 Q1 Q0 = 1111.

<div style="text-align:center"><img src="/assets/images/siso_operation4.jpg" /></div>

## Truth table
<div style="text-align:center"><img src="/assets/images/siso_truthtable.jpg" /></div>

## Waveforms
<div style="text-align:center"><img src="/assets/images/siso_waveform.jpg" /></div>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/93866" id="ss_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## Serial-in parallel-out

## Introduction

- In such types of operations, the data is entered serially and taken out in parallel fashion.

- Data is loaded bit-by-bit. The output(s) are disabled as long as the data is loading.

- As soon as the data loading gets completed, all the flip-flops contain their required data. The output(s) are enabled so that all the loaded data is made available over all the output lines at the same time.

- 4 clock cycles are required to load a four-bit word. Hence the speed of operation of SIPO mode is the same as that of the SISO mode.

## Block diagram


<div style="text-align:center"><img src="/assets/images/sipo_blockdiagram.jpg" /></div>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/93880" id="sp_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## Parallel-in serial-out

## Introduction

 
- Data bits enter in a parallel fashion.

- The circuit, shown below, is a four-bit parallel-in serial-out register.

- Output of the previous flip Flop is connected to the input of the next one via a combinational circuit.

- The binary input data bits B0, B1, B2, B3 are applied through the same combinational logic circuit.

- There are two modes in which this circuit can work, namely - shift mode and load mode.

## Load mode

When the shift/load bar line is low (0), the AND gates 2, 4 and 6 become active, and they will pass B1, B2, B3 bits to the corresponding flip-flops. 
On the low going edge of the clock, the binary inputs B0, B1, B2, B3 will get loaded into the corresponding flip-flops. 
Thus, the parallel loading takes place.

## Shift mode
When the shift/load bar line is low (1), the AND gates 2, 4 and 6 become inactive. 
Hence, the parallel loading of the data becomes impossible. 
But the AND gates 1,3 and 5 become active. 
Therefore the shifting of data takes place from left-to-right bit-by-bit on the application of clock pulses. 
Thus, the parallel-in serial-out operation takes place.

## Block diagram


<div style="text-align:center"><img src="/assets/images/piso_blockdiagram.jpg" /></div>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/93910" id="ps_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## Parallel-in parallel-out

## Introduction
 
Here, the 4-bit binary datda inputs B0, B1, B2, B3 are applied to the data inputs D0, D1, D2, D3, respectively, of the four flip-flops. 
When a negative edge of the clock is triggered, then the flip-flops get loaded with the input binary bits simultaneously. 
The loaded bits appear at the output side, simultaneously, as well. 
Only the clock pulse is essential to load all the binary bits.



## Block diagram


<div style="text-align:center"><img src="/assets/images/pipo_blockdiagram.jpg" /></div>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/93890" id="pp_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
