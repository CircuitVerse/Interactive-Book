---
layout: default
title: Encoder
parent: MSI Components
nav_order: 4
---

# Encoder
{: .no_toc }

Encoder is a combinational circuit which is designed to perform the inverse operation of the decoder. 
An encoder has n number of input lines and m number of output lines. An encoder produces an m bit binary code corresponding to the digital input number. 
The encoder accepts an n input digital word and converts it into an m bit another digital word.

## Block Diagram
{: .no_toc }

<div style="text-align:center"><img src="/assets/images/encoder_blockdiagram.jpg" /></div>

### Examples of Decoders are following.
   
* Priority encoders
* Decimal to BCD encoder
* Octal to binary encoder
* Hexadecimal to binary encoder

## Priority Encoder
{: .no_toc }

This is a special type of encoder. 
Priority is given to the input lines. 
If two or more input line are 1 at the same time, then the input line with highest priority will be considered. 
There are four input D0, D1, D2, D3 and two output Y0, Y1. 
Out of the four input D3 has the highest priority and D0 has the lowest priority. 
That means if D3 = 1 then Y1 Y1 = 11 irrespective of the other inputs. Similarly if D3 = 0 and D2 = 1 then Y1 Y0 = 10 irrespective of the other inputs.

## Block Diagram
{: .no_toc }

<div style="text-align:center"><img src="/assets/images/priorityencoder_blockdiagram.jpg" /></div>

## Truth Table

<div style="text-align:center"><img src="/assets/images/priorityencoder_truthtable.jpg" /></div>

## Logic Circuit

<div style="text-align:center"><img src="/assets/images/priorityencoder_logiccircuit.jpg" /></div>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/762" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
