import Redux from 'redux';

const LOAD_ITEMS='loadItems';
const LOAD_ITEMS_SUCCESS='loadItemsSuccess';
const LOAD_ITEMS_ERROR='loadItemsError';

const initialState={
  loaded:false
};

export default function reducer(state=initialState, action={})
{

  switch (action.type)
  {
    case LOAD_ITEMS :
          return {
            ...state,
            loading:true,
            data:null,
            loaded:false
          };
    case LOAD_ITEMS_SUCCESS:
          return {
            ...state,
            loading:false,
            loaded:true,
            data:action.data,
            error:null
          };

    case LOAD_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.widgets && globalState.widgets.loaded;
}

export function loadItems()
{
  return {
    type:LOAD_ITEMS
  }
}

export function loadItemsSuccess(data)
{
  return{
    type:LOAD_ITEMS_SUCCESS,
    data:data
  };
}

export function loadItemsError(error)
{
  return{
    type:LOAD_ITEMS_ERROR,
    error:error
  }
}

export function fetchItems() {
  return dispatch=>
  {
    dispatch(loadItems());
    // make your api call/ async stuff here
    // we use setTimeout for faking async behaviour here
    setTimeout(function(){
      var items = ['Foo', 'Bar', 'Lorem'];
      dispatch(loadItemsSuccess(items));
      // on error
      // ItemActions.loadItemsError('an error occured');
    },500);
  };
}