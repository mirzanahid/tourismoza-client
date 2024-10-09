import { useContext, useState } from "react";
import Button from "../../components/Button/Button";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Bounce, toast } from "react-toastify";

const AddTouristSpot = () => {
  const { user } = useContext(AuthContext);
  const [userName, setUserName] = useState(
    user?.displayName ? user?.displayName : ""
  );

  const handleForAddTouristSpot = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const spot_name = form.get("spotName");
    const spot_location = form.get("spotLocation");
    const continent = form.get("continent");
    const country_name = form.get("countryName");
    const average_cost = form.get("averageCost");
    const description = form.get("description");
    const season_name = form.get("season");
    const travel_time = form.get("travelTime");
    const total_visitors = form.get("visitors");
    const photo_url = form.get("photoUrl");
    const user_name = userName;
    const user_email = user?.email;

    const touristSpot = {
      spot_name,
      spot_location,
      continent,
      country_name,
      average_cost,
      description,
      season_name,
      travel_time,
      total_visitors,
      photo_url,
      user_name,
      user_email,
    };
    console.log(touristSpot);

    fetch("http://localhost:5000/newSpot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Toursit Spot Successfully added", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="bg-dark7 container w-[1120px]">
      <form onSubmit={handleForAddTouristSpot} className="card-body w-full ">
        <h2 className="font-inter text-sub2 text-center text-dark1 mb-30">
          Add Tourist Spot
        </h2>

        <div className="flex justify-between gap-30">
          <div className="form-control  mb-10 w-full ">
            <label className="label">
              <span className="label-text font-inter text-sub7  text-dark1 ">
                Spot Name:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Spot Name"
              className="input input-bordered rounded-none"
              name="spotName"
            />
          </div>
          <div className="form-control  mb-10 w-full">
            <label className="label">
              <span className="label-text font-inter text-sub7  text-dark1">
                Spot Location:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Spot Location"
              className="input input-bordered rounded-none"
              name="spotLocation"
            />
          </div>
        </div>
        <div className="flex justify-between gap-30">
          <div className="form-control  mb-10 w-full">
            <label className="label">
              <span className="label-text font-inter text-sub7  text-dark1">
                Continent Name:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Continent Name"
              className="input input-bordered rounded-none"
              name="continent"
            />
          </div>

          <div className="form-control  mb-10 w-full">
            <label className="label">
              <span className="label-text font-inter text-sub7  text-dark1">
                Country Name:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Country Name"
              className="input input-bordered rounded-none"
              name="countryName"
            />
          </div>
        </div>
        <div className="flex justify-between gap-30">
          <div className="form-control  mb-10 w-full">
            <label className="label">
              <span className="label-text font-inter text-sub7 text-dark1">
                Average Cost($):
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter  Average Cost"
              className="input input-bordered rounded-none"
              name="averageCost"
            />
          </div>
          <div className="form-control  mb-10 w-full">
            <label className="label">
              <span className="label-text font-inter text-sub7  text-dark1">
                Short Description:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Short Description"
              className="input input-bordered rounded-none"
              name="description"
            />
          </div>
        </div>
        <div className="flex justify-between gap-30">
          <div className="form-control  mb-10 w-full">
            <label className="label">
              <span className="label-text font-inter text-sub7  text-dark1">
                Season Name:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Season Name"
              className="input input-bordered rounded-none"
              name="season"
            />
          </div>
          <div className="form-control  mb-10 w-full">
            <label className="label">
              <span className="label-text font-inter text-sub7  text-dark1">
                Travel Time(Days):
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Travel Time In Days"
              className="input input-bordered rounded-none"
              name="travelTime"
            />
          </div>
        </div>
        <div className="flex justify-between gap-30">
          <div className="form-control  mb-10 w-full">
            <label className="label">
              <span className="label-text font-inter text-sub7  text-dark1">
                Visitors Per Year:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Visitors Per Year"
              className="input input-bordered rounded-none"
              name="visitors"
            />
          </div>

          <div className="form-control  mb-10 w-full">
            <label className="label">
              <span className="label-text font-inter text-sub7  text-dark1">
                Photo Url:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Spot Photo Url"
              className="input input-bordered rounded-none"
              name="photoUrl"
            />
          </div>
        </div>
        <div className="flex justify-between gap-30">
          <div className="form-control  mb-10 w-full">
            <label className="label">
              <span className="label-text font-inter text-sub7  text-dark1">
                Email Address:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Email"
              defaultValue={user?.email}
              className="input input-bordered rounded-none"
              name="userEmail"
              readOnly
            />
          </div>

          <div className="form-control  mb-10 w-full">
            <label className="label">
              <span className="label-text font-inter text-sub7  text-dark1">
                Your Name:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="input input-bordered rounded-none"
              name="userName"
            />
          </div>
        </div>
        <Button
          label={"Add Toursits Spot"}
          type="submit"
          className={
            "font-inter text-sub6 text-white bg-primary border border-primary py-[12px] px-30 hover:bg-transparent hover:text-primary duration-500 w-full mt-30"
          }
        ></Button>
      </form>
    </div>
  );
};

export default AddTouristSpot;
