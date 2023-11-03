import axios from "axios"

export const authenticate = async (username: string, password: string) => {
    try {
        let authObject = {
            email: username,
            password: password
        }

        let result = await axios({
            method: 'POST',
            url: `https://reqres.in/api/login`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: authObject,
        })
        if (result) {
            return result
        }
    } catch (error) {
        console.log(error)
    }
}