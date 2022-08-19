import React from 'react';
import hmeImg from '../img/DSZ_4047.jpg';
export const HeaderImg = ({title, subTitle}) => {
    return (
        <section>
            <div style={{ backgroundImage: `url(${hmeImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'}}>

                <div className="container" style={{minHeight: '1363px'}}>
                    <div className="text-center justify-content-center align-self-center">
                        <h1 className="pt-5 pb-3">{title}</h1>
                        <h5>{subTitle}</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}