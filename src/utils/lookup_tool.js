let gapi = window.gapi

/**
 * Build and execute request to look up voter info for provided address.
 * @param {string} address Address for which to fetch voter info.
 * @param {function(Object)} callback Function which takes the
 *     response object as a parameter.
 */
function lookup(address, callback) {
  /**
   * Election ID for which to fetch voter info.
   * @type {number}
   */
  var electionId = 2000

  /**
   * Request object for given parameters.
   * @type {gapi.client.HttpRequest}
   */
  var req = gapi.client.request({
    path: '/civicinfo/v2/voterinfo',
    params: { electionId: electionId, address: address },
  })
  req.execute(callback)
}

/**
 * Render results in the DOM.
 * @param {Object} response Response object returned by the API.
 * @param {Object} rawResponse Raw response from the API.
 */
function renderResults(response, rawResponse) {
  var el = document.getElementById('results')
  if (!response || response.error) {
    el.appendChild(
      document.createTextNode('Error while trying to fetch polling place'),
    )
    return
  }
  var normalizedAddress =
    response.normalizedInput.line1 +
    ' ' +
    response.normalizedInput.city +
    ', ' +
    response.normalizedInput.state +
    ' ' +
    response.normalizedInput.zip
  if (response.pollingLocations.length > 0) {
    var pollingLocation = response.pollingLocations[0].address
    var pollingAddress =
      pollingLocation.locationName +
      ', ' +
      pollingLocation.line1 +
      ' ' +
      pollingLocation.city +
      ', ' +
      pollingLocation.state +
      ' ' +
      pollingLocation.zip
    var normEl = document.createElement('strong')
    normEl.appendChild(
      document.createTextNode('Polling place for ' + normalizedAddress + ': '),
    )
    el.appendChild(normEl)
    el.appendChild(document.createTextNode(pollingAddress))
  } else {
    el.appendChild(
      document.createTextNode(
        'Could not find polling place for ' + normalizedAddress,
      ),
    )
  }
}

/**
 * Initialize the API client and make a request.
 */
export function load() {
  gapi.client.setApiKey(process.env.REACT_APP_GOOGLE_API)
  lookup('1263 Pacific Ave. Kansas City KS', renderResults)
}
