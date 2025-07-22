import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroVideo from './components/HeroVideo';
import PhotoGallery from './components/PhotoGallery';
import LetterSection from './components/LetterSection';
import IntroGate from './components/IntroGate';
import BgmPlayer from './components/BgmPlayer';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    const bgmRef = useRef();
        console.log('test');
    return (
        <AuthProvider>
            <Router>
                <BgmPlayer ref={bgmRef} />
                <Navbar />
                <Routes>
                    <Route path="/" element={<IntroGate />} />
                    <Route
                        path="/home"
                        element={
                            <ProtectedRoute>
                                <HeroVideo />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/gallery"
                        element={
                            <ProtectedRoute>
                                <PhotoGallery />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/letter"
                        element={
                            <ProtectedRoute>
                                <LetterSection />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;