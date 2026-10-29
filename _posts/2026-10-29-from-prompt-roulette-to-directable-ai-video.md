---
layout: post
title: "From Prompt Roulette to Directable AI Video"
date: 2026-10-29 09:00:00 -0700
author: Russ Patterson
categories: [PlayCraft AI, Generative Video]
description: "Game-engine precision underneath. Neural rendering on top. A MIDI-driven experiment in controllable AI video."
permalink: /from-prompt-roulette-to-directable-ai-video/
---

<link rel="stylesheet" href="{{ '/assets/responsive-mux.css' | relative_url }}">
<script src="{{ '/assets/js/responsive-mux.js' | relative_url }}" defer></script>

<p style="margin: 0 0 16px;">
  <img src="{{ '/assets/images/russpatterson.jpg' | relative_url }}" alt="Russ Patterson" width="64" height="64" style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover;">
</p>

When I started working on [PlayCraft AI]({{ '/' | relative_url }}), one of the ideas I kept coming back to was that generative video has an amazing rendering engine, but not a very good control system.

{% assign clean_demo = site.data.midi_tone_temple | where: 'id', 'clean' | first %}
{% include responsive-mux.html video=clean_demo %}

*Final neural render driven by deterministic Unity timing and MIDI-controlled geometry.*

You can type a prompt, give it an image, try different seeds and settings, and sometimes get something incredible. But if you know exactly what you want the camera to do, exactly where you want something in 3D space, exactly when something should move, or exactly how it should line up with music, it can start to feel like prompt roulette.

You keep asking for variations and hoping the model gives you the thing you had in your head.

That seemed backwards to me.

I've spent most of my career building games, and game engines are already extremely good at the part generative video struggles with: control.

A game engine knows exactly where the camera is. It knows where every object is in 3D space. It knows the skeleton of an animated character. It understands depth, surfaces, physics, timing, lighting and animation. And, importantly, it can reproduce all of that exactly from frame to frame.

So the idea behind this part of PlayCraft AI has been pretty simple:

**Let the game engine handle control. Let the neural renderer handle appearance.**

Instead of asking an AI video model to invent the entire scene, I want to build the scene I want first, with the precision of a game engine, and then let the neural renderer transform that controlled scene into something visually interesting.

## MIDI Tone Temple

The latest experiment is something I'm calling **MIDI Tone Temple**.

I made a short piece of music in Ableton Live and exported both the finished audio and separate MIDI tracks for things like melody, chords and percussion.

Those tracks then go into the PlayCraft AI pipeline.

Inside Unity, the MIDI notes can actually control geometry in the 3D scene. Pitch can determine vertical position. Notes can move visual elements around the performers. Chord changes can happen together. Beat and downbeat analysis gives the system another layer of timing information.

Everything runs against the same deterministic frame clock.

So instead of telling a video model something vague like "make the glowing bars move with the music," the system already knows where those bars should be on every frame.

Unity can then render the information the neural renderer needs: the normal color image, depth, pose, surface normals and other control information.

The neural renderer gets to do what it is good at—turning that structure into a different visual world.

## Showing the Machinery

For this demo I also made a version that exposes some of what is happening underneath.

Underneath the generated video you can see the waveform, beat and downbeat information, percussion events, chord events, melody events and a frame-accurate playhead.

Another version shows the Unity control maps as they animate alongside the finished result.

{% assign pipeline_demo = site.data.midi_tone_temple | where: 'id', 'full-pipeline' | first %}
{% include responsive-mux.html video=pipeline_demo %}

*The same sequence with waveform, beat, MIDI, and animated Color, Depth, Pose, and Normal control data exposed. [See all demo views]({{ '/demo/' | relative_url }}#midi-tone-temple-demo).*

I like showing that because otherwise it can just look like another AI video.

The interesting part isn't really that there are AI-generated dancers in a futuristic temple.

The interesting part is that the scene has an underlying structure that I can control.

The music has structure. The 3D scene has structure. The animation has structure. The camera has structure. And the generated imagery is being asked to follow that structure rather than invent all of it from scratch.

## It's Not Finished

There are obvious problems in the current result.

The characters get mushy. Faces and bodies change. There are places where the performers start to break apart.

That clearly needs another rendering or character-consistency pass.

But I'm starting to see that as a different problem.

The question I originally wanted to answer was whether you could get the control and precision of a real-time 3D engine into an AI video workflow.

That part is increasingly starting to feel proven.

I can define the scene. I can control the camera. I can drive geometry with actual MIDI notes. I can synchronize everything against a known timeline. I can generate deterministic control maps and feed them into a neural renderer.

The final pixels still need improvement.

But the system underneath those pixels is becoming much less random.

## Somebody Should Build This

The more I work on this, the more I think somebody should turn this kind of architecture into a real production system.

There is a huge amount of work happening right now on better generative video models. Those models are going to keep getting better at rendering people, maintaining identity, following motion and producing high-quality imagery.

But better rendering doesn't eliminate the need for control.

Game engines already give us an incredibly mature environment for cameras, animation, physics, 3D layout, simulation and interaction.

Combining those two things feels like a pretty natural direction.

**Game-engine precision underneath. Neural rendering on top.**

That gets much closer to directing generative video instead of repeatedly asking for another version and hoping you get lucky.

PlayCraft AI isn't currently trying to finance, market and operate this as a standalone commercial video service.

But I would absolutely like to work with people who want to build things in this direction.

That could mean helping a game studio prototype AI-driven experiences, building controllable generative-video systems, creating music-reactive visuals, experimenting with interactive neural rendering, or helping turn this architecture into an actual product.

And if a company, studio or investor thinks this should become a product of its own, I'd be very interested in talking about helping design and build it.

I'm not claiming the technology is finished.

What I am saying is that after a lot of experiments, it's beginning to look like the original idea works.

And that makes the next question a much more interesting one:

**What should we build with it?**
