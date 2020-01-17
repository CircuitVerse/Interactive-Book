---
layout: default
title: Serial Input Parallel Output
parent: Digital Registers
nav_order: 2
---

# Serial Input Parallel Output
{: .no_toc }




## Introduction
 
* In Serial Input parrallel output as the name says- the data has a serial input, and the ouput is taken in a parallel fashion.

* The binary-data is loaded in a bit by bit mannner. The output is disabled till the data is being loaded.

* Till the data gets loaded completly, all the Flip-flops will be contained with the required binary-data, the outputs are enabled, so all of the loaded data is accessible all over the lines of output, at the same time.

* The 4 clock cycles are needed to load 4-bits of binary-data. Therfore, speed of the operation- Serial Input Parallel Output mode is same as Serial Input Serial Output mode.


## Block Diagram


<div style="text-align:center"><img src="../../assets/images/sipo_blockdiagram.jpg" /></div>

