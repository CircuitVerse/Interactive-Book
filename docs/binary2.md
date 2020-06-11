---
layout: default
title:  Operators in binary
nav_order: 2
---
 
# Mathematical operators in binary
{: .no_toc} 
 
## Table of contents
{: .no_toc .text-delta }
 
1. TOC
{:toc}
 
---
 
## Addition
Binary addition is similar to Decimal addition. As this addition is binary, it implies that you cannot have a number 
greater than 1 i.e., when you do '1+1' it gives 0 with carry 1 i.e, 10.
```yaml 
Examples :
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 1
 
    1 1   (3)
  + 1 0   (2)
  -----
  1 0 1   (5)
  -----
```
In the above example, for units place gives 1 as the submission of 1 and 0, whereas, when addition occurs 
at the ten's place where 1 and 1 are added, it gives 10 not 2 because this is binary addition which results in 
carry of 1 and 0 as a result of the submission.
The example below gives 110 because it results in 1+1+1 at the tens place which is 11 in binary. As two 1's gives 
10, further if you add 1 it will give 11.
```yaml
    1 1   (3)
  + 1 1   (3)
  -----
  1 1 0   (6)
  -----
```
 
## Subtraction
Binary subtraction is also a simple task. You just need to keep in mind i.e., whenever 0 takes borrow, it becomes 10 i.e., 2 in decimal.
In case number to the left is zero then look for the number more left to that until you find 1.
In case nothing is present to borrow then that number becomes negative. Also, the number which gives borrow is reduced by 1.
 
**_Note: 10 becomes 1 after giving borrow._**
```yaml
Examples :
0 - 0 = 0
1 - 0 = 1
1 - 1 = 0
 
    1 0   (2)This is something which will always happen in binary subtraction. Keep in mind i.e., 10-1=1
  - 0 1   (1)Reason being 10 is 2 in decimal which on subtraction with 1 gives 1.
  -----      Implies that 10 - 1 = 1
    0 1   (1)
  -----
 
      This 0 increases to 10 after taking the carry and reduces to 1 after giving the borrow.
      /
    1 0 0   (4)
  - 0 0 1   (1)
  -------
    0 1 1   (3)
  -------
```
 
## Multiplication
Binary multiplication requires two concepts i.e., binary addition and decimal multiplication. You can refer to the example below which 
describes how multiplication occurs in binary. It is similar to decimal multiplication. Important points to be noted are as follows :
 
1 x 1 = 1
 
1 x 0 = 0
```yaml
          1  1  0       (6)
       x  1  0  1       (5)
      ------------
          1  1  0
       0  0  0  x
    1  1  0  x  x
    --------------
    1  1  1  1  0       (30)
    --------------
```
 
## Division
The division in binary is achieved by binary subtraction. The sole motive of the Binary Division is to subtract the divisor from dividends 
until 0 is obtained or a number that cannot be further subtracted. The number of times you subtract is known as a quotient(this can be converted to binary) and the number which cannot be reduced or 0 is obtained after some step is known as Remainder.
 
Another method which can achieve Division in binary is by using Binary Multiplication and subtraction. It is similar 
to Decimal Division. Multiply the divisor by 1 or 0 wherever needed and reduce the number further.
```yaml
          1 1 1 1 0 / 1 0 1 (Dividend/Divisor)
  
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
                  0  (Remainder)     ans = 6 (110) (Quotient)
        -------------                 -------
```
 
## Complements in binary system
 
The Binary system has a base of r = 2.
The base has r = 2 so the Binary system two types of complements. They are:
1. 1's complement 
2. 2's complement.
 
### 1's complement

To find the 1's complement of a given number, you should change all the 0's to 1's and then all the 1's to 0's. This process is called as 1's complement. Simply negate each digit present in the binary number.
An Example for 1's complement is as follows:

```yaml
Given number        1  0  1  0  1
1's complement      0  1  0  1  0
```
### 2's complement
 
In order to find 2's complement firstly, evaluate 1's complement of the number, and further add 1 to it.
2's complement = 1's complement + 1.
An Example of 2's complement is as follows:
 
```yaml
Given number        1  0  1  0  1
1's complement      0  1  0  1  0
 
add 1               +           1
                   ---------------
2's complement      0  1  0  1  1
                   ---------------
```
 
## Bitwise operators
 
|Operator   |    Explanation   |
|:---------:|:----------------:|
|bit1 & bit2 | The AND(**&**) operator is used to compare two bits and gives a result equal to 1 if both the bits are 1, and it returns 0, if any one bit is 0.|
|bit1 &#124; bit2 | The OR(**&#124;**) operator is used to compare two bits and gives a result equal to 1 if anyone of the bit is 1 or both the bits are 1, and if both are 0 it returns 0.|
|bit1 ^ bit2 | The EXCLUSIVE-OR(**^**) also known as XOR(**^**) operator is used to compare two bits and returns 1 if any one of the bit is 1 and it returns 0 if both the bits are 0 or 1.|
|~bit1 | The COMPLEMENT(**~**) operator is similar to 1's complement and can be used to convert all the 1's to 0's and all the 1' to 0's of the operand.|
 
 
{% include binary2.html %}


