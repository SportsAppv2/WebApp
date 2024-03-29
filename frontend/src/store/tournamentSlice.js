import { createSlice } from "@reduxjs/toolkit";
import { generateRandomString } from "../helpers/randomGenerator";

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
            key: "",
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
        allTeamData : [],
        groupOnly: false,
        groupAndKnockout: false,
        knockoutOnly: false,
        noOfGroups: "",
        noOfParticipantPerGroup: "",
        format2ndpage: false,
        groupValues: {},
        noOfMatches: 0,
        matches: [],
        matchValues: {
            player1: "",
            player2: "",
            date: "",
            startTime: "",
            endTime: "",
            singleMatch2: false,
            setScore: false,
        },
        scores: {
            player1 : "",
            player2 : "",
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
        },
        teamDataAdded (state) {
            state.allTeamData = [...state.allTeamData, {...state.teamData, key: generateRandomString(6)}];
        },
        groupValuesAdded (state, action) {
            state.groupValues[action.payload.key] = action.payload.val;
        },
        groupValuesRemoved (state, action) {
            state.groupValues[action.payload.key] = "";
        },
        addNoOfMatches (state, action) {
            state.noOfMatches = state.noOfMatches + 1;
        },
        addMatches (state, action) {
            state.matches[action.payload.key] = state.matchValues;
        },
        addPlayer1 (state, action) {
            state.matchValues.player1 = action.payload;
        },
        addPlayer2 (state, action) {
            state.matchValues.player2 = action.payload;
        },
        addDate (state, action) {
            state.matchValues.date = action.payload;
        },
        addStartTime (state, action) {
            state.matchValues.startTime = action.payload;
        },
        addEndTime (state, action) {
            state.matchValues.endTime = action.payload;
        },
        openSingleMatch2 (state, action) {
            state.matchValues.singleMatch2 = true;
        },
        closeSingleMatch2 (state, action) {
            state.matches[action.payload.key].singleMatch2 = false;
        },
        clearMatchValues (state) {
            state.matchValues.player1 = "";
            state.matchValues.player2 = "";
            state.matchValues.date = "";
            state.matchValues.startTime = "";
            state.matchValues.endTime = "";
        },
        setMatchValues (state, action) {
            state.matchValues.player1 = state.matches[action.payload.key].player1;
            state.matchValues.player2 = state.matches[action.payload.key].player2;
            state.matchValues.date = state.matches[action.payload.key].date;
            state.matchValues.startTime = state.matches[action.payload.key].startTime;
            state.matchValues.endTime = state.matches[action.payload.key].endTime;
            state.matchValues.singleMatch2 = state.matches[action.payload.key].singleMatch2;
        },
        resetSingleMatch2 (state) {
            state.matchValues.singleMatch2 = false;
        },
        toggleSetScore (state , action) {
            state.matches[action.payload.index].setScore = !state.matches[action.payload.index].setScore;
        },
        setScores (state, action) {
            state.scores.player1 = action.payload.p1;
            state.scores.player2 = action.payload.p2;
        }
    }
})

export const tournamentActions = tournamentSlice.actions;

export default tournamentSlice;