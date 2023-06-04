---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D in Physics, Università di Pisa (Pisa, Italy) in cotutelle with LMU Munich (Munich, Germany), 2022
* M.S. in Physics, Università di Pisa (Pisa, Italy), 2018
* B.S. in Physics, Università di Pisa (Pisa, Italy), 2015

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>
