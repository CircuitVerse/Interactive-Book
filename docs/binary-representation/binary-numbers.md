---
layout: circuitverse
title: Binary numbers
nav_order: l0s000
cvib_level: basic
parent: Binary representation
has_children: false
---


# Binary numbers
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}


## Introduction

Binary number system was invented by **Gottfried Leibniz**. As the word is prefixed with 'Bi' which is a Latin word and means 'two' in English. This brings us to the first two digits i.e., 0 and 1 which means that while counting in binary you cannot exceed 1. Infact all the numbers which you represent are made up of only two digits i.e., 0 and 1 which is quite interesting. Check out the binary representation of a decimal number (the numbers used for counting i.e., from 0-9) in binary.

```yaml
Example:
Decimal Number :: 25 
Binary Number :: 11001 
```


## Binary counting


### How do we count using binary?
{: .no_toc}

It is just like counting in decimal except we reach 10 much sooner.

| Binary | Explanation                                            |
|------ |------------------------------------------------------ |
| 0      | Start at 0                                             |
| 1      | Then 1                                                 |
| ???    | But then there is no symbol for 2 &#x2026; what to do? |


### Well how do we count in Decimal?
{: .no_toc}

| Decimal | Explanation                                                 |
|------- |----------------------------------------------------------- |
| 0       | Start at 0                                                  |
| 1       | Then 1                                                      |
| 2-8     | Count 1,2,3,4,5,6,7,8                                       |
| 9       | This is the **last digit** in Decimal                       |
| **1**0  | Start from back at **0** again, but carry **1** on the left |


### The same thing is done in Binary &#x2026;
{: .no_toc}

| Binary | Explanation                                                |
|------ |---------------------------------------------------------- |
| 0      | Start at 0                                                 |
| 1      | Then 1                                                     |
| **1**0 | Now start back at **0** again, but carry **1** on the left |
| 11     | 1 more                                                     |
| ???    | But NOW what &#x2026; ?                                    |


### What happens in Decimal?
{: .no_toc}

| Decimal | Explanation                                                          |
|------- |-------------------------------------------------------------------- |
| 99      | When you run out of digits, &#x2026;                                 |
| 100     | &#x2026; start from back at **0** again, but carry **1** on the left |


### And that is what is done in Binary &#x2026;
{: .no_toc}

| Binary   | Explanation                                                                                                                                                                |
|-------- |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0        | Start at 0                                                                                                                                                                 |
| 1        | Then 1                                                                                                                                                                     |
| **1**0   | Now start back at **0** again, but carry **1** on the left                                                                                                                 |
| 11       | 1 more                                                                                                                                                                     |
| **1**00  | start back at 0 again, and carry one to the number on the left but that number is already at 1 so it also goes back to 0 and 1 is carried to the next position on the left |
| 101      |                                                                                                                                                                            |
| 110      |                                                                                                                                                                            |
| 111      |                                                                                                                                                                            |
| **1**000 | Start back at 0 again (for all 3 digits), add 1 on the left                                                                                                                |


## Binary to decimal demonstration

Let's tell you something more about conversion. Conversion from Binary to Decimal is quite a simple task. All you need to do is begin from the right. Follow the steps below:

-   **STEP 1:** Write the decimal value of each digit on top of them respectively. The value which you seek to write is 2<sup>(place value from right)</sup> beginning from 0 i.e., 2<sup>0</sup>, 2<sup>1</sup>, 2<sup>2</sup> &#x2026;. continuing up to 2<sup>7</sup>.
-   **STEP 2:** Now, multiply each digit of binary number with its value.
-   **STEP 3:** Add 'em all.
-   **STEP 4:** Result is ready :)

***Note: If the number is large, increase bits of the binary number on the left. Keep in mind that it's value will increase subsequently.***

```yaml
Example ::
Decimal number :: 25
You can convert the 1st, 4th, and the 5th digit from the right by tapping on it to convert from 0 to 1.
Further, the respective binary digit is multiplied with the value present on top of each digit. Now add.
In this Case ::
1x16 + 1x8 + 0x4 + 0x2 + 1x1 = 25 which is the decimal equivalent of the binary number 11001
```


## Use the Simulator below to get the decimal equivalent of a binary number
{: .no_toc }

Click on the '0' to change it to '1' and vice-versa

{% include binary.html %}

{:.quiz}
1. Is `0110103` a binary number?
   1. No
   * Yes
2. What is `10101` as a decimal number?
   1. 21
   * 10101
   * 25
   * 1000
