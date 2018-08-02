const BlogTab = props => {
  return (
    <div className={`card ${props.type} z-depth-0 hover08 ${props.tag}`}>
      <div className="card-image">
        <img alt={props.tittle} src={props.img} />
      </div>
      <div className="card-content">
        <h5 className="teal-text">{props.tittle}</h5>
        <p>{props.desc}</p>
      </div>
      <div className="card-action">
        <a
          className="waves-effect waves-light btn-small"
          href={`${props.link}`}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogTab;
