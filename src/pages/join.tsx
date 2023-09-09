import {config} from "../config";

export default function Join() {
    return (
        <div className="Component Background-Lobby" id="join">
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "auto"
            }} className="PaddingTop">
                <a className="JoinButton" href={config.discord}>
                    {config.join}
                </a>
            </div>
        </div>
    )
}