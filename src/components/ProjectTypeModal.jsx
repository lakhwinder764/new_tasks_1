import PropTypes from "prop-types";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import {
  Grid,
  Checkbox,
  Typography,
  Box,
  FormControlLabel,
  DialogContent,
  IconButton,
  Dialog,
  TextField,
  MenuItem,
  Button,
  Tab,
  Tabs,
} from "@mui/material";
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const hours = [
  {
    label: "one hour",
    value: "one hour",
  },
  {
    label: "two hour",
    value: "two hour",
  },
  {
    label: "three hour",
    value: "three hour",
  },
  {
    label: "four hour",
    value: "four hour",
  },
];
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const ProjectTypeModal = ({ steps, setSteps }) => {
  const validationSchema = Yup.object().shape({
    hourly: Yup.string().required("Required"),
    amount: Yup.string().required("Required"),
    budget: Yup.string().required("Required"),
    budget_percentage: Yup.number().required("Required"),
  });
  const projectTypeForm = useFormik({
    initialValues: {
      hourly: "",
      amount: "",
      budget: "",
      budget_percentage: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const payload = {
        hourly: values?.hourly,
        amount: values?.amount,
        budget: values?.budget,
        budget_percentage: values?.budget_percentage,
      };
      localStorage.setItem("project_type_data", JSON.stringify(payload));
    },
  });
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, [5000]);
  });
  const project_type_data = JSON.parse(
    localStorage.getItem("project_type_data")
  );
  useEffect(() => {
    projectTypeForm?.setValues({
      hourly: project_type_data?.hourly,
      amount: project_type_data?.amount,
      budget: project_type_data?.budget,
      budget_percentage: project_type_data?.budget_percentage,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog open={open} maxWidth="md" fullWidth={true}>
      <DialogContent dividers>
        <SnackbarProvider />
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
              <Typography variant="h5" component="div" fontWeight="bold">
                Project type
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                fontSize={16}
                sx={{
                  color: "grey",
                }}
              >
                Don't panic - you can also customize this types in settings
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Box
          sx={{
            pt: 1,
          }}
        >
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{ style: { display: "none" } }}
                variant="scrollable"
                sx={{
                  ".MuiTab-root": {
                    border: `1px solid grey`,
                  },
                  ".MuiTab-root.Mui-selected": {
                    border: `1px solid grey`,
                    color: "white",
                  },
                  ".Mui-selected": {
                    color: "white",
                    backgroundColor: "#007FFF",
                  },
                }}
              >
                <Tab
                  label="Time & Materials"
                  sx={{
                    borderRadius: "10px 0px 0px 10px",
                  }}
                />
                <Tab label="Fixed Fee" />
                <Tab
                  label="Non-Billable"
                  sx={{
                    borderRadius: "0px 10px 10px 0px",
                  }}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={0} index={0}>
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="subtitle1"
                  component="div"
                  fontWeight="bold"
                  fontSize={20}
                >
                  Hourly
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  fontSize={16}
                  sx={{ color: "grey" }}
                >
                  We need hourly rates to track your project's billable amount.
                </Typography>
                <Grid container item xs={12} gap={2} mt={2}>
                  <Grid item xs={6}>
                    <TextField
                      id="outlined-basic"
                      select
                      fullWidth
                      label=""
                      name="hourly"
                      variant="outlined"
                      size="small"
                      value={projectTypeForm?.values?.hourly}
                      onChange={projectTypeForm?.handleChange}
                      error={Boolean(projectTypeForm?.errors?.hourly)}
                      helperText={
                        projectTypeForm?.errors?.hourly &&
                        projectTypeForm?.errors?.hourly
                      }
                    >
                      {hours.map((hour) => (
                        <MenuItem key={hour.value} value={hour.value}>
                          {hour.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      size="small"
                      name="amount"
                      value={projectTypeForm?.values?.amount}
                      onChange={projectTypeForm?.handleChange}
                      error={Boolean(projectTypeForm?.errors?.amount)}
                      helperText={
                        projectTypeForm?.errors?.amount &&
                        projectTypeForm?.errors?.amount
                      }
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box display="flex" flexDirection="column" mt={1}>
                <Typography
                  variant="subtitle1"
                  component="div"
                  fontWeight="bold"
                  fontSize={20}
                >
                  Budget
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="div"
                  fontSize={16}
                  sx={{ color: "grey" }}
                >
                  We need hourly rates to track your project's billable amount.
                </Typography>
                <Grid container item xs={12} gap={2} mt={2}>
                  <TextField
                    id="outlined-basic"
                    select
                    fullWidth
                    label=""
                    name="budget"
                    variant="outlined"
                    size="small"
                    value={projectTypeForm?.values?.budget}
                    onChange={projectTypeForm?.handleChange}
                    error={Boolean(projectTypeForm?.errors?.budget)}
                    helperText={
                      projectTypeForm?.errors?.budget &&
                      projectTypeForm?.errors?.budget
                    }
                  >
                    {hours.map((hour) => (
                      <MenuItem key={hour.value} value={hour.value}>
                        {hour.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Box>
              <Box display="flex" flexWrap="wrap" mt={1}>
                <FormControlLabel
                  sx={{ color: "grey" }}
                  control={<Checkbox defaultChecked />}
                  label="Budget resets every month"
                />
              </Box>
              <Box display="flex" flexWrap="wrap" mt={1}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={
                    <Box display="flex" alignItems="center">
                      <Typography sx={{ color: "grey" }}>
                        Send email alerts if project exceeds
                      </Typography>
                      <TextField
                        type="number"
                        size="small"
                        sx={{
                          width: 80,
                          mx: 1,
                          borderRadius: 2,
                        }}
                        name="budget_percentage"
                        value={projectTypeForm?.values?.budget_percentage}
                        onChange={projectTypeForm?.handleChange}
                        error={Boolean(
                          projectTypeForm?.errors?.budget_percentage
                        )}
                        helperText={
                          projectTypeForm?.errors?.budget_percentage &&
                          projectTypeForm?.errors?.budget_percentage
                        }
                      />
                      <Typography sx={{ color: "grey" }}>
                        % of budget
                      </Typography>
                    </Box>
                  }
                />
              </Box>
              <Grid
                container
                item
                xs={12}
                mt={3}
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item sm={5} xs={6}>
                  <Box>
                    <Button
                      variant="text"
                      startIcon={<ArrowBackIosIcon />}
                      size="small"
                      onClick={() => {
                        setSteps(steps - 1);
                      }}
                      sx={{
                        color: "grey",
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
                        projectTypeForm?.handleSubmit();
                        if (
                          Object.keys(projectTypeForm?.errors)?.length === 0
                        ) {
                          enqueueSnackbar("Form Submitted!!!", {
                            variant: "success",
                          });
                          setTimeout(() => {
                            setSteps(steps + 1);
                          }, [1000]);
                        }
                      }}
                    >
                      Next
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Grid item xs={12} mt={1}>
                <Typography
                  sx={{
                    color: "#ff6347",
                  }}
                >
                  Click on next button to open next modal
                </Typography>
              </Grid>
            </CustomTabPanel>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
ProjectTypeModal.propTypes = {
  steps: PropTypes.func.isRequired,
  setSteps: PropTypes.number.isRequired,
};
export default ProjectTypeModal;
