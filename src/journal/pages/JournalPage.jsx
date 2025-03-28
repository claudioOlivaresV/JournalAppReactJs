import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import NothingSelectedView from '../view/NothingSelectedView';
export const JournalPage = () => {
  return (
    <>
     <JournalLayout>
       <NothingSelectedView />
       {/* <NoteView /> */}
       <IconButton size='large' color='white'
       sx={{
          color: 'white',
          backgroundColor: 'primary.main',
          ':hover': {backgroundColor: 'primary.main',  opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
          }}>
          <AddOutlined sx={{fontSize: 30}}/>
         

       </IconButton>
       {/* <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus mollitia quaerat odio tenetur accusantium suscipit, id maiores inventore, facere aliquid in, enim porro. Culpa nam, exercitationem aliquid fugit omnis recusandae!</Typography> */}
     </JournalLayout>
    </>
  )
}
