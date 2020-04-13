---
layout: default
title:  Operators in Binary
comments: true
nav_order: 2
---

# Mathematical Operators in Binary


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Addition

```yaml 
1. 0 + 0 = 0
2. 0 + 1 = 1
3. 1 + 0 = 1
4. 1 + 1 = 1
```

## Subtraction

```yaml
1. 0 - 0 = 0
2. 1 - 0 = 1
3. 1 - 1 = 0
```

## Multiplication

```yaml
          1  1  0       (6)
      *   1  0  1       (5)
      ------------
          1  1  0 
       0  0  0  x
    1  1  0  x  x
    --------------
    1  1  1  1  0       (30)
    --------------   
```

## Division

```yaml
          1 1 1 1 0 / 1 0 1
          
         -    1 0 1                     1st 
        -------------
          1 1 0 0 1
         -    1 0 1                     2nd
        -------------
          1 0 1 0 0
         -    1 0 1                     3rd
        -------------
          0 1 1 1 1
         -    1 0 1                     4th
        -------------
            1 0 1 0
         -    1 0 1                     5th
        -------------
              1 0 1
         -    1 0 1                     6th 
        -------------                 -------
                  0                   ans = 6 (110)
        -------------                 -------
```

## Complements in Binary system

The Binary system has a base of r = 2.
The base has r = 2 so the Binary system two types of complements. They are:
1. 1's complement 
2. 2's complement.


### 1's complement

To find the 1's complement of a given number, we should change all the 0's to 1's and then all the 1's to 0's. This process is called as 1's complement. 
An Example for 1's complement is as follows:

```yaml
Given number        1  0  1  0  1
1's complement      0  1  0  1  0 
```
### 2's complement

To find the 2's complemen of a given number, we should add 1 to the Least Significant Bit(LSB) or the last bit of the 1's complement of the given number. 
2's complement = 1's complement + 1.
An Example for 2's complement is as follows:


```yaml
In the given number 1 0 1 0 **1**. **1** is the Least Significant Bit(LSB).

Given number        1  0  1  0  1
1's complement      0  1  0  1  0 

add 1               +           1
                   ---------------
2's complement      0  1  0  1  1             
                   --------------- 

```


## Bitwise Operators

|Operator   |    Explanation   |
|:---------:|:----------------:|
|bit1 & bit2 | The AND(**&**) operator is used to compare two bits and gives a result equal to 1 if both the bits are 1, or it returns 0, if any one bit is 0.|
|bit1 | bit2 | The OR(**|**) operator is used to compare two bits and gives a result equal to 1 if any one of the bit is 1 or both the bits are 1, or if both are 0 it returns 0.|
|bit1 ^ bit2 | The EXCLUSIVE-OR(**^**) or also called as XOR(**^**) operator is used to compare two bits and returns 1 if any one of the bit is 1 and it returns 0 if both the bits are 0 or both are 1.|
|~bit1 | The COMPLEMENT(**~**) operator is similar to 1's complement and can be used to convert all the 1's to 0's and all the 1' to 0's of the operand.|


{% include binary2.html %}


{% include disqus.html %}
