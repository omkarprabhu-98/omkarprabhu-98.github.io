---
title: Projects
layout: single
permalink: /cs
author_profile: true
---

My projects and open source work can be found on [GitHub](https://github.com/omkarprabhu-98)

Some selected project are mentioned below. Have to update.

{% for project in site.data.cs.projects %}
#### [{{ project.title }}]({{ project.link }}){:target="_blank"}
{{ project.libs }}

{% for d in projects.desc %}
- {{ d }}
{% endfor %}

{% endfor %}

# Experience

My [Resume](https://drive.google.com/file/d/1kjG3KJ63q_i92vl-cmtvMJThuuqeTp8B/view){:target="_blank"}.

I have worked as an Engineering Analyst at Goldman Sachs and interned there before as well. I have done internships at IIT Bombay and Savemonk, a startup at NITK.

Please take a look at my LinkedIn for more details.