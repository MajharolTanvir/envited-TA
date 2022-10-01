import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const event = data.eventName;
    const host = data.hostName;
    const startTime = data.startTime;
    const startDate = data.startDate;
    const endTime = data.endTime;
    const endDate = data.endDate;
    const location = data.location;
    const eventPhoto = data.eventPhoto[0].name;
    console.log(
      event,
      host,
      startTime,
      startDate,
      endTime,
      endDate,
      location,
      eventPhoto
    );
    reset();
  };

  return (
    <div className="lg:w-3/5 mx-auto">
      <div>
        <h6 className="font-bold text-center text-3xl mb-4">Create Event</h6>
      </div>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label>Event Name</label>
          <input
            className="border-2 border-indigo-500 w-full rounded-md py-3 px-2"
            {...register("eventName", {
              required: {
                value: true,
                message: "Event Name is required",
              },
            })}
          />
          <label>
            {errors.eventName?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.eventName.message}
              </span>
            )}
          </label>
        </div>

        <div>
          <label>Host Name</label>
          <input
            className="border-2 border-indigo-500 w-full rounded-md py-3 px-2"
            {...register("hostName", {
              required: {
                value: true,
                message: "Host name is required",
              },
            })}
          />
          <label>
            {errors.hostName?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.hostName.message}
              </span>
            )}
          </label>
        </div>

        <div>
          <label>Start time</label>
          <input
            type="time"
            className="border-2 border-indigo-500 w-full rounded-md py-3 px-2"
            {...register("startTime", {
              required: {
                value: true,
                message: "Start time is required",
              },
            })}
          />
          <label>
            {errors.startTime?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.startTime.message}
              </span>
            )}
          </label>
        </div>

        <div>
          <label>Start date</label>
          <input
            type="date"
            className="border-2 border-indigo-500 w-full rounded-md py-3 px-2"
            {...register("startDate", {
              required: {
                value: true,
                message: "Start date is required",
              },
            })}
          />
          <label>
            {errors.startDate?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.startDate.message}
              </span>
            )}
          </label>
        </div>

        <div>
          <label>End time</label>
          <input
            type="time"
            className="border-2 border-indigo-500 w-full rounded-md py-3 px-2"
            {...register("endTime", {
              required: {
                value: true,
                message: "End time is required",
              },
            })}
          />
          <label>
            {errors.endTime?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.endTime.message}
              </span>
            )}
          </label>
        </div>

        <div>
          <label>End date</label>
          <input
            type="date"
            className="border-2 border-indigo-500 w-full rounded-md py-3 px-2"
            {...register("endDate", {
              required: {
                value: true,
                message: "End time is required",
              },
            })}
          />
          <label>
            {errors.endDate?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.endDate.message}
              </span>
            )}
          </label>
        </div>

        <div>
          <label>Location time</label>
          <input
            className="border-2 border-indigo-500 w-full rounded-md py-3 px-2"
            {...register("location", {
              required: {
                value: true,
                message: "Location is required",
              },
            })}
          />
          <label>
            {errors.location?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.location.message}
              </span>
            )}
          </label>
        </div>

        <div>
          <label>Event photo</label>
          <input
            type="file"
            placeholder="Last name"
            className="border-2 border-indigo-500 w-full rounded-md py-2 px-2"
            {...register("eventPhoto", {
              required: {
                value: true,
                message: "Event Photo is required",
              },
            })}
          />
          <label>
            {errors.eventPhoto?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.eventPhoto.message}
              </span>
            )}
          </label>
        </div>

        <Link
          to="/event"
          className="font-bold max-w-xs rounded-md my-4 py-3 btn-css"
        >
          <input value="Next" type="submit" />
        </Link>
      </form>
    </div>
  );
};

export default CreateEvent;
