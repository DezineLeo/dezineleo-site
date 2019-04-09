import React from 'react'
import styled from 'styled-components'

const Lang = styled.ul`
  display: flex;
  justify-content: between;
  align-items: center;
  list-style: none;
  margin: 0;
  li {
    margin: 0 0 0 8px;
    font-size: 13px;
    padding: 3px 6px;
    &.active {
      background: var(--black);
      a {
        color: white;
      }
    }
  }
`

export default Lang