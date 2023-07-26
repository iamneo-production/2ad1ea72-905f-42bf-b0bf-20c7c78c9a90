export const uploadToCloudinary = async (pics) => {
  if (pics) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "sociogram");
    data.append("cloud_name", "dybo4pw89");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dybo4pw89/image/upload",
      {
        method: "post",
        body: data,
      }
    );

    const fileData = await res.json();
    console.log("fileData:", fileData);

    if (fileData && fileData.url) {
      console.log("url:", fileData.url.toString());
      return fileData.url.toString();
    } else {
      console.log("Error: Unable to get URL from response.");
      return null; // or handle the error case as needed
    }
  } else {
    console.log("Error: No picture provided.");
    return null; // or handle the error case as needed
  }
};
