import React, { useState, useEffect } from 'react';
import { IoReloadOutline } from 'react-icons/io5';
import './App.css'
interface SlipProps {
  id: number;
  advice: string;
}

function ObConselho() {
  const [slip, setSlip] = useState<SlipProps | null>(null);

  const getData = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then((data: { slip: SlipProps }) => {
        setSlip(data.slip);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleReload = () => {
    getData();
  };

  return (
    <div>
      {slip ? (
        <div className="container">
          <div id="ad-id">ADVICE #{slip.id}</div>
          <div id="cont-con">
            <div id="conselho">{slip.advice}</div>
          </div>
          <div id="sep">
            <span className="ln-e"></span>
            <img src="/icons8-pausa-32.png" className="menu" alt="" />
            <span className="ln-d"></span>
          </div>
          <div>
            <button className="btn" id="obterConselho" onClick={handleReload}>
              <IoReloadOutline color="white" size={30} />
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ObConselho;
