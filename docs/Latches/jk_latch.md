---
layout: default
title: JK latch
parent: Latches
nav_order: 3
---

# JK latch
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}
 
## Introduction

JK latch is similar to RS latch. This latch consists of 2 inputs J and K as shown in the below figure. The ambiguous state has been eliminated here: when the inputs of Jk latch are high, then output toggles. The output feedback to inputs is the only difference that can be seen here, which is not there in the RS latch.

<div style="text-align:center"><img src="../../assets/images/jk_latch.png" /></div>

## State table

| J      |    K    |   Q(t+1) |
|:------:|:-------:|:--------:|
|  0     |    0    |  Q(t)    |
|  0     |    1    |    0     |
|  1     |    0    |    1     |
|  1     |    1    |  Q(t)'   |