---
layout: default
title: Gates
comments: true
nav_order: 3
---
# Logic Gates
{: .no_toc }


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


## Introduction


The logic gate is the basic building block for any digital system. 
They are electronic circuits and it can perform logical decisions, it has one or inputs but only one output. Based on the logic they perform, they are named as: AND gate, OR gate, etc.

## NOT gate

The NOT gate is a logical gate which is also called as an inverter, as the output is completely opposite of the Input. It consists of an input and an output. The two possibile outcomes are listed out below.

The tables cosisting of all the logical possibilities like the one below are called as **Truth tables**, where **1** refers to **TRUE** and **0** refers to **FALSE**.

| Input1       | Input 2      |
|:------------:|:------------:|
| 0            | 1            | 
| 1            | 0            | 


<iframe width="100%" height="220px" src="https://circuitverse.org/simulator/embed/738" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## AND gate

The AND gate is a logical gate which contains of two inputs and an output. If both the inputs are 1 then the output will be 1, and the output will be 0 for all other cases.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 0      |
| 0            | 1            | 0      |
| 1            | 0            | 0      |
| 1            | 1            | 1      |

<iframe width="100%" height="220px" src="https://circuitverse.org/simulator/embed/734" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>



## OR gate

The OR gate is a logical gate which consists of two inputs and an output. the output will be 1 if either of the inputs is 1. If both the inputs are 0, then the output will be 0.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 0      |
| 0            | 1            | 1      |
| 1            | 0            | 1      |
| 1            | 1            | 1      |

<iframe width="100%" height="220px"  src="https://circuitverse.org/simulator/embed/737" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## NAND gate

The NAND gate is a logical gate, Which acts in the opposite way to AND gate. The NAND gate can be imagined as an AND gate which is connected to a NOT gate. If the two inputs are 1 the output is 0, and its output is 0 for the all other cases. The name NAND can be imagined as the connection of NOT and AND.
The symbolic representation of NAND is similar to AND except there is a small circle added to the right side.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 1      |
| 0            | 1            | 1      |
| 1            | 0            | 1      |
| 1            | 1            | 0      |

<iframe width="100%" height="220px" src="https://circuitverse.org/simulator/embed/741" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
## NOR gate

The NOR gate is a logical gate, Which acts in the opposite way to OR gate. The NOR gate can be imagined as an OR gate which is connected to a NOT gate. If the two inputs are 0 the output is 1, and its output is 0 for the all other cases. The name NOR can be imagined as the connection of NOT and OR.
The symbolic representation of NOR is similar to OR except there is a small circle added to the right side.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 1      |
| 0            | 1            | 0      |
| 1            | 0            | 0      |
| 1            | 1            | 0      |

<iframe width="100%" height="220px" src="https://circuitverse.org/simulator/embed/742" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## XOR gate

The XOR(Exclusive-OR) gate is a logical gate, Which acts in the similar way to OR gate. The output is 1, if any one of the input is 1 and the other is 0, and its output is 0 for the all other cases.
The symbolic representation of XOR is similar to OR except there is an arc right added to the left side before the gate.


| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 0      |
| 0            | 1            | 1      |
| 1            | 0            | 1      |
| 1            | 1            | 0      |

<iframe width="100%" height="220px" src="https://circuitverse.org/simulator/embed/740" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


{% include disqus.html %}
