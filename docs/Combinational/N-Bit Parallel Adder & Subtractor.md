---
layout: default
title: N-Bit Parallel Adder & Subtractor
parent: Combinational Logic
nav_order: 5
---


# N-Bit Parallel Adder
{: .no_toc }

The Full Adder can only add 2 single bit binary numbers with a carry input,but for practical uses, we must be able to add more than just a single binary number. To add only 2 n-bit binary numbers, the n-bit parallel adder can be implemented, for calculation it cascades a number of Full Adders. The carry-output one Full Adder is connected to the next Full Adder's carry-input.

## 4 Bit Parallel Adder
In the below block diagram, B0 and A0 represent the LSB(Least Significant Bit) of the 4 bit variables A and B, hence Full Adder(0) is the lowest stage, and its C-in is permanently made 0. Other than these, the remaining connections are same as that of N-bit parallel adder, as shown in figure. This is a very commonly used logic circuit.

## Block Diagram

<div style="text-align:center"><img src="../../assets/images/fourbitadder_blockdiagram.jpg" /></div>


# N-Bit Parallel Subtractor
{: .no_toc }

The subtraction of binary numbers can be done by using 1's/2's complement on the numbers which should be subtracted. For an example: We can subtract ( B - A ) by adding the 1's/2's complement of A to B. 
Therfore, we can use the Binary Adder to perform Binary Subration


## 4 Bit Parallel Subtractor
Firstly the number to be subtracted, i.e., (A) is passed into inverters(finding the complement) to find its 1's complement. Then the 4-bit adder adds B and 2's complement of A to complete the subtraction. S0, S1, S2, S3 represent the OUTPUT of binary subtraction( B - A ), and the the polarity of the result is  represented by carry-output(C-out).
If B > A then, C-out = 0, if the OUTPUT of binary forms ( B - A ) then C-out = 1, and the OUTPUT is in the form of 2's complement.


## Block Diagram

<div style="text-align:center"><img src="../../assets/images/fourbitsubstractor_blockdiagram.jpg" /></div>


## 8 Bit Full Adder And Subtractor   
<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/2018" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
