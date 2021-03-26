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
{: .no_toc .text-delta}

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

To represent the state with the binary state variables, a binary code must be assigned to each state. A careful selection of the state codes can help in a later stage to minimise the number of components in the combinational logic block.

The memory block can be implemented using any of the basic sequential building blocks (latches or flip-flops) or even simple delay lines. Once the type of memory components is decided, it is possible to declare the truth table for the combinational logic block whose inputs are the (external) inputs of the system and the state variables (or internal inputs), while the outputs correspond to the (external) outputs as well as the excitation variables, which will produce the next state by means of the memory block.

Finding the optimal combinational logic circuit is the final step in the process.


## Interactive example

A typical example of a complex synchronous sequential system is the system controller of a vending machine.


### Functional description

Let's consider the following simplified block diagram representing the vending machine:

![Vending Machine Block Diagram](/assets/images/seq/vm_blocks.svg)

The digital system controller has to interact with the three devices:

-   Coin Receiver
-   Coin Return
-   Pop Drop

The *coin receiver* has four (4) output signals which will be inputs for the system controller and two (2) signals in the other direction:

-   **CP:** (*Coin Present*) output signal becomes **high** (or true) when a coin is inserted and being processed and goes back to **low** value when it finishes processing the coin.
-   **S<:** (*Total amount is less than product's price*) output signal becomes high if the amount of deposited coins is less than the product's price.
-   **S=:** (*Total amount is equal to the product's price*) output signal becomes high if the deposited amount is equal to the product's price.
-   **S>:** (*Total amount is greater than product's price*) output signal becomes high if the amount exceeds the product's price.
-   **DA:** (*Decrement Accumulator*) signal from the controller instructs the coin receiver to subtract the amount returned by the *coin return* device from the total sum and update the **Sx** signals.
-   **CA:** (*Clear Accumulator*) signal from the controller tells the coin receiver to clear the total amount.

The *coin return* device has two (2) signal connected to the system controller one on each direction:

-   **RN:** (*Return Nickel*) signal to the device triggers the return of a change (as long as **S>** is high).
-   **CR:** (*Changer Ready*) signal from the device indicates the controller that the it has finished returning a coin.

The *pop drop* device has also two (2) signals connected to the system controller one on each direction:

-   **DP:** (*Drop Pop*) signal from the controller instructs the device to start the process of delivering the product.
-   **PDR:** (*Pop Drop Ready*) signal to the controller informs when the product has been delivered.

The Finite State Machine (FSM) which models the process can be described by the following state diagram (note that the state codes have already been assigned, see the explanation in [State assignment](#state-assignment):

![Vending Machine FSM](/assets/images/seq/vm_fsm.svg)

The initial state (a) waits a for a coin to be inserted, when that happens the machine transitions to state (b) and waits until the coin is processed by the *coin receiver* and then moves to state (c). In state (c) the total amount is checked: if it is still not enough it goes back to state (a) to wait for more coins to be inserted. If it is equal to the price of the product the machine gets to state (d) which triggers signal **DP** to release the product and waits until de *pop drop* device informs the process is finished by asserting the **PDR** signal. At this moment, the machine state becomes (e) which sends the **CA** signal to clear the total sum in the *coin receiver* and then goes back to the initial state (a). On the other hand, while at state (c), if total amount is greater than the price then the machine enters state (f) which sets signal **RN** to high in order to tell the *coin return* to return a fixed amount. When it is done, the *coin return* responds by sending a true value back to the controller using signal **CR**. When this happens the machine moves on to state (g) which activates signal **DA** to the *coin receiver* to update the total amount and changes back to state (c) to check the new amount.


### State assignment

Given the FSM state diagram the following conditions regarding state codes should be considered:

-   (a) should be adjacent to (b)
-   (b) should be adjacent to (c)
-   (d) should be adjacent to (e)
-   (f) should be adjacent to (g)

The following state map takes all considerations into account:

|    |:AB:            ||||
| C  | 00 | 01 | 11 | 10 |
|:--:|:--:|:--:|:--:|:--:|
| 0  | a  |$\phi$| d| f  |
| 1  | b  | c  | e  | g  |


### Combinational synthesis

Given the state codes the output decoder can be represented by the following map:

|    |:AB:            ||||
| C  | 00 | 01 | 11 | 10 |
|:--:|:--:|:--:|:--:|:--:|
| 0  |    |    | DP | RN |
| 1  |    |    | CA | DA |

By selecting JK Flip-flops as the memory elements the following maps represent the next state decoder:

|$J_A$|:AB:                    ||||
| C   | 00   | 01   | 11   | 10   |
|:---:|:----:|:----:|:----:|:----:|
| 0   | 0    |$\phi$|$\phi$|$\phi$|
| 1   | 0    |S=+S> |$\phi$|$\phi$|

$J_A = B(\text{S= + S>})$

|$K_A$|:AB:                    ||||
| C   | 00   | 01   | 11   | 10   |
|:---:|:----:|:----:|:----:|:----:|
| 0   |$\phi$|$\phi$| 0    | 0    |
| 1   |$\phi$|$\phi$| 1    | 1    |

$K_A = C$

|$J_B$|:AB:                    ||||
| c   | 00   | 01   | 11   | 10   |
|:---:|:----:|:----:|:----:|:----:|
| 0   | 0    |$\phi$|$\phi$| 0    |
| 1   |$\overline{CP}$|$\phi$|$\phi$| 1    |

$J_B = C(\overline{CP})+ AC$

|$K_B$|:AB:                    ||||
| C   | 00   | 01   | 11   | 10   |
|:---:|:----:|:----:|:----:|:----:|
| 0   |$\phi$|$\phi$| 0    |$\phi$|
| 1   |$\phi$|$\overline{\text{S=}}$| 1    |$\phi$|

$K_B = C(\overline{\text{S=}}) + AC$

|$J_C$|:AB:                    ||||
| C   | 00   | 01   | 11   | 10   |
|:---:|:----:|:----:|:----:|:----:|
| 0   | CP   |$\phi$| PDR  | CR   |
| 1   |$\phi$|$\phi$|$\phi$|$\phi$|

$J_C = A(CP) + B(PDR) + A\overline{B}(CR)$

|$K_C$|:AB:                    ||||
| C   | 00   | 01   | 11   | 10   |
|:---:|:----:|:----:|:----:|:----:|
| 0   |$\phi$|$\phi$|$\phi$|$\phi$|
| 1   | 0    | 1    | 1    | 0    |

$K_C = B$

The circuit which implements such a machine is the following:

<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/vending_machine_ssi" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen></iframe>
