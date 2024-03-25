import PropTypes from 'prop-types'

function List(props){
    const itemList = props.items
    const category = props.category

    // fruits.sort((a,b)=> a.name.localeCompare(b.name)) //ALPHABETICAL
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) // REVERSE ALPHABETICALLY
    // fruits.sort((a,b) => a.calories - b.calories) //NUMERIC
    // fruits.sort((a,b)=> b.calories - a.calories) //REVER NUMERIC

    // const lowCalFruits= fruits.filter(fruit => fruit.calories <100)
    // const highCalFruits= fruits.filter(fruit => fruit.calories >100)

    const listItems = itemList.map(fruit => <li key = {fruit.id}>
                                            {fruit.name}: &nbsp;<b>{fruit.calories}</b>                                            
                                            </li>)
    return (<>
        <h3 className='list-category'>{category}</h3>
    <ol className='list-items'>
        {listItems}
    </ol>
    </>
    )
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({  id:PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number
                                })),
    category: PropTypes.string
}

List.defaultProps = {
    items: [],
    category: "Food"
}

export default List;