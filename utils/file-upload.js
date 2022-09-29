const readFileAsync = (file) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader(); //this for convert to Base64

    reader.onload = () => {
      resolve(reader.result.split(",")[1]); //extract only thee file data part
    };

    reader.onerror = reject;
    reader.readAsDataURL(file); //start conversion...
  });
};

const sendToDrive = async (data) => {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbz7AjfF5FMq7X3qL4ycCZMwYkeArhuN4E7rQzQpbzmDQZBm0GphfLDimgIYAHoYHrUw/exec", //your AppsScript URL
    { method: "POST", body: JSON.stringify(data) }
  ); //send to Api
  return response.json();
};

export const UploadFile = async (file) => {
  const rawLog = await readFileAsync(file);
  var dataSend = {
    dataReq: { data: rawLog, name: file.name, type: file.type },
    fname: "uploadFilesToGoogleDrive",
  }; //preapre info to send to API
  const response = await sendToDrive(dataSend);
  return response.url;
};
