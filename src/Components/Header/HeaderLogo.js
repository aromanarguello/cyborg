import React from 'react'
import PropTypes from 'prop-types'

const HeaderLogo = () => {
    const style = {
        width: '500px',
        height: 'auto'
    }

    return (
        <img src={require('../../LaboratorioClnico/SmallLogo.png')}
            // style={style}
            id='logo' />
    );
}

export default HeaderLogo;