import { createSlice } from "@reduxjs/toolkit";

const tournamentSlice = createSlice({
    name: "tournament",
    initialState: {
        createInfo: {
            title: "",
            from: "",
            to: "",
            venue: "",
        },
        dashboard: false,
        leftbar:{
            participants: true,
            format: false,
            schedule: false,
            results: false,
            settings: false,
        },
        addTeam: false,
        addParticipant: false,
        teamData:{
            name: "",
            country: "",
            email: "",
            playerCount: 1,
            playerValues: [""], 
            logo: "",  
        }
    },
    reducers: {
        titleAdded(state, action) {
            state.createInfo.title  = action.payload;
        },
        fromAdded(state, action) {
            state.createInfo.from  = action.payload;
        },
        toAdded(state, action) {
            state.createInfo.to  = action.payload;
        },
        venueAdded(state, action) {
            state.createInfo.venue  = action.payload;
        },
        clearInfo(state){
            state.createInfo.title = "";
            state.createInfo.from = "";
            state.createInfo.to = "";
            state.createInfo.venue = "";
        },
        showDashboard(state) {
            state.dashboard = !state.dashboard;
        },
        showParticipants(state) {
            state.leftbar.participants = !state.leftbar.participants;
        },
        showFormat(state) {
            state.leftbar.format= !state.leftbar.format;
        },
        showSchedule(state) {
            state.leftbar.schedule = !state.leftbar.schedule;
        },
        showResults(state) {
            state.leftbar.results = !state.leftbar.results;
        },
        showSettings(state) {
            state.leftbar.settings = !state.leftbar.settings;
        },
        showAddTeam(state) {
            state.addTeam = !state.addTeam
        },
        showAddPArticipant(state) {
            state.addParticipant = !state.addParticipant
        },
        addTeamName(state,action) {
            state.teamData.name = action.payload;
        },
        addTeamCountry(state, action) {
            state.teamData.country = action.payload;
        },
        addTeamEmail(state, action) {
            state.teamData.email = action.payload;
        },
        addInputField(state,action) {
            state.teamData.playerCount = state.teamData.playerCount+1;
            state.teamData.playerValues = [...state.teamData.playerValues,""];
        },
        addPlayerValues (state, action) {
            console.log("in slice XXX ", action.payload.index);
            state.teamData.playerValues[action.payload.index] = action.payload.value;
        },
        removePlayerValues (state, action) {
            console.log("in slice", action.payload.index);
            state.teamData.playerValues.splice(action.payload.index,1);
            state.teamData.playerCount = state.teamData.playerCount - 1;
        },
        teamLogoAdded (state, action) {
            state.teamData.logo = action.payload;
        },
        logoDeleted (state ,action) {
            state.teamData.logo = "";
        }
    }
})

export const tournamentActions = tournamentSlice.actions;

export default tournamentSlice;