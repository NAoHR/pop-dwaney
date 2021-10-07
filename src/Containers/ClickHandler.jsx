import React from "react";
import $ from "jquery";
import { ToastContainer,toast } from "react-toastify";
import { Howl } from "howler";
import 'react-toastify/dist/ReactToastify.css';
const {Provider,Consumer} = React.createContext();
class ClickHandler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter : Number(document.cookie) || 0
        }
        this.dwayneSound = new Howl({
            src : ["AudioFile/dwayneAudio.mp3"],
            html: true,
            format: ['mp3', 'aac']
        });
    }
    componentDidMount(){
        $("#after").css({
            "display" : "none"
        })
        const thisforJquery = this;
        document.onkeydown = function(e) {
            if(e.keyCode == 123) {
                return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
                return false;
            }
            if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
                return false;
            }
            if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
                return false;
            }
        }
        let counter = 0;
        let mouseDown = "";
        let touchStart = "";
        $("body").on("touchstart mousedown",function(e){
            counter +=1;
            if(counter == 1){
                touchStart = e.type == "touchstart";
                mouseDown = e.type == "mousedown";
                if(touchStart){
                    $(this).off("mousedown")
                }
            }
            thisforJquery.dwayneSound.rate(1.3,thisforJquery.dwayneSound.play());
            thisforJquery.setState({
                counter : thisforJquery.state.counter + 1
            });
            document.cookie = thisforJquery.state.counter
            $("#after").css({
                "display" : "inline-block"
            });
            $("#before").css({
                "display" : "none"
            })
            switch(thisforJquery.state.counter){
                case 100:
                    toast.success("sussy baka 👉👈",{theme : "colored"});
                    break;
                case 1000:
                    toast.success("i see youu,you little baka oniichan impostor",{theme : "colored"});
                    break;
                case 10000:
                    toast.success("stop there you little gay boy",{theme : "colored"});
                    break;
                case 10000:
                    toast.success("pwease stab me sussy baka oniichan",{theme : "colored"});
                    break;
                default:
                    return "";
            }
        }).bind("touchend mouseup",function(e){
            $("#after").css({
                "display" : "none"
            });
            $("#before").css({
                "display" : "inline-block"
            })
        })
    }
    render(){
        return (
            <Provider value={this.state.counter}>
                    {this.props.children}
                    <ToastContainer />
            </Provider>
        )
    }
}
export {Consumer};
export default ClickHandler;
