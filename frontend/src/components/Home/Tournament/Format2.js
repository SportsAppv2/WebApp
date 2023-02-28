import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tournamentActions } from '../../../store/tournamentSlice';
import SingleParticipant from './SingleParticipant';

const Format2 = (props) => {
    const data = useSelector((state) => state.tournament);
    const dispatch = useDispatch();
    // const [availableTeams, setAvailableTeams] = useState([]);
    // useEffect(()=> {
    //     if(availableTeams.length == 0)
    //     {    setAvailableTeams(availableTeams => availableTeams.concat(data.allTeamData));}
    //     console.log("available teams after first useEffect ", availableTeams)}, [])
        // const removeTeam = (e) => {
        //     const keyToRemove = e.target.value;
        //     console.log(keyToRemove, availableTeams[0].key);
            
        //     const updatedTeams = availableTeams.filter(team => team.key !== keyToRemove);
        //     console.log("Updated teams are ", updatedTeams);
            
        //     setAvailableTeams(updatedTeams);
        //   };
          
    const groupAdd  = (e, index, grpIndex) => {
        // removeTeam(e);
        dispatch(tournamentActions.groupValuesAdded({key: index+grpIndex+grpIndex, val: e.target.value}));     
    }

    return (
        <div className='bg-[black] h-screen w-[100%] flex'>
            <div className='w-[700px]'>
                {Array.from({length:data.noOfGroups}).map((_, grpIndex) => {
                    return <div className='bg-gray-600 bg-opacity-20 text-white-100 w-[300px] h-fit rounded-lg shadow-2xl py-2 m-3'
                    key={grpIndex}>
                        <div className='text-center'>
                            Group {grpIndex}
                        </div>
                        {Array.from({length:data.noOfParticipantPerGroup}).map((_, index) => {
                            return <div className='bg-gray-600 bg-opacity-50 mx-8 my-5 p-2'>
                                <select className='bg-[#1b1a1a] text-white-100 w-full p-1 shadow-2xl rounded-lg'
                                key={index} onChange={(e) => {groupAdd(e,index,grpIndex)}}>
                                    <option value="none">Select one</option>
                                    <option value="sex">Sex Select one</option>
                                    {/* {
                                        availableTeams.map((itemsz) =>
                                           (<option value={itemsz.key} key={itemsz.key}>{itemsz.name}</option>)
                                        )
                                    } */}
                                    {Array.from(data.allTeamData).map((item) => {
                                        if(!Object.values(data.groupValues).includes(item.key)) {
                                            return <option value={item.key} key={item.key}>{'a' + item.name}</option>
                                        }                                        
                                    })}
                                </select>
                            </div>
                        })}
                    </div>
                })}
            </div>
            <div className='w-[600px]'>
                {Array.from(data.allTeamData).map((value, index) => {
                    return (<SingleParticipant val={value}/>)
                })}
            </div> 
        </div>
    );
};

export default Format2;