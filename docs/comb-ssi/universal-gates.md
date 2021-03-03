---
layout: circuitverse
title: Universal gates
nav_order: l1s001
cvib_level: medium
parent: Combinational SSI
has_children: false
---


# Universal gates
{: .no_toc}


## Table of contents
{: .no_toc}

1. TOC
{:toc}

## Introduction

Universal gates are gates which can be used to implement all other gates.
This is useful as manufacturers only need to produce 1 type of universal gate to be able to use all other gates.

The universal gates are NOR and NAND.
This page will show you how to implement AND, OR and NOT gates using universal gates.
The AND, OR and NOT gates are basic gates that are commonly used and are very important.

## NOR gate
The NOR gate is the opposite of the OR gate. It is like an OR gate followed by a NOT gate.

### Implementing NOT gate
A NOT gate can be implemented by passing the same input into both inputs of the NOR gate.
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/45175" id="universal_gates_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### Implementing OR gate
An OR gate can be implemented by passing the output of NOR to the NOT gate implemented earlier.
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/45176" id="universal_gates_02" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### Implementing AND gate
Since the NOR gate outputs true only when both inputs are 0, an AND gate can be implemented by inverting the inputs to a NOR gate.
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/45177" id="universal_gates_03" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## NAND gate
The NAND gate is the opposite of the AND gate. It is like an AND gate followed by a NOT gate.

### Implementing NOT gate
Similarly to NOR, a NOT gate can also be implemented by joining the inputs of a NAND gate.
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/45178" id="universal_gates_04" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### Implementing OR gate
The only time the NAND gate output is 0 is when both inputs are 1. Therefore, by inverting the inputs of a NAND gate, an OR gate can be implemented.
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/45179" id="universal_gates_05" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

### Implementing AND gate
The AND gate is simply the output of a NAND gate inverted.
<iframe width="600px" height="400px" src="https://circuitverse.org/simulator/embed/45180" id="universal_gates_06" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen> </iframe>

## Introduction
[NAND Gates](https://learn.circuitverse.org/docs/universal_gates.html#nand-gate) are universal gates. By the virtue of functional completeness, NAND Gates can be used to fully represent a given boolean expression. This simplifies the expression such that only one standard gate is used throughout.  

## Functional completeness
Functional completeness is a property pertaining to boolean logic, which states that a functionally complete boolean operator can express all possible truth tables by representing itself in a boolean expression. That is, any given boolean expression can be completely represented by using the a functionally complete boolean operator. 

For example, NAND gates can be used to implement the [NOT gate](https://learn.circuitverse.org/docs/universal_gates.html#implementing-not-gate-1), the [OR gate](https://learn.circuitverse.org/docs/universal_gates.html#implementing-or-gate-1) and the [AND gate](https://learn.circuitverse.org/docs/universal_gates.html#implementing-and-gate-1). 

## Simplification
To simplify any given boolean expression, first find the __minimum__ number of NAND gates required. To do this, carry out the following steps. 

Let's find the minimum number of NAND gates required to simplify the logical expression:
```yaml
F(A, B, C, D) = AB' + C'D
```

### Step 1: Double negation
Since the NAND gate is a combination of a NOT gate and an AND gate, we first apply a double negation to the entire expression so that we are able to standardize it later on.

Adding a double negation does not alter the inherent value of the expression as a double negation always nullifies itself.

```yaml
F = (F')' = ((AB' + C'D)')'
```

### Step 2: Applying De Morgan's law
We first apply [De Morgan's Law](https://learn.circuitverse.org/docs/bool.html#de-morgans-law) to the innermost bracket, such that we preserve the outermost negation at the time of expressing the `F` as a NAND expression.

Thus, by applying De Morgan's Law:
```yaml
F = ((AB' + C'D)')'
  = ((AB')' . (C'D)')' 
```
The boolean expression is now standardized such that it can completely be represented by a NAND gate at every input level.

### Step 3: Construct the NAND circuit
Now that you have gotten the boolean expression to the required standard, you can implement it as a NAND circuit.

```yaml
F = (A NAND B') NAND (C' NAND D)
F = (A NAND (B NAND B)) NAND ((C NAND C) NAND D)
```
Notice that there are input elements that are present in the negative form, namely `B'` and `C'`. You can represent them by using the NAND gate in order to realise the [NOT gate](https://learn.circuitverse.org/docs/universal_gates.html#implementing-not-gate-1).

<iframe width="600px" height="300px" src="https://circuitverse.org/simulator/embed/93441" id="nand_gate_01" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen></iframe>

## Introduction
[NOR Gates](https://learn.circuitverse.org/docs/universal_gates.html#nor-gate) are universal gates. By the virtue of functional completeness, NOR Gates can be used to fully represent a given boolean expression. This simplifies the expression such that only one standard gate is used throughout.  

## Functional completeness
Functional completeness is a property pertaining to boolean logic, which states that a functionally complete boolean operator can express all possible truth tables by representing itself in a boolean expression. That is, any given boolean expression can be completely represented by using the a functionally complete boolean operator. 

For example, NOR gates can be used to implement the [NOT gate](https://learn.circuitverse.org/docs/universal_gates.html#implementing-not-gate), the [OR gate](https://learn.circuitverse.org/docs/universal_gates.html#implementing-or-gate) and the [AND gate](https://learn.circuitverse.org/docs/universal_gates.html#implementing-and-gate). 

## Simplification
To simplify any given boolean expression, first find the __minimum__ number of NOR gates required. To do this, carry out the following steps. 

Let's find the minimum number of NOR gates required to simplify the logical expression:
```yaml
F(A, B, C, D) = (A + B').(C' + D)
```

### Step 1: Double negation
Since the NOR gate is a combination of a NOT gate and an OR gate, we first apply a double negation to the entire expression so that we are able to standardize it later on.

Adding a double negation does not alter the inherent value of the expression as a double negation always nullifies itself.

```yaml
F = (F')' = (((A + B').(C' + D))')'
```

### Step 2: Applying De Morgan's law
We first apply [De Morgan's Law](https://learn.circuitverse.org/docs/bool.html#de-morgans-law) to the innermost bracket, such that we preserve the outermost negation at the time of expressing the `F` as a NOR expression.

Thus, by applying De Morgan's Law:
```yaml
F = (((A + B').(C' + D))')'
  = ((A + B')' + (C' + D)')' 
```
The boolean expression is now standardized such that it can completely be represented by a NOR gate at every input level.

### Step 3: Construct the NOR circuit
Now that you have gotten the boolean expression to the required standard, you can implement it as a NOR circuit.

```yaml
F = (A NOR B') NOR (C' NOR D)
F = (A NOR (B NOR B)) NOR ((C NOR C) NOR D)
```
Notice that there are input elements that are present in the negative form, namely `B'` and `C'`. You can represent them by using the NOR gate in order to realise the [NOT gate](https://learn.circuitverse.org/docs/universal_gates.html#implementing-not-gate).

<iframe width="600px" height="300px" src="https://circuitverse.org/simulator/embed/97663" id="projectPreview" scrolling="no" webkitAllowFullScreen mozAllowFullScreen allowFullScreen></iframe>
