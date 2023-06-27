const INITSTATE = {
    account: {
        familyName: '',
        givenName: '',
        Identification: '',
        countryIssue: '',
        Sex: '',
        datOfBirth: '',
        CountryOfBirth: '',
        Passportnumber: '',
        CountryOfPassport: '',
        Qualification: '',
        Institution: '',
        Course: '',
        DateFrom: '',
        DateTo: ''
    },
}
const userReducer = (state = INITSTATE, action) => {
    switch (action.type) {
        case 'FETCH_SAVE_USER':
            return {
                ...state, account: {
                    familyName: action.payload.familyName,
                    givenName: action.payload.givenName,
                    Identification: action.payload.Identification,
                    countryIssue: action.payload.countryIssue,
                    datOfBirth: action.payload.DateOfBirth,
                    Passportnumber: action.payload.passportNumber,
                    CountryOfPassport: action.payload.value,
                }
            };
        case 'FETCH_DEGREE':
            return {
                ...state, account: {
                    familyName: "",
                    givenName: "",
                    Identification: "",
                    datOfBirth: "",
                    Passportnumber: "",
                    CountryOfPassport: "",
                    Qualification: action.payload.Qualification,
                    Institution: action.payload.Institution,
                    Course: action.payload.Course,
                    DateFrom: action.payload.startDate_Clone,
                    DateTo: action.payload.startDateTo_Clone,
                }
            }
        default: return state;
    }
};
export default userReducer
