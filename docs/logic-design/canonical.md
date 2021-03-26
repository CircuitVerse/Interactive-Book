---
layout: circuitverse
title: Canonical functions
nav_order: l1s000
cvib_level: medium
parent: Logic Design
has_children: false
---


# Canonical functions
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}

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

## Truth table formation

Truth Table is formed by evaluating the Boolean expression for each and every truth value of a variable. Now truth values of a variable are either 'true' or 'false'. The main point is to evaluate the value of Boolean expression for each and every combination of the Truth values of 
variables present. Suppose there is only one variable, it implies that it can hold either 'true' or 'false' but, when there are two variables then you can have a combination of {TT, TF, FT, FF}(T -> True, F -> False). Implies you need to evaluate the value of expression for each and every Truth value of a variable.
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
Here you have 4 combinations for 2 variables, try to grasp the next example where variables are 3 which 
implies 8 combinations. Make a note of how Truth values of a variable are written under each column for 
every variable.
Example:
F(A,B,C) = A + B.C
```
## Truth table formation
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


## Sum of product expressions (SOP)
Let's take a look at an more complex expression `F(A, B, C, D) = AB'C + BD + CD + D`. Let's generate the truth table:

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
| 1     | 1 | 0 | 1 | 0 |
| 1     | 1 | 0 | 1 | 1 |
| 0     | 1 | 1 | 0 | 0 |
| 1     | 1 | 1 | 0 | 1 |
| 0     | 1 | 1 | 1 | 0 |
| 1     | 1 | 1 | 1 | 1 |

In this example an interesting observation is that, you are doing a sum of product evaluation, that is, `AB'C + BD + CD + D` is a sum of products. The significance of sum of product is that when you are doing `+`, you are in fact invoking the `OR` operator. 

Moreover, the `OR` operator returns `true` so long as any one of its arguments returns `true`. Therefore, if _any_ of the terms in the sum of product (SOP) expressions is `true`, then you know that the final expression is `true` for certain. 

