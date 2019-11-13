---
layout: default
title:  Finite State Machines
comments: true
nav_order: 17
---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Introduction
The most general model of a sequential circuit has inputs, outputs and internal states. A sequential circuit is referred to as a **finite state machine(FSM)**. A FSM is an abstract model that describes the synchronous sequential machine. Since in a sequential circuit, the output depends on the present input as well as on the past inputs,i.e, on the past histories and since a machine might have an infinite varieties of possible histories, it would need an infinite capacity for storing them. Since it's impossible to implement machines whihc have infinite storage capabilities, we consider only FSM. FSM are sequential circuits whose past history can affect their future behaviour in only a finite number of ways,i.e, they are machines with fixed number of states. These machines can distinguish among a finite number of classes of input histories. These classes of inputs are referred to as the **internal states** of the machines. Every FSM therefore contains a finite number of memory devices.
Depending on the type of output, it can be categorised into following types:


* FSM with output
  1. Mealy State Machine
  2. Moore State Machine
* FSM without output
   1. Deterministic Finite Automata
   2. Non-Deterministic Automata
   3. Epsilon-Non Deterministic Automata

Now, let us discuss about these state machines one by one.
# FSM with output
## Mealy State Machine
A Finite State Machine is said to be Mealy state machine, if outputs depend on present state of the flip flops and the inputs. 
The **block diagram** of Mealy state machine is shown in the following figure.

<div style="text-align:center"><img src="../assets/images/mealy_state_machine.jpg" /></div>

As shown in figure, there are two parts present in Mealy state machine -
* Combinational logic
* Memory

 Observe the figure and you'll realize that the changes in input during the clock pulse cannot affect the state of flip flop. However, they can affect the output of clock. Due to this, if the input variations are not synchronised with a clock, the derived output will also not be synchronised with the clock and we get false outputs. The false outputs can be eliminated by allowing input to change only at the active transition of the clock.


The **state diagram** of Mealy state machine is shown in the following figure.

<div style="text-align:center"><img src="../assets/images/state_diagram1.jpg" /></div>

In the above figure, there are three states, namely A, B & C. 
These states are labelled inside the circles & each circle corresponds to one state. 
Transitions between these states are represented with directed lines. Here, 0 / 0, 1 / 0 & 1 / 1 denotes **input / output**. 
In the above figure, there are two transitions from each state based on the value of input, x.

In general, the number of states required in Mealy state machine is less than or equal to the number of states required in Moore state machine. 
There is an equivalent Moore state machine for each Mealy state machine.

## Moore State Machine
A Finite State Machine is said to be Moore state machine, if outputs depend only on present states. The block diagram of Moore state machine is shown in the following figure.

<div style="text-align:center"><img src="../assets/images/moore_state_machine.jpg" /></div>

Similiar to Mealy machine, there are two parts present in Moore state machine -combinational logic and memory. But here the present inputs and present states determine the next states. So, based on next states, Moore state machine produces the outputs. Therefore, the outputs will be valid only after transition of the state.

The state diagram of Moore state machine is shown in the following figure.

<div style="text-align:center"><img src="../assets/images/state_diagram_of_moore_state_machine.jpg" /></div>

In the above figure, there are four states, namely A, B, C & D. These states and the respective outputs are labelled inside the circles. Here, only the input value is labeled on each transition. In the above figure, there are two transitions from each state based on the value of input, x.

In general, the number of states required in Moore state machine is more than or equal to the number of states required in Mealy state machine. There is an equivalent Mealy state machine for each Moore state machine. So, based on the requirement we can use one of them.



{% include disqus.html %}

# FSM without output
# Deterministic Finite Automata
Unlike Mealy and Moore machine, this type of FSM doesn't have memory and combinational logic.The finite automata are called deterministic finite automata if the machine can read one symbol from the input string at a time.
There is only one path for specific input from the current state to the next state. 
It does not accept the null move, i.e., the DFA cannot change state without any input character.
It can contain multiple final states. 

 The state diagram of DFA has following features:

