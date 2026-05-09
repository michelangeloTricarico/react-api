export default function Card({actors}){
    return(
        <div className="row">
    {actors.map((actor,index)=>(
      <div key= {"card-" + index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2 px-4" >
        <div className="card" style={{height:"700px"}}>
          <img src={actor.image} style={{height: "300px",width: "100%",objectFit: "cover"}} alt="" />
          <p><i className="bi bi-person-vcard-fill px-2"></i>{actor.name}</p>
          <p><i className="bi bi-calendar2-week-fill px-2"></i>{actor.birth_year}</p>
          <p><i className="bi bi-globe px-2"></i>{actor.nationality}</p>
          <p><i className="bi bi-film px-2"></i>{actor.known_for}</p>
          <p><i className="bi bi-award-fill px-2"></i>{actor.awards}</p>
          <p><i className="bi bi-book-fill px-2"></i>{actor.biography}</p>  
        </div>
      </div>
      ))}
    </div>
    );
}