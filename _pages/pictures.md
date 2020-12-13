---
title: "Liu AI Lab - Gallery"
layout: piclay
excerpt: "Liu AI Lab -- Pictures"
permalink: /pictures/
---

# Gallery

## Meetings

{% assign number_printed = 0 %}
{% for pic in site.data.pictures %}

{% assign even_odd = number_printed | modulo: 3 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/{{ pic.image }}" class="img-responsive" width="95%" style="float: left" />
<h5> {{ pic.title }}</h5>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}


{% endfor %}

{% assign even_odd = number_printed | modulo: 3 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}


<!--
#### Weekly Meeting (with Christmas Cakes!).  4 Dec 2020.
<figure>
<img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/meeting20201204.jpeg" width="45%" >
</figure>

#### Ceremoney for the Ending of the 2020 Academic Year. 27 Nov 2020.
<figure>
<img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/year_ending_2020.jpg" width="45%" >
</figure>


#### Weekly Meeting. 20 Dec 2019.
<figure>
<img src="{{ site.url }}{{ site.baseurl }}/images/picpic/Gallery/meeting20191220.jpg" width="45%" >
</figure>
-->

