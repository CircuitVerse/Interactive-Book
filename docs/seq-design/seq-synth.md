---
layout: circuitverse
title: Sequential synthesis
nav_order: l0s002
cvib_level: basic
parent: Sequential Design
has_children: false
---


# Sequential synthesis
{: .no_toc}


## Table of contents
{: .no_toc}

1. TOC
{:toc}

---


## Introduction

As presented in section [FSM]({% link docs/seq-design/fsm.md %}) any sequential circuit can be modelled using Finite State Machines (FSM) or, viceversa, any FSM can be implemented in a sequential circuit.

The process to obtain such a circuit from its functional description or model is referred to as *sequential synthesis*.


## Sequential synthesis process

Every sequential circuit can also be represented by the following general model:

![Sequential Circuit General Model](/assets/images/seq/seq-general-model.svg)

The first step in the synthesis process is to state the *functional description* of the system in terms of a FSM. The state machine can be formally represented by state diagrams or state tables.

The number of state variables $(r)$ is directly related to the number of states which can represented by those state variables $(2^r)$. Also, the number of components or their size is related to the number of state variables. On the other hand, the devised FSM might contain redundant states. Therefore, in order to obtain an optimal circuit (in terms of the number of components and number of feedback connections) it is desirable to reduce the number of states by eliminating unnecesary ones. This is the second step in the process.

To represent the state with the binary state variables, a binary code must be asigned to each state. A careful selection of the state codes can help in a later stage to minimise the number of components in the combinational logic block.

The memory block can be implemented using any of the basic sequential building blocks (latches or flip-flops) or even simple delay lines. Once the type of memory components is decided, it is possible to declare the truth table for the combinational logic block whose inputs are the (external) inputs of the system and the state variables (or internal inputs), while the outputs correspond to the (external) outputs as well as the excitation variables, which will produce the next state by means of the memory block.

Finding the optimal combinational logic circuit is the final step in the process.


## Interactive example


### Functional description

@startmermaid
stateDiagram-v2
    [*] --> (a)
    (a) --> (b): CP
    (a) --> (a): not(CP)
    (b) --> (c): not(CP)
    (b) --> (b): CP
    (c) --> (d): S=
    (c) --> (f): S>
    (c) --> (a): S<
    (d) --> (e): PDR
    (d) --> (d): not(PDR)
    state "(d)" as (d)
    (d): DP
    (e) --> (a)
    state "(e)" as (e)
    (e): CA
    state "(f)" as (f)
    (f): RN
    (f) --> (g): CR
    (f) --> (f): not(CR)
    state "(g)" as (g)
    (g): DA
    (g) --> (c)
@endmermaid


### State asignment

|    |:AB:             |||
| c  | 00 | 01 | 11 | 10 |
|:--:|:--:|:--:|:--:|:--:|
| 0  | a  |$\phi$| d| f  |
| 1  | b  | c  | e  | g  |


### Combinational synthesis

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/vending_machine_ssi" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen></iframe>
