import { useDispatch } from 'react-redux';
import type { AppDispatch } from './../../store/store';
import { asyncGetAllUsers, fromUserReducer, useUserSelector } from '../../store';
import { useEffect } from 'react';
import { UserProfileCard } from './UserProfileCard';
import type { UserI } from '../../interface';
import { IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useNavigate } from 'react-router-dom';

export const Users = () => {
  const userSelector = useUserSelector();
  const users = userSelector.getAllUsers();
  const userState = userSelector.getState();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const getAllUsers = () => {
    dispatch(asyncGetAllUsers())
  }

  const onSelectUser = (user: UserI) => {
    console.log(`user: ${user.name}`);
    dispatch(fromUserReducer.selectUser(user));
    navigate(`${user.id}/posts`)
  }

  useEffect(() => {
    if (users.length === 0) {
      getAllUsers();
    }
  }, []);

  const onHandleTryAgain = () => {
    getAllUsers();
  }

  const allProfiles = (
    <div className='grid md:grid-cols-4 max-sm:grid-cols-2 gap-4 my-2'>
      {
        users.map(user => (
          <UserProfileCard key={user.id} user={user} isActive={false} onSelectUser={onSelectUser}></UserProfileCard>
        ))
      }
    </div>
  )

  const loadingNode = (
    <div className='absolute top-1/2 left-1/2 text-2xl -translate-x-1/2 -translate-y-1/2'>Loading...</div>
  )

  const tryAgainNode = (
    <div className='absolute top-1/2 left-1/2 text-2xl -translate-x-1/2 -translate-y-1/2 text-center'>
      <h1>Something went wrong please try again...</h1>
      <IconButton onClick={onHandleTryAgain} color="primary" aria-label="add to shopping cart" size='large'>
        <RefreshIcon />
      </IconButton>
    </div>
  )

  const profileNode = userState==="pending" ? loadingNode : userState==="error" ? tryAgainNode : allProfiles;
  
  return (
    <>
      <div className='p-2 h-full'>
        <h1 className='text-2xl'>Select any user to explore all the blogs they’ve created.</h1>
        {profileNode}
      </div>
    </>
  )
}
