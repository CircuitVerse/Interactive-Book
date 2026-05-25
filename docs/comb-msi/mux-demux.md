---
layout: circuitverse
title: MUX/DEMUX
nav_order: l0s000
cvib_level: basic
parent: Combinational MSI
has_children: false
---


# Multiplexers and Demultiplexers
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}


## Multiplexers

## Introduction

Multiplexer is a special type of combinational circuit. 
There are n-data inputs, one output and m select inputs with 2<sup>m</sup> = n. 
It is a digital circuit which selects one of the n data inputs and routes it to the output. 
The selection of one of the n inputs is done by the selected inputs. Depending on the digital code applied at the selected inputs, one out of n data sources is selected and transmitted to the single output Y. 
E is called the strobe or enable input which is useful for the cascading. It is generally an active low terminal that means it will perform the required operation when it is low.


## Block diagram

{% include image.html url='/assets/images/n_onemultiplexer_blockdiagram.jpg' description='n : 1 Multiplexer' %}

## Multiplexers come in multiple variations
   
### 2 : 1 multiplexer
#### Truth Table
{: .no_toc }

`Enable(E) = 1`

|S1|Y(Output)|
|:-:|:-:|:-:|
|0|T1|
|1|T2|

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/746" id="mux_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### 4 : 1 multiplexer
The 4 : 1 multiplexer has 4 inputs and 2 control signals.

#### Truth Table
{: .no_toc }

`Enable(E) = 1`

|S1|S2|Y(Output)|
|:-:|:-:|:-:|
|0|0|T1|
|0|1|T2|
|1|0|T3|
|1|1|T4|

<iframe width="100%"  height="400px" src="https://circuitverse.org/simulator/embed/44747" id="mux_02" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### 8 : 1 multiplexer
The 8 : 1 multiplexer has 8 inputs and 3 control signals.

#### Truth Table
{: .no_toc }

`Enable(E) = 1`

| S1      | S2      | S3     | Y(Output)|
|:-------:|:-------:|:------:|:------:|
| 0       | 0       | 1      |T1       |
| 0       | 1       | 0      |T2       |
| 0       | 1       | 1      |T3      |
| 0       | 1       | 1      |T4      |
| 1       | 0       | 1      |T5      |
| 1       | 1       | 0      |T6      |
| 1       | 1       | 1      |T7      |
| 1       | 1       | 1      |T8      |

<iframe width="100%"  height="400px" src="https://circuitverse.org/simulator/embed/44766" id="mux_03" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

You can implement a 8 : 1 multiplexer by chaining **two** 4 : 1 multiplexers, like this:
<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44784" id="mux_04" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### 16 : 1 multiplexer
The 16 : 1 multiplexer has 16 inputs and 4 control signals.

It can be implemented with **two** 8 : 1 multiplexers:

#### Truth Table
{: .no_toc }

`Enable(E) = 1`

| A | B | C | D | Y(Output) |
|:-:|:-:|:-:|:-:|:-: |
| 0 | 0 | 0 | 0 | T1  |
| 0 | 0 | 0 | 1 | T2  |
| 0 | 0 | 1 | 0 | T3  |
| 0 | 0 | 1 | 1 | T4  |
| 0 | 1 | 0 | 0 | T5  |
| 0 | 1 | 0 | 1 | T6  |
| 0 | 1 | 1 | 0 | T7  |
| 0 | 1 | 1 | 1 | T8  |
| 1 | 0 | 0 | 0 | T9  |
| 1 | 0 | 0 | 1 | T10 |
| 1 | 0 | 1 | 0 | T11 |
| 1 | 0 | 1 | 1 | T12 |
| 1 | 1 | 0 | 0 | T13 |
| 1 | 1 | 0 | 1 | T14 |
| 1 | 1 | 1 | 0 | T15 |
| 1 | 1 | 1 | 1 | T16 |

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44795" id="mux_05" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

It can also be implemented with **five** 4 : 1 multiplexers:
<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44804" id="mux_06" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Applications of Multiplexers
- Transmission from the Computer System of a Satellite - Multiplexer is used to transmit the data signals from the computer system of a spacecraft or a satellite to the ground system by using a GSM satellite.

- Computer Memory - Multiplexers are used in computer memory to maintain a huge amount of memory in the computers, and also to reduce the number of copper lines required to connect the memory to other parts of the computer.

- Telephone Network - In telephone networks, multiple audio signals are integrated on a single line of transmission with the help of a multiplexer.


## Demultiplexers

## Introduction

A demultiplexer performs the reverse operation of a multiplexer i.e. it receives one input and distributes it over several outputs. 
It has only one input, n outputs, m select input. 
At a time only one output line is selected by the select lines and the input is transmitted to the selected output line. 
A de-multiplexer is equivalent to a single pole multiple way switch as shown in fig.

## Demultiplexers in multiple variations.

### 1 : 2  demultiplexer
#### Block diagram

{% include image.html url='/assets/images/one_twodemultiplexer_blockdiagram.jpg' description='1:2 Demultiplexer' %}


#### Truth table

{% include image.html url='/assets/images/one_twodemultiplexer_truthtable.jpg' description='1:2 Demultiplexer Truth Table' %}

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/756" id="demux_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


### 1 : 4  demultiplexer
<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44768" id="demux_02" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### 1 : 8  demultiplexer
<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44769" id="demux_03" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### 1 : 16 demultiplexer
A 1 : 16 demultiplexer can be implemented using **two** 1 : 8 demultiplexers.
<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44796" id="demux_04" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Applications of Demultiplexers
- Arithmetic Logic Unit - The output of the ALU is fed as an input to the De-multiplexer, and the output of the demultiplexer is connected to a multiple register. The output of the ALU can be stored in multiple registers.

- Serial to Parallel Converter - In this technique, serial data is given as an input to the De-multiplexer at a regular interval, and a counter is attached to the demultiplexer at the control input to detect the data signal at the output of the demultiplexer. When all data signals are stored, the output of the demux can be read out in parallel.

{:.quiz}

1. Which of the following directs data from input to a selected output line ?
   1. Demultiplexer
   * Multiplexer
   * Coder
   *  Both MUX & DEMUX

2. Which of the following logic block has a number of input lines and one single output line ?

   * Decoder
   1. Multiplexer
   * Demultiplexer
   * Encoder

3. How many selection line will be there if a multiplexer has 8 input lines ?

   * 1
   * 2
   1. 3
   * 4

4. How many output lines will be there in a demultiplexer if it has 3 selection lines ?

   1. 1
   * 2
   * 3
   * 4
