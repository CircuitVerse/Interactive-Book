---
layout: circuitverse
title: FPGA
nav_order: l0s001
cvib_level: basic
parent: Sequential LSI
has_children: false
---


# Field-Programmable Gate Arrays
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}


## Introduction

In 1985, a new programmable hardware architecture evolved from the [PLDs]({% link docs/comb-lsi/plds.md %}), the *Field Programmable Gate Array* (FPGA) developed by Xilix Inc. See the IEEE Chip Hall of Fame entry on the [Xilinx XC2064 FPGA](https://spectrum.ieee.org/tech-history/silicon-revolution/chip-hall-of-fame-xilinx-xc2064-fpga) for some history about it.

An FPGA chip contains several *logic cells* which can be arbitrarily interconnected according to the programmed configuration.

Each logic cell holds a combinational element called Look-Up Table (LUT) and a D Flip-flop sequential element whose input is the LUT's output. The output of the logic cell can be either the LUT output or the D Flip-Flop output, which can be selected by means of a MUX.

By selecting the direct LUT output the cell acts as a "pure" combinational element. Otherwise, the cell acts as a synchronous sequential element.

The LUT usually has a few input bits (3 to 6 bits) and 1 bit output. It is usually implemented using a MUX to select the programmed output for a specific input combination.

FPGA also implement *input-output cells* (IO-cell) which also have a D Flip-flop which help synchronisation from

Check the interactive circuit below for examples of the logic-cell, the LUT and the IO-cell.

FPGAs allow a complex circuit design to be programmed and re-programmed on a single integrated circuit, much like programming a microprocessor, but provides a similar performance as if the circuit had been implemented with actual discrete components, unlike microprocessors which are several orders of magnitude slower than the equivalent FSM implemented using digital logic discrete components. In general, FSM designs implemented in FPGA are faster and use less power than the same FSM implemented in a microprocessor. However, the design process might be a bit harder since it requires the skills to design logic circuits and not just software programming skills.

The hardware configuration or programming is usually described using standardised languages known as *hardware description languages* or HDL. Two of the most common languages are Verilog and VHDL.

More information about FPGA can be found in the website [fpga4fun.com](https://www.fpga4fun.com/FPGAinfo1.html) by Jean P. Nicolle.

FPGA are so versatile than even full microprocessors can be implemented in them, although it might not be as cost effective as using microprocessor integrated circuits.


## Interactive FPGA example

<iframe width="600px" height="400px" 
	src="https://circuitverse.org/simulator/embed/fpga" 
	id="projectPreview" scrolling="no"
	webkitAllowFullScreen mozAllowFullScreen allowFullScreen>
</iframe>
