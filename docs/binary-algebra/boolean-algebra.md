---
layout: circuitverse
title: Boolean algebra
nav_order: l1s000
cvib_level: medium
parent: Binary algebra
has_children: false
---


# Boolean algebra
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}

## Introduction
 
Boolean Algebra was invented by **George Boole** and described in his first book known as **The Mathematical Analysis of Logic** in the 
year **1847**. Further, he made several laws which were described by him in his second book known as **An investigation of the Laws of Thought** 
in the year **1854**. As the word boolean is prefixed with the word 'bool' which implies a boolean value which could either be true or false. 
In this case it is referred to as 0 and 1.
 
---
 
## Rules of boolean algebra
 
These are the building blocks of Boolean Algebra. Try not to forget these as these are the most important one's and you can solve any digital equation with the help of the described rules and Laws below.
 
### Null rule
 
As the rule states 'null' which means that when 1 is added i.e., 'OR' and when 0 is 'AND' with a variable it gives 1 and 0 respectively.
 
```yaml
A + 1 = 1
A . 0 = 0
```
 
### Identity rule
 
As the rule states 'identity' which means that when 0 is added i.e., 'OR' and when 0 is 'OR' with a variable it gives the variable back.
 
```yaml
A + 0 = A
A . 1 = A
```
 
### Complement rule
 
Whenever 'AND' or 'OR' is used with the negation of the variable and the variable itself it gives 0 and 1 respectively.
 
```yaml
A + A' = 1
A . A' = 0
```
 
### Involution rule
 
Any variable when double negated gives the variable back.
 
```yaml
(A')' = A
```
 
## Laws of boolean algebra
 
There are six Laws in Boolean Algebra. All six laws are described below in increasing order of importance.
 
**_Note: We can construct any digital circuit with the help of only two gates namely AND and OR along with NOT to use a respective variables in it's high or low state as required. Keep in mind that all laws are stated for us to design any digital circuit with the help of only AND and OR gate. Similarly, these laws are stated for the same._**
 
### Commutative law
 
The word commutative is prefixed with the word 'commute' which means movement i.e., the movement of variables meaning 
if you switch or change the position of variables it won't affect the result.

```yaml
Examples:
A + B = B + A
A . B = B . A
```
 
### Associative law
 
The position of parenthesis does not matter. The basic idea of this law is that which set of variables you resolve first is not a matter of fact.
 
```yaml
Examples:
(A + B) + C = A + (B + C)
(A . B) . C = A . (B . C)
```
 
### Idempotence law
 
As the word states 'Identity' tries to understand the importance of the term. When we apply AND gate to a single variable it will output the variable itself(*Conditions that we do not know the value of that variable). Similar will be the case when we will apply the OR gate. If you understand this then you got it ;)
 
```yaml
Examples:
A + A = A
A . A = A
```
 
### Distributive law
 
Suppose it's your birthday and you want to distribute sweets to everyone in the class. What would the birthday reader do? Go to each person and distribute the sweets?. Awesome. That's what happens in the case of Distributive law. Think of the number outside the parenthesis as the birthday variable who needs to attend each and every variable inside the parenthesis. Follow up the examples to understand better.
 
```yaml
Examples:
A (B + C) = A.B + A.C
A + (B.C) = (A + B)(A + C)
```
 
### Redundance law
 
What do you do when you find two identical items while going to a track inside your bag? Obviously you remove one of the two redundant items. That's what you need to do here, extract the common variable, and solve the expression inside the parenthesis.
 
```yaml
Examples:
A + A.B = A
A(A + B) = A   //Here initial expression is reduced to A.A + A.B(Distributive Law) 
               which can further be A + A.B(using Identity Law)
```
 
### De Morgan's law
 
This is the most important law of Boolean Algebra. Remember the phrase **'Break the Line, change the Sign'** and **'Join the Line, change the sign'** both are applicable. Meaning break the negate and change AND to OR and OR to AND within that negate sign. Do not remove the line. As the phrase speaks of breaking the line and changing the sign not removing the line. Be careful while applying this law.
 
```yaml
(A + B)' = (A'B')
(AB)' = (A' + B')
```
 
Try to implement any gate you wish to with the help of the simulator present below, where 'switch on' means a high state i.e., 1 and 'switch off' means a low state i.e., 0. Select the gate in between with the help of the list present.
 
### Click on gate to toggle between other gates
{: .no_toc}
 
{% include bool.html %}


## Bitwise operators

| Operator         | Explanation                                                                                                                                                                          |
|---------------- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| bit1 & bit2      | The AND(****&****) operator is used to compare two bits and gives a result equal to 1 if both the bits are 1, and it returns 0, if any one bit is 0.                                 |
| bit1 &#124; bit2 | The OR(****&#124;****) operator is used to compare two bits and gives a result equal to 1 if anyone of the bit is 1 or both the bits are 1, and if both are 0 it returns 0.          |
| bit1 ^ bit2      | The EXCLUSIVE-OR(****^****) also known as XOR(****^****) operator is used to compare two bits and returns 1 if any one of the bit is 1 and it returns 0 if both the bits are 0 or 1. |
| ~bit1            | The COMPLEMENT(****~****) operator is similar to 1's complement and can be used to convert all the 1's to 0's and all the 1' to 0's of the operand.                                  |

{% include binary2.html %}
