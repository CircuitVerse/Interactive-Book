---
layout: default
title: Boolean Algebra
comments: true
nav_order: 4
---

# Boolean Algebra
{: .no_toc }


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---



<div class="main-sub-heading" markdown="1">
## Introduction
{: .d-inline-block}
{% include button.html %}
</div>

Boolean Algebra is used to analyze and simplify the digital (logic) circuits. 
It uses only the binary numbers i.e. 0 and 1. 
It is also called as Binary Algebra or logical Algebra. 
Boolean algebra was invented by George Boole in 1854.



<div class="main-sub-heading" markdown="1">
## Rules in Boolean Algebra
{: .d-inline-block}
{% include button.html %}
</div>

Following are the important rules used in Boolean algebra.

1. Variable used can have only two values. Binary 1 for HIGH and Binary 0 for LOW.
1. Complement of a variable is represented by an overbar (-) or (!). Thus, complement of variable B is represented as B Bar. Thus if B = 0 then !B  = 1 and B = 1 then !B  = 0.
1. ORing of the variables is represented by a plus (+) sign between them. For example ORing of A, B, C is represented as A + B + C.
1. Logical ANDing of the two or more variable is represented by writing a dot between them such as A.B.C. Sometime the dot may be omitted like ABC.
   
---

<div class="main-sub-heading" markdown="1">
## Boolean Laws
{: .d-inline-block}
{% include button.html %}
</div>

There are six types of Boolean Laws.

<div class="main-sub-heading" markdown="1">
### AND law
{: .d-inline-block}
{% include button.html %}
</div>

These laws use the AND operation. Therefore they are called as **AND** laws.
```yaml
Example:  
1. A.0 = 0
1. A.1 = A
1. A.A = A
1. A.!A = 0
```

<div class="main-sub-heading" markdown="1">
### OR law
{: .d-inline-block}
{% include button.html %}
</div>

These laws use the OR operation. Therefore they are called as **OR** laws.
```yaml
Example:  
1. A+0 = A
2. A+1 = 1
3. A+A = A
4. A+!A = 1
```

<div class="main-sub-heading" markdown="1">
### INVERSION law
{: .d-inline-block}
{% include button.html %}
</div>

This law uses the NOT operation. The inversion law states that double inversion of a variable results in the original variable itself.

```yaml
Example:  !!A = A
```




<div class="main-sub-heading" markdown="1">
### Commutative law
{: .d-inline-block}
{% include button.html %}
</div>

Any binary operation which satisfies the following expression is referred to as commutative operation.
```yaml
Example:  A.B = B.A                         A+B = B+A
```


<div class="main-sub-heading" markdown="1">
### Associative law
{: .d-inline-block}
{% include button.html %}
</div>

This law states that the order in which the logic operations are performed is irrelevant as their effect is the same.

```yaml
Example: (A.B).C = A.(B.C)                (A+B)+C = A+(B+C)
```

<div class="main-sub-heading" markdown="1">
### Distributive law
{: .d-inline-block}
{% include button.html %}
</div>

Distributive law states the following condition.
```yaml
Example:  A.(B+C) = A.B + A.C

```


<div class="main-sub-heading" markdown="1">
## DeMorgan’s Theorem
{: .d-inline-block}
{% include button.html %}
</div>
This theorem is useful in finding the **complement of Boolean function**. It states that the complement of logical OR of at least two Boolean variables is equal to the logical AND of each complemented variable.

DeMorgan’s theorem with 2 Boolean variables x and y can be represented as
```yaml
  (x + y)’ = x’.y’
```
The dual of the above Boolean function is
```yaml
  (x.y)’ = x’ + y’
```
Therefore, the complement of logical AND of two Boolean variables is equal to the logical OR of each complemented variable. Similarly, we can apply DeMorgan’s theorem for more than 2 Boolean variables also.

{% include bool.html %}



{% include disqus.html %}
