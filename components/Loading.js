import { Circle } from "better-react-spinkit";

function Loading ()
{
    return (
        <center style={{display: "grid", placeItems: "center", height: "100vh"}}>
            <div>
                <img
                    src="/logo.png"
                    alt=" "
                    style={{ marginBottom: 10, maxHeight: 60 }}
                    height={60}
                />
                <Circle color="#3CBC28" size= {30} />
            </div>
        </center>
    )
}

export default Loading
