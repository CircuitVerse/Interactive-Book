---
layout: default
title: Encoder
parent: MSI Components
nav_order: 4
---

# Encoder
{: .no_toc }

Encoder is nothing but a combinational circuit which performs the reverse operation of a decoder. 
Encoder has 'n' number of input lines, and 'm' number of output lines. An Encoder produces an 'm' bit binary coded output with respect to the digital input. 
Encoder accepts an 'n' bit digital input and transforms it to an 'm' bit digital output.

## Block Diagram
{: .no_toc }

<div style="text-align:center"><img src="../../assets/images/encoder_blockdiagram.jpg" /></div>

### Examples of Decoders are following.
   
* Priority encoders
* Decimal to BCD encoder
* Octal to binary encoder
* Hexadecimal to binary encoder

## Priority Encoder
{: .no_toc }

It is an special type of Encoder. 
Priorities will be given to all of the input lines. 
If two input lines are 1 at one particular time, then the input line with highest priority will be chosen. 
The four input lines are D0, D1, D2, D3 and the output lines are Y0, Y1. 
Out of the four inputs, input D3 has the highest priority and D0 has the least priority. 
That means if D3 = 1 then Y1 Y1 = 11 regardless of the other inputs. Similarly if D3 = 0 and D2 = 1 then Y1 Y0 = 10 regardless of the other inputs.

## Block Diagram
{: .no_toc }

<div style="text-align:center"><img src="../../assets/images/priorityencoder_blockdiagram.jpg" /></div>

## Truth Table

<div style="text-align:center"><img src="../../assets/images/priorityencoder_truthtable.jpg" /></div>

## Logic Circuit

<div style="text-align:center"><img src="../../assets/images/priorityencoder_logiccircuit.jpg" /></div>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/762" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
