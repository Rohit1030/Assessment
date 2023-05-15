import './App.css';
import scooba from "./images/Mask Group.jpg";
import diving from "./images/Mask Group (1).jpg"
import { AiOutlineClockCircle } from "react-icons/ai"
import { HiLocationMarker } from "react-icons/hi"
import { GiKnifeFork } from "react-icons/gi"
import { BsCarFrontFill, BsCameraFill, BsStarFill } from "react-icons/bs"
import { FiActivity } from "react-icons/fi";

function App() {
  return (
    <div className="App">
     <header>
      <div>Universal Adventures</div>
     </header>
     <main className='content'>
      <div className='section-1'>
        <p>Adventures you must try before turn 30!</p>
      </div>
      <div className='cards-container'>
        <div className='card'>
          <div className='img-container'>
            <img src={scooba} alt="scooba-img" className='images' />
            <div className="icon-imgs">
              <div className="time">
                <AiOutlineClockCircle />
                <span>8 hour</span>
              </div>
              <div className="icon-location">
                <HiLocationMarker />
                <span>Goa, India</span>
              </div>
            </div>
          </div>
          <div className='tags'>
            <h2>Scuba Diving in Grande Island, Goa</h2>
            <div className="tags-container">
              <div className="icon-tag">
                <GiKnifeFork className='icon-tags' />
                <span>Snacks</span>
              </div>
              <div className="icon-tag">
                <BsCarFrontFill className='icon-tags' />
                <span>Transport</span>
              </div>
              <div className="icon-tag">
                <BsCameraFill className='icon-tags' />
                <span>Photo/Video</span>
              </div>
              <div className="icon-tag">
                <FiActivity className='icon-tags' />
                <span>Activity</span>
              </div>
            </div>
            <div className="written-tags">
              <div className='written-tag'>Long tail boat ride</div>
              <div className='written-tag'>Underwater Photo & Video</div>
            </div>
          </div>
          <div className="ratings-container">
            <div className='rating'>
              <div className="price">
                <p>Starting from</p>
                <strong>&#8377; 1799</strong>
              </div>
              <div className='stars-container'>
                <div className="stars">
                  <BsStarFill className="star"/>
                  <BsStarFill className="star"/>
                  <BsStarFill className="star"/>
                  <BsStarFill className="star"/>
                  <span>4.7</span>
                </div>
                <div className='reviews'>36 reviews</div>
              </div>
            </div>
            <button className="details-btn">View Details</button>
          </div>
        </div>
        <div className='card'>
          <div className='img-container'>
            <img src={diving} alt="diving" className='images' />
            <div className="icon-imgs">
              <div className="time">
                <AiOutlineClockCircle />
                <span>30 min</span>
              </div>
              <div className="icon-location">
                <HiLocationMarker />
                <span>Goa, India</span>
              </div>
            </div>
          </div>
          <div className='tags'>
            <h2>Bungee Jumping in Goa</h2>
            <div className="tags-container">
              <div className="icon-tag">
                <BsCameraFill className='icon-tags' />
                <span>Photo/Video</span>
              </div>
              <div className="icon-tag">
              <FiActivity className='icon-tags' />
                <span>Activity</span>
              </div>
            </div>
            <div className="written-tags">
              <div className='written-tag'>61 meter height</div>
              <div className='written-tag'>Jump Photo & Video</div>
              <div className='written-tag'>Certificate</div>
            </div>
          </div>
          <div className="ratings-container">
            <div className='rating'>
              <div className="price">
                <p>Starting from</p>
                <strong>&#8377; 2800</strong>
              </div>
              <div className='stars-container'>
                <div className="stars">
                  <BsStarFill className="star"/>
                  <BsStarFill className="star"/>
                  <BsStarFill className="star"/>
                  <BsStarFill className="star"/>
                  <span>4.7</span>
                </div>
                <div className='reviews'>36 reviews</div>
              </div>
            </div>
            <button className="details-btn">View Details</button>
          </div>
        </div>
      </div>
     </main>
    </div>
  );
}

export default App;
