---
layout: page
title: Demo
permalink: /demo/
---

# MIDI Tone Temple Demo

A music-reactive visual experiment driven by exported MIDI, beat analysis, and deterministic Unity control geometry. The focus is synchronization: actual music structure drives the geometry around the performers. Human-character rendering is still imperfect and experimental.

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

<link rel="stylesheet" href="{{ '/assets/responsive-mux.css' | relative_url }}">
<script src="{{ '/assets/js/responsive-mux.js' | relative_url }}" defer></script>

<div class="demo-video-list" id="midi-tone-temple">
{% for video in site.data.midi_tone_temple %}
  <section class="demo-video" aria-labelledby="midi-{{ video.id }}-heading">
    <h2 id="midi-{{ video.id }}-heading">{{ video.title }}</h2>
    {% include responsive-mux.html video=video %}
    <div class="demo-caption"><span>{{ video.caption }}</span></div>
  </section>
{% endfor %}
</div>

## How it was made

1. Compose a short section in Ableton Live and export the audio plus separate melody, chord, and percussion MIDI tracks.
2. Import them into the PlayCraft AI / Unity Music-Aware workflow. MIDI note values drive visible geometry vertically around the performers; beat analysis and a manually verified first downbeat keep the visual timeline aligned with the music.
3. Capture deterministic control-map sequences from Unity, then use the existing AI video pipeline to render the stylized sequence.
4. Export the frame-accurate analysis strip separately from Unity and composite it beneath the generated video. Both use the same 24 FPS frame clock; the exported audio starts at time zero.

## Earlier Shotmaker demos

Unity-directed shots, beat-synchronized neural rendering, and the control maps used to guide the sequence.

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
