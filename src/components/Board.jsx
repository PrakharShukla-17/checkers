import React from "react";
import "./Board.css";


export default function Board(){
   
    let board=[];
    let rows=8;
    let cols=8;

    for(let i=0;i<rows;i++){
        let row=[];
        for(let j=0;j<cols;j++){
            let color=(i+j)%2?"Black":"White";
            row.push(
                <div key={`${j}-${i}`} className={`${color}`}>
                </div>
            )
        }
        board.push(
            <div key={`${i}`} className="row">
                {row}
            </div>
        )
    }


    return(
        <div className="Board">
            {board}
        </div>
    )
}