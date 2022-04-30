import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Desktop = () => {
  const [hasAnimationEnded, sethasAnimationEnded] = useState(false);
  const [startContractAnimation, setstartContractAnimation] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      onAnimationEnd={() => {
        sethasAnimationEnded(true);
        startContractAnimation && navigate(-1);
      }}
      className={`absolute bg-black w-full h-full top-0 ${
        startContractAnimation
          ? `animate-[contract_1s_ease-in-out_forwards]`
          : `animate-[expand_1s_ease-in-out]`
      } `}
    >
      {hasAnimationEnded && !startContractAnimation && (
        <div className="text-white">
          <h1>Reuben Barboza</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            quaerat iure, fugit earum rem optio, ullam rerum totam, ducimus
            similique distinctio sapiente quos iusto eveniet? Exercitationem id
            quaerat maxime ipsam?
          </p>
          <button
            className="text-white px-5 py-3"
            onClick={() => {
              setstartContractAnimation(true);
            }}
          >
            GO bACK
          </button>
        </div>
      )}
    </div>
  );
};

export default Desktop;
