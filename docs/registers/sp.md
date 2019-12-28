---
layout: default
title: Serial Input Parallel Output
comments: true
parent: Digital Registers
nav_order: 2
---

# Serial Input Parallel Output
{: .no_toc }




## Introduction
 
* In such types of operations, the data is entered serially and taken out in parallel fashion.

* Data is loaded bit by bit. The outputs are disabled as long as the data is loading.

* As soon as the data loading gets completed, all the flip-flops contain their required data, the outputs are enabled so that all the loaded data is made available over all the output lines at the same time.

* 4 clock cycles are required to load a four bit word. Hence the speed of operation of SIPO mode is same as that of SISO mode.


## Block Diagram


<div style="text-align:center"><img src="../../assets/images/sipo_blockdiagram.jpg" /></div>

