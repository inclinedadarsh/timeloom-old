import axios from "axios";

const logout = async () => {
	try {
		await axios.get("/api/users/logout");
	} catch (error) {
		throw new Error(error);
	}
};

export default logout;
