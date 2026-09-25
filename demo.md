---
layout: page
title: Demo
permalink: /demo/
---

# Shotmaker Lunch Demo

Five short clips showing Unity-directed shots, beat-synchronized neural rendering, and the control maps used to guide the sequence.

<style>
  .demo-video-list {
    display: grid;
    gap: 34px;
    margin-top: 28px;
  }

  .demo-video {
    margin: 0;
  }

  .demo-player {
    position: relative;
    padding-top: 56.25%;
    background: #111;
  }

  .demo-player iframe,
  .demo-player video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .demo-caption {
    margin-top: 10px;
    text-align: center;
  }

  .demo-caption strong {
    display: block;
    font-size: 1.05rem;
  }

  .demo-caption span {
    color: #555;
    display: block;
    margin: 6px auto 0;
    max-width: 680px;
  }
</style>

<div class="demo-video-list">
  <section class="demo-video">
    <div class="demo-player">
      <video controls playsinline preload="metadata" aria-label="Unity Beat-Synced Neural Render">
        <source src="{{ '/assets/videos/Music_Unity_presentation.mp4' | relative_url }}" type="video/mp4">
        <a href="{{ '/assets/videos/Music_Unity_presentation.mp4' | relative_url }}">Download the Unity Beat-Synced Neural Render video</a>.
      </video>
    </div>
    <div class="demo-caption">
      <strong>Unity Beat-Synced Neural Render</strong>
      <span>A music-aware AI video experiment built with PlayCraft AI. The soundtrack is analyzed for beats, downbeats, and energy, then Unity generates synchronized dance motion, camera and mandala effects, and control maps on the same musical timeline. Those controls drive AI video generation, with each visual section changing style on the beat before being assembled back with the original audio. The result is an early end-to-end prototype: the musical synchronization and scene control work well, while human character quality still shows the limits of current AI video models.</span>
    </div>
  </section>

  <section class="demo-video">
    <div class="demo-player">
      <iframe
        src="https://player.mux.com/dZMkoEyVIfGVySx01egCMcY6y01f5T00SadnoPhC3dfCGs"
        title="Control Maps - Grid"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowfullscreen>
      </iframe>
    </div>
    <div class="demo-caption">
      <strong>Control Maps - Grid</strong>
      <span>A grid view of the control maps used to guide the render.</span>
    </div>
  </section>

  <section class="demo-video">
    <div class="demo-player">
      <iframe
        src="https://player.mux.com/U00f01Ba00khU00ie5g2fxE9h35O1tlWwKPpA00VWWjg2ZYQ"
        title="Control Maps - Sequential"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowfullscreen>
      </iframe>
    </div>
    <div class="demo-caption">
      <strong>Control Maps - Sequential</strong>
      <span>The depth-control sequence shown as a readable control-map demo.</span>
    </div>
  </section>

  <section class="demo-video">
    <div class="demo-player">
      <iframe
        src="https://player.mux.com/yAW2UQexEgS41J0002qxeTOuYtuLW49hCBrDcrZaKu6W00"
        title="Sand Temple - Dark Stylized"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowfullscreen>
      </iframe>
    </div>
    <div class="demo-caption">
      <strong>Sand Temple - Dark Stylized</strong>
      <span>A darker Sand Temple style pass using the same underlying shot structure.</span>
    </div>
  </section>

  <section class="demo-video">
    <div class="demo-player">
      <iframe
        src="https://player.mux.com/b02axQhvUvETw9TeNksAgIwQW9j01xTte7tCmEzhW8g7g"
        title="Cyberpunk - Cool Background"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowfullscreen>
      </iframe>
    </div>
    <div class="demo-caption">
      <strong>Cyberpunk - Cool Background</strong>
      <span>A stylized cyberpunk render of the long directed shot.</span>
    </div>
  </section>
</div>
