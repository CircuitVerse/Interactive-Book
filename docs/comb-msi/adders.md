---
layout: circuitverse
title: Adders
nav_order: l0s002
cvib_level: basic
parent: Combinational MSI
has_children: false
---


# Adders
{: .no_toc}


## Table of contents
{: .no_toc}

1. TOC
{:toc}


## Half adder

## Introduction

Half adder is a combinational logic circuit with two inputs and two outputs. 
The half adder circuit is designed to add two single bit binary number A and B. 
It is the basic building block for the addition of two single-bit numbers. 
This circuit has two outputs **carry** and **sum**.

## Block diagram

<div style="text-align:center"><img src="/assets/images/halfadder_blockdiagram.jpg" /></div>


## Truth table

<div style="text-align:center"><img src="/assets/images/halfadder_truthtable.jpg" /></div>

## Circuit diagram

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/43463" id="half_adder_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Half adder from universal gates 

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/101813" id="half_adder_02" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## Full adder

## Introduction

Full adder is developed to overcome the drawback of Half Adder circuit. 
It can add two one-bit numbers A and B, and carry c. 
The full adder is a three-input and two output combinational circuit.

## Block diagram

<div style="text-align:center"><img src="/assets/images/fulladder_blockdiagram.jpg" /></div>


## Truth table

<div style="text-align:center"><img src="/assets/images/fulladder_truthtable.jpg" /></div>

## Circuit diagram

<div style="text-align:center"><img src="/assets/images/fulladder_circuitdiagram.jpg" /></div>

## Full adder from 2 half adder

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/247" id="full_adder_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Full adder from universal gates 

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/45277" id="full_adder_02" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Ripple carry adder

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/248" id="full_adder_03" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## Half subtractors

## Introduction

Half subtractor is a combination circuit with two inputs and two outputs (difference and borrow). 
It produces the difference between the two binary bits at the input and also produces an output (Borrow) to indicate if a 1 has been borrowed. 
In the subtraction (A-B), A is called a Minuend bit and B is called a Subtrahend bit.

## Truth table

<div style="text-align:center"><img src="/assets/images/halfsubstrator_truthtable.jpg" /></div>

## Circuit diagram

<div style="text-align:center"><img src="/assets/images/halfsubstrator_circuitdiagram.jpg" /></div>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/12120" id="half_sub_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Half subtractor from universal gates 

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/101817" id="half_sub_02" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## Full subtractors

## Introduction

The disadvantage of a half subtractor is overcome by full subtractor. 
The full subtractor is a combinational circuit with three inputs A, B, C and two output D and C'. 
A is the 'minuend', B is 'subtrahend', C is the 'borrow' produced by the previous stage, D is the difference output and C' is the borrow output.

## Truth table

<div style="text-align:center"><img src="/assets/images/fullsubstrator_truthtable.jpg" /></div>

## Circuit diagram

<div style="text-align:center"><img src="/assets/images/fullsubstrator_circuitdiagram.jpg" /></div>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/12119" id="full_sub_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Full subtractor from universal gates

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/45278" id="full_sub_02" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## N-Bit parallel adder and subtractor

## Introduction

The Full Adder is capable of adding only two single-digit binary number along with a carry input. 
But in practice, you need to add binary numbers which are much longer than just one bit. To add two n-bit binary numbers you need to use the n-bit parallel adder. 
It uses several full adders in cascade. 
The carry output of the previous full adder is connected to carry input of the next full adder.

## 4-bit parallel adder
In the block diagram, A0 and B0 represent the LSB of the four-bit words A and B. 

Hence Full Adder-0 is the lowest stage. 
Hence its Cin has been permanently made 0. 
The rest of the connections are the same as those of n-bit parallel adder is shown in fig. The four-bit parallel adder is a very common logic circuit.

## Block diagram

<div style="text-align:center"><img src="/assets/images/fourbitadder_blockdiagram.jpg" /></div>

# N-bit parallel subtractor

The subtraction can be carried out by taking the 1's or 2's complement of the number to be subtracted. 
For example, you can perform the subtraction (A-B) by adding either 1's or 2's complement of B to A. 
That means you can use a binary adder to perform the binary subtraction.


## 4-bit parallel subtractor

The number to be subtracted (B) is first passed through inverters to obtain its 1's complement. 
The 4-bit adder then adds A and 2's complement of B to produce the subtraction. 
S3 S2 S1 S0 represents the result of binary subtraction (A-B) and carry output Cout represents the polarity of the result. 
If A > B Cout = 0 and the result of binary form (A-B) then Cout = 1 and the result is in the 2's complement form.


## Block diagram

<div style="text-align:center"><img src="/assets/images/fourbitsubstractor_blockdiagram.jpg" /></div>


## 8-bit full adder and subtractor   

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/2018" id="nbit_parallel_adder_subtractor_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
