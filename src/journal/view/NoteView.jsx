import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components/ImageGallery"

export const NoteView = () => {
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item>
            <Typography fontSize={39} fontWeight="line">28 de agosto, 2023</Typography>
        </Grid>
        <Grid item sx={{mb:2}}>
            <Button color="primary" variant="outlined" sx={{padding: 2}}>
                <SaveOutlined sx={{fontSize: 30, mr:1}}></SaveOutlined>
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
               type="text"
               variant="filled"
               placeholder="Ingrese un titulo"
               fullWidth
               label="Título"
               sx={{border: 'none', mb:1}}
            />
            <TextField
               type="text"
               variant="filled"
               placeholder="Descripción"
               fullWidth
               multiline
               sx={{border: 'none', mb:1}}
               minRows={4}
            />
        </Grid>
        {/* {galenria de imagenes} */}
        <ImageGallery />

    </Grid>
  )
}
