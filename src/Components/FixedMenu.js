import React from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    position : fixed ;

    bottom : 5px ;
    right : 5px ;
`;

const FixedMenu = () => {

    function onClickScrollTop(e) {
        window.scrollTo(0, 0) ;
    }

    return (
        <Container onClick={onClickScrollTop}>
            <FontAwesomeIcon icon={faArrowAltCircleUp} size="3x" />
        </Container>
    );
};

export default FixedMenu;