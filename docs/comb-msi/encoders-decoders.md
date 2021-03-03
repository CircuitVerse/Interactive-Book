---
layout: circuitverse
title: Encoders/Decoders
nav_order: l0s001
cvib_level: basic
parent: Combinational MSI
has_children: false
---


# Encoders and Decoders
{: .no_toc}


## Table of contents
{: .no_toc}

1. TOC
{:toc}


## Encoder

## Introduction

Encoder is a combinational circuit which is designed to perform the inverse operation of the decoder. 
An encoder has n number of input lines and m number of output lines. An encoder produces an m bit binary code corresponding to the digital input number. 
The encoder accepts an n input digital word and converts it into an m bit another digital word.

## Block diagram

<div style="text-align:center"><img src="/assets/images/encoder_blockdiagram.jpg" /></div>

### Examples of encoders ::
   
 * Priority encoders
 * Decimal to BCD encoder
 * Octal to binary encoder
 * Hexadecimal to binary encoder

## Priority encoder

This is a special type of encoder. 
Priority is given to the input lines. 
If two or more input line are 1 at the same time, then the input line with highest priority will be considered. 
There are four input D0, D1, D2, D3 and two output Y0, Y1. 
Out of the four input D3 has the highest priority and D0 has the lowest priority. 
That means if D3 = 1 then Y1 Y1 = 11 irrespective of the other inputs. Similarly if D3 = 0 and D2 = 1 then Y1 Y0 = 10 irrespective of the other inputs.

## Block diagram

<div style="text-align:center"><img src="/assets/images/priorityencoder_blockdiagram.jpg" /></div>

### Truth table

<div style="text-align:center"><img src="/assets/images/priorityencoder_truthtable.jpg" /></div>

### Logic circuit

<div style="text-align:center"><img src="/assets/images/priorityencoder_logiccircuit.jpg" /></div>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/762" id="encoder_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Decimal to BCD encoder

The Decimal to Binary Encoder usually consists of 10 input lines and 4 output lines. The input is a number written in base 10 and the output is its corresponding equivalent binary coded decimal number (of 4 bits). 

## Octal to binary encoder

The Octal to Binary Encoder encoder usually consists of 8 inputs lines and 3 outputs lines. The input is a number written in base 8 and the output is its corresponding equivalent number in base 2.

## Hexadecimal to binary encoder

The Hexadecimal to Binary Encoder encoder usually consists of 16 inputs lines and 3 outputs lines. The input is a number written in base 16 and the output is its corresponding equivalent number in base 2.


## Decoder

## Introduction

A decoder is a combinational circuit. 
It has n input and to a maximum m = 2n outputs. 
Decoder is identical to a demultiplexer without any data input. 
It performs operations which are exactly opposite to those of an encoder.


## Block diagram

<div style="text-align:center"><img src="/assets/images/decoder_blockdiagram.jpg" /></div>

### Examples of decoders ::
   
 * Code converters
 * BCD to seven segment decoders
 * Nixie tube decoders
 * Relay actuator

## 2-to-4 line decoder

The block diagram of 2 to 4 line decoder is shown in the fig. 
A and B are the two inputs where D through D are the four outputs. 
Truth table explains the operations of a decoder. 
It shows that each output is 1 for only a specific combination of inputs.

## Block diagram

<div style="text-align:center"><img src="/assets/images/two_fourdecoder_blockdiagram.jpg" /></div>

## Truth table

<div style="text-align:center"><img src="/assets/images/two_fourdecoder_truthtable.jpg" /></div>

## Logic circuit

<div style="text-align:center"><img src="/assets/images/two_fourdecoder_logiccircuit.jpg" /></div>


<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/763" id="decoder_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
