import './LandingPage.css';
import heroImage from './hero-image.png';
import communityImage from './community-image.png';
import Header from '../Header/Header'

const LandingPage = () => {
    return (
        <div className='landingPage'>
          {/* Header */}
          <Header />

          {/* Hero */}
          <section className='hero'>
            <div className='heroText'>
              <h1>Share problems, Discover solutions, Explore the community.</h1>
              <p>Share your project ideas with developers and non-developers all around the world</p>
              <button>Get Started</button>
            </div>
            <div className='heroImage'>
              <img src={heroImage} alt='image' />
            </div>
          </section>

          {/* How-it-works */}
          <section className='howItWorks'>
            <div className='sectionTitle'>
              <h1>How It Works</h1>
            </div>
            <div className='descriptionByWords'>
              <div className='subSection'>
                <div className='effects'>
                  <div className='dot'></div>
                  <hr/>
                </div>
                <div>
                  <h2>Share</h2>
                  <p>Share your project ideas, problems with millions of people around the world.</p>
                </div>
              </div>
              <div className='subSection'>
                <div className='effects'>
                  <div className='dot'></div>
                  <hr/>
                </div>
                <div>
                  <h2>Discover</h2>
                  <p>Discover a wide  range of solutions to your problems and get opinions on your project ideas.</p>
                </div>
              </div>
              <div className='subSection'>
                <div className='effects'>
                  <div className='dot'></div>
                  <hr/>
                </div>
                <div>
                  <h2>Explore</h2>
                  <p>Explore knowledge, discuss interests and meet industry leaders in your preferred community.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Ignite Your Curiosity Section */}
          <section className='igniteYourCuriosity'>
            <div className='sectionImage'>
              <img src={communityImage} alt='image'/>
            </div>
            <div className='sectionText'>
              <div className='sectionTitle'>
                <h1>Ignite Your Curiosity</h1>
                <p>Grow knowledge with our key features</p>
              </div>
              <div className='subSections'>
                <div className='subSection'>
                  <h2>Share pictures</h2>
                  <p>A picture tells a thousand words, share pictures that effectively communicate your thoughts.</p>
                </div>
                <div className='subSection'>
                  <h2>Join Communities</h2>
                  <p>Find interesting communities across specific topics.</p>
                </div>
                <div className='subSection'>
                  <h2>Explore tags</h2>
                  <p>Search for information with smart keywords.</p>
                </div>
                <div className='subSection'>
                  <h2>Rate answers</h2>
                  <p>Vote and share responses you agree with.</p>
                </div>
              </div>
            </div>
          </section>

          {/* About Us */}
          <section className='aboutUs'></section>

          {/* FAQs */}
          <section className='faqs'></section>

          {/* Contact uS */}
          <section className='contactUs'>
            <div className='contactUsContent'>
              <h1>Still have questions?</h1>
              <p>You can always contact us and we will always get back to you as promptly as possible.</p>
              <div className='contactUsForm'>
                <input type='text' name='name'  id='name' placeholder='Name'/>
                <input type='email' name='email-address'  id='email-address' placeholder='Email'/>
                <textarea name='message'  id='message' placeholder='Write something...'></textarea>
                <div className='submitBtn'>
                  <input className='' type='submit' value='Send Message'/>
                </div>
              </div>
            </div>
          </section>

        </div>
    )
}

export default LandingPage
