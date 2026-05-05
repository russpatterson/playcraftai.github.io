---
layout: page
title: Daydreamer Clips
permalink: /daydreamer-clips/
---

# Daydreamer Clips

Short-form regenerative AI video experiments from PlayCraft AI. These are the clips selected for sharing, collected in one place so new renders, prompt studies, and notes can be added quickly.

<style>
  .clip-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 28px;
    margin-top: 28px;
  }

  .clip-card {
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
  }

  .clip-player {
    position: relative;
    background: #111;
  }

  .clip-player.landscape {
    aspect-ratio: 16 / 9;
  }

  .clip-player.portrait {
    aspect-ratio: 9 / 16;
    max-width: 360px;
    margin: 0 auto;
  }

  .clip-player iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .clip-copy {
    padding: 14px 16px 16px;
  }

  .clip-copy h2 {
    font-size: 1.08rem;
    line-height: 1.25;
    margin: 0 0 8px;
  }

  .clip-copy p {
    margin: 0;
    color: #555;
  }

  .clip-source {
    display: block;
    margin-top: 10px;
    color: #777;
    font-size: 0.8rem;
    overflow-wrap: anywhere;
  }
</style>

<div class="clip-grid">
  {% for clip in site.data.daydreamer_clips %}
    <article class="clip-card">
      <div class="clip-player {{ clip.aspect | default: 'portrait' }}">
        <iframe
          src="https://player.mux.com/{{ clip.playback_id }}"
          title="{{ clip.title | escape }}"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowfullscreen>
        </iframe>
      </div>
      <div class="clip-copy">
        <h2>{{ clip.title }}</h2>
        <p>{{ clip.comment }}</p>
        <span class="clip-source">{{ clip.source_filename }}</span>
      </div>
    </article>
  {% endfor %}
</div>
