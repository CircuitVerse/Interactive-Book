---
layout: default
title: Decoder
parent: MSI components
nav_order: 4
---

# Decoders
{: .no_toc }

1. TOC
{:toc}

## Introduction

A decoder is a combinational circuit. 
It has n input and to a maximum m = 2n outputs. 
Decoder is identical to a demultiplexer without any data input. 
It performs operations which are exactly opposite to those of an encoder.


## Block diagram

<div style="text-align:center"><img src="../../assets/images/decoder_blockdiagram.jpg" /></div>

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

<div style="text-align:center"><img src="../../assets/images/two_fourdecoder_blockdiagram.jpg" /></div>

## Truth table

<div style="text-align:center"><img src="../../assets/images/two_fourdecoder_truthtable.jpg" /></div>

## Logic circuit

<div style="text-align:center"><img src="../../assets/images/two_fourdecoder_logiccircuit.jpg" /></div>


<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/763" id="decoder_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>
