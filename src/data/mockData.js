export const dashboardSummary = {
	tankLevel: 78,
	rainStatus: 'Rain Detected',
	waterSaved: 4250,
	overflowStatus: 'Normal',
	systemHealth: 'Active',
}

export const systemComponents = [
	{
		name: 'Storage Tank',
		purpose: 'Stores harvested rainwater for domestic use.',
		status: 'Active',
	},
	{
		name: 'JSN-SR04T Sensor',
		purpose: 'Measures water level inside the tank.',
		status: 'Active',
	},
	{
		name: 'Rain Sensor',
		purpose: 'Detects rainfall and updates system response.',
		status: 'Active',
	},
	{
		name: 'ESP32 Controller',
		purpose: 'Controls sensing, alerts, and status reporting.',
		status: 'Active',
	},
	{
		name: 'Recharge Pit',
		purpose: 'Supports groundwater recharge during overflow.',
		status: 'Ready',
	},
	{
		name: 'Filtration Unit',
		purpose: 'Cleans collected rainwater before storage.',
		status: 'Active',
	},
]

export const systemReportMetrics = [
	{
		label: 'Total Water Saved',
		value: '42,500 Litres',
		detail: 'Cumulative savings from rooftop harvesting.',
	},
	{
		label: 'Number of Rain Events',
		value: '86',
		detail: 'Detected rain cycles since deployment.',
	},
	{
		label: 'Tank Fill Cycles',
		value: '24',
		detail: 'Times the storage tank reached a usable level.',
	},
	{
		label: 'Recharge Events',
		value: '19',
		detail: 'Overflow-to-recharge transfers recorded.',
	},
]
