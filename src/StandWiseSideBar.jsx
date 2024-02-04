// import styles from "./styles.module.css"
// import { useStateContext } from "./context/Context";
import { useGlobalContext } from "./Context/PreviewContext";

function StandWiseSideBar(props) {
    const { stands, currentStandSelection, setCurrentStandSelection } = useGlobalContext();

    console.log("stands", stands)
    console.log("Current selection", currentStandSelection)
    
    function hoverColor (){

    }
    return (
        <div style={{ textAlign: "center", marginTop: "40px", marginLeft: "10px"}}>
            <h5 style={{ marginLeft: currentStandSelection?"10px":"150px" }}>STAND-{currentStandSelection?currentStandSelection:null}</h5>
            <hr style={{ width: "30vw" }} />
            {/* {props.workspaces.forEach(element => {
                <li>element.company_id</li>
            });} */}
            <div style={{height: "80vh", width:"30vw", overflowY:"scroll"}}>
            <ul style={{ textDecoration: "none", marginTop: 20, lineHeight: "35px" }}>
                {stands ? (
                Object.keys(stands).map((item) => {
                    return (
                    item === "" ? (
                        <li onClick={() => setCurrentStandSelection("Unknown Stand")} style={{ cursor: "pointer" }}>Unknown</li>
                    ) : (
                        <li onClick={() => setCurrentStandSelection(item)} style={{ cursor: "pointer" }}>{item}</li>
                    )
                    );
                })
                ) : null}
            </ul>
            </div>

        </div>
    );
}


export default StandWiseSideBar;