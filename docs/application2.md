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
The new Interactive Book  for Digital logic design requires you to study [binary ](https://learn.circuitverse.org/docs/binary.html) binary and its uses.
In computing, a <em>flag</em> is a type of signal usually used to indicate whether something is true or false. To save time and make your program less complicated, you might want to combine these flags and send several pieces of information in one go.

Imagine you wanted to send a message to your friend to indicate which subjects had set homework on a particular day. If it was only one subject, you can just send the name of the subect - e.g. English - but if there is more than one, it gets more complicated. One way to do it is to give each subject a number:

| Serial no.      | Subject     |
|:------------:|:------------:|
| 1            |     English        | 
| 2            |       Maths      | 
| 4            |      Science       | 
| 8            |         Computing    | 
| 16            |       History     | 
| 32           |      Geography       | 
| 64           |        French     | 
| 128          |       German      | 


You can send combinations of subjects by adding together the numbers and sending the total. Try it below:


{% include application1.html %}


This only works because of the numbers I've chosen - it's a [binary ](https://learn.circuitverse.org/docs/binary.html) sequence, with each number being one of the [binary ](https://learn.circuitverse.org/docs/binary.html)column headings. 
This means that each total can only be made up from one combination of subjects.

If they'd been numbered as 1 = **English**, 2 = **Maths**, 3 = **Science**, 4 = **Computing**, etc., then it wouldn't work, because a code of 3 could represent English and Maths, or it could be Science on its own. 
To use this technique in your programming, you need to be familiar with [bitwise logic ](https://learn.circuitverse.org/docs/binary2.html)


## Representing a Character

The computer that we had when we were in the 80s - in common with a lot of personal computers at the time - allowed you to design your own text character.  You could use this in a game - e.g. to make a "space invader" - or you could use the same technique to make your own font.  
I made my own font that looked like my handwriting!

Characters were designed on an 8 x 8 grid, and created using eight numbers from 0-255.  Each number was converted to binary and the resulting pattern of 0s and 1s was used to make a pattern of black and white dots on a single row.

**You can design a character in the same way by entering numbers from 0-255 in the boxes to the left of the grid.**  Each number is converted to binary and used to create the pattern of dots.

{% include application2.html %}


You can design a character in the same way by entering numbers from **0-255** in the boxes to the left of the grid.  Each number is converted to binary and used to create the pattern of dots.

Fonts on a modern computer would be made up of a lot more than **64 pixels**, but the principle is the same.

If you can't see how the numbers are converted into the patterns of black and white blocks, try looking at the page on binary.  If you can see the link between the number and the pattern, then think about how the web page works


{% include disqus.html %}
