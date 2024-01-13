const Card = ({ href, imgAlt, imgSrc, noimg, color = "primary", children }) => {
  return (
    <div className={`card ${color}`}>
      {href ? (
        <a href={href} className="block">
          {!noimg && (
            <div className="cardimg bg-clip-border mx-4 overflow-hidden relative mt-4">
              <img
                src={imgSrc}
                alt={imgAlt}
                className="card-image rounded-tl-lg rounded-tr-lg w-full"
              />
            </div>
          )}
          <div className="card-content">{children}</div>
        </a>
      ) : (
        <div>
          {!noimg && (
            <div className="cardimg bg-clip-border mx-4 overflow-hidden relative mt-4">
              <img
                src={imgSrc}
                alt={imgAlt}
                className="card-image rounded-tl-lg rounded-tr-lg w-full"
              />
            </div>
          )}
          <div className="card-content">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
