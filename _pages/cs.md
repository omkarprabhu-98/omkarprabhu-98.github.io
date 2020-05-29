---
title: Projects
layout: single
permalink: /cs
author_profile: true
---

My projects and open source work can be found on [GitHub](https://github.com/omkarprabhu-98)

Some selected project are mentioned below

{% for project in site.data.cs.projects %}
#### [{{ project.title }}]({{ project.link }}){:target="_blank"}
{{ project.sub }}

{{ project.desc }}
{% endfor %}

# Experience

[CV](https://drive.google.com/file/d/1asa-ttNgleZvLZ4Pz3YSoH4pXC1QYE48/view){:target="_blank"}

I have had the opportunity to work at an startup, university and an industry all of which have helped me tremendously.

{% for experience in site.data.cs.experiences %}
#### [{{ experience.title }}]({{ experience.link }}){:target="_blank"}
{experience.desc}
{% endfor %}
