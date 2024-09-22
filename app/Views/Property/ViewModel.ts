import { ACTION_TYPE_ONE, ACTION_TYPE_TWO } from "../../actions/actions";
import { useStateContext } from "../../context/Context";

export default function usePropertyViewModel() {
  const { state, dispatch } = useStateContext();

  const handleUpdatePropertyOne = () => {
    dispatch({
      type: ACTION_TYPE_ONE,
      payload: state.propertyOne - 100,
    });
  };

  const handleUpdatePropertyTwo = () => {
    dispatch({
      type: ACTION_TYPE_TWO,
      payload: state.propertyTwo + 100,
    });
  };

  return {
    state,
    handleUpdatePropertyOne,
    handleUpdatePropertyTwo,
  };
}
