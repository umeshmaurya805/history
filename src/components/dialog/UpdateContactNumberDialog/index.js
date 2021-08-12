import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import protectedHandler from "../../../utils/protectedHandler";
import UpdateButtonGroup from "../../button/UpdateButtonGroup";
import { notify } from "../../../utils";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../../app/api/school";

const PhoneListItem = ({ value, onDelete }) => {
  return (
    <ListItem>
      <ListItemText primary={value} />
      <ListItemSecondaryAction>
        <IconButton onClick={onDelete} edge="end" aria-label="delete">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const UpdateContactNumberDialog = ({ handleClose, ...props }) => {
  const { phones } = useGetProfileQuery(undefined, {
    selectFromResult: ({ data }) => ({
      phones: data?.phones,
    }),
  });

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const [value, setValue] = useState("");
  const [phoneList, setPhoneList] = useState([]);

  useEffect(() => {
    if (phones) {
      setPhoneList(phones);
    }
  }, [phones]);

  const handleOnClose = () => {
    handleClose();
    setValue("");
    setPhoneList(phones);
  };

  const addPhone = () => {
    setPhoneList([...phoneList, value]);
    setValue("");
  };

  const handlePhoneDelete = (indexToRemove) => {
    setPhoneList(phoneList.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = protectedHandler(async () => {
    await updateProfile({ phones: phoneList }).unwrap();
    notify.success("updatePhoneNumber", "Contact number updated successfully");
    handleOnClose();
  });

  return (
    <Dialog onClose={handleOnClose} {...props}>
      <DialogTitle id="update-dialog-title" disableTypography>
        Update Contact Number
      </DialogTitle>
      <DialogContent style={{ minHeight: "20rem" }}>
        <form>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <PhoneInput
                country={"in"}
                value={value}
                onChange={(phone) => setValue(phone)}
              />
            </Grid>
            <Grid item>
              <IconButton
                disabled={value.length < 8}
                onClick={addPhone}
                aria-label="delete"
              >
                <AddCircleIcon color="secondary" />
              </IconButton>
            </Grid>
          </Grid>
        </form>
        <List>
          {phoneList.map((phone, index) => {
            return (
              <PhoneListItem
                key={phone}
                value={phone}
                onDelete={() => handlePhoneDelete(index)}
              />
            );
          })}
        </List>
      </DialogContent>
      <DialogActions>
        <UpdateButtonGroup
          isLoading={isLoading}
          handleOnSubmit={handleSubmit}
          handleOnClose={handleOnClose}
          disabled={phoneList.length < 1}
        />
      </DialogActions>
    </Dialog>
  );
};

export default UpdateContactNumberDialog;
