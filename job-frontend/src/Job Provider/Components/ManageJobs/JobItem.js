// import classes from "./JobItem.module.css";
// import { Button } from "react-bootstrap";
import axios from "axios";

import Config from "../../../config/Config.json";
const JobItem = (props) => {
  const editButtonHandler = () => {
    axios
      .get(`${Config.SERVER_URL + "provider/jobs/" + props.jobInfo._id}`, {
        headers: {
          Authorization: "Bearer " + props.token,
        },
      })

      .then((res) => {
        props.onEdit(res.data.job);
      })
      .catch((err) => console.log(err));
    // props.onEdit(props.jobInfo);
  };
  const deleteButtonHandler = () => {
    props.onDelete(props.jobInfo._id);
  };
  return (
    <tr className="text-[#808080] hover:bg-[#0000001f] border-2" key={props.jobInfo._id}>
      <td className="px-4 py-3 whitespace-nowrap">{props.jobInfo.title}</td>
      <td className="px-4 py-3 whitespace-nowrap">{props.jobInfo.description}</td>
      <td className="px-4 py-3 whitespace-nowrap">{props.jobInfo.category}</td>
      <td className="px-4 py-3 whitespace-nowrap">{props.jobInfo.startDate}</td>
      <td className="px-4 py-3 whitespace-nowrap">{props.jobInfo.endDate}</td>
      <td className="flex gap-3 px-4 py-3 ">
        <button
          className="w-[100px] flex gap-2 items-center border-2 hover:border-green-700 hover:bg-[#18f97d39] hover:text-green-700  p-2 rounded-lg transition-all ease-in-out text-lg"
          onClick={editButtonHandler}
        >
          <span>
            <i className="bi bi-pencil-fill text-md"></i>
          </span>
          <span>Edit</span>
        </button>
        <button
          className="w-[100px] flex gap-2 items-center border-2 hover:border-red-700 hover:bg-[#f918182d] hover:text-red-700  p-2 rounded-lg transition-all ease-in-out text-lg"
          onClick={deleteButtonHandler}
        >
          <span>
            <i className="bi bi-trash"></i>
          </span>
          <span>Delete</span>
        </button>
      </td>
    </tr>
  );
};

export default JobItem;
