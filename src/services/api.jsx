import axios from 'axios'

const endpoint = "http://localhost:3000/"

export const contactAPI = (data, hideSpinner) =>{
    axios.post(`${endpoint}send-email`, { data })
      .then(res => {
        alert("Thank you for contacting. We will get in touch with you soon")
        hideSpinner()
      }).catch(err=>{
        alert("Unable to send the email. Please try again later")
        hideSpinner()
        console.log(err)
      })
}