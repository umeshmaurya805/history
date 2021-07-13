import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CancelIcon from "@material-ui/icons/Cancel";
import ReactMarkdown from "react-markdown";
import useStyles from "./style";
import { toast } from "react-toastify";

const StudentMessageDialog = ({ event, onClose, ...props }) => {
  const classes = useStyles();
  const handleClick = (text, id) => {
    toast.success(text, {
      toastId: id,
    });
  };

  return (
    <Dialog onClose={onClose} {...props}>
      <DialogContent>
        <Box display="flex" justifyContent="flex-end">
          <IconButton
            edge="start"
            size="small"
            onClick={onClose}
            aria-label="close"
          >
            <CancelIcon color="error" />
          </IconButton>
        </Box>
        <ReactMarkdown
          className={classes.reactMarkdown}
          children={`Description of event here .Description of event here
Description of event here . Description of event here. Description of event here . Description of event here. Description of event here . Description of event here Description of event here . Description of event here Description of event here .Description of event here Description of event here .Description of event here Description of event here 

Description of event here .Description of event here Description of event here .Description of event here Description of event here Description of event here Description of event here .Description of event here Description of event here .Description of event here
Description of event here .Description of event here
Description of event here . Description of event here. Description of event here . Description of event here. Description of event here . Description of event here Description of event here . Description of event here Description of event here .Description of event here Description of event here .Description of event here Description of event here 

Description of event here .Description of event here Description of event here .Description of event here Description of event here Description of event here Description of event here .Description of event here Description of event here .Description of event here
Description of event here .Description of event here
Description of event here . Description of event here. Description of event here . Description of event here. Description of event here . Description of event here Description of event here . Description of event here Description of event here .Description of event here Description of event here .Description of event here Description of event here 

Description of event here .Description of event here Description of event here .Description of event here Description of event here Description of event here Description of event here .Description of event here Description of event here .Description of event here
Description of event here .Description of event here
Description of event here . Description of event here. Description of event here . Description of event here. Description of event here . Description of event here Description of event here . Description of event here Description of event here .Description of event here Description of event here .Description of event here Description of event here 

Description of event here .Description of event here Description of event here .Description of event here Description of event here Description of event here Description of event here .Description of event here Description of event here .Description of event here
Description of event here .Description of event here
Description of event here . Description of event here. Description of event here . Description of event here. Description of event here . Description of event here Description of event here . Description of event here Description of event here .Description of event here Description of event here .Description of event here Description of event here 

Description of event here .Description of event here Description of event here .Description of event here Description of event here Description of event here Description of event here .Description of event here Description of event here .Description of event here
Description of event here .Description of event here
Description of event here . Description of event here. Description of event here . Description of event here. Description of event here . Description of event here Description of event here . Description of event here Description of event here .Description of event here Description of event here .Description of event here Description of event here 

Description of event here .Description of event here Description of event here .Description of event here Description of event here Description of event here Description of event here .Description of event here Description of event here .Description of event here
`}
        />
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>content_copy</Icon>}
          onClick={(e) => handleClick("Copied!", "copyText")}
        >
          Copy Text
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>download</Icon>}
          onClick={(e) => handleClick("Poster Downloaded", "poster")}
        >
          Poster
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>download</Icon>}
          onClick={(e) => handleClick("PDF Downloaded", "pdf")}
        >
          PDF
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StudentMessageDialog;
