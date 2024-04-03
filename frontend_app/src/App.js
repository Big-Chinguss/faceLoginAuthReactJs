import React from 'react'
import './css/App.css'
import { Route, Routes } from "react-router-dom"
import { Auth } from './components/Auth'
import { AuthContainer } from './containers/AuthContainer'
import { PrivateContainer } from './containers/PrivateContainer'
import { Loader } from './components/Loader'
import { Dashboard } from './components/backoffice/Dashboard'
import  PreLoader   from './components/Preloader'
// import FirebaseUploadImage from './components/UploadImage'

const App = () => {

	return (
		<div className="limiter">
		<PreLoader />
			<Loader />
			<div className="container-login100" >
				<Routes>
					<Route path='/' element={<AuthContainer><Auth /></AuthContainer>} />
					<Route path='/dashboard' element={<PrivateContainer><Dashboard /></PrivateContainer>} />
				</Routes>
				{/* <FirebaseUploadImage /> */}
			</div>
		</div>
	);
}

export default App;
