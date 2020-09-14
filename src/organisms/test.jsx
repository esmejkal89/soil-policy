import React, { useEffect, useState } from 'react'
import { TwitterContact } from '../atoms/twitterContact'

const parseData = (response) => {
  if (response.result) {
    const officials = response.result.officials
    return officials
  } else return []
}

const getTwitterFromOfficial = (officials) => {
  const twitterHandles =
    officials && officials.channels
      ? officials.channels.filter((channel) => channel.type === 'Twitter')
      : []
  debugger
  return twitterHandles.length > 0 ? twitterHandles[0].id : ''
}

export function MyComponent(props) {
  const params = {
    address: props.address,
  }
  const [officials, setOfficials] = useState([])
  useEffect(() => {
    let gapi = window.gapi
    // this is taken directly from Google documentation:
    // https://developers.google.com/api-client-library/javascript/start/start-js
    function start() {
      // 2. Initialize the JavaScript client library.
      gapi.client
        .init({
          apiKey: process.env.REACT_APP_GOOGLE_API,
          // clientId and scope are optional if auth is not required.
        })
        .then(function () {
          // 3. Initialize and make the API request.
          const electionId = 2000
          const address = 90025
          return gapi.client.request({
            path: '/civicinfo/v2/representatives',
            params: params,
          })
        })
        .then(
          function (response) {
            setOfficials(parseData(response))
          },
          function (reason) {
            console.log('Error: ' + reason.result.error.message)
          },
        )
    }
    // 1. Load the JavaScript client library.
    gapi.load('client', start)
  }, [])
  return officials ? (
    <>
      {officials.map((official) => (
        <>
          <TwitterContact address={getTwitterFromOfficial(official)} />
        </>
      ))}
    </>
  ) : null
}
