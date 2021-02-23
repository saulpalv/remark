import React from 'react'
import 'github-markdown-css'
import { Markdownizer } from './Markdown'

const text =
  `# GFM with latex

## References

  Here is a footnote reference,[^1]
  another,[^2],
  and optionally there are inline
  notes.^[you can type them inline, which may be easier, since you don’t
  have to pick an identifier and move down to type the note.]

## Bloque de código

\`\`\`javascript
function test() {
  console.log("notice the blank line before this function?");
}
\`\`\`

~~~css
h1 {
  color: red;
}
~~~

## Latex ecuations

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following
equation.

$$
L = \\frac{1}{2} \rho v^2 S C_L
$$

## Autolink literals

Long flags: :wales:, :scotland:, :england:.

www.example.com, https://example.com, 
and contact@example.com.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |
| ab | bc  |  cd |  de  |

## Tasklist

* [ ] to do
* [x] done

[^1]: Here is the footnote.
[^2]: Here’s another footnote.
`

const GfmDemo: React.FC = () => {
  return (
    <div className="markdown-body">
      {Markdownizer.reactify(text)}
    </div>
  )
}

export default GfmDemo
