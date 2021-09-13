import axios from "axios";

const URL = "https://limitless-castle-16392.herokuapp.com";

const request = {
    getPeople: axios.get(`${URL}/people`),
	getSkills: axios.get(`${URL}/skills`),
	getProjects: axios.get(`${URL}/projects`),
}

export default request;


