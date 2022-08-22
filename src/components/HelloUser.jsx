import PropTypes from 'prop-types'

/**
 * Render Hello User
 * @param {Object} data
 * @returns {ReactElement}
 */

function HelloUser({result}) {
    return (
        <div className="dashboard-header">
        <h1 className="hello-user-title">Bonjour <span className="username">{result.data.userInfos.firstName}</span></h1> 
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>   
    )

          
}
HelloUser.propTypes = {
    result: PropTypes.object,
};


export default HelloUser;