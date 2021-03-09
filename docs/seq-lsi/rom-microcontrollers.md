---
layout: circuitverse
title: ROM-based µcontrollers
nav_order: l0s000
cvib_level: basic
parent: Sequential LSI
has_children: false
---


# ROM-based µcontrollers
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}


## Introduction

ROM-based µcontrollers take the simple approach of implementing the combinational logic block of any sequential circuit (both the next state decoder and the output decoder) in a ROM circuit, while latches and counters can be used to make a more efficient use of the ROM capacity. In some cases, additional combinational MUX components are used for the same reason.

The following are examples of different ROM-based µcontrollers


## General purpose ROM-based µcontroller

A general purpose ROM-based µcontroller can be implemented as depicted in the block diagram below:

![General purpose ROM-based microcontroller](/assets/images/seq/rom_general.svg)

Both, the output decoder and the next-state decoder are implemented in the ROM.

The number of address bits for the ROM must be greater than or equal to the sum of the number of input bits $M$ and the number of state variables $N$s. The size of the output word must be greater than or equal to the sum of the number of outputs html:\(K\)@@ and the number of state variables.

ROM capacity: $2^{(M+N)}\times (K+N)$


## Counter based µcontroller

When the FSM corresponds to a simple sequence of states (without branches), a counter can be used to represent the state. The counter output (or state code) selects the corresponding output word from the ROM (A in the figure below). At the same time, part of the bits stored in the ROM (B in the figure) are used to select (via the MUX) the input associated which can produce the state transition for the current state.

![Counter based microcontroller](/assets/images/seq/rom_counter.svg)

ROM capacity: $2^N \times (K+\log_2 M)$


## Preset counter based µcontroller

If the FSM is mostly a simple sequence of state, but there are a few "jumps" to states out of the sequence, the previous circuit can be extended to store the address of the state which is out of the sequence and load it through the preset lines of the counter.

![Preset counter based microcontroller](/assets/images/seq/rom_preset_counter.svg)

ROM capacity: $2^N \times (N+K+\log_2 M)$


## MUX based µcontroller

For FSM which do not exhibit a simple sequence of states, the counter can be replaced by a MUX and the next state addresses must be stored in the ROM.

![MUX based microcontroller](/assets/images/seq/rom_mux.svg)

ROM capacity: $2^N \times (2N+K+\log_2 M)$