1. They're represented by vertices.
2. Labelled with an input character.
3. The initial state is marked with an arrow.
4. The final state is denoted by a double circle.

A DFA is a collection of 5-tuples:
Q: finite set of states  
∑: finite set of the input symbol  
q0: initial state   
F: final state  
δ: Transition function

**Example**

Q = {q0, q1, q2}  
∑ = {0, 1}  
q0 = {q0}  
F = {q2}  

**Transition Diagram:**

<div style="text-align:center"><img src="../assets/images/dfa.png" /></div>


**Transition Table:**

| Present State | Next state for Input 0 | Next State of Input 1 |
| ------------- | -----------------------| --------------------- | 
| →q0            |q0                      | q1|
| q1 | q2 | q1|
| q2 | q2 | q2|

**Explanation:** In the above diagram, we can see that on given 1 as input to DFA in state q0 the DFA changes state to q1 and 
always go to itself on starting input 0. Similiarly, q1 goes to final state q2 on getting 0 as input and self-loops when input is 1. 
It can't accept any string which starts with 0, because it will never go to final state. Therefore, valid set of strings are 10, 100,1000..... and 101,1011,101111.... etc.

# Non Deterministic Finite Automata
NFA stands for non-deterministic finite automata. It is easy to construct an NFA than a DFA for a given regular language.
The finite automata are called NFA when there exist many paths for specific input from the current state to the next state.
Every NFA is not DFA, but each NFA can be translated into DFA.
NFA is defined in the same way as DFA but with the following two exceptions:
1. It contains multiple next states 
2. It contains ε transition.

NFA also has five states same as DFA, but with different transition function, as shown follows:

δ: Q x ∑ →2Q

where,

Q: finite set of states  
∑: finite set of the input symbol  
q0: initial state   
F: final state  
δ: Transition function 

**Example:**
Q = {q0, q1, q2}  
∑ = {0, 1}  
q0 = {q0}  
F = {q2}  

Transition Diagram:

<div style="text-align:center"><img src="../assets/images/nfa.png" /></div>

**Transition Table:**

| Present State | Next state for Input 0 | Next State of Input 1 |
| ------------- | -----------------------| --------------------- | 
| →q0           |q0, q1                  | q1|
| q1 | q2 | q0|
| q2 | q2 | q1, q2|


**Explanation:**

In the above diagram, we can see that when the current state is q0, on input 0, the next state will be q0 or q1, and on 1 input the next state will be q1. When the current state is q1, on input 0 the next state will be q2 and on 1 input, the next state will be q0. When the current state is q2, on 0 input the next state is q2, and on 1 input the next state will be q1 or q2.


# Epsilon NFA

 NFAs can be further extended by allowing
instantaneous (ε) transitions:
1. The automaton may be allowed to change its
state without reading the input symbol.
2. In diagrams, such transitions are depicted by
labeling the appropriate states with ε.
3. Note that this does not mean that ε has become
an input symbol. On the contrary, we assume
that the symbol ε does not belong to any
alphabet. 

# Limitations of FSM
**1. No infinite sequence:** Consider an infinite sequence such that the output is 1 when and only when the number of inputs recieved so far is equal to P(P+1)/2 for P=1,2,3,....,i.e, the desired input-output sequence has the following form:

Input:    x x x x x x x x x x x x x x x x x x x x x x x x 

Output:1 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 0 0 0 1 

Such an infinite sequence cannot be produced by a FSM.

**2. Limited Memory:** The FSM has a limited memory and due to this, it cannot produce certain outputs. Consider a binary multiplier circuit for multiplying two arbitrarily large binary numbers. If we implement this with a FSM capable of performing serial multiplication, we can find that it is not possible to multiply certain numbers. Such a limitation does occur due to the limited memory available to the machine.



