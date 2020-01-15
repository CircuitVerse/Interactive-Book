---
layout: default
title: Boolean Function
comments: true
nav_order: 5
---

# Boolean Function
{: .no_toc }


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---



## Introduction


Boolean algebra deals with binary variables and logic operation.
A **Boolean Function** is described by an algebraic expression called **Boolean expression** formed with binary variables which can take the value 0 or 1 and the logic operation symbols. 
Consider the following example.
```yaml
Example:  

      F(A,B,C,D)     =     A + ABC + !(ADC)
   Boolean Function      Boolean expression
```
Here the left side of the equation represents the output **Y**. So we can state 

```yaml 
          Y         =     A + ABC + !(ADC)
   Boolean Function      Boolean expression
```
## Truth Table Formation
A truth table represents a table which contains all possible combinations of inputs and their corresponding result.

It is possible to convert a boolean equation into a truth table. For example, consider the following boolean equation.
```yaml 
      F(A,B,C)       =        A + BC
   Boolean Function      Boolean expression
```
It's truth table is given below.

| A       | B       | C      | F      |
|:-------:|:-------:|:------:|:------:|
| 0       | 0       | 0      |0       |
| 0       | 0       | 1      |0       |
| 0       | 1       | 0      |0       |
| 0       | 1       | 0      |1       |
| 1       | 0       | 0      |1       |
| 1       | 0       | 1      |1       |
| 1       | 1       | 0      |1       |
| 1       | 1       | 1      |1       |


## Sum of Product Expressions (SOP)
Let's consider a more complicated expression `F(ABCD)= AB'C+BD+CD+D` and let us make its truth table:

| F(AB'C+BD+CD+D)| A | B | C | D |
| :-----: |:-:|:-:|:-:|:-:|
| 0     | 0 | 0 | 0 | 0 |
| 1     | 0 | 0 | 0 | 1 |
| 0     | 0 | 0 | 1 | 0 |
| 1     | 0 | 0 | 1 | 1 |
| 0     | 0 | 1 | 0 | 0 |
| 1     | 0 | 1 | 0 | 1 |
| 0     | 0 | 1 | 1 | 0 |
| 1     | 0 | 1 | 1 | 1 |
| 0     | 1 | 0 | 0 | 0 |
| 1     | 1 | 0 | 0 | 1 |
| 0     | 1 | 0 | 1 | 0 |
| 1     | 1 | 0 | 1 | 1 |
| 1     | 1 | 1 | 0 | 0 |
| 1     | 1 | 1 | 0 | 1 |
| 0     | 1 | 1 | 1 | 0 |
| 1     | 1 | 1 | 1 | 1 |

This example was more complicated than the previous expressions. An interesting observation is that we are doing a sum of product evaluation, i.e, `AB'C+BD+CD+D` is a sum of products. When we are using `+`, we are invoking the OR operator.

Moreover, the `OR` operator returns `true` so when the any one of the terms in sum of product (SOP) returns `true`, then the final expression is `true` for certain. 

## Example Algebraic Simplification

Let us take the previous example for this purpose. In Algebraic simplification method, ordinary algebra tricks such as factoring is used. Remember that the `+` operator invokes the `OR` gate, and that `true OR x` always returns `true` regardless of `x` (as shown in our first truth table).
```
AB'C+BD+CD+D // Initial expression
AB'C+BD+D(C+1) // Factor out a D
AB'C+BD+D // Since (C+1) is always true, as C OR true is always true
AB'C+D(B+1) // Factor out a D again
AB'C+D // Since (B+1) is always true, as B OR true is always true
=AB'C+D // Final expression
```

As an exercise to the reader, make the truth tables of Initial expression and Final expression and prove that they are logically equivalent. 

## Undefined Input & Don't Cares
The definition of a "Don't care" is a combination of input values that is not known, and could be either `0` or `1`. For the purposes of variable simplification, we would choose the greedy approach of picking between {`0`, `1`} such that the simplified expression has less terms.

Let's consider the following truth-table:

| F(AB)| A | B |
| :----: |:-:| :-:|
| 1    | 0 | 0 |
| 1    | 0 | 1 |
| ?    | 1 | 0 |
| 1    | 1 | 1 |

We observe that we have a _Don't care_. Let's observe the differences in cases for `F(1,0)`:

```markdown
Case #1: F(1, 0) = 0
=> F(AB) = A'B' + A'B + AB

Case #2: F(1, 0) = 1
=> F(AB) = A'B' + A'B + AB' + AB

Simplifying the cases...
F(AB) = A'B' + A'B + AB
	  = A'(B' + B) + AB
	  = A' + AB
F(AB) = A'B' + A'B + AB' + AB
	  = A'(B' + B) + A (B' + B)
	  = A' + A
	  = 1
```

We can clearly see, if we set `F(1, 0) = 1`, we get a true value for any input. Therefore, for the purposes of variable simplification, we can simply let `F(1, 0) = 1` thus implying `F(AB) = 1`.


## Let us try this interactive truth table generator for better understanding

---

{% include truth_table.html %}


---

## Methods to simplify the boolean function

The methods used for simplifying the Boolean function are as follows −

1. Karnaugh-map or K-map
2. NAND gate method.
3. Algebraic Simplification



{% include disqus.html %}

