import React from 'react';

import Button from './Button';

const LowerThanAverage = ( { score } ) => (
  <div>
    <p class="f5 f4-m f3-l lh-copy measure mt0">
      You scored {score}. You placed lower than average.
    </p>
    <div className="w-50">
      <img className="mw-2 pb2" src="/sad_trump.jpg" />
    </div>
  </div>
)

const Average = ( { score } ) => (
  <div>
    <p class="f5 f4-m f3-l lh-copy measure mt0">
      You scored {score}. You placed around average!
    </p>
    <div className="w-50">
      <img className="mw-2 pb2" src="/confused_trump.jpg" />
    </div>
  </div>
)

const HigherThanAverage = ( { score } ) => (
  <div>
    <p class="f5 f4-m f3-l lh-copy measure mt0">
      You scored {score}. You placed higher than average. Nice!
    </p>
    <div className="w-50">
      <img className="mw-2 pb2" src="/umm_trump.jpg" />
    </div>
  </div>
)

const Outro = ({ score }) => {
  let comp
  if (score < 90) {
    comp = <LowerThanAverage score={score} />
  } else if (90 < score && score < 110) {
    comp = <Average score={score} />
  } else if (110 < score) {
    comp = <HigherThanAverage score={score} />
  }

  const tweetText = `Am%20I%20smarter%20than%20Donald%20Trump%3F%20My%20IQ%20is%20about%20${score}.%20How%20about%20you%3F%20%23trumpiq%20http%3A%2F%2Fwww.areyousmarterthandonaldjtrump.com%2F`

  return (
    <article class="ph3 ph5-ns pv2">
      <h1 class="f4 f2-m f-subheadline-l">Are you smarter than Donald J. Trump?</h1>

      {comp}

      <p class="f5 f4-m f3-l lh-copy measure mt0">
        But what is Trump's IQ? <a href="http://www.snopes.com/donald-trumps-intelligence-quotient/" class="dim">According to Snopes</a>, Trump's often-cited IQ of 156 is based on incorrect facts and logical fallicies. Simply put, <em>we don't know</em>.
      </p>

      <p class="f5 f4-m f3-l lh-copy measure mt0">
        If <em>you're</em> Donald Trump, and you want to make our jobs easier, take this test, and let us know - email us at <a href="mailto:smrt@areyousmarterthandonaldjtrump.com" class="dim">smrt@areyousmarterthandonaldjtrump.com</a>.
      </p>

      <p class="f5 f4-m f3-l lh-copy measure mt0">
        <a href={`https://twitter.com/intent/tweet?text=${tweetText}`} class="dim" target="_blank">Tweet your score and share this site!</a>
      </p>

      <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don&#39;t feel so stupid or insecure,it&#39;s not your fault</p>&mdash; Donald J. Trump (@realDonaldTrump) <a href="https://twitter.com/realDonaldTrump/status/332308211321425920?ref_src=twsrc%5Etfw">May 9, 2013</a></blockquote>
      <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

      <p class="f5 f4-m f3-l lh-copy measure mt0">
        😒
      </p>

      <p class="f5 f4-m f3-l lh-copy measure mt0">
        Psst - are IQ tests a good indicator of intelligence? <a class="dim" href="https://www.scientificamerican.com/article/rational-and-irrational-thought-the-thinking-that-iq-tests-miss/">Not</a> <a class="dim" href="http://www.independent.co.uk/news/science/iq-tests-are-fundamentally-flawed-and-using-them-alone-to-measure-intelligence-is-a-fallacy-study-8425911.html">really</a>.
      </p>

      <p class="f6 f5-m f4-l lh-copy measure mt0 gray">
        Built by <a href="https://twitter.com/imkmf">Kristian Freeman</a>.
      </p>

    </article>
  )
}

export default Outro;
