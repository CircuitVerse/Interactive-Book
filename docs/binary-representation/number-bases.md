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

## Examples of number bases ordered by proximity to Euler's number (e ≈ 2.718)

The choice of base (also called radix) affects how compactly numbers are written. A useful heuristic is that the most “economical” base is near e. Among integer bases, 3 is closest to e, then 2, then 4, then 8, 10, 16, etc. Here are common bases in that order, with quick notes:

1. Base 3 — Ternary and Balanced Ternary (closest to e)
   - Ternary digits: 0, 1, 2
   - Balanced ternary digits: -1, 0, +1 (often written as −, 0, +). See the dedicated section below for worked examples.
2. Base 2 — Binary (widely used in digital hardware)
3. Base 4 — Quaternary (sometimes used in storage/communications groupings)
4. Base 8 — Octal (historically used, especially with 3-bit groupings)
5. Base 10 — Decimal (human-centric, everyday arithmetic)
6. Base 16 — Hexadecimal (compact representation of binary, 4-bit groupings)

## Balanced ternary (base 3 with digits -1, 0, +1)

Balanced ternary is a radix-3 positional system where each digit can be -1, 0, or +1. Using signed digits makes carry/borrow operations symmetrical and can simplify certain arithmetic and hardware designs.

Notation used here:
- We write the three digit values explicitly as -1, 0, +1 (some texts use the symbols −, 0, + or T, 0, 1 where T = -1).
- We list digits most significant to least significant, separated by commas for clarity, e.g., `⟨1, -1⟩_3(bal)` means 1×3¹ + (−1)×3⁰.

Small examples (verify by evaluating the weighted sum of powers of 3):
- 0 = `⟨0⟩_3(bal)`
- 1 = `⟨+1⟩_3(bal)`
- 2 = `⟨+1, -1⟩_3(bal)` because 1×3¹ + (−1)×3⁰ = 3 − 1 = 2
- 3 = `⟨+1, 0⟩_3(bal)`
- 4 = `⟨+1, +1⟩_3(bal)`
- 5 = `⟨+1, -1, -1⟩_3(bal)` because 1×3² + (−1)×3¹ + (−1)×3⁰ = 9 − 3 − 1 = 5
- 6 = `⟨+1, -1, 0⟩_3(bal)` = 9 − 3 + 0 = 6
- 7 = `⟨+1, -1, +1⟩_3(bal)` = 9 − 3 + 1 = 7
- 8 = `⟨+1, 0, -1⟩_3(bal)` = 9 + 0 − 1 = 8
- 9 = `⟨+1, 0, 0⟩_3(bal)` = 9

Why it’s interesting
- Symmetric carries can make addition/subtraction algorithms elegant.
- Among integer bases, 3 (including balanced ternary) is closest to e, connecting it to radix economy (see the section at the end).

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

## Radix Economy: what it is and why it matters

Radix economy is a simple model of the “cost” of writing numbers in a given base b. Roughly speaking, representing values up to some size X takes about log_b(X) digits; if each digit has b possible symbols, a cost proxy is b × log_b(X) = (b/ln b) ln X. This expression is minimized at base e, so among integer bases the most economical choice is b = 3. That’s why ternary — and in particular balanced ternary with digits -1, 0, +1 — is often discussed as theoretically efficient. In practice, other factors (hardware simplicity, standards, human familiarity) make bases like 2, 10, and 16 dominant, but radix economy helps explain the trade‑offs.
