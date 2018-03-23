import React from 'react'
import PropTypes from 'prop-types'

const HeaderLogo = () => {
    const style = {
        width: '400px',
        height: 'auto'
    }

    return (
        <img src={require('../LaboratorioClnico/SmallLogo.png')} style={style} />
    );
}

export default HeaderLogo;