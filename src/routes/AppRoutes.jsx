import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard.jsx'
import NotFound from '../pages/NotFound.jsx'
import WaterSources from '../pages/WaterSources.jsx'

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/sources" element={<Navigate to="/water-sources" replace />} />
			<Route path="/water-sources" element={<WaterSources />} />
			<Route path="/dashboard" element={<Navigate to="/" replace />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default AppRoutes
