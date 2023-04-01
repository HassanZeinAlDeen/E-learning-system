import "./cards.css";
import Button from "../Button";

const Card = () => {

  return (
    <div className="content">
      <div className="teachers">
        <img />
        <p className="title">Teachers</p>
        <p className="description">
          Meet the best teachers, Excellent communicators, able to convey complex
          ideas and information in a clear and concise manner, listen carefully
          to their students and provide constructive feedback.
        </p>
        <Button>Read More</Button>
      </div>
      <div className="programs">
        <img />
        <p className="title">Programs</p>
        <p className="description">
          Good educational programs with a clear learning objectives that are aligned
          with the needs and goals of learners. Provide a roadmap of
          what learners will achieve and how they will be assessed.
        </p>
        <Button>Read More</Button>
      </div>
      <div className="staff">
        <img />
        <p className="title">Staff</p>
        <p className="description">
          Meet the best staff, with a positive attitude and approach, their work with enthusiasm
          and optimism. They are supportive of their colleagues and maintain a professional
          demeanor.
        </p>
        <Button>Read More</Button>
      </div>
    </div>

  );
}

export default Card;