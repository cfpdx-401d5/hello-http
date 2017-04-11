# HTTP Server Greeting

To start the server, type the following into the command line:


`node server.js`


In your browser, you can type the following to get the corresponding greeting:

## Hello <name>
### localhost:3000/greeting/<name>
`hello <name>`
### Example
`localhost:3000/greeting/claire`<br>
`hello Claire`

## Hello stranger
### localhost:3000/greeting
`hello stranger`
### Example
`localhost:3000/greeting`<br>
`hello stranger`

## <Salutation> stranger
### localhost:3000/greeting/salutation=<salutation>
`<salutation> stranger`
### Example
`localhost:3000/greeting/salutation=welcome`<br>
`welcome stranger`

## <Salutation> <Name>
### localhost:3000/greeting/<name>/salutation=<salutation>
`<salutation> <name>`
### Example
`localhost:3000/greeting/claire/salutation=hola`<br>
`hola claire`

You can also type the following to get a list of interesting facts about HTTP:

## Fact about HTTP
### localhost:3000/facts
`a more secure version of http is called https', 'http is the protocol to exchange or transfer hypertext', 'http functions as a request-response protocol in the client-server computing model`

You can also post a new fact at the same URL and get a returned list of the facts plus your new one added!