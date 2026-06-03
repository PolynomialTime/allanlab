---
layout: civilised
title: Contact
description: Contact Civilised Agent Lab at Building 903, 262 Khyber Pass, Newmarket, Auckland.
permalink: /contact/
---
{% assign cal = site.data.civilised_agent_lab %}
{% assign contact = cal.contact %}
<section class="page-hero" aria-labelledby="contact-page-title">
  <div class="shell split-section">
    <div class="section-label" data-reveal>{{ contact.label }}</div>
    <div>
      <h1 id="contact-page-title" data-reveal>{{ contact.title }}</h1>
      <p class="large-copy" data-reveal>{{ contact.intro }}</p>
    </div>
  </div>
</section>

<section class="contact-section" aria-labelledby="contact-title">
  <div class="shell contact-shell">
    <h2 id="contact-title" data-reveal>{{ contact.section_title }}</h2>
    <div class="contact-details">
      <address data-reveal>
        <strong>{{ contact.lead }}</strong>
        <span>{{ contact.affiliation }}</span>
        <a href="{{ contact.university_url }}">{{ contact.university }}</a>
        <a href="mailto:{{ contact.email }}">{{ contact.email }}</a>
        {% for line in contact.address %}
          <span>{{ line }}</span>
        {% endfor %}
      </address>
      <div class="map-panel" data-reveal>
        <iframe title="Map to {{ contact.section_title }}" src="https://www.google.com/maps?q={{ contact.map_query | uri_escape }}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <a class="map-link" href="https://www.google.com/maps/search/?api=1&query={{ contact.map_query | uri_escape }}">Open location in Google Maps</a>
      </div>
    </div>
  </div>
</section>
