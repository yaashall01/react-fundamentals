/* eslint-disable react/prop-types */
import './List.css'
import PropType from 'prop-types'

const List = (props) => {

    const itemList = props.items;
    const category = props.category;

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    //fruits.sort((a, b) => a.calories b.calories); // NUMERIC //fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC
    //const lowCalFruits fruits.filter(fruit => fruit.calories < 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = itemList.map(item =>
                        <li key={item.id}>
                            {item.name}: &nbsp;
                            <b>{item.calories}</b></li>);
                    return(<>
                    <h3 className='list-category'>{category}</h3>
                    <ol className='list-item'>{listItems}</ol>
                    </>);
    }

List.propTpes = {
    category: PropType.string,
    items: PropType.arrayOf(
        PropType.shape({
            id: PropType.number,
            name: PropType.string,
            calories: PropType.number,
        })
    )
}

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List