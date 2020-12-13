---
title: "Liu AI Lab - Seminars"
layout: gridlay
excerpt: "Liu AI Lab -- Seminars."
sitemap: false
permalink: /seminars/
---

# Group Seminars

{% for sem in site.data.seminars %}

  <strong>Title: {{ sem.title }}</strong><br/>
  <em>Date: {{ sem.date }}</em><br/>
  <em>Abstract: {{ sem.abstract }} </em><br/><a href="{{ sem.slides }}"></a>

{% endfor %}