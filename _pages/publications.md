---
layout: civilised
title: Publications
description: Selected publications related to Civilised Agent Lab and Liu AI Lab.
permalink: /publications/
---
{% assign cal = site.data.civilised_agent_lab %}
{% assign publications = cal.publications %}
<section class="page-hero" aria-labelledby="publications-page-title">
  <div class="shell split-section">
    <div class="section-label" data-reveal>{{ publications.label }}</div>
    <div>
      <h1 id="publications-page-title" data-reveal>{{ publications.title }}</h1>
      <p class="large-copy" data-reveal>{{ publications.intro }}</p>
    </div>
  </div>
</section>

<section class="publications-section" aria-labelledby="publications-list-title">
  <div class="shell">
    <div class="publications-intro">
      <div class="section-label" data-reveal>{{ publications.section_label }}</div>
      <h2 id="publications-list-title" data-reveal>{{ publications.section_title }}</h2>
    </div>

    <div class="publication-year-block" data-reveal>
      <h3>Selected</h3>
      <ol class="publication-list">
        {% for pub in site.data.publist %}
          <li>
            <strong>{{ pub.title }}</strong>
            {% if pub.description %}<span>{{ pub.description }}</span>{% endif %}
            {% if pub.authors %}<em>{{ pub.authors | markdownify | strip_html }}</em>{% endif %}
            {% if pub.link.url %}
              <a class="text-link" href="{{ pub.link.url }}">{{ pub.link.display | default: "Open publication" }} -></a>
            {% endif %}
          </li>
        {% endfor %}
      </ol>
    </div>
  </div>
</section>
