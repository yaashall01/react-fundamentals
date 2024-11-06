import profilePic from "./assets/azzouz.jpg"

const Card = () => {

    return(
        <div className="card">
            <img className="card-image"  src={profilePic} alt="profile picture" />
            <h2 className="card-title">Yassine Code</h2>
            <p className="card-text">I craft modern solution. While im injecting deps and coffee.</p>
        </div>
    );

}

export default Card;