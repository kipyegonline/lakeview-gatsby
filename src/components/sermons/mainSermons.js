import {useContext} from "react"
import {GlobalContext }from "../../context/MainContext"
import AddSermons from "./AddSermons"
import Layout from '../ui/layout/Layout';

function MainSermons(){
    const {sermons}=useContext(GlobalContext)
    console.log(sermons)
    return(
        <Layout>
        <AddSermons/>
        </Layout>
       
    )
}
export default MainSermons;