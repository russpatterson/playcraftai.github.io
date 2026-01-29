---
layout: post
title: "From Morning News to Markov Chains"
date: 2026-01-29
author: Russ Patterson
categories: [Machine Learning, Game Design, Playcraft AI]
description: "How a small habit change, curiosity, and simple models led to a lightning talk on predicting player behavior."
permalink: /from-morning-news-to-markov-chains/
---
![Lightning Talk](/assets/images/lightning_talk.jpg)

About a year ago, I made a small but intentional change to my mornings.  
Instead of watching the news with my coffee, I started watching videos I’d saved in my YouTube *Watch Later* queue.  
Sometimes that meant guitar lessons and music theory.  
Other times it meant talks on statistics, machine learning, and how models actually work.

I didn’t do this because I wanted to “get into AI.”  
I did it because I’m curious about how things work, and those videos kept pulling me in.

What surprised me was how quickly those ideas started to connect.

---

## Curiosity Meets Game Development
![tree](/assets/images/decision_tree.png)

I’d spent a long time thinking about player behavior in games, especially at scale.  
Retention. Difficulty tuning. When players get stuck. When they quit.  
Identifying different player types and the different ways people interact with the same system has always been a core part of building and operating games.

Seeing simple models framed as **“predict what happens next”** suddenly made a lot of those problems feel approachable in a new way.

Around the same time, I got mixed reactions from people about stepping away from the daily news cycle.  
Some felt I was burying my head in the sand or opting out of what was happening in the world.

What I found instead was the opposite.

Underneath all that noise was a vast body of ideas describing the world in new ways — often through geometry, probability, and structure.  
It felt less like disengaging from reality and more like discovering a deeper language for describing it.

---

## Modeling Player Behavior as States
![markov](/assets/images/Markov-Chains-in-NLP.webp)

As I kept learning, I couldn’t help but map these ideas onto problems I’d been dealing with for years in mobile games.

Player behavior is fundamentally about **decisions over time**.  
Players move through states.  
They react to success, failure, friction, reward.

The idea that you could model those transitions — even in very simple ways — felt powerful.

Markov chains stood out to me because they’re almost disarmingly simple.

No mystery.  
No black box.  

Just states, transitions, and probabilities learned from data.

They’re not new, and they’re not flashy, but they’re a great starting point for thinking clearly about player behavior.  
You’re not guessing what players might do next — you’re estimating it based on what’s already happened.

---

## The Lightning Talk

When I had the opportunity to give a lightning talk to the **AI Game Dev Community**, it felt like a great chance to share one small piece of this journey.

I focused on **simple, on-device models** that game developers can build themselves.

Not giant systems.  
Not hype.  

Just practical tools for predicting behavior and keeping designers in control.

The best part of the talk was the discussion afterward.  
The questions made it clear that a lot of people are thinking about the same shift — how to move from reactive design to informed design, and how to use these tools without losing creative control.

This talk wasn’t a conclusion for me.  
It was a checkpoint.

I’m still learning, still experimenting, and still excited about how small, understandable models can help us design better games.

---

## Talk Materials

- 📑 [**Slide deck:**](https://docs.google.com/presentation/d/16ZgtuI-N4kCoWhc4k0fryquXmhGanRxYDJloGvctkFY/edit?pli=1&slide=id.p#slide=id.p)
- 🎥 [**Lightning talk recording:**](https://www.youtube.com/watch?v=XpK0CTMJOaA)

If you’d like to continue the conversation or learn more about my work, you can find me here:  
👉 [** my portfolio](https://russpatterson.github.io)

Thanks again to Usman, Amna and the AI Game Dev Community for hosting the talk and creating space for these conversations.
