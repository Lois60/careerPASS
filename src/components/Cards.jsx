import "./Cards.css";


export const Cards = ({ imageUrl, title, description }) => {
  return (
    <section className="card">
      
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <img src={imageUrl} alt={title} className="card-image" />
        <p className="card-description">{description}</p>
        
      </div>
    </section>
  );
};
