import React from 'react';
import './styles.css';

const Card = (props) => {
  return (
    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-12 col-md-4 col-sm-12 col-xs-12">
                   <div className="card p-4">
                       <div className="d-flex">
                           <h6 className="flex-grow-1">{props.region} / {props.name}</h6>
                           <h6>{props.time}</h6>
                       </div>
                       <div className="d-flex flex-column temp mt-5 mb-3">
                           <h1 className="mb-0 font-weight-bold" id="heading"> {props.temp}&deg; C </h1>
                       </div>
                       <div className="d-flex">
                           <div className="temp-details flex-grow-1">
                                <p className="my-1">
                                    <img src="https://i.imgur.com/B9kqOzp.png" height="17px" />
                                    <span> {props.wind_kph} kmh  </span>
                                </p>
                                <p className="my-1">
                                   <i className="fa fa-tint mr-2" aria-hidden="true"></i>
                                   <span> {props.humidity}° </span>
                                </p>
                           </div>
                        <div>
                            <img src= {props.icon} width="100px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;
