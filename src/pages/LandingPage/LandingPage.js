import './LandingPage.css';
import { GrAdd } from 'react-icons/gr';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const LandingPage = () => {


    return (
        <div className='landingPage'>

          {/* Header */}
          <Header />

          {/* Hero */}
          <section className='hero'>
            <div className='heroText'>
              <h1>Share problems, Discover solutions, Explore the community.</h1>
              <p>Share your project ideas with developers and non-developers all around the world.</p>
              <button>Get Started</button>
            </div>
            <div className='heroImage'>
              <img src={process.env.PUBLIC_URL + '/assets/hero-image.png'} alt='illustration' />
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
                <div className='smallBox'>
                  <h2>Share</h2>
                  <p>Share your project ideas, problems with millions of people around the world.</p>
                </div>
              </div>
              <div className='subSection'>
                <div className='effects'>
                  <div className='dot'></div>
                  <hr/>
                </div>
                <div className='smallBox'>
                  <h2>Discover</h2>
                  <p>Discover a wide  range of solutions to your problems and get opinions on your project ideas.</p>
                </div>
              </div>
              <div className='subSection'>
                <div className='effects'>
                  <div className='dot'></div>
                  <hr/>
                </div>
                <div className='smallBox'>
                  <h2>Explore</h2>
                  <p>Explore knowledge, discuss interests and meet industry leaders in your preferred community.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Ignite Your Curiosity Section */}
          <section className='igniteYourCuriosity'>
            <div className='sectionImage'>
              <img src={process.env.PUBLIC_URL + '/assets/community-image.png'} alt='community'/>
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
          <section className='aboutUs'>
            <div className='aboutUsContent'>
              <div className='aboutUsContentTitle'>
                <h1>About Us</h1>
              </div>
              <div className='aboutUsContentParagraph'>
                <p>Our goal at creer is to spur you to action, we are giving the platform to vent freely; those ideas, issues, and insights without thinking too much about being judged or frowned at.</p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className='faqs'>
            <div className='faqsContents'>
              <div className='faqsContentsTitle'>
                <h1>FAQs</h1>
              </div>
              <div className='faqsQuestionsAndAnswers'>
                <div className='faqsQuestionAndAnswer'>
                  <div className='faqsQuestion'>
                    <p>I am totally new to this “website thing”. How does the whole thing work?</p>
                    <GrAdd className='addBtn'/>
                  </div>
                  <div className='faqsAnswer closed'>
                    <p>Yes. we care about you and the develpoment you make, please feel free to give us a call for whatever support you need</p>
                  </div>
                  <hr/>
                </div>
                <div className='faqsQuestionAndAnswer'>
                  <div className='faqsQuestion'>
                    <p>Do you provide support  to individuals and community?</p>
                    <GrAdd className='addBtn'/>
                  </div>
                  <div className='faqsAnswer closed'>
                    <p>Yes. we care about you and the develpoment you make, please feel free to give us a call for whatever support you need</p>
                  </div>
                  <hr/>
                </div>
                <div className='faqsQuestionAndAnswer'>
                  <div className='faqsQuestion'>
                    <p>Who can I talk to if I have a question, complaint or need technical support?</p>
                    <GrAdd className='addBtn'/>
                  </div>
                  <div className='faqsAnswer closed'>
                    <p>Yes. we care about you and the develpoment you make, please feel free to give us a call for whatever support you need</p>
                  </div>
                  <hr/>
                </div>
                <div className='faqsQuestionAndAnswer'>
                  <div className='faqsQuestion'>
                    <p>Who can use the Creer platform?</p>
                    <GrAdd className='addBtn'/>
                  </div>
                  <div className='faqsAnswer closed'>
                    <p>Yes. we care about you and the develpoment you make, please feel free to give us a call for whatever support you need</p>
                  </div>
                  <hr/>
                </div>
                <div className='faqsQuestionAndAnswer'>
                  <div className='faqsQuestion'>
                    <p>What kinds of posts are allowed on Creer?</p>
                    <GrAdd className='addBtn'/>
                  </div>
                  <div className='faqsAnswer closed'>
                    <p>Yes. we care about you and the develpoment you make, please feel free to give us a call for whatever support you need</p>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>
          </section>

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
                  <input className='contactUsBtn' type='submit' value='Send Message'/>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />

        </div>
    )
}

export default LandingPage
