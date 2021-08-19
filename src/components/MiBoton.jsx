import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const MiBoton = ({ etiqueta, nombre, ocultanombre }) => {
  return (

    <div> 
    <button
      type="button"
      className="Miboton"
      ///{...props}
    >
      {etiqueta}
    </button>
      
     <h2>MENSSAGE OK {ocultanombre?(nombre):('')}</h2>  </div>
  );
};

MiBoton.propTypes = {
  /**
   * Button contents
   */
  //etiqueta: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

MiBoton.defaultProps = {
  etiqueta:'mensaje tres',
  onClick: () => {console.log('msg 2')},
};