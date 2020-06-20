---
layout: default
title:  Interactive FSM
nav_order: 22
---

# Interactive FSM

In this module, you will learn how to use a Final-State-Machine(FSM) which describes the working of a Soda vending machine:

## Problem
Assume, you have a soda vending machine which sells soda cans of cost 15¢ each, and you have only 2 types of coins: 10¢ and 5¢.

In this problem, our goal is to make a state machine which can determine, how much change should be returned, and when a can is dispenced.
```
Note: In this design, ignore the capacity of the stock, which means, we’ll assume that there will always be can in the vending machine.
Also, you can assume that only one action could be made in every “clock cycle” or state.
```
## Rules

1. First, give the change.
2. Then dispense the can.

## Understanding the possibilities 
There are quite some options like:
1. entering no money.
2. putting 5¢ followed by another 10¢ => getting the can.
3. putting 10¢ followed by 10¢ => receiving  change => getting a can.
4. putting 5¢ followed by 5¢ followed by 10¢=> receiving  change => getting a can.
5. putting 10¢ followed by 5¢ and getting the can.
6. putting 5$ followed by 5¢ followed by 5¢ => getting a can.

## FSM diagram
Now translate the options which are listed above into an FSM diagram/flow-chart:

{% include fsm.html %}

Lets try the soda can vending machine and look for the corresponding state changes FSM diagram in each of the above mentioned possibilities.
