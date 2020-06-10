import React from 'react'
import styled from 'styled-components';
import Paragraph from '@components/Paragraph'
import { BREAKPOINTS } from '@constants'

export default props => {
  const {
    children,
    sidenote,
  } = props;

  return (
    <Paragraph>
      <NewThought>
        {children}
        <label htmlFor={`sn-${children.join('-')}`}></label>
      </NewThought>
      <Input type="checkbox" id={`sn-${children.join('-')}`} />
      <Sidenote>{sidenote}</Sidenote>
    </Paragraph>
  )
}

const NewThought = styled.span`
  label {
    counter-increment: sidenote-counter;
    display: inline; 

    ::after {
      content: counter(sidenote-counter);
      font-size: 1rem;
      top: -0.5rem;
      left: 0.1rem;
      position: relative;
      vertical-align: baseline; 
    }
  }
`

const Input = styled.input`
  display: none;

  @media ${BREAKPOINTS.sm} {
    :checked + span {
      display: block;
      float: left;
      left: 1rem;
      clear: both;
      width: 95%;
      margin: 1rem 2.5%;
      vertical-align: baseline;
      position: relative; 
    }
  }
`

const Sidenote = styled.span`
  float: right;
  clear: right;
  margin-right: -50%;
  width: 40%;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 0.8rem;
  line-height: 1.6;
  vertical-align: baseline;
  position: relative;

  ::before {
    content: counter(sidenote-counter) " ";
    font-size: 0.8rem;
    top: -0.5rem;
    position: relative;
    vertical-align: baseline; 
  }

  @media ${BREAKPOINTS.sm} {
    display: none;
  }
`