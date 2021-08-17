import React from "react";
import JsFileDownloader from "js-file-downloader";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import CancelIcon from "@material-ui/icons/Cancel";
import ReactMarkdown from "react-markdown";
import { notify } from "../../../utils";
import useStyles from "./style";

const StudentMessageDialog = ({ data, onClose, ...props }) => {
  const classes = useStyles();
  const { studentMessage, poster, aboutEventPDF } = data;

  const handleClick = async (id) => {
    switch (id) {
      case "copyText":
        navigator.clipboard.writeText(studentMessage);
        notify.success("copyText", "Message copied", 2000);
        break;

      case "poster":
        new JsFileDownloader({
          url: poster,
        }).catch((err) => {
          console.log(err);
        });

        break;

      case "pdf":
        new JsFileDownloader({
          url: aboutEventPDF,
        }).catch((err) => {
          console.log(err);
        });

        break;
      default:
    }
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
          children={studentMessage}
        />
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>content_copy</Icon>}
          onClick={() => handleClick("copyText")}
        >
          Copy Text
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>download</Icon>}
          onClick={() => handleClick("poster")}
        >
          Poster
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>download</Icon>}
          onClick={() => handleClick("pdf")}
        >
          PDF
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StudentMessageDialog;
