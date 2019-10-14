import React from 'react'
import styled from 'styled-components'

export default function PopUpWindowShadow() {

    const BackgroundShadow = styled.section`
    background-color: black;
    z-index: 50;
    opacity: .5 
    height: 100%
    width: 100%
    position: fixed 
    `
    

    return (
        <BackgroundShadow>
          <p></p>
        </BackgroundShadow>
    )
}
