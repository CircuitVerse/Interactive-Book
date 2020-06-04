---
layout: default
title: T latch
parent: Latches
nav_order: 4
---

# T latch
{: .no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## Introduction

T latch is formed when the inputs of the JK latch are shorted. When the input is high, then the  output toggles.

## State table 

| T      |   Q(t)  |   Q(t+1) |
|:------:|:-------:|:--------:|
|  0     |    0    |    0     |
|  0     |    1    |    1     |
|  1     |    0    |    1     |
|  1     |    1    |    0     |
