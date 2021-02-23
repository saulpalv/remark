import { createElement, ReactNode } from 'react'
import 'katex/dist/katex.min.css'
import unified from 'unified'
import markdown from 'remark-parse'
import gfm from 'remark-gfm'
import math from 'remark-math'
import breaks from 'remark-breaks'
import footnotes from 'remark-footnotes'
import gemoji from 'remark-gemoji'
import remark2rehype from 'remark-rehype'
import katex from 'rehype-katex'
import rehype2react from 'rehype-react'
import raw from 'rehype-raw'

//yarn add rehype-katex rehype-react remark remark-breaks remark-footnotes remark-gfm remark-math remark-rehype katex unified rehype-raw

export class Markdownizer {

    public static get processor() {
        return unified()
            .use(markdown)
            .use(math)
            .use(gfm)
            .use(breaks)
            .use(footnotes, { inlineNotes: true })
            .use(gemoji)
            .use(remark2rehype, { allowDangerousHtml: true })
            .use(raw)
            .use(katex)
            .use(rehype2react, { createElement: createElement })
    }

    public static reactify = (markdownString: string): ReactNode => {
        return Markdownizer.processor.processSync(markdownString).result as React.ReactNode
    }
}
