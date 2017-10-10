import React from 'react';
import trump from './trump.svg'
import Button from './Button';

const Intro = ({ nextQuestion }) => (
  <article class="ph3 ph5-ns pb2 pt4">
    <img className='w-10 mw-100 grow' src={trump} />
    <h1 class="mt0 f4 f2-m f-subheadline-l">Are you smarter than Donald J. Trump?</h1>

  	<blockquote class="ml0 mt0 pb4 pl4 black-90 bl bw2 b--blue">
  	  <p class="f5 f4-m f3-l lh-copy measure mt0">
  	    I think it's fake news, but if he did that, I guess we'll have to compare IQ tests.
  			And I can tell you who is going to win.
  	  </p>
  	  <cite class="f6 ttu tracked fs-normal">―Donald J. Trump, 45th President of the United States</cite>
  	</blockquote>

    <p class="f5 f4-m f3-l lh-copy measure mt0">
      On Tuesday, October 10, 2017, Donald Trump <a class="dim" href="http://www.cnn.com/2017/10/10/politics/donald-trump-forbes-interview-rex-tillerson/index.html">challenged</a> Secretary of State Rex Tillerson to an IQ test. Donald Trump is confident that he will win. Can you beat Donald Trump in an IQ test?
    </p>

    <div className="pb4">
      <img src="https://media.giphy.com/media/xTiTnHXbRoaZ1B1Mo8/giphy.gif" />
    </div>

    <p>
      <Button text="Take the test" action={nextQuestion} />
    </p>

    <p class="f6 f5-m f4-l lh-copy measure mt0 gray">
      Built by <a href="https://twitter.com/imkmf">Kristian Freeman</a>.
    </p>

  </article>
)

export default Intro;
