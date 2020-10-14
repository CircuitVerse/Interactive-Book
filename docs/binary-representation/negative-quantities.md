---
layout: circuitverse
title: Negative quantities
nav_order: l0s001
cvib_level: basic
parent: Binary representation
has_children: false
---


# Negative quantities
{: .no_toc}


## Table of contents
{: .no_toc}

1. TOC
{:toc}


## Signed and unsigned numbers

Currently, we have just looked at **unsigned** numbers - they can only be positive, as there is no sign. However, sometimes we need to work with **negative numbers** too. To do this, we add a **sign bit** on the far left of the binary number, which indicates whether the number is positive (\`0\`) or negative(\`1\`).

For example, the number \`10000011\` would be \`131\` if the number is **unsigned**, but if the number is **signed**, the actual representation would be \`-3\`

-   The first bit \`1\` represents that the number is negative
-   The remaining bits \`0000011\` represent the actual number, \`3\`

The downside to using a signed number is that it removes one bit from the actual number representation, halving the maximum value.

-   The minimum and maximum values for an \`unsigned 8-bit\` number would be \`0\` to \`2<sup>8</sup>-1\` (\`0\` to \`255\`)
-   The minimum and maximum values for a \`signed 8-bit\` number would be \`-2<sup>7</sup>-1\` to \`2<sup>7</sup>-1\` (\`-127\` to \`127\`)
