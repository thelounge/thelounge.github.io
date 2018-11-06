---
layout: documentation
title: Customize The Lounge on-the-fly using CSS
description: Tweaking The Lounge interface on-the-fly.
---

It is sometimes useful to tweak the interface to one's preferences. To do so without having to roll a full-fledged theme, or fork and maintain an existing theme, The Lounge offers an easy way to apply your own [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) snippets.

Towards the bottom of the **Settings** page, you will find a **Custom Stylesheet** field:

![Custom Stylesheet textarea which can be found in the Settings page](/img/custom-stylesheet-textarea.png){:width="468px"}

Simply add your custom CSS, and the modifications will be applied when clicking outside the field.

Note that The Lounge evolves rather quickly, and new versions often change the existing HTML and CSS files. This causes custom CSS snippets to often require changes as new versions get released. Use your [browser's developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools) when your trying to add or edit custom CSS.

## Oops, something has gone wrong

It is not impossible to accidentally apply changes that cannot be reverted, for example by hiding the custom CSS field itself. The Lounge fortunately comes with a failsafe should this unlikely situation occurs.

By loading The Lounge with `?nocss` at the end the URL (but before any `#xyz` fragment), any CSS in the field will be ignored. You can then remove the faulty lines, and reload the page without `?nocss`.

For example, on the demo, the URL would be <https://demo.thelounge.chat/?nocss>.

## Registry of CSS tweaks

Over time, users have come up with useful snippets to customize their experience of The Lounge. While they might be too niche to come up with the application by default, they are listed here in case they are useful to others.

Feel free to edit this page to fix existing snippets, or add other useful ones.

### Bigger custom CSS field

```css
#user-specified-css-input {
	height: 400px;
}
```

### Change the font

```css
body {
	font-family: "Comic Sans MS";
}
```

### Hide ident and hostmasks

Removes the `(~ident@irc.example.com)` part from join/part/quit actions.

```css
#chat .hostmask {
	display: none;
}
```

### Wrap nicks with chevrons

This will add &lt; and &gt; around sender's nicks, in the following format:

![Chevrons are wrapped around nicks](/img/wrap-nicks-with-chevrons.png){:width="80px"}

```css
.messages .from .user:before {
	opacity: 0.5;
	content: "<";
}
.messages .from .user:after {
	opacity: 0.5;
	content: ">";
}
```

### Compact sidebar

This makes the sidebar compact to display more networks/channels on the screen.

```css
#sidebar .networks {
	padding: 10px 0;
}

#sidebar .network {
	margin-bottom: 10px;
}

#sidebar .chan {
	padding: 5px 15px;
}
```

### No nick indentation

Always displays the chat window in the mobile form. It prevents messages from being aligned to the same column and instead displays messages right by the nick.

Before | After
--- | ---
![Before this tweak, all nicks are aligned to the right](/img/no-nick-indentation-before.png){:width="348px"} | ![After this tweak, nicks are not aligned](/img/no-nick-indentation-after.png){:width="272px"}

```css
#chat .content {
	padding-left: 0;
}
#chat .messages {
	display: block;
}
#chat .msg:last-child {
	height: auto;
}
#chat .time {
	display: inline;
}
#chat .from,
#chat .text {
	background: none;
	border: 0;
	display: inline;
}
#chat .from::after{
	display: none;
}
#chat .from {
	width: auto;
	padding-left: 5px;
	padding-right: 5px;
}
#chat .wrap {
	display: inline;
}
```

### Hide the sidebar close buttons

The <kbd>&times;</kbd> buttons that appear in the channel list on the currently active channel can sometimes be clicked by accident. This snippet removes it, so that the only way to leave a channel is by clicking "Leave" in the context menu.

```css
#sidebar button.close {
	display: none;
}
```

### Thinner channel sidebar

```css
#sidebar {
	width: 180px;
}
```

### Thinner user list

```css
#chat .sidebar {
	width: 150px;
}
#chat .channel .chat {
	right: 150px;
}
```

### Disable IRC styling in messages

This removes all colors, boldness, italics, underline, strikethrough, and monospace font styles that can be embedded in the messages themselves.

```css
#chat .text span[class*="irc-"] {
	color: inherit;
	background-color: inherit;
	font-weight: inherit;
	font-style: inherit;
	font-family: inherit;
	text-decoration: inherit;
}
```

### Hide nick in message input

```css
#nick {
	display: none;
}
```

### Change self-message color

```css
#chat .self .text {
	color: rebeccapurple;
}
```

### Hide join/part/quit in specific channel only

Assuming we want to hide some status messages in the `#thelounge` channel:

```css
#chat .chan[data-title="#thelounge"] .msg.quit,
#chat .chan[data-title="#thelounge"] .msg.part,
#chat .chan[data-title="#thelounge"] .msg.join {
	display: none;
}
```

### Hide messages coming from a specific user

A temporary way to `/ignore` somebody until it is implemented in The Lounge.

```css
#chat .msg[data-from="username"] {
	display: none;
}
```

{: .alert.alert-warning role="alert"}
Note that you will still be notified if this user mentioned your name, and messages from them will still increment the unread message counter.

### Adjust message spacing/density

This adjusts the vertical gap between messages. `2px` is the default spacing,
lower values will increase the density, higher values will improve readability.

```css
#chat .time,
#chat .from,
#chat .content {
	padding-top: 2px;
	padding-bottom: 2px;
}
```

### Hide link previews in a specific channel

```css
div .chan[data-title="#thelounge"] div.preview {
	display: none;
}
```

### Hide link previews for a specific user

This is useful to silence bots that automatically fetch URL previews, already being fetched by The Lounge's built-in preview mechanism.

```css
#chat .msg[data-from="MyBot"] div.preview  {
	display: none;
}
```

### Hide link previews for specific URLs

```css
div.preview[data-url*="github.com"] {
	display: none;
}
```

### Hide link previews by default for a specific user

This does not fully disable previews but hides them by default (even when link/media auto-expand is enabled) while still allowing to show it manually.
This is useful to silence bots that automatically fetch URL previews, already being fetched by The Lounge's built-in preview mechanism.

```css
#chat .msg[data-from="Wendy"] .toggle-button {
	transform: rotate(90deg);
}

#chat .msg[data-from="Wendy"] .toggle-button.opened {
	transform: rotate(0deg);
}

#chat .msg[data-from="Wendy"] .toggle-content {
	display: inline-flex !important;
}

#chat .msg[data-from="Wendy"] .toggle-content.show {
	display: none !important;
}
```

### Enlarge images in link previews

```css
#chat .toggle-content .thumb {
	max-width: 200px;
	max-height: 200px;
}
#chat .toggle-text {
	/* Larger images means that there is more than one line of space available for
	the description, so it can wrap to multiple lines */
	white-space: initial;
}
```

{% include abbreviations.md %}
