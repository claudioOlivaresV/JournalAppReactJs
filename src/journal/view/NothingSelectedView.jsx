import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export default function NothingSelectedView() {
  return (
    <Grid
    container
    spacing={0}
    direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    sx={{minHeight: 'calc(100vh - 110px)', backgroundColor: '##F2F2F0', padding: 4, borderRadius: 3}} className='animate__animated animate__fadeIn animate__faster'
    
    >
        <Grid item sx={12}>
            <StarOutline sx={{fontSize: 100, color: 'primary.main'}}/>

        </Grid>
        <Grid item sx={12}>
            <Typography variant="h5" color="primary.main">Selecciona o crea una entrada</Typography>

        </Grid>
    /</Grid>
  )
}
