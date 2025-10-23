// WARNING: THE USAGE OF CUSTOM SCRIPTS IS NOT SUPPORTED. VTEX IS NOT LIABLE FOR ANY DAMAGES THIS MAY CAUSE.
// THIS MAY BREAK YOUR STORE AND STOP SALES. IN CASE OF ERRORS, PLEASE DELETE THE CONTENT OF THIS SCRIPT.

const og = new URLSearchParams(location.search).get('og')
window.location.assign(
  `${window.location.origin}/api/io${window.location.pathname}?og=${og}`
)