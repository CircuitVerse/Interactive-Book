---
layout: default
title: Parallel Input Serial Output 
parent: Digital Registers
nav_order: 3
---

# Parallel Input Serial Output 
{: .no_toc }




## Introduction
 
* The binary data is entered in a parallel fashion.

* The below circuit is an 4-bit Parallel Input Serial Output register.

* Through a Combinational circuit the previous Flip-flop's output is being connected to the next Flip-flop's input. 

* The binary input data B0, B1, B2, B3 is applied through the same Combinational circuit.

* The 2 modes from which the circuit can work are- Shift mode/Load mode.

## Load mode
When the Shift/Load bar line is 0, the AND gate 2, 4 and 6 become active they will pass B1, B2, B3 bits to the corresponding flip-flops. 
On the low going edge of clock, the binary input B0, B1, B2, B3 will get loaded into the corresponding flip-flops. 
Thus parallel loading takes place.

## Shift mode
When the shift/load bar line is low (1), the AND gate 2, 4 and 6 become inactive. 
Hence the parallel loading of the data becomes impossible. 
But the AND gate 1,3 and 5 become active. 
Therefore the shifting of data from left to right bit by bit on application of clock pulses. 
Thus the parallel in serial out operation takes place.

## Block Diagram


<div style="text-align:center"><img src="../../assets/images/piso_blockdiagram.jpg" /></div>

