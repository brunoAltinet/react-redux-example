import Redux from 'redux';

const LOAD_EXPENSE_LIST = 'loadExpenseList';
const LOAD_EXPENSE_LIST_SUCCESS = 'loadExpenseListSuccess';
const LOAD_EXPENSE_LIST_ERROR = 'loadExpenseListError';
const EXPENSE_SUBMIT = "expenseSubmit";


const initialState = {
    loaded: false,
    state: listData
};


export default function reducer(state = initialState, action = {}) {

    switch (action.type) {
        case LOAD_EXPENSE_LIST :
            return {
                ...state,
                loading: true,
                loaded: false
            };
        case LOAD_EXPENSE_LIST_SUCCESS:

            return {
                ...state,
                loading: false,
                loaded: true,
                data: !state.data ? [...action.data] : [...state.data],
                error: null
            };

        case LOAD_EXPENSE_LIST_ERROR:
            return {
                ...state,
                loading: false,
                loaded: false,
                data: null,
                error: action.error
            };
        case EXPENSE_SUBMIT:
            if (!action.data)
                return state;
            var newdata = action.data;
            var filt = state.data.filter(x=>x.id == newdata.id);
            var olddata = {};
            if (filt.length > 0)
                olddata = filt[0]
            newdata = {...olddata, ...newdata};
            var list = [];
            var pushed = false;
            var id = 0;
            state.data.forEach(x=> {
                if (x.id != newdata.id) {
                    list.push(x);
                    if (id <= x.id)
                        id = x.id;
                }
                else {
                    list.push(newdata);
                    pushed = true;
                }
            });
            if (!pushed) {
                newdata.id = id+1;
                list.push(newdata);
            }

            return {
                ...state,
                data: list
            }
        default:
            return state;
    }
}

export function isLoaded(globalState) {
    return globalState.widgets && globalState.widgets.loaded;
}

export function loadExpenseList() {
    return {
        type: LOAD_EXPENSE_LIST
    }
}

export function loadExpenseListSuccess(data) {
    return {
        type: LOAD_EXPENSE_LIST_SUCCESS,
        data: data
    };
}

export function loadExpenseListError(error) {
    return {
        type: LOAD_EXPENSE_LIST_ERROR,
        error: error
    }
}
export function submitExpense(data) {
    return {
        type: EXPENSE_SUBMIT,
        data: data
    }
}

export function fetchExpenseList() {
    return dispatch=> {
        dispatch(loadExpenseList());
        // make your api call/ async stuff here
        // we use setTimeout for faking async behaviour here
        setTimeout(function () {
            var expenseList = listData;
            dispatch(loadExpenseListSuccess(expenseList));
            // on error
            // ItemActions.loadExpenseListError('an error occured');
        }, 500);
    };
}

export function renderLog()
{
    return{type:"RENDER_LOG"};
}

var listData =

    [
        {
            "id": 1,
            "nettoValue": "470.29",
            "taxValue": "94.06",
            "bruttoValue": "564.35",
            "age": 39,
            "firstName": "Palmer",
            "lastName": "Dyer",
            "company": "ORBIN",
            "email": "palmer.dyer@orbin.com",
            "phone": "+1 (895) 521-3487",
            "address": "342 Arkansas Drive, Marshall, New Jersey, 9203"
        },
        {
            "id": 2,
            "nettoValue": "283.42",
            "taxValue": "56.68",
            "bruttoValue": "340.10",
            "age": 37,
            "firstName": "Perry",
            "lastName": "Kelly",
            "company": "FURNIGEER",
            "email": "perry.kelly@furnigeer.co.uk",
            "phone": "+1 (963) 489-3665",
            "address": "380 Mill Street, Sisquoc, West Virginia, 2296"
        },
        {
            "id": 3,
            "nettoValue": "820.78",
            "taxValue": "164.16",
            "bruttoValue": "984.94",
            "age": 36,
            "firstName": "Hull",
            "lastName": "Travis",
            "company": "BLURRYBUS",
            "email": "hull.travis@blurrybus.name",
            "phone": "+1 (966) 460-2035",
            "address": "757 Barlow Drive, Saticoy, District Of Columbia, 2448"
        },
        {
            "id": 4,
            "nettoValue": "216.76",
            "taxValue": "43.35",
            "bruttoValue": "260.11",
            "age": 31,
            "firstName": "Fisher",
            "lastName": "Roth",
            "company": "FORTEAN",
            "email": "fisher.roth@fortean.biz",
            "phone": "+1 (908) 592-2924",
            "address": "178 Hopkins Street, Blende, Alaska, 3271"
        },
        {
            "id": 5,
            "nettoValue": "649.56",
            "taxValue": "129.91",
            "bruttoValue": "779.47",
            "age": 27,
            "firstName": "Hyde",
            "lastName": "Kennedy",
            "company": "SENMAO",
            "email": "hyde.kennedy@senmao.net",
            "phone": "+1 (964) 445-2675",
            "address": "145 Fayette Street, Barclay, Arizona, 2684"
        },
        {
            "id": 6,
            "nettoValue": "148.38",
            "taxValue": "29.68",
            "bruttoValue": "178.06",
            "age": 29,
            "firstName": "Franks",
            "lastName": "Michael",
            "company": "EYEWAX",
            "email": "franks.michael@eyewax.info",
            "phone": "+1 (895) 534-3404",
            "address": "813 Lester Court, Warren, Colorado, 7734"
        },
        {
            "id": 7,
            "nettoValue": "127.91",
            "taxValue": "25.58",
            "bruttoValue": "153.49",
            "age": 28,
            "firstName": "Buckley",
            "lastName": "Parker",
            "company": "GEEKETRON",
            "email": "buckley.parker@geeketron.org",
            "phone": "+1 (962) 537-3706",
            "address": "473 Porter Avenue, Independence, Idaho, 6677"
        },
        {
            "id": 8,
            "nettoValue": "665.7",
            "taxValue": "133.14",
            "bruttoValue": "798.84",
            "age": 20,
            "firstName": "Tabitha",
            "lastName": "Goodwin",
            "company": "COMTEXT",
            "email": "tabitha.goodwin@comtext.io",
            "phone": "+1 (921) 553-2275",
            "address": "346 Delevan Street, Haring, Rhode Island, 8895"
        },
        {
            "id": 9,
            "nettoValue": "98.4",
            "taxValue": "19.68",
            "bruttoValue": "118.08",
            "age": 36,
            "firstName": "Valenzuela",
            "lastName": "Nichols",
            "company": "MAXIMIND",
            "email": "valenzuela.nichols@maximind.tv",
            "phone": "+1 (834) 552-2266",
            "address": "474 Greenwood Avenue, Worton, Michigan, 1507"
        },
        {
            "id": 10,
            "nettoValue": "554.58",
            "taxValue": "110.92",
            "bruttoValue": "665.50",
            "age": 24,
            "firstName": "Jacqueline",
            "lastName": "Walton",
            "company": "ZAYA",
            "email": "jacqueline.walton@zaya.biz",
            "phone": "+1 (850) 504-3712",
            "address": "916 Halsey Street, Inkerman, Mississippi, 453"
        }
    ];