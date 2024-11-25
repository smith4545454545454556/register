import React, { useEffect, useState } from 'react'
import { roles } from '../data/role'
import { handleSubmitForm } from '../api/register'

const Form = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        profilePic: "",
        role: ""
    })

    const handleName = (e) => {
        e.preventDefault()
        setFormState((prev) => ({ ...prev, name: e.target.value }))
    }
    const handleEmail = (e) => {
        e.preventDefault()

        setFormState((prev) => ({ ...prev, email: e.target.value }))
    }
    const handlePassword = (e) => {
        e.preventDefault()

        setFormState((prev) => ({ ...prev, password: e.target.value }))
    }
    const handleProfilePic = (e) => {
        e.preventDefault()

        const profileFile = e.target.files[0]
        setFormState((prev) => ({ ...prev, profilePic: profileFile }))
    }
    const handleRoles = (e) => {
        e.preventDefault()

        setFormState((prev) => ({ ...prev, role: e.target.value }))
    }

    const handleFormSubmit = async (e) => {
        console.log("submitted")
        console.log(formState.name)
        e.preventDefault()
        const formData = new FormData()

        formData.append("name", formState.name)

        formData.append("email", formState.email)
        formData.append("password", formState.password)
        formData.append("role", formState.role)
        formData.append("profile", formState.profilePic)


        const respone = await handleSubmitForm({ name: "sjfljds" })
        console.log(respone, "the backend response")


    }



    useEffect(() => {
        console.log(formState)
    }, [formState])
    return (
        <div>
            <h1>registerForm</h1>
            <form onSubmit={handleFormSubmit} encType='multipart/form-data'>
                <label>name</label>
                <input type='text' onChange={handleName} />
                <label>email</label>
                <input type='email' onChange={handleEmail} />
                <label>password</label>
                <input type='password' onChange={handlePassword} />
                <label>role</label>
                <select value={formState.role} onChange={handleRoles}>
                    <option value="">select roles</option>
                    {roles.map((role) => (
                        <option value={role.name}>{role.name}</option>
                    ))}
                </select>
                <label>profile</label>
                <input type='file' name='profile' onChange={handleProfilePic} />
                <button type='submit'>submit</button>

            </form>

        </div>
    )
}

export default Form
// import React from 'react'

// const Form = () => {
//   return (
//     <div>Form</div>
//   )
// }

// export default Form