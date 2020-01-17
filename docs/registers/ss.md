---
layout: default
title: Serial Input Serial Output
parent: Digital Registers
nav_order: 1
---

# Serial Input Serial Output
{: .no_toc }


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Introduction
 
Let all the Flip-flops initially be at reset condition, i.e., Q0 = Q1 = Q2 = Q3 = 0. If the register has an input of a 4-bit binary number equal to 1111,then it should be applied to D-in, with the LSB(Least Signifiacnt Bit) applied first. In FF-3, the input(D3) is connected to the serial data input D-in. In FF-3, the output(Q3) is connected to next flip-flop's input(D2) and so on.

## Block Diagram


<div style="text-align:center"><img src="../../assets/images/siso_blockdiagram.jpg" /></div>

## Operation

Before the application of clock-signal, consider Q3 Q2 Q1 Q0 = 0000, then to D-in apply the LSB of the number. So, D-in = D3 = 1. Now, apply the clock, then FF-3 is set on the first falling clock edge, and the binary-data is stored in the register: Q3 Q2 Q1 Q0 = 1000, which is displayed in the below figure.

<div style="text-align:center"><img src="../../assets/images/siso_operation1.jpg" /></div>

The next bit is applied to D-in. So D-in = 1. FF-2 will set, on the next negative-edge of the clock, and the binary-data which is stored becomes Q3 Q2 Q1 Q0 = 1100, which is displayed in the below figure.

<div style="text-align:center"><img src="../../assets/images/siso_operation2.jpg" /></div>

The next bit to be stored, i.e., 1 is applied to D-in.Then the clock pulse is applied. When the third negative edge of the clock hits, then FF-1 will be set, and the output becomes Q3 Q2 Q1 Q0 = 1110.

<div style="text-align:center"><img src="../../assets/images/siso_operation3.jpg" /></div>

Similarly with D-in = 1, and the fourth negative edge of the clock arriving, the stored binary-data in the register becomes Q3 Q2 Q1 Q0 = 1111.

<div style="text-align:center"><img src="../../assets/images/siso_operation4.jpg" /></div>

## Truth Table
<div style="text-align:center"><img src="../../assets/images/siso_truthtable.jpg" /></div>

## Waveforms
<div style="text-align:center"><img src="../../assets/images/siso_waveform.jpg" /></div>

