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
        addTeam: false,
        addParticipant: false,
        teamData:{
            name: "",
            country: "",
            email: "",
            playerCount: 1,
            playerValues: [""], 
            logo: "",  
        },
        participantData: {
            name: "",
            country: "",
            email: "",
            logo: "",
        },
        groupOnly: false,
        groupAndKnockout: false,
        knockoutOnly: false,
        noOfGroups: "",
        noOfParticipantPerGroup: "",
        format2ndpage: false,
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
        showAddTeam(state) {
            state.addTeam = !state.addTeam
        },
        showAddParticipant(state) {
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
        teamlogoDeleted (state ,action) {
            state.teamData.logo = "";
        },
        addParticipantName(state,action) {
            state.participantData.name = action.payload;
        },
        addParticipantCountry(state, action) {
            state.participantData.country = action.payload;
        },
        addParticipantEmail(state, action) {
            state.participantData.email = action.payload;
        },
        participantLogoAdded (state, action) {
            state.participantData.logo = action.payload;
        },
        participantlogoDeleted (state ,action) {
            state.participantData.logo = "";
        },
        showGroupOnly (state) {
            state.groupOnly = !state.groupOnly;
        },
        showGroupAndKnockout (state) {
            state.groupAndKnockout = !state.groupAndKnockout;
        },
        showKnockoutOnly (state) {
            state.knockoutOnly = !state.knockoutOnly;
        },
        addNoOfGroups (state, action) {
            state.noOfGroups = action.payload;
        },
        addNoOfParticipantPerGroup (state, action) {
            state.noOfParticipantPerGroup = action.payload;
        },
        showFormat2ndpage (state) {
            state.format2ndpage = !state.format2ndpage;
        }
    }
})

export const tournamentActions = tournamentSlice.actions;

export default tournamentSlice;