---
layout: default
title: NOR gate method
comments: true
nav_order: 6
---

# NOR gate method to simplify boolean expressions
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

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



