---
layout: post
title: "Start Here: Building the MNIST Digit Classifier"
description: "Every game developer should train at least one neural network. Here’s the 'Hello World' of machine learning, and why it still matters."
tags: [ml, neural-networks, game-development, learning, mnist, mlp, history]
---
![Russ Patterson](/assets/images/russpatterson.jpg){: style="width:110px;border-radius:55px;margin-bottom:0.75rem;" }

If you want to truly *learn* how machine learning works — not just vibe with ChatGPT or Copilot — start here.

Build the **MNIST digit classifier**. It’s the “Hello World” of neural networks, and it’s been teaching machines to recognize hand-drawn digits since the 1980s.

---

## Why start with MNIST?
Because it’s simple enough to understand end-to-end, yet deep enough to teach you everything modern neural networks still do.

You’ll train a model to look at a 28×28 pixel image of a hand-drawn number (0–9) and tell which digit it is.  
That’s it: ten possible outputs, thousands of examples. A perfect playground.

---

## A bit of history
The **Multi-Layer Perceptron (MLP)** dates back to the 1980s — pioneers like **Rumelhart, Hinton, and Williams** were exploring how clusters of neurons might work together to process information.

Their breakthrough was **backpropagation** — the idea that a network could *learn from its mistakes* by sending the error backward through the layers and adjusting internal weights.  
That’s still how we train deep learning models today.

---

## The architecture
In the MNIST example:
- **Input layer:** one neuron per pixel → 28×28 = **784 inputs**
- **Hidden layers:** usually **two**, adjustable in size (try 128 or 256 neurons each)
- **Output layer:** **10 neurons** (digits 0–9)

Each neuron holds a vector of floating-point weights.  
As data flows forward, each layer multiplies those weights and applies an activation function (like ReLU or sigmoid).  
At the end, you get ten probabilities — one for each digit.  
Whichever neuron has the highest probability is the network’s “guess.”

Early on, it’ll be wrong.  
Backpropagation tweaks the weights slightly after each mistake, reducing the error for next time.  
That cycle of *guess → correct → improve* is learning.

---

## Training vs. validation — and the danger of overfitting
To train the network, you feed it **labeled data**: thousands of hand-drawn digits, each tagged with its true value.  
But you don’t use all of it.  
You hold back about **20%** as **validation data** — samples the model never sees during training.

That’s how you test if your model is *generalizing* or just memorizing.

If you train too long, the model starts to **overfit** — the grooves it carves from the training data get too deep.  
It becomes great at recognizing the digits it’s seen, but worse at recognizing new ones.

You can see this happening when you plot **training loss** and **validation loss** over time:  
- Training loss keeps going down  
- Validation loss bottoms out, then starts to rise  

That’s your cue to stop. The network is getting worse at generalizing, even while it’s still improving on the training set.

That’s one of the most important lessons in ML — and one game developers already understand from tuning systems: *too much optimization can kill flexibility.*

---

## Tuning the hidden layers
The middle layers — their **number** and **size** — have a huge impact on performance.  
More neurons mean more representational power, but also more compute and risk of overfitting.  
As game developers, this part will feel familiar: it’s like balancing polygon count, physics accuracy, and frame rate.

Experiment. Start small.  
Change the hidden layer dimensions, watch how accuracy and loss curves change, and you’ll start to *feel* how neural networks learn.

---

## Why every game developer should do this
As a game dev, you already think in systems and feedback loops.  
A neural network is just a **feedback loop that learns**.  

Training one yourself makes ML stop being magic and start being intuitive.  
You’ll see how simple math, repeated thousands of times, becomes intelligence.

The good news: you don’t need a GPU farm or a PhD.  
Pick your favorite LLM and say:

> “Help me build an MNIST digit classifier in PyTorch.”

Then go line by line until you understand every part.  
That’s the gateway to high-dimensional thinking — the jump from 3D to 128D.

And here’s the reality:  
this is **where the industry is going**.  
Every wave of technology has raised the bar for what it means to be a developer —  
from 2D to 3D, from offline to online, from console to mobile.  
Now, it’s AI.  

If you want to be part of what comes next, this is **the cost of a ticket**.  
It’s not about keeping up — it’s about *staying relevant* and *shaping the future* of how games learn, adapt, and respond.

---

> **The tools are easy.**  
> **The mindset is the work.**  
> Every developer should experience their first model learning to see.
