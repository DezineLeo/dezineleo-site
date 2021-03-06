---
title: What is BEM?
date: '2020-03-06'
spoiler: Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development.
type: 'topic'
thumbnail: ./css.svg
---
```toc
```

> [BEM](http://getbem.com/) — **Block Element Modifier** is a methodology that helps you to create reusable components and code sharing in front-end development

## What is BEM?

BEM is one of the methodologies to maintain large scale CSS with efficiency. Below is a list of other methodologies out there.

+ [OOCSS](http://oocss.org/)
+ [SMACSS](http://smacss.com/)
+ [SUITCSS](http://suitcss.github.io/)
+ [Atomic](http://github.com/nemophrost/atomic-css)

BEM stands for <span class="hl-1">Block</span>, <span class="hl-2">Element</span>, <span class="hl-3">Modifier</span>, and that's what makes the magic happen.

## Block, Element and Modifier

+ **Block** - Standalone entity like `header`, `container` and `menu`, which is meaningful on its own.
+ **Element** - No standalone meaning but semantically tied to its block like `menu item`.
+ **Modifier** - A flag on a block or element to change appearance or behavior like `disabled`.

Now you can connect them with naming rules as `.block__element--modifier-value`.

## Examples

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

```css
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }
```


## Further Reading

1. [BEM](http://getbem.com/)
2. [BEM](https://en.bem.info/)