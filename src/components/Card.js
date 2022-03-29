import photoContent from "../images/download.jpeg";
import star from "../images/star.png";

const Card = () => {
  return (
    <div className="card">
      <img src={photoContent} className="card--image" alt="content" />
      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
};

export default Card;
