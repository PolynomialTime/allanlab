---
title: "Liu AI Lab - Code Library"
layout: piclay
excerpt: "Liu AI Lab -- Code"
permalink: /code/
---

# Code Library

{% assign number_printed = 0 %}
{% for code in site.data.code %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if code.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ code.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ code.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ code.description }}</p>
  <p><em>{{ code.authors }}</em></p>
  <p><strong><a href="{{ code.link.url }}">{{ code.link.display }}</a><p><strong>
  <p class="text-danger"><strong> {{ code.news1 }}</strong></p>
  <p> {{ code.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}