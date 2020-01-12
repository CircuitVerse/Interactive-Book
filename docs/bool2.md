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

<<<<<<< HEAD
In this example, The sum of products evaluation is being done, i.e., `AB'C + BD + CD + D` is the sum of products. The importance of sum of product is that, When we are doing `+`(addition), We are in fact activating the `OR` operator. 
=======
In this example an interesting observation is that, We are doing a sum of product evaluation, that is, `AB'C+BD+CD+D` is a sum of products. The significance of sum of product is that when we are doing `+` we are in fact invoking the `OR` operator. 
>>>>>>> e05147e... Fix Plagiarism in 'Boolean Function' page

The `OR` operator returns `1`, So till any its arguements returns `1`. Hence, if any one of the term in the Sum Of Product(SOP) expressions is `1`, then we can identify that its final expression is going to be `true` for sure. 

## Example Algebraic Simplification

Let's now simplify our expression used in the previous truth table's example. To simplify the example, ordinary algebra tricks like factoring can be used. We must remember that `+` operator activates the `OR` gate, and that `true or x(either true or false)` always returns `true`, irrespective of `x`(same as in our first truth table).
```
AB'C+BD+CD+D // Initial expression
AB'C+BD+D(C+1) // Factor out a D
AB'C+BD+D // Since (C+1) is always true, as C OR true is always true
AB'C+D(B+1) // Factor out a D again
AB'C+D // Since (B+1) is always true, as B OR true is always true
=AB'C+D // Final expression
```

An exercise to you: Complete the truth table, and prove they are logically equivalent. 

## Undefined Input & Don't Cares
"Don't care" is defined as the combination of the input values which are not known, they could either be `1` or `0`, and for the simplification of variable- We would choose between {`1`, `0`} such that the expression which is simplified has less number of terms.

Consider the following truth table:

| F(AB)| A | B |
| :----: |:-:| :-:|
| 1    | 0 | 0 |
| 1    | 0 | 1 |
| ?    | 1 | 0 |
| 1    | 1 | 1 |

It is observed that- We have a _Don't care_ in the truth table. Let's differentiate in the case of `F(1,0)`:

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

We can observe that, we will get `1` as the output for any input, if we set `F(1, 0)=1`. Hence, for the purpose of variable-simplification, we say that `F(1, 0)=1` thus implying `F(AB)=1`.


## Let us try this interactive truth table generator for better understanding

---

{% include truth_table.html %}


---

## Methods to simplify the boolean function

The following methods can be used to simplify the the Boolean function:

1. The Karnaugh-map or K-map method.
1. The NAND gate method.




{% include disqus.html %}

