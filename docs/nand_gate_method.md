---
layout: default
title: NAND gate method
comments: true
nav_order: 5
---

# NAND gate method to simplify boolean expressions
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

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



