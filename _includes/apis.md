
{% assign apis = site.apis | sort: "title" | where: "type", include.type %}
{% for api in apis %}
- [{{ api.title }}]({{ api.url }}): {{ api.description }}
{%- endfor %}
