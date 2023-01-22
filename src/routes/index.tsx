import { Button } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"
import { useDrawerContext } from "../shared/contexts"
import MenuIcon from '@mui/icons-material/Menu';

export const AppRoutes = () => {

	const { toggleDrawerOpen } = useDrawerContext()

	return (
		<Routes>
			<Route
				path="/pagina-inicial"
				element={
					<Button
						variant="contained"
						color="primary"
						onClick={toggleDrawerOpen}>
						<MenuIcon></MenuIcon>
					</Button>}
			/>

			<Route path="*" element={<Navigate to="/pagina-inicial" />} />
		</Routes>
	)
}