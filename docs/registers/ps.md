---
layout: default
title: Parallel Input Serial Output 
parent: Digital Registers
nav_order: 3
---

# Parallel Input Serial Output 
{: .no_toc }




<div class="main-sub-heading" markdown="1">
## Introduction
{: .d-inline-block}
{% include button.html %}
</div>

 
* Data bits are entered in parallel fashion.

* The circuit shown below is a four bit parallel input serial output register.

* Output of previous Flip Flop is connected to the input of the next one via a combinational circuit.

* The binary input word B0, B1, B2, B3 is applied though the same combinational circuit.

* There are two modes in which this circuit can work namely - shift mode or load mode.

<div class="main-sub-heading" markdown="1">
## Load mode
{: .d-inline-block}
{% include button.html %}
</div>
When the shift/load bar line is low (0), the AND gate 2, 4 and 6 become active they will pass B1, B2, B3 bits to the corresponding flip-flops. 
On the low going edge of clock, the binary input B0, B1, B2, B3 will get loaded into the corresponding flip-flops. 
Thus parallel loading takes place.

<div class="main-sub-heading" markdown="1">
## Shift mode
{: .d-inline-block}
{% include button.html %}
</div>
When the shift/load bar line is low (1), the AND gate 2, 4 and 6 become inactive. 
Hence the parallel loading of the data becomes impossible. 
But the AND gate 1,3 and 5 become active. 
Therefore the shifting of data from left to right bit by bit on application of clock pulses. 
Thus the parallel in serial out operation takes place.

<div class="main-sub-heading" markdown="1">
## Block Diagram
{: .d-inline-block}
{% include button.html %}
</div>


<div style="text-align:center"><img src="../../assets/images/piso_blockdiagram.jpg" /></div>

