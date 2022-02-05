---
layout: circuitverse
title: Number bases
nav_order: l0s002
cvib_level: basic
parent: Binary representation
has_children: false
---

# Other number bases
{: .no_toc}

## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}

## Introduction

- Before, learning about other number bases let first understand what is **Number Systems**. It is a writing system used for expressing numbers. We can express number in various ways, but most commonly used systems are Binary Number System, Decimal Number System, Octal Number System and Hexadecimal Number System. 
- Now let's have brief information about **Number Bases**. A number Base represents how many number of different digits or combination of digits and alphabets are used to represent a number in a particular Number System. 
-  **Positional number systems** uses the position of a digit to know the contribution of that particular digit in the number. I guess it might look little difficult to understand, so let's discuss it using an example of a most popular Positional Number System called as **Decimal System**.

According to Decimal System `123` can be represented as `1*100 + 2*10 + 3*1`. It shows that as `1` is on hundredth place so its contribution in the number will be `1*100=100` and so on. 

## Octal Number System
**Octal Number System** has 8 as the base of the number. It uses digits from 0-7  

## Hexadecimal Number System
**Hexadecimal Number System** has 16 as the base of the number. It uses digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E and F 

## Converting between bases

### Octal to Decimal conversion
-   **STEP 1:** Write the decimal value of each digit on top of them respectively. The value which you seek to write is 8<sup>(place value from right)</sup> beginning from 0 i.e., 8<sup>0</sup>, 8<sup>1</sup>, 8<sup>8</sup> &#x2026;. continuing up to 8<sup>7</sup>.
-   **STEP 2:** Now, multiply each digit of octal number with its value.
-   **STEP 3:** Add 'em all.
-   **STEP 4:** Result is ready :)

### Decimal to Octal conversion
-   **STEP 1:** Divide the decimal number by 8
-   **STEP 2:** At each step store the value of remainder in reverse order.
-   **STEP 3:** Result is ready :)

### Hexadecimal to Decimal conversion
-   **STEP 1:** Write the decimal value of each digit on top of them respectively. The value which you seek to write is 16<sup>(place value from right)</sup> beginning from 0 i.e., 16<sup>0</sup>, 16<sup>1</sup>, 16<sup>8</sup> &#x2026;. continuing up to 16<sup>7</sup>.
-   **STEP 2:** Now, multiply each digit of octal number with its value.
-   **STEP 3:** Add 'em all.
-   **STEP 4:** Result is ready :)

### Decimal to Hexadecimal conversion
-   **STEP 1:** Divide the decimal number by 16
-   **STEP 2:** At each step store the value of remainder in reverse order (If the remainder is greater than 9 represent it using alphabet from the hex table For e.g., Use A if the remainder is 10).
-   **STEP 3:** Result is ready :)

***Note: Once you get the number in decimal form, you can convert decimal format into binary as shown before.***
