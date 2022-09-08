import React, { useState } from "react";
import axios from "axios";

function RestAPI() {
    const [text, setText] = useState([]);

    return(
        <>
        <h1>REST API 연습</h1>
        <div className="btn-primary space-x-4">
            <button
                className="w-[10vw] bg-blue-300"
                onClick={() => {
                    axios
                    .post("http://127.0.0.1:8000/list/", {
                        title: "제목",
                        content: "내용",
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }}
            >
            POST
            </button>
            <button
                className="w-[10vw] bg-red-300"
                onClick={() => {
                    axios
                    .get("http://127.0.0.1:8000/list/")
                    .then((response) => {
                        setText([...response.data]);
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }}
            >
            GET
            </button>
        </div>
        {text.map((e) => (
            <div>
            {" "}
            <div className="list">
                <span>
                {e.id}번, {e.title}, {e.content}, {e.update_at}
                </span>
                <button
                className="btn-delete"
                onClick={() => {
                    axios.delete(`http://127.0.0.1:8000/list/${e.id}`);
                    setText(text.filter((text) => text.id !== e.id));
                }}
                >
                DELETE
                </button>{" "}
            </div>
            </div>
        ))}
        </>
    )
}

export default RestAPI