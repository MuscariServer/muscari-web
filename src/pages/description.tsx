import {config} from "../config";
import React, {ReactElement} from "react";

export default function Description() {
    return (
        <div className="Component" id="about">
            <h1 style={{
                textAlign: "center",
                paddingTop: "150px",
                fontWeight: "lighter",
                lineHeight: '90px',
                fontSize: "50px",
            }}>
                {config.about}
            </h1>
            <div style={{
                fontWeight: "lighter",
                lineHeight: '90px',
                fontSize: "30px",
                margin: "200px"
            }}>
                {(() => {
                    const items: Array<ReactElement> = [];
                    config.description.forEach((string) => {
                        items.push(<>{string}<br/></>)
                    });
                    return <>{items}</>
                })()}
            </div>
        </div>
    )
}