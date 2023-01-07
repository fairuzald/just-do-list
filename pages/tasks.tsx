import Layout from "../components/layout";

import React, { useState } from "react";
import SubTask from "../components/subtask";

export default function Tasks() {
  // Khusus bagian icon
  const homeIcon = () => {
    return (
      <svg
        className="fill-white w-[2.2vh] sm:w-[3.5vh] m-auto opacity-80 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
      </svg>
    );
  };

  const starLineIcon = () => {
    return (
      <svg
        className="fill-white w-[1.8vh] sm:w-[2.45vh] m-auto opacity-80 hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
      </svg>
    );
  };

  const starFullIcon = () => {
    return (
      <svg
        className="fill-white  w-[1.8vh] sm:w-[2.45vh] m-auto opacity-80 hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
      </svg>
    );
  };

  const plusIcon = (rotate: string) => {
    return (
      <svg
        className={`${rotate} fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] h-[1.8vh] sm:h-[2.45vh] m-auto cursor-pointer`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
    );
  };

  const checkIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] hover:opacity-100"
        viewBox="0 0 512 512"
      >
        <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
      </svg>
    );
  };

  const circleCheckIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
      </svg>
    );
  };

  const circleIcon = (colorHover: string) => {
    return (
      <svg
        className={`fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] hover:fill-[${colorHover}]`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
      </svg>
    );
  };

  const trashIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] h-[1.8vh] sm:h-[2.45vh] m-auto hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
      </svg>
    );
  };

  const renameIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] h-[1.8vh] sm:h-[2.45vh] m-auto hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
      </svg>
    );
  };
  const saveIcon = () => {
    return (
      <svg
        className="fill-white opacity-80 w-[1.8vh] sm:w-[2.45vh] h-[1.8vh] sm:h-[2.45vh] m-auto hover:fill-[#54A1EA]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 416c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
      </svg>
    );
  };
  type ObjectTask = {
    title: string;
    id: string;
  };

  // Khusus bagian variabel kerja
  const uniqid = require("uniqid"); //Ini buat generate id dari npm
  const [addTaskInputShow, setAddTaskInputShow] = useState(false);
  const [taskDone, setTaskDone] = useState(false);
  const [important, setImportant] = useState(false);
  const [subTaskPreview, setSubTaskPreview] = useState(false);
  const [dropDownFinished, setDropDownFinished] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState<ObjectTask[]>([]);
  const [taskEdit, setEditTask] = useState<ObjectTask>({ title: "", id: "" });

  function addTask() {
    if (addTaskInputShow) {
      if (taskTitle === "") {
      } else {
        setTasks([
          ...tasks,
          {
            id: uniqid("task_"),
            title: taskTitle,
          },
        ]);
        setTaskTitle("");
      }
      setAddTaskInputShow(false);
    } else {
      setAddTaskInputShow(true);
      setTaskTitle("");
    }
  }

  function handleDelete(idTask: string) {
    setTasks(
      tasks.filter(function (task) {
        return task.id != idTask;
      })
    );
  }

  function handleEdit(task: { title: string; id: string }) {
    setEditTask(task);
    setAddTaskInputShow(false);
    setTaskTitle(task.title);
  }

  function handleSave(i: number) {
    if (taskTitle == "") {
      tasks[i].title = "New Task";
    } else {
      tasks[i].title = taskTitle;
    }
    setTasks([...tasks]);
    setEditTask({ id: "", title: "" });
    setTaskTitle("");
    setAddTaskInputShow(false)
  }
  return (
    <>
      <Layout>
        <div className="flex flex-1">
          <div className="flex flex-col flex-1 py-[2vh] lg:p-[3.8vh] px-[3.4vh] gap-1">
            <div className="flex  items-center gap-x-3">
              <span>{homeIcon()}</span>
              <p className="font-semibold text-[2.5vh] sm:text-[3.8vh]">
                Tasks{" "}
              </p>
            </div>

            <div
              className="flex flex-1 flex-col my-3 overflow-y-scroll"
              id="no-scrollbar"
            >
              {tasks.map((task, index) => (
                <div
                  key={task.id}
                  className="flex bg-[#424242] hover:opacity-80 duration-200 p-[1.4vh] cursor-pointer mb-[1.47vh] "
                >
                  <div className="flex flex-1 items-center justify-center mx-[1vw] gap-3">
                    {taskDone ? (
                      <span
                        onClick={() => {
                          setTaskDone(false);
                        }}
                      >
                        {circleCheckIcon()}
                      </span>
                    ) : (
                      <span
                        onClick={() => {
                          setTaskDone(true);
                        }}
                      >
                        {circleIcon("#54A1EA")}
                      </span>
                    )}
                    {/* Ternary */}
                    {taskEdit === task ? (
                      <>
                        <input
                          type="text"
                          className="w-full outline-none bg-[#3d3d3d] bg-opacity-50 gap-x-40"
                          placeholder="New Task"
                          defaultValue={task.title}
                          onChange={(event) => {
                            setTaskTitle(event.target.value);
                          }}
                        />
                        <button
                          onClick={() => {
                            handleSave(index);
                          }}
                        >
                          {saveIcon()}
                        </button>
                      </>
                    ) : (
                      <>
                        <p
                          className="flex break-all flex-1 text-[1.5vh] sm:text-[2.25vh] text-justify"
                          onClick={() => {
                            subTaskPreview
                              ? setSubTaskPreview(false)
                              : setSubTaskPreview(true);
                          }}
                        >
                          {task.title}
                        </p>
                        {important ? (
                          <button
                            onClick={() => {
                              setImportant(false);
                            }}
                          >
                            {starLineIcon()}
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setImportant(true);
                            }}
                          >
                            {starFullIcon()}
                          </button>
                        )}
                        <button
                          onClick={() => {
                            handleEdit(task);
                          }}
                        >
                          {renameIcon()}
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(task.id);
                          }}
                        >
                          {trashIcon()}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}

              {/* <div
                onClick={() => {
                  dropDownFinished
                    ? setDropDownFinished(false)
                    : setDropDownFinished(true);
                }}
                className="flex items-center gap-1 bg-[#424242] hover:opacity-80 w-fit pl-[0.6vw] pr-[1vw] py-[0.3vh] cursor-pointer mb-[1.47vh]"
              >
                <span>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      !dropDownFinished && "-rotate-90"
                    }`}
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <p className="text-[1.6vh] font-medium sm:text-[2.3vh]">
                  Finished
                </p>
              </div> */}
            </div>

            <div
              className={`${(taskEdit.id!=="" && taskEdit.title!=="") && "cursor-not-allowed"} bg-[#424242] opacity-100 flex p-[1.5vh] hover:opacity-80 `}
              onClick={() => {
                !addTaskInputShow && setAddTaskInputShow(true);
              }}
            >
              <div className="flex flex-1 px-[1.5vw] gap-4 ">
                <div className="m-auto">
                  {addTaskInputShow &&
                  taskEdit.id === "" &&
                  taskEdit.title === ""
                    ? circleIcon("none")
                    : plusIcon(`rotate-0 cursor-${(taskEdit.id!=="" && taskEdit.title!=="")?"not-allowed":"default"}`)}
                </div>
                <input
                  className={`${(taskEdit.id!=="" && taskEdit.title!=="" )&&"caret-transparent cursor-not-allowed"} flex-1 outline-none w-[8vw] font-medium text-[1.5vh] sm:text-[2.2vh] bg-transparent placeholder:text-white placeholder:opacity-70`}
                  placeholder="Add New Task"
                  value={
                    taskEdit.id === "" && taskEdit.title === "" ? taskTitle : ""
                  }
                  onChange={(event) => {
                    setTaskTitle(event.target.value);
                  }}
                />
                {addTaskInputShow &&
                  taskEdit.id === "" &&
                  taskEdit.title === "" && (
                    <div
                      className="m-auto cursor-pointer"
                      onClick={() => {
                        addTask();
                      }}
                    >
                      {taskTitle === ""
                        ? plusIcon("rotate-45 hover:opacity-100")
                        : checkIcon()}
                    </div>
                  )}
              </div>
            </div>
          </div>
          {subTaskPreview && <SubTask />}
        </div>
      </Layout>
    </>
  );
}
