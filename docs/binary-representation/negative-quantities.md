---
layout: circuitverse
title: Negative quantities
nav_order: l0s001
cvib_level: basic
parent: Binary representation
has_children: false
---


# Negative quantities
{: .no_toc}


## Table of contents
{: .no_toc}

1. TOC
{:toc}


## Signed and unsigned numbers

Currently, we have just looked at **unsigned** numbers - they can only be positive, as there is no sign. However, sometimes we need to work with **negative numbers** too. To do this, we add a **sign bit** on the far left of the binary number, which indicates whether the number is positive (\`0\`) or negative(\`1\`).

For example, the number \`10000011\` would be \`131\` if the number is **unsigned**, but if the number is **signed**, the actual representation would be \`-3\`

-   The first bit \`1\` represents that the number is negative
-   The remaining bits \`0000011\` represent the actual number, \`3\`

The downside to using a signed number is that it removes one bit from the actual number representation, halving the maximum value.

-   The minimum and maximum values for an \`unsigned 8-bit\` number would be \`0\` to \`2<sup>8</sup>-1\` (\`0\` to \`255\`)
-   The minimum and maximum values for a \`signed 8-bit\` number would be \`-2<sup>7</sup>-1\` to \`2<sup>7</sup>-1\` (\`-127\` to \`127\`)


## Complements in binary system

The Binary system has a base of r = 2. The base has r = 2 so the Binary system two types of complements. They are:

1.  1's complement
2.  2's complement.


### 1's complement

To find the 1's complement of a given number, you should change all the 0's to 1's and then all the 1's to 0's. This process is called as 1's complement. Simply negate each digit present in the binary number. An Example for 1's complement is as follows:

```yaml
Given number        1  0  1  0  1
1's complement      0  1  0  1  0
```


### 2's complement

In order to find 2's complement firstly, evaluate 1's complement of the number, and further add 1 to it. 2's complement = 1's complement + 1. An Example of 2's complement is as follows:

```yaml
Given number        1  0  1  0  1
1's complement      0  1  0  1  0

add 1               +           1
		   ---------------
2's complement      0  1  0  1  1
		   ---------------
```

{:.quiz}

1. Using signed two's complement notation,what is the decimal value of 00010001 ?
	* -47
	* +37
	* -149
	1. +17

2. Using signed two's complement notation,what is the decimal value of 00010001 ?
	*  positive
	* incorrect
	1. negative
	* an octal value

3. The two's complement of the signed decimal number -78 is ?
    * 11001110
	* 01001110
	1. 10110010
	* 10110001

4. The range of positive numbers possible in an eight-bit two's complement system is ?
    *  0 to 64
	1. 0 to 127
	* 0 to 256
	* 0 to 100.

