---
layout: default
title: Half Adder
parent: Combinational Logic
nav_order: 1
---

# Half Adder
{: .no_toc }

A half adder is a Combinational logic circuit with input of 2 single bit binary digits, it is used for the addition of 2 single bit binary digits. The 2 single bit binary digits are called **augend** and **addend** and it gives 2 outputs namely **sum** and **carry**.

Lets assume 2 single bit binary digits as 'A' and 'B', whose sum and carry are 'S' and 'C' respectively. 



## Block Diagram
{: .no_toc }

<div style="text-align:center"><img src="../../assets/images/halfadder_blockdiagram.jpg" /></div>


## Truth Table
{: .no_toc }

* Inputs: A, B
* Outputs: S, C

|    A    |    B    |    s    |    C    |
|:-------:|:-------:|:-------:|:-------:|
|    0    |    0    |    0    |    0    |
|    0    |    1    |    1    |    0    |
|    1    |    0    |    1    |    0    |
|    1    |    1    |    0    |    1    |

## Circuit Diagram
{: .no_toc }

<div style="text-align:center"><img src="../../assets/images/halfadder_circuitdiagram.jpg" /></div>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/12140" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
