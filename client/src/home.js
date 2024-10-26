
import VideoSection from './video';
import Features from './features';
import ContactForm from './contact';
import "./home.css"
function Home(){

    return (
        <div className='home '>
     <VideoSection />
        <Features />
        <ContactForm />
  

        </div>
    )
}

export default Home;