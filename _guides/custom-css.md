---
layout: documentation
title: Customize The Lounge on-the-fly using CSS
description: Collection of snippets to tweak the UI of The Lounge on-the-fly
---

It is sometimes useful to tweak the interface to one's preferences. To do so without having to roll a full-fledged theme, or fork and maintain an existing theme, The Lounge offers an easy way to apply your own [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) snippets. Be sure to enable **Advanced settings** at the top of the **Settings** page before proceeding.

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
textarea#user-specified-css-input {
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

### Hide account from join messages

Removes the `[ExampleAccount]` part from join messages.

```css
#chat .account {
	display: none;
}
```

### Hide realname from join messages

Removes the `Example realname -` part from join messages.

```css
#chat .realname {
	display: none;
}
```

### Wrap nicks with chevrons

This will add &lt; and &gt; around sender's nicks, in the following format:

![Chevrons are wrapped around nicks](/img/wrap-nicks-with-chevrons.png){:width="80px"}

```css
#chat .msg[data-type="message"] .from .user::before {
	content: "<";
}
#chat .msg[data-type="message"] .from .user::after {
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

.channel-list-item {
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
#chat .time {
	display: inline;
}
#chat .from,
#chat .text {
	background: none;
	border: 0;
	display: inline;
}
#chat .from {
	width: auto;
	padding-left: 5px;
	padding-right: 5px;
	-webkit-mask-image: none;
	mask-image: none;
}
```

### Hide the sidebar close buttons

The <kbd>&times;</kbd> buttons that appear in the channel list on the currently active channel can sometimes be clicked by accident. This snippet removes it, so that the only way to leave a channel is by clicking "Leave" in the context menu.

```css
.channel-list-item.active .close-tooltip {
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
#chat .userlist {
	width: 150px;
}
```

### Disable IRC styling in messages

This removes all colors, boldness, italics, underline, strikethrough, and monospace font styles that can be embedded in the messages themselves.

```css
#chat .content span[class*="irc-"] {
	color: inherit;
	background-color: inherit;
	font-weight: inherit;
	font-style: inherit;
	font-family: inherit;
	text-decoration: inherit;
}
```

### Change self-message color

```css
#chat .self .content {
	color: rebeccapurple;
}
```

### Custom nick colors

This code will color the target nick in the userlist and in the chat area. The
`i` is for case-insensitive matching.

```css
#chat .msg .user[data-name="targetnick" i],
#chat .userlist .names .user[data-name="targetnick" i] {
	color: #ff79c6;
}
```

### Hide join/part/quit in specific channel only

Assuming we want to hide some status messages in the `#thelounge` channel:

```css
#chat-container[data-current-channel="#thelounge"] .msg[data-type="quit"],
#chat-container[data-current-channel="#thelounge"] .msg[data-type="part"],
#chat-container[data-current-channel="#thelounge"] .msg[data-type="join"] {
	display: none;
}
```

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

### Hide all chat messages containing a link in a specific channel

```css
#chat-container[data-current-channel="#thelounge"]  .content a {
    display: none;
}
```

### Hide link previews in a specific channel

```css
#chat-container[data-current-channel="#thelounge"] .preview,
#chat-container[data-current-channel="#thelounge"] .toggle-preview,
	display: none;
}
```

### Hide link previews for a specific user

This is useful to silence bots that automatically fetch URL previews, already being fetched by The Lounge's built-in preview mechanism.

```css
#chat .msg[data-from="MyBot"] .preview,
#chat .msg[data-from="MyBot"] .toggle-preview {
	display: none;
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

### Hide message input bar per channel

Useful for channels that always disable sending messages (news feed channels, for example).

```css
#chat-container[data-current-channel="#thelounge"] #form {
    display: none;
}
```

### Hide Insecure Warning

Useful if you want to hide the exclimation mark (Yellow Triangle Icon).

```css
/* Hide Insecure Warning */
#sidebar .not-secure-tooltip {
  display: none;
}
```

### Hide unread counters in sidebar, just show a highlight indicator

TheLounge can't be made to just show the number of highlights, but you can hide the unread counter and replace it with a circular badge with customizable colours.  
You can use [this website](https://www.w3schools.com/colors/colors_picker.asp) to pick the colors

```css
/* Do not touch this */
.channel-list-item .badge { text-indent: -9999px; background: 0;  height: 10px; width: 10px; border-radius: 50%; margin: auto; padding: 0;}
/* Replace the #xxxxxx bit with the color that you want if there are unread messages. */
.channel-list-item .badge { background-color: #0000ff;}
/* Replace the #xxxxxx bit with the color that you want if you were mentioned */
.channel-list-item .badge.highlight { background-color: #ff9900 ;}
```

### Display action messages in italics
![italics](https://user-images.githubusercontent.com/25697531/113520077-f4cf7d00-9590-11eb-8eaf-85d476bf4ad7.png)

```css
#chat .msg[data-type="action"] .from::before,
#chat .msg[data-type="action"] .from,
#chat .msg[data-type="action"] .content,
#chat .msg[data-type="action"] .user {
	font-style: italic;
}
```

{% include abbreviations.md %}
