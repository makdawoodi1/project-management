import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DeleteIcon from '@mui/icons-material/Delete';
import { useConfirm } from "material-ui-confirm";
import moment from "moment";

export default function ProjectBoard(props) {
  const confirm = useConfirm();

  const handleDelete = () => {
    confirm({ description: "This action is permanent!" })
      .then(() => {
        console.log('Confirmation')
      })
      .catch(() => {
        console.log('Cancelation')
      });
  }

  return (
    <Card sx={{ 
        maxWidth: 345, 
        marginX: 2,
        marginY: 2,
        cursor: 'pointer'
      }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.owner?.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        }
        title={props.title}
        subheader={moment(props.updateDate).format("MMMM D, YYYY")}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Paella dish"
        onClick={props.onClick}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.description ?? "No Description"}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <AccountCircleIcon />
          <Typography variant="subtitle2"
            sx={{
              marginLeft: 1
            }}
          >
            {props.members?.length} Members
          </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <FormatListBulletedIcon />
          <Typography variant="subtitle2"
            sx={{
              marginLeft: 1
            }}
          >
            {props.lists?.length ?? 0} Lists
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
