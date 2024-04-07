import React, { useState } from "react";
import { SnackbarProvider } from "notistack";
import {
  Grid,
  Typography,
  Box,
  DialogContent,
  Dialog,
  TextField,
  MenuItem,
  Button,
  Radio,
  LinearProgress,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


const CreateProjectModal = () => {

  const [radval, setRadVal] = useState(null);
  const [radvals, setRadVals] = useState(null);
  const [newPage, setNewPage] = useState(false);
  const [progress, setProgress] = useState(0);
  const [myname, setMyName] = useState(null);
  const [names, setNames] = useState(null);
  const [menu, setMenu] = useState(null);
  const [menus, setMenus] = useState(null);
  const commonStyle={
      border: '1px solid grey',
      borderRadius: 2,
      m:2,
    '&::before':{
      content:'"All issues"',
      display:'block',
      color:'grey',
      position:'absolute',
      top:-35,
      left:2,
      fontSize:'18px'
    },
    display:'block',
    mt:4, 
    fontWeight:'bold',
    textAlign:'center',
    fontSize:'14px',
    '&.MuiMenuItem-root':{
      backgroundColor:'lightgrey'
    }
  }
  const styles={
    border: '1px solid grey',
    borderRadius: 2,
    fontSize:'14px',
    m:2,
  display:'block',
  mt:4, 
  fontWeight:'bold',
  textAlign:'center',
  '&.MuiMenuItem-root':{
    backgroundColor:'lightgrey'
  },
  '&.MuiPaper-root .MuiPopover-paper .MuiMenu-paper':{
    backgroundColor:'lightgrey'
  }
}
  return (
    <Dialog open={true} maxWidth="md" fullWidth={true} disableEscapeKeyDown>
      <DialogContent dividers>
        <SnackbarProvider />
        <Grid item xs={12} pb={1}>
          <Box display="flex" flexDirection="column">
            <Box sx={{
              width: '100%'
            }}>
            <LinearProgress variant="determinate" value={progress} color="error" sx={{
              height: 5,
              borderRadius: 16,
            }}/>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Typography
                variant="subtitle1"
                component="div"
                fontWeight="bold"
                fontSize={20}
                color="red"
              >
                Let's get started!
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                fontSize={14}
                sx={{ color: "grey" }}
              >
                Add your details ( As per your registered records )
              </Typography>
            </Box>
          </Box>
        </Grid>
        {
          newPage ? (
            <Box
            sx={{
              p: 4,
            }}
          >
            <Grid item xs={12} pb={1}>
              <Box display="flex" flexDirection="column">
                <Typography variant="subtitle2" fontWeight="bold" sx={{ pb: 1 }}>
                  Place where Driving License was issued
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="Enter Place Name"
                  size="small"
                  style={{
                    backgroundColor:'lightgrey',
                    color: '#C5C6D0'
                  }}
                  onBlur={() => {
                    setProgress(names?.length >=3 ? progress>=100 ? 100 : progress + 16.6 : progress)
                  }}
                  onChange={(e) => setNames(e?.target?.value)}
                  value={names=== null ? null : names}
                />
              </Box>
            </Grid>
            <Grid
              container
              item
              xs={12}
              alignItems="flex-end"
              sx={{
                justifyContent: { sm: "space-between", xs: "flex-start" },
              }}
            >
              <Grid
                item
                sm={12}
                xs={12}
                sx={{
                  mb: { sm: 0, xs: 2 },
                }}
              >
                <Box display="flex" flexDirection="column">
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ pt: 1, pb: 1 }}
                  >
                    Issue Year of License
                  </Typography>
             
                  <TextField
                    id="outlined-basic"
                    select
                    fullWidth
                    style={{
                      backgroundColor:'lightgrey',
                      color: '#C5C6D0'
                    }}
                    onChange={(e) => {
                      setMenu(e?.target?.value)
                      setProgress(menu ? progress : progress>=100 ? 100 : progress + 16.6)
                    }}
                    label=""
                    name="budget"
                    variant="outlined"
                    size="small"
                    placeholder="ee"
                  >
                      <MenuItem key="sales" value="sales"
                      sx={commonStyle}
                      >
                        Sales
                      </MenuItem>
                      <MenuItem key="pickup" value="pickup"
                      sx={styles}
                      >
                        Document Pickup
                      </MenuItem>
                      <MenuItem key="dispatch" value="dispatch"
                      sx={styles}
                      >
                        Document dispatch
                      </MenuItem>
                    
                  </TextField>
                </Box>
                
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              alignItems="flex-end"
              sx={{
                justifyContent: { sm: "space-between", xs: "flex-start" },
              }}
            >
              <Grid
                item
                sm={12}
                xs={12}
                sx={{
                  mb: { sm: 0, xs: 2 },
                }}
              >
                <Box display="flex" flexDirection="column">
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ pt: 1, pb: 1 }}
                  >
                    Type of Previous Driving License
                  </Typography>
             
                  <TextField
                    id="outlined-basic"
                    select
                    fullWidth
                    onChange={(e) => {
                      setMenus(e?.target?.value)
                      setProgress(menus ? progress : progress>=100 ? 100 : progress + 16.6)
                    }}
                    style={{
                      backgroundColor:'lightgrey',
                      color: '#C5C6D0'
                    }}
                    label=""
                    name="budget"
                    variant="outlined"
                    size="small"
                    placeholder="ee"
                  >
                        <MenuItem key="sales" value="sales"
                      sx={commonStyle}
                      >
                        Sales
                      </MenuItem>
                      <MenuItem key="pickup" value="pickup"
                      sx={styles}
                      >
                        Document Pickup
                      </MenuItem>
                      <MenuItem key="dispatch" value="dispatch"
                      sx={styles}
                      >
                        Document dispatch
                      </MenuItem>
                  </TextField>
                </Box>
                
              </Grid>
            </Grid>
          
            <Grid
              container
              item
              xs={12}
              mt={3}
              alignItems="center"
              justifyContent="center"
            >
                <Box>
                  <Button
                    variant="contained"
                    startIcon={<ArrowBackIosIcon style={{
                      width: 12,
                      height: 12
                    }}/>}
                    color="error"
                    sx={{
                      width: 150,
                      color:'white',
                      borderRadius:4,
                                 }}
                    onClick={() => {
                      setNewPage(false);
                    }}
                  >
                    Back
                  </Button>
                </Box>
            </Grid>
          </Box>
          ) : (
            <Box
            sx={{
              p: 4,
            }}
          >
            <Grid item xs={12} pb={1}>
              <Box display="flex" flexDirection="column">
                <Typography variant="subtitle2" fontWeight="bold" sx={{ pb: 1 }}>
                  Name
                </Typography>
                <TextField
                   onBlur={() => {
                    setProgress(myname?.length >=3 ? progress>=100 ? 100 : progress + 16.6 : progress)
                  }}
                  onChange={(e) => setMyName(e?.target?.value)}
                  value={myname}
                  variant="outlined"
                  placeholder="Enter Name"
                  size="small"
                  style={{
                    backgroundColor:'lightgrey',
                    color: '#C5C6D0'
                  }}
                  InputProps={{ notched: false }}
                />
              </Box>
            </Grid>
            <Grid
              container
              item
              xs={12}
              alignItems="flex-end"
              sx={{
                justifyContent: { sm: "space-between", xs: "flex-start" },
              }}
            >
              <Grid
                item
                sm={12}
                xs={12}
                sx={{
                  mb: { sm: 2, xs: 2 },
                  mt: { sm: 2, xs: 2 },
                }}
              >
                <Box display="flex" flexDirection="column">
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ pt: 1, pb: 1 }}
                  >
                    Nature of Driving License
                  </Typography>
             
                  <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                  <Box display="flex"
                   p={0.5}
                  flexGrow={1} alignItems="center" backgroundColor="lightgrey" borderRadius={4}>
                  <Radio id="driving" style={{
                    color:'grey'
                  }}
                  checked={'radio1'=== radval}
                  onChange={()=> {
                    setRadVal('radio1')
                    setProgress(radval!=='radio2'? progress>=100 ? 100 : progress + 16.6 : progress)
                  }}
                  />
                  <Typography
                    variant="subtitle2"
                    color="grey"
                  >
                    Private
                  </Typography>
                  </Box>
                  <Box display="flex" flexGrow={1} alignItems="center" borderRadius={4} backgroundColor="lightgrey"
                  p={0.5}
                  sx={{
                    ml: {lg: 3, md: 3, sm: 3, xs:0 },
                    mt:{
                      lg: 0,
                      md: 0,
                      sm: 0,
                      xs: 2
                    }
                  }}
                  >
                  <Radio id="driving"
                  style={{
                    color:'grey'
                  }}
                  checked={'radio2'=== radval}
                  onChange={()=> {
                    setRadVal('radio2')
                    setProgress(radval!=='radio1'? progress>=100 ? 100 : progress + 16.6 : progress)
                  }}
                  />
  
                  <Typography
                    variant="subtitle2"
                    color='grey'
                  >
                    Commercial
                  </Typography>
                  </Box>
                  </Box>
                </Box>
                
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              alignItems="flex-end"
              gap={2}
              sx={{
                justifyContent: { sm: "space-between", xs: "flex-start" },
              }}
            >
                <Grid
                item
                sm={12}
                xs={12}
                sx={{
                  mb: { sm: 0, xs: 2 },
                }}
              >
                <Box display="flex" flexDirection="column">
                  <Typography
                    variant="subtitle2"
                    fontWeight="bold"
                    sx={{ pt: 1, pb: 1 }}
                  >
                   Type of Previous Driving License  
                  </Typography>
             
                  <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                  <Box display="flex" 
                   p={0.5}
                  flexGrow={1} mt={2} alignItems="center" backgroundColor="lightgrey" borderRadius={4}>
                  <Radio id="driving"
                  style={{
                    color:'grey'
                  }}
                  checked={'radio3'=== radvals}
                  onChange={()=> {
                    setRadVals('radio3')
                    setProgress(radvals!=='radio4'? progress>=100 ? 100 : progress + 16.6 : progress)
                  }}
                  />
                  <Typography
                    variant="subtitle2"
                    color="grey"
                  >
                    Paper Driving License
                  </Typography>
                  </Box>
                  <Box display="flex"  mt={2} sx={{
                    ml: {lg: 3, md: 3, sm: 3, xs:0 },
                  }} 
                  p={0.5}
                  flexGrow={1} alignItems="center" borderRadius={4} backgroundColor="lightgrey"
                  >
                  <Radio id="driving"
                  style={{
                    color:'grey'
                  }}
                  checked={'radio4'=== radvals}
                  onChange={()=> {
                    setRadVals('radio4')
                    setProgress(radvals!=='radio3'? progress>=100 ? 100 : progress + 16.6 : progress)
                  }}
                  />
                  <Typography
                    variant="subtitle2"
                    color="grey"
                  >
                    Smart Driving License
                  </Typography>
                  </Box>
                  </Box>
                </Box>
                
              </Grid>
            </Grid>
          
            <Grid
              container
              item
              xs={12}
              mt={3}
              alignItems="center"
              justifyContent="center"
            >
                <Box>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      width: 150,
                      color:'white',
                      borderRadius:4                  }}
                    onClick={() => {
                      setNewPage(true)
                    }}
                  >
                    Next
                  </Button>
                </Box>
            </Grid>
          </Box>
          )
        }
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectModal;
