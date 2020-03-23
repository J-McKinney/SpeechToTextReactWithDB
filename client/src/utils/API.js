import axios from "axios";

export default {
  // Gets all speechs
  getSpeeches: function() {
    return axios.get("/api/speeches");
  },
  // Gets the speech with the given id
  getSpeech: function(id) {
    return axios.get("/api/speeches/" + id);
  },
  // Deletes the speech with the given id
  deleteSpeech: function(id) {
    return axios.delete("/api/speeches/" + id);
  },
  // Saves a speech to the database
  saveSpeech: function(speechData) {
    return axios.post("/api/speeches", speechData);
  }
};
