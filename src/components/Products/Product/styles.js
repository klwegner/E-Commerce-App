import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(()=>({
root: {
    maxWidth: '100%',
    height: '100%',
    backgroundColor: "rgba(215, 250, 182, 0.19)",
    // backgroundColor: '#81ac8d'
},
media: {
    height: 0,
    paddingTop: '56.25%'
},
cardActions: {
    display: 'flex',
    justifyContent: 'flex-end'
},
cardContent: {
    display: 'flex',
    justifyContent: 'space-between'
}
}));