---
layout: default
title: Boolean Function
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
A **Boolean Function** is described by an algebraic expression called **Boolean expression** which consists of binary variables, the constants 0 and 1, and the logic operation symbols. 
Consider the following example.
```yaml
Example:  

      F(A,B,C,D)     =     A + BC + !(ADC)
   Boolean Function      Boolean expression
```
Here the left side of the equation represents the output **Y**. So we can state 

```yaml 
          Y         =     A + BC + !(ADC)
   Boolean Function      Boolean expression
```
## Truth Table Formation
A truth table represents a table having all combinations of inputs and their corresponding result.

It is possible to convert the switching equation into a truth table. For example, consider the following switching equation.

| A       | B       | C      | F      |
|:--------|:--------|:-------|:-------|
| 0       | 0       | 1      |0       |
| 0       | 1       | 0      |0       |
| 0       | 1       | 1      |0       |
| 0       | 1       | 1      |1       |
| 1       | 0       | 1      |1       |
| 1       | 1       | 0      |1       |
| 1       | 1       | 1      |1       |
| 1       | 1       | 1      |1       |

## Methods to simplify the boolean function

The methods used for simplifying the Boolean function are as follows −

1. Karnaugh-map or K-map
1. NAND gate method.

## Karnaugh-map or K-map

The Boolean theorems and the De-Morgan's theorems are useful in manipulating the logic expression. We can realize the logical expression using gates. The number of logic gates required for the realization of a logical expression should be reduced to a minimum possible value by K-map method. This method is covered in detail in next module.






