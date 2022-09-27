import { useState } from "react";

async function UploadFile(e) {
  // const [fileUrl, setFileUrl] = useState("");
  let fileUrl; //the file
  let fileDataG;
  var file = e.target.files[0]; //the file
  var reader = new FileReader(); //this for convert to Base64

  async function fetchData(dataSend) {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz7AjfF5FMq7X3qL4ycCZMwYkeArhuN4E7rQzQpbzmDQZBm0GphfLDimgIYAHoYHrUw/exec", //your AppsScript URL
        { method: "POST", body: JSON.stringify(dataSend) }
      ); //send to Api
      const fileData = response.json();
      return fileData;
    } catch (error) {
      console.log(error);
    }
  }

  // async function getReader() {
  reader.readAsDataURL(e.target.files[0]); //start conversion...
  reader.onload = async function () {
    //.. once finished..
    var rawLog = reader.result.split(",")[1]; //extract only thee file data part
    var dataSend = {
      dataReq: { data: rawLog, name: file.name, type: file.type },
      fname: "uploadFilesToGoogleDrive",
    }; //preapre info to send to API

    const fileData = await fetchData(dataSend);
    console.log(fileData);
    return fileData;
  };
  // }

  console.log(fileUrl);
  //   do {
  //     console.log(fileData);
  //   } while (fileData !== null);
}

export default UploadFile;
