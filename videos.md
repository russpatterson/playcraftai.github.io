---
layout: page
title: Videos
permalink: /videos/
---

# Shotmaker Experiments - The Daydreamer Evolution

A sequence of experiments exploring how structured 3D scenes, AI feedback, and music-driven parameter changes interact to produce evolving visual behavior.

These videos are grouped by capability — from basic structure preservation to physics interaction and beat-synchronized hallucination.

<div style="position: relative; padding-top: 56.25%;">
  <iframe
    src="https://player.mux.com/RBZAzoxNDnorAcTVoWfa6tPj6XE02au8v3etXUcoIG00k"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
    allowfullscreen>
  </iframe>
</div>

<div style="text-align: center; margin-top: 8px; margin-bottom: 28px;">

<strong>Sand Temple Demo</strong>

<div style="margin-top: 6px; max-width: 680px; margin-left: auto; margin-right: auto;">

The first moment the system started to come alive — where feedback, hallucination, and music-driven parameter changes produced something visually unexpected.

</div>

</div>

---

The original goal of Shotmaker was to build a repeatable AI filmmaking process using structured 3D scene data from game engines.

But generative AI does something unusual. It hallucinates new details — shapes, textures, and motion that were never explicitly programmed. Normally those hallucinations flicker and disappear from frame to frame.

In this system — now called **Daydreamer** — a feedback mechanism allows the model to remember what it invented and carry those ideas forward. You can watch it explore and play with its own creations over time.

The visual shifts are not random. They are driven by the music.

On each beat, rendering parameters like **denoising**, **CFG**, and other weights are dynamically adjusted. It is similar to shaking an Etch-A-Sketch on the downbeat — the system clears space and invents something new, then builds on it in the next moments.

These experiments are both artistic exploration and technical research into how controllable AI video systems might evolve.

---

# 1. Structure — The System Learns the Scene

These experiments demonstrate how the renderer begins with a stable 3D foundation from Unity and gradually introduces hallucinated detail as parameters increase.

The key question explored here:

How much creative variation can be introduced while preserving spatial structure?



<div style="position: relative; padding-top: 56.25%;">
  <iframe
    src="https://player.mux.com/clY01Hd01JAjT5Ih2Y02ugODVJ7dVCOep4LTQJX00EDrqso"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
    allowfullscreen>
  </iframe>
</div>

<div style="text-align: center; margin-top: 8px; margin-bottom: 28px;">

<strong>Sand Temple Ramp — Controlled Hallucination</strong>

<div style="margin-top: 6px; max-width: 680px; margin-left: auto; margin-right: auto;">

Starting from a clean Unity frame, CFG scale is gradually increased.  Brief flashes on music downbeats (the one count).
The scene transitions from structured geometry to imaginative interpretation while maintaining spatial continuity.

</div>

</div>

---

# 2. Style — Portrait Mode and Composition

These experiments explore vertical composition designed for mobile viewing and social media formats.

The renderer focuses on character presence while maintaining environmental context.
<div style="position: relative; padding-top: 56.25%;">
  <iframe
    src="https://player.mux.com/IAmQWTANBWIMGsN9DEcHOQ003d01ByrZfx30001PofU00aHs"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen>
  </iframe>
</div>

<div style="text-align: center; margin-top: 8px; margin-bottom: 28px;">

<strong>Sand Temple Portrait — Environmental Emergence</strong>

<div style="margin-top: 6px; max-width: 680px; margin-left: auto; margin-right: auto;">

Architectural structures emerge beneath the dancer as the system invents spatial detail from depth and motion cues.

</div>

</div>

---
<div style="position: relative; padding-top: 56.25%;">
  <iframe
    src="https://player.mux.com/b8KKjP2t2w00plENxLWMIcglskhCIPKFOjufGjrq6u300"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen>
  </iframe>
</div>

<div style="text-align: center; margin-top: 8px; margin-bottom: 28px;">

<strong>Higher Denoising — Emergent Character Variations</strong>

<div style="margin-top: 6px; max-width: 680px; margin-left: auto; margin-right: auto;">

With higher denoising values, the renderer begins to explore alternate visual interpretations of the dancer.  
These variations appear briefly and then stabilize, demonstrating how creative exploration can be introduced without losing motion continuity.

</div>

</div>

<div style="position: relative; padding-top: 56.25%;">
  <iframe
    src="https://player.mux.com/AuRNIt17tkk6rAtz6oLqFiB1HRlYRSaAI00J73EkVI8E"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen>
  </iframe>
</div>

<div style="text-align: center; margin-top: 8px; margin-bottom: 28px;">

<strong>Portrait Variant — Architectural Exploration</strong>

<div style="margin-top: 6px; max-width: 680px; margin-left: auto; margin-right: auto;">

In this variation, the system begins to invent architectural structures beneath the dancer, expanding the scene while maintaining spatial stability.

</div>


</div>

---
# 3. Energy — Music Makes It Move

These experiments synchronize rendering behavior to musical structure and sound energy.

Instead of using fixed render settings, the system automates denoising and other parameters across time. Downbeats create larger pulses, intermediate beats create smaller pulses, and additional energy-driven bias can push the renderer harder when the music intensifies.

In the plot below, the denoising curve is built from several components: a base value, beat-driven pulse additions, and an experimental override in measure 7 that deliberately drives the system into a stronger hallucination event.

<img src="/assets/images/payload_denoise_plot.png" alt="Plot of beat-driven denoising automation showing downbeat pulses, beat pulses, and a larger override in measure 7" style="max-width: 100%; height: auto; display: block; margin: 18px auto 28px auto;">

