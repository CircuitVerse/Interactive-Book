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

Boolean Functions are comprised of two components i.e., Variables and Logic operations(AND, OR, NOT...etc). Any equation with the mixture of these two components forms a Boolean function. The value of variables may or may not be pre-defined. The shorthand notation for a boolean function is that it is represented with a capital F followed by parenthesis comprising of all variables of that equation separated by comma(','). You can represent any boolean expression in form of a Truth Table. Follow up to know How?
Consider the following example:
```yaml
Example:
	 Shorthand notation representing the boolean expression
	/
	F(A,B) = A + B	//This is a boolean function comprising of variables A and B

	F(A, B, C) = A(B + C(A + B))
					   \
					   	Boolean Expression
```

## Truth Table Formation

Truth Table is formed by evaluating the Boolean expression for each and every truth value of a variable. Now truth values of a variable are either 'true' or 'false'. The main point is to evaluate the value of Boolean expression for each and every combination of the Truth values of 
variables present. Suppose there is only one variable implies it can hold either 'true' or 'false' but, when we have two variables then we can have a combination of {TT, TF, FT, FF}(T -> True, F -> False). Implies we need to evaluate the value of expression for each and every Truth value of a variable.
The above implications bring us to a conclusion that there can be 2^(number of variables) number of combination for a single boolean expression. Follow up the examples below to learn how to map those values.

```yaml
Example:
F(A,B) = A + B
```
Truth Table::

|A|B|F(A,B)|
|0|0|0|
|0|1|1|
|1|0|1|
|1|1|1|

```yaml
Here we have 4 combinations for 2 variables, try to grasp the next example where variables are 3 which 
implies 8 combinations. Make a note of how Truth values of a variable are written under each column for 
every variable.
Example:
F(A,B,C) = A + B.C
```

|A|B|C|F(A,B,C)|
|0|0|1|0|
|0|1|0|0|
|0|1|1|0|
|0|1|1|1|
|1|0|1|1|
|1|1|0|1|
|1|1|1|1|
|1|1|1|1|

## Sum of Product(SOP)

This is also known as 'Sum of minterms'. The name brings us to a conclusion that minterms are product terms which are submissioned and known as SOP expression. A boolean expression in which the whole is represented as 'Sum' of 'Products'. Suppose A.B + C.D this can be considered as the most basic example to explain to what SOP is i.e., the expression is submissioned some sub-expressions which are in product form. The Truth table of a SOP expression is given below.

```yaml
Example:
F(A,B,C,D) = AB'C + BD + CD + D
```

|A|B|C|D|F(A,B,C,D)|
|0|0|0|0|0|
|0|0|0|1|1|
|0|0|1|0|0|
|0|0|1|1|1|
|0|1|0|0|0|
|0|1|0|1|1|
|0|1|1|0|0|
|0|1|1|1|1|
|1|0|0|0|0|
|1|0|0|1|1|
|1|0|1|0|1|
|1|0|1|1|1|
|1|1|0|0|0|
|1|1|0|1|1|
|1|1|1|0|0|
|1|1|1|1|1|

Here, the `OR` operator returns `true` so long as any one of its arguements returns `true`. Therefore, if _any_ of the terms in the sum of product (SOP) expressions is `true`, then we know that the final expression is `true` for certain.

## Product of Sum(POS)

This is also known as 'Product of maxterms'. The maxterm here are variables with 'OR' applied to them supposedly (A + B) is a maxterm. Therefore, POS is a combination of these maxterm with 'AND' gate applied to all of the maxterms. Refer to the example below to understand what a POS expression look-like.

```yaml
Example:
F(A,B,C) = (A + B + C)' . (A + B' + C) . (A' + B + C)
```

## Algebraic Simplification

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

|A|B|F(A,B)|
|0|0|1|
|0|1|1|
|1|0|?|
|1|1|1|

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

## Try the interactive Truth Table generator

---

{% include truth_table.html %}

---

## Methods to simplify the boolean function

The following methods can be used to simplify the the Boolean function:

1. The [Karnaugh-map](https://learn.circuitverse.org/docs/maps.html) or K-map method.
1. The NAND gate method.


{% include disqus.html %}

