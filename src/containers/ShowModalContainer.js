import { connect } from "react-redux";
import {setIsLoading} from "../actions"
import ShowModal from "../components/ShowModal"


function mapDispatchToProps(dispatch){
  return{
    setIsLoading: function(isLoading){
      let action = setIsLoading(isLoading);
      dispatch(action);
    }
  }
}

const ShowModalContainer = connect(mapDispatchToProps)(ShowModal);
export default ShowModalContainer