## Product of sum expressions (POS)
Let's take a look at another expression `F(A, B, C, D) = (A + B + C + D')(A + B' + C' + D)(A' + B' + C + D')`. Let's generate the truth table:

| F(A,B,C,D)| A | B | C | D |
| :-----: |:-:|:-:|:-:|:-:|
| 1     | 0 | 0 | 0 | 0 |
| 0     | 0 | 0 | 0 | 1 |
| 1     | 0 | 0 | 1 | 0 |
| 1     | 0 | 0 | 1 | 1 |
| 1     | 0 | 1 | 0 | 0 |
| 1     | 0 | 1 | 0 | 1 |
| 1     | 0 | 1 | 1 | 0 |
| 1     | 0 | 1 | 1 | 1 |
| 1     | 1 | 0 | 0 | 0 |
| 0     | 1 | 0 | 0 | 1 |
| 1     | 1 | 0 | 1 | 0 |
| 1     | 1 | 0 | 1 | 1 |
| 1     | 1 | 1 | 0 | 0 |
| 1     | 1 | 1 | 0 | 1 |
| 1     | 1 | 1 | 1 | 0 |
| 1     | 1 | 1 | 1 | 1 |

Judging by the algebraic expression, it is evident that the expression is a _product_ of _sums_. Such an expression is called a __Product of Sum__ expression or __POS__ in short. 

Here the sum terms are defined by using the __OR__ operation and the product term is defined by using __AND__ operation. When two or more sum terms are multiplied by a Boolean __OR__ operation, the resultant output expression will be in the form of product-of-sums form or __POS__ form.

The product-of-sums form is also called as <u>Conjunctive Normal Form</u> as the sum terms are *AND*ed together and Conjunction operation is logical AND. Product-of-sums form is also called as Standard POS.

## Canonical expressions

Before understanding Canonical Expressions, let us understand __Minterms__ and __Maxterms__ first.

___

### Minterms

A minterm is defined as the product term of n variables, in which each of the n variables will appear once either in its complemented or un-complemented form. The min term is denoted as mi where i is in the range of 0 ≤ i < 2<sup>n</sup>.

For a 2-variable (x and y) Boolean function, the possible minterms are:

`x’y’, x’y, xy’ and xy`.

For a 3-variable (x, y and z) Boolean function, the possible minterms are:

`x’y’z’, x’y’z, x’yz’, x’yz, xy’z’, xy’z, xyz’ and xyz.`

1 – Minterms = minterms for which the function F = 1.
0 – Minterms = minterms for which the function F = 0.
Any Boolean function can be expressed as the sum (OR) of its 1- min terms. The representation of the equation will be

`F(list of variables) = Σ(list of 1-min term indices)`

Ex: `F(x, y, z) = Σ(3, 5, 6, 7)`

The inverse of the function can be expressed as a sum (OR) of its 0- min terms. The representation of the equation will be

`F(list of variables) = Σ(list of 0-min term indices)`
Ex: `F’(x, y, z) = Σ(0, 1, 2, 4)`

Examples of canonical form of sum of products expressions (min term canonical form):

1. `Z = XY + XZ′`

2. `F = XYZ′ + X′YZ + X′YZ′ + XY′Z + XYZ`

In standard SOP form, the maximum possible product terms for n number of variables are given by 2<sup>n</sup>. So, for 2 variable equations, the product terms are 2<sup>2</sup> = 4. Similarly, for 3 variable equations, the product terms are 2<sup>3</sup> = 8.

### Maxterms

A max term is defined as the product of n variables, within the range of 0 ≤ i < 2<sup>n</sup>. The max term is denoted as Mi. In max term, each variable is **complemented**, if its value is assigned to 1, and each variable is **un-complemented** if its value is assigned to 0.

For a 2-variable (x and y) Boolean function, the possible max terms are:
```yml
x + y, x + y’, x’ + y and x’ + y’
```
For a 3-variable (x, y and z) Boolean function, the possible maxterms are:
```yml
x + y + z, x + y + z’, x + y’ + z, x + y’ + z’, x’ + y + z, x’ + y + z’, x’ + y’ + z and x’ + y’ + z’
```
1 – Max terms = max terms for which the function F = 1.

0 – max terms = max terms for which the function F = 0.

Any Boolean function can be expressed the product (AND) of its 0 – max terms. The representation of the equation will be

`F(list of variables) = Π (list of 0-max term indices)`

Ex: `F(x, y, z) = Π(0, 1, 2, 4)`

The inverse of the function can be expressed as a product (AND) of its 1 – max terms. The representation of the equation will be

`F(list of variables) = Π(list of 1-max term indices)`

Ex: `F’(x, y, z) = Π(3, 5, 6, 7)`

Examples of canonical form of product of sums expressions (max term canonical form):
```yml
1. Z = (X + Y).(X + Y′)

2. F = (X′ + Y + Z′).(X′ + Y + Z).(X′ + Y′ + Z′)
```
In standard **POS** form, the maximum possible sum terms for n number of variables are given by 2<sup>n</sup>. So, for 2 variable equations, the sum terms are 2<sup>2</sup> = 4. Similarly, for 3 variable equations, the sum terms are 2<sup>3</sup> = 8.

___

Having understood minterms and maxterms, you are now in a position to understand canonical forms.

Any Boolean function that is expressed as a sum of minterms or as a product of maxterms is said to be in its __canonical form__.

When the SOP form of a Boolean expression is in canonical form, then each of its product term is called __minterm__. So, the canonical form of sum of products function is also known as __minterm canonical form__ or Sum-of-minterms or standard canonical SOP form.

Similarly, when the POS form of a Boolean expression is in canonical form, then each of its sum term is called __maxterm__. So, the canonical form of product of sums function is also known as __maxterm canonical form__ or Product-of sum or standard canonical POS form.

## Conversion of canonical forms

You can represent the one canonical formed equation in other canonical form i.e. you can represent the SOP form of equation in POS form and POS form equation in SOP form. To convert the canonical equations, you interchange the Σ and Π symbols after listing out the index numbers of the equations, which are excluded from the original form of equation.

The important thing to remember about Boolean functions is that, **the SOP and POS forms are Duals to each other**. There are 2 steps to follow to convert the canonical form of the equations. They are:- 

1. Interchanging the operational symbols, Σ and Π in the equation.

2. Use the **De Morgan’s principle of Duality** to the index numbers of the Boolean function or writing the indexes of the terms that are not presented in the given form of equation.

For Example:-

The SOP function `F(A, B, C) = ∑(0, 2, 3, 5, 7) = A’B’C’ + AB’C’ + AB’C + ABC’ + ABC`  is written in POS form by

1. changing the operational sign to Π

2. writing the missing indexes of the terms, 001, 100 and 110. Now write the sum form for these noted terms.

`001 = (A + B + C'), 100 = (A' + B + C), 110 = (A' + B’ + C)`

Writing down the new equation in the form of POS form,

`F(A, B, C) = Π(1, 4, 6) = (A + B + C') * (A' + B + C) * (A' + B’ + C’)`

The POS function `F(A, B, C) = Π(2, 3, 5) = (A + B' + C)(A + B' + C')(A' + B + C')` is written in SOP form by

1. changing the operational sign to Σ

2. writing the missing indexes of the terms, 000, 001, 100, 110, and 111. Now write the product form for these noted terms.

000 = A’B’C’, 001 = A’B’C, 100 = AB’C’, 110 = ABC’, 111 = ABC

Writing down the new equation in the form of SOP form,

`F(A, B, C) = Σ(0, 1, 4, 6, 7) = (A’B'C’) + (A’B’C) + (AB’C’) + (ABC’) + (ABC)`

## Conversion from minimal to canonical forms

### Minimal POS to canonical POS

You can include all the variables in each product term of the POS form equation, which doesn’t have all the variables by converting into standard POS form. The normal POS form function can be converted to standard POS form by using the Boolean algebraic law, **(A * A’ = 0)** and by following the below steps.

1. By adding each non-standard sum term to the product of its missing variable and its complement, which results in 2 sum terms

2. Applying Boolean algebraic law, A + BC = (A + B) * (A + C)

3. By repeating the step 1, until all resulting sum terms contain all variables

By these three steps you can convert the POS function into standard POS function.

Example:
`F = (A’ + B + C)*(B’ + C + D’) * (A + B’ + C’ + D)`

In the first term, the variable D or D’ is missing, so add D*D’ = 1 to it. Then

`(A’ + B + C + D*D’) = (A’ + B + C + D) * (A’ + B + C + D’)`

Similarly, in the second term, the variable A or A’ is missing, so add A*A’ = 1 to it. Then

`(B’ + C + D’ + A*A’) = (A + B’ + C + D’) * (A’ + B’ + C + D’)`

The third term is already in the standard form, as it has all the variables. Now the standard POS form equation of the function is

`F = (A’ + B + C + D) * (A’ + B + C + D’) * (A + B’ + C + D’) * (A’ + B’ + C + D’) * (A + B’ + C’ + D)`

### Minimal SOP to canonical SOP

You can include all the variables in each product term of the SOP form equation, which doesn’t have all the variables by converting into standard SOP form. The normal SOP form function can be converted to standard SOP form by using the Boolean algebraic law, **(A + A’ = 1)** and by following the below steps.


1. By multiplying each non-standard product term with the sum of its missing variable and its complement, which results in 2 product terms

2. By repeating the step 1, until all resulting product terms contain all variables

By these two steps you can convert the SOP function into standard SOP function. In this process, for each missing variable in the function, the number of product terms will double.

Example:
Convert the non standard SOP function `F = x y + x z + y z`

Sol:

```yml
F = x y + x z + y z

= x y (z + z’) + x (y + y’) z + (x + x’) y z

= x y z + x y z’ + x y z + x y’ z + x y z + x’ y z

= x y z + x y z’ + x y’ z + x’ y z
```
The standard SOP form is `F = x y z + x y z’ + x y’ z + x’ y z`

## Example algebraic simplification

Let's simplify our expression from the previous truth table example. you can apply ordinary algebra tricks such as factoring. Remember that the `+` operator invokes the `OR` gate, and that `true or x` always returns `true` regardless of `x` (as shown in our first truth table).
```yml
AB'C + BD + CD + D // Initial expression
AB'C + BD + D // Applying Absorption Law on CD + D, which reduces it to D
AB'C + D // Applying Absorption Law on BD + D, which reduces it to D
=> AB'C + D // Final expression
```

As an exercise to the reader, complete the truth table to show that they are logically equivalent. 

## Undefined input & don't-cares

The definition of a "don't-care" is a combination of input values that is not known, and could be either `0` or `1`. For the purposes of variable simplification, we would choose the greedy approach of picking between {`0`, `1`} such that the simplified expression has less terms.

Let's consider the following truth-table:

|A|B|F(A,B)|
|0|0|1|
|0|1|1|
|1|0|?|
|1|1|1|

We observe that we have a _don't-care_. Let's observe the differences in cases for `F(1,0)`:

```yml
Case 1: F(1, 0) = 0
=> F(AB) = A'B' + A'B + AB

Case 2: F(1, 0) = 1
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

You can clearly see, if you set `F(1, 0) = 1`, you get a true value for any input. Therefore, for the purposes of variable simplification, you can simply let `F(1, 0) = 1` thus implying `F(A, B) = 1`.

## Try the interactive truth table generator

---

{% include truth_table.html %}

---

## Methods to simplify the boolean function

The following methods can be used to simplify the the Boolean function:

1. The [Karnaugh-map](https://learn.circuitverse.org/docs/maps.html) or K-map method.
1. The [NAND gate method](https://learn.circuitverse.org/docs/nand_gate_method.html).
