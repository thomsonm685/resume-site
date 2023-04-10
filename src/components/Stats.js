
import myName from '../public/my_name.svg'
import fullStackDev from '../public/fullstackdev.svg'
import CounterAndText from './CounterAndText';

const Stats = () => {
    
    return(
        <div className='stats'>
            <CounterAndText countTo={4} addPlus={false} text={"Public Apps"} i={0}></CounterAndText>
            <CounterAndText countTo={20} addPlus={true} text={"Private Apps"} i={1}></CounterAndText>
            <CounterAndText countTo={100} addPlus={true} text={"Brands And Clients"} i={2}></CounterAndText>
        </div>
    )
}

export default Stats;