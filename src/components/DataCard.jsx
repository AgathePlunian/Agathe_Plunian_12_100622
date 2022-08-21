import PropTypes from 'prop-types';

/**
 * Render data card with data key
 * @param {string} name
 * @param {string} unit
 * @param {string} value
 * @param {string} img
 * @returns {ReactElement}
 */

function DataCard({name, unit, icon, result}) {
  let value = "";
  switch (name) {
    case 'Calories':
      value = result.data.keyData.calorieCount;
      break;
    case 'Proteines':
      value = result.data.keyData.proteinCount;
      break;
    case 'Glucides':
      value = result.data.keyData.carbohydrateCount;
      break;
    case 'Lipides':
      value = result.data.keyData.lipidCount;
      break;

      default:
      value = "Pas de données trouvées"
}


    return (
      <div className="keydata-list">
        <div className= "keydata-item" >
          <div className={`item-${name} keydata-img` }><img alt={icon} src={icon}/></div>
          <div className="keydata-content">
            <p className="keydata-value"> {value} {unit}</p>
            <p className="keydata-name">{name}</p>
          </div>
        </div>
      </div>
    )
}

DataCard.propTypes = {
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default DataCard;