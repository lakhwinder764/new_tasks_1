import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import {
  Grid,
  Typography,
  Box,
  DialogContent,
  IconButton,
  Dialog,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const SelectViewModal = ({steps, setSteps}) => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
        setOpen(true)
    },[5000])
})
const handleClose = () => {
    setOpen(false)
}
const [val, setVal] = useState("box2")
  return (
    <Dialog open={open} maxWidth="md"fullWidth={true}
    >
         <DialogContent dividers >
      <Grid item xs={12} pb={1}>
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end">
         
          <IconButton aria-label="close" onClick={handleClose} size="small">
            <CloseIcon size="small" />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <Typography variant="subtitle1" component="div"  fontWeight="bold" fontSize={20}>
            Select a view
          </Typography> 
          <Typography variant="subtitle1" component="div" fontSize={16} sx={{color: 'grey'}}>
            you can also customize this views in settings
          </Typography> 
        </Box>
        </Box>
        </Grid>
        <Box   sx={{
            p:4
         }}>
        <Grid item xs={12} pb={1}
      
        >
       <Box display="flex" alignItems="center" 
       justifyContent="space-between"
       flexWrap="wrap"
       >
        <Box display="flex" flexDirection="column">
            <Box display="flex" sx={{
                border: `2px solid ${ val === "box1" ? '#007FFF' : '#D3D3D3'}`,
                borderRadius: 1,

            }}
            onClick={() => setVal('box1')}
            alignItems="center"
            justifyContent="center"
            >
              <IconButton
              disableRipple
               sx={{
                 color: val === "box1" ? 'black' :'#D3D3D3',
                 width: 200,
                 height: 150
                }}
              > 
             <ListIcon sx={{
              width: 100,
              height: 100
             }}/>
              </IconButton>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                <Typography sx={{
                    color: val === "box1" ? 'black' :'#D3D3D3'
                }}>List</Typography>
            </Box>
            </Box>
            <Box display="flex" flexDirection="column">
            <Box display="flex" sx={{
                border: `2px solid ${val === "box2" ? '#007FFF': '#D3D3D3'}`,
                borderRadius: 1,
            }}
            onClick={() => setVal('box2')}
            alignItems="center"
            justifyContent="center"
            >
             <IconButton
             disableRipple
             sx={{
               color: val === "box2" ? 'black' :'#D3D3D3',
               width: 200,
               height: 150
              }}
            > 
           <ListIcon sx={{
            width: 100,
            height: 100
           }}/>
            </IconButton>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
                <Typography sx={{
                    color: val === "box2" ? 'black' :'#D3D3D3'
                }}>Board</Typography>
            </Box>
            </Box>
       </Box>
        </Grid>
        <Grid container item xs={12} mt={20} alignItems="center" justifyContent="space-between">
               <Grid item sm={5} xs={6}>
                <Box>
            <Button variant="text" startIcon={<ArrowBackIosIcon/>} size="small"
            sx={{color: 'grey'}}
            onClick={() => {
              setSteps(steps - 1)
         }}
            >Back</Button>
            </Box>
            </Grid>
            <Grid item sm={7} xs={4}>
            <Box >
            <Button variant="contained" sx={{
                width: 100
            }}
            onClick={() => {
              setSteps(steps + 1)
         }}
            >Next</Button>
            </Box>
            </Grid>
        </Grid>
        </Box>
        <Grid item xs={12} pb={1} p={4}>
      <Typography
      sx={{
  color: '#ff6347'
      }}
      >
Click on next button to open next modal
      </Typography>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

SelectViewModal.propTypes = {
  steps: PropTypes.func.isRequired,
  setSteps: PropTypes.number.isRequired,
};
export default SelectViewModal;
