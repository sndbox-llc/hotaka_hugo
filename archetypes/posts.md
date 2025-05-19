---
title: "{{ replace .Name "-" " " | title }}"
description: ""
date: {{ .Date }}
---

![{{ replace .Name "-" " " | title }}]({{ .Name | urlize }}.jpg)
{ .img-fluid }
