import PropTypes from 'prop-types';

function Participar({ isWhiteBackground }) {
  const className = isWhiteBackground
    ? "border-2 bg-[#0056B2] text-white rounded-3xl text-lg md:text-[1.75rem] font-bold h-min py-1 relative bottom-1 px-3 mt-40"
    : "border-2 border-white bg-[#313131] rounded-3xl text-lg md:text-[1.75rem] font-bold h-min py-1 relative bottom-1 px-3 mt-32 md:mt-40";

  return (
    <a
      href="https://www.sympla.com.br/eventos"
      className={className}
      target="_blank"  // Opens the link in a new tab
      rel="noopener noreferrer"  // Security best practice
    >
      Quero Participar
    </a>
  );
}

// PropTypes validation
Participar.propTypes = {
  isWhiteBackground: PropTypes.bool,
};

export default Participar;
