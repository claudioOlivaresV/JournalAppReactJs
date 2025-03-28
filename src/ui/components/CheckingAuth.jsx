import { CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = () => {
    return (
    
        <Grid
        container
        spacing={0}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
      >
        <Grid item 
          sx={{ width: { md: 450, display:'flex'}}}  alignItems={"center"}
          justifyContent={"center"}>
            <CircularProgress color="info"></CircularProgress>

        </Grid>
       </Grid>
    
  )
}
