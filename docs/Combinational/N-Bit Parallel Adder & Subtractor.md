---
layout: default
title: N-Bit Parallel Adder & Subtractor
parent: Combinational Logic
nav_order: 5
---


# N-Bit Parallel Adder
{: .no_toc }

The Full Adder can only two single digit binary numbers along with a carry input. 
But in practical we need to add binary numbers which are much longer than just one bit, So we use N-bit parallel adder which can add two n-bit binary numbers. 
N-bit parallel adder involves the cascading of several full adders.
The carry output of the previous full adder is connected to carry input of the next full adder.

## 4 Bit Parallel Adder
In the block diagram which is given below, A0 and B0 represent the LSB of the four-bit words A and B. 
Hence Full Adder-0 is the lowest stage. 
Hence its Cin has been permanently made 0. 
The rest of the connections are exactly the same as those of N-bit parallel adder is shown in figure below. This is a very common logic circuit.

## Block Diagram

<div style="text-align:center"><img src="../../assets/images/fourbitadder_blockdiagram.jpg" /></div>


# N-Bit Parallel Subtractor
{: .no_toc }

The subtraction can be carried out by taking the 1's or 2's complement of the number to be subtracted. 
For example we can perform the subtraction (A-B) by adding either 1's or 2's complement of B to A. 
So we can use a binary adder to perform the binary subtraction.


## 4 Bit Parallel Subtractor
First, the number to be subtracted (B) is passed through inverters to obtain its 1's complement. 
Then the 4-bit adder then adds A and 2's complement of B to produce the subtraction. 
S3 S2 S1 S0 represents the result of binary subtraction (A-B) and carry output Cout represents the polarity of the result. 
If (A > B) then Cout = 0 and the result of binary form (A-B) then Cout = 1 and the result is in the 2's complement form.


## Block Diagram

<div style="text-align:center"><img src="../../assets/images/fourbitsubstractor_blockdiagram.jpg" /></div>


## 8 Bit Full Adder And Subtractor   
<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/2018" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
