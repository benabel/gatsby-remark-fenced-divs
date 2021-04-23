# DEPRECATED 

![No Maintenance Intended](https://img.shields.io/maintenance/no/2021.svg)

_This plugin will not be upgraded for latests versions of remark that use micromark._

You should use [remark-directive](https://github.com/remarkjs/remark-directive) as a remplacement.


# gatsby-remark-fenced-divs

Adds `fencedDivs` blocks in markdown syntax tree produced by `remark`, and
convert them to `<div>`s in `html` using
[remark-fenced-divs](https://github.com/benabel/remark-fenced-divs).

This plugin aims to imitate the comportment of the pandoc extension
[`fenced_divs`](https://pandoc.org/MANUAL.html#extension-fenced_divs)

You can create `div` blocks using **three colons as separator**. The opening
fence should include at least one attribute used as class for the div.

## Install

`npm install --save gatsby-remark-fenced-divs`

## How to use

Currently, the
[remark-fenced-divs](https://github.com/benabel/remark-fenced-divs) plugin don't
use any option as it only imitate the
[`pandoc`](https://pandoc.org/MANUAL.html#extension-fenced_divs) extension.

```javascript
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        ...
        "gatsby-remark-fenced-divs"
        ...
      ],
    },
  },
];
```

Use the following Markdown syntax to create `div` blocks in your file:

### fenced `div`s pass single word attribute as a class for the `div`

```md
::: my-class
Here is a paragraph.

And another.
:::::
```

**HTML OUTPUT:**

```html
<div class="my-class">
<p>Here is a paragraph.</p>
<p>And another.</p>
</div>
```

### fenced `div`s supports extended curly braces attributes

```md
::::: {#special .sidebar num=3} 
Here is a paragraph.

And another.
:::::
```

**HTML OUTPUT:**

```html
<div id="special" class="sidebar" data-num="3">
<p>Here is a paragraph.</p>
<p>And another.</p>
</div>
```

### Fenced `div`s can be nested:

```md
::: Warning ::::::
This is a warning.

::: Danger
This is a warning within a warning.
:::
::::::::::::::::::
```

**HTML OUTPUT:**

```html
<div class="Warning">
  <p>This is a warning.</p>
  <div class="Danger">
    <p>This is a warning within a warning.</p>
  </div>
</div>
```


This will generate the following `html`:

```html
<div class="custom-block danger">
  <div class="custom-block-body"><p>content</p></div>
</div>

<div class="custom-block info">
  <div class="custom-block-heading">This is a title!</div>
  <div class="custom-block-body"><p>content</p></div>
</div>
```

