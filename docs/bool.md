---
layout: default
title: Boolean Algebra
nav_order: 3
---

# Boolean Algebra
{: .no_toc }


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---



## Introduction


Boolean Algebra is used to analyze and simplify the digital (logic) circuits. 
It uses only the binary numbers i.e. 0 and 1. 
It is also called as Binary Algebra or logical Algebra. 
Boolean algebra was invented by George Boole in 1854.



## Rule in Boolean Algebra
Following are the important rules used in Boolean algebra.

1. Variable used can have only two values. Binary 1 for HIGH and Binary 0 for LOW.
1. Complement of a variable is represented by an overbar (-). Thus, complement of variable B is represented as B Bar. Thus if B = 0 then B Bar = 1 and B = 1 then B Bar = 0.
1. ORing of the variables is represented by a plus (+) sign between them. For example ORing of A, B, C is represented as A + B + C.
1. Logical ANDing of the two or more variable is represented by writing a dot between them such as A.B.C. Sometime the dot may be omitted like ABC.
   
---

## Boolean Laws

There are six types of Boolean Laws.

### AND law

These laws use the AND operation. Therefore they are called as **AND** laws.
```yaml
Example:  
1. A.0 = 0
1. A.1 = A
1. A.A = A
1. A.!A = 0
```

### OR law

These laws use the OR operation. Therefore they are called as **OR** laws.
```yaml
Example:  
1. A+0 = A
1. A+1 = 1
1. A+A = A
1. A+!A = 1
```

### INVERSION law

This law uses the NOT operation. The inversion law states that double inversion of a variable results in the original variable itself.

```yaml
Example: !!A = A
```

### Associative law

This law states that the order in which the logic operations are performed is irrelevant as their effect is the same.

```yaml
Example: (A.B).C = A.(B.C)                (A+B)+C = A+(B+C)
```

### Distributive law

Distributive law states the following condition.
```yaml
Example:  A.(B+C) = A.B + A.C
```

