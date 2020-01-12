---
layout: default
title: Basic Applications
comments: true
nav_order: 4
---
# Basic Applications
{: .no_toc }


## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


## Binary Flags
The new Interactive Book for the Digital logic design requires you to study about [binary ](https://learn.circuitverse.org/docs/binary.html) and some of its uses.
Generally in programming, a <em>flag</em> is a indication/signal usually used to check whether something is true/false. To save some time and also make your program less complex, you will have to join these flags and send many pieces of information at once.

Imagine that your friend wanted you to send a message to him and notify him which subjects were given as homework on that particular day. It would be easy for you to send the name of the particular subject - For Example Maths - but if there are more than one suject, it gets more work. It can be simplified by giving a number to each subject:

| Serial no.   |    Subject   |
|:------------:|:------------:|
| 1            |    English   | 
| 2            |     Maths    | 
| 4            |    Science   | 
| 8            |   Computing  | 
| 16           |    History   | 
| 32           |   Geography  | 
| 64           |    French    | 
| 128          |    German    | 


You can send the combination of subjects by adding the numbers and sending the total. Give it a try:


{% include application1.html %}


This is working because of the numbers we have chosen, it's a sequence known as [binary ](https://learn.circuitverse.org/docs/binary.html) sequence, and each number belongs to to the [binary ](https://learn.circuitverse.org/docs/binary.html)column headings. 
This means that every total is unique and can be made by one combination of the subjects.

If they are numbered as **English** = 1, **Maths** = 2, **Science** = 3, **Computing** = 4, etc., this wouldn't work then, because a total of 3 may represent English and Maths, and it also could be Science alone. 
You must be familiar with [Bitwise Logic ](https://learn.circuitverse.org/docs/binary2.html), to use this logic in your programming. 


## Representing a Character

The computer that we had when we were in the 80s, in common with many of the personal computers at the time, allowed us to design our own text character. We could use this in games For Example to make a "space invader", or we can implement the same technique to create our own font. 

The characters can be designed on the 8 x 8 grid, and be created using eight numbers ranging from 0-255. Each number is converted to Binary, the resulting pattern of 0's and 1's are used to make black & white dots in a pattern on a single row. 

**Design your own character in the grid by entering numbers ranging from 0 to 255 in the boxes, placed at left of the 8 x 8 grid.**
Each number is then converted to binary and will be used to create the pattern of black & white dots.

{% include application2.html %}


The fonts on a modern computer are made up of more than **64-Pixels**, but still the technique is the same.


{% include disqus.html %}
