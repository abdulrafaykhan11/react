

const Card = (props) => {
  return (
      <div className="card">
        <div className="top">
          <img
            src={props.image}
            alt=""
          />
          <button>
            Save <i className="fas fa-bookmark"></i>
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>{props.timeAgo}</span>
          </h3>
          <h2>{props.role}</h2>
          <div className="tag">
            <h4>{props.jobType}</h4>
            <h4>{props.experienceLevel}</h4>
          </div>
        </div>
        <div className="line"></div>
        <div className="bottom">
          <div>
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
