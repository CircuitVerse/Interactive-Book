---
layout: default
title:  Interactive FSM
comments: true
nav_order: 18
---

# Interactive FSM

In this module, we will learn how to use a Final-State-Machine(FSM) which describes the working of a Soda vending machine:

## Problem
Assume, We have a soda vending machine which sells soda cans of cost 15¢ each, and we have only 2 types of coins: 10¢ and 5¢.

In this problem, our goal is make a state machine which can determine, how much of change should be returned, and when a can is dispenced.
```
Note: in this design we will ignore the capacity of the stock, which means, we’ll assume that there will always be can in the vending machine.
Also, we can assume that only one action could be made in every “clock cycle” or state
```
## RULES

1. First give the change.
2. Then dispense the can.

## Understanding the possibilities 
There are quite some options like:
1. entering no money
2. putting 5¢ followed by another 10¢ => getting the can
3. putting 10¢ followed by 10¢ => receiving  change => getting a can
4. putting 5¢ followed by 5¢ followed by followed by 10¢=> receiving  change => getting a can
5. putting 10¢ followed by 5¢ and getting the can
6. putting 5$ followed by 5¢ followed by 5¢ => getting a can.

## FSM diagram
Now we translate the options which are listed above into a FSM diagram/flow-chart:

{% include fsm.html %}

Lets try the soda can vending machine and look for the corresponding state changes FSM diagram in each of the above mentioned possibilities.

{% include disqus.html %}