<div style="position: relative; padding-top: 56.25%;">
  <iframe
    src="https://player.mux.com/fvZT00W4OIWPIexyZ5i01Zjb00F5O02yANggxYpudv0101UTM"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen>
  </iframe>
</div>



<div style="text-align: center; margin-top: 8px; margin-bottom: 28px;">

<strong>Funky Town — Portrait Variation</strong>

<div style="margin-top: 6px; max-width: 680px; margin-left: auto; margin-right: auto;">

A refined portrait version of the Funky Town sequence, emphasizing rhythm-driven motion and tighter framing around the dancer.

</div>

</div>
<div style="position: relative; padding-top: 56.25%;">
  <iframe
    src="https://player.mux.com/dLrJzdVUfKQsPUwX27AxZyyXswrrf5Y012LU7w2kH0000U"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen>
  </iframe>
</div>
---

<div style="text-align: center; margin-top: 8px; margin-bottom: 28px;">

<strong>Funky Town — Beat-Driven Motion</strong>

<div style="margin-top: 6px; max-width: 680px; margin-left: auto; margin-right: auto;">

Visual intensity increases on musical beats, producing rhythmic bursts of motion and style changes.

</div>

</div>

---
<div style="position: relative; padding-top: 56.25%;">
  <iframe
    src="https://player.mux.com/9FqAFkkSQUKxFB8dEXq002AB8fNVJDIXZMocqxAk1L8U"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen>
  </iframe>
</div>

<div style="text-align: center; margin-top: 8px; margin-bottom: 28px;">

<strong>Energy Mapping — Sound Controls Rendering</strong>

<div style="margin-top: 6px; max-width: 680px; margin-left: auto; margin-right: auto;">

Audio amplitude is mapped directly to rendering parameters, allowing the system to react to music intensity in real time.

</div>

</div>

<div style="position: relative; padding-top: 56.25%;">
  <iframe
    src="https://player.mux.com/bfNjYWItmrzvI5OvoG78i6b82pGTG0277AfF5ayvl65o"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen>
  </iframe>
</div>

<div style="text-align: center; margin-top: 8px; margin-bottom: 28px;">

<strong>Go-Go Dancers — Beat-Synchronized Motion</strong>

<div style="margin-top: 6px; max-width: 680px; margin-left: auto; margin-right: auto;">

This lower-denoising experiment pushes much harder on the downbeats and beats. The result is one of the clearest examples of the dancers syncing their pose and motion to the music while still allowing controlled bursts of hallucination.

</div>

</div>
<div style="max-width: 760px; margin: 28px auto 10px auto;">

<img src="/assets/images/bigsync_payload_denoise_plot.png"
     alt="Denoising automation driven by musical beats and downbeats"
     style="width: 100%; height: auto; display: block; border-radius: 6px;">

<div style="text-align: center; font-size: 0.95em; color: #666; margin-top: 8px; max-width: 680px; margin-left: auto; margin-right: auto;">

The dancers appear to synchronize with the music because the rendering parameters are being actively driven by the beat.  
This plot shows the denoising signal used in the experiment, with steady baseline values and sharp increases on downbeats that inject motion and variation at precise musical moments.

</div>

</div>
---
# 4. Physics — Interaction with Real Motion

These experiments test how the renderer behaves when interacting with simulated physical objects.

The goal is to preserve motion consistency while still allowing creative hallucination.

<div style="position: relative; padding-top: 56.25%;">
  <iframe
    src="https://player.mux.com/28MkXvQWb900ALDSg015M2nGp7qEhTAn0000Bn3nFy7EVLw"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen>
  </iframe>
</div>

<div style="text-align: center; margin-top: 8px; margin-bottom: 28px;">

<strong>Boing Ball Physics — High Hallucination Attempt</strong>

<div style="margin-top: 6px; max-width: 680px; margin-left: auto; margin-right: auto;">

This earlier test pushed the hallucination much harder.  
The tradeoff was that the Boing Ball itself mostly disappeared, only appearing briefly near the end as the renderer prioritized invention over structure.

</div>

</div>

---

<div style="position: relative; padding-top: 56.25%;">
  <iframe
    src="https://player.mux.com/zOtPEyOiUgW7IF79LcmEmZHb0002hO4iCOtJ5WfusafuU"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen>
  </iframe>
</div>

<div style="text-align: center; margin-top: 8px; margin-bottom: 28px;">

<strong>Boing Ball Physics — Structure vs Imagination</strong>

<div style="margin-top: 6px; max-width: 680px; margin-left: auto; margin-right: auto;">

After the more aggressive version largely lost the Boing Ball, this follow-up test lowered denoising, strengthened segmentation, and adjusted prompts to preserve the object more clearly. The result keeps the ball visible for much more of the shot while still allowing brief pulses into more stylized hallucination.

</div>

</div>

---
# 5. How It Works — Inside the System

This video shows the internal signals driving the renderer.

Unity frames, control maps, and parameter changes are displayed in real time, revealing how structure, motion, and music interact to produce the final result.



<div style="position: relative; padding-top: 56.25%;">
  <iframe
    src="https://player.mux.com/B5VzCAh3RYr8Q100MSAUBsK5aHrPGGq008t01bH6M00Tnmo"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    allowfullscreen>
  </iframe>
</div>

<div style="text-align: center; margin-top: 8px; margin-bottom: 28px;">

<strong>System Overview — Control Maps and Beat Synchronization</strong>

<div style="margin-top: 6px; max-width: 680px; margin-left: auto; margin-right: auto;">

A technical walkthrough showing the underlying data driving the visuals, including depth maps, segmentation, motion signals, and beat synchronization.

</div>

</div>

---