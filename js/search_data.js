---
---
window.search_data_loaded({
  {%- assign documents = site.documents | concat: site.pages %}
  {%- for document in documents %}
  {%- unless document.title %}{% continue %}{% endunless %}
  "{{ document.url }}": {
    "title": "{{ document.title | xml_escape }}",
    "category": "{{ document.category | xml_escape }}",
    "content": {{ document.content | newline_to_br | strip_newlines | replace: "<br />", " " | strip_html | jsonify }}
  }
  {%- unless forloop.last -%},{%- endunless -%}
  {%- endfor %}
});
