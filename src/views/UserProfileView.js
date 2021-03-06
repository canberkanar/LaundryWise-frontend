import {Grid, Paper} from "@material-ui/core";
import {Helmet} from 'react-helmet';
import {connect, useSelector} from "react-redux";
// import {withRouter} from "react-router-dom";
import Loading from "../components/Loading";
import React, {useEffect, useState} from "react";
import {getUserRentals} from "../redux/actions";
import UserRentalsTableComponent from "../components/UserRentalsTableComponent";
import UserRentalService from "../services/UserProfileService";


function UserProfile(props) {

    const user = useSelector((state) => state.user);
    console.log(user.user._id);
    const rentals = useSelector((state) => state.userRentals);
    let [removed, setRemoved] = useState(false);

    let {match, getUserRentals} = props;

    useEffect(() => {
        // trigger room load from backend
        // getUserRentals(user.user._id);
        if (!rentals.value | removed) {
            console.log("IN USE EFFECT USER PROFILE VIEW")
            console.log(rentals)
            getUserRentals(user.user._id);
            setRemoved(false);
        }  
    }, [rentals, removed]);

    const onRemove = (rentalId) => {
        console.log("Cancel Button toggled");
        console.log(rentalId);
        UserRentalService.removeRental(rentalId).then( () => setRemoved(true));

    }


    return (!rentals.value ? <Loading/> :
            <div style={{padding: 20}}>
                < Helmet>
                    < title> LaundryWise | Profile < /title>
                </Helmet>
                <Paper style={{padding: 20}}>
                    <h1>Profile</h1>
                    <h3>
                        Username: {user.user.username}
                    </h3>
                    <h3>
                        Email: {user.user.email}
                    </h3>
                    <h3>
                        Address: {user.user.address}
                    </h3>
                    <h3>
                        Mobile Number: {user.user.mobileNumber}
                    </h3>
                    <h3>
                        Laundrywise Code: {user.user.laundrywiseCode}
                    </h3>
                </Paper>


                {user.user.role === "customer" ? (
                    <div>
                        <div>
                            <h2>
                                Future Rentals
                            </h2>
                        </div>
                        <div>
                            <UserRentalsTableComponent
                                allRentals={rentals.value.futureRentals}
                                isFuture={true}
                                onClick={(rentalId) => onRemove(rentalId)}/>
                        </div>
                        <div>
                            <h2>
                                Past Rentals
                            </h2>
                        </div>
                        <div>
                            <UserRentalsTableComponent
                                allRentals={rentals.value.pastRentals}
                                isFuture={false}
                                onClick={onRemove}/>
                        </div>
                    </div>

                ) : null}
            </div>
    );
}

export default connect(null, {getUserRentals})(
    UserProfile
);