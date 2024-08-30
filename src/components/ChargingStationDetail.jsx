import React, { useState } from 'react';
import './ChargingStationDetail.css'; // Import the CSS file for styling

const ChargingStationDetail = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [evatScore, setEvatScore] = useState(0);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    alert('You have checked in successfully!');
  };

  const handleSave = () => {
    // Redirect to the Saves Page
    window.location.href = '/saves';
  };

  const handleShare = () => {
    // Implement share functionality (this is a placeholder)
    alert('Share this page on social media!');
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    // Logic to handle feedback submission
    setEvatScore(Math.floor(Math.random() * 10) + 1); // Simulate EVAT Score
    setShowFeedbackForm(false);
    alert('Thank you for your feedback!');
  };

  return (
    <div className="charging-station-detail">
      {/* Header Section */}
      <header className="header">
        <button className="back-button">←</button>
        <h1>Charging Station</h1>
      </header>

      {/* Image and Basic Info Section */}
      <section className="station-info">
        <img
          src="https://via.placeholder.com/300" // Replace with actual image URL
          alt="Charging Station"
          className="station-image"
        />
        <div className="station-details">
          <span className="station-score">EVAT Score: {evatScore}/10</span>
          <h2>Austin Hospital Car Park</h2>
          <p>145 Studley Rd, Heidelberg VIC 3084, Australia</p>
          <p>2 of 2 chargers available</p>
          <p>Plug Types: Type 2</p>
          {!isCheckedIn ? (
            <button className="check-in-button" onClick={handleCheckIn}>Check in</button>
          ) : (
            <p>You have checked in.</p>
          )}
        </div>
      </section>

      {/* Plug Type and Status Section */}
      <section className="plugs-info">
        <h3>Plugs</h3>
        <div className="plug-card">
          <div className="plug-icon">🔌</div>
          <div className="plug-details">
            <p>Type 2</p>
            <p>4 Plugs - 22 kW</p>
            <p>4 Available</p>
            <p>Chargefox</p>
          </div>
          <button className="more-details-button">More details</button>
        </div>
      </section>

      {/* Check-ins Section */}
      <section className="checkins">
        <h3>Check-ins</h3>
        <ul>
          <li>
            <span>Sanji Nison</span>
            <span>06/06/2015, 5:00am</span>
          </li>
          <li>
            <span>Zoro Tesla Y</span>
            <span>06/06/2015, 5:00am</span>
          </li>
          <li>
            <span>MLD X</span>
            <span>06/06/2015, 5:00am</span>
          </li>
          <li>
            <span>Michael Scott</span>
            <span>No space found due to...</span>
          </li>
        </ul>
        <button className="view-all-button">View All</button>
      </section>

      {/* Amenities Section */}
      <section className="amenities">
        <h3>Amenities</h3>
        <div className="amenities-grid">
          <div className="amenity">Dining</div>
          <div className="amenity">Restrooms</div>
          <div className="amenity">Shopping</div>
          <div className="amenity">Lodging</div>
          <div className="amenity">Park</div>
          <div className="amenity">Grocery</div>
          <div className="amenity">WiFi</div>
          <div className="amenity">Valet Parking</div>
          <div className="amenity">Hiking</div>
          <div className="amenity">Camping</div>
          <div className="amenity">Free Charging</div>
        </div>
      </section>

      {/* Buttons Section */}
      <div className="button-group">
        <button className="share-feedback-button" onClick={() => setShowFeedbackForm(true)}>Share Feedback</button>
        <button className="nav-button save" onClick={handleSave}>Save</button>
        <button className="nav-button" onClick={handleShare}>Share</button>
      </div>

      {/* Feedback Form */}
      {showFeedbackForm && (
        <div className="feedback-form">
          <h3>Provide Feedback</h3>
          <form onSubmit={handleFeedbackSubmit}>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Enter your feedback"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="bottom-navigation">
        <button className="nav-button">Map</button>
        <button className="nav-button">Trip Planner</button>
        <button className="nav-button save">Save</button>
        <button className="nav-button">Me</button>
      </nav>
    </div>
  );
};

export default ChargingStationDetail;
