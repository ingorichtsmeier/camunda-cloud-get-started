const { ZBClient } = require('zeebe-node')

void (async () => {
	const zbc = new ZBClient({
		camundaCloud: {
			clusterId: '365eed98-16c1-4096-bb57-eb8828ed131e',
			clientId: 'GZVO3ALYy~qCcD3MYq~sf0GIszNzLE_z',
			clientSecret: '.RPbZc6q0d6uzRbB4LW.B8lCpsxbBEpmBX0AHQGzINf3.KK9RkzZW1aDaZ-7WYNJ',
		},
	})

	await zbc.deployProcess(['../process/send-email.bpmn'])

	const result = await zbc.createProcessInstance('send-email', {
		message_content: 'Hello from the node.js get started',
	})

	console.log(result)
})()
