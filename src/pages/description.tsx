import {config} from "../config";
import React, {ReactElement} from "react";

export default function Description() {
    return (
        <div className="Component" id="about">
            <h1 style={{
                textAlign: "center",
                paddingTop: "150px",
                lineHeight: '90px',
                fontSize: "50px",
            }}>
                {config.about}
            </h1>
            <div style={{
                lineHeight: '90px',
                fontSize: "clamp(16px, 1.5vw, 32px)",
                margin: "150px"
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