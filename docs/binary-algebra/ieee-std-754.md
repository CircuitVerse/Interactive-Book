---
layout: circuitverse
title: IEEE Std 754
nav_order: l2s002
cvib_level: advanced
parent: Binary algebra
has_children: false
---


# IEEE Standard 754
{: .no_toc}


## Table of contents
{: .no_toc .text-delta}

1. TOC
{:toc}


## Representing real numbers

While the representation of integer quantities using binary numbers is straightforward, representation of real numbers and its arithmetics require special care. See Section 3.11 in {% cite donzellini2018introduction --file books %}


### Fixed point

One a approach is to a use *fixed point* representation, in which a certain number of bits are used to encode the integer part, and the remaining bits are used to encode the fractional part.

For instance, if our binary numbers are 8 bits wide, and the four most signigicant bits are used for the integer part and the four least significant bits for the fractional part, then the number 12.09 would be encoded as $\underbrace{1\_7 1\_6 0\_5 0\_4}\_{\text{integer part}}\, \overbrace{1\_3 0\_2 0\_1 1\_0}^{\text{fractional part}}$.


### Floating point

Another approach is the *floating point* method. It represents a number using a *mantissa* or *significand* $s$ and an *exponent* $e$ considering a fixed base $b$ such that the number can be expressed by $(s\times b^e)$

A part of the binary number is used to store the *significand* (including a sign bit) and the other part to store the *exponent* (also with a sign bit).


## The IEEE 754 Standard

There are multiple ways of implementenig floating point numbers and arithmetics. However, since 1985 the IEEE Standard for Floating-Point Arithmetic (IEEE 754) has been available addressing many issues and providing a reliable and portable definition.

The latest version of the standard was published in 2019 {% cite ieee754std2019 --file books %} and the latest ISO version (identical to the IEEE Std 754) was published in 2020 {% cite iso60559 --file books %}


## References

{% bibliography --cited --file books %}
