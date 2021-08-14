---
layout: single
permalink: /me
author_profile: true
---

My interests lie in Computer Systems, particularly in Distributed Systems, Operating Systems, Computer Networks and Computer Architecture. I am fascinated by systems that operate at large scales. They have a variety of design choices, require an understanding of several domains, and provide interesting insights.

Currently, I am exploring Distributed Systems. I hope to share what I learn through my blog to help me and anyone else to develop a better understanding of it.

<img src="/assets/images/about/grad.jpg" style="max-width:200px;"/>

I am currently a MSCS Grad student at [Georgia Tech](https://www.gatech.edu){:target="_blank"}

Apart from my academic and professional interests, I enjoy sports, reading books, etc. throughout the day.

<img src="/assets/images/about/basketball.jpg" style="max-width:150px;"/>

I love to play Basketball! I follow the NBA and am a huge [Kyrie](https://twitter.com/kyrieirving){:target="_blank"} fan. Sometimes, I workout with weights and incorporate calisthenics

<img src="/assets/images/about/scrapbook.jpg" style="align:right; max-width:300px;"/>

Occasionally, I play badminton, football and swim. Used to follow football (evident through my scrapbook), although nowadays I take a look at the scores or watch highlights.

<img src="/assets/images/about/book.jpg" style="max-width:200px;"/> 

A list of books that I have read (and kept track of)

Non Fiction:
{% for book in site.data.about.books.nf %}
- [{{ book.title }}]({{ book.link }}){:target="_blank"}
{% endfor %}

Fiction:
{% for book in site.data.about.books.f %}
- [{{ book.title }}]({{ book.link }}){:target="_blank"}
{% endfor %}

