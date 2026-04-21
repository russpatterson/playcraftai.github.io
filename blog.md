---
layout: page
title: Blog
permalink: /blog/
---

# Blog

This blog tracks the evolution of **Shotmaker**, along with experiments in AI video, controllable visual storytelling, and the short-form films and prototypes helping shape the project.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %-d, %Y" }}
    </li>
  {% endfor %}
</ul>