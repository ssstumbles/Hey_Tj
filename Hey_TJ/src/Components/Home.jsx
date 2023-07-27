import { Link } from 'react-router-dom'

const Home = () => {

    return(
        <div className='home'>
        <h1>Hi, I'm TJ!</h1>
            <div className='intro'>
                <p>
                    I'm your personal <span  className='highlight'>T</span>ravel <span  className='highlight'>J</span>ournal
                </p>
                <p>
                    I'm here to assist you, so you can easily document all your trips and adventures!
                </p>
                <Link to='/about'>
                    <button>See How it Works</button>
                </Link>
                <Link to='new-journal'>
                    <button>Get Started</button>
                </Link>
               
            </div>
        </div>    
    )


}

export default Home