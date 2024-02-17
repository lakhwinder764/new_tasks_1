import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import ListIcon from "@mui/icons-material/List";
import {
  Grid,
  Typography,
  Box,
  DialogContent,
  IconButton,
  Dialog,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ManageProjectsModal = ({ steps, setSteps }) => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, [5000]);
  });
  const handleClose = () => {
    setOpen(false);
  };
  const manageProjectContent = [
    {
      heading: "Everyone",
      icon: <ListIcon />,
      subheading:
        "All users can now to see it, but guests cannot access the projects  ",
    },
    {
      heading: "Only Admin's",
      icon: <PersonIcon />,
      subheading: "Only admins can manage everything",
    },
    {
      heading: "Only to Specific people",
      icon: <PeopleIcon />,
      subheading: "Only some specific people can able to see it",
    },
  ];
  const [activeCard, setActiveCard] = useState("box2");
  return (
    <Dialog open={open} maxWidth="md" fullWidth={true}>
      <DialogContent dividers>
        <Grid item xs={12} pb={1}>
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <IconButton aria-label="close" onClick={handleClose} size="small">
                <CloseIcon size="small" />
              </IconButton>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Typography
                variant="subtitle1"
                component="div"
                fontWeight="bold"
                fontSize={20}
              >
                Who can manage projects
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                fontSize={16}
                sx={{ color: "grey" }}
              >
                Don't panic - you can also customize the permissions in settings
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Box
          sx={{
            p: 4,
          }}
        >
          <Grid item xs={12} pb={1}>
            <Box display="flex" flexDirection="column">
              {manageProjectContent?.map((item) => {
                return (
                  <Box
                    display="flex"
                    alignItems="center"
                    backgroundColor="#eff4f9"
                    borderRadius={1}
                    p={2}
                    mt={2}
                    sx={{
                      cursor: "pointer",
                      border: `2px solid ${
                        activeCard?.heading === item?.heading
                          ? "#007FFF"
                          : "lightgrey"
                      }`,
                    }}
                    onClick={() => setActiveCard(item)}
                  >
                    <Box>
                      <IconButton
                        sx={{
                          width: 50,
                          height: 50,
                          color: "grey",
                        }}
                      >
                        {item?.icon}
                      </IconButton>
                    </Box>
                    <Box display="flex" flexDirection="column" pl={2}>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="bold">
                          {item?.heading}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: "grey" }}>
                          {item?.subheading}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Grid>
          <Grid
            container
            item
            xs={12}
            mt={10}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item sm={5} xs={6}>
              <Box>
                <Button
                  variant="text"
                  startIcon={<ArrowBackIosIcon />}
                  size="small"
                  sx={{ color: "grey" }}
                  onClick={() => {
                    setSteps(steps - 1);
                  }}
                >
                  Back
                </Button>
              </Box>
            </Grid>
            <Grid item sm={7} xs={4}>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    width: 100,
                  }}
                  onClick={() => {
                    setSteps(steps);
                  }}
                >
                  Next
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

ManageProjectsModal.propTypes = {
  steps: PropTypes.func.isRequired,
  setSteps: PropTypes.number.isRequired,
};
export default ManageProjectsModal;
