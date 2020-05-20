---
layout: default
title: Latches
comments: true
nav_order: 12
has_children: true
permalink: /docs/Latches
---

# Latches
{: .no_toc }

There are two types of memory elements based on the type of triggering that is suitable to operate it.

* Latches
* Flip-flops

Latches operate with enable signal, which is level sensitive. 
Whereas, flip-flops are edge sensitive. 
We will discuss about flip-flops in next module. 
Latches are basic storage elements that operate with signal levels (rather than signal transitions). Latches controlled by a clock transition are flip-flops. Latches are level-sensitive devices. Latches are useful for the design of the asynchronous sequential circuit.

## Differences between Latches and Flip-Flops


| Latches       | Flip-Flops     |
|:------------|:--------------|
| Level triggered | Edge triggered |
| Asynchronous device | Synchronous device |
| Doesn't contain clock signal | Contains a clock signal |
| It will change its state as long as it is enabled | It will change its state only during a given clock cycle |
| Consumes less power | Consumes more power |
| Faster | Slower |
| Examples: D-Latch, T-Latch | Examples: D-Flip flop, T-Flop flop |

Now, let us discuss about SR Latch, D Latch, JK Latch & T Latch one by one.
