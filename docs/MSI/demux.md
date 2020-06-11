---
layout: default
title: Demultiplexers
parent: MSI components
nav_order: 2
---

# Demultiplexers
{: .no_toc }

1. TOC
{:toc}

## Introduction

A demultiplexer performs the reverse operation of a multiplexer i.e. it receives one input and distributes it over several outputs. 
It has only one input, n outputs, m select input. 
At a time only one output line is selected by the select lines and the input is transmitted to the selected output line. 
A de-multiplexer is equivalent to a single pole multiple way switch as shown in fig.

## Demultiplexers in multiple variations.

### 1 : 2  demultiplexer
#### Block diagram

<div style="text-align:center"><img src="../../assets/images/one_twodemultiplexer_blockdiagram.jpg" /></div>


#### Truth table

<div style="text-align:center"><img src="../../assets/images/one_twodemultiplexer_truthtable.jpg" /></div>

<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/756" id="demux_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>


### 1 : 4  demultiplexer
<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44768" id="demux_02" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### 1 : 8  demultiplexer
<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44769" id="demux_03" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### 1 : 16 demultiplexer
A 1 : 16 demultiplexer can be implemented using **two** 1 : 8 demultiplexers.
<iframe width="100%" height="400px" src="https://circuitverse.org/simulator/embed/44796" id="demux_04" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>