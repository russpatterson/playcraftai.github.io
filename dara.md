---
layout: page
title: Music Ideas for Dara
permalink: /dara/
sitemap: false
---

# Music Ideas for Dara

A private working page of sample tracks and rhythmic ideas for collaboration. This page is not linked from the main site navigation.

<style>
  .dara-note {
    color: #555;
    margin-bottom: 24px;
  }

  .audio-list {
    display: grid;
    gap: 22px;
    margin-top: 28px;
  }

  .audio-card {
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    background: #fff;
    overflow: hidden;
  }

  .audio-player {
    position: relative;
    aspect-ratio: 16 / 9;
    max-height: 220px;
    background: #111;
  }

  .audio-player iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .audio-copy {
    padding: 14px 16px 16px;
  }

  .audio-title-row {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 8px 12px;
    margin-bottom: 8px;
  }

  .audio-title-row h2 {
    font-size: 1.12rem;
    line-height: 1.25;
    margin: 0;
  }

  .audio-meta {
    color: #666;
    font-size: 0.9rem;
  }

  .audio-copy p {
    color: #555;
    margin: 0;
  }

  .audio-file {
    display: block;
    margin-top: 10px;
    color: #777;
    font-size: 0.82rem;
    overflow-wrap: anywhere;
  }
</style>

<p class="dara-note">
These are 120 BPM sketches and beat beds for listening, discussion, and choosing a direction.
</p>

<div class="audio-list">
  {% for track in site.data.dara_audio %}
    <article class="audio-card">
      <div class="audio-player">
        <iframe
          src="https://player.mux.com/{{ track.playback_id }}"
          title="{{ track.title | escape }}"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowfullscreen>
        </iframe>
      </div>
      <div class="audio-copy">
        <div class="audio-title-row">
          <h2>{{ track.title }}</h2>
          <span class="audio-meta">{{ track.duration }} · {{ track.bpm }} BPM</span>
        </div>
        <p>{{ track.comment }}</p>
        <span class="audio-file">{{ track.file_stem }}</span>
      </div>
    </article>
  {% endfor %}
