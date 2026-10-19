import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Elencocorsi } from '../components/Elencocorsi';
import { Cards } from '../components/Cards';
import { Form } from '../components/Form';

function Home() {
    return (
        <div>

            <Header />
            
            <Cards />
            
            <Form />
            
            <Elencocorsi />
                                                
            <Footer />

        </div>
    );
}

export default Home;