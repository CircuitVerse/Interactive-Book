---
layout: circuitverse
title: MSI based design
nav_order: l1s000
cvib_level: medium
parent: Sequential MSI
has_children: false
---


# MSI based design
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}


## Introduction

It is possible, specially for large systems, to use Medium Scale Integration components (counters, MUXs, DeMUXs, etc.) to design sequential systems

For systems with a large number of inputs, the state diagram looses its purpose and there is no standard method to design with a greater scale of integration.

The main idea is to use fixed architectures as building blocks and adapt the problem to these architectures.


## Mux based design

In this architecture, each state is represented by the output of a MUX. A memory element (D type flip-flop) is added to the MUX output.

The basic building block of this architecture is depicted in Fig. 1.

{% include image.html url="/assets/images/seq/mux-buildingblock.svg" description="Fig. 1: MUX + D flip-flop building block." %}

The selection lines $x\_1,\ldots,x\_n$ are connected to the system's inputs. The multiplexed inputs $C_0,\ldots,C_{2^n-1}$ are connected to the previous states (MUXs), and the output $F$ is connected to the next states (MUXs).

During operation there will be only one MUX with its output activated, the one representing the current state. When an input combination triggers the transition to the next state the output of the MUX representing that next state will become active and the previously active MUX output will deactivate.

For simplicity, we will consider a Moore FSM, however the system can be also configured for Mealy state machines adding the input conditions to the output decoder.

The following transition cases can be combined to form any Finite State Machine:

1.  Multiple previous states transitioning to a common next state for the same input word.
2.  No previous state for input combination $k$.
3.  Output bit associated to multiple states (Moore style machine).

The following are examples for each of these cases.


### Previous states for the same input word

States B and C will transit to next state A if the input $x=I_j$.

{% include image.html url="/assets/images/seq/mux-next-state.svg" description="Previous states for the same input word." %}


### No previous state for a given input word

State D has no previous state for input combination $x=I_k$.

{% include image.html url="/assets/images/seq/mux-noprev-state.svg" description="No previous state for a given input word." %}


### Output bit set by multiple states

If output function $z$ is active for states A, B or C, then the output decoder is simply:

{% include image.html url="/assets/images/seq/mux-output.svg" description="Output associated to multiple states." %}
