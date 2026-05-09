---
layout: page
title: Daydreamer Clips
permalink: /daydreamer-clips/
---

# Daydreamer Clips

Short-form regenerative AI video experiments from PlayCraft AI. The newest clips are first. Open a clip for its high-quality Mux player, shareable URL, and experiment notes.

<style>
  .clip-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 22px;
    margin-top: 28px;
  }

  .clip-card {
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    color: inherit;
    display: block;
    overflow: hidden;
    text-decoration: none;
    background: #fff;
  }

  .clip-card:hover {
    border-color: #aaa;
  }

  .clip-thumb {
    position: relative;
    background: #111;
  }

  .clip-thumb.landscape {
    aspect-ratio: 16 / 9;
  }

  .clip-thumb.portrait {
    aspect-ratio: 9 / 16;
    margin: 0 auto;
  }

  .clip-thumb img {
    display: block;
    height: 100%;
    object-fit: cover;
    width: 100%;
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
    color: #555;
    margin: 0;
  }

  .clip-meta {
    color: #555;
    display: block;
    font-size: 0.84rem;
    margin-top: 10px;
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
  {% assign clips = site.clips | sort: "sort_order" | reverse %}
  {% for clip in clips %}
    <a class="clip-card" href="{{ clip.url | relative_url }}">
      <div class="clip-thumb {{ clip.aspect | default: 'portrait' }}">
        <img
          src="https://image.mux.com/{{ clip.playback_id }}/thumbnail.jpg?time=1&width=640"
          alt="{{ clip.title | escape }} thumbnail"
          loading="lazy">
      </div>
      <div class="clip-copy">
        <h2>{{ clip.title }}</h2>
        <p>{{ clip.comment }}</p>
        <span class="clip-meta">Open clip page</span>
      </div>
    </a>
  {% endfor %}
</div>
