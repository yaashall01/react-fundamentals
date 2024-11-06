import './PersonList.css'
import people from '../assets/data';

const PersonList = () => {

    const listOfPeople = people.map(person =>
        <li key={person.id} className='person-card'>
            <img src={person.urlImage} alt={person.name} className='profile-pic' />
            <div className='person-info'>
                <h3>{person.name}</h3>
                <p>Age: {person.age}</p>
                <p>Occupation: {person.occupation}</p>
                <p>Gender: {person.gender}</p>
            </div>
        </li>
     )

    return(
        <ul className='people-list'>{listOfPeople}</ul>
    );
}

export default PersonList;