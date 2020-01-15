---
layout: default
title:  Operations in Binary
comments: true
nav_order: 2
---

# Mathematical Operations in Binary


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

## Binary system complements

There are only two types of complement in Binary system since the base of binary, r = 2. They are:
1. 1's complement
2. 2's complement


### 1's complement

The 1's complement of a number is found by changing all 1's to 0's and all 0's to 1's. This is called as taking complement or 1's complement. Example of 1's Complement is as follows.

```yaml
Given number        1  1  0  1  0
1's complement      0  0  1  0  1 
```
This is similar to passing each of the digit through NOT gate as you can see in the diagram below.

<div style="text-align:center"><img src="../assets/images/1's_complement.png" /></div>

### 2's complement

The 2's complement of binary number is obtained by adding 1 to the Least Significant Bit (LSB) of 1's complement of the number.
2's complement = 1's complement + 1


```yaml
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
|op1 & op2 | The AND operator compares two bits and generates a result of 1 if both bits are 1; otherwise, it returns 0.|
|op1 or op2 | The OR operator compares two bits and generates a result of 1 if the bits are complementary; otherwise, it returns 0.|
|op1^ op2 | The EXCLUSIVE-OR operator compares two bits and returns 1 if either of the bits are 1 and it gives 0 if both bits are 0 or 1.|
|~op1 | The COMPLEMENT operator is used to invert all of the bits of the operand.|


{% include binary2.html %}


{% include disqus.html %}
