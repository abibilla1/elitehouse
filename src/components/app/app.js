import React, {Component} from 'react';
import Header from "../header";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from 'react-responsive-carousel';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Carousel>
                    <div>
                        <img src="https://zastavok.net/main/macro/159709956593.jpg" alt=""/>
                        <h2>sample caption</h2>
                    </div>

                    <div>
                        <img src="https://zastavok.net/main/graphics/159707712948.jpg" alt=""/>
                        <h2>sample caption</h2>
                    </div>

                    <div>
                        <img src="https://zastavok.net/main/sport/159708444661.jpg" alt=""/>
                        <h2>sample caption</h2>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default App;