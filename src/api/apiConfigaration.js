import axios from "axios";

axios.defaults.baseURL="http://localhost:5000/";

const token = JSON.parse(localStorage?.getItem("persist:auth"))?.token || "";


class ApiCofigaration{
    constructor(){
        this.post = async (endpoint, data) => {
            try {
              const res = await axios.post(endpoint, data, {
                headers: { Authorization: token ? `Bearer ${JSON.parse(token)}` : "" },
              });
              return res.data;
            } catch (error) {
              console.log(error);
            }
          };

        this.put = async (endpoint, id, data)=>{
            try {
                const res = await axios.put(endpoint+id, {...data}, {headers:{Authorization: token?`Bearer${JSON.parse(token)}`:""}});
                return res;
            } catch (error) {
                console.log(error);
            }
        }

        this.delete = async (endpoint, id) => {
            try {
              const res = await axios.delete(endpoint + id, {
                headers: { Authorization: token ? `Bearer ${JSON.parse(token)}` : "" },
              });
              return res.data;
            } catch (error) {
              console.log(error);
            }
          };
      
          this.fileUpload = async (data) => {
            try {
              var formData = new FormData();
              formData.append("file", data);
              const res = await axios.post("/file-upload", formData, {
                headers: {
                  Authorization: token ? `Bearer ${JSON.parse(token)}` : "",
                  "Content-Type": "multipart/form-data",
                },
              });
              return res.data;
            } catch (error) {
              console.log(error);
            }
          };
    }
}

 export const api = new ApiCofigaration();