import { createElement, ReactNode } from 'react'
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

export class Markdown {
    public static instance: Markdown

    private constructor() {
        Markdown.instance = this
    }

    public static get processor() {
        return unified()
            .use(markdown)
            .use(math)
            .use(gfm)
            .use(breaks)
            .use(footnotes, { inlineNotes: true })
            .use(gemoji)
            .use(remark2rehype)
            .use(katex)
            .use(rehype2react, { createElement: createElement })
    }

    public static reactify = (markdownString: string): ReactNode => {
        return Markdown.processor.processSync(markdownString).result as React.ReactNode
    }

    public static getInstance(): Markdown {
        return Markdown.instance ? Markdown.instance : new Markdown()
    }
}
