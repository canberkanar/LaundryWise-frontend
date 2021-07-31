import React from "react";
//import NewRecipeComponent from "../components/NewRecipeComponent";
import {connect, useSelector} from "react-redux";
import Loading from "../components/Loading";
//import {addRecipe} from "../redux/actions";
import {makeStyles} from "@material-ui/core/styles";
import {
    Paper,
    Button,
    TextField,
    Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import LaundryRoomService from "../services/LaundryRoomService";
import MachineService from "../services/MachineService";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    usersignUpRoot: {
        margin: "auto",
    },
    signUpPaper: {
        width: "750px",
        padding: theme.spacing(2),
    },
    signUpRow: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        "&:last-child": {
            paddingBottom: theme.spacing(0),
        },
        "&:first-child": {
            paddingTop: theme.spacing(0),
        },
    },
    signUpButtons: {
        display: "flex",
        justifyContent: "flex-end",
    },
    signUpButton: {
        marginLeft: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
function AddMachineView(props) {
    const user = useSelector((state) => state.user);
    console.log(props.location.state);
/*
    const onCancel = () => { // forward user to recipes page if they cancel adding recipe
        props.history.push("/recipes");
    };

    const onSave = (recipe) => {
        addRecipe(recipe);
        props.history.push("/recipes");
    };*/
    const [selectedNumberInRoom, setselectedNumberInRoom] = React.useState('');
    const [selectedPrice, setselectedPrice] = React.useState('');
    const [selectedType, setselectedType] = React.useState('washer');


    const handleNumberInRoom = (number) => {
        setselectedNumberInRoom(number.target.value);
    };
    const handlePrice = (price) => {
        setselectedPrice(price.target.value);
    };
    const handleType = (price) => {
        setselectedType(price.target.value);
    };
    const handleCancel = async () => {
        props.history.push('/machineSettings',props.location.state)
    }
    const handleSave = async (selectedNumberInRoom, selectedPrice,selectedType) => {
        console.log("BUTTON WORKED!");
        console.log("number: " + selectedNumberInRoom + " price: " + selectedPrice + " type: " + selectedType );
        let data=  {
            "deviceRoomId": props.location.state._id,
            "deviceNumberInRoom": selectedNumberInRoom,
            "machineType": selectedType,
            "isEnabled": true,
            "operationCount": 0,
            "price": parseFloat(selectedPrice)
        }
        try {
            let createdMachine = await MachineService.createMachine(data);
        } catch (e) {
            console.log("errorlandin");
            console.log(e);
        }
        console.log(data)
        props.history.push('/machineSettings',props.location.state)
    };
    const classes = useStyles();
    const [registerError, setRegisterError] = React.useState("");
    console.log(props.location.state)

    return !user ? (<Loading/>) : (
        <div className={classes.usersignUpRoot}>
            <Paper className={classes.signUpPaper} component="form">
                <div className={classes.signUpRow}>
                    <Typography variant="body1" align="center">
                        Add Machine
                    </Typography>
                </div>
                <div className={classes.signUpRow}>
                    <TextField
                        label="Number In Room"
                        fullWidth
                        //value="1"
                        onChange={handleNumberInRoom}
                    />
                </div>
                <div className={classes.signUpRow}>
                    <TextField
                        label="Price"
                        fullWidth
                        //value="1"
                        onChange={handlePrice}
                    />
                </div>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Machine Type
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={selectedType}
                        onChange={handleType}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem value={'washer'}>Washer</MenuItem>
                        <MenuItem value={'dryer'}>Dryer</MenuItem>
                    </Select>

                </FormControl>
                {registerError !== "" ? (
                    <div className={classes.signUpRow}>
                        <Typography color="error">{registerError}</Typography>
                    </div>
                ) : null}
                <div
                    className={classes.signUpRow + " " + classes.signUpButtons}
                >
                    <Button
                        className={classes.signUpButton}
                        onClick={() =>
                            handleCancel()
                        }
                    >
                        Cancel
                    </Button>
                    <Button
                        className={classes.signUpButton}
                        variant="contained"
                        color="primary"
                        // must be referenced with arrow function else the function onSave will be triggered on load,
                        // which is unwanted behaviour
                        // https://stackoverflow.com/questions/33846682/react-onclick-function-fires-on-render
                        onClick={() =>
                            handleSave(selectedNumberInRoom,selectedPrice,selectedType)
                        }
                        //disabled={recipeTitle === "" | recipePreparationSteps === ""}
                        //type="submit"
                    >
                        Save
                    </Button>
                </div>
            </Paper>
        </div>
    );
}



// export default AddRecipeView;
// connect() allows the usage of redux functionality
export default connect(null,)(
    AddMachineView
);
