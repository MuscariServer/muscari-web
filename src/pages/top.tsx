import {config} from "../config";

export default function Top() {
    return (
        <div className="Component Background-Skybees" id="top">
            <h1 style={{
                textAlign: "center",
                paddingTop: "400px",
                lineHeight: '90px',
                fontSize: "75px",
                marginBottom: '75px',
            }}>
                {config.title}
            </h1>
            <h3 style={{
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: '90px',
                fontSize: "30px",
                marginBottom: '75px',
            }}>
                {config.subtitle}
            </h3>
        </div>
    )
}