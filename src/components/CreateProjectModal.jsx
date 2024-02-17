import * as Yup from "yup";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import {
  Grid,
  Typography,
  Box,
  DialogContent,
  IconButton,
  Dialog,
  TextField,
  MenuItem,
  InputAdornment,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const validationSchema = Yup.object().shape({
  project_name: Yup.string().required("Required"),
  clients: Yup.string().required("Required"),
  new_client: Yup.string().required("Required"),
  start_date: Yup.string().required("Required"),
  end_date: Yup.string().required("Required"),
  notes: Yup.string().required("Required"),
});
const clients = [
  {
    label: "Ramesh",
    value: "ramesh",
  },
  {
    label: "Rahul",
    value: "rahul",
  },
  {
    label: "Sahil",
    value: "sahil",
  },
  {
    label: "Ranjan",
    value: "ranjan",
  },
];
const CreateProjectModal = ({ steps, setSteps }) => {
  const createForm = useFormik({
    initialValues: {
      project_name: "",
      clients: "",
      new_client: "",
      start_date: "",
      end_date: "",
      notes: "",
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const payload = {
        project_name: values?.project_name,
        clients: values?.clients,
        new_client: values?.new_client,
        start_date: values?.start_date,
        end_date: values?.end_date,
        notes: values?.notes,
      };
      localStorage.setItem("create_project_data", JSON.stringify(payload));
    },
  });
  const create_data = JSON.parse(localStorage.getItem("create_project_data"));
  useEffect(() => {
    createForm?.setValues({
      project_name: create_data?.project_name,
      clients: create_data?.clients,
      new_client: create_data?.new_client,
      start_date: create_data?.start_date,
      end_date: create_data?.end_date,
      notes: create_data?.notes,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, [5000]);
  });
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} maxWidth="md" fullWidth={true} disableEscapeKeyDown>
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
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography
                variant="subtitle1"
                component="div"
                fontWeight="bold"
                fontSize={20}
              >
                Create a project
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
              <Typography variant="subtitle2" fontWeight="bold" sx={{ pb: 1 }}>
                Project name
              </Typography>
              <TextField
                id="outlined-basic"
                label=""
                name="project_name"
                variant="outlined"
                placeholder="Enter project name here"
                size="small"
                value={createForm?.values?.project_name}
                onChange={createForm?.handleChange}
                error={Boolean(createForm?.errors?.project_name)}
                helperText={
                  createForm?.errors?.project_name &&
                  createForm?.errors?.project_name
                }
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
              sm={8}
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
                  Client
                </Typography>
                <TextField
                  id="outlined-basic"
                  select
                  label={!createForm?.values?.client ? "Select a client" : ""}
                  name="clients"
                  variant="outlined"
                  size="small"
                  value={createForm?.values?.clients}
                  onChange={createForm?.handleChange}
                  error={Boolean(createForm?.errors?.clients)}
                  helperText={createForm?.errors?.clients}
                >
                  {clients.map((client) => (
                    <MenuItem key={client.value} value={client.value}>
                      {client.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Grid>
            <Grid item sm={0.7} xs={1} pb={1}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography>Or</Typography>
              </Box>
            </Grid>
            <Grid item sm={3.2} xs={11}>
              <Box display="flex" flexDirection="column">
                <TextField
                  id="outlined-basic"
                  name="new_client"
                  variant="outlined"
                  placeholder="New Client"
                  size="small"
                  value={createForm?.values?.new_client}
                  onChange={createForm?.handleChange}
                  error={Boolean(createForm?.errors?.new_client)}
                  helperText={createForm?.errors?.new_client}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AddIcon />
                      </InputAdornment>
                    ),
                  }}
                />
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
            <Grid item xl={6} sm={5.7} xs={12}>
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ pt: 2, pb: 1 }}
                >
                  Dates
                </Typography>
                <TextField
                  id="outlined-basic"
                  type="date"
                  label=""
                  name="start_date"
                  size="small"
                  value={createForm?.values?.start_date}
                  onChange={createForm?.handleChange}
                  error={Boolean(createForm?.errors?.start_date)}
                  helperText={createForm?.errors?.start_date}
                />
              </Box>
            </Grid>
            <Grid item sm={5.7} xs={12}>
              <Box display="flex" flexDirection="column">
                <TextField
                  id="outlined-basic"
                  type="date"
                  label=""
                  name="end_date"
                  size="small"
                  value={createForm?.values?.end_date}
                  onChange={createForm?.handleChange}
                  error={Boolean(createForm?.errors?.end_date)}
                  helperText={createForm?.errors?.end_date}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container item xs={12} alignItems="flex-end">
            <Grid item xs={12}>
              <Box display="flex" flexDirection="column">
                <Typography
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ pt: 2, pb: 1 }}
                >
                  Notes
                </Typography>
                <TextField
                  id="outlined-basic"
                  multiline
                  label=""
                  name="notes"
                  variant="outlined"
                  placeholder="optional"
                  size="small"
                  value={createForm?.values?.notes}
                  onChange={createForm?.handleChange}
                  error={Boolean(createForm?.errors?.notes)}
                  helperText={createForm?.errors?.notes}
                />
              </Box>
            </Grid>
          </Grid>
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
                  sx={{
                    color: "grey",
                  }}
                  onClick={() => {
                    setSteps(steps);
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
                    createForm?.handleSubmit();
                    if (Object.keys(createForm?.errors)?.length === 0) {
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
        </Box>
        <Grid item xs={12} pb={1} p={4}>
          <Typography
            sx={{
              color: "#ff6347",
            }}
          >
            Click on next button to open next modal
          </Typography>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
CreateProjectModal.propTypes = {
  steps: PropTypes.func.isRequired,
  setSteps: PropTypes.number.isRequired,
};
export default CreateProjectModal;
