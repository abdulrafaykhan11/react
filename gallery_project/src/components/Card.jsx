const Card = (props) => {
  return (
    <div>
      <a href={props.elem.url} target="_blank">
        <div key={props.idx}>
          <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
            <img
              src={props.elem.download_url}
              alt=""
              className="h-full object-cover w-full "
            />
          </div>
          <h2 className="font-bold text-lg">{props.elem.author}</h2>
        </div>
      </a>
    </div>
  );
};

export default Card;
