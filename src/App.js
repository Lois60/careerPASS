import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import { AboutUs } from "./pages/AboutUs.jsx";
import { ContactUs } from "./pages/ContactUs.jsx";
import { TakeAssessment } from "./pages/TakeAssessment.jsx";
import { CognitiveAbility } from "./pages/CognitiveAbility.jsx";
import { LogicalReasoning } from "./pages/LogicalReasoning.jsx";
import { PersonalityTraits } from "./pages/PersonalityTraits.jsx";
import { EmotionalStability } from "./pages/EmotionalStability.jsx";
import { Magination } from "./pages/Magination.jsx";
import { TechnicalAptitude } from "./pages/TechnicalAptitude.jsx";
import { SkillsAssessment } from "./pages/SkillsAssessment.jsx";
import { RegisterForm } from "./pages/RegisterForm.jsx";
import { ThankYou } from "./pages/ThankYou.jsx";
import { Terms } from "./pages/Terms.jsx";
import { Recommendations } from "./pages/Recommendations.jsx";


// import { Register } from "./pages/Register.jsx";

import { MainLayout } from "./layouts/MainLayout.jsx";

import "./App.css";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainLayout />}>
			<Route index element={<HomePage />} />
			<Route path='/About-Us' element={<AboutUs />} />
			<Route path='/Contact-Us' element={<ContactUs />} />
			<Route path='/TakeAssessment' element={<TakeAssessment />} />
			<Route path='/CognitiveAbility' element={<CognitiveAbility />} />
			<Route path='/LogicalReasoning' element={<LogicalReasoning />} />
			<Route path='/PersonalityTraits' element={<PersonalityTraits />} />
			<Route path='/EmotionalStability' element={<EmotionalStability />} />
			<Route path='/Magination' element={<Magination />} />
			<Route path='/TechnicalAptitude' element={<TechnicalAptitude />} />
			<Route path='/SkillsAssessment' element={<SkillsAssessment />} />
			<Route path='/Recommendations' element={<Recommendations />} />
			<Route path='/RegisterForm' element={<RegisterForm />} />
			<Route path='/ThankYou' element={<ThankYou />} />

			<Route path='/Terms' element={<Terms />} />
		</Route>
	)
);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
