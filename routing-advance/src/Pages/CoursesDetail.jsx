import { useParams } from "react-router-dom";

const CoursesDetail = () => {

    const params =  useParams()

  return (
    <div>
      <h1 className="text-3xl text-bold underline absolute top-0.5 left-0.5 right-0.5 -translate-0.5 h1">
       {params.course} Courses Details
      </h1>
    </div>
  );
};

export default CoursesDetail;
