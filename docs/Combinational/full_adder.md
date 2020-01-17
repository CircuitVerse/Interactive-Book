---
layout: default
title: Full Adder
parent: Combinational Logic
nav_order: 2
---

# Full Adder
{: .no_toc }

A full adder is a Combinational logic circuit made to overcome the disadvantage of half adder, with input of 3 single bit binary numbers, it is used for the addition of 3 single bit binary numbers, it gives 2 outputs called **sum** and **carry-out**.

Lets assume 3 single bit binary numbers as 'A', 'B', and 'C-in'(carry-in) whose sum and carry-out are 'S' and 'C-out' respectively. 


## Block Diagram
{: .no_toc }

<div style="text-align:center"><img src="../../assets/images/fulladder_blockdiagram.jpg" /></div>


## Truth Table
{: .no_toc }

* Inputs: A, B, C-in
* Outputs: S, C-out

|    A    |    B    |   C-in  |    S    |  C-out  |
|:-------:|:-------:|:-------:|:-------:|:-------:|
|    0    |    0    |    0    |    0    |    0    |
|    0    |    0    |    1    |    1    |    0    |
|    0    |    1    |    0    |    1    |    0    |
|    0    |    1    |    1    |    0    |    1    |
|    1    |    0    |    0    |    1    |    0    |
|    1    |    0    |    1    |    0    |    1    |
|    1    |    1    |    0    |    0    |    1    |
|    1    |    1    |    1    |    1    |    1    |

## Circuit Diagram
{: .no_toc }

<div style="text-align:center"><img src="../../assets/images/fulladder_circuitdiagram.jpg" /></div>

## Full adder from 2 Half Adder

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/247" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Ripple Carry Adder

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/248" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
