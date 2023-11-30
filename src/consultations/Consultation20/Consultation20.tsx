import './styles.css'

function Consutation20() {

    const carName: string = "Ferrari";
    const carColor: string = "Red";
    const price: number = 120000;
    const carStores: string[] = ["Warsaw", "Berlin", "Munich"];

    const stores = carStores.map((store) => {
        return <li key = {`car-stores-${Math.random()}`}>{store}</li>
    })

    return <div className='consultation-wrapper'>
        <p className='car-description-name'>Car Description</p>
        <p className='car-items'>{carName}</p>
        <p className='car-items'>{carColor}</p>
        <p className='car-items'>{price}</p>

        <ul>{stores}</ul>
        
    </div>
}
export default Consutation20;