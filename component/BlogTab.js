const BlogTab = props => {
  return (
    <div className={`card ${props.type} z-depth-0 hover08`}>
      <div className="card-image">
        <img src={props.img} />
        <span className="card-title">Card Title</span>
      </div>
      <div className="card-content">
        <p>{props.desc}</p>
      </div>
      <div className="card-action">
        <a className="waves-effect waves-light btn-small" href="/">
          Wave
        </a>
      </div>
    </div>
  );
};

export default BlogTab;
