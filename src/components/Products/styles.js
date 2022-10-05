import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    // backgroundColor: "rgba(215, 250, 182, 0.19)",
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));