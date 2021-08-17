import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import PublishIcon from "@material-ui/icons/Publish";
import { useFormik } from "formik";
import * as yup from "yup";
import Files from "react-files";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import avatarMan from "../../../../assets/svg/avatar-man.svg";
import ParticipantTable from "../../../table/ParticipantTable";
import LoadingButton from "../../../button/LoadingButton";
import protectedHandler from "../../../../utils/protectedHandler";
import MultiSelectDropdown from "../../../common/MultiSelectDropdown";
import useStyles from "./style";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("First name is required"),

  subject: yup.string("Enter your subject").required("Subject is required"),

  lastName: yup
    .string("Enter your last name")
    .required("Last name is required"),

  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),

  contact: yup
    .string("Enter your contact number")
    .required("Contact number is required"),
});

const AddTeachersPanel = () => {
  const classes = useStyles();

  const isStudent = false;
  // const hasTeam = true;

  const data = [
    {
      name: "ABC Surname",
      avatar: avatarMan,
      teachClasses: [3, 5, 6, 10].join(", "),
      email: "abc@example.com",
      contact: "0123456789",
    },
    {
      name: "BBBB Surname",
      avatar: avatarMan,
      teachClasses: [7, 8, 9].join(", "),
      email: "abc@example.com",
      contact: "0123456789",
    },
    {
      name: "CCC Surname",
      avatar: avatarMan,
      teachClasses: [4].join(", "),
      email: "abc@example.com",
      contact: "0123456789",
    },
    {
      name: "DDD Surname",
      avatar: avatarMan,
      teachClasses: [8, 9, 10].join(", "),
      email: "abc@example.com",
      contact: "0123456789",
      status: "Invited",
    },
  ];

  const columns = [
    {
      id: "name",
      label: `${isStudent ? "Student" : "Teacher"} Name`,
      fixedWidth: "10.5rem",
    },
    { id: "email", label: "Email", fixedWidth: "10.5rem" },
    { id: "teachClasses", label: "Class", fixedWidth: "10.5rem" },
    { id: "contact", label: "Contact", fixedWidth: "10.5rem" },
  ];

  // if (hasTeam) columns.push({ id: "team", label: "Team", fixedWidth: '10.5rem' });

  const rows = data.map((participant) => {
    const { name, avatar, teachClasses, email, contact } = participant;

    return {
      name,
      avatar,
      teachClasses,
      email,
      contact,
    };
  });

  const [isFormActive, setIsFormActive] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      contact: "",
      avatar: {},
      classes: [],
    },
    validationSchema: validationSchema,
    onSubmit: protectedHandler(async (formData) => {
      setIsFormActive(false);
      resetForm();
    }),
  });

  const resetForm = () => {
    formik.resetForm();
    setIsFormActive(false);
  };

  const onAvatarChange = (files) => {
    console.log(files);
    formik.setFieldValue("avatar", files[0]);
  };
  const onAvatarError = (err) => {
    console.log(err);
  };

  const classItems = [
    "Class 12",
    "Class 11",
    "Class 10",
    "Class 9",
    "Class 8",
    "Class 7",
    "Class 6",
    "Class 5",
    "Class 4",
    "Class 3",
  ];

  const handleChange = (e) => {
    formik.setFieldValue("classes", e.target.value);
  };

  return (
    <div className={classes.root}>
      {isFormActive ? (
        <Container className={classes.formContainer}>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <Files
              className={classes.files}
              onChange={onAvatarChange}
              onError={onAvatarError}
              accepts={["image/png", "image/jpg", "image/jpeg"]}
              multiple={false}
              maxFiles={1}
              clickable
            >
              <Avatar
                className={classes.avatar}
                src={formik.values.avatar?.preview?.url}
              >
                <PublishIcon fontSize="large" />
              </Avatar>
            </Files>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="subject"
                  label="Subject"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.subject && Boolean(formik.errors.subject)
                  }
                  helperText={formik.touched.subject && formik.errors.subject}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="contact"
                  label="Contact"
                  name="contact"
                  autoComplete="tel"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.contact && Boolean(formik.errors.contact)
                  }
                  helperText={formik.touched.contact && formik.errors.contact}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <MultiSelectDropdown
                  name="classes"
                  value={formik.values.classes}
                  items={classItems}
                  handleChange={handleChange}
                  classes={{ root: classes.classRoot }}
                />
              </Grid>
              <Grid item xs={12} className={classes.buttonItem}>
                <LoadingButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  // isLoading={isLoading}
                >
                  Submit
                </LoadingButton>
                <Button
                  color="primary"
                  className={classes.button}
                  onClick={resetForm}
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      ) : (
        <Box display="flex" justifyContent="flex-end">
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={() => setIsFormActive(true)}
          >
            Add Teacher
          </Button>
        </Box>
      )}
      <ParticipantTable noHeader editable rows={rows} columns={columns} />
    </div>
  );
};

export default AddTeachersPanel;
