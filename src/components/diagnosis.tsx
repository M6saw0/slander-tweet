import React from 'react'
import Axios, {AxiosResponse} from 'axios'
import { RouteComponentProps } from 'react-router-dom'
import { TextInput } from 'react-native' 
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
import {Header} from './header'
import "../css/main.css"

interface Props extends RouteComponentProps {}

const  Diagnosis = ({history}:Props) => {
    return (
        <>
            <Header />
            <div className="main-body">
                <h1 className="title">Diagnosis</h1>
                <p>あなたのツイートをチェックしてみませんか？</p>
                <p>誹謗中傷度を診断できます。</p>
                <SimpleModal />

                <a onClick={history.goBack}>Back</a>
            </div>
        </>
    )
}

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
}

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const SimpleModal = () => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [text, onChangeText] = React.useState('');
    const [slander_val, onChangeSlanderVal] = React.useState(0);


    const handleOpen = () => {
        diagnosis(text)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const diagnosis = (text: string) => {
        Axios.defaults.baseURL = 'http://localhost:3000/diagnosis';
        Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        Axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'https';
        //console.log("input text >>"+text)
        Axios.post('http://127.0.0.1:5000/diagnosis', {
            withCredentials: true,
            text: text
        }).then((response) => {
            console.log(response.data)
            onChangeSlanderVal(response.data["slander_val"])
        })
    }
    const body = (
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">ツイート誹謗中傷度</h2>
        <p id="simple-modal-description">
            あなたの誹謗中傷度は {slander_val}/100 です。
        </p>
        </div>
    );

    return (
        <div>
            <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                value={text}
                //onChangeTextの時にthis.setStateを実行する
                onChangeText={newValue => onChangeText(newValue)}
            />               
            <br />
            <button type="button" onClick={handleOpen}>
                診断
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            </div>
    );
}
export {Diagnosis}