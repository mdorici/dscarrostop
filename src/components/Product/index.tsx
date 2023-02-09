import './styles.css';
import carImg from '../../assets/car.png';

export default function Product() {
    return(
        <>
            <div className='dsct-card-product'>
                <img src={carImg} alt="Carro" />
                <p>Lorem ipsum dolor</p>
            </div>
        </>
    );
}