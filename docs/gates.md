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


Logic gates are the basic building blocks of any digital system. 
It is an electronic circuit having one or more than one input and only one output. The relationship between the input and the output is based on a certain logic. Based on this, logic gates are named as AND gate, OR gate, NOT gate etc.

## NOT gate

The NOT gate is also known as an inverter because the output is the exact opposite of the input. It has one input and one output. The two possibilities are written out in the table below. Tables listing all logical possibilities like this are known as truth tables.

| Input1       | Input 2      |
|:------------:|:------------:|
| 0            | 1            | 
| 1            | 0            | 


<iframe width="100%" height="220px" src="https://circuitverse.org/simulator/embed/738" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## AND gate

The AND gate has two inputs and one output. The output is 1 if both inputs are 1, and for all other cases the output is 0.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 0      |
| 0            | 1            | 0      |
| 1            | 0            | 0      |
| 1            | 1            | 1      |

<iframe width="100%" height="220px" src="https://circuitverse.org/simulator/embed/734" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>



## OR gate

The OR gate has two inputs and one output. If at least one of the inputs is 1, then the output will be 1. If neither input is 1, the output will be 0.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 0      |
| 0            | 1            | 1      |
| 1            | 0            | 1      |
| 1            | 1            | 1      |

<iframe width="100%" height="220px"  src="https://circuitverse.org/simulator/embed/737" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## NAND gate

The NAND gate behaves in the opposite fashion to and AND gate. You can think of it as an AND gate followed immediately by a NOT gate. Its output is 0 when the two inputs are 1, and for all other cases, its output is 0. The name NAND comes from joining NOT and AND. The symbol for NAND is the same as that for AND except for the addition of a small circle on the right side.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 1      |
| 0            | 1            | 1      |
| 1            | 0            | 1      |
| 1            | 1            | 0      |

<iframe width="100%" height="220px" src="https://circuitverse.org/simulator/embed/741" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
## NOR gate

The NOR gate behaves in an opposite fashion to the OR gate. You can think of it as an OR gate followed immediately by a NOT gate. Its output is 1 when the two inputs are 0, and for all other cases, its output is 0. The name NOR comes from joining NOT and OR. The symbol for NOR is the same as that for OR except for the addition of a small circle at the end, right before the output.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 1      |
| 0            | 1            | 0      |
| 1            | 0            | 0      |
| 1            | 1            | 0      |

<iframe width="100%" height="220px" src="https://circuitverse.org/simulator/embed/742" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


## XOR gate

The XOR gate behaves in a similar fashion to the OR gate. Its output is 1 when the two inputs are different. Output is 0 when inputs are same. The symbol for XOR is the same as that for OR except for the addition of an arc right before the gate.

| Input1       | Input 2      | output |
|:------------:|:------------:|:------:|
| 0            | 0            | 0      |
| 0            | 1            | 1      |
| 1            | 0            | 1      |
| 1            | 1            | 0      |

<iframe width="100%" height="220px" src="https://circuitverse.org/simulator/embed/740" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


{% include disqus.html %}
