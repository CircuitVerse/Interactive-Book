---
layout: default
title: Latches
nav_order: 15
has_children: true
permalink: /docs/Latches
---

# Latches
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Introduction

There are two types of memory elements based on the type of triggering that is suitable to operate it.

1. Latches
1. Flip-flops

Latches operate with enable signal, which is level sensitive. 
Whereas, flip-flops are edge sensitive. 
Let's discuss about flip-flops in next module. 
Latches are basic storage elements that operate with signal levels (rather than signal transitions). They are level-sensitive devices, that are useful for the design of the asynchronous sequential circuits. They, generally, have 2 inputs and 1 output pins. And the process where the output of the circuit depends on the previous state and the present input value(s) supplied, with the output value being constant (changing only for a particular condition in the input(s)), is referred to as latching.

## Differences between latches and flip-flops


| Latches       | Flip-flops     |
|:------------|:--------------|
| Level triggered | Edge triggered |
| Asynchronous device | Synchronous device |
| Doesn't contain clock signal | Contains a clock signal |
| It will change its state as long as it is enabled | It will change its state only during a given clock cycle |
| Consumes less power | Consumes more power |
| Faster | Slower |
| Examples: D-Latch, T-Latch | Examples: D-Flip flop, T-Flop flop |

## Sub-modules

Now, let us discuss about SR Latch, D Latch, JK Latch & T Latch one by one.

1. [SR latch](https://learn.circuitverse.org/docs/Latches/sr_latch.html)
2. [D latch](https://learn.circuitverse.org/docs/Latches/d_latch.html)
3. [JK latch](https://learn.circuitverse.org/docs/Latches/jk_latch.html)
4. [T latch](https://learn.circuitverse.org/docs/Latches/t_latch.html) 