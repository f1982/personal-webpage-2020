import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const SpringTest = (props: {}) => {
    const sprops = useSpring({ opacity: 1, from: { opacity: 0 } ,config:{duration:5000}})
    return <animated.div style={sprops}>I will fade in</animated.div>
}

export {
    SpringTest
}