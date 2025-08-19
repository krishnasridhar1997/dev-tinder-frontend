import {useSelector} from "react-redux";

const Profile = () => {
    const userDetails = useSelector(state => state.user?.details);

    return (
        <div className="card card-side bg-base-100 shadow-sm w-xl m-auto my-50">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie"
                />
            </figure>
            {userDetails && (
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title">Profile Details</h2>
                        <button className="btn btn-xs btn-info">Edit</button>
                    </div>
                    <span><b>First Name:</b> {userDetails?.firstName} </span>
                    <span><b>Last Name:</b> {userDetails?.lastName} </span>
                    <span><b>Email ID:</b> {userDetails?.email} </span>
                    <span><b>Gender:</b> {userDetails?.gender} </span>
                    <span><b>Age:</b> {userDetails?.age} </span>
                </div>
            )}
        </div>
    );
};

export default Profile;
