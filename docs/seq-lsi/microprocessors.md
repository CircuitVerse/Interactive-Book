---
layout: circuitverse
title: Microprocessors
nav_order: l0s002
cvib_level: basic
parent: Sequential LSI
has_children: false
---


# Microprocessors
{: .no_toc}


## Table of contents
{: .no_toc}

1. TOC
{:toc}


## Introduction

Microprocessors are general purpose rom-based sequential circuits with a fixed *architecture*. This means the digital logic hardware has previously been designed and optimised. Usually a *generic* FSM has alredy been implemented in the ROM. The circuit is designed to control an *Arithmetic-Logic Unit* (ALU) for data processing and to access external memories where data and *software* is stored. The internal FSM executes sequences of instructions as indicated by the *software* in the program memory. The particular FSM that the user wants to implement in the circuit is programmed in the software.

Other combinational and sequential components, such as MUXs, registers and counters are also part of the microprocessor to provide the functionality required by the software, to optimise its execution and to connect to other external components.

One of the first "single-chip" microprocessors is the Intel 4004. Read more about it and other interesting microprocessors and their history in the [IEEE Chip Hall of Fame](https://spectrum.ieee.org/static/chip-hall-of-fame) and the website [Great Microprocessors of the Past and Present](http://www.cpushack.com/CPU/cpu.html) at the CPUSHACK museum.
