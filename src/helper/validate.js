import toast from 'react-hot-toast'


/**validate login page username */
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    return errors;
}

/**validate password */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);
    
    return errors;
}

/**validate search */
export async function searchValidate(values){
        const errors = searchMovie({}, values)
        return errors;

}

export async function waitlistValidate(values){
    const errors = waitlistForm({}, values)
    return errors;
}


/**validate password */
function passwordVerify(errors={}, values){
     const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!values.password) {
        errors.password = toast.error("Password Required")
    } else if (values.password.includes(" ")){
        errors.password = toast.error('Wrong password')
    } else if(values.password.length < 4) {
        errors.password = toast.error("Password too short")
    } else if(!specialChars.test(values.password)){
        errors.password = toast.error('Password must include a special character')
    }

    return errors;
}


/**validate username */
function usernameVerify(error = {}, values){
    if (!values.username) {
        error.username = toast.error('Username required')
    } else if(values.username.includes(" ")) {
        error.username = toast('Invalid username')
    }

    return error;
}

/**validate Search */

function searchMovie(error = {}, values){
    if(!values.search) {
        error.search = toast.error('No values entered in search')
    } else if(values.search.includes("")) {
        error.search = toast.success('Fetching results...')
    }
}


/**Validate Waitlist form */
function waitlistForm(error = {}, values) {
  if (!values.name) {
    error.name = toast.error("Name please");
  } else if (!values.email) {
    error.email = toast.error("Email Please");
  }
  else {
    error.email = toast.success("Be Prepared for Launch")
  }
}
