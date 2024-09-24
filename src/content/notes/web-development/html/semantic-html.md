---
title: "Semantic HTML"
description: "Understanding and using semantic HTML elements"
pubDate: 2023-09-15
category: "Web Development/HTML"
tags: ["html", "web development", "accessibility"]
---

# Semantic HTML

Semantic HTML is the use of HTML markup to reinforce the meaning of the content on a web page, rather than merely to define its appearance. By using semantic HTML elements, we can provide additional context to both browsers and developers about the structure and content of our web pages.

## Benefits of Semantic HTML

1. **Improved Accessibility**: Screen readers and other assistive technologies can better understand the content structure.
2. **Better SEO**: Search engines can more easily understand the content and its importance.
3. **Easier Development**: Semantic HTML makes the code more readable and easier to maintain.

## Common Semantic Elements

- `<header>`: Represents introductory content, typically a group of introductory or navigational aids.
- `<nav>`: Represents a section of a page that links to other pages or to parts within the page.
- `<main>`: Represents the dominant content of the body of a document.
- `<article>`: Represents a self-contained composition in a document, page, application, or site.
- `<section>`: Represents a standalone section of a document, which doesn't have a more specific semantic element to represent it.
- `<aside>`: Represents a portion of a document whose content is only indirectly related to the document's main content.
- `<footer>`: Represents a footer for its nearest sectioning content or sectioning root element.

## Example

```html
<header>
  <h1>My Website</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content goes here...</p>
  </article>

  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2023 My Website. All rights reserved.</p>
</footer>
