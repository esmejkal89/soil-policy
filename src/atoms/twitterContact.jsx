import React from 'react'
import { TwitterMentionButton } from 'react-twitter-embed'

export function TwitterContact(props) {
  debugger
  return (
    <TwitterMentionButton
      screenName={props.address}
      options={{
        size: 'large',
        text: `#reactjs is awesome`,
      }}
    >
      {props}
    </TwitterMentionButton>
  )
}
