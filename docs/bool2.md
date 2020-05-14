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


Boolean algebra deals with Binary-Variables and Logical operations.
A **Boolean Function** is written as an **Algebric Expression** called a **Boolean Expression** which consists of Binary-Variables, the logic operation symbols, and also the constants: 0 and 1.
Consider the following example:
```yaml
Example:  

      F(A,B,C,D)     =     A + BC + !(ADC)
   Boolean Function      Boolean expression
```
Here **Y** represents the output in the left of the equation. So we can state:

```yaml 
          Y         =     A + BC + !(ADC)
   Boolean Function      Boolean expression
```
## Truth Table Formation
A truth table shows a table having all the combinations of the inputs and their corresponding results.

The switching equation can also be converted into a Truth Table. For example- Consider the switching equation: F(A,B,C) = A + BC.

| A       | B       | C      | F      |
|:-------:|:-------:|:------:|:------:|
| 0       | 0       | 1      |0       |
| 0       | 1       | 0      |0       |
| 0       | 1       | 1      |0       |
| 0       | 1       | 1      |1       |
| 1       | 0       | 1      |1       |
| 1       | 1       | 0      |1       |
| 1       | 1       | 1      |1       |
| 1       | 1       | 1      |1       |


## Sum of Product Expressions (SOP)
Let's take a look at an more complex expression `F(ABCD) = AB'C + BD + CD + D`. Let's generate the truth table:

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

In this example an interesting observation is that, We are doing a sum of product evaluation, that is, `AB'C+BD+CD+D` is a sum of products. The significance of sum of product is that when we are doing `+` we are in fact invoking the `OR` operator. 

Moreover, the `OR` operator returns `true` so long as any one of its arguements returns `true`. Therefore, if _any_ of the terms in the sum of product (SOP) expressions is `true`, then we know that the final expression is `true` for certain. 

## Example Algebraic Simplification

Let's simplify our expression from the previous truth table example. We can apply ordinary algebra tricks such as factoring. Remember that the `+` operator invokes the `OR` gate, and that `true or x` always returns `true` regardless of `x` (as shown in our first truth table).
```
AB'C+BD+CD+D // Initial expression
AB'C+BD+D(C+1) // Factor out a D
AB'C+BD+D // Since (C+1) is always true, as C OR true is always true
AB'C+D(B+1) // Factor out a D again
AB'C+D // Since (B+1) is always true, as B OR true is always true
=AB'C+D // Final expression
```

As an exercise to the reader, complete the truth table to show that they are logically equivalent. 

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

The following methods can be used to simplify the the Boolean function:

1. The Karnaugh-map or K-map method.
1. The NAND gate method.




{% include disqus.html %}

