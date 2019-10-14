import React from 'react'
import AstroBearLogoInverse from './AstroBearLogoInverse.png'
import styled from 'styled-components'

export default function PopUpWindow() {


    const TextWrapper = styled.section`
        z-index: 100;
        position: fixed;
        background-color: white;
        color: black;
        border: solid 5px black;
        display: grid
        place-items: center; 
        text-align: center; 
        padding: 20px; 

    `

    const linkWrapper = {
        color: `blue`
    }


    const imgSize = {
        width: `250px`,
        height: `250px`,
        margin: `20px`

    }

 
    return (
        <TextWrapper>
            <div>
                <img style={imgSize} src={AstroBearLogoInverse}></img>
            </div>
            <div >
                <h3>Hello.  Thank you for visiting this page.  Unfortunately, this page is no longer being updated as I have created a new professional portfolio page.  You can visit my new page at <a style={linkWrapper} href="https://portfolio-final-3.brandonmgh.now.sh">Brandon Harris: Full Stack Web Developer</a>.  Thank you!</h3>
            </div>
        </TextWrapper>
    )
}
