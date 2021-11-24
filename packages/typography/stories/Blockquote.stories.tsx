import * as React from 'react'
import { Blockquote } from "../src"

export default { title: 'Components/Blockquote' }

export const Basic = () => {
  return(
    <Blockquote width="96" textAlign="center" cite="https://www.goodreads.com/author/quotes/9810.Albert_Einstein">
      I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.
    </Blockquote>
  )
}

export const Caption = () => {
  return(
    <div className="flex justify-center mt-10">
      <Blockquote
      bgCaptionGradientPosition="bottom-right"
      bgCaptionColor="fuchsia" bgCaptionColorContrast="500" bgCaptionGradientEndColor="purple" bgCaptionGradientEndColorContrast="600"
      width="96"
      rounded="lg" shadow="md"
      cite="https://www.goodreads.com/author/quotes/9810.Albert_Einstein"
      px="5" py="4"
      caption={(
        <p className="text-white text-sm">—<cite>Albert Einstein</cite></p>
      )}>
        I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.
      </Blockquote>
    </div>
  )
}

export const DisableQuote = () => {
  return(
    <div className="flex justify-center mt-10">
      <Blockquote
      quote={false}
      quoteColor="purple" quoteColorContrast="600"
      bgCaptionGradientPosition="bottom-right"
      bgCaptionColor="fuchsia" bgCaptionColorContrast="500" bgCaptionGradientEndColor="purple" bgCaptionGradientEndColorContrast="600"
      width="96" textAlign="center"
      rounded="lg" shadow="md"
      cite="https://www.goodreads.com/author/quotes/9810.Albert_Einstein"
      px="5" py="4"
      caption={(
        <p className="text-white text-sm">—<cite>Albert Einstein</cite></p>
      )}>
        I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.
      </Blockquote>
    </div>
  )
}
