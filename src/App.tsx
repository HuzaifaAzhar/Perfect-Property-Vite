import { Routes, Route } from "react-router-dom";
import CitadelLayout from "./pages/Home.tsx"; // your current App content
import CV from "./pages/cv.tsx"; // new CV page
import CandidateServices from "./pages/candidate"; // new Candidate Services page
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CitadelLayout />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/candidate-services" element={<CandidateServices />} />
    </Routes>
  );
}
