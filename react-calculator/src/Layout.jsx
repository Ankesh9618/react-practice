import Button from "./Button";
import InputDisplay from "./InputDisplay";

function Layout(){
let expression = ""

return(
    <>
        <div className="calcy">
        <InputDisplay></InputDisplay>
        <div className="calcyInput">
        

            <Button valueHolder = "1"></Button>
            <Button valueHolder = "2"></Button>
            <Button valueHolder = "3"></Button>
            <Button valueHolder = "+"></Button>
            <Button valueHolder = "4"></Button>
            <Button valueHolder = "5"></Button>
            <Button valueHolder = "6"></Button>
            <Button valueHolder = "-"></Button>
            <Button valueHolder = "7"></Button>
            <Button valueHolder = "8"></Button>
            <Button valueHolder = "9"></Button>
            <Button valueHolder = "*"></Button>
            <Button valueHolder = "."></Button>
            <Button valueHolder = "0"></Button>
            <Button valueHolder = "="></Button>
            <Button valueHolder = "/"></Button>
        </div>
        </div>
    </>
)
}

export default Layout;