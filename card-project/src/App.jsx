import Card from "./components/Card";

const App = () => {
  const jobData = [
    {
      id: 1,
      company: "Amazon",
      timeAgo: "3 hours ago",
      role: "Senior UI/UX Designer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTo3-7hEo5B0u5CTAkUh3QdVd6z4ty-9itlvxHcjftg&s=10",
      jobType: "Part Time",
      experienceLevel: "Senior Level",
      salary: "$120/hr",
      location: "Karachi, Lahore",
    },
    {
      id: 2,
      company: "Google",
      timeAgo: "1 day ago",
      role: "Frontend Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTo3-7hEo5B0u5CTAkUh3QdVd6z4ty-9itlvxHcjftg&s=10",
      jobType: "Full Time",
      experienceLevel: "Mid Level",
      salary: "$95/hr",
      location: "Remote",
    },
    {
      id: 3,
      company: "Microsoft",
      timeAgo: "2 days ago",
      role: "Product Manager",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTo3-7hEo5B0u5CTAkUh3QdVd6z4ty-9itlvxHcjftg&s=10",
      jobType: "Contract",
      experienceLevel: "Lead Level",
      salary: "$150/hr",
      location: "Islamabad",
    },
    {
      id: 4,
      company: "Netflix",
      timeAgo: "5 hours ago",
      role: "Motion Graphics ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTo3-7hEo5B0u5CTAkUh3QdVd6z4ty-9itlvxHcjftg&s=10",
      jobType: "Full Time",
      experienceLevel: "Senior Level",
      salary: "$135/hr",
      location: "Remote, Worldwide",
    },
    {
      id: 5,
      company: "Spotify",
      timeAgo: "Just now",
      role: "React Native Developer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTo3-7hEo5B0u5CTAkUh3QdVd6z4ty-9itlvxHcjftg&s=10",
      jobType: "Full Time",
      experienceLevel: "Mid Level",
      salary: "$110/hr",
      location: "Lahore, Pakistan",
    },
    {
      id: 6,
      company: "Apple",
      timeAgo: "1 week ago",
      role: "iOS Engineer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTo3-7hEo5B0u5CTAkUh3QdVd6z4ty-9itlvxHcjftg&s=10",
      jobType: "Full Time",
      experienceLevel: "Senior Level",
      salary: "$140/hr",
      location: "Remote",
    },
  ];

  return (
    <div className="parent">
      {jobData.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              image={elem.image}
              company={elem.company}
              timeAgo={elem.timeAgo}
              role={elem.role}
              jobType={elem.jobType}
              experienceLevel={elem.experienceLevel}
              salary={elem.salary}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
