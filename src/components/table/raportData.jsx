import React from "react";
import { useHistory } from "react-router";
import TimerCount from "../utils/timerCount";
import PropTypes from "prop-types";
import Executor from "../layout/ui/executor";
const RaportData = ({ data, executor }) => {
    // console.log(data);
    // const RaportData = ({ typeDoc }) => {
    const history = useHistory();
    const returnTable = () => {
        history.replace("/");
    };
    const time = TimerCount(data.periodOfExecution);
    const num = Number(time.split(" ")[0]);
    const reversString = (string) => {
        return string.split(",").reverse().join(".");
    };
    return (
        <div className="d-flex flex-column align-items-center bg-secondary bg-gradien bg-opacity-10 shadow text-black p-5 m-4">
            <h1>от {data.dateDoc} года</h1>
            <h1>пункт {data.punctDoc}</h1>
            <h1>{data.nameDoc}</h1>
            <h1>{data.typeDoc}</h1>
            <h1>
                <hr />
                инициатор {data.nameInitiator}
            </h1>
            <h1>
                <hr />
                исполнить до {reversString(data.periodOfExecution)} года
            </h1>
            <h1
                style={
                    num < 0
                        ? { color: "tomato", fontSize: "3em" }
                        : { color: "grey" }
                }
            >
                до исхода осталось: {time}
            </h1>
            <h1>
                {/* исполнитель: */}
                <hr />
                <Executor
                    id={data.nameExecutor}
                    executor={executor}
                    keys={data.id}
                    // style={{ fontSize: "60px" }}
                />
                <hr />
            </h1>
            {/* {data.nameExecutor.map((e) => (
                <>
                    <h1 key={e.id}>{e}</h1>
                </>
            ))} */}

            <h4>{data.executionOrder}</h4>
            <button onClick={() => returnTable()}>return</button>
        </div>
    );
};
RaportData.propTypes = {
    data: PropTypes.object.isRequired,
    executor: PropTypes.array.isRequired
};
export default RaportData;
