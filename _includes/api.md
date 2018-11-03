
{% assign apis = site.api | sort: "title" | where: "type", include.type %}
{% for api in apis %}
- [{{ api.title }}]({{ api.url }}): {{ api.description }}
{%- endfor %}
