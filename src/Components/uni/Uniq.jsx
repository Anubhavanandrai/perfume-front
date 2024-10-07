import "./uniq.css";
import { useEffect, useState } from "react";
import axios from "axios";
import fl from "./../../store/fl.png";
import pc from "./../../store/pic.jpg";

function Uniq() {
  const [da, setDa] = useState([]);
  const [reviewData, setReviewData] = useState({
    Username: '',
    Email: '',
    Message: ''
  });
  const [showForm, setShowForm] = useState(false); 

  const income = async () => {
    try {
      const response = await axios.get("http://localhost:7000/review/getreview");
      setDa(response.data);
    } catch (err) {
      console.error("Fetching data disrupted", err);
    }
  };

  useEffect(() => {
    income();
  }, []);

  const handleChange = (e) => {
    setReviewData({ ...reviewData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7000/review/sendreview", reviewData);
      if (response.status === 201) {
        alert("Review submitted successfully!");
        income(); 
        setReviewData({
          Username: '',
          Email: '',
          Message: ''
        }); 
        setShowForm(false); 
      }
    } catch (error) {
      console.error("Error submitting review", error);
      alert("Error submitting review");
    }
  };

  return (
    <div className="newproduct">
      <div className="myproduct">
        <div className="myproductimg">
          <img src={fl} alt="product" />
        </div>
        <div className="description">
          <p>Name : Pure Sang for Women Eau De Parfum Spray 75ml / 2.5 Fl.oz By Giorgio Monti</p>
          <p>Price : $56</p>
          <p>Description : Very tough essence of sandalwood and rose</p>
        </div>
      </div>

      <button onClick={() => setShowForm(!showForm)}>Write Review</button>

      <div className="lejaao" style={{ display: showForm ? 'block' : 'none', backgroundColor: 'transparent' }}>
        <h3>Submit your review</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Username">Name:</label>
            <input
              type="text"
              id="Username"
              name="Username"
              placeholder="Enter your name"
              value={reviewData.Username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Enter your email"
              value={reviewData.Email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="Message">Message:</label>
            <textarea
              id="Message"
              name="Message"
              placeholder="Enter your review"
              rows="4"
              value={reviewData.Message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit Review</button> 
        </form>
      </div>

      <div>
        <p>Review</p>
        <hr />
        {da.length > 0 ? (
          da.map((item, index) => (
            <div className="reviewcard" key={index}>
              <div className="reviwimg">
                <img src={pc} alt="user" />
              </div>
              <div className="contentt">
                <p>{item.Username}</p>
                <p>{item.Message}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
}

export default Uniq;
