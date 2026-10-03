import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../Home/Home";
import { Subjects } from "../Subjects/Subjects.jsx";
import { TestContainer } from "../tests/TestContainer.jsx";

export default function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/subjects" element={<Subjects />} />
                    <Route path="/test/:subjectCode" element={<TestContainer />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}