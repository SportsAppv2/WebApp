import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateTournament from './CreateTournament';
import TournamentDashboard from './TournamentDashboard.js';

const Tournament = () => {
    return (
        <>
        <Routes>
            <Route path="/dashboard/*" element={<TournamentDashboard />} key="route-dashboard-page" />
            <Route path="/*" element={<CreateTournament />} key="route-body-page" />
          </Routes>
        </>
    );
};

export default Tournament;